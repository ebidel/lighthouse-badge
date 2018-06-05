## Lighthouse score badges

Be proud of your [Lighthouse](https://github.com/googlechrome/lighthouse) score! Display
this badge in a Github readme, on your site, in a presentation,...wherever.

Large:

[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 65/100](https://lighthouse-badge.appspot.com/?score=65)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 35/100](https://lighthouse-badge.appspot.com/?score=35)](https://github.com/ebidel/lighthouse-badge)


Compact:

[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&compact)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 65/100](https://lighthouse-badge.appspot.com/?score=65&compact)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 35/100](https://lighthouse-badge.appspot.com/?score=35&compact)](https://github.com/ebidel/lighthouse-badge)

Include category:

[![Lighthouse score: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=Perf&cachebust)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=Perf&compact&cachebust)](https://github.com/ebidel/lighthouse-badge)

### Examples

API: `https://lighthouse-badge.appspot.com/?score=<SCORE>[&compact]`

Parameters:

- `score`: required. set from [0,100].
- `compact`: optional. Renders smaller image instead.
- `category`: optional. Specify a report section label (e.g. "PWA", "Perf", "A11y", "Best Practices")

Markdown

```md
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100)](https://github.com/ebidel/lighthouse-badge)
```

```md
[![Lighthouse score: 85/100](https://lighthouse-badge.appspot.com/?score=85&compact&category=PWA)](https://github.com/ebidel/lighthouse-badge)
```

```md
[![Lighthouse score: 65/100](https://lighthouse-badge.appspot.com/?score=65&compact)](https://github.com/ebidel/lighthouse-badge)
```

HTML

```html
<a href="https://github.com/ebidel/lighthouse-badge" target="_blank" rel="noopener">
  <img src="https://lighthouse-badge.appspot.com?score=100">
</a>
```

```html
<a href="https://github.com/ebidel/lighthouse-badge" target="_blank" rel="noopener">
  <img src="https://lighthouse-badge.appspot.com?score=85&category=PWA">
</a>
```

```html
<a href="https://github.com/ebidel/lighthouse-badge" target="_blank" rel="noopener">
  <img src="https://lighthouse-badge.appspot.com?score=165&compact">
</a>
```
