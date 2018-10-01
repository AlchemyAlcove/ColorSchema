import Schema from "../src";

test("Schema from one value", () => {
  expect(Schema({primary: "#2CF366"})).toEqual({
    "background": "#ECF0F1",
    "danger": "#E74C3C",
    "dangerHighlight": "#E96052",
    "grayedOut": "#7F8C8D",
    "primary": "#2CF366",
    "primaryHighlight": "#44F477",
    "secondary": "#7F8C8D",
    "secondaryHighlight": "#8C9899",
    "text": "#000000",
    "textOnDanger": "#000000",
    "textOnDangerHighlight": "#000000",
    "textOnPrimary": "#000000",
    "textOnPrimaryHighlight": "#000000",
    "textOnSecondary": "#000000",
    "textOnSecondaryHighlight": "#000000"
  });
});
