(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'dependency'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('./dependency'));
    } else {
        // Browser globals
        factory((root.universal = {}), root.dependency);
    }
}(this, function (exports, dependency) {
    dependency.action()

    exports.action = function () {
        console.log("UNIVERSAL MODULE METHOD")
    };
}));
