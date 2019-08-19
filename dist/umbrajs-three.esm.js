import { UnsignedByteType, RGBAFormat, UnsignedShort565Type, RGBFormat, LuminanceAlphaFormat, HalfFloatType, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT5_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGB_PVRTC_4BPPV1_Format, Object3D, Box3, Vector3, TangentSpaceNormalMap, Mesh, MeshBasicMaterial, Matrix4, REVISION, CompressedTexture, DataTexture, LinearFilter, LinearEncoding, sRGBEncoding, BufferGeometry, Sphere, Float32BufferAttribute } from 'three';

var UmbraNativeAPI = (function() {
  var _scriptDir = import.meta.url;
  return (
function(UmbraNativeAPI) {
  UmbraNativeAPI = UmbraNativeAPI || {};

var e;e||(e=typeof UmbraNativeAPI !== 'undefined' ? UmbraNativeAPI : {});var aa={},m;for(m in e)e.hasOwnProperty(m)&&(aa[m]=e[m]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var q="";document.currentScript&&(q=document.currentScript.src);_scriptDir&&(q=_scriptDir);0!==q.indexOf("blob:")?q=q.substr(0,q.lastIndexOf("/")+1):q="";e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText};
e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c();};d.onerror=c;d.send(null);};e.setWindowTitle=function(a){document.title=a;};var ba=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),v=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ba);
for(m in aa)aa.hasOwnProperty(m)&&(e[m]=aa[m]);aa=void 0;function da(a){var b=x[ea>>2];a=b+a+15&-16;a>fa()&&y();x[ea>>2]=a;return b}function ha(a){ia||(ia={});ia[a]||(ia[a]=1,v(a));}var ia,ja={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&v("no native wasm support detected");var ka,z=!1;function la(a,b){a||y("Assertion failed: "+b);}
function ma(a){if("number"===typeof a){var b=!0;var c=a;}else b=!1,c=a.length;var d=A(Math.max(c,1));if(b){a=d;la(0==(d&3));for(b=d+(c&-4);a<b;a+=4)x[a>>2]=0;for(b=d+c;a<b;)B[a++>>0]=0;return d}a.subarray||a.slice?C.set(a,d):C.set(new Uint8Array(a),d);return d}var na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function oa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&na)return na.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|k:(f&7)<<18|g<<12|k<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023));}}else d+=String.fromCharCode(f);}return d}function D(a){return a?oa(C,a,void 0):""}
function pa(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023;}if(127>=g){if(c>=d)break;b[c++]=g;}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6;}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12;}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63;}b[c++]=128|g>>6&63;}b[c++]=128|g&63;}}b[c]=0;}}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4;}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ra(a){0<a%65536&&(a+=65536-a%65536);return a}var E,B,C,sa,ta,x,F,ua,va;
function wa(){e.HEAP8=B=new Int8Array(E);e.HEAP16=sa=new Int16Array(E);e.HEAP32=x=new Int32Array(E);e.HEAPU8=C=new Uint8Array(E);e.HEAPU16=ta=new Uint16Array(E);e.HEAPU32=F=new Uint32Array(E);e.HEAPF32=ua=new Float32Array(E);e.HEAPF64=va=new Float64Array(E);}var ea=18464,xa=e.TOTAL_MEMORY||134217728;5242880>xa&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+xa+"! (TOTAL_STACK=5242880)");
e.buffer?E=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(ka=new WebAssembly.Memory({initial:xa/65536}),E=ka.buffer):E=new ArrayBuffer(xa);wa();x[ea>>2]=5261376;function ya(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.hb;"number"===typeof c?void 0===b.Xa?e.dynCall_v(c):e.dynCall_vi(c,b.Xa):c(void 0===b.Xa?null:b.Xa);}}}var za=[],Aa=[],Ba=[],Ca=[],Da=!1;function Ea(){var a=e.preRun.shift();za.unshift(a);}var G=0,Fa=null,Ga=null;
e.preloadedImages={};e.preloadedAudios={};function Ha(){var a=H;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var H="umbra.wasm";if(!Ha()){var Ia=H;H=e.locateFile?e.locateFile(Ia,q):q+Ia;}function Ja(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(H);throw"both async and sync fetching of the wasm failed";}catch(a){y(a);}}
function Ka(){return e.wasmBinary||"function"!==typeof fetch?new Promise(function(a){a(Ja());}):fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Ja()})}
function La(a){function b(a){e.asm=a.exports;G--;e.monitorRunDependencies&&e.monitorRunDependencies(G);0==G&&(null!==Fa&&(clearInterval(Fa),Fa=null),Ga&&(a=Ga,Ga=null,a()));}function c(a){b(a.instance);}function d(a){return Ka().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){v("failed to asynchronously prepare wasm: "+a);y(a);})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ja};G++;e.monitorRunDependencies&&e.monitorRunDependencies(G);if(e.instantiateWasm)try{return e.instantiateWasm(f,
b)}catch(g){return v("Module.instantiateWasm callback failed with error: "+g),!1}(function(){if(e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||"function"!==typeof fetch)return d(c);fetch(H,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,f).then(c,function(a){v("wasm streaming compile failed: "+a);v("falling back to ArrayBuffer instantiation");d(c);})});})();return {}}
e.asm=function(a,b){b.memory=ka;b.table=new WebAssembly.Table({initial:541,maximum:541,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return La(b)};var Na=[function(){alert("Invalid http method.");},function(a,b,c,d,f,g,k,h,l,n,p){return Ma(a,b,c,d,f,g,k,h,l,n,p)},function(){alert("Uploads are not supported.");}];Aa.push({hb:function(){Oa();}});var I={};
function Pa(a){if(Pa.mb){var b=x[a>>2];var c=x[b>>2];}else Pa.mb=!0,I.USER=I.LOGNAME="web_user",I.PATH="/",I.PWD="/",I.HOME="/home/web_user",I.LANG="C.UTF-8",I._=e.thisProgram,c=Da?A(1024):da(1024),b=Da?A(256):da(256),x[b>>2]=c,x[a>>2]=b;a=[];var d=0,f;for(f in I)if("string"===typeof I[f]){var g=f+"="+I[f];a.push(g);d+=g.length;}if(1024<d)throw Error("Environment size exceeded TOTAL_ENV_SIZE!");for(f=0;f<a.length;f++){d=g=a[f];for(var k=c,h=0;h<d.length;++h)B[k++>>0]=d.charCodeAt(h);B[k>>0]=0;x[b+4*
f>>2]=c;c+=g.length+1;}x[b+4*a.length>>2]=0;}var Qa=[null,[],[]],J=0;function K(){J+=4;return x[J-4>>2]}var Ra={},Ta={};function Ua(a){for(;a.length;){var b=a.pop();a.pop()(b);}}function Va(a){return this.fromWireType(F[a>>2])}var L={},M={},Wa={};function Xa(a){if(void 0===a)return "_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Ya(a,b){a=Xa(a);return (new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Za(a){var b=Error,c=Ya(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""));});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var $a=void 0;function ab(a){throw new $a(a);}function bb(a,b,c){function d(b){b=c(b);b.length!==a.length&&ab("Mismatched type converter count");for(var d=0;d<a.length;++d)N(a[d],b[d]);}a.forEach(function(a){Wa[a]=b;});var f=Array(b.length),g=[],k=0;b.forEach(function(a,b){M.hasOwnProperty(a)?f[b]=M[a]:(g.push(a),L.hasOwnProperty(a)||(L[a]=[]),L[a].push(function(){f[b]=M[a];++k;k===g.length&&d(f);}));});0===g.length&&d(f);}
function cb(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var db=void 0;function O(a){for(var b="";C[a];)b+=db[C[a++]];return b}var eb=void 0;function P(a){throw new eb(a);}
function N(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||P('type "'+d+'" must have a positive integer typeid pointer');if(M.hasOwnProperty(a)){if(c.wb)return;P("Cannot register type '"+d+"' twice");}M[a]=b;delete Wa[a];L.hasOwnProperty(a)&&(b=L[a],delete L[a],b.forEach(function(a){a();}));}function fb(a){return {count:a.count,Sa:a.Sa,Va:a.Va,Ja:a.Ja,La:a.La,Ma:a.Ma,Oa:a.Oa}}
function gb(a){P(a.Ia.La.Ka.name+" instance already deleted");}var hb=!1;function ib(){}function jb(a){--a.count.value;0===a.count.value&&(a.Ma?a.Oa.Ra(a.Ma):a.La.Ka.Ra(a.Ja));}
function kb(a){if("undefined"===typeof FinalizationGroup)return kb=function(a){return a},a;hb=new FinalizationGroup(function(a){for(var b=a.next();!b.done;b=a.next())b=b.value,b.Ja?jb(b):console.warn("object already deleted: "+b.Ja);});kb=function(a){hb.register(a,a.Ia,a.Ia);return a};ib=function(a){hb.unregister(a.Ia);};return kb(a)}var lb=void 0,mb=[];function nb(){for(;mb.length;){var a=mb.pop();a.Ia.Sa=!1;a["delete"]();}}function Q(){}var ob={};
function pb(a,b){var c=e;if(void 0===c[a].Qa){var d=c[a];c[a]=function(){c[a].Qa.hasOwnProperty(arguments.length)||P("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].Qa+")!");return c[a].Qa[arguments.length].apply(this,arguments)};c[a].Qa=[];c[a].Qa[d.lb]=d;}}
function qb(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].Qa&&void 0!==e[a].Qa[c])&&P("Cannot register public name '"+a+"' twice"),pb(a,a),e.hasOwnProperty(c)&&P("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].Qa[c]=b):(e[a]=b,void 0!==c&&(e[a].Qb=c));}function rb(a,b,c,d,f,g,k,h){this.name=a;this.constructor=b;this.Ua=c;this.Ra=d;this.Pa=f;this.qb=g;this.Wa=k;this.ob=h;}
function sb(a,b,c){for(;b!==c;)b.Wa||P("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.Wa(a),b=b.Pa;return a}function tb(a,b){if(null===b)return this.ab&&P("null is not a valid "+this.name),0;b.Ia||P('Cannot pass "'+R(b)+'" as a '+this.name);b.Ia.Ja||P("Cannot pass deleted object as a pointer of type "+this.name);return sb(b.Ia.Ja,b.Ia.La.Ka,this.Ka)}
function ub(a,b){if(null===b){this.ab&&P("null is not a valid "+this.name);if(this.Za){var c=this.bb();null!==a&&a.push(this.Ra,c);return c}return 0}b.Ia||P('Cannot pass "'+R(b)+'" as a '+this.name);b.Ia.Ja||P("Cannot pass deleted object as a pointer of type "+this.name);!this.Ya&&b.Ia.La.Ya&&P("Cannot convert argument of type "+(b.Ia.Oa?b.Ia.Oa.name:b.Ia.La.name)+" to parameter type "+this.name);c=sb(b.Ia.Ja,b.Ia.La.Ka,this.Ka);if(this.Za)switch(void 0===b.Ia.Ma&&P("Passing raw pointer to smart pointer is illegal"),
this.Eb){case 0:b.Ia.Oa===this?c=b.Ia.Ma:P("Cannot convert argument of type "+(b.Ia.Oa?b.Ia.Oa.name:b.Ia.La.name)+" to parameter type "+this.name);break;case 1:c=b.Ia.Ma;break;case 2:if(b.Ia.Oa===this)c=b.Ia.Ma;else{var d=b.clone();c=this.Ab(c,S(function(){d["delete"]();}));null!==a&&a.push(this.Ra,c);}break;default:P("Unsupporting sharing policy");}return c}
function vb(a,b){if(null===b)return this.ab&&P("null is not a valid "+this.name),0;b.Ia||P('Cannot pass "'+R(b)+'" as a '+this.name);b.Ia.Ja||P("Cannot pass deleted object as a pointer of type "+this.name);b.Ia.La.Ya&&P("Cannot convert argument of type "+b.Ia.La.name+" to parameter type "+this.name);return sb(b.Ia.Ja,b.Ia.La.Ka,this.Ka)}function wb(a,b,c){if(b===c)return a;if(void 0===c.Pa)return null;a=wb(a,b,c.Pa);return null===a?null:c.ob(a)}var xb={};
function yb(a,b){for(void 0===b&&P("ptr should not be undefined");a.Pa;)b=a.Wa(b),a=a.Pa;return xb[b]}function zb(a,b){b.La&&b.Ja||ab("makeClassHandle requires ptr and ptrType");!!b.Oa!==!!b.Ma&&ab("Both smartPtrType and smartPtr must be specified");b.count={value:1};return kb(Object.create(a,{Ia:{value:b}}))}
function T(a,b,c,d){this.name=a;this.Ka=b;this.ab=c;this.Ya=d;this.Za=!1;this.Ra=this.Ab=this.bb=this.kb=this.Eb=this.yb=void 0;void 0!==b.Pa?this.toWireType=ub:(this.toWireType=d?tb:vb,this.Na=null);}function Ab(a,b,c){e.hasOwnProperty(a)||ab("Replacing nonexistant public symbol");void 0!==e[a].Qa&&void 0!==c?e[a].Qa[c]=b:(e[a]=b,e[a].lb=c);}
function V(a,b){a=O(a);if(void 0!==e["FUNCTION_TABLE_"+a])var c=e["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=e["dynCall_"+a];void 0===c&&(c=e["dynCall_"+a.replace(/f/g,"d")],void 0===c&&P("No dynCall invoker for signature: "+a));for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+d.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall","rawFunction",
f+"};\n"))(c,b);}"function"!==typeof c&&P("unknown function pointer with signature "+a+": "+b);return c}var Bb=void 0;function Cb(a){a=Db(a);var b=O(a);W(a);return b}function Eb(a,b){function c(a){f[a]||M[a]||(Wa[a]?Wa[a].forEach(c):(d.push(a),f[a]=!0));}var d=[],f={};b.forEach(c);throw new Bb(a+": "+d.map(Cb).join([", "]));}var Fb=[],X=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Gb(a){4<a&&0===--X[a].cb&&(X[a]=void 0,Fb.push(a));}
function S(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Fb.length?Fb.pop():X.length;X[b]={cb:1,value:a};return b}}function Hb(a,b,c){switch(b){case 0:return function(a){return this.fromWireType((c?B:C)[a])};case 1:return function(a){return this.fromWireType((c?sa:ta)[a>>1])};case 2:return function(a){return this.fromWireType((c?x:F)[a>>2])};default:throw new TypeError("Unknown integer type: "+a);}}
function Ib(a,b){var c=M[a];void 0===c&&P(b+" has unknown type "+Cb(a));return c}function R(a){if(null===a)return "null";var b=typeof a;return "object"===b||"array"===b||"function"===b?a.toString():""+a}function Jb(a,b){switch(b){case 2:return function(a){return this.fromWireType(ua[a>>2])};case 3:return function(a){return this.fromWireType(va[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Kb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ya(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}function Lb(a,b){for(var c=[],d=0;d<a;d++)c.push(x[(b>>2)+d]);return c}
function Mb(a,b,c){switch(b){case 0:return c?function(a){return B[a]}:function(a){return C[a]};case 1:return c?function(a){return sa[a>>1]}:function(a){return ta[a>>1]};case 2:return c?function(a){return x[a>>2]}:function(a){return F[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Nb={};function Ob(a){var b=Nb[a];return void 0===b?O(a):b}var Pb=[];function Qb(a){a||P("Cannot use deleted val. handle = "+a);return X[a].value}function Rb(a){var b=Pb.length;Pb.push(a);return b}
function Sb(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=Ib(x[(b>>2)+d],"parameter "+d);return c}
function Tb(a,b){Ub=a;Vb=b;if(Wb)if(0==a)Y=function(){var a=Math.max(0,Xb+b-Z())|0;setTimeout(Yb,a);},Zb="timeout";else if(1==a)Y=function(){$b(Yb);},Zb="rAF";else if(2==a){if("undefined"===typeof setImmediate){var c=[];addEventListener("message",function(a){if("setimmediate"===a.data||"setimmediate"===a.data.target)a.stopPropagation(),c.shift()();},!0);setImmediate=function(a){c.push(a);postMessage("setimmediate","*");};}Y=function(){setImmediate(Yb);};Zb="immediate";}}function Z(){y();}
function ac(a){var b=bc;e.noExitRuntime=!0;la(!Wb,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Wb=a;bc=b;var c="undefined"!==typeof b?function(){e.dynCall_vi(a,b);}:function(){e.dynCall_v(a);};var d=cc;Yb=function(){if(!z)if(0<dc.length){var a=Date.now(),b=dc.shift();b.hb(b.Xa);if(ec){var k=ec,h=0==k%1?k-1:Math.floor(k);ec=b.Hb?h:(8*k+(h+.5))/9;}console.log('main loop blocker "'+
b.name+'" took '+(Date.now()-a)+" ms");e.setStatus&&(a=e.statusMessage||"Please wait...",b=ec,k=fc.Lb,b?b<k?e.setStatus(a+" ("+(k-b)+"/"+k+")"):e.setStatus(a):e.setStatus(""));d<cc||setTimeout(Yb,0);}else if(!(d<cc))if(gc=gc+1|0,1==Ub&&1<Vb&&0!=gc%Vb)Y();else{0==Ub&&(Xb=Z());"timeout"===Zb&&e.$a&&(v("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),
Zb="");a:if(!(z||e.preMainLoop&&!1===e.preMainLoop())){try{c();}catch(l){if(l instanceof hc)break a;l&&"object"===typeof l&&l.stack&&v("exception thrown: "+[l,l.stack]);throw l;}e.postMainLoop&&e.postMainLoop();}d<cc||("object"===typeof SDL&&SDL.audio&&SDL.audio.zb&&SDL.audio.zb(),Y());}};}var Y=null,Zb="",cc=0,Wb=null,bc=0,Ub=0,Vb=0,gc=0,dc=[],fc={},Xb,Yb,ec,jc=!1,kc=!1,lc=[];
function mc(){function a(){kc=document.pointerLockElement===e.canvas||document.mozPointerLockElement===e.canvas||document.webkitPointerLockElement===e.canvas||document.msPointerLockElement===e.canvas;}e.preloadPlugins||(e.preloadPlugins=[]);if(!nc){nc=!0;try{oc=!0;}catch(c){oc=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes");}pc="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:oc?null:console.log("warning: no BlobBuilder");
qc="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;e.jb||"undefined"!==typeof qc||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),e.jb=!0);e.preloadPlugins.push({canHandle:function(a){return !e.jb&&/\.(jpg|jpeg|png|bmp)$/i.test(a)},handle:function(a,b,f,g){var c=null;if(oc)try{c=new Blob([a],{type:rc(b)}),c.size!==a.length&&(c=new Blob([(new Uint8Array(a)).buffer],{type:rc(b)}));}catch(n){ha("Blob constructor present but fails: "+
n+"; falling back to blob builder");}c||(c=new pc,c.append((new Uint8Array(a)).buffer),c=c.getBlob());var d=qc.createObjectURL(c),l=new Image;l.onload=function(){la(l.complete,"Image "+b+" could not be decoded");var c=document.createElement("canvas");c.width=l.width;c.height=l.height;c.getContext("2d").drawImage(l,0,0);e.preloadedImages[b]=c;qc.revokeObjectURL(d);f&&f(a);};l.onerror=function(){console.log("Image "+d+" could not be decoded");g&&g();};l.src=d;}});e.preloadPlugins.push({canHandle:function(a){return !e.Pb&&
a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,f,g){function c(c){l||(l=!0,e.preloadedAudios[b]=c,f&&f(a));}function d(){l||(l=!0,e.preloadedAudios[b]=new Audio,g&&g());}var l=!1;if(oc){try{var n=new Blob([a],{type:rc(b)});}catch(t){return d()}n=qc.createObjectURL(n);var p=new Audio;p.addEventListener("canplaythrough",function(){c(p);},!1);p.onerror=function(){if(!l){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var d="",f=0,g=0,
h=0;h<a.length;h++)for(f=f<<8|a[h],g+=8;6<=g;){var k=f>>g-6&63;g-=6;d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[k];}2==g?(d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&3)<<4],d+="=="):4==g&&(d+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&15)<<2],d+="=");p.src="data:audio/x-"+b.substr(-3)+";base64,"+d;c(p);}};p.src=n;sc(function(){c(p);});}else return d()}});var b=e.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||
b.webkitRequestPointerLock||b.msRequestPointerLock||function(){},b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),e.elementPointerLock&&
b.addEventListener("click",function(a){!kc&&e.canvas.requestPointerLock&&(e.canvas.requestPointerLock(),a.preventDefault());},!1));}}
function tc(a,b,c,d){if(b&&e.$a&&a==e.canvas)return e.$a;var f;if(b){var g={antialias:!1,alpha:!1,Nb:1};if(d)for(var k in d)g[k]=d[k];if("undefined"!==typeof GL&&(f=GL.Ib(a,g)))var h=GL.getContext(f).Gb;}else h=a.getContext("2d");if(!h)return null;c&&(b||la("undefined"===typeof GLctx,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),e.$a=h,b&&GL.Ob(f),e.Rb=b,lc.forEach(function(a){a();}),mc());return h}var uc=!1,vc=void 0,wc=void 0;
function xc(a,b,c){function d(){jc=!1;var a=f.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a?(f.exitFullscreen=yc,vc&&f.requestPointerLock(),jc=!0,wc?("undefined"!=typeof SDL&&(x[SDL.screen>>2]=F[SDL.screen>>2]|8388608),zc(e.canvas),Ac()):zc(f)):(a.parentNode.insertBefore(f,a),a.parentNode.removeChild(a),wc?("undefined"!=typeof SDL&&(x[SDL.screen>>2]=F[SDL.screen>>2]&
-8388609),zc(e.canvas),Ac()):zc(f));if(e.onFullScreen)e.onFullScreen(jc);if(e.onFullscreen)e.onFullscreen(jc);}vc=a;wc=b;"undefined"===typeof vc&&(vc=!0);"undefined"===typeof wc&&(wc=!1);var f=e.canvas;uc||(uc=!0,document.addEventListener("fullscreenchange",d,!1),document.addEventListener("mozfullscreenchange",d,!1),document.addEventListener("webkitfullscreenchange",d,!1),document.addEventListener("MSFullscreenChange",d,!1));var g=document.createElement("div");
f.parentNode.insertBefore(g,f);g.appendChild(f);g.requestFullscreen=g.requestFullscreen||g.mozRequestFullScreen||g.msRequestFullscreen||(g.webkitRequestFullscreen?function(){g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);}:null)||(g.webkitRequestFullScreen?function(){g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);}:null);c?g.requestFullscreen({Sb:c}):g.requestFullscreen();}
function Cc(a,b,c){v("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");Cc=function(a,b,c){xc(a,b,c);};xc(a,b,c);}function yc(){if(!jc)return !1;(document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){}).apply(document,[]);return !0}var Dc=0;
function $b(a){if("function"===typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===Dc)Dc=b+1E3/60;else for(;b+2>=Dc;)Dc+=1E3/60;setTimeout(a,Math.max(Dc-b,0));}}function sc(a){e.noExitRuntime=!0;setTimeout(function(){z||a();},1E4);}function rc(a){return {jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var Ec=[];
function Ac(){var a=e.canvas;Ec.forEach(function(b){b(a.width,a.height);});}
function zc(a,b,c){b&&c?(a.Fb=b,a.vb=c):(b=a.Fb,c=a.vb);var d=b,f=c;e.forcedAspectRatio&&0<e.forcedAspectRatio&&(d/f<e.forcedAspectRatio?d=Math.round(f*e.forcedAspectRatio):f=Math.round(d/e.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/d,screen.height/f);d=Math.round(d*g);f=Math.round(f*
g);}wc?(a.width!=d&&(a.width=d),a.height!=f&&(a.height=f),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(d!=b||f!=c?(a.style.setProperty("width",d+"px","important"),a.style.setProperty("height",f+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))));}var Fc={},Gc=0;function Hc(){var a=Gc;Gc++;return a}var nc,oc,pc,qc;
function fa(){return B.length}function Ic(){if("undefined"!==typeof indexedDB)return indexedDB;var a=null;"object"===typeof window&&(a=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB);la(a,"IDBStore used, but indexedDB not supported");return a}var Jc={};
function Kc(a,b){var c=Jc[a];if(c)b(null,c);else{try{var d=Ic().open(a,22);}catch(f){b(f);return}d.onupgradeneeded=function(a){var b=a.target.result;a=a.target.transaction;b.objectStoreNames.contains("FILE_DATA")?a.objectStore("FILE_DATA"):b.createObjectStore("FILE_DATA");};d.onsuccess=function(){c=d.result;Jc[a]=c;b(null,c);};d.onerror=function(a){b(this.error);a.preventDefault();};}}
function Lc(a,b,c){Kc(a,function(a,f){if(a)return c(a);a=f.transaction(["FILE_DATA"],b);a.onerror=function(a){c(this.error||"unknown error");a.preventDefault();};a=a.objectStore("FILE_DATA");c(null,a);});}function Mc(a,b,c){Lc(a,"readonly",function(a,f){if(a)return c(a);a=f.get(b);a.onsuccess=function(a){return (a=a.target.result)?c(null,a):c("file "+b+" not found")};a.onerror=function(a){c(a);};});}
function Nc(a,b,c,d){Lc(a,"readwrite",function(a,g){if(a)return d(a);a=g.put(c,b);a.onsuccess=function(){d();};a.onerror=function(a){d(a);};});}pa("GMT",C,18368,4);
function Oc(){function a(a){return (a=a.toTimeString().match(/\(([A-Za-z ]+)\)$/))?a[1]:"GMT"}if(!Pc){Pc=!0;x[Qc()>>2]=60*(new Date).getTimezoneOffset();var b=new Date(2E3,0,1),c=new Date(2E3,6,1);x[Rc()>>2]=Number(b.getTimezoneOffset()!=c.getTimezoneOffset());var d=a(b),f=a(c);d=ma(Sc(d));f=ma(Sc(f));c.getTimezoneOffset()<b.getTimezoneOffset()?(x[Tc()>>2]=d,x[Tc()+4>>2]=f):(x[Tc()>>2]=f,x[Tc()+4>>2]=d);}}var Pc;
function Uc(a){a=ra(a);var b=E.byteLength;try{return -1!==ka.grow((a-b)/65536)?(E=ka.buffer,!0):!1}catch(c){return !1}}$a=e.InternalError=Za("InternalError");for(var Vc=Array(256),Wc=0;256>Wc;++Wc)Vc[Wc]=String.fromCharCode(Wc);db=Vc;eb=e.BindingError=Za("BindingError");Q.prototype.isAliasOf=function(a){if(!(this instanceof Q&&a instanceof Q))return !1;var b=this.Ia.La.Ka,c=this.Ia.Ja,d=a.Ia.La.Ka;for(a=a.Ia.Ja;b.Pa;)c=b.Wa(c),b=b.Pa;for(;d.Pa;)a=d.Wa(a),d=d.Pa;return b===d&&c===a};
Q.prototype.clone=function(){this.Ia.Ja||gb(this);if(this.Ia.Va)return this.Ia.count.value+=1,this;var a=kb(Object.create(Object.getPrototypeOf(this),{Ia:{value:fb(this.Ia)}}));a.Ia.count.value+=1;a.Ia.Sa=!1;return a};Q.prototype["delete"]=function(){this.Ia.Ja||gb(this);this.Ia.Sa&&!this.Ia.Va&&P("Object already scheduled for deletion");ib(this);jb(this.Ia);this.Ia.Va||(this.Ia.Ma=void 0,this.Ia.Ja=void 0);};Q.prototype.isDeleted=function(){return !this.Ia.Ja};
Q.prototype.deleteLater=function(){this.Ia.Ja||gb(this);this.Ia.Sa&&!this.Ia.Va&&P("Object already scheduled for deletion");mb.push(this);1===mb.length&&lb&&lb(nb);this.Ia.Sa=!0;return this};T.prototype.rb=function(a){this.kb&&(a=this.kb(a));return a};T.prototype.fb=function(a){this.Ra&&this.Ra(a);};T.prototype.argPackAdvance=8;T.prototype.readValueFromPointer=Va;T.prototype.deleteObject=function(a){if(null!==a)a["delete"]();};
T.prototype.fromWireType=function(a){function b(){return this.Za?zb(this.Ka.Ua,{La:this.yb,Ja:c,Oa:this,Ma:a}):zb(this.Ka.Ua,{La:this,Ja:a})}var c=this.rb(a);if(!c)return this.fb(a),null;var d=yb(this.Ka,c);if(void 0!==d){if(0===d.Ia.count.value)return d.Ia.Ja=c,d.Ia.Ma=a,d.clone();d=d.clone();this.fb(a);return d}d=this.Ka.qb(c);d=ob[d];if(!d)return b.call(this);d=this.Ya?d.nb:d.pointerType;var f=wb(c,this.Ka,d.Ka);return null===f?b.call(this):this.Za?zb(d.Ka.Ua,{La:d,Ja:f,Oa:this,Ma:a}):zb(d.Ka.Ua,
{La:d,Ja:f})};e.getInheritedInstanceCount=function(){return Object.keys(xb).length};e.getLiveInheritedInstances=function(){var a=[],b;for(b in xb)xb.hasOwnProperty(b)&&a.push(xb[b]);return a};e.flushPendingDeletes=nb;e.setDelayFunction=function(a){lb=a;mb.length&&lb&&lb(nb);};Bb=e.UnboundTypeError=Za("UnboundTypeError");e.count_emval_handles=function(){for(var a=0,b=5;b<X.length;++b)void 0!==X[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<X.length;++a)if(void 0!==X[a])return X[a];return null};
e.requestFullScreen=function(a,b,c){v("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");e.requestFullScreen=e.requestFullscreen;Cc(a,b,c);};e.requestFullscreen=function(a,b,c){xc(a,b,c);};e.requestAnimationFrame=function(a){$b(a);};e.setCanvasSize=function(a,b,c){zc(e.canvas,a,b);c||Ac();};e.pauseMainLoop=function(){Y=null;cc++;};e.resumeMainLoop=function(){cc++;var a=Ub,b=Vb,c=Wb;Wb=null;ac(c);Tb(a,b);Y();};
e.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0);};e.createContext=function(a,b,c,d){return tc(a,b,c,d)};"undefined"!==typeof dateNow?Z=dateNow:"object"===typeof performance&&performance&&"function"===typeof performance.now?Z=function(){return performance.now()}:Z=Date.now;function Sc(a){var b=Array(qa(a)+1);pa(a,b,0,b.length);return b}
var Zc=e.asm({},{h:y,y:function(){},aa:function(){v("missing function: _ZN5Umbra18createDirRecursiveEPKc");y(-1);},Y:Pa,V:function(){z=!0;throw"Pure virtual function called!";},v:function(){},z:function(a){e.___errno_location&&(x[e.___errno_location()>>2]=a);return a},M:function(a,b){J=b;try{return Ra.ib(),K(),K(),K(),K(),0}catch(c){return y(c),-c.Ta}},L:function(a,b){J=b;try{var c=Ra.ib(),d=K(),f=K();return Ra.Jb(c,d,f)}catch(g){return y(g),-g.Ta}},x:function(a,b){J=b;try{var c=K(),d=K(),f=K();for(b=
a=0;b<f;b++){for(var g=x[d+8*b>>2],k=x[d+(8*b+4)>>2],h=0;h<k;h++){var l=C[g+h],n=Qa[c];0===l||10===l?((1===c?ba:v)(oa(n,0)),n.length=0):n.push(l);}a+=k;}return a}catch(p){return y(p),-p.Ta}},K:function(a,b){J=b;try{var c=D(K()),d=K();return Ra.Kb((void 0).stat,c,d)}catch(f){return y(f),-f.Ta}},u:function(a,b){J=b;return 0},$:function(a,b){J=b;try{var c=D(K()),d=K(),f=K();return (void 0).open(c,d,f).Mb}catch(g){return y(g),-g.Ta}},J:function(a,b){J=b;return 0},I:function(a,b){J=b;try{return Ra.ib(),0}catch(c){return y(c),
-c.Ta}},w:function(){},t:function(a){var b=Ta[a];delete Ta[a];var c=b.bb,d=b.Ra,f=b.gb,g=f.map(function(a){return a.ub}).concat(f.map(function(a){return a.Cb}));bb([a],g,function(a){var g={};f.forEach(function(b,c){var d=a[c],h=b.sb,k=b.tb,l=a[c+f.length],n=b.Bb,Sa=b.Db;g[b.pb]={read:function(a){return d.fromWireType(h(k,a))},write:function(a,b){var c=[];n(Sa,a,l.toWireType(c,b));Ua(c);}};});return [{name:b.name,fromWireType:function(a){var b={},c;for(c in g)b[c]=g[c].read(a);d(a);return b},toWireType:function(a,
b){for(var f in g)if(!(f in b))throw new TypeError("Missing field");var h=c();for(f in g)g[f].write(h,b[f]);null!==a&&a.push(d,h);return h},argPackAdvance:8,readValueFromPointer:Va,Na:d}]});},_:function(a,b,c,d,f){var g=cb(c);b=O(b);N(a,{name:b,fromWireType:function(a){return !!a},toWireType:function(a,b){return b?d:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var d=B;else if(2===c)d=sa;else if(4===c)d=x;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(d[a>>
g])},Na:null});},H:function(a,b,c,d,f,g,k,h,l,n,p,t,u){p=O(p);g=V(f,g);h&&(h=V(k,h));n&&(n=V(l,n));u=V(t,u);var w=Xa(p);qb(w,function(){Eb("Cannot construct "+p+" due to unbound types",[d]);});bb([a,b,c],d?[d]:[],function(b){b=b[0];if(d){var c=b.Ka;var f=c.Ua;}else f=Q.prototype;b=Ya(w,function(){if(Object.getPrototypeOf(this)!==k)throw new eb("Use 'new' to construct "+p);if(void 0===l.eb)throw new eb(p+" has no accessible constructor");var a=l.eb[arguments.length];if(void 0===a)throw new eb("Tried to invoke ctor of "+
p+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(l.eb).toString()+") parameters instead!");return a.apply(this,arguments)});var k=Object.create(f,{constructor:{value:b}});b.prototype=k;var l=new rb(p,b,k,u,c,g,h,n);c=new T(p,l,!0,!1);f=new T(p+"*",l,!1,!1);var r=new T(p+" const*",l,!1,!0);ob[a]={pointerType:f,nb:r};Ab(w,b);return [c,f,r]});},Z:function(a,b){b=O(b);N(a,{name:b,fromWireType:function(a){var b=X[a].value;Gb(a);return b},toWireType:function(a,b){return S(b)},
argPackAdvance:8,readValueFromPointer:Va,Na:null});},s:function(a,b,c,d){function f(){}c=cb(c);b=O(b);f.values={};N(a,{name:b,constructor:f,fromWireType:function(a){return this.constructor.values[a]},toWireType:function(a,b){return b.value},argPackAdvance:8,readValueFromPointer:Hb(b,c,d),Na:null});qb(b,f);},g:function(a,b,c){var d=Ib(a,"enum");b=O(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Ya(d.name+"_"+b,function(){})}});a.values[c]=d;a[b]=d;},G:function(a,
b,c){c=cb(c);b=O(b);N(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+R(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Jb(b,c),Na:null});},d:function(a,b,c,d,f,g){var k=Lb(b,c);a=O(a);f=V(d,f);qb(a,function(){Eb("Cannot call "+a+" due to unbound types",k);},b-1);bb([],k,function(c){var d=a,h=a;c=[c[0],null].concat(c.slice(1));var k=f,t=c.length;2>t&&P("argTypes array size mismatch! Must at least get return value and 'this' types!");
for(var u=null!==c[1]&&!1,w=!1,r=1;r<c.length;++r)if(null!==c[r]&&void 0===c[r].Na){w=!0;break}var Sa="void"!==c[0].name,U="",ca="";for(r=0;r<t-2;++r)U+=(0!==r?", ":"")+"arg"+r,ca+=(0!==r?", ":"")+"arg"+r+"Wired";h="return function "+Xa(h)+"("+U+") {\nif (arguments.length !== "+(t-2)+") {\nthrowBindingError('function "+h+" called with ' + arguments.length + ' arguments, expected "+(t-2)+" args!');\n}\n";w&&(h+="var destructors = [];\n");var ic=w?"destructors":"null";U="throwBindingError invoker fn runDestructors retType classParam".split(" ");
k=[P,k,g,Ua,c[0],c[1]];u&&(h+="var thisWired = classParam.toWireType("+ic+", this);\n");for(r=0;r<t-2;++r)h+="var arg"+r+"Wired = argType"+r+".toWireType("+ic+", arg"+r+"); // "+c[r+2].name+"\n",U.push("argType"+r),k.push(c[r+2]);u&&(ca="thisWired"+(0<ca.length?", ":"")+ca);h+=(Sa?"var rv = ":"")+"invoker(fn"+(0<ca.length?", ":"")+ca+");\n";if(w)h+="runDestructors(destructors);\n";else for(r=u?1:2;r<c.length;++r)t=1===r?"thisWired":"arg"+(r-2)+"Wired",null!==c[r].Na&&(h+=t+"_dtor("+t+"); // "+c[r].name+
"\n",U.push(t+"_dtor"),k.push(c[r].Na));Sa&&(h+="var ret = retType.fromWireType(rv);\nreturn ret;\n");U.push(h+"}\n");c=Kb(U).apply(null,k);Ab(d,c,b-1);return []});},n:function(a,b,c,d,f){function g(a){return a}b=O(b);-1===f&&(f=4294967295);var k=cb(c);if(0===d){var h=32-8*c;g=function(a){return a<<h>>>h};}var l=-1!=b.indexOf("unsigned");N(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+R(c)+'" to '+this.name);if(c<
d||c>f)throw new TypeError('Passing a number "'+R(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return l?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:Mb(b,k,0!==d),Na:null});},j:function(a,b,c){function d(a){a>>=2;var b=F;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=O(c);N(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},
{wb:!0});},F:function(a,b){b=O(b);var c="std::string"===b;N(a,{name:b,fromWireType:function(a){var b=F[a>>2];if(c){var d=C[a+4+b],k=0;0!=d&&(k=d,C[a+4+b]=0);var h=a+4;for(d=0;d<=b;++d){var l=a+4+d;if(0==C[l]){h=D(h);if(void 0===n)var n=h;else n+=String.fromCharCode(0),n+=h;h=l+1;}}0!=k&&(C[a+4+b]=k);}else{n=Array(b);for(d=0;d<b;++d)n[d]=String.fromCharCode(C[a+4+d]);n=n.join("");}W(a);return n},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var d="string"===typeof b;d||b instanceof
Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||P("Cannot pass non-string to std::string");var f=(c&&d?function(){return qa(b)}:function(){return b.length})(),h=A(4+f+1);F[h>>2]=f;if(c&&d)pa(b,C,h+4,f+1);else if(d)for(d=0;d<f;++d){var l=b.charCodeAt(d);255<l&&(W(h),P("String has UTF-16 code units that do not fit in 8 bits"));C[h+4+d]=l;}else for(d=0;d<f;++d)C[h+4+d]=b[d];null!==a&&a.push(W,h);return h},argPackAdvance:8,readValueFromPointer:Va,Na:function(a){W(a);}});},X:function(a,
b,c){c=O(c);if(2===b){var d=function(){return ta};var f=1;}else 4===b&&(d=function(){return F},f=2);N(a,{name:c,fromWireType:function(a){for(var b=d(),c=F[a>>2],g=Array(c),n=a+4>>f,p=0;p<c;++p)g[p]=String.fromCharCode(b[n+p]);W(a);return g.join("")},toWireType:function(a,c){var g=d(),k=c.length,n=A(4+k*b);F[n>>2]=k;for(var p=n+4>>f,t=0;t<k;++t)g[p+t]=c.charCodeAt(t);null!==a&&a.push(W,n);return n},argPackAdvance:8,readValueFromPointer:Va,Na:function(a){W(a);}});},r:function(a,b,c,d,f,g){Ta[a]={name:O(b),
bb:V(c,d),Ra:V(f,g),gb:[]};},i:function(a,b,c,d,f,g,k,h,l,n){Ta[a].gb.push({pb:O(b),ub:c,sb:V(d,f),tb:g,Cb:k,Bb:V(h,l),Db:n});},W:function(a,b){b=O(b);N(a,{xb:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}});},p:function(a,b,c,d){a=Pb[a];b=Qb(b);c=Ob(c);a(b,c,null,d);},b:Gb,o:function(a,b){b=Sb(a,b);for(var c=b[0],d=c.name+"_$"+b.slice(1).map(function(a){return a.name}).join("_")+"$",f=["retType"],g=[c],k="",h=0;h<a-1;++h)k+=(0!==h?", ":"")+"arg"+h,f.push("argType"+h),g.push(b[1+
h]);d="return function "+Xa("methodCaller_"+d)+"(handle, name, destructors, args) {\n";var l=0;for(h=0;h<a-1;++h)d+="    var arg"+h+" = argType"+h+".readValueFromPointer(args"+(l?"+"+l:"")+");\n",l+=b[h+1].argPackAdvance;d+="    var rv = handle[name]("+k+");\n";for(h=0;h<a-1;++h)b[h+1].deleteObject&&(d+="    argType"+h+".deleteObject(arg"+h+");\n");c.xb||(d+="    return retType.toWireType(destructors, rv);\n");f.push(d+"};\n");a=Kb(f).apply(null,g);return Rb(a)},E:function(a){4<a&&(X[a].cb+=1);},q:function(){return S([])},
f:function(a){return S(Ob(a))},m:function(){return S({})},c:function(a,b,c){a=Qb(a);b=Qb(b);c=Qb(c);a[b]=c;},e:function(a,b){a=Ib(a,"_emval_take_value");a=a.readValueFromPointer(b);return S(a)},l:function(){e.abort();},D:function(a){return Na[a]()},U:function(a,b,c,d,f,g,k,h,l,n,p,t){return Na[a](b,c,d,f,g,k,h,l,n,p,t)},C:function(a){(a=Fc[a])&&a.abort();},T:fa,k:Z,B:function(a,b,c,d,f){Mc(D(a),D(b),function(a,b){a?f&&Xc(f,c):(a=A(b.length),C.set(b,a),Yc(d,c,a,b.length),W(a));});},S:function(a,b,c,d,f,
g,k){Nc(D(a),D(b),new Uint8Array(C.subarray(c,c+d)),function(a){a?k&&Xc(k,f):g&&Xc(g,f);});},R:function(a,b,c){C.set(C.subarray(b,b+c),a);},Q:function(a){if(2147418112<a)return !1;for(var b=Math.max(fa(),16777216);b<a;)536870912>=b?b=ra(2*b):b=Math.min(ra((3*b+2147483648)/4),2147418112);if(!Uc(b))return !1;wa();return !0},A:function(){y("trap!");},P:function(a){Oc();a=new Date(1E3*x[a>>2]);x[4580]=a.getSeconds();x[4581]=a.getMinutes();x[4582]=a.getHours();x[4583]=a.getDate();x[4584]=a.getMonth();x[4585]=
a.getFullYear()-1900;x[4586]=a.getDay();var b=new Date(a.getFullYear(),0,1);x[4587]=(a.getTime()-b.getTime())/864E5|0;x[4589]=-(60*a.getTimezoneOffset());var c=(new Date(2E3,6,1)).getTimezoneOffset();b=b.getTimezoneOffset();a=(c!=b&&a.getTimezoneOffset()==Math.min(b,c))|0;x[4588]=a;a=x[Tc()+(a?4:0)>>2];x[4590]=a;return 18320},O:function(a){var b=Date.now()/1E3|0;a&&(x[a>>2]=b);return b},N:function(){y("OOM");},a:ea},E);e.asm=Zc;
e.___embind_register_native_and_builtin_types=function(){return e.asm.ba.apply(null,arguments)};
var Db=e.___getTypeName=function(){return e.asm.ca.apply(null,arguments)},Rc=e.__get_daylight=function(){return e.asm.da.apply(null,arguments)},Qc=e.__get_timezone=function(){return e.asm.ea.apply(null,arguments)},Tc=e.__get_tzname=function(){return e.asm.fa.apply(null,arguments)},W=e._free=function(){return e.asm.ga.apply(null,arguments)},A=e._malloc=function(){return e.asm.ha.apply(null,arguments)},Oa=e.globalCtors=function(){return e.asm.Ga.apply(null,arguments)};
e.stackAlloc=function(){return e.asm.Ha.apply(null,arguments)};e.dynCall_i=function(){return e.asm.ia.apply(null,arguments)};e.dynCall_ii=function(){return e.asm.ja.apply(null,arguments)};e.dynCall_iii=function(){return e.asm.ka.apply(null,arguments)};e.dynCall_iiii=function(){return e.asm.la.apply(null,arguments)};e.dynCall_iiiii=function(){return e.asm.ma.apply(null,arguments)};e.dynCall_iiiiii=function(){return e.asm.na.apply(null,arguments)};
e.dynCall_iiiiiifi=function(){return e.asm.oa.apply(null,arguments)};e.dynCall_iiiiiiiiii=function(){return e.asm.pa.apply(null,arguments)};e.dynCall_iiiji=function(){return e.asm.qa.apply(null,arguments)};e.dynCall_ji=function(){return e.asm.ra.apply(null,arguments)};e.dynCall_jiji=function(){return e.asm.sa.apply(null,arguments)};e.dynCall_v=function(){return e.asm.ta.apply(null,arguments)};var Xc=e.dynCall_vi=function(){return e.asm.ua.apply(null,arguments)};
e.dynCall_vii=function(){return e.asm.va.apply(null,arguments)};e.dynCall_viifiii=function(){return e.asm.wa.apply(null,arguments)};var Yc=e.dynCall_viii=function(){return e.asm.xa.apply(null,arguments)};e.dynCall_viiif=function(){return e.asm.ya.apply(null,arguments)};e.dynCall_viiifi=function(){return e.asm.za.apply(null,arguments)};e.dynCall_viiifiii=function(){return e.asm.Aa.apply(null,arguments)};e.dynCall_viiii=function(){return e.asm.Ba.apply(null,arguments)};
e.dynCall_viiiii=function(){return e.asm.Ca.apply(null,arguments)};e.dynCall_viiiiii=function(){return e.asm.Da.apply(null,arguments)};e.dynCall_viiiiiiiii=function(){return e.asm.Ea.apply(null,arguments)};e.dynCall_viij=function(){return e.asm.Fa.apply(null,arguments)};e.asm=Zc;e.then=function(a){if(e.calledRun)a(e);else{var b=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){b&&b();a(e);};}return e};
function hc(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a;}hc.prototype=Error();hc.prototype.constructor=hc;Ga=function $c(){e.calledRun||ad();e.calledRun||(Ga=$c);};
function ad(){function a(){if(!e.calledRun&&(e.calledRun=!0,!z)){Da||(Da=!0,ya(Aa));ya(Ba);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();Ca.unshift(a);}ya(Ca);}}if(!(0<G)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ea();ya(za);0<G||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("");},
1);a();},1)):a());}}e.run=ad;function y(a){if(e.onAbort)e.onAbort(a);void 0!==a?(ba(a),v(a),a='"'+a+'"'):a="";z=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=y;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();e.noExitRuntime=!0;ad();e.maxBytesDownloaded=0;e.minBytesDownloaded=0;e.URLsDownloaded=new Set([]);
function Ma(a,b,c,d,f,g,k,h,l,n,p){var t=D(a);b=D(b);g=D(g);var u=new XMLHttpRequest;u.open(b,t,!0);if("GET"!=b||0!=g.length)u.withCredentials=!0;u.responseType="arraybuffer";var w=Hc();u.onload=function(){if(200==u.status){var b=new Uint8Array(u.response),g=e.URLsDownloaded;e.maxBytesDownloaded+=u.response.byteLength;g.has(a)||(g.add(a),e.minBytesDownloaded+=u.response.byteLength);n?b.length!=p?e.dynCall_viii(f,w,c,0):(C.set(b,n),e.dynCall_viiii(d,w,c,null,0)):(g=A(b.length),C.set(b,g),e.dynCall_viiii(d,
w,c,g,b.length),W(g));}else e.dynCall_viii(f,w,c,u.status);delete Fc[w];};u.onerror=function(){e.dynCall_viii(f,w,c,u.status);delete Fc[w];};u.onabort=function(){delete Fc[w];};0!=g.length&&u.setRequestHeader("Authorization","Basic "+btoa(g+":"));l=D(l).split("\n");if(2<=l.length)for(t=0;t<l.length;t+=2)u.setRequestHeader(l[t],l[t+1]);"POST"==b?u.send(B.slice(k,k+h)):u.send(null);Fc[w]=u;return w}

  return UmbraNativeAPI
}
);
})();

const TextureFormat = {
  RGBA32: 0,
  RGB24: 1,
  BC1: 2,
  BC3: 3,
  BC4: 4,
  BC5: 5,
  ETC1_RGB: 6,
  RGBA_FLOAT32: 7,
  UNC1: 8,
  JPEG: 9,
  PNG: 10,
  BMP: 11,
  PSD: 12,
  TGA: 13,
  GIF: 14,
  HDR: 15,
  PIC: 16,
  PNM: 17,
  ASTC_4X4: 18,
  ASTC_5X4: 19,
  ASTC_5X5: 20,
  ASTC_6X5: 21,
  ASTC_6X6: 22,
  ASTC_8X5: 23,
  ASTC_8X6: 24,
  ASTC_10X5: 25,
  ASTC_10X6: 26,
  ASTC_8X8: 27,
  ASTC_10X8: 28,
  ASTC_10X10: 29,
  ASTC_12X10: 30,
  ASTC_12X12: 31,
  ARGB32: 32,
  R8: 33,
  PVRTC1_RGB4: 34,
  PVRTC1_RGBA4: 35,
  UINT8: 36,
  UINT16: 37,
  UINT32: 38,
  RGB565: 39,
  RG8: 40,
  RG16F: 41,
  COUNT: 42
};

const TextureFormatNames = [
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
  'uint32',
  'rgb565',
  'rg8',
  'rg16f',
  'count'
];

const ColorSpace = {
  LINEAR: 0,
  SRGB: 1
};

const ColorSpaceNames = [
  'linear',
  'srgb'
];

const TextureType = {
  DIFFUSE: 0,
  NORMAL: 1,
  LEGACY_UNUSED: 2,
  SPECULAR: 3,
  META_INDEX: 4,
  COUNT: 5
};

const TextureTypeNames = [
  'diffuse',
  'normal',
  'legacy_unused',
  'specular',
  'meta_index'
];

const TextureCapability = {
  None: 0 | 0,
  BC1: 1 << 0,
  BC2: 1 << 1,
  BC3: 1 << 2,
  BC4: 1 << 3,
  BC5: 1 << 4,
  BC6H: 1 << 5,
  BC7: 1 << 6,
  ASTC: 1 << 7,
  ETC1: 1 << 8,
  ETC2: 1 << 9,
  EAC_R: 1 << 10,
  EAC_RG: 1 << 11,
  PVRTC1: 1 << 12,
  PVRTC2: 1 << 13,
  ATC: 1 << 14,
  HalfFloat: 1 << 15,
  All: 0xffffffff | 0
};

var formats = /*#__PURE__*/Object.freeze({
  TextureFormat: TextureFormat,
  TextureFormatNames: TextureFormatNames,
  ColorSpace: ColorSpace,
  ColorSpaceNames: ColorSpaceNames,
  TextureType: TextureType,
  TextureTypeNames: TextureTypeNames,
  TextureCapability: TextureCapability
});

const TextureCapability$1 = TextureCapability;

const MAX_LIGHTS = 32;

function assertInteger (x) {
  if (!Number.isInteger(x)) {
    throw new Error('Value was not integer: ' + x.toString())
  }
}

/**
 * We need to use a factory here since the native API classes depend on the Emscripten generated wasm code
 * that can't be loaded as a regular ES6 module. The "Module" object allows access to C++ functions and the
 * Emscripten heap.
 */
let create = (Module) => {
  /**
   * A Buffer is a block of memory in the Emscripten heap. Typed arrays may get detached when Emscripten
   * memory growth happens, so any JS code that wants to read from the heap needs to create its typed views
   * right before they are used.
   *
   * The views are safe to use during synchronous execution, but for example a 'yield' in a generator may
   * trigger memory growth before the caller gets the returned value.
   */
  class Buffer {
    constructor (size, type = Float32Array) {
      assertInteger(size / type.BYTES_PER_ELEMENT);
      if (size === 0) {
        throw new Error('Buffer size was zero')
      }

      this.ofs = Module._malloc(size);
      if (this.ofs === 0) {
        throw new Error(`Allocation of ${size} bytes failed.`)
      }
      this.size = size; // In bytes
      this.type = type;
    }

    destroy () {
      Module._free(this.ofs);
      this.ofs = 0;
      this.size = 0;
    }

    /**
     * A destructive resize operation that never shrinks the buffer.
     * NOTE: Does *not* copy the old data over.
     */
    ensureSize (newSize) {
      if (this.size < newSize) {
        this.destroy();
        this.ofs = Module._malloc(newSize);
        if (this.ofs === 0) {
          throw new Error(`Buffer growth to ${newSize} bytes failed.`)
        }
        this.size = newSize;
      }
    }

    floats () {
      return new Float32Array(Module.HEAPF32.buffer, this.ofs, this.size / 4)
    }

    bytes () {
      return new Uint8Array(Module.HEAPU8.buffer, this.ofs, this.size)
    }
  }

  class BufferView {
    constructor (buffer, start = 0, size = buffer.size, type = buffer.type) {
      this.ofs = buffer.ofs;
      this.start = start;
      this.size = size;
      this.type = type;
      this.heapName = arrayToHeap.get(type);
    }

    getArray () {
      // eslint-disable-next-line new-cap
      return new this.type(Module[this.heapName].buffer, this.ofs + this.start, this.size / this.type.BYTES_PER_ELEMENT)
    }
  }

  // Struct size and field offsets are requried for zero-copy interop
  const renderableSize = Module.getRenderableSize();
  const renderableFields = Module.getRenderableFields();

  // Used by MeshLoader to copy over mesh AABB without extra allocs
  const boundsBuffer = new Buffer(2 * 3 * 4);

  const arrayToHeap = new Map([
    [Float32Array, 'HEAPF32'],
    [Uint32Array, 'HEAPU32'],
    [Uint16Array, 'HEAPU16'],
    [Uint8Array, 'HEAPU8']
  ]);

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
      if (typeof token !== 'string') {
        throw new TypeError('token should be a string')
      }
      if (typeof projectID !== 'string') {
        throw new TypeError('projectID should be a string')
      }
      if (typeof modelID !== 'string') {
        throw new TypeError('modelID should be a string')
      }
      Module.sceneConnect(this.ptr, this.creds, token, projectID, modelID);
    }

    connectWithURL (url) {
      if (typeof url !== 'string') {
        throw new TypeError('URL should be a string')
      }
      if (url.indexOf('http:') === 0 || url.indexOf('https:') === 0) {
        Module.sceneConnectWithURL(this.ptr, this.creds, url);
      } else {
        throw new Error('Should be an HTTP or HTTPS URL')
      }
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
      this.lightBuffer = new Buffer(MAX_LIGHTS * 3 * 4);
      this.temp = undefined;
      this.runtimeAssets = runtimeAssets;
    }

    destroy () {
      this.matrixBuffer.destroy();
      this.vectorBuffer.destroy();
      this.lightBuffer.destroy();
      if (this.temp) {
        this.temp.destroy();
      }
    }

    update (cameraMatrix, positionVector, quality, lights = []) {
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

      if (lights) {
        if (lights.length > MAX_LIGHTS) {
          throw new Error('Too many lights given')
        }
        const buffer = this.lightBuffer.floats();
        for (let i = 0; i < lights.length; i++) {
          buffer[3 * i + 0] = lights[i][0];
          buffer[3 * i + 1] = lights[i][1];
          buffer[3 * i + 2] = lights[i][2];
        }
      }

      Module.viewUpdate(this.ptr, this.matrixBuffer.ofs, quality, this.vectorBuffer.ofs, this.lightBuffer.ofs, lights.length);
    }

    getVisible (batchSize) {
      assertInteger(batchSize);
      const bufferSize = batchSize * renderableSize;

      // Check if we should enlarge or allocate the temp buffer
      if (!this.temp || this.temp.size < bufferSize) {
        if (this.temp) {
          this.temp.destroy();
        }
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

  const vertexBufferMap = new Map([
    ['position', new Buffer(4)],
    ['normal', new Buffer(4)],
    ['uv', new Buffer(4)],
    ['tangent', new Buffer(4)],
    ['index', new Buffer(4)]
  ]);

  function getBufferForAttribute (name, newSize, type) {
    let buffer = vertexBufferMap.get(name);

    if (buffer.size < newSize) {
      if (buffer.size > 0) {
        buffer.destroy();
      }

      buffer = new Buffer(newSize, type);
      vertexBufferMap.set(name, buffer);
    } else if (type) {
      buffer.type = type;
    }

    return buffer
  }

  class MeshLoader {
    constructor (ptr) {
      this.ptr = ptr;
    }

    setBuffers (bufferDescriptors) {
      if (!Module.meshLoaderSetBuffers(this.ptr, bufferDescriptors)) {
        console.log(bufferDescriptors);
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
      /**
       * We support the following attributes: 'position', 'uv', 'normal', 'tangent', and 'index'.
       */
      let bufferDescs = Module.getEmptyMeshBufferDesc();
      let heapBuffers = {};
      let bufferSizes = {};

      Object.keys(attrInfo).forEach(name => {
        const byteSize = vertexCount * attrInfo[name].elemSize;
        assertInteger(byteSize / Float32Array.BYTES_PER_ELEMENT);
        bufferSizes[name] = byteSize;
      });

      Object.keys(attrInfo).forEach(name => {
        let buffer = getBufferForAttribute(name, bufferSizes[name], Float32Array);
        let desc = bufferDescs[name];

        heapBuffers[name] = buffer;

        desc.ptr = buffer.ofs; // Emscripten heap offset
        desc.elemSize = attrInfo[name].elemSize; // Size of a single element
        desc.size = vertexCount; // Number of elements
        desc.stride = desc.elemSize; // Distance (in bytes) between consecutive elements
        desc.flags = 0; // 0: cached memory, 1: uncached memory
      });

      const indexCount = this.indexCount;
      const indexBytes = vertexCount < (1 << 16) ? 2 : 4;

      if (indexCount === 0) {
        throw new Error('Mesh index count was zero!')
      }

      let indexType = indexBytes === 2 ? Uint16Array : Uint32Array;

      let indexBufferSize = indexCount * indexBytes;
      const indexBuffer = getBufferForAttribute('index', indexBufferSize, indexType);

      let index = {};
      index.elemSize = indexBytes;
      index.ptr = indexBuffer.ofs;
      index.size = indexCount;
      index.stride = index.elemSize;
      index.flags = 0;

      heapBuffers['index'] = indexBuffer;
      bufferSizes['index'] = indexBufferSize;
      bufferDescs['index'] = index;

      let views = {};
      Object.keys(heapBuffers).forEach(name => {
        views[name] = new BufferView(heapBuffers[name], 0, bufferSizes[name]);
      });

      return { 'buffers': views, 'desc': bufferDescs }
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

    get bounds () {
      Module.meshLoaderGetBounds(this.ptr, boundsBuffer.ofs);
      const aabb = boundsBuffer.floats();
      return [[aabb[0], aabb[1], aabb[2]], [aabb[3], aabb[4], aabb[5]]]
    }
  }

  class Runtime {
    constructor (client, platformFeatures) {
      /**
       * If no normal map formats are supported then force support for
       * BC5 so that textures get transcoded into an uncompressed format.
       */
      const normalFormats = (
        TextureCapability$1.ETC1 |
        TextureCapability$1.ASTC |
        TextureCapability$1.PVRTC1 |
        TextureCapability$1.BC5);

      let capabilityMask = platformFeatures.capabilityMask;

      if (!(capabilityMask & normalFormats)) {
        capabilityMask |= TextureCapability$1.BC5 | TextureCapability$1.BC4;
      }

      this.client = client;
      this.ptr = Module.runtimeCreate(client.ptr, capabilityMask);
      this.platformFeatures = platformFeatures;

      this.assets = new Map();
      this.nextId = 1;
      this.loader = undefined;
      this.tempTextureBuffer = new Buffer(1024 * 1024, Uint8Array);
      this.tempTranscodedBuffer = new Buffer(4, Uint8Array);

      this.debug = {
        textureFormatsInUse: new Set(),
        platformFeatures
      };
    }

    destroy () {
      this.tempTextureBuffer.destroy();
      this.tempTranscodedBuffer.destroy();
      this.client.destory();
      Module.runtimeDestroy(this.ptr);
      this.ptr = 0;
    }

    createScene () {
      const scenePtr = Module.runtimeCreateScene(this.ptr);
      return new Scene(scenePtr)
    }

    destroyScene (scene) {
      Module.runtimeDestroyScene(this.ptr, scene.ptr);
    }

    createView () {
      const viewPtr = Module.runtimeCreateView(this.ptr);
      return new View(viewPtr, this.assets)
    }

    destroyView (view) {
      Module.runtimeDestroyView(this.ptr, view.ptr);
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
            job.data.bounds = this.loader.bounds;

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
          let info = Module.jobGetTextureData(job.ptr);
          let buffer = this.tempTextureBuffer;

          buffer.ensureSize(info.dataByteSize);

          // Fill the allocated buffer with texture data
          const success = Module.jobCopyTextureContents(job.ptr, buffer.ofs, buffer.size, false);

          if (!success) {
            job.fail();
            const msg = 'Texture copying failed! Job pointer: ' + job.ptr + ', buffer ofs: ' + buffer.ofs + ', buffer size: ' + buffer.size;
            throw new Error(msg)
          }

          let bufferView = new BufferView(buffer, 0, info.dataByteSize);

          if (this.formatNeedsTranscoding(info.format)) {
            let newInfo = this.downsampleAndTranscodeTexture(info, buffer, this.tempTranscodedBuffer);

            info = newInfo;

            const formatToArrayType = {
              [TextureFormat.RGBA32]: Uint8Array,
              [TextureFormat.RGB565]: Uint16Array,
              [TextureFormat.RG8]: Uint8Array,
              [TextureFormat.RG16F]: Uint16Array
            };

            bufferView = new BufferView(this.tempTranscodedBuffer, 0, info.dataByteSize);
            bufferView.type = formatToArrayType[info.format];
          }

          // Convert internal enums to string constants
          info.format = TextureFormatNames[info.format];
          info.colorSpace = ColorSpaceNames[info.colorSpace];
          info.textureType = TextureTypeNames[info.textureType];

          this.debug.textureFormatsInUse.add(info.format);

          job.data = { info: info, buffer: bufferView };
          yield job;
        } else if (job.type === 'CreateMesh') {
          // Mesh jobs create decompression work that needs to be done first.
          this.loader = new MeshLoader(Module.jobGetMeshLoader(job.ptr));
          this.loader.vertexBuffers = this.loader.allocateBuffers();
          this.loader.setBuffers(this.loader.vertexBuffers.desc);
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

    formatNeedsTranscoding (format) {
      const flags = this.platformFeatures.capabilityMask;

      switch (format) {
        case TextureFormat.BC1:
          if (flags & TextureCapability.BC1) {
            return false
          }
          break

        case TextureFormat.BC3:
          if (flags & TextureCapability.BC3) {
            return false
          }
          break

        case TextureFormat.BC4:
          if (flags & TextureCapability.BC4) {
            return false
          }
          break

        case TextureFormat.BC5:
          if (flags & TextureCapability.BC5) {
            return false
          }
          break

        default:
          return false
      }

      return true
    }

    downsampleAndTranscodeTexture (info, buffer, outputBuffer) {
      let newFormat = Module.getUncompressedFromBCFormat(info.format);

      if (newFormat === TextureFormat.COUNT) {
        throw new Error("Couldn't find a matching BC format")
      }

      // If half float is not supported on this platform we need to make do with an 8-bit texture.
      if (newFormat === TextureFormat.RG16F && !this.platformFeatures.halfFloat) {
        newFormat = TextureFormat.RG8;
      }

      const outputSize = Module.getTextureByteSize(info.width, info.height, newFormat);

      outputBuffer.ensureSize(outputSize);

      const result = Module.downsampleAndTranscodeTexture(
        info.format,
        newFormat,
        info.width,
        info.height,
        buffer.ofs,
        info.dataByteSize,
        outputBuffer.ofs,
        outputBuffer.size);

      if (!result.success) {
        throw new Error(`Texture transcoding failed. Input: ${info.format}, output: ${newFormat}, output size: ${outputSize}`)
      }

      if (result.texture.format !== newFormat) {
        throw new Error(`Transcoded texture format was ${result.texture.format} instead of the expected ${newFormat}`)
      }

      // Create a new texture descriptor with updated properties and return it.

      let info2 = Object.assign({}, info);
      let desc = result.texture;

      info2 = Object.assign(info2, {
        format: desc.format,
        width: desc.width,
        height: desc.height,
        dataByteSize: desc.dataByteSize,
        mipByteSizes: [desc.dataByteSize]
      });

      return info2
    }

    getDebugInfo () {
      return Module.runtimeGetDebugInfo(this.ptr)
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

  lib.getProjects = (token) => {
    let endPoint = Module.parseCloudCredentials(token);
    if (endPoint.key === '') {
      throw new Error('Couldn\'t parse token ', token)
    }
    return apicall(endPoint, '/projects', {})
  };

  /**
   * Queries supported texture formats and also enables the relevant WebGL extensions.
   */
  lib.getPlatformFeatures = (gl) => {
    let flags = 0; // We accumulate a texture format bitmask here
    let formats$1 = new Set(); // Will hold all supported format names
    let supportsSRGB = false;
    let supportsHalfFloat = false;

    /**
     * We fetch all extension strings and strip off possible vendor prefixes of WEBGL
     * extensions. However, when we enable the extension we need the original full string.
     * Here 'extStrings' holds a mapping from a shortened to a full extension string.
     */
    let extStrings = new Map([]); // Full strings
    let extNames = []; // Shortened strings
    let allExtensions = gl.getSupportedExtensions();

    for (let full of allExtensions) {
      let shortened = full.replace(/^(.*)_WEBGL_/, 'WEBGL_');
      extStrings.set(shortened, full);
      extNames.push(shortened);
    }

    const mapping = new Map([
      ['WEBGL_compressed_texture_s3tc', {
        mask: TextureCapability.BC1 | TextureCapability.BC2 | TextureCapability.BC3,
        names: ['bc1', 'bc2', 'bc3'] }],
      ['WEBGL_compressed_texture_s3tc_srgb', {
        mask: TextureCapability.BC1 | TextureCapability.BC2 | TextureCapability.BC3,
        names: ['bc1', 'bc2', 'bc3'] }],
      ['WEBGL_compressed_texture_rgtc', {
        mask: TextureCapability.BC4 | TextureCapability.BC5,
        names: ['bc4', 'bc5'] }],
      ['WEBGL_compressed_texture_pvrtc', {
        mask: TextureCapability.PVRTC1,
        names: ['pvrtc1_rgb4', 'pvrtc1_rgba4'] }],
      ['WEBGL_compressed_texture_etc1', {
        mask: TextureCapability.ETC1,
        names: ['etc1_rgb'] }],
      ['WEBGL_compressed_texture_astc', {
        mask: TextureCapability.ASTC,
        names: ['astc_4x4'] }]
    ]);

    for (let key of mapping.keys()) {
      if (extNames.includes(key)) {
        gl.getExtension(extStrings.get(key));
        let value = mapping.get(key);
        flags |= value.mask;
        value.names.forEach(name => formats$1.add(name));
      }
    }

    if (extNames.includes('WEBGL_compressed_texture_s3tc_srgb')) {
      supportsSRGB = true;
    }

    if (extNames.includes('EXT_sRGB')) {
      gl.getExtension(extStrings.get('EXT_sRGB'));
      supportsSRGB = true;
    }

    if (extNames.includes('OES_texture_half_float')) {
      gl.getExtension(extStrings.get('OES_texture_half_float'));
      supportsHalfFloat = true;
    }

    return { capabilityMask: flags, formats: [...formats$1], srgb: supportsSRGB, halfFloat: supportsHalfFloat }
  };

  lib.getIDs = ({ token, projectID, modelID, model, project }) => {
    // The application can connect with either direct IDs or names
    if (projectID && modelID) {
      return Promise.resolve({ project: projectID, model: modelID })
    } else if (project && model) {
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
    } else {
      throw new Error('Invalid project & model ID combination.\nYou should define either both "projectID" and "modelID" or "project" and "model"')
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

function makeFormat (format, type, compressed) {
  return { format, type, compressed }
}

const ThreeFormats = {
  rgb24: makeFormat(RGBFormat, UnsignedByteType, false),
  rgba32: makeFormat(RGBAFormat, UnsignedByteType, false),
  rgb565: makeFormat(RGBFormat, UnsignedShort565Type, false),
  rg8: makeFormat(LuminanceAlphaFormat, UnsignedByteType, false),
  rg16f: makeFormat(LuminanceAlphaFormat, HalfFloatType, false),
  bc1: makeFormat(RGBA_S3TC_DXT1_Format, UnsignedByteType, true),
  bc3: makeFormat(RGBA_S3TC_DXT5_Format, UnsignedByteType, true),
  etc1_rgb: makeFormat(RGB_ETC1_Format, UnsignedByteType, true),
  astc_4x4: makeFormat(RGBA_ASTC_4x4_Format, UnsignedByteType, true),
  pvrtc1_rgb4: makeFormat(RGB_PVRTC_4BPPV1_Format, UnsignedByteType, true)
};

const normalmapChunk = `
#ifdef USE_NORMALMAP
#ifdef USE_TANGENT

vec3 tangentToWorld2 = normal;
vec3 tangentToWorld0 = normalize(tangent - tangentToWorld2 * dot(tangentToWorld2, tangent));

#ifdef UMBRA_FLIP_TANGENT
vec3 tangentToWorld1 = normalize(cross(tangentToWorld0, tangentToWorld2));
#else
vec3 tangentToWorld1 = normalize(cross(tangentToWorld2, tangentToWorld0));
#endif

#if defined(UMBRA_TEXTURE_SUPPORT_BC5) || defined(UMBRA_TEXTURE_SUPPORT_ASTC)
normal.xy = texture2D(normalMap, vUv).xy * 2.0 - 1.0;
normal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));
#elif defined(UMBRA_TEXTURE_SUPPORT_BC3)
normal.xy = texture2D(normalMap, vUv).yw * 2.0 - 1.0;
normal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));
#else
normal.xyz = texture2D(normalMap, vUv).xyz;
normal.xy *= 2.0;
normal.xy -= 1.0;
normal = normalize(normal);
#endif

normal = tangentToWorld0 * normal.x + tangentToWorld1 * normal.y + tangentToWorld2 * normal.z;
normal = normalize(normal);
#endif
#endif

`;

const metalnessMapChunk = `
float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
vec4 texelMetalness = texture2D( metalnessMap, vUv );
metalnessFactor *= texelMetalness.r;
#endif
`;

// The BSDF function (see 'bsdfs.glsl') squares the roughness so we don't need to do it here.
const roughnessMapChunk = `
float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
vec4 texelRoughness = texture2D( roughnessMap, vUv );
float roughness = 1.0 - texelRoughness.g;
roughnessFactor *= roughness;
#endif
`;

/**
 * ShaderPatcher is a preprocessor class that replaces the default PBR texture read
 * shader chunks with the correct Umbra versions. Doing it this way instead of completely
 * custom shaders allows the application to use its own materials with Umbrafied models.
 */
class ShaderPatcher {
  constructor (formats) {
    /*
     * World space transform can swap handedness which isn't handled by three.js in tangent space
     * normal maps so we need to be able to flip them ourselves.
     */
    this.flipTangent = false;

    // Texture format feature flags
    this.defines = '';

    if (formats.formats.indexOf('bc3') > -1) {
      this.defines += '#define UMBRA_TEXTURE_SUPPORT_BC3\n';
    }
    if (formats.formats.indexOf('bc5') > -1) {
      this.defines += '#define UMBRA_TEXTURE_SUPPORT_BC5\n';
    }
    if (formats.formats.indexOf('astc_4x4') > -1) {
      this.defines += '#define UMBRA_TEXTURE_SUPPORT_ASTC\n';
    }
  }

  process (shader, renderer) {
    let frag = shader.fragmentShader;

    if (this.flipTangent) {
      frag = '#define UMBRA_FLIP_TANGENT\n' + frag;
    }

    frag = this.defines + frag;
    frag = frag.replace('#include <normal_fragment_maps>', normalmapChunk);
    frag = frag.replace('#include <metalnessmap_fragment>', metalnessMapChunk);
    frag = frag.replace('#include <roughnessmap_fragment>', roughnessMapChunk);

    shader.fragmentShader = frag;
  }
}

class ObjectPool {
  constructor () {
    this.usedList = [];
    this.freeList = [];
  }

  allocate (makeFunc) {
    let obj;
    if (this.freeList.length > 0) {
      obj = this.freeList.pop();
    } else {
      obj = makeFunc();
    }

    this.usedList.push(obj);
    return obj
  }

  freeAll (clearFunc) {
    for (let i = 0; i < this.usedList.length; i++) {
      if (clearFunc) {
        clearFunc(this.usedList[i]);
      }
      this.freeList.push(this.usedList[i]);
    }
    this.usedList.length = 0;
  }

  clear () {
    this.usedList.length = 0;
    this.freeList.length = 0;
  }
}

function ModelObject (runtime, scene, renderer, platform) {
  Object3D.call(this);

  // User editable config
  this.quality = 0.5; // Streaming model quality. Ranges from 0 to 1.
  this.opaqueMaterial = new MeshBasicMaterial();
  this.wireframe = false;
  this.freeze = false;

  // We need to flip the Z-axis since models are stored in "left-handed Y is up" coordinate system
  this.scale.set(1.0, 1.0, -1.0);

  // Streaming debug info accessible through getInfo()
  this.stats = {
    numVisible: 0,
    numShadowCasters: 0,
    numCachedMaterials: 0,
    numAssets: 0
  };

  // We need to present ourselves as a LOD object to get the update() call
  this.isLOD = true;
  this.autoUpdate = true;
  this.renderer = renderer;
  this.cameraToView = new Map();
  this.viewLastUsed = new Map();
  this.materialPool = new ObjectPool();
  this.shaderPatcher = new ShaderPatcher(platform.features);
  this.name = 'UmbraModel';

  // Add API objects under their own object for clarity
  this.umbra = {
    runtime: runtime,
    scene: scene
  };

  // Temporary values we don't want to reallocate every frame
  this.matrixWorldInverse = new Matrix4();
  this.projScreenMatrix = new Matrix4();
  this.cameraWorldPosition = new Vector3();

  this.tempVector = new Vector3();
  this.dirVector = new Vector3();
}

ModelObject.prototype = Object.create(Object3D.prototype);
ModelObject.prototype.constructor = Object3D;

ModelObject.prototype.getInfo = function () {
  let info = { connected: this.umbra.scene.isConnected() };
  if (info.connected) {
    info['sceneInfo'] = this.umbra.scene.getInfo();
  }
  Object.assign(info, this.stats);
  return info
};

ModelObject.prototype.getBounds = function () {
  if (!this.umbra.scene.isConnected()) {
    return undefined
  }

  const info = this.umbra.scene.getInfo();
  const bounds = info.bounds;
  const min = bounds.min;
  const max = bounds.max;
  let box = new Box3(new Vector3(min[0], min[1], min[2]), new Vector3(max[0], max[1], max[2]));
  return box
};

function findLights (scene) {
  const lights = [];
  scene.traverseVisible(obj => {
    if (obj.isDirectionalLight && obj.castShadow) {
      lights.push(obj);
    }
  });

  return lights
}

ModelObject.prototype.getCenter = function () {
  const bounds = this.getBounds();
  bounds.applyMatrix4(this.matrixWorld);
  let center = new Vector3();
  bounds.getCenter(center);
  return center
};

ModelObject.prototype.pruneOldViews = function (frame) {
  /**
   * We get no notification when cameras are removed from the scene graph
   * so we'll go and remove old views.
   */
  for (let [view, lastUsed] of this.viewLastUsed) {
    if (frame - lastUsed > 1000) {
      for (let [cam, view2] of this.cameraToView) {
        if (view2 === view) {
          this.cameraToView.delete(cam);
          break
        }
      }
      this.umbra.runtime.destroyView(view);
      this.viewLastUsed.delete(view);
    }
  }
};

ModelObject.prototype.update = function (camera) {
  let scene;

  if (this.freeze) {
    return
  }

  this.traverseAncestors(obj => {
    if (obj.isScene) {
      scene = obj;
    }
  });

  if (!scene && !scene.isScene) {
    console.log('No parent scene found');
    return
  }

  let lights = [];

  if (this.renderer.shadowMap.enabled) {
    lights = findLights(scene);
  }

  let view = this.cameraToView.get(camera);

  if (!view) {
    view = this.umbra.runtime.createView();
    this.cameraToView.set(camera, view);
  }

  const frame = this.renderer.info.render.frame;

  this.viewLastUsed.set(view, frame);
  this.pruneOldViews(frame);

  this.umbra.scene.update(this.matrixWorld.elements);

  // If we are using a PBR material then we might need to flip the tangent vector
  if (typeof this.opaqueMaterial.normalMapType !== 'undefined') {
    // TODO(pvaananen): Would be nice to avoid recalculating the determinant every frame.
    const flip = this.matrixWorld.determinant() < 0;

    if (flip !== this.shaderPatcher.flipTangent) {
      this.shaderPatcher.flipTangent = flip;
      this.materialPool.clear();
    }
  }

  this.matrixWorldInverse.getInverse(camera.matrixWorld);
  this.projScreenMatrix.multiplyMatrices(camera.projectionMatrix, this.matrixWorldInverse);

  let dir = this.dirVector;
  let vector3 = this.tempVector;

  const lightDirections = lights.map(light => {
    dir.setFromMatrixPosition(light.target.matrixWorld);
    vector3.setFromMatrixPosition(light.matrixWorld);
    dir.sub(vector3);
    return [dir.x, dir.y, dir.z]
  }, lights);

  // By default we stream in meshes around the camera, but the user can override it too.
  if (camera.umbraStreamingPosition) {
    this.cameraWorldPosition.copy(camera.umbraStreamingPosition);
  } else {
    camera.getWorldPosition(this.cameraWorldPosition);
  }

  const pos = this.cameraWorldPosition;
  view.update(this.projScreenMatrix.elements, [pos.x, pos.y, pos.z], this.quality, lightDirections);

  this.stats.numVisible = 0;
  this.stats.numAssets = this.umbra.runtime.assets.size;

  /**
   * Next we find the visible Umbra meshes and add them to the scene graph.
   * This is pretty tricky, because we want more meshes to show up in the shadow map pass
   * than in the main camera render pass. This is why 'mesh.castShadow' doesn't help here
   * since it does the exact opposite.
   *
   * We use a workaround that first adds the common meshes as children of the Umbra model
   * object but stashes the shadow caster meshes (visible only from lights) to an extra
   * list 'shadowCasters'.
   *
   * The trick is that after the children, we add a 'proxy' object that presents itself
   * as a 'LOD' object. As a consequence it gets its own update() call, and there we go
   * and add the shadow casters also to the children list. At this point the opaque
   * renderable objects were already collected to their own render list, so 'children'
   * is safe to modify.
   *
   * In essence, the flow is the following.
   *
   *    three.js                           model object (this)
   *    --------                           ------------------
   *    Starts traversing scene graph
   *    Calls model.update(cam) ---------> Updates views
   *                                       Fetches a list of renderables
   *                                       Adds common meshes to this.children
   *    Adds model.children to
   *      the render list
   *    Starts rendering model.children
   *    Calls proxy.update(cam) ---------> Proxy goes and adds shadow casters to this.children
   *    Starts the shadow pass
   *    Adds model.children to shadow
   *      render list
   *    Renders the shadow pass
   *    Renders the opaque pass
   *    Renders the transparent pass
   *
   * As you can see, the 'this.children' list is mutated halfway through the renderer's
   * scene graph traversal so that different object list ends up to the shadow pass render code.
   */

  // First filter away last frame's meshes
  let newChildren = [];
  for (let i = 0; i < this.children.length; i++) {
    if (!this.children[i].isUmbraMesh) {
      newChildren.push(this.children[i]);
    }
  }

  this.children = newChildren;

  let shadowCasters = [];

  let proxy = new Object3D();
  proxy.isLOD = true;
  proxy.autoUpdate = true;
  proxy.update = cam => {
    // Remove the proxy itself
    this.children.pop();

    // Add the shadow casters
    for (let i = 0; i < shadowCasters.length; i++) {
      this.children.push(shadowCasters[i]);
    }
  };

  this.materialPool.freeAll(mat => {
    // Remove references to textures so GC can release the three.js objects
    delete mat.map;
    delete mat.normalMap;
    delete mat.metalnessMap;
    delete mat.roughnessMap;
  });

  const batchSize = 200;
  let visible = [];

  do {
    visible = view.getVisible(batchSize);

    for (let i = 0; i < visible.length; i++) {
      const { materialDesc, geometry } = visible[i].mesh;

      // Fetch a new material from the pool if we already have free ones. This avoids
      // extra allocations and more importantly 'onBeforeCompile' calls.
      const material = this.materialPool.allocate(() => this.opaqueMaterial.clone());
      material.wireframe = this.wireframe;

      material.onBeforeCompile = (shader, renderer) => {
        /**
         * If the original material already had a custom preprocessor callback we need to call
         * that first. We need to use 'apply' in case the callback uses 'this' reference to
         * access some material properties.
         */
        if (this.opaqueMaterial.onBeforeCompile) {
          this.opaqueMaterial.onBeforeCompile.apply(material, [shader, renderer]);
        }

        this.shaderPatcher.process(shader, renderer);
      };

      const diffuseMap = materialDesc.textures[formats.TextureType.DIFFUSE];
      const normalMap = materialDesc.textures[formats.TextureType.NORMAL];
      const metalglossMap = materialDesc.textures[formats.TextureType.SPECULAR];

      if (diffuseMap && diffuseMap.isTexture) {
        material.map = diffuseMap;
      }

      if (normalMap && normalMap.isTexture) {
        material.normalMap = normalMap;
        material.vertexTangents = true;
        material.normalMapType = TangentSpaceNormalMap;
      }

      if (metalglossMap && metalglossMap.isTexture) {
        material.metalnessMap = metalglossMap;
        material.metalness = 1.0;
        material.roughnessMap = metalglossMap;
        material.roughness = 1.0;
      }

      /**
       * We instatiate new Mesh objects each frame but the constructor is very cheap
       * and the references should live for a very short time since 'this.children'
       * gets cleared every frame. However if this still causes too much allocations
       * an object pool could help.
       */
      const mesh = new Mesh(geometry, material);
      mesh.isUmbraMesh = true;
      mesh.matrixWorld.copy(this.matrixWorld);
      mesh.castShadow = this.castShadow;
      mesh.receiveShadow = this.receiveShadow;
      mesh.visible = true;
      this.children.push(mesh);

      if ((visible[i].mask & 0x01) === 0) {
        shadowCasters.push(mesh);
        mesh.frustumCulled = true;
      } else {
        this.children.push(mesh);
        mesh.frustumCulled = false;
      }
    }

    this.stats.numVisible += visible.length;
  } while (visible.length === batchSize)

  this.stats.numShadowCasters = shadowCasters.length;
  this.stats.numCachedMaterials = this.materialPool.usedList.length + this.materialPool.freeList.length;

  if (shadowCasters.length > 0) {
    this.children.push(proxy);
  }
};

ModelObject.prototype.dispose = function () {
  this.umbra.runtime.destroyView(this.umbra.view);
  this.umbra.runtime.destroyScene(this.umbra.scene);
  // Runtime must be manually freed by the user with .dispose() of the API object
};

/**
 * A wrapper type for mesh geometry and its material. Only the ModelObject instantiates the
 * THREE.Mesh objects that are passed to the renderer. ModelObject also creates the final
 * THREE.Material instance using the textures and transparency flag in 'materialDesc'
 */
function MeshDescriptor (geometry, materialDesc) {
  this.geometry = geometry;
  this.materialDesc = materialDesc;
}

function makeBoundingSphere (aabb) {
  const min = aabb[0];
  const max = aabb[1];
  const size = new Vector3(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
  const pos = new Vector3(min[0] + size.x * 0.5, min[1] + size.y * 0.5, min[2] + size.z * 0.5);
  return new Sphere(pos, size.length())
}

function initWithThreeJS (renderer, userConfig) {
  if (REVISION !== '106') {
    throw new Error(`Only three.js r106 is supported. Got three.js ${REVISION} instead.`)
  }

  if (!renderer) {
    throw new TypeError('"renderer" should be of type THREE.WebGLRenderer')
  }

  return UmbraLibrary(userConfig).then(Umbra => {
    const features = Umbra.getPlatformFeatures(renderer.context);

    // Three.js does not support BC5 compressed formats so we manually disable them.
    features.capabilityMask &= ~formats.TextureCapability.BC5;

    let runtime = new Umbra.wrappers.Runtime(new Umbra.wrappers.Client(), features);

    /**
     * Creating a model is an asynchronous operation because we might need to query the Project API
     * to map the given string names into numeric IDs. If IDs or URL are used then the promise will
     * resolve immediately.
     */
    let createModel = cloudArgs => {
      const scene = runtime.createScene();

      return new Promise((resolve, reject) => {
        try {
          if ('url' in cloudArgs) {
            scene.connectWithURL(cloudArgs.url);
            resolve(new ModelObject(runtime, scene, renderer, { features }));
          } else {
            return Umbra.getIDs(cloudArgs).then(
              IDs => {
                scene.connect(cloudArgs.token, IDs.project, IDs.model);
                resolve(new ModelObject(runtime, scene, renderer, { features }));
              },
              () => {
                console.log('error');
                throw new Error(`Couldn't fetch IDs matching names ${cloudArgs.project} and ${cloudArgs.model}`)
              })
          }
        } catch (e) {
          runtime.destroyScene(scene);
          reject(e);
        }
      })
    };

    /*
     * This launches new downloads and hands out generated assets to three.js.
     * Should be called at the beginning of a frame.
     */
    let update = function (timeBudget = 10) {
      const handlers = {
        CreateMaterial: job => {
          runtime.addAsset(job, job.data);
        },
        DestroyMaterial: job => {
          runtime.removeAsset(job, job.data);
        },
        CreateTexture: job => {
          const info = job.data.info;
          const buffer = job.data.buffer;

          let glformat;

          if (ThreeFormats.hasOwnProperty(info.format)) {
            glformat = ThreeFormats[info.format];
          }

          if (!glformat) {
            // Add a dummy object for unknown formats. They will appear as a solid black color.
            console.log('Unknown texture format', info.format);
            runtime.addAsset(job, { isTexture: false });
            return
          }

          // eslint-disable-next-line new-cap
          const pixelData = new buffer.type(buffer.getArray().slice());

          let tex;
          if (glformat.compressed) {
            const mip = {
              width: info.width,
              height: info.height,
              data: pixelData
            };
            tex = new CompressedTexture([mip], info.width, info.height);
          } else {
            tex = new DataTexture(pixelData, info.width, info.height);
          }

          tex.format = glformat.format;
          tex.type = glformat.type;
          tex.magFilter = LinearFilter;
          tex.minFilter = LinearFilter;
          tex.anisotropy = 0;

          /**
           * A workaround for the case where we directly output colors in gamma space.
           * We make all textures linear to avoid gamma expansion at texture fetch time.
           * This is slightly wrong because texture filtering and shading will be done
           * in gamma space, but this behavior is what people usually expect.
           */
          if (info.textureType === 'diffuse' && !renderer.gammaOutput) {
            tex.encoding = LinearEncoding;
          } else {
            tex.encoding = info.colorSpace === 'linear' ? LinearEncoding : sRGBEncoding;
          }

          tex.needsUpdate = true;

          runtime.addAsset(job, tex);
        },
        DestroyTexture: job => {
          // Free texture data only if it's not a dummy texture
          if (job.data.isTexture) {
            job.data.dispose();
          }
          runtime.removeAsset(job, job.data);
        },
        CreateMesh: job => {
          /**
           * The mesh creation job gives us all the vertex data in job.data.buffers.
           * The buffers are only valid during this handler, and the memory will be
           * reused for other meshes later. Therefore we make copies of the arrays
           * for three.js which is something we would have to do anyway.
           */

          const geometry = new BufferGeometry();
          const indexArray = job.data.buffers['index'].getArray();
          const indices = Array.from(indexArray);
          geometry.setIndex(indices);
          geometry.boundingSphere = makeBoundingSphere(job.data.bounds);

          const attribs = {
            position: { components: 3 },
            normal: { components: 3 },
            uv: { components: 2 },
            tangent: { components: 3 }
          };

          Object.keys(attribs).forEach(name => {
            const buffer = job.data.buffers[name];

            if (buffer) {
              const array = buffer.getArray();
              const attrib = new Float32BufferAttribute(array.slice(), attribs[name].components);
              geometry.addAttribute(name, attrib);
            }
          });

          const meshDescriptor = new MeshDescriptor(geometry, job.data.material);
          runtime.addAsset(job, meshDescriptor);
        },
        DestroyMesh: job => {
          const meshDesc = job.data;
          // Tell Umbra's runtime that this asset doesn't exist anymore and finish the job
          runtime.removeAsset(job, meshDesc);
          // Release three.js's resources
          meshDesc.geometry.dispose();
        }
      };

      runtime.handleJobs(handlers, timeBudget);
      runtime.update();
    };

    /**
     * Returns streaming information. We can't tell which files came from the browser cache
     * so we report lower and upper limits of the true download size.
     *
     * The returned object has the following fields:
     *
     *  'maxBytesDownloaded' is an upper limit assuming no file was cached,
     *  'minBytesDownloaded' is the corresponding lower limit assuming all duplicates came from cache.
     *
     */
    function getStats () {
      return {
        maxBytesDownloaded: Umbra.nativeModule.maxBytesDownloaded,
        minBytesDownloaded: Umbra.nativeModule.minBytesDownloaded
      }
    }

    return {
      createModel,
      getStats,
      update: update,
      dispose: () => {
        runtime.destroy();
        runtime = undefined;
      },
      lib: Umbra,
      runtime: runtime
    }
  })
}

export { initWithThreeJS };
