(function (root, factory) {
  var name = 'importsContent';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
        return (root[name] = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root[name] = factory();
  }
}(this, function () {

  var forEach = Array.prototype.forEach;
  var toString = Object.prototype.toString;


  var isArray = function (value) {
    return toString.call(value) === '[object Array]';
  };


  /**
   * Returns true if it is a DOM element
   * https://stackoverflow.com/a/384380/851135
   */
  var isElement = function (o){
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  };


  var insertNodesBefore = function (nodes, afterNode) {
    if (! nodes) return;
    if (! afterNode) return;
    var node;
    var index = nodes.length - 1;
    while (index >= 0) {
      node = nodes[index];
      var cloned = node.cloneNode(true);
      afterNode.parentNode.insertBefore(cloned, afterNode);
      afterNode = cloned;
      --index;
    }
  };


  var removeNode = function (node) {
    node.parentNode.removeChild(node);
  };


  var importContent = function (importNode, options) {

    options = options || {};

    var imported = importNode.import;
    var importedBody = imported.body;
    var importedBodyNodes = importedBody.childNodes;

    if (importNode.getAttribute('inline') === '') {

      insertNodesBefore(importedBodyNodes, importNode);
      removeNode(importNode);

    }
    else if (importNode.getAttribute('replace')) {

      var replaceAttr = importNode.getAttribute('replace');
      var nodes = document.querySelectorAll(replaceAttr);

      var operate = function (node) {
        insertNodesBefore(importedBodyNodes, node);
        removeNode(node);
        removeNode(importNode);
      };

      forEach.call(nodes, function (node) {
        if (typeof options.timeout === 'number') {
          setTimeout(function () {
            operate(node);
          }, options.timeout);
        }
        else {
          operate(node);
        }
      });

    }

  };


  var findElements = function () {
    return document.querySelectorAll('link[rel="import"]')
  };


  var importsContent = function (options) {

    if (isElement(options)) {
      options = {
        elements: [options]
      };
    }

    if (isArray(options)) {
      options = {
        elements: options
      };
    }

    options = options || {};
    options.timeout = options.timeout || null;

    var importNodes = options.elements || findElements();

    forEach.call(importNodes, function (importNode) {
      importContent(importNode, options);
    });
  };

  return importsContent;
}));
