(function (out) {


  var forEach = Array.prototype.forEach;

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

  var importsContent = function (options) {

    options = options || {};
    options.timeout = options.timeout || null;

    var importNodes = document.querySelectorAll('link[rel="import"]');

    forEach.call(importNodes, function (importNode) {
      importContent(importNode, options);
    });
  };

  out.importContent = importContent;
  out.importsContent = importsContent;

  return out;
})(this);
