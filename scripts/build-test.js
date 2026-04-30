/**
 * build-test.js — Basic build verification test.
 *
 * Verifies that:
 *   1. `pnpm build` completes without error
 *   2. The expected output files exist in dist/
 *   3. The HTML output contains expected content
 *
 * Usage: node scripts/build-test.js
 *        pnpm test
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const DIST = path.resolve(__dirname, "..", "dist");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ ${message}`);
    passed++;
  } else {
    console.error(`  ❌ ${message}`);
    failed++;
  }
}

function assertFileExists(filePath) {
  const fullPath = path.join(DIST, filePath);
  assert(fs.existsSync(fullPath), `Expected file exists: ${filePath}`);
  return fullPath;
}

// ---- Step 1: Build ----
console.log("\n📦 Step 1: Running pnpm build...\n");

try {
  execSync("pnpm build", {
    cwd: path.resolve(__dirname, ".."),
    stdio: ["inherit", "pipe", "pipe"],
    encoding: "utf-8",
  });
  console.log("  ✅ Build completed successfully\n");
  passed++;
} catch (err) {
  console.error(`  ❌ Build failed:\n${err.stderr || err.message}\n`);
  failed++;
}

// ---- Step 2: Verify output files ----
console.log("📁 Step 2: Verifying output files...\n");

assert(fs.existsSync(DIST), "dist/ directory exists");
const indexHtml = assertFileExists("index.html");
assertFileExists("assets/js/built.js");
assertFileExists("assets/css/built.css");

// ---- Step 3: Verify HTML content ----
console.log("\n📝 Step 3: Verifying HTML content...\n");

if (fs.existsSync(indexHtml)) {
  const html = fs.readFileSync(indexHtml, "utf-8");

  assert(html.includes("<!DOCTYPE html>"), "Contains DOCTYPE");
  assert(html.includes("</html>"), "Contains closing html tag");
  assert(html.includes("<title>"), "Contains <title> tag");
  assert(
    html.includes('class="container-page'),
    "Contains container-page class from EJS template"
  );
  assert(html.includes("font-display"), "Contains font-display class");
  assert(html.includes("id=\"app\""), "Contains #app container");
}

// ---- Summary ----
console.log("\n═══════════════════════════");
console.log(`  ✅ Passed: ${passed}`);
console.log(`  ❌ Failed: ${failed}`);
console.log("═══════════════════════════\n");

process.exit(failed > 0 ? 1 : 0);
