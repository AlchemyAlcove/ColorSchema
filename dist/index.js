"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (schema) {
  if ((0, _basicFunctions.isNil)(schema) || Object.prototype.toString(schema) !== "[object Object]") {
    schema = {};
  }

  schema = calcColor("background", schema);
  schema = calcColor("text", schema);
  schema = calcColor("border", schema);
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

  return schema;
};

var _basicFunctions = require("@alchemyalcove/basic-functions");

var _colorCalculator = require("@alchemyalcove/color-calculator");

var _colorCalculator2 = _interopRequireDefault(_colorCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeColor = function changeColor(key, schema) {
  switch (key) {
    case "background":
      return "#ECF0F1";
    case "border":
      return darken(schema.background, 10);
    case "danger":
      return "#C0392B";
    case "dangerHighlight":
      return highlight(schema.danger);
    case "grayedOut":
      return "#7F8C8D";
    case "primary":
      return "#2C3E50";
    case "primaryHighlight":
      return highlight(schema.primary);
    case "secondary":
      return "#7F8C8D";
    case "secondaryHighlight":
      return highlight(schema.secondary);
    case "success":
      return "#2ECC71";
    case "successHighlight":
      return highlight(schema.success);
    case "text":
      return textColor(schema.background);
    case "textOnDanger":
      return textColor(schema.danger);
    case "textOnDangerHighlight":
      return textColor(schema.dangerHighlight);
    case "textOnPrimary":
      return textColor(schema.primary);
    case "textOnPrimaryHighlight":
      return textColor(schema.primaryHighlight);
    case "textOnSecondary":
      return textColor(schema.secondary);
    case "textOnSecondaryHighlight":
      return textColor(schema.secondaryHighlight);
    case "textOnSuccess":
      return textColor(schema.success);
    case "textOnSuccessHighlight":
      return textColor(schema.successHighlight);
    case "textOnWarning":
      return textColor(schema.warning);
    case "textOnWarningHighlight":
      return textColor(schema.warningHighlight);
    case "warning":
      return "#F1C40F";
    case "warningHighlight":
      return highlight(schema.warning);
    default:
      return "#000000";
  }
};

var calcColor = function calcColor(key, schema) {
  if ((0, _basicFunctions.isNil)(schema[key])) {
    schema[key] = changeColor(key, schema);
  }
  return schema;
};

var darken = function darken(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

  var dark = new _colorCalculator2.default(color).darken(percent).toHex();
  if (dark !== color) {
    return dark;
  } else {
    return new _colorCalculator2.default(color).lighten(percent).toHex();
  }
};

var highlight = function highlight(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

  var light = new _colorCalculator2.default(color).lighten(percent).toHex();
  if (light !== color) {
    return light;
  } else {
    return new _colorCalculator2.default(color).darken(percent).toHex();
  }
};

var textColor = function textColor(color) {
  return new _colorCalculator2.default(color).isLight() ? "#000000" : "#FFFFFF";
};