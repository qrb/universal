function Module(exports) {
    exports.action = function() {
        console.log("DEPENDENCY METHOD");
    }
}

Module.prototype.global = "dependency";

// Module UMD Loader
(function (g, f) {
    var d=Module.prototype.dependencies,gn=Module.prototype.global
    if (typeof define==='function'&&define.amd){define(['exports'].concat(d||[]),f)}
    else if (typeof exports==='object'&&typeof exports.nodeName!=='string'){f.apply(this,[exports].concat(d?d.map(require):[]))}
    else {f.apply(this, [(g[gn]={})])}
}(this, Module));
