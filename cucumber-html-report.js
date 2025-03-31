const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json",
  reportPath: "cypress/cucumber-json/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "133",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Dodokpo Project" },
      { label: "Release", value: "2.0" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "March 4th 2025, 11:40 AM EST" },
      { label: "Execution End Time", value: "March 4th 2025, 12:30 PM EST" },
    ],
  },
});