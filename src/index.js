import HexToHsl from "@alchemyalcove/rgb-to-hsl";

export default class{
  constructor(hex) {
    this.color = this.hexToRgb(hex);
  }

  hexToRgb(hex) {
    if(typeof hex !== "string") {
      throw new TypeError("Expected a string");
    }

    hex = hex.replace(/^#/, "");

    if(hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    let num = parseInt(hex, 16);

    return([num >> 16, num >> 8 & 255, num & 255]);
  }

  isDark() {
    const hsl = HexToHsl(this.color);
    return(hsl[2] < 50);
  }

  isLight() {
    const hsl = HexToHsl(this.color);
    console.log(hsl[2]);
    return(hsl[2] >= 50);
  }

  toHex() {
    const red = this.color[0];
    const green = this.color[1];
    const blue = this.color[2];

    return("#" + ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1).toUpperCase());
  }
}