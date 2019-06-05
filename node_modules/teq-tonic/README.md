# Teq-Tonic Tools

## Table of Contents

1. [Using This Package In A Project](#using-this-package-in-a-project)
2. [Folder Structure](#folder-structure)
3. [SASS Docs](https://ernieayala.github.io/teq-tonic/)


## Using This Package In A Project

Install [`teq-tonic`](https://www.npmjs.com/package/teq-tonic) into your project.

```
npm i teq-tonic
```

Import teq-tonic into your project using [`Eyeglass`](https://github.com/sass-eyeglass/eyeglass). You can view how Eyeglass works by checking out the [`example`](https://github.com/ernieayala/teq-tonic-example) project.

```sass
@import "teq-tonic";
```

Define settings for your project. You should only need *one* `settings` include.
View the [`settings`](https://ernieayala.github.io/teq-tonic/#app-setup-mixin-settings) mixin for more details.

Current available settings.
``` sass
@include settings(
  "animation-time" (
    "base": 0.3s,
    "fase": 0.1s,
    "slow": 0.5s
  )
  "border-radius" (
    "xs": 0.1rem,
    "sm": 0.2rem,
    "md": 0.3rem,
    "lg": 0.4rem
  )
  "color" (
    "black": #000000,
    "white": #FFFFFF,
    "blue-50": #ECF1FC,
    "blue-100": #C4D3F2,
    "blue-200": #9CB5E8,
    "blue-300": #7497DE,
    "blue-400": #4C79D4,
    "blue-500": #386ACF,
    "blue-600": #193366,
    "blue-700": #203F7B,
    "blue-800": #254990,
    "blue-900": #2B54A5,
    "charcoal-50": #E6E9EB,
    "charcoal-100": #D1D6D8,
    "charcoal-200": #A7B0B2,
    "charcoal-300": #7D8A8C,
    "charcoal-400": #536466,
    "charcoal-500": #293E40,
    "charcoal-600": #213234,
    "charcoal-700": #192628,
    "charcoal-800": #111A1C,
    "charcoal-900": #090E10,
    "green-50": #EAFDF4,
    "green-100": #B7EED8,
    "green-200": #87E0BE,
    "green-300": #57D2A4,
    "green-400": #27C48A,
    "green-500": #0FBD7D,
    "green-600": #0C9763,
    "green-700": #0A8456,
    "green-800": #087149,
    "green-900": #064B2E,
    "gray-50": #FAFAFA,
    "gray-100": #F1F1F1,
    "gray-200": #CBCBCB,
    "gray-300": #B1B1B1,
    "gray-400": #979797,
    "gray-500": #7D7D7D,
    "gray-600": #666666,
    "gray-700": #4A4A4A,
    "gray-800": #2E2E2E,
    "gray-900": #151515,
    "orange-50": #FDE5D1,
    "orange-100": #FAD7B8,
    "orange-200": #F4BB86,
    "orange-300": #EE9F54,
    "orange-400": #E88323,
    "orange-500": #E57509,
    "orange-600": #B75D08,
    "orange-700": #A05108,
    "orange-800": #894509,
    "orange-900": #723906,
    "purple-50": #F5E9FF,
    "purple-100": #D9C3F8,
    "purple-200": #BD9DF0,
    "purple-300": #A177E8,
    "purple-400": #8551E0,
    "purple-500": #773EDC,
    "purple-600": #5F32B0,
    "purple-700": #532C9A,
    "purple-800": #472684,
    "purple-900": #3B206E,
    "red-50": #FFECF0,
    "red-100": #FCD4DC,
    "red-200": #F4A4B4,
    "red-300": #EC758C,
    "red-400": #E44464,
    "red-500": #DC143C,
    "red-600": #B01030,
    "red-700": #9A0E2A,
    "red-800": #840C24,
    "red-900": #6E0A1E,
    "yellow-50": #FFF8F2,
    "yellow-100": #FBEACE,
    "yellow-200": #F7DCAA,
    "yellow-300": #FDCA6A,
    "yellow-400": #F1C774,
    "yellow-500": #EDB950,
    "yellow-600": #BD9340,
    "yellow-700": #A58038,
    "yellow-800": #8D6D2F,
    "yellow-900": #755928,
    "negative": #DC143C,
    "neutral": #386ACF,
    "positive": #0FBD7D,
    "warning": #E57509,
    "primary": #59B5A0,
    "default-text": #4A4A4A
  )
  "context" (
    "all": true,
    "sample-context": (
        "all": false,
        "sample-context": false
    )
  )
  "font-sizes" (
    "xxxl": 2.4rem,
    "xxl": 2rem,
    "xl": 1.8rem,
    "lg": 1.6rem,
    "md": 1.4rem,
    "sm": 1.2rem,
    "xs": 1rem,
    "xxs": 0.8rem,
    "default": 1.4rem
  )
  "font-family" (
    "regular": "\"SourceSansPro\", \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif",
    "light": "\"SourceSansProLight\", \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif",
    "semibold": "\"SourceSansProSemibold\", \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif",
    "bold": "\"SourceSansProBold\", \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif",
    "default": "\"SourceSansPro\", \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif"
  )
  "media-queries" (
    "for-phone-only": "(max-width: 599px)",
    "for-tablet-portrait-up": "(min-width: 600px)",
    "for-tablet-landscape-up": "(min-width: 900px)",
    "for-small-desktop-up": "(min-width: 1200px)",
    "for-desktop-up": "(min-width: 1300px)",
    "for-big-desktop-up": "(min-width: 1800px)"
  )
  "mods" (
    "all": false,
    "sample-component": (
      "all": false,
      "sample-mod": false
    )
  )
  "namespace" (
    "util": ".util"
  )
  "opacity" (
    "visible": 1,
    "light": 0.7,
    "lighter": 0.5,
    "lightest": 0.3,
    "hidden": 0
  )
  "prefixes" (
    "prefix": "teq-",
    "child-prefix": "-",
    "modifier-prefix": "_"
  )
  "setup" (
    "cssvars": true,
    "debug": false,
    "verbose-mod": false
  )
  "space" (
    "pf": 0.1rem,
    "base": 0.4rem,
    "xs": 0.2rem,
    "sm": 0.8rem,
    "md": 1.6rem,
    "lg": 2.4rem,
    "xl": 3.2rem
  )
  "transitions" (
    "link": cubic-bezier(0.075, 0.820, 0.165, 1.000),
    "shift": cubic-bezier(0.770, 0.000, 0.175, 1.000)
  )
  "z-index" (
    "below": -1,
    "above": 1,
    "navbar": 980,
    "dropdown-backdrop": 990,
    "dropdown": 1000,
    "sticky": 1020,
    "fixed": 1030,
    "modal-backdrop": 1040,
    "modal": 1050,
    "popover": 1060,
    "tooltip": 1070
  )
);
```

If you want to update a variable...
``` sass
@include settings(
  "font-sizes" (
    "xl": 3rem
  )
);
```

If you want to add a variable...
``` sass
@include settings(
  "namespace" (
    "button": ".teq-btn"
  )
);
```

Of course you can combine both of these.
``` sass
@include settings(
  "font-sizes" (
    "xl": 3rem
  )
  "namespace" (
    "button": ".teq-btn"
  )
);
```

## Folder Structure

* [`core`](./core) - Source files being developed.
* [`docs`](./docs) - Sass function, mixin, and variable documentation.

## SASS Docs

[`Documentation for the tools.`](https://ernieayala.github.io/teq-tonic/)
