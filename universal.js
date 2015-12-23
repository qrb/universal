function Module(exports, riot) {
    console.log("RIOT VERSION: "+riot.version);

    exports.action = function() {
        console.log("UNIVERSAL MODULE METHOD");
    }
}

Module.prototype.dependencies = ['riot'];
Module.prototype.global = "universal";

// Module UMD Loader
(function (g, f) {
    var d=Module.prototype.dependencies,gn=Module.prototype.global
    if (typeof define==='function'&&define.amd){define(['exports'].concat(d||[]),f)}
    else if (typeof exports==='object'&&typeof exports.nodeName!=='string'){f.apply(this,[exports].concat(d?d.map(require):[]))}
    else {f.apply(this, [(g[gn]={})].concat(d?d.map(function(d){return g[d]}):[]))}
}(this, Module));
