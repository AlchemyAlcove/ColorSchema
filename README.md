# AlchemyAlcove Color Schema

Create a color schema for Ether component library.

[![CircleCI](https://circleci.com/gh/AlchemyAlcove/ColorSchema.svg?style=svg&circle-token=2081925e32909c0b361370a7bb72edcb091de093)](https://circleci.com/gh/AlchemyAlcove/ColorSchema)

3.0KB download size minified.

This project has 4 dependencies.

[ColorCalculator](https://github.com/AlchemyAlcove/ColorCalculator)

[BasicFunctions](https://github.com/AlchemyAlcove/BasicFunctions)

[RGBtoHSL](https://github.com/AlchemyAlcove/RGBtoHSL)

[HSLtoRGB](https://github.com/AlchemyAlcove/HSLtoRGB)

![Color Schema](https://media.giphy.com/media/G0vaYbZDJV0cM/giphy.gif)

## Install

npm install --save @alchemyalcove/color-schema

## Use

ColorSchema exports a schema object for the Ether component library. Pass any part of the color schema in and it will calculate the rest of the colors based on these. Any first tier colors that are not provided will be populated based on [FlatUI colors](https://flatuicolors.com/palette/defo)

```javascript
import Schema from "@alchemyalcove/color-schema";

Schema()
```

Would result in the following color schema:

```json
{
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
}
```

Pass these results into setVariables on the Ether and it will setup all your colors. ColorSchema should always provide all needed colors for the Ether project.