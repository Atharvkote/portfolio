
import fs from "node:fs";

const manifestPath = ".lighthouseci/manifest.json";
const readmePath = "README.md";

const START = "<!-- LIGHTHOUSE:START -->";
const END = "<!-- LIGHTHOUSE:END -->";

if (!fs.existsSync(manifestPath)) {
  throw new Error("Lighthouse manifest not found.");
}

const manifest = JSON.parse(
  fs.readFileSync(manifestPath, "utf8")
);

const homepage = manifest.find((entry) => {
  return (
    entry.isRepresentativeRun &&
    new URL(entry.url).pathname === "/"
  );
});

if (!homepage) {
  throw new Error("Representative homepage report not found.");
}

const report = JSON.parse(
  fs.readFileSync(homepage.jsonPath, "utf8")
);

const categories = report.categories;

const metrics = [
  ["Performance", categories.performance.score],
  ["Accessibility", categories.accessibility.score],
  ["Best Practices", categories["best-practices"].score],
  ["SEO", categories.seo.score]
];

const badgeColor = (score) => {
  if (score >= 0.9) return "brightgreen";
  if (score >= 0.75) return "yellow";
  return "red";
};

const badges = metrics.map(([name, score]) => {
  const value = Math.round(score * 100);
  const color = badgeColor(score);

  return `![${name}](https://img.shields.io/badge/${encodeURIComponent(name)}-${value}%25-${color}?style=flat-square)`;
});

const generatedAt = new Date().toISOString().slice(0, 10);

const section = [
  START,
  "### Mobile Lighthouse Scores",
  "",
  badges.join(" "),
  "",
  `**Last audited:** ${generatedAt}`,
  "",
  "[View website](https://atharvakote.vercel.app/) · [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)",
  END
].join("\n");

const readme = fs.readFileSync(readmePath, "utf8");

if (!readme.includes(START) || !readme.includes(END)) {
  throw new Error(
    "Add LIGHTHOUSE markers to README.md before running this script."
  );
}

const updatedReadme = readme.replace(
  new RegExp(`${START}[\\s\\S]*?${END}`),
  section
);

fs.writeFileSync(readmePath, updatedReadme);

console.log("README Lighthouse metrics updated.");
