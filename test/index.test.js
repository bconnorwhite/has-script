const { hasScript, hasScriptLike } = require("../build");

test("hasScript true", () => {
  hasScript("build").then((result) => {
    expect(result).toBe(true);
  });
});

test("hasScript false", () => {
  hasScript("notbuild").then((result) => {
    expect(result).toBe(false);
  });
});

test("hasScriptLike", () => {
  hasScriptLike(/pre(.*)/g).then((result) => {
    expect(result.length).toBe(1);
  });
});

test("hasScriptLike empty", () => {
  hasScriptLike(/not(.*)/g).then((result) => {
    expect(result.length).toBe(0);
  });
});
