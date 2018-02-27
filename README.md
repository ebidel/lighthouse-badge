## Lighthouse score badges

Be proud of your [Lighthouse](https://github.com/googlechrome/lighthouse)! Display
it in a Github readme, on your site, in a presentation,...wherever.

Large:

[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=86)](https://developers.google.com/web/tools/lighthouse/)
[![Lighthouse score: 65/100](https://lighthouse-badge.appspot.com/?score=65)](https://developers.google.com/web/tools/lighthouse/)
[![Lighthouse score: 35/100](https://lighthouse-badge.appspot.com/?score=35)](https://developers.google.com/web/tools/lighthouse/)

Compact:

[![Lighthouse score: 65/100](https://lighthouse-badge.appspot.com/?score=65&compact)](https://developers.google.com/web/tools/lighthouse/)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&compact)](https://developers.google.com/web/tools/lighthouse/)
[![Lighthouse score: 35/100](https://lighthouse-badge.appspot.com/?score=35&compact)](https://developers.google.com/web/tools/lighthouse/)

### Examples

API: `https://lighthouse-badge.appspot.com/?score=<SCORE>[&compact]`

Parameters:

- `score`: required. set from [0,100].
- `compact`: optional. Renders smaller image instead.

Markdown

```
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100)](https://developers.google.com/web/tools/lighthouse/)

[![Lighthouse score: 65/100](https://lighthouse-badge.appspot.com/?score=65&compact)](https://developers.google.com/web/tools/lighthouse/)
```

HTML

```
<img src="https://lighthouse-badge.appspot.com?score=100">
<img src="https://lighthouse-badge.appspot.com?score=65&compact">
```