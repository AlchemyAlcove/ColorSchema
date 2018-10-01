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
    "text": "#333333",
    "textOnDanger": "#333333",
    "textOnDangerHighlight": "#333333",
    "textOnPrimary": "#333333",
    "textOnPrimaryHighlight": "#333333",
    "textOnSecondary": "#333333",
    "textOnSecondaryHighlight": "#333333"
  });
});
