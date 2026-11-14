
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      isSinglePageApplication: true,

      url: [
        "http://localhost/",
        "http://localhost/skills",
        "http://localhost/work",
        "http://localhost/links",
        "http://localhost/contact",

        "http://localhost/project/distributed-microservices-architecture-with-apache-kafka",
        "http://localhost/project/ticket-booking-platform-for-live-concerts",
        "http://localhost/project/ai-powered-contactless-ordering-recommendation-system",

        "http://localhost/privacy-policy",
        "http://localhost/terms-of-use",
        "http://localhost/license",
        "http://localhost/cookie-policy",
        "http://localhost/credits"
      ],

      numberOfRuns: Number(process.env.LHCI_RUNS || 3),

      settings: {
        formFactor: "mobile"
      }
    },

    assert: {
      assertions: {
        "categories:performance": [
          "warn",
          { minScore: 0.75 }
        ],
        "categories:accessibility": [
          "warn",
          { minScore: 0.90 }
        ],
        "categories:best-practices": [
          "warn",
          { minScore: 0.90 }
        ],
        "categories:seo": [
          "warn",
          { minScore: 0.90 }
        ]
      }
    },

   upload: {
  // Generate manifest.json and report files locally for the README updater.
  target: "filesystem",
  outputDir: ".lighthouseci"
}
  }
};
