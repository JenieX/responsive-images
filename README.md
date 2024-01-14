# [Responsive Images](https://imagekit.io/responsive-images) | [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

Notes:

- If the bigger image was loaded first, then a lower version of it will not be loaded even if it matches certain rules. Firefox doesn't follow this rule though.
- Chrome is more forgiving and may load the closest image to your target even if it is below the target quality, unlike Firefox which would always pick the next best image.

|       Method       |                                       Usage                                       |      Complexity      |
| :----------------: | :-------------------------------------------------------------------------------: | :------------------: |
|      `srcset`      |               fixed-size images that take most the viewport width.                |        Simple        |
| `srcset` + `sizes` | flexible images. When the layout & image size changes based on the viewport width |   Slightly complex   |
|    `<picture>`     |                  Loading a different image based on screen size                   |    Highly complex    |
| Using client-hints |           When you don’t want to make major changes in the HTML markup            | No major code change |
|     CSS images     |                Loading images via CSS styles as a background image                |        Simple        |

## `srcset`

The HTMLImageElement property `srcset` is a string which identifies one or more image candidate strings, separated using commas (,) each specifying image resources to use under given circumstances.

Each image candidate string contains an image URL and an optional width (px) or pixel density descriptor that indicates the conditions under which that candidate should be used instead of the image specified by the src property.

### Using display density descriptor (DPR)

Use display density descriptors if your images are of fixed width, and the only thing that varies is display density.

```html
<img
  src="../img/black-bird-4000_x_6000.jpg"
  srcset="
    ../img/black-bird-300_x_450.jpg  1x,
    ../img/black-bird-600_x_900.jpg  2x,
    ../img/black-bird-900_x_1350.jpg 3x
  "
  class="img"
/>
```

Note: If a display density descriptor isn’t provided, it is assumed to be 1x.

### Using width descriptor

Using width descriptor allows the browser to pick the best candidate from srcset based on the actual width needed to render that image on that particular display at runtime.

The display pixel density is also taken into account by the browser while calculating the required width. Assuming an image takes up the whole viewport width on a **300px** wide screen with **DPR 2**, the browser will pick "black-bird-600_x_900.jpg" because it needs a **300x2=600px** wide image.

```html
<img
  src="../img/black-bird-4000_x_6000.jpg"
  srcset="
    ../img/black-bird-300_x_450.jpg    300w,
    ../img/black-bird-600_x_900.jpg    600w,
    ../img/black-bird-900_x_1350.jpg   900w,
    ../img/black-bird-1200_x_1800.jpg 1200w,
    ../img/black-bird-1500_x_2250.jpg 1500w,
    ../img/black-bird-1800_x_2700.jpg 1800w,
    ../img/black-bird-2100_x_3150.jpg 2100w,
    ../img/black-bird-2400_x_3600.jpg 2400w,
    ../img/black-bird-2700_x_4050.jpg 2700w,
    ../img/black-bird-3000_x_4500.jpg 3000w,
    ../img/black-bird-4000_x_6000.jpg 4000w
  "
  class="img"
/>
```

## `srcset` + `sizes`

- `srcset` : define multiple image sources of different widths and let the browser pick the most appropriate candidate during HTML parsing.
- `sizes` : define the size of the image element. It could be a fixed size like `225px` or relative to the viewport. You can use CSS media conditions here to provide different size values based on the viewport width.

Using the `sizes` attribute with `srcset` provides the browser with enough information to start loading the appropriate image as soon as possible.

In this method, you should set your images inside the `srcset` attribute with their original width and just forget about them, because the browser will automatically pick the appropriate image based on its calculations using the rules in the `sizes` attribute.

Note that you can still use a width on the image element and it will override the width that is chosen by the `sizes` attribute and will not affect the result of using this method.

Before you provide different image sources in `srcset`, you need to understand what all sizes do you need based on the layout. It is going to be site-specific, meaning it is closely tied to your CSS.

```html
<img
  src="../img/black-bird-4000_x_6000.jpg"
  srcset="
    ../img/black-bird-300_x_450.jpg    300w,
    ../img/black-bird-600_x_900.jpg    600w,
    ../img/black-bird-900_x_1350.jpg   900w,
    ../img/black-bird-1200_x_1800.jpg 1200w,
    ../img/black-bird-1500_x_2250.jpg 1500w,
    ../img/black-bird-1800_x_2700.jpg 1800w,
    ../img/black-bird-2100_x_3150.jpg 2100w,
    ../img/black-bird-2400_x_3600.jpg 2400w,
    ../img/black-bird-2700_x_4050.jpg 2700w,
    ../img/black-bird-3000_x_4500.jpg 3000w,
    ../img/black-bird-4000_x_6000.jpg 4000w
  "
  sizes="
        (max-width: 300px) 100vw,
        (max-width: 600px) 70vw,
        (max-width: 900px) 100vw,
        (max-width: 1200px) 120vw,
        3001px
      "
  class="img"
/>
```

## `<picture>`

The `<picture>` HTML element contains zero or more **`<source>` elements and one `<img>`** element to offer alternative versions of an image for different display/device scenarios.

The browser will consider each child `<source>` element and choose the best match among them. If no matches are found, or the browser doesn't support the `<picture>` element, the URL of the `<img>` element's src attribute is selected.

Common usage cases:

- Art direction
- Different format support
- Color theme example
