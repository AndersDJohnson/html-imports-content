# html-imports-content

HTML Imports with content inlining, or replacing by selector.

## Features
* Enabled simple client-side templating for page composition, with support for lazy loading.
* Improve speed of web by allowing different HTML snippets to be cached independently. Similar in concept to Edge Side Includes.
* Declarative definition to encourage future search native browser and search engine support.

## Use

```html
<script src="html-imports-content.js"></script>
<!-- ... -->
<script>
// Later, once DOM content loaded...
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

## Examples
* [1](https://rawgithub.com/AndersDJohnson/html-imports-content/master/examples/1/index.html)

## Browser support
* [Can I use](http://caniuse.com/imports)

## Specs
* [W3C](http://www.w3.org/TR/2013/WD-html-imports-20130514/)

## Polyfills
* [Polymer](https://github.com/polymer/HTMLImports)

