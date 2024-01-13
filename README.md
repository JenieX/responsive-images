# [Responsive Images](https://imagekit.io/responsive-images)

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

Note: The display pixel density is also taken into account by the browser while calculating the required width. Assuming an image takes up the whole viewport width on a **300px** wide screen with **DPR 2**, the browser will pick "black-bird-600_x_900.jpg" because it needs a **300x2=600px** wide image.

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
