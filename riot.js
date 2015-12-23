function Module(exports) {
    exports.version = "vFAKE";
}

Module.prototype.global = "fake_riotjs_to_test_with_requirejs";

// Module UMD Loader
(function (g, f) {
    var d=Module.prototype.dependencies,gn=Module.prototype.global
    if (typeof define==='function'&&define.amd){define(['exports'].concat(d||[]),f)}
    else if (typeof exports==='object'&&typeof exports.nodeName!=='string'){f.apply(this,[exports].concat(d?d.map(require):[]))}
    else {f.apply(this, [(g[gn]={})])}
}(this, Module));
