(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
  typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
  (global = global || self, factory(global.UmbraRuntime = {}, global.THREE));
}(this, function (exports, THREE) { 'use strict';

  var UmbraNativeAPI = (function() {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
    return (
  function(UmbraNativeAPI) {
    UmbraNativeAPI = UmbraNativeAPI || {};

  var d;d||(d=typeof UmbraNativeAPI !== 'undefined' ? UmbraNativeAPI : {});var m={},r;for(r in d)d.hasOwnProperty(r)&&(m[r]=d[r]);d.arguments=[];d.thisProgram="./this.program";d.quit=function(a,b){throw b;};d.preRun=[];d.postRun=[];var u="";document.currentScript&&(u=document.currentScript.src);_scriptDir&&(u=_scriptDir);0!==u.indexOf("blob:")?u=u.substr(0,u.lastIndexOf("/")+1):u="";d.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText};
  d.readAsync=function(a,b,c){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):c();};e.onerror=c;e.send(null);};d.setWindowTitle=function(a){document.title=a;};var aa=d.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),v=d.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||aa);
  for(r in m)m.hasOwnProperty(r)&&(d[r]=m[r]);m=void 0;function ba(a){var b=w[ca>>2];a=b+a+15&-16;a>da()&&x();w[ca>>2]=a;return b}function ea(a){fa||(fa={});fa[a]||(fa[a]=1,v(a));}var fa,ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&v("no native wasm support detected");var y,z=!1;function B(a,b){a||x("Assertion failed: "+b);}
  function ia(a){if("number"===typeof a){var b=!0;var c=a;}else b=!1,c=a.length;var e=C(Math.max(c,1));if(b){a=e;B(0==(e&3));for(b=e+(c&-4);a<b;a+=4)w[a>>2]=0;for(b=e+c;a<b;)D[a++>>0]=0;return e}a.subarray||a.slice?E.set(a,e):E.set(new Uint8Array(a),e);return e}var ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
  function ka(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&ja)return ja.decode(a.subarray(b,c));for(e="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|g);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|k:(f&7)<<18|g<<12|k<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023));}}else e+=String.fromCharCode(f);}return e}function F(a){return a?ka(E,a,void 0):""}
  function la(a,b,c,e){if(0<e){e=c+e-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023;}if(127>=g){if(c>=e)break;b[c++]=g;}else{if(2047>=g){if(c+1>=e)break;b[c++]=192|g>>6;}else{if(65535>=g){if(c+2>=e)break;b[c++]=224|g>>12;}else{if(c+3>=e)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63;}b[c++]=128|g>>6&63;}b[c++]=128|g&63;}}b[c]=0;}}
  function ma(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4;}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function na(a){0<a%65536&&(a+=65536-a%65536);return a}var G,D,E,oa,pa,w,H,qa,ra;
  function sa(){d.HEAP8=D=new Int8Array(G);d.HEAP16=oa=new Int16Array(G);d.HEAP32=w=new Int32Array(G);d.HEAPU8=E=new Uint8Array(G);d.HEAPU16=pa=new Uint16Array(G);d.HEAPU32=H=new Uint32Array(G);d.HEAPF32=qa=new Float32Array(G);d.HEAPF64=ra=new Float64Array(G);}var ca=15840,ta=d.TOTAL_MEMORY||134217728;5242880>ta&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+ta+"! (TOTAL_STACK=5242880)");
  d.buffer?G=d.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(y=new WebAssembly.Memory({initial:ta/65536}),G=y.buffer):G=new ArrayBuffer(ta);sa();w[ca>>2]=5258752;function ua(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Ra;"number"===typeof c?void 0===b.Na?d.dynCall_v(c):d.dynCall_vi(c,b.Na):c(void 0===b.Na?null:b.Na);}}}var va=[],wa=[],xa=[],ya=[],za=!1;function Aa(){var a=d.preRun.shift();va.unshift(a);}var I=0,Ba=null,Ca=null;
  d.preloadedImages={};d.preloadedAudios={};function Da(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="umbra.wasm";if(!Da()){var Ea=J;J=d.locateFile?d.locateFile(Ea,u):u+Ea;}function Ha(){try{if(d.wasmBinary)return new Uint8Array(d.wasmBinary);if(d.readBinary)return d.readBinary(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a);}}
  function Ia(){return d.wasmBinary||"function"!==typeof fetch?new Promise(function(a){a(Ha());}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}
  function Ja(a){function b(a){d.asm=a.exports;I--;d.monitorRunDependencies&&d.monitorRunDependencies(I);0==I&&(null!==Ba&&(clearInterval(Ba),Ba=null),Ca&&(a=Ca,Ca=null,a()));}function c(a){b(a.instance);}function e(a){return Ia().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){v("failed to asynchronously prepare wasm: "+a);x(a);})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ha};I++;d.monitorRunDependencies&&d.monitorRunDependencies(I);if(d.instantiateWasm)try{return d.instantiateWasm(f,
  b)}catch(g){return v("Module.instantiateWasm callback failed with error: "+g),!1}(function(){if(d.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch)return e(c);fetch(J,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,f).then(c,function(a){v("wasm streaming compile failed: "+a);v("falling back to ArrayBuffer instantiation");e(c);})});})();return {}}
  d.asm=function(a,b){b.memory=y;b.table=new WebAssembly.Table({initial:467,maximum:467,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ja(b)};var La=[function(){alert("Invalid http method.");},function(a,b,c,e,f,g,k,h,l,n,t){return Ka(a,b,c,e,f,g,k,h,l,n,t)},function(){alert("Uploads are not supported.");}];wa.push({Ra:function(){Ma();}});var K={};
  function Na(a){if(Na.Va){var b=w[a>>2];var c=w[b>>2];}else Na.Va=!0,K.USER=K.LOGNAME="web_user",K.PATH="/",K.PWD="/",K.HOME="/home/web_user",K.LANG="C.UTF-8",K._=d.thisProgram,c=za?C(1024):ba(1024),b=za?C(256):ba(256),w[b>>2]=c,w[a>>2]=b;a=[];var e=0,f;for(f in K)if("string"===typeof K[f]){var g=f+"="+K[f];a.push(g);e+=g.length;}if(1024<e)throw Error("Environment size exceeded TOTAL_ENV_SIZE!");for(f=0;f<a.length;f++){e=g=a[f];for(var k=c,h=0;h<e.length;++h)D[k++>>0]=e.charCodeAt(h);D[k>>0]=0;w[b+4*
  f>>2]=c;c+=g.length+1;}w[b+4*a.length>>2]=0;}var Oa=[null,[],[]],L=0;function M(){L+=4;return w[L-4>>2]}var Pa={},Qa={};function Ra(a){for(;a.length;){var b=a.pop();a.pop()(b);}}function Sa(a){return this.fromWireType(H[a>>2])}var N={},O={},Ta={};function Ua(a){if(void 0===a)return "_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
  function Va(a,b){a=Ua(a);return (new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Wa(a){var b=Error,c=Va(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""));});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
  var Xa=void 0;function Ya(a,b,c){function e(b){b=c(b);if(b.length!==a.length)throw new Xa("Mismatched type converter count");for(var e=0;e<a.length;++e)P(a[e],b[e]);}a.forEach(function(a){Ta[a]=b;});var f=Array(b.length),g=[],k=0;b.forEach(function(a,b){O.hasOwnProperty(a)?f[b]=O[a]:(g.push(a),N.hasOwnProperty(a)||(N[a]=[]),N[a].push(function(){f[b]=O[a];++k;k===g.length&&e(f);}));});0===g.length&&e(f);}
  function Za(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var $a=void 0;function R(a){for(var b="";E[a];)b+=$a[E[a++]];return b}var ab=void 0;function S(a){throw new ab(a);}
  function P(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||S('type "'+e+'" must have a positive integer typeid pointer');if(O.hasOwnProperty(a)){if(c.ab)return;S("Cannot register type '"+e+"' twice");}O[a]=b;delete Ta[a];N.hasOwnProperty(a)&&(b=N[a],delete N[a],b.forEach(function(a){a();}));}var bb=[],T=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
  function cb(a){4<a&&0===--T[a].Pa&&(T[a]=void 0,bb.push(a));}function db(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=bb.length?bb.pop():T.length;T[b]={Pa:1,value:a};return b}}
  function eb(a,b){var c=d;if(void 0===c[a].La){var e=c[a];c[a]=function(){c[a].La.hasOwnProperty(arguments.length)||S("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].La+")!");return c[a].La[arguments.length].apply(this,arguments)};c[a].La=[];c[a].La[e.Ua]=e;}}
  function fb(a,b,c){d.hasOwnProperty(a)?((void 0===c||void 0!==d[a].La&&void 0!==d[a].La[c])&&S("Cannot register public name '"+a+"' twice"),eb(a,a),d.hasOwnProperty(c)&&S("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),d[a].La[c]=b):(d[a]=b,void 0!==c&&(d[a].ub=c));}
  function gb(a,b,c){switch(b){case 0:return function(a){return this.fromWireType((c?D:E)[a])};case 1:return function(a){return this.fromWireType((c?oa:pa)[a>>1])};case 2:return function(a){return this.fromWireType((c?w:H)[a>>2])};default:throw new TypeError("Unknown integer type: "+a);}}function hb(a){a=ib(a);var b=R(a);U(a);return b}function jb(a,b){var c=O[a];void 0===c&&S(b+" has unknown type "+hb(a));return c}
  function kb(a){if(null===a)return "null";var b=typeof a;return "object"===b||"array"===b||"function"===b?a.toString():""+a}function lb(a,b){switch(b){case 2:return function(a){return this.fromWireType(qa[a>>2])};case 3:return function(a){return this.fromWireType(ra[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
  function mb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Va(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function nb(a,b){for(var c=[],e=0;e<a;e++)c.push(w[(b>>2)+e]);return c}
  function ob(a,b){a=R(a);if(void 0!==d["FUNCTION_TABLE_"+a])var c=d["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=d["dynCall_"+a];void 0===c&&(c=d["dynCall_"+a.replace(/f/g,"d")],void 0===c&&S("No dynCall invoker for signature: "+a));for(var e=[],f=1;f<a.length;++f)e.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+e.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n";c=(new Function("dynCall","rawFunction",
  f+"};\n"))(c,b);}"function"!==typeof c&&S("unknown function pointer with signature "+a+": "+b);return c}var pb=void 0;function qb(a,b){function c(a){f[a]||O[a]||(Ta[a]?Ta[a].forEach(c):(e.push(a),f[a]=!0));}var e=[],f={};b.forEach(c);throw new pb(a+": "+e.map(hb).join([", "]));}
  function rb(a,b,c){switch(b){case 0:return c?function(a){return D[a]}:function(a){return E[a]};case 1:return c?function(a){return oa[a>>1]}:function(a){return pa[a>>1]};case 2:return c?function(a){return w[a>>2]}:function(a){return H[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var sb={};function tb(a){var b=sb[a];return void 0===b?R(a):b}var ub=[];function vb(a){a||S("Cannot use deleted val. handle = "+a);return T[a].value}function wb(a){var b=ub.length;ub.push(a);return b}
  function xb(a,b){for(var c=Array(a),e=0;e<a;++e)c[e]=jb(w[(b>>2)+e],"parameter "+e);return c}
  function yb(a,b){zb=a;Ab=b;if(Bb)if(0==a)V=function(){var a=Math.max(0,Cb+b-X())|0;setTimeout(Db,a);},Eb="timeout";else if(1==a)V=function(){Fb(Db);},Eb="rAF";else if(2==a){if("undefined"===typeof setImmediate){var c=[];addEventListener("message",function(a){if("setimmediate"===a.data||"setimmediate"===a.data.target)a.stopPropagation(),c.shift()();},!0);setImmediate=function(a){c.push(a);postMessage("setimmediate","*");};}V=function(){setImmediate(Db);};Eb="immediate";}}function X(){x();}
  function Gb(a){var b=Hb;d.noExitRuntime=!0;B(!Bb,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Bb=a;Hb=b;var c="undefined"!==typeof b?function(){d.dynCall_vi(a,b);}:function(){d.dynCall_v(a);};var e=Y;Db=function(){if(!z)if(0<Ib.length){var a=Date.now(),b=Ib.shift();b.Ra(b.Na);if(Jb){var k=Jb,h=0==k%1?k-1:Math.floor(k);Jb=b.lb?h:(8*k+(h+.5))/9;}console.log('main loop blocker "'+
  b.name+'" took '+(Date.now()-a)+" ms");d.setStatus&&(a=d.statusMessage||"Please wait...",b=Jb,k=Kb.pb,b?b<k?d.setStatus(a+" ("+(k-b)+"/"+k+")"):d.setStatus(a):d.setStatus(""));e<Y||setTimeout(Db,0);}else if(!(e<Y))if(Lb=Lb+1|0,1==zb&&1<Ab&&0!=Lb%Ab)V();else{0==zb&&(Cb=X());"timeout"===Eb&&d.Oa&&(v("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),
  Eb="");a:if(!(z||d.preMainLoop&&!1===d.preMainLoop())){try{c();}catch(l){if(l instanceof Mb)break a;l&&"object"===typeof l&&l.stack&&v("exception thrown: "+[l,l.stack]);throw l;}d.postMainLoop&&d.postMainLoop();}e<Y||("object"===typeof SDL&&SDL.audio&&SDL.audio.cb&&SDL.audio.cb(),V());}};}var V=null,Eb="",Y=0,Bb=null,Hb=0,zb=0,Ab=0,Lb=0,Ib=[],Kb={},Cb,Db,Jb,Nb=!1,Ob=!1,Pb=[];
  function Qb(){function a(){Ob=document.pointerLockElement===d.canvas||document.mozPointerLockElement===d.canvas||document.webkitPointerLockElement===d.canvas||document.msPointerLockElement===d.canvas;}d.preloadPlugins||(d.preloadPlugins=[]);if(!Sb){Sb=!0;try{Tb=!0;}catch(c){Tb=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes");}Ub="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:Tb?null:console.log("warning: no BlobBuilder");
  Vb="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;d.Ta||"undefined"!==typeof Vb||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),d.Ta=!0);d.preloadPlugins.push({canHandle:function(a){return !d.Ta&&/\.(jpg|jpeg|png|bmp)$/i.test(a)},handle:function(a,b,f,g){var c=null;if(Tb)try{c=new Blob([a],{type:Wb(b)}),c.size!==a.length&&(c=new Blob([(new Uint8Array(a)).buffer],{type:Wb(b)}));}catch(n){ea("Blob constructor present but fails: "+
  n+"; falling back to blob builder");}c||(c=new Ub,c.append((new Uint8Array(a)).buffer),c=c.getBlob());var e=Vb.createObjectURL(c),l=new Image;l.onload=function(){B(l.complete,"Image "+b+" could not be decoded");var c=document.createElement("canvas");c.width=l.width;c.height=l.height;c.getContext("2d").drawImage(l,0,0);d.preloadedImages[b]=c;Vb.revokeObjectURL(e);f&&f(a);};l.onerror=function(){console.log("Image "+e+" could not be decoded");g&&g();};l.src=e;}});d.preloadPlugins.push({canHandle:function(a){return !d.tb&&
  a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,f,g){function c(c){l||(l=!0,d.preloadedAudios[b]=c,f&&f(a));}function e(){l||(l=!0,d.preloadedAudios[b]=new Audio,g&&g());}var l=!1;if(Tb){try{var n=new Blob([a],{type:Wb(b)});}catch(p){return e()}n=Vb.createObjectURL(n);var t=new Audio;t.addEventListener("canplaythrough",function(){c(t);},!1);t.onerror=function(){if(!l){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var e="",f=0,g=0,
  h=0;h<a.length;h++)for(f=f<<8|a[h],g+=8;6<=g;){var k=f>>g-6&63;g-=6;e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[k];}2==g?(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&3)<<4],e+="=="):4==g&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&15)<<2],e+="=");t.src="data:audio/x-"+b.substr(-3)+";base64,"+e;c(t);}};t.src=n;Xb(function(){c(t);});}else return e()}});var b=d.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||
  b.webkitRequestPointerLock||b.msRequestPointerLock||function(){},b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),d.elementPointerLock&&
  b.addEventListener("click",function(a){!Ob&&d.canvas.requestPointerLock&&(d.canvas.requestPointerLock(),a.preventDefault());},!1));}}
  function Yb(a,b,c,e){if(b&&d.Oa&&a==d.canvas)return d.Oa;var f;if(b){var g={antialias:!1,alpha:!1,rb:1};if(e)for(var k in e)g[k]=e[k];if("undefined"!==typeof GL&&(f=GL.mb(a,g)))var h=GL.getContext(f).kb;}else h=a.getContext("2d");if(!h)return null;c&&(b||B("undefined"===typeof GLctx,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),d.Oa=h,b&&GL.sb(f),d.vb=b,Pb.forEach(function(a){a();}),Qb());return h}var Zb=!1,$b=void 0,Z=void 0;
  function ac(a,b,c){function e(){Nb=!1;var a=f.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a?(f.exitFullscreen=bc,$b&&f.requestPointerLock(),Nb=!0,Z?("undefined"!=typeof SDL&&(w[SDL.screen>>2]=H[SDL.screen>>2]|8388608),cc(d.canvas),dc()):cc(f)):(a.parentNode.insertBefore(f,a),a.parentNode.removeChild(a),Z?("undefined"!=typeof SDL&&(w[SDL.screen>>2]=H[SDL.screen>>2]&
  -8388609),cc(d.canvas),dc()):cc(f));if(d.onFullScreen)d.onFullScreen(Nb);if(d.onFullscreen)d.onFullscreen(Nb);}$b=a;Z=b;"undefined"===typeof $b&&($b=!0);"undefined"===typeof Z&&(Z=!1);var f=d.canvas;Zb||(Zb=!0,document.addEventListener("fullscreenchange",e,!1),document.addEventListener("mozfullscreenchange",e,!1),document.addEventListener("webkitfullscreenchange",e,!1),document.addEventListener("MSFullscreenChange",e,!1));var g=document.createElement("div");
  f.parentNode.insertBefore(g,f);g.appendChild(f);g.requestFullscreen=g.requestFullscreen||g.mozRequestFullScreen||g.msRequestFullscreen||(g.webkitRequestFullscreen?function(){g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);}:null)||(g.webkitRequestFullScreen?function(){g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);}:null);c?g.requestFullscreen({wb:c}):g.requestFullscreen();}
  function fc(a,b,c){v("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");fc=function(a,b,c){ac(a,b,c);};ac(a,b,c);}function bc(){if(!Nb)return !1;(document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){}).apply(document,[]);return !0}var gc=0;
  function Fb(a){if("function"===typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===gc)gc=b+1E3/60;else for(;b+2>=gc;)gc+=1E3/60;setTimeout(a,Math.max(gc-b,0));}}function Xb(a){d.noExitRuntime=!0;setTimeout(function(){z||a();},1E4);}function Wb(a){return {jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var hc=[];
  function dc(){var a=d.canvas;hc.forEach(function(b){b(a.width,a.height);});}
  function cc(a,b,c){b&&c?(a.jb=b,a.$a=c):(b=a.jb,c=a.$a);var e=b,f=c;d.forcedAspectRatio&&0<d.forcedAspectRatio&&(e/f<d.forcedAspectRatio?e=Math.round(f*d.forcedAspectRatio):f=Math.round(e/d.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/e,screen.height/f);e=Math.round(e*g);f=Math.round(f*
  g);}Z?(a.width!=e&&(a.width=e),a.height!=f&&(a.height=f),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(e!=b||f!=c?(a.style.setProperty("width",e+"px","important"),a.style.setProperty("height",f+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))));}var ic={},jc=0;function kc(){var a=jc;jc++;return a}var Sb,Tb,Ub,Vb;
  function da(){return D.length}function lc(){if("undefined"!==typeof indexedDB)return indexedDB;var a=null;"object"===typeof window&&(a=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB);B(a,"IDBStore used, but indexedDB not supported");return a}var mc={};
  function nc(a,b){var c=mc[a];if(c)b(null,c);else{try{var e=lc().open(a,22);}catch(f){b(f);return}e.onupgradeneeded=function(a){var b=a.target.result;a=a.target.transaction;b.objectStoreNames.contains("FILE_DATA")?a.objectStore("FILE_DATA"):b.createObjectStore("FILE_DATA");};e.onsuccess=function(){c=e.result;mc[a]=c;b(null,c);};e.onerror=function(a){b(this.error);a.preventDefault();};}}
  function oc(a,b,c){nc(a,function(a,f){if(a)return c(a);a=f.transaction(["FILE_DATA"],b);a.onerror=function(a){c(this.error||"unknown error");a.preventDefault();};a=a.objectStore("FILE_DATA");c(null,a);});}function pc(a,b,c){oc(a,"readonly",function(a,f){if(a)return c(a);a=f.get(b);a.onsuccess=function(a){return (a=a.target.result)?c(null,a):c("file "+b+" not found")};a.onerror=function(a){c(a);};});}
  function qc(a,b,c,e){oc(a,"readwrite",function(a,g){if(a)return e(a);a=g.put(c,b);a.onsuccess=function(){e();};a.onerror=function(a){e(a);};});}la("GMT",E,15744,4);
  function rc(){function a(a){return (a=a.toTimeString().match(/\(([A-Za-z ]+)\)$/))?a[1]:"GMT"}if(!sc){sc=!0;w[tc()>>2]=60*(new Date).getTimezoneOffset();var b=new Date(2E3,0,1),c=new Date(2E3,6,1);w[uc()>>2]=Number(b.getTimezoneOffset()!=c.getTimezoneOffset());var e=a(b),f=a(c);e=ia(vc(e));f=ia(vc(f));c.getTimezoneOffset()<b.getTimezoneOffset()?(w[wc()>>2]=e,w[wc()+4>>2]=f):(w[wc()>>2]=f,w[wc()+4>>2]=e);}}var sc;
  function xc(a){a=na(a);var b=G.byteLength;try{return -1!==y.grow((a-b)/65536)?(G=y.buffer,!0):!1}catch(c){return !1}}Xa=d.InternalError=Wa("InternalError");for(var yc=Array(256),zc=0;256>zc;++zc)yc[zc]=String.fromCharCode(zc);$a=yc;ab=d.BindingError=Wa("BindingError");d.count_emval_handles=function(){for(var a=0,b=5;b<T.length;++b)void 0!==T[b]&&++a;return a};d.get_first_emval=function(){for(var a=5;a<T.length;++a)if(void 0!==T[a])return T[a];return null};pb=d.UnboundTypeError=Wa("UnboundTypeError");
  d.requestFullScreen=function(a,b,c){v("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");d.requestFullScreen=d.requestFullscreen;fc(a,b,c);};d.requestFullscreen=function(a,b,c){ac(a,b,c);};d.requestAnimationFrame=function(a){Fb(a);};d.setCanvasSize=function(a,b,c){cc(d.canvas,a,b);c||dc();};d.pauseMainLoop=function(){V=null;Y++;};d.resumeMainLoop=function(){Y++;var a=zb,b=Ab,c=Bb;Bb=null;Gb(c);yb(a,b);V();};
  d.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0);};d.createContext=function(a,b,c,e){return Yb(a,b,c,e)};"undefined"!==typeof dateNow?X=dateNow:"object"===typeof performance&&performance&&"function"===typeof performance.now?X=function(){return performance.now()}:X=Date.now;function vc(a){var b=Array(ma(a)+1);la(a,b,0,b.length);return b}
  var Cc=d.asm({},{h:x,B:function(){},da:function(){v("missing function: _ZN5Umbra18createDirRecursiveEPKc");x(-1);},r:function(a,b,c,e){x("Assertion failed: "+F(a)+", at: "+[b?F(b):"unknown filename",c,e?F(e):"unknown function"]);},X:Na,u:function(){v("missing function: __cxa_allocate_exception");x(-1);},R:function(){z=!0;throw"Pure virtual function called!";},t:function(){v("missing function: __cxa_throw");x(-1);},w:function(){},A:function(a){d.___errno_location&&(w[d.___errno_location()>>2]=a);return a},
  ca:function(a,b){L=b;try{return Pa.Sa(),M(),M(),M(),M(),0}catch(c){return x(c),-c.Ma}},ba:function(a,b){L=b;try{var c=Pa.Sa(),e=M(),f=M();return Pa.nb(c,e,f)}catch(g){return x(g),-g.Ma}},K:function(a,b){L=b;try{var c=M(),e=M(),f=M();for(b=a=0;b<f;b++){for(var g=w[e+8*b>>2],k=w[e+(8*b+4)>>2],h=0;h<k;h++){var l=E[g+h],n=Oa[c];0===l||10===l?((1===c?aa:v)(ka(n,0)),n.length=0):n.push(l);}a+=k;}return a}catch(t){return x(t),-t.Ma}},aa:function(a,b){L=b;try{var c=F(M()),e=M();return Pa.ob((void 0).stat,c,
  e)}catch(f){return x(f),-f.Ma}},v:function(a,b){L=b;return 0},$:function(a,b){L=b;try{var c=F(M()),e=M(),f=M();return (void 0).open(c,e,f).qb}catch(g){return x(g),-g.Ma}},J:function(a,b){L=b;return 0},I:function(a,b){L=b;try{return Pa.Sa(),0}catch(c){return x(c),-c.Ma}},z:function(){},y:function(a){var b=Qa[a];delete Qa[a];var c=b.eb,e=b.fb,f=b.Qa,g=f.map(function(a){return a.Za}).concat(f.map(function(a){return a.hb}));Ya([a],g,function(a){var g={};f.forEach(function(b,c){var e=a[c],h=b.Xa,k=b.Ya,
  l=a[c+f.length],n=b.gb,Ga=b.ib;g[b.Wa]={read:function(a){return e.fromWireType(h(k,a))},write:function(a,b){var c=[];n(Ga,a,l.toWireType(c,b));Ra(c);}};});return [{name:b.name,fromWireType:function(a){var b={},c;for(c in g)b[c]=g[c].read(a);e(a);return b},toWireType:function(a,b){for(var f in g)if(!(f in b))throw new TypeError("Missing field");var h=c();for(f in g)g[f].write(h,b[f]);null!==a&&a.push(e,h);return h},argPackAdvance:8,readValueFromPointer:Sa,Ka:e}]});},_:function(a,b,c,e,f){var g=Za(c);b=
  R(b);P(a,{name:b,fromWireType:function(a){return !!a},toWireType:function(a,b){return b?e:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var e=D;else if(2===c)e=oa;else if(4===c)e=w;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>g])},Ka:null});},Z:function(a,b,c){a=R(a);Ya([],[b],function(b){b=b[0];d[a]=b.fromWireType(c);return []});},Y:function(a,b){b=R(b);P(a,{name:b,fromWireType:function(a){var b=T[a].value;cb(a);return b},toWireType:function(a,
  b){return db(b)},argPackAdvance:8,readValueFromPointer:Sa,Ka:null});},s:function(a,b,c,e){function f(){}c=Za(c);b=R(b);f.values={};P(a,{name:b,constructor:f,fromWireType:function(a){return this.constructor.values[a]},toWireType:function(a,b){return b.value},argPackAdvance:8,readValueFromPointer:gb(b,c,e),Ka:null});fb(b,f);},g:function(a,b,c){var e=jb(a,"enum");b=R(b);a=e.constructor;e=Object.create(e.constructor.prototype,{value:{value:c},constructor:{value:Va(e.name+"_"+b,function(){})}});a.values[c]=
  e;a[b]=e;},H:function(a,b,c){c=Za(c);b=R(b);P(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+kb(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:lb(b,c),Ka:null});},d:function(a,b,c,e,f,g){var k=nb(b,c);a=R(a);f=ob(e,f);fb(a,function(){qb("Cannot call "+a+" due to unbound types",k);},b-1);Ya([],k,function(c){var e=a,h=a;c=[c[0],null].concat(c.slice(1));var k=f,p=c.length;2>
  p&&S("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var A=null!==c[1]&&!1,Fa=!1,q=1;q<c.length;++q)if(null!==c[q]&&void 0===c[q].Ka){Fa=!0;break}var Ga="void"!==c[0].name,Q="",W="";for(q=0;q<p-2;++q)Q+=(0!==q?", ":"")+"arg"+q,W+=(0!==q?", ":"")+"arg"+q+"Wired";h="return function "+Ua(h)+"("+Q+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+h+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";Fa&&(h+=
  "var destructors = [];\n");var Rb=Fa?"destructors":"null";Q="throwBindingError invoker fn runDestructors retType classParam".split(" ");k=[S,k,g,Ra,c[0],c[1]];A&&(h+="var thisWired = classParam.toWireType("+Rb+", this);\n");for(q=0;q<p-2;++q)h+="var arg"+q+"Wired = argType"+q+".toWireType("+Rb+", arg"+q+"); // "+c[q+2].name+"\n",Q.push("argType"+q),k.push(c[q+2]);A&&(W="thisWired"+(0<W.length?", ":"")+W);h+=(Ga?"var rv = ":"")+"invoker(fn"+(0<W.length?", ":"")+W+");\n";if(Fa)h+="runDestructors(destructors);\n";
  else for(q=A?1:2;q<c.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==c[q].Ka&&(h+=p+"_dtor("+p+"); // "+c[q].name+"\n",Q.push(p+"_dtor"),k.push(c[q].Ka));Ga&&(h+="var ret = retType.fromWireType(rv);\nreturn ret;\n");Q.push(h+"}\n");c=mb(Q).apply(null,k);q=b-1;if(!d.hasOwnProperty(e))throw new Xa("Replacing nonexistant public symbol");void 0!==d[e].La&&void 0!==q?d[e].La[q]=c:(d[e]=c,d[e].Ua=q);return []});},n:function(a,b,c,e,f){function g(a){return a}b=R(b);-1===f&&(f=4294967295);var k=Za(c);
  if(0===e){var h=32-8*c;g=function(a){return a<<h>>>h};}var l=-1!=b.indexOf("unsigned");P(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+kb(c)+'" to '+this.name);if(c<e||c>f)throw new TypeError('Passing a number "'+kb(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+e+", "+f+"]!");return l?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:rb(b,k,0!==e),Ka:null});},
  i:function(a,b,c){function e(a){a>>=2;var b=H;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=R(c);P(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{ab:!0});},G:function(a,b){b=R(b);var c="std::string"===b;P(a,{name:b,fromWireType:function(a){var b=H[a>>2];if(c){var e=E[a+4+b],k=0;0!=e&&(k=e,E[a+4+b]=0);var h=a+4;for(e=0;e<=b;++e){var l=a+4+e;if(0==E[l]){h=F(h);if(void 0===n)var n=h;else n+=
  String.fromCharCode(0),n+=h;h=l+1;}}0!=k&&(E[a+4+b]=k);}else{n=Array(b);for(e=0;e<b;++e)n[e]=String.fromCharCode(E[a+4+e]);n=n.join("");}U(a);return n},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var e="string"===typeof b;e||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||S("Cannot pass non-string to std::string");var f=(c&&e?function(){return ma(b)}:function(){return b.length})(),h=C(4+f+1);H[h>>2]=f;if(c&&e)la(b,E,h+4,f+1);else if(e)for(e=
  0;e<f;++e){var l=b.charCodeAt(e);255<l&&(U(h),S("String has UTF-16 code units that do not fit in 8 bits"));E[h+4+e]=l;}else for(e=0;e<f;++e)E[h+4+e]=b[e];null!==a&&a.push(U,h);return h},argPackAdvance:8,readValueFromPointer:Sa,Ka:function(a){U(a);}});},W:function(a,b,c){c=R(c);if(2===b){var e=function(){return pa};var f=1;}else 4===b&&(e=function(){return H},f=2);P(a,{name:c,fromWireType:function(a){for(var b=e(),c=H[a>>2],g=Array(c),n=a+4>>f,t=0;t<c;++t)g[t]=String.fromCharCode(b[n+t]);U(a);return g.join("")},
  toWireType:function(a,c){var g=e(),k=c.length,n=C(4+k*b);H[n>>2]=k;for(var t=n+4>>f,p=0;p<k;++p)g[t+p]=c.charCodeAt(p);null!==a&&a.push(U,n);return n},argPackAdvance:8,readValueFromPointer:Sa,Ka:function(a){U(a);}});},x:function(a,b,c,e,f,g){Qa[a]={name:R(b),eb:ob(c,e),fb:ob(f,g),Qa:[]};},k:function(a,b,c,e,f,g,k,h,l,n){Qa[a].Qa.push({Wa:R(b),Za:c,Xa:ob(e,f),Ya:g,hb:k,gb:ob(h,l),ib:n});},V:function(a,b){b=R(b);P(a,{bb:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}});},p:function(a,
  b,c,e){a=ub[a];b=vb(b);c=tb(c);a(b,c,null,e);},b:cb,o:function(a,b){b=xb(a,b);for(var c=b[0],e=c.name+"_$"+b.slice(1).map(function(a){return a.name}).join("_")+"$",f=["retType"],g=[c],k="",h=0;h<a-1;++h)k+=(0!==h?", ":"")+"arg"+h,f.push("argType"+h),g.push(b[1+h]);e="return function "+Ua("methodCaller_"+e)+"(handle, name, destructors, args) {\n";var l=0;for(h=0;h<a-1;++h)e+="    var arg"+h+" = argType"+h+".readValueFromPointer(args"+(l?"+"+l:"")+");\n",l+=b[h+1].argPackAdvance;e+="    var rv = handle[name]("+
  k+");\n";for(h=0;h<a-1;++h)b[h+1].deleteObject&&(e+="    argType"+h+".deleteObject(arg"+h+");\n");c.bb||(e+="    return retType.toWireType(destructors, rv);\n");f.push(e+"};\n");a=mb(f).apply(null,g);return wb(a)},F:function(a){4<a&&(T[a].Pa+=1);},q:function(){return db([])},f:function(a){return db(tb(a))},l:function(){return db({})},c:function(a,b,c){a=vb(a);b=vb(b);c=vb(c);a[b]=c;},e:function(a,b){a=jb(a,"_emval_take_value");a=a.readValueFromPointer(b);return db(a)},m:function(){d.abort();},E:function(a){return La[a]()},
  U:function(a,b,c,e,f,g,k,h,l,n,t,p){return La[a](b,c,e,f,g,k,h,l,n,t,p)},T:function(a){(a=ic[a])&&a.abort();},S:da,j:X,D:function(a,b,c,e,f){pc(F(a),F(b),function(a,b){a?f&&Ac(f,c):(a=C(b.length),E.set(b,a),Bc(e,c,a,b.length),U(a));});},Q:function(a,b,c,e,f,g,k){qc(F(a),F(b),new Uint8Array(E.subarray(c,c+e)),function(a){a?k&&Ac(k,f):g&&Ac(g,f);});},P:function(a,b,c){E.set(E.subarray(b,b+c),a);},O:function(a){if(2147418112<a)return !1;for(var b=Math.max(da(),16777216);b<a;)536870912>=b?b=na(2*b):b=Math.min(na((3*
  b+2147483648)/4),2147418112);if(!xc(b))return !1;sa();return !0},C:function(){x("trap!");},N:function(a){rc();a=new Date(1E3*w[a>>2]);w[3924]=a.getSeconds();w[3925]=a.getMinutes();w[3926]=a.getHours();w[3927]=a.getDate();w[3928]=a.getMonth();w[3929]=a.getFullYear()-1900;w[3930]=a.getDay();var b=new Date(a.getFullYear(),0,1);w[3931]=(a.getTime()-b.getTime())/864E5|0;w[3933]=-(60*a.getTimezoneOffset());var c=(new Date(2E3,6,1)).getTimezoneOffset();b=b.getTimezoneOffset();a=(c!=b&&a.getTimezoneOffset()==
  Math.min(b,c))|0;w[3932]=a;a=w[wc()+(a?4:0)>>2];w[3934]=a;return 15696},M:function(a){var b=Date.now()/1E3|0;a&&(w[a>>2]=b);return b},L:function(){x("OOM");},a:ca},G);d.asm=Cc;d.___embind_register_native_and_builtin_types=function(){return d.asm.ea.apply(null,arguments)};
  var ib=d.___getTypeName=function(){return d.asm.fa.apply(null,arguments)},uc=d.__get_daylight=function(){return d.asm.ga.apply(null,arguments)},tc=d.__get_timezone=function(){return d.asm.ha.apply(null,arguments)},wc=d.__get_tzname=function(){return d.asm.ia.apply(null,arguments)},U=d._free=function(){return d.asm.ja.apply(null,arguments)},C=d._malloc=function(){return d.asm.ka.apply(null,arguments)},Ma=d.globalCtors=function(){return d.asm.Ia.apply(null,arguments)};
  d.stackAlloc=function(){return d.asm.Ja.apply(null,arguments)};d.dynCall_i=function(){return d.asm.la.apply(null,arguments)};d.dynCall_ii=function(){return d.asm.ma.apply(null,arguments)};d.dynCall_iii=function(){return d.asm.na.apply(null,arguments)};d.dynCall_iiii=function(){return d.asm.oa.apply(null,arguments)};d.dynCall_iiiii=function(){return d.asm.pa.apply(null,arguments)};d.dynCall_iiiiii=function(){return d.asm.qa.apply(null,arguments)};
  d.dynCall_iiiiiii=function(){return d.asm.ra.apply(null,arguments)};d.dynCall_iiiiiiiifi=function(){return d.asm.sa.apply(null,arguments)};d.dynCall_iiiji=function(){return d.asm.ta.apply(null,arguments)};d.dynCall_ji=function(){return d.asm.ua.apply(null,arguments)};d.dynCall_jiji=function(){return d.asm.va.apply(null,arguments)};d.dynCall_v=function(){return d.asm.wa.apply(null,arguments)};var Ac=d.dynCall_vi=function(){return d.asm.xa.apply(null,arguments)};
  d.dynCall_vii=function(){return d.asm.ya.apply(null,arguments)};d.dynCall_viifi=function(){return d.asm.za.apply(null,arguments)};d.dynCall_viifiii=function(){return d.asm.Aa.apply(null,arguments)};var Bc=d.dynCall_viii=function(){return d.asm.Ba.apply(null,arguments)};d.dynCall_viiif=function(){return d.asm.Ca.apply(null,arguments)};d.dynCall_viiifi=function(){return d.asm.Da.apply(null,arguments)};d.dynCall_viiii=function(){return d.asm.Ea.apply(null,arguments)};
  d.dynCall_viiiii=function(){return d.asm.Fa.apply(null,arguments)};d.dynCall_viiiiii=function(){return d.asm.Ga.apply(null,arguments)};d.dynCall_viij=function(){return d.asm.Ha.apply(null,arguments)};d.asm=Cc;d.then=function(a){if(d.calledRun)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d);};}return d};function Mb(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a;}Mb.prototype=Error();Mb.prototype.constructor=Mb;
  Ca=function Dc(){d.calledRun||Ec();d.calledRun||(Ca=Dc);};
  function Ec(){function a(){if(!d.calledRun&&(d.calledRun=!0,!z)){za||(za=!0,ua(wa));ua(xa);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var a=d.postRun.shift();ya.unshift(a);}ua(ya);}}if(!(0<I)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Aa();ua(va);0<I||d.calledRun||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("");},1);
  a();},1)):a());}}d.run=Ec;function x(a){if(d.onAbort)d.onAbort(a);void 0!==a?(aa(a),v(a),a='"'+a+'"'):a="";z=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}d.abort=x;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();d.noExitRuntime=!0;Ec();
  function Ka(a,b,c,e,f,g,k,h,l,n,t){a=F(a);b=F(b);g=F(g);var p=new XMLHttpRequest;p.open(b,a,!0);if("GET"!=b||0!=g.length)p.withCredentials=!0;p.responseType="arraybuffer";var A=kc();p.onload=function(){if(200==p.status){var a=new Uint8Array(p.response);if(n)a.length!=t?d.dynCall_viii(f,A,c,0):(E.set(a,n),d.dynCall_viiii(e,A,c,null,0));else{var b=C(a.length);E.set(a,b);d.dynCall_viiii(e,A,c,b,a.length);U(b);}}else d.dynCall_viii(f,A,c,p.status);delete ic[A];};p.onerror=function(){d.dynCall_viii(f,A,
  c,p.status);delete ic[A];};p.onabort=function(){delete ic[A];};0!=g.length&&p.setRequestHeader("Authorization","Basic "+btoa(g+":"));l=F(l).split("\n");if(2<=l.length)for(g=0;g<l.length;g+=2)p.setRequestHeader(l[g],l[g+1]);"POST"==b?p.send(D.slice(k,k+h)):p.send(null);ic[A]=p;return A}

    return UmbraNativeAPI
  }
  );
  })();
  if (typeof exports === 'object' && typeof module === 'object')
        module.exports = UmbraNativeAPI;
      else if (typeof define === 'function' && define['amd'])
        define([], function() { return UmbraNativeAPI; });
      else if (typeof exports === 'object')
        exports["UmbraNativeAPI"] = UmbraNativeAPI;

  const textureFormatNames = [
    'rgba32',
    'rgb24',
    'bc1', // Also known as DXT1
    'bc3', // Also known as DXT5
    'bc4',
    'bc5',
    'etc1_rgb',
    'rgba_float32',
    'unc1', // Deprecated internal format, for backwards compatibility
    'jpeg',
    'png',
    'bmp',
    'psd',
    'tga',
    'gif',
    'hdr',
    'pic',
    'pnm',
    'astc_4x4', // 8.00 bpp
    'astc_5x4', // 6.40 bpp
    'astc_5x5', // 5.12 bpp
    'astc_6x5', // 4.27 bpp
    'astc_6x6', // 3.56 bpp
    'astc_8x5', // 3.20 bpp
    'astc_8x6', // 2.67 bpp
    'astc_10x5', // 2.56 bpp
    'astc_10x6', // 2.13 bpp
    'astc_8x8', // 2.00 bpp
    'astc_10x8', // 1.60 bpp
    'astc_10x10', // 1.28 bpp
    'astc_12x10', // 1.07 bpp
    'astc_12x12', // 0.89 bpp
    'argb32',
    'r8',
    'pvrtc1_rgb4',
    'pvrtc1_rgba4',
    'uint8',
    'uint16',
    'uint32'
  ];

  const colorSpaceNames = [
    'linear',
    'srgb'
  ];

  const textureTypeNames = [
    'diffuse',
    'normal',
    'legacy_unused',
    'specular',
    'meta_index'
  ];

  function assertInteger (x) {
    if (!Number.isInteger(x)) {
      throw new Error('Value was not integer: ' + x.toString())
    }
  }

  // We need to use a factory here since the native API classes depend on the Emscripten generated wasm code that can't be loaded as a regular ES6 module. The "Module" object allows access to C++ functions and the Emscripten heap.
  let create = (Module) => {
    // Struct size and field offsets are requried for zero-copy interop
    const renderableSize = Module.getRenderableSize();
    const renderableFields = Module.getRenderableFields();

    const arrayToHeap = new Map([
      [Float32Array, 'HEAPF32'],
      [Uint32Array, 'HEAPU32'],
      [Uint16Array, 'HEAPU16'],
      [Uint8Array, 'HEAPU8']
    ]);

    /**
     * The Emscripten heap can grow during runtime which invalidates all array buffer views
     * but keeps pointers valid. The pointers are just offsets to the Module.HEAPU8 array.
     *
     * This is why we must always create a new view (e.g. Float32Array) before use.
     */
    class Buffer {
      constructor (size, type = Float32Array) {
        assertInteger(size / type.BYTES_PER_ELEMENT);
        if (size === 0) {
          throw new Error('Buffer size was zero')
        }

        this.ofs = Module._malloc(size);
        if (this.ofs === 0) {
          throw new Error('Allocation of ' + size.toString() + ' bytes failed.')
        }
        this.size = size; // In bytes
        this.type = type;
      }

      destroy () {
        Module._free(this.ofs);
        this.ofs = 0;
        this.size = 0;
      }

      view () {
        const heapName = arrayToHeap.get(this.type);
        // eslint-disable-next-line new-cap
        return new this.type(Module[heapName].buffer, this.ofs, this.size / this.type.BYTES_PER_ELEMENT)
      }

      floats () {
        return new Float32Array(Module.HEAPF32.buffer, this.ofs, this.size / 4)
      }

      bytes () {
        return new Uint8Array(Module.HEAPU8.buffer, this.ofs, this.size)
      }
    }

    function copyMat4 (buf, elements) {
      for (let i = 0; i < 16; i++) {
        buf[i] = elements[i];
      }
    }

    function copyVec3 (buf, elements) {
      buf[0] = elements[0];
      buf[1] = elements[1];
      buf[2] = elements[2];
    }

    class Client {
      constructor () {
        this.ptr = Module.clientCreate();
      }

      destroy () {
        Module.clientDestroy(this.ptr);
        this.ptr = 0;
      }
    }

    class Scene {
      constructor (ptr) {
        this.ptr = ptr;
        this.creds = Module.sceneCredsCreate();
        this.matrixBuffer = new Buffer(16 * 4);
      }

      destroy () {
        Module.sceneCredsDestroy(this.creds);
        this.matrixBuffer.destroy();
      }

      connect (token, projectID, modelID) {
        Module.sceneConnect(this.ptr, this.creds, token, projectID, modelID);
      }

      connectionStatus () {
        return Module.sceneGetConnectionStatus(this.ptr)
      }

      getInfo (scenePtr) {
        return Module.sceneGetInfo(this.ptr)
      }

      isConnected () {
        return this.connectionStatus() === Module.ConnectionStatus.Connected
      }

      update (matrix) {
        if (!Array.isArray(matrix)) {
          throw new TypeError('Matrix should be an array')
        }
        if (matrix.length !== 16) {
          throw new TypeError('Matrix should be of size 4x4')
        }

        copyMat4(this.matrixBuffer.floats(), matrix);

        Module.sceneUpdate(this.ptr, this.matrixBuffer.ofs);
      }
    }

    class View {
      constructor (ptr, runtimeAssets) {
        this.ptr = ptr;
        this.matrixBuffer = new Buffer(16 * 4);
        this.vectorBuffer = new Buffer(4 * 4);
        this.temp = undefined;
        this.runtimeAssets = runtimeAssets;
      }

      destroy () {
        this.matrixBuffer.destroy();
        this.vectorBuffer.destroy();
      }

      update (cameraMatrix, positionVector, quality) {
        if (!Array.isArray(cameraMatrix)) {
          throw new TypeError('Camera matrix should be an array')
        }
        if (!Array.isArray(positionVector)) {
          throw new TypeError('Position should be an array')
        }
        if (typeof quality !== 'number') {
          throw new TypeError('Quality should be a number')
        }
        if (cameraMatrix.length !== 16) {
          throw new TypeError('Camera matrix should be of size 4x4')
        }
        if (positionVector.length !== 3) {
          throw new TypeError('Position vector should be of length 3')
        }

        copyMat4(this.matrixBuffer.floats(), cameraMatrix);
        copyVec3(this.vectorBuffer.floats(), positionVector);

        Module.viewUpdate(this.ptr, this.matrixBuffer.ofs, quality, this.vectorBuffer.ofs);
      }

      getVisible (batchSize) {
        assertInteger(batchSize);
        const bufferSize = batchSize * renderableSize;

        // Check if we should enlarge or allocate the temp buffer
        if (!this.temp || this.temp.size < bufferSize) {
          if (this.temp) {
            this.temp.destroy();
          }
          console.log('realloc');
          this.temp = new Buffer(bufferSize);
        }

        const temp = this.temp;
        const strideInWords = renderableSize / 4;
        const bufferWordSize = bufferSize / 4;
        const offsets = renderableFields;

        assertInteger(strideInWords);
        assertInteger(bufferWordSize);

        let getView = (arrayType, heap, ptr, ofs) => {
          assertInteger(ofs / 4);
          // eslint-disable-next-line new-cap
          return new arrayType(heap.buffer, ptr + ofs, bufferWordSize - ofs / 4)
        };

        const meshIDs = getView(Uint32Array, Module.HEAPU32, temp.ofs, offsets['mesh']);
        const lodLevels = getView(Int32Array, Module.HEAP32, temp.ofs, offsets['lodLevel']);
        const masks = getView(Uint32Array, Module.HEAPU32, temp.ofs, offsets['visibilityMask']);
        // const transforms = getView(Float32Array, Module.HEAPF32, temp.ofs, offsets['transform'])

        const count = Module.viewNextRenderables(this.ptr, temp.ofs, batchSize);
        let output = [];

        for (let i = 0; i < count; i++) {
          const id = meshIDs[strideInWords * i];
          const lod = lodLevels[strideInWords * i];
          const mask = masks[strideInWords * i];
          // TODO extract individual transforms too
          output.push({
            'id': id,
            'mesh': this.runtimeAssets.get(id),
            'lod': lod,
            'mask': mask
          });
        }

        return output
      }
    }

    let jobTypeToString = new Map([
      [Module.JobType.StreamIn, 'Create'],
      [Module.JobType.StreamOut, 'Destroy']
    ]);

    let assetTypeToString = new Map([
      [Module.AssetType.Material, 'Material'],
      [Module.AssetType.Texture, 'Texture'],
      [Module.AssetType.Mesh, 'Mesh']
    ]);

    class AssetJob {
      constructor (ptr) {
        this.ptr = ptr;
        this.jobType = jobTypeToString.get(Module.jobGetJobType(ptr));
        this.assetType = assetTypeToString.get(Module.jobGetAssetType(ptr));
        this.type = this.jobType + this.assetType;
        this.data = {}; // Type specific asset data set from the outside
      }

      finish (result, userPtr) {
        Module.jobFinish(this.ptr, result, userPtr);
      }

      success (userPtr = 0) {
        Module.jobFinish(this.ptr, Module.JobResult.Success, userPtr);
      }

      fail () {
        Module.jobFinish(this.ptr, Module.JobResult.Failure, 0);
      }

      get userPointer () {
        return Module.jobGetUserPointer(this.ptr)
      }
    }

    class MeshLoader {
      constructor (ptr) {
        this.ptr = ptr;
        this.vertexBuffers = this.allocateBuffers();
        if (!Module.meshLoaderSetBuffers(this.ptr, this.vertexBuffers.desc)) {
          throw new Error('setBuffers failed')
        }
      }

      loadNext () {
        return Module.meshLoaderLoadNext(this.ptr)
      }

      done () {
        return Module.meshLoaderDone(this.ptr)
      }

      allocateBuffers () {
        const attrInfo = Module.meshLoaderGetAttributes(this.ptr);
        const vertexCount = this.uniqueVertexCount;
        const indexCount = this.indexCount;
        const indexBytes = vertexCount < (1 << 16) ? 2 : 4;

        if (indexCount === 0) {
          throw new Error('Mesh index count was zero!')
        }

        /**
         * We fill in two objects: 'bufferDescs' and 'buffers'.
         * In 'bufferDescs' we describe each attribute's data pointer,
         * length, and stride. The idea is that the application can decide what
         * kind of layout the vertex buffers will use.
         *
         * In 'buffers' we store a Buffer instance that holds a pointer to
         * a block of malloc'd Emscripten heap memory.
         *
         * Both objects have attribute names as keys. We support the following
         * attributes: 'position', 'uv', 'normal', 'tangent', and 'index'.
         */
        let bufferDescs = Module.getEmptyMeshBufferDesc();
        const buffers = {};

        Object.keys(attrInfo).forEach(name => {
          const elemSize = attrInfo[name].elemSize;
          const byteSize = vertexCount * elemSize;
          const floatSize = byteSize / 4;

          assertInteger(floatSize);

          const buffer = new Buffer(byteSize);
          let desc = bufferDescs[name];

          buffers[name] = buffer;

          desc.ptr = buffer.ofs; // Emscripten heap offset
          desc.elemSize = elemSize; // Size of a single element
          desc.size = vertexCount; // Number of elements
          desc.stride = elemSize; // Distance (in bytes) between consecutive elements
          desc.flags = 0; // 0: cached memory, 1: uncached memory
        });

        let arrayType = indexBytes === 2 ? Uint16Array : Uint32Array;
        const indexBuffer = new Buffer(indexCount * indexBytes, arrayType);
        buffers['index'] = indexBuffer;

        let index = {};
        index.elemSize = indexBytes;
        index.ptr = indexBuffer.ofs;
        index.size = indexCount;
        index.stride = index.elemSize;
        index.flags = 0;
        bufferDescs['index'] = index;

        return { 'buffers': buffers, 'desc': bufferDescs }
      }

      get uniqueVertexCount () {
        return Module.meshLoaderUniqueVertexCount(this.ptr)
      }

      get indexCount () {
        return Module.meshLoaderIndexCount(this.ptr)
      }

      get attributes () {
        return Module.meshLoaderGetAttributes(this.ptr)
      }

      get material () {
        return Module.meshLoaderGetMaterial(this.ptr)
      }
    }

    class Runtime {
      constructor (client, textureCapability) {
        this.client = client;
        this.ptr = Module.runtimeCreate(client.ptr, textureCapability);
        console.log('supported texture format mask:', textureCapability);

        this.assets = new Map();
        this.nextId = 1;
        this.loader = undefined;
      }

      destroy () {
        Module.runtimeDestroy(this.ptr);
        this.ptr = 0;
      }

      createScene () {
        const scenePtr = Module.runtimeCreateScene(this.ptr);
        return new Scene(scenePtr)
      }

      destroyScene (scene) {
        Module.runtimeSceneDestroy(scene.ptr);
      }

      createView () {
        const viewPtr = Module.runtimeCreateView(this.ptr);
        return new View(viewPtr, this.assets)
      }

      destroyView (view) {
        Module.runtimeViewDestroy(view.ptr);
      }

      update () {
        Module.runtimeUpdate(this.ptr);
      }

      * getJobs () {
        while (true) {
          if (this.loader) {
            if (this.loader.done()) {
              let job = this.loader.ownerJob;
              // The buffers allocated by MeshLoader are handed over to the caller.
              job.data.buffers = this.loader.vertexBuffers.buffers;
              job.data.desc = this.loader.vertexBuffers.desc;
              job.data.material = this.assets.get(this.loader.material);

              this.loader = undefined;
              yield job;
            } else {
              /**
               * A mesh is still decompressing so we'll advance the decompression
               * one step further and return the control to the caller for a timeout check.
               */
              if (!this.loader.loadNext()) {
                throw new Error('loadNext failed')
              }
              yield undefined;

              // This processing step might have finished the decompression already, so loop back.
              continue
            }
          }

          let jobPtr = Module.runtimeGetJob(this.ptr);

          // Terminate the generator when there are no more jobs to process.
          if (jobPtr === 0) {
            return undefined
          }

          let job = new AssetJob(jobPtr);

          if (job.type === 'CreateMaterial') {
            job.data = Module.jobGetMaterialData(job.ptr);
            job.data.textures = job.data.textures.map(id => this.assets.get(id));
            yield job;
          } else if (job.type === 'CreateTexture') {
            const info = Module.jobGetTextureData(job.ptr);
            info.format = textureFormatNames[info.format];
            info.colorSpace = colorSpaceNames[info.colorSpace];
            info.textureType = textureTypeNames[info.textureType];

            const size = info.dataByteSize;
            const buf = new Buffer(size, Uint8Array);

            // Fill the allocated buffer with texture data
            const success = Module.jobCopyTextureContents(job.ptr, buf.ofs, buf.size, false);

            if (!success) {
              buf.destroy();
              const msg = 'Texture copying failed! Job pointer: ' + job.ptr + ', buffer ofs: ' + buf.ofs + ', buffer size: ' + buf.size;
              throw new Error(msg)
            }

            job.data = { info: info, buffer: buf };
            yield job;
          } else if (job.type === 'CreateMesh') {
            // Mesh jobs create decompression work that needs to be done first.
            this.loader = new MeshLoader(Module.jobGetMeshLoader(job.ptr));
            this.loader.ownerJob = job;
            yield undefined;
          } else if (job.jobType === 'Destroy') {
            // The handler gets a reference to the asset object in 'job.data'
            job.data = this.assets.get(job.userPointer);
            yield job;
          } else {
            throw new Error('Job wasn\'t handled correctly')
          }
        }
      }

      handleJobs (handlers, timeLimit) {
        const startTime = performance.now();

        for (let job of this.getJobs()) {
          // If job is 'undefined' it means a mesh is still decompressing
          if (job) {
            try {
              handlers[job.type](job);
            } catch (error) {
              // If this was a mesh upload job, it means our code has already allocated
              // heap buffers and stored them in job.data that we need to free right now.
              if (job.type === 'CreateMesh') {
                Object.keys(job.data.buffers).forEach(name => job.data.buffers[name].destroy());
              }
              job.fail();
              throw error
            }
          }

          // We always process at least one job before checking the time
          if (performance.now() - startTime > timeLimit) {
            break
          }
        }
      }

      addAsset (job, asset) {
        // AssetJob IDs are just an increasing 32-bit series
        const userPtr = this.nextId;
        this.nextId = (this.nextId + 1) | 0;
        if (this.nextId === 0) {
          this.nextId = 1;
        }
        this.assets.set(userPtr, asset);

        job.finish(Module.JobResult.Success, userPtr);
      }

      deallocateBuffers (asset) {
        if (asset.hasOwnProperty('buffers')) {
          Object.keys(asset.buffers).forEach(name => {
            asset.buffers[name].destroy();
          });
        }
      }

      /**
       * Removes the asset reference of the stream out job.
       * Assumes the caller has already freed their own asset resources.
       */
      removeAsset (job, asset) {
        const id = job.userPointer;
        if (this.assets.has(id)) {
          this.assets.delete(id);
        }
        job.finish(Module.JobResult.Success, 0);
      }

      failJob (job) {
        job.finish(Module.JobResult.Failure, 0);
      }
    }

    return {
      'Client': Client,
      'Runtime': Runtime
    }
  };

  /**
   * Returns a library instance that uses the Emscripten resources of "Module".
   */
  function UmbraRuntimeLibrary (Module) {
    const API_VERSION = 'api/v2';

    let apicall = function (endPoint, path, options) {
      let buildURL = function (endPoint, path) {
        let url = endPoint.url;
        if (url.substr(-1) !== '/') {
          url += '/';
        }
        url += API_VERSION;
        url += path;
        return url
      };

      let url = buildURL(endPoint, path);
      let init = Object.assign({
        method: 'GET',
        headers: {
          'Umbra-Client': 'UmbraJS',
          'Authorization': 'Basic ' + btoa(endPoint.key + ':')
          // 'Umbra-Device' : '{}'
        },
        mode: 'cors'
      }, options);

      return fetch(url, init)
        .then(function (response) {
          if (!response.ok) {
            // FIXME: handle http errors better
            throw new Error('HTTP error, status = ' + response.status)
          }
          return response.json()
        })
    };

    const lib = {};

    lib.NATIVE_VERSION = Module.getLibraryVersion();

    lib.getProjects = (token) => {
      let endPoint = Module.parseCloudCredentials(token);
      if (endPoint.key === '') {
        throw new Error('Couldn\'t parse token ', token)
      }
      return apicall(endPoint, '/projects', {})
    };

    lib.getSupportedTextureFormats = (gl) => {
      const caps = Module.TextureCapability;
      let flags = 0;
      let supportsSRGB = false;
      let supportsHalfFloat = false;

      const extStrings = gl.getSupportedExtensions();

      const mapping = new Map([
        ['WEBGL_compressed_texture_s3tc', caps.BC1.value | caps.BC2.value | caps.BC3.value],
        ['WEBGL_compressed_texture_s3tc_srgb', caps.BC1.value | caps.BC2.value | caps.BC3.value],
        ['WEBGL_compressed_texture_rgtc', caps.BC4.value | caps.BC5.value],
        ['WEBGL_compressed_texture_pvrtc', caps.PVRTC1.value],
        ['WEBGL_compressed_texture_etc1', caps.ETC1.value],
        ['WEBGL_compressed_texture_astc', caps.ASTC.value]
      ]);

      for (let key of mapping.keys()) {
        if (extStrings.includes(key)) {
          flags |= mapping.get(key);
        }
      }

      if (extStrings.includes('WEBGL_compressed_texture_s3tc_srgb')) {
        supportsSRGB = true;
      }

      if (extStrings.includes('EXT_sRGB')) {
        supportsSRGB = true;
      }

      if (extStrings.includes('OES_texture_half_float')) {
        supportsHalfFloat = true;
      }

      return { 'flags': flags, 'srgb': supportsSRGB, 'halfFloat': supportsHalfFloat }
    };

    lib.getIDs = ({ token, projectID, modelID, model, project }) => {
      // The application can connect with either direct IDs or names
      if (projectID && modelID) {
        return Promise.resolve({ project: projectID, model: modelID })
      } else {
        return lib.getProjects(token).then((projects) => {
          const proj = projects.find(p => p.name === project);
          const model = proj.models.find(m => m.name === model);

          if (!proj) {
            const names = projects.map(p => p.name);
            throw new Error('Couldn\'t find a project with name "' + project + '". Only found the following: ' + names)
          }

          if (!model) {
            const names = proj.models.map(m => m.name);
            throw new Error('Couldn\'t find a model with name "' + model + '". Only found the following: ' + names)
          }

          return { project: proj.id, model: model.id }
        })
      }
    };

    // Access to the Emscripten module shouldn't be needed but expose it anyway
    lib.nativeModule = Module;

    // Allow access to API classes
    lib.wrappers = create(Module);

    return lib
  }

  /**
   * Compiles the WebAssembly and code and initializes the Emscripten environment.
   * Returns a Promise that resolves with the library instance ready for use.
   */
  let UmbraLibrary = function (config) {

    const defaults = {
      wasmURL: ''
    };

    config = Object.assign(defaults, config);

    return new Promise((resolve, reject) => {
      try {
        let redirectWasmURL = (path, prefix) => {
          // If it's our wasm file, return a custom URL
          if (path.endsWith('umbra.wasm') && config.wasmURL !== '') {
            return config.wasmURL
          }

          return prefix + path
        };

        UmbraNativeAPI({ locateFile: redirectWasmURL }).then(Module => {
          // A workaround for https://github.com/emscripten-core/emscripten/issues/5820
          delete Module['then'];
          Module['onAbort'] = what => {
            reject(what);
          };

          resolve(UmbraRuntimeLibrary(Module));
        });
      } catch (e) {
        reject(e);
      }
    })
  };

  function makeFormat (format, type) {
    return { format: format, type: type }
  }

  const textureFormats = {
    rgb24: makeFormat(THREE.RGBFormat, THREE.UnsignedByte),
    rgba32: makeFormat(THREE.RGBAFormat, THREE.UnsignedByte),
    bc1: makeFormat(THREE.RGBA_S3TC_DXT1_Format, THREE.UnsignedByte),
    bc3: makeFormat(THREE.RGBA_S3TC_DXT5_Format, THREE.UnsignedByte),
    etc1_rgb: makeFormat(THREE.RGB_ETC1_Format, THREE.UnsignedByte),
    astc_4x4: makeFormat(THREE.RGBA_ASTC_4x4_Format, THREE.UnsignedByte)
  };

  /**
   * Extend three's Object3D and add streamed-in meshes as children.
   */
  function ModelObject (runtime, scene, view) {
    THREE.Object3D.call(this);

    this.quality = 0.5; // Streaming model quality. Ranges from 0 to 1.
    this.msPerFrame = 10; // How long can we afford to spend on decompressing assets.
    this.frustumCulled = false; // Umbra does its own frustum culling
    this.opaqueMaterial = new THREE.MeshBasicMaterial();

    // Add API objects under their own object for clarity
    this.umbra = {
      runtime: runtime,
      scene: scene,
      view: view
    };

    // Can be used to enable workarounds
    this.quirks = {
      nonLinearShading: false
    };
  }

  ModelObject.prototype = Object.create(THREE.Object3D.prototype);
  ModelObject.prototype.constructor = THREE.Object3D;

  ModelObject.prototype.getInfo = function () {
    let info = { connected: this.umbra.scene.isConnected() };
    if (info.connected) {
      info['sceneInfo'] = this.umbra.scene.getInfo();
    }
    return info
  };

  ModelObject.prototype.updateVisible = function (scene, camera) {
    if (typeof scene === 'undefined' || !scene.isScene) {
      throw new Error('No scene passed in as argument.')
    }

    if (typeof camera === 'undefined' || !camera.isCamera) {
      throw new Error('No camera passed in as argument.')
    }

    const runtime = this.umbra.runtime;

    const handlers = {
      CreateMaterial: (job) => {
        runtime.addAsset(job, job.data);
      },
      DestroyMaterial: (job) => {
        runtime.removeAsset(job, job.data);
      },
      CreateTexture: (job) => {
        const info = job.data.info;
        const buffer = job.data.buffer;

        // We only support diffuse textures for now
        if (info.textureType !== 'diffuse') {
          runtime.addAsset(job, { dummy: true });
          buffer.destroy();
          return
        }

        let glformat;

        if (textureFormats.hasOwnProperty(info.format)) {
          glformat = textureFormats[info.format];
        }

        if (!glformat) {
          console.log('Unknown texture format', info.format);
          buffer.destroy();
          job.fail();
          return
        }

        /**
         * We need to copy the texture data here since three.js takes ownership
         * of the contents, and we can't guarantee that the view would be valid
         * after memory growth anyway.
         */

        const mip = {
          width: info.width,
          height: info.height,
          data: new Uint8Array(buffer.bytes().slice())
        };

        const tex = new THREE.CompressedTexture([mip], info.width, info.height);
        tex.format = glformat.format;
        tex.type = glformat.type;
        tex.magFilter = THREE.LinearFilter;
        tex.minFilter = THREE.LinearFilter;
        tex.anisotropy = 0;

        /**
         * If gamma correction is not applied to the framebuffer (a three.js default)
         * then we need to keep diffuse textures as 'linear' to avoid darkening them.
         *
         * NOTE: This should be done only when using the unlit BasicMaterial shader.
         */
        if (info.colorSpace === 'linear' || this.quirks.nonLinearShading) {
          tex.encoding = THREE.LinearEncoding;
        } else {
          tex.encoding = THREE.sRGBEncoding;
        }

        tex.needsUpdate = true;

        runtime.addAsset(job, tex);
        buffer.destroy();
      },
      DestroyTexture: (job) => {
        // Free texture data only if it's not a dummy texture
        if (job.data.isTexture) {
          job.data.dispose();
        }
        runtime.removeAsset(job, job.data);
      },
      CreateMesh: (job) => {
        // The mesh creation job gives us all the vertex data in job.data.buffers
        const posArray = job.data.buffers['position'];
        const uvArray = job.data.buffers['uv'];
        const indexArray = job.data.buffers['index'];

        // FIXME these buffers may get neutered by memory growth before the GPU upload
        const geometry = new THREE.BufferGeometry();

        if (job.data.buffers['normal']) {
          const normalArray = job.data.buffers['normal'];
          const normal = new THREE.Float32BufferAttribute(normalArray.floats().slice(), 3);

          normal.onUploadCallback = () => {
            normalArray.destroy();
            delete job.data.buffers['normal'];
          };

          geometry.addAttribute('normal', normal);
        }

        const pos = new THREE.Float32BufferAttribute(posArray.floats().slice(), 3);
        const uv = new THREE.Float32BufferAttribute(uvArray.floats().slice(), 2);

        const indices = Array.from(indexArray.view());

        pos.onUploadCallback = () => {
          posArray.destroy();
          delete job.data.buffers['position'];
        };

        uv.onUploadCallback = () => {
          uvArray.destroy();
          delete job.data.buffers['uv'];
        };

        geometry.addAttribute('position', pos);
        geometry.addAttribute('uv', uv);
        geometry.setIndex(indices);

        // TODO create a new material for a mesh only if it has a new texture
        const material = this.opaqueMaterial.clone();

        // TODO replace these with an object from the library side?
        const DIFFUSE_INDEX = 0;
        const diffuseMap = job.data.material.textures[DIFFUSE_INDEX];

        if (diffuseMap && diffuseMap.isTexture) {
          material.map = diffuseMap;
        }

        // Create a new three.js mesh object per Umbra mesh
        const mesh = new THREE.Mesh(geometry, material);
        mesh.frustumCulled = false;
        this.add(mesh);

        // We need a reference to the vertex buffers so we can free them when necessary
        mesh.userData.buffers = job.data.buffers;

        // Register the asset with Umbra's runtime so it can referenced later when rendering
        runtime.addAsset(job, mesh);
      },
      DestroyMesh: (job) => {
        const mesh = job.data;

        // Deallocate Emscripten heap blocks where vertex attributes were stored
        runtime.deallocateBuffers(mesh.userData.buffers);
        // Remove object from scene graph
        this.remove(mesh);
        // Free three.js resources (e.g. VBOs)
        mesh.geometry.dispose();
        // Tell Umbra's runtime that this asset doesn't exist anymore and finish the job
        runtime.removeAsset(job, mesh);
      }
    };

    runtime.handleJobs(handlers, this.msPerFrame);

    this.umbra.scene.update(scene.matrix.elements);

    const pos = camera.position;

    // TODO don't instantiate these matrices every frame
    let matrixWorldInverse = new THREE.Matrix4();
    matrixWorldInverse.getInverse(camera.matrixWorld);
    let projScreenMatrix = new THREE.Matrix4();
    projScreenMatrix.multiplyMatrices(camera.projectionMatrix, matrixWorldInverse);

    this.umbra.view.update(projScreenMatrix.elements, [pos.x, pos.y, pos.z], this.quality);
    runtime.update();

    for (let i = 0; i < this.children.length; i++) {
      this.children[i].visible = false;
    }

    const visible = this.umbra.view.getVisible(1000);

    // DEBUG MESSAGES
    window.visibleObjects = visible.length;
    window.assetCount = runtime.assets.size;

    for (let i = 0; i < visible.length; i++) {
      visible[i].mesh.visible = true;
    }
  };

  ModelObject.prototype.dispose = function () {
    this.umbra.runtime.destroyView(this.umbra.view);
    this.umbra.runtime.destroyScene(this.umbra.scene);
    // Runtime must be manually freed by the user with .dispose() of the API object
  };

  /*
  export async function initUmbraThreeJS (args, config) {
    const Umbra = await UmbraLibrary(config)

    let projectID, modelID

    const helper = createThreeJsHelper(Umbra, args.renderer)

    return helper({
      token: args.token,
      project: projectID,
      model: modelID
    })
  }
  */

  async function initWithThreeJS (renderer, config) {
    const Umbra = await UmbraLibrary(config);
    const supportedFormats = Umbra.getSupportedTextureFormats(renderer.context);
    let runtime = new Umbra.wrappers.Runtime(new Umbra.wrappers.Client(), supportedFormats.flags);

    let modelFactory = async (cloudArgs) => {
      const IDs = await Umbra.getIDs(cloudArgs);

      const scene = runtime.createScene();
      scene.connect(cloudArgs.token, IDs.project, IDs.model);
      const view = runtime.createView();

      const model = new ModelObject(runtime, scene, view);

      // If the renderer is not gamma correct then sRGB textures shouldn't be used.
      model.quirks.nonLinearShading = !renderer.gammaOutput;

      return model
    };

    return {
      createModel: modelFactory,
      dispose: () => {
        runtime.destroy();
        runtime = undefined;
      },
      Umbra: Umbra
    }
  }

  exports.initWithThreeJS = initWithThreeJS;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
