# html-imports-content

HTML Imports with content inlining, or replacing by selector.

## Features
* Declarative definition to encourage future search engine support.
* Improve speed of web by allowing site boilerplate HTML to be cached by client browsers independently of page-specific content. Similar in concept to Edge Side Includes.

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
```html
<link rel="import" inline href="header.html">
```

### Replace
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

