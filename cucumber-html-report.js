const report = require("multiple-cucumber-html-reporter");
const executionStartTime = new Date().toLocaleString("en-US", {
  timeZone: "America/New_York",
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

const executionEndTime = new Date().toLocaleString("en-US", {
  timeZone: "America/New_York",
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
});

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
      { label: "Execution Start Time", value: executionStartTime },
      { label: "Execution End Time", value: executionEndTime},
    ],
  },
});
