import { readFileSync } from "fs";
// Hard-mode rule check against the functions in index.html. Run: node test/hard.test.mjs
import assert from "assert";
const src = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const grab = n => src.match(new RegExp("function " + n + "\\([\\s\\S]*?\\n}"))[0];
const { hardError: h } = new Function(grab("score") + '\nconst ORD = ["1st","2nd","3rd","4th","5th"];\n' + grab("hardError") + "\nreturn { hardError };")();

assert.equal(h("slate", ["crane"], "train"), "2nd letter must be R");  // R green in crane
assert.equal(h("brain", ["crane"], "train"), null);                      // keeps R, A, N
assert.equal(h("rabin", ["crane"], "train"), "2nd letter must be R");
assert.equal(h("arson", ["crane"], "train"), "3rd letter must be A");
assert.equal(h("bairn", ["crane"], "train"), "2nd letter must be R");
assert.equal(h("brain", ["crane", "plant"], "train"), "Guess must contain T"); // plant reveals T
assert.equal(h("brain", ["crane", "bloom"], "train"), null);
assert.equal(h("bravo", ["crane"], "train"), "Guess must contain N");  // N was yellow
assert.equal(h("enter", ["eerie"], "enter"), null);
assert.equal(h("ebony", ["eerie"], "enter"), "Guess must contain E");   // eerie gives 2 E's (green + yellow)
assert.equal(h("abbey", ["babes", "abbot"], "abbey"), null);
console.log("hard mode checks pass");
