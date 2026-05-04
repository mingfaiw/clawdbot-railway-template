import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("LOCK_DOWN still allows webhook routes while blocking setup/control UI", () => {
  const src = fs.readFileSync(new URL("../src/server.js", import.meta.url), "utf8");
  assert.match(src, /LOCK_DOWN/);
  assert.match(src, /startsWith\("\/hooks"\)/);
  assert.match(src, /startsWith\("\/openclaw\/hooks"\)/);
  assert.match(src, /req\.path === "\/openclaw"/);
  assert.match(src, /req\.path\.startsWith\("\/openclaw\/"\)/);
});
