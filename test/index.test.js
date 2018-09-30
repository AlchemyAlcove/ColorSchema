import Color from "../src";
console.log(Color);

test("in and out", () => {
  expect(new Color("#2CF366").toHex()).toEqual("#2CF366");
});

test("is light when not light", () => {
  expect(new Color("#666666").isLight()).toEqual(false);
});

test("is light when not light", () => {
  expect(new Color("#999999").isLight()).toEqual(true);
});

test("is dark when dark", () => {
  expect(new Color("#666666").isDark()).toEqual(true);
});

test("is dark when not dark", () => {
  expect(new Color("#999999").isDark()).toEqual(false);
});
