#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const requiredPaths = ["index.js", "template", "package.json", "README.md"];

let allGood = true;

for (const fileOrDir of requiredPaths) {
  const fullPath = path.join(__dirname, fileOrDir);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ Missing required file or folder: ${fileOrDir}`);
    allGood = false;
  }
}

if (!allGood) {
  console.error("🚫 Pre-publish check failed. Fix the issues and try again.");
  process.exit(1);
}

console.log("✅ Pre-publish check passed. You're good to go!");
