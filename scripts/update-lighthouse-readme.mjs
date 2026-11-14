
import fs from "node:fs";
import path from "node:path";

const outputDir = path.resolve(".lighthouseci");
const manifestPath = path.join(outputDir, "manifest.json");
const readmePath = path.resolve("README.md");

const START = "<!-- LIGHTHOUSE:START -->";
const END = "<!-- LIGHTHOUSE:END -->";

function fail(message) {
  console.error(`[Lighthouse README] ${message}`);
  process.exit(1);
}

if (!fs.existsSync(manifestPath)) {
  fail(
    `Manifest not found at ${path.relative(process.cwd(), manifestPath)}. ` +
    "Ensure Lighthouse CI uses upload.target='filesystem' and outputDir='.lighthouseci'."
  );
}

let manifest;

try {
  manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
} catch (error) {
  fail(`Could not parse manifest.json: ${error.message}`);
}

if (!Array.isArray(manifest) || manifest.length === 0) {
  fail("manifest.json is empty or does not contain a report array.");
}

const homepageReports = manifest.filter((entry) => {
  if (!entry?.url) return false;

  try {
    return new URL(entry.url).pathname === "/";
  } catch {
    return false;
  }
});

const homepage =
  homepageReports.find((entry) => entry.isRepresentativeRun) ??
  homepageReports[0];

if (!homepage) {
  fail("No homepage report was found in the Lighthouse manifest.");
}

if (!homepage.jsonPath) {
  fail("The homepage manifest entry does not contain a jsonPath.");
}

const reportPath = path.isAbsolute(homepage.jsonPath)
  ? homepage.jsonPath
  : path.resolve(homepage.jsonPath);

if (!fs.existsSync(reportPath)) {
  fail(`Homepage Lighthouse JSON report does not exist: ${reportPath}`);
}

let report;

try {
  report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
} catch (error) {
  fail(`Could not parse homepage Lighthouse report: ${error.message}`);
}

const categories = report?.categories;

if (!categories) {
  fail("Homepage Lighthouse report does not contain category scores.");
}

const metrics = [
  ["Performance", categories.performance?.score],
  ["Accessibility", categories.accessibility?.score],
  ["Best Practices", categories["best-practices"]?.score],
  ["SEO", categories.seo?.score]
];

const badgeColor = (score) => {
  if (score >= 0.9) return "brightgreen";
  if (score >= 0.75) return "yellow";
  return "red";
};

const badges = metrics.map(([name, score]) => {
  if (typeof score !== "number" || !Number.isFinite(score)) {
    fail(`Missing or invalid ${name} score in homepage report.`);
  }

  const value = Math.round(score * 100);

  return `![${name}](https://img.shields.io/badge/${encodeURIComponent(name)}-${value}%25-${badgeColor(score)}?style=flat-square)`;
});

if (!fs.existsSync(readmePath)) {
  fail("README.md was not found.");
}

const readme = fs.readFileSync(readmePath, "utf8");

const startIndex = readme.indexOf(START);
const endIndex = readme.indexOf(END);

if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
  fail("README.md must contain one valid LIGHTHOUSE:START / LIGHTHOUSE:END marker pair.");
}

if (
  readme.indexOf(START, startIndex + START.length) !== -1 ||
  readme.indexOf(END, endIndex + END.length) !== -1
) {
  fail("README.md contains duplicate Lighthouse markers.");
}

const generatedAt = new Date().toISOString().slice(0, 10);

const section = [
  START,
  '<div align="center">',
  "",
  "### Mobile Lighthouse",
  "",
  badges.map((badge) => badge.replace(
    "?style=flat-square",
    "?style=for-the-badge"
  )).join(" "),
  "",
  `**Last audited:** ${generatedAt}`,
  "",
  "[View Website](https://atharvakote.vercel.app/) · [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)",
  "",
  "</div>",
  END
].join("\n");

const updatedReadme =
  readme.slice(0, startIndex) +
  section +
  readme.slice(endIndex + END.length);

if (updatedReadme !== readme) {
  fs.writeFileSync(readmePath, updatedReadme);
  console.log("README Lighthouse metrics updated successfully.");
} else {
  console.log("README Lighthouse metrics are already up to date.");
}
