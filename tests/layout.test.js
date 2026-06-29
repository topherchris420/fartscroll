const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const { join } = require("node:path");

const html = readFileSync(join(__dirname, "..", "index.html"), "utf8");

test("uses split-screen scroll portfolio layout", () => {
  assert.match(html, /<body[^>]*data-layout="split-scroll"/);
  assert.match(html, /class="[^"]*\bsplit-scroll-shell\b/);
  assert.match(html, /class="[^"]*\bsplit-visual\b/);
  assert.match(html, /class="[^"]*\bscroll-story\b/);
  assert.match(html, /data-theme-step="signal"/);
  assert.match(html, /data-theme-step="meaning"/);
  assert.match(html, /data-theme-step="media"/);
});

test("preserves interactive wave controls inside the new layout", () => {
  assert.match(html, /id="waveCanvas"/);
  assert.match(html, /id="frequency"/);
  assert.match(html, /id="amplitude"/);
  assert.match(html, /id="freqValue"/);
  assert.match(html, /id="ampValue"/);
});

test("updates the split-screen theme as panels enter view", () => {
  assert.match(html, /querySelectorAll\('\.scroll-panel\[data-theme-step\]'\)/);
  assert.match(html, /document\.body\.dataset\.theme = entry\.target\.dataset\.themeStep/);
});

test("inline page scripts parse", () => {
  const inlineScripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(match => match[1]);
  assert.ok(inlineScripts.length > 0, "expected at least one inline script");
  for (const script of inlineScripts) {
    assert.doesNotThrow(() => new Function(script));
  }
});
test("uses Buy Me a Coffee instead of the old GoFundMe widget", () => {
  assert.match(html, /https:\/\/buymeacoffee\.com\/vers3dynamics/);
  assert.doesNotMatch(html, /gofundme/i);
  assert.match(html, /Support the lab/);
});

test("uses the resonance debt m4a for the podcast audio", () => {
  assert.match(html, /<h3>Podcast<\/h3>\s*<audio controls src="resonance-debt-podcast\.m4a"/);
  assert.doesNotMatch(html, /Vers3Dynamics_ AI, Cymatics, and Creative Innovation\.wav/);
});
test("uses the supplied octopus signal image in the first scroll panel", () => {
  assert.match(html, /<section id="signal"[\s\S]*<img src="carousel5-removebg-preview\.png"/);
  assert.doesNotMatch(html, /<section id="signal"[\s\S]*<img src="hero_verification\.png"/);
});

test("keeps the support CTA text readable against its button background", () => {
  assert.match(html, /body\[data-layout="split-scroll"\]\s*\.support-link\s*{[\s\S]*color:\s*#080807;/);
  assert.match(html, /body\[data-layout="split-scroll"\]\s*\.support-link\s*{[\s\S]*background:\s*#f7efdd;/);
});