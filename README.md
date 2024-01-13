## [Responsive Images](https://imagekit.io/responsive-images)

|       Method       |                                       Usage                                       |      complexity      |
| :----------------: | :-------------------------------------------------------------------------------: | :------------------: |
|      `srcset`      |               fixed-size images that take most the viewport width.                |        Simple        |
| `srcset` + `sizes` | flexible images. When the layout & image size changes based on the viewport width |   Slightly complex   |
|    `<picture>`     |                  Loading a different image based on screen size                   |    Highly complex    |
| Using client-hints |           When you don’t want to make major changes in the HTML markup            | No major code change |
|     CSS images     |                Loading images via CSS styles as a background image                |        Simple        |
