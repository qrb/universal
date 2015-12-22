(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports);
    } else {
        // Browser globals
        factory((root.dependency = {}));
    }
}(this, function (exports) {
    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {
        console.log("DEPENDECY METHOD")
    };
}));
