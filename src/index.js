import HSLToRGB from "@alchemyalcove/hsl-to-rgb";
import RGBToHSL from "@alchemyalcove/rgb-to-hsl";

export default class{
  constructor(hex) {
    this.color = RGBToHSL(this.hexToRgb(hex));
  }

  darken(percent) {
    this.color[2] -= percent;
    if(this.color[2] < 0) {
      this.color[2] = 0;
    }
    return(this);
  }

  hexToRgb(hex) {
    hex = hex.replace(/^#/, "");

    if(hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    let num = parseInt(hex, 16);

    return([num >> 16, num >> 8 & 255, num & 255]);
  }

  isDark() {
    return(this.color[2] < 50);
  }

  isLight() {
    return(this.color[2] >= 50);
  }

  lighten(percent) {
    this.color[2] += percent;
    if(this.color[2] > 100) {
      this.color[2] = 100;
    }
    return(this);
  }

  toHex() {
    const rgb = HSLToRGB(this.color);
    const red = rgb[0];
    const green = rgb[1];
    const blue = rgb[2];

    return("#" + ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1).toUpperCase());
  }
}