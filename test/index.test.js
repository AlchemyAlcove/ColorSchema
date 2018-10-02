import Schema from "../src";

test("Schema from one value", () => {
  expect(Schema({primary: "#2CF366"})).toEqual({
    "background": "#ECF0F1",
    "danger": "#C0392B",
    "dangerHighlight": "#D14233",
    "grayedOut": "#7F8C8D",
    "primary": "#2CF366",
    "primaryHighlight": "#44F477",
    "secondary": "#7F8C8D",
    "secondaryHighlight": "#8C9899",
    "success": "#2ECC71",
    "successHighlight": "#3FD37E",
    "text": "#000000",
    "textOnDanger": "#FFFFFF",
    "textOnDangerHighlight": "#FFFFFF",
    "textOnPrimary": "#000000",
    "textOnPrimaryHighlight": "#000000",
    "textOnSecondary": "#000000",
    "textOnSecondaryHighlight": "#000000",
    "textOnSuccess": "#000000",
    "textOnSuccessHighlight": "#000000",
    "textOnWarning": "#000000",
    "textOnWarningHighlight": "#000000",
    "warning": "#F1C40F",
    "warningHighlight": "#F2C927"
  });
});
