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


  var importContent = function (options, context) {

    options = options || {};
    context = context || this;

    var imported = context.import;
    var importedBody = imported.body;
    var importedBodyNodes = importedBody.childNodes;

    if (context.getAttribute('inline') === '') {

      insertNodesBefore(importedBodyNodes, context);
      removeNode(context);

    }
    else if (context.getAttribute('replace')) {

      var replaceAttr = context.getAttribute('replace');
      var nodes = document.querySelectorAll(replaceAttr);

      forEach.call(nodes, function (node) {
        if (typeof options.timeout === 'number') {
          setTimeout(function () {
            insertNodesBefore(importedBodyNodes, node);
            removeNode(node);
            removeNode(context);
          }, options.timeout);
        }
        else {
          insertNodesBefore(importedBodyNodes, node);
          removeNode(node);
          removeNode(context);
        }
      });

    }

  };

  var importsContent = function (options) {

    options = options || {};
    options.timeout = options.timeout || null;

    var imports = document.querySelectorAll('link[rel="import"]');

    forEach.call(imports, function (importer) {
      importContent.call(importer, options);
    });
  };

  out.importContent = importContent;
  out.importsContent = importsContent;

  return out;
})(this);
