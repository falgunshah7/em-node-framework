#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const projectName = process.argv[2];

if (!projectName) {
  console.error("Please provide a project name.");
  process.exit(1);
}

const templatePath = path.join(__dirname, "template");
const targetPath = path.join(process.cwd(), projectName);

if (fs.existsSync(targetPath)) {
  console.error(`Directory ${projectName} already exists.`);
  process.exit(1);
}

fs.mkdirSync(targetPath, { recursive: true });

// Recursive Copy Function
function copyRecursiveSync(src, dest) {
  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((child) => {
      const childSrc = path.join(src, child);
      const childDest = path.join(dest, child);
      copyRecursiveSync(childSrc, childDest);
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy all template files (including folders)
copyRecursiveSync(templatePath, targetPath);

console.log(`Project ${projectName} created successfully!`);

process.chdir(targetPath);

// Initialize npm
console.log("📦 Initializing npm...");
execSync("npm init -y", { stdio: "inherit" });

// Update package.json with project name
console.log("Updating package.json...");
execSync(`npm pkg set name="${projectName}"`, { stdio: "inherit" });

// Install dependencies
console.log("Installing dependencies...");
execSync("npm install dotenv body-parser express nodemon mongoose cors", {
  stdio: "inherit",
});
console.log("Dependencies installed successfully!");

// Install dev dependencies
console.log("Installing dev dependencies...");
execSync(
  `npm pkg set scripts.start="node index.js" scripts.dev="nodemon index.js"`,
  { stdio: "inherit" }
);

// Initialize git repository
console.log("Initializing git repository...");
execSync("git init", { stdio: "inherit" });
console.log("Git repository initialized successfully!");

// Create basic README
fs.writeFileSync("README.md", `# ${projectName}\n\n Description goes here.`);
console.log("README.md created.");

// Create .env and .env.example
const envContent = `PORT=3000\nDB_URL=mongodb://localhost:27017/${projectName}\nDB_NAME=${projectName}\nJWT_SECRET=your_jwt_secret_key\n`;
fs.writeFileSync(".env", envContent);
fs.writeFileSync(
  ".env.example",
  envContent.replace(/=.*/g, "=<your-value-here>")
);

console.log("🔐 .env and .env.example files created.");

// Done!
console.log(`🚀 Project '${projectName}' setup complete!`);
