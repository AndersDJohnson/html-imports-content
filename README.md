# html-imports-content

[HTML Imports] with content inlining, or replacing by selector.

## Features
* Enables simple client-side page composition, with support for lazy loading.
* Improve speed of web by allowing different HTML snippets to be cached independently. Similar in concept to Edge Side Includes (ESI).
* Declarative definition to encourage future native browser implementation and search engine support.

## Install

### Bower
```
bower install --save html-imports-content
```

### npm
```
npm install --save html-imports-content
```

## Use

```html
<script src="html-imports-content.js"></script>
<!-- ... -->
<script>
// Later, once DOM content loaded...
// this will process all content imports in the DOM so far.
window.importsContent();
</script>
```

### Inline
Inserts loaded HTML inline (at the same location as the statement):

```html
<link rel="import" inline href="header.html">
```

### Replace
Replaces element(s) matching CSS selector specified in `replace` attribute with loaded HTML:

```html
<link rel="import" replace="#header" href="header.html">
```

### Manual

```js
var link = document.createElement('link');
link.rel = "import";
link.href = "header.html";
link.setAttribute('inline', '');
document.body.appendChild(link);

window.importsContent(link);

// or multiple:
// window.importsContent( [ link, link2, ... ] );
```


## Examples
* [1](https://rawgithub.com/AndersDJohnson/html-imports-content/master/examples/1/index.html)

## HTML Imports

### Browser support
* [Can I use](http://caniuse.com/imports)

### Specs
* [W3C][HTML Imports]

### Polyfills
* [Polymer](https://github.com/polymer/HTMLImports)

## Alternatives
* [Matthew-Dove/Inject](https://github.com/Matthew-Dove/Inject)
* [al-scvorets/wm-html-include.js](https://github.com/al-scvorets/wm-html-include.js)

[HTML Imports]: http://www.w3.org/TR/2013/WD-html-imports-20130514/
