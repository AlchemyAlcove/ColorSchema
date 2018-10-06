import { isNil } from "@alchemyalcove/basic-functions";
import Calculator from "@alchemyalcove/color-calculator";

const changeColor = function(key, schema) {
  switch(key) {
    case "background": return("#ECF0F1");
    case "danger": return("#C0392B");
    case "dangerHighlight": return(highlight(schema.danger));
    case "grayedOut": return("#7F8C8D");
    case "primary": return("#2C3E50");
    case "primaryHighlight": return(highlight(schema.primary));
    case "secondary": return("#7F8C8D");
    case "secondaryHighlight": return(highlight(schema.secondary));
    case "success": return("#2ECC71");
    case "successHighlight": return(highlight(schema.success));
    case "text": return(textColor(schema.background));
    case "textOnDanger": return(textColor(schema.danger));
    case "textOnDangerHighlight": return(textColor(schema.dangerHighlight));
    case "textOnPrimary": return(textColor(schema.primary));
    case "textOnPrimaryHighlight": return(textColor(schema.primaryHighlight));
    case "textOnSecondary": return(textColor(schema.secondary));
    case "textOnSecondaryHighlight": return(textColor(schema.secondaryHighlight));
    case "textOnSuccess": return(textColor(schema.success));
    case "textOnSuccessHighlight": return(textColor(schema.successHighlight));
    case "textOnWarning": return(textColor(schema.warning));
    case "textOnWarningHighlight": return(textColor(schema.warningHighlight));
    case "warning": return("#F1C40F");
    case "warningHighlight": return(highlight(schema.warning));
    default: return("#000000");
  }
};

const calcColor = function(key, schema) {
  if(isNil(schema[key])) {
    schema[key] = changeColor(key, schema);
  }
  return(schema);
};

const highlight = function(color) {
  return(new Calculator(color).lighten(5).toHex());
};

const textColor = function(color) {
  return(new Calculator(color).isLight() ? "#000000" : "#FFFFFF");
};

export default function(schema) {
  if(isNil(schema) || Object.prototype.toString(schema) !== "[object Object]") {
    schema = {};
  }

  schema = calcColor("background", schema);
  schema = calcColor("text", schema);
  schema = calcColor("danger", schema);
  schema = calcColor("dangerHighlight", schema);
  schema = calcColor("textOnDanger", schema);
  schema = calcColor("textOnDangerHighlight", schema);
  schema = calcColor("grayedOut", schema);
  schema = calcColor("primary", schema);
  schema = calcColor("primaryHighlight", schema);
  schema = calcColor("textOnPrimary", schema);
  schema = calcColor("textOnPrimaryHighlight", schema);
  schema = calcColor("secondary", schema);
  schema = calcColor("secondary", schema);
  schema = calcColor("secondaryHighlight", schema);
  schema = calcColor("textOnSecondary", schema);
  schema = calcColor("textOnSecondaryHighlight", schema);
  schema = calcColor("success", schema);
  schema = calcColor("successHighlight", schema);
  schema = calcColor("textOnSuccess", schema);
  schema = calcColor("textOnSuccessHighlight", schema);
  schema = calcColor("warning", schema);
  schema = calcColor("warningHighlight", schema);
  schema = calcColor("textOnWarning", schema);
  schema = calcColor("textOnWarningHighlight", schema);

  return(schema);
}