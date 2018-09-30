import Color from "../src";

test("in and out", () => {
  expect(new Color("#2cf366").toHex()).toEqual("#2CF366");
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

test("lighten black", () => {
  expect(new Color("#000").lighten(33).toHex()).toEqual("#545454");
});

test("lighten white", () => {
  expect(new Color("#FFF").lighten(33).toHex()).toEqual("#FFFFFF");
});

test("darken black", () => {
  expect(new Color("#000").darken(33).toHex()).toEqual("#000000");
});

test("darken white", () => {
  expect(new Color("#FFF").darken(33).toHex()).toEqual("#AAAAAA");
});

test("lighten midnight blue", () => {
  expect(new Color("#2C3E50").lighten(5).toHex()).toEqual("#354A60");
});
