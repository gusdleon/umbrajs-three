import { UnsignedByteType, RGBAFormat, UnsignedShort565Type, RGBFormat, LuminanceAlphaFormat, HalfFloatType, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT5_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGB_PVRTC_4BPPV1_Format, Object3D, MeshBasicMaterial, Box3, Vector3, TangentSpaceNormalMap, Mesh, Loader as Loader$1, Matrix4, CompressedTexture, DataTexture, LinearFilter, sRGBEncoding, LinearEncoding, BufferGeometry, Sphere, Float32BufferAttribute } from 'three';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray$1(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var UmbraNativeAPI = function () {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

  return function (UmbraNativeAPI) {
    UmbraNativeAPI = UmbraNativeAPI || {};
    var c;
    c || (c = typeof UmbraNativeAPI !== 'undefined' ? UmbraNativeAPI : {});
    var aa = {},
        p;

    for (p in c) {
      c.hasOwnProperty(p) && (aa[p] = c[p]);
    }

    c.arguments = [];
    c.thisProgram = "./this.program";

    c.quit = function (a, b) {
      throw b;
    };

    c.preRun = [];
    c.postRun = [];
    var u = "";
    document.currentScript && (u = document.currentScript.src);
    _scriptDir && (u = _scriptDir);
    0 !== u.indexOf("blob:") ? u = u.substr(0, u.lastIndexOf("/") + 1) : u = "";
    var ba = c.print || ("undefined" !== typeof console ? console.log.bind(console) : "undefined" !== typeof print ? print : null),
        v = c.printErr || ("undefined" !== typeof printErr ? printErr : "undefined" !== typeof console && console.warn.bind(console) || ba);

    for (p in aa) {
      aa.hasOwnProperty(p) && (c[p] = aa[p]);
    }

    aa = void 0;

    function ca(a) {
      da || (da = {});
      da[a] || (da[a] = 1, v(a));
    }

    var da,
        ea = {
      "f64-rem": function f64Rem(a, b) {
        return a % b;
      },
      "debugger": function _debugger() {
        debugger;
      }
    };
    "object" !== (typeof WebAssembly === "undefined" ? "undefined" : _typeof$1(WebAssembly)) && v("no native wasm support detected");
    var w,
        x = !1;

    function fa(a, b) {
      a || z("Assertion failed: " + b);
    }

    function ha(a) {
      var b = c["_" + a];
      fa(b, "Cannot call unknown function " + a + ", make sure it is exported");
      return b;
    }

    function ia(a, b, d, e) {
      var f = {
        string: function string(a) {
          var b = 0;

          if (null !== a && void 0 !== a && 0 !== a) {
            var d = (a.length << 2) + 1;
            b = ja(d);
            ka(a, b, d);
          }

          return b;
        },
        array: function array(a) {
          var b = ja(a.length);
          A.set(a, b);
          return b;
        }
      },
          g = ha(a),
          k = [];
      a = 0;
      if (e) for (var h = 0; h < e.length; h++) {
        var l = f[d[h]];
        l ? (0 === a && (a = la()), k[h] = l(e[h])) : k[h] = e[h];
      }
      d = g.apply(null, k);

      d = function (a) {
        return "string" === b ? B(a) : "boolean" === b ? !!a : a;
      }(d);

      0 !== a && ma(a);
      return d;
    }

    var na = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

    function oa(a, b, d) {
      var e = b + d;

      for (d = b; a[d] && !(d >= e);) {
        ++d;
      }

      if (16 < d - b && a.subarray && na) return na.decode(a.subarray(b, d));

      for (e = ""; b < d;) {
        var f = a[b++];

        if (f & 128) {
          var g = a[b++] & 63;
          if (192 == (f & 224)) e += String.fromCharCode((f & 31) << 6 | g);else {
            var k = a[b++] & 63;
            f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | k : (f & 7) << 18 | g << 12 | k << 6 | a[b++] & 63;
            65536 > f ? e += String.fromCharCode(f) : (f -= 65536, e += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
          }
        } else e += String.fromCharCode(f);
      }

      return e;
    }

    function B(a) {
      return a ? oa(C, a, void 0) : "";
    }

    function ka(a, b, d) {
      var e = C;

      if (0 < d) {
        d = b + d - 1;

        for (var f = 0; f < a.length; ++f) {
          var g = a.charCodeAt(f);

          if (55296 <= g && 57343 >= g) {
            var k = a.charCodeAt(++f);
            g = 65536 + ((g & 1023) << 10) | k & 1023;
          }

          if (127 >= g) {
            if (b >= d) break;
            e[b++] = g;
          } else {
            if (2047 >= g) {
              if (b + 1 >= d) break;
              e[b++] = 192 | g >> 6;
            } else {
              if (65535 >= g) {
                if (b + 2 >= d) break;
                e[b++] = 224 | g >> 12;
              } else {
                if (b + 3 >= d) break;
                e[b++] = 240 | g >> 18;
                e[b++] = 128 | g >> 12 & 63;
              }

              e[b++] = 128 | g >> 6 & 63;
            }

            e[b++] = 128 | g & 63;
          }
        }

        e[b] = 0;
      }
    }

    "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");

    function pa(a) {
      0 < a % 65536 && (a += 65536 - a % 65536);
      return a;
    }

    var D, A, C, qa, ra, E, _F, sa, ta;

    function ua() {
      c.HEAP8 = A = new Int8Array(D);
      c.HEAP16 = qa = new Int16Array(D);
      c.HEAP32 = E = new Int32Array(D);
      c.HEAPU8 = C = new Uint8Array(D);
      c.HEAPU16 = ra = new Uint16Array(D);
      c.HEAPU32 = _F = new Uint32Array(D);
      c.HEAPF32 = sa = new Float32Array(D);
      c.HEAPF64 = ta = new Float64Array(D);
    }

    var va = c.TOTAL_MEMORY || 134217728;
    5242880 > va && v("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + va + "! (TOTAL_STACK=5242880)");
    c.wasmMemory ? w = c.wasmMemory : w = new WebAssembly.Memory({
      initial: va / 65536
    });
    w && (D = w.buffer);
    va = D.byteLength;
    ua();
    E[4356] = 5260336;

    function wa(a) {
      for (; 0 < a.length;) {
        var b = a.shift();
        if ("function" == typeof b) b();else {
          var d = b.Sb;
          "number" === typeof d ? void 0 === b.Pb ? c.dynCall_v(d) : c.dynCall_vi(d, b.Pb) : d(void 0 === b.Pb ? null : b.Pb);
        }
      }
    }

    var xa = [],
        za = [],
        Aa = [],
        Ba = [],
        Ca = [];

    function Da() {
      var a = c.preRun.shift();
      xa.unshift(a);
    }

    var G = 0,
        Fa = null;
    c.preloadedImages = {};
    c.preloadedAudios = {};

    function Ga() {
      var a = H;
      return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
    }

    var H = "umbra.wasm";

    if (!Ga()) {
      var Ha = H;
      H = c.locateFile ? c.locateFile(Ha, u) : u + Ha;
    }

    function Ia() {
      try {
        if (c.wasmBinary) return new Uint8Array(c.wasmBinary);
        throw "both async and sync fetching of the wasm failed";
      } catch (a) {
        z(a);
      }
    }

    function Ja() {
      return c.wasmBinary || "function" !== typeof fetch ? new Promise(function (a) {
        a(Ia());
      }) : fetch(H, {
        credentials: "same-origin"
      }).then(function (a) {
        if (!a.ok) throw "failed to load wasm binary file at '" + H + "'";
        return a.arrayBuffer();
      })["catch"](function () {
        return Ia();
      });
    }

    function Ka(a) {
      function b(a) {
        c.asm = a.exports;
        G--;
        c.monitorRunDependencies && c.monitorRunDependencies(G);
        0 == G && (Fa && (a = Fa, Fa = null, a()));
      }

      function d(a) {
        b(a.instance);
      }

      function e(a) {
        return Ja().then(function (a) {
          return WebAssembly.instantiate(a, f);
        }).then(a, function (a) {
          v("failed to asynchronously prepare wasm: " + a);
          z(a);
        });
      }

      var f = {
        env: a,
        global: {
          NaN: NaN,
          Infinity: Infinity
        },
        "global.Math": Math,
        asm2wasm: ea
      };
      G++;
      c.monitorRunDependencies && c.monitorRunDependencies(G);
      if (c.instantiateWasm) try {
        return c.instantiateWasm(f, b);
      } catch (g) {
        return v("Module.instantiateWasm callback failed with error: " + g), !1;
      }

      (function () {
        if (c.wasmBinary || "function" !== typeof WebAssembly.instantiateStreaming || Ga() || "function" !== typeof fetch) return e(d);
        fetch(H, {
          credentials: "same-origin"
        }).then(function (a) {
          return WebAssembly.instantiateStreaming(a, f).then(d, function (a) {
            v("wasm streaming compile failed: " + a);
            v("falling back to ArrayBuffer instantiation");
            e(d);
          });
        });
      })();

      return {};
    }

    c.asm = function (a, b) {
      b.memory = w;
      b.table = new WebAssembly.Table({
        initial: 357,
        maximum: 357,
        element: "anyfunc"
      });
      b.__memory_base = 1024;
      b.__table_base = 0;
      return Ka(b);
    };

    var Ma = [function () {
      alert("Invalid http method.");
    }, function (a, b, d, e, f, g, k, h, l, m, t) {
      return La(a, b, d, e, f, g, k, h, l, m, t);
    }, function () {
      alert("Uploads are not supported.");
    }];
    za.push({
      Sb: function Sb() {
        Na();
      }
    });

    function Oa(a, b) {
      Ba.unshift({
        Sb: a,
        Pb: b
      });
    }

    var Pa = [null, [], []];

    function Qa(a, b) {
      var d = Pa[a];
      0 === b || 10 === b ? ((1 === a ? ba : v)(oa(d, 0)), d.length = 0) : d.push(b);
    }

    var _I = 0;

    function J() {
      _I += 4;
      return E[_I - 4 >> 2];
    }

    var Ra = {},
        Sa = {};

    function Ta(a) {
      for (; a.length;) {
        var b = a.pop();
        a.pop()(b);
      }
    }

    function Ua(a) {
      return this.fromWireType(_F[a >> 2]);
    }

    var K = {},
        L = {},
        Va = {};

    function Wa(a) {
      if (void 0 === a) return "_unknown";
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? "_" + a : a;
    }

    function Xa(a, b) {
      a = Wa(a);
      return new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(b);
    }

    function Ya(a) {
      var b = Error,
          d = Xa(a, function (b) {
        this.name = a;
        this.message = b;
        b = Error(b).stack;
        void 0 !== b && (this.stack = this.toString() + "\n" + b.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      d.prototype = Object.create(b.prototype);
      d.prototype.constructor = d;

      d.prototype.toString = function () {
        return void 0 === this.message ? this.name : this.name + ": " + this.message;
      };

      return d;
    }

    var Za = void 0;

    function $a(a, b, d) {
      function e(b) {
        b = d(b);
        if (b.length !== a.length) throw new Za("Mismatched type converter count");

        for (var e = 0; e < a.length; ++e) {
          M(a[e], b[e]);
        }
      }

      a.forEach(function (a) {
        Va[a] = b;
      });
      var f = Array(b.length),
          g = [],
          k = 0;
      b.forEach(function (a, b) {
        L.hasOwnProperty(a) ? f[b] = L[a] : (g.push(a), K.hasOwnProperty(a) || (K[a] = []), K[a].push(function () {
          f[b] = L[a];
          ++k;
          k === g.length && e(f);
        }));
      });
      0 === g.length && e(f);
    }

    function ab(a) {
      switch (a) {
        case 1:
          return 0;

        case 2:
          return 1;

        case 4:
          return 2;

        case 8:
          return 3;

        default:
          throw new TypeError("Unknown type size: " + a);
      }
    }

    var bb = void 0;

    function N(a) {
      for (var b = ""; C[a];) {
        b += bb[C[a++]];
      }

      return b;
    }

    var cb = void 0;

    function O(a) {
      throw new cb(a);
    }

    function M(a, b, d) {
      d = d || {};
      if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var e = b.name;
      a || O('type "' + e + '" must have a positive integer typeid pointer');

      if (L.hasOwnProperty(a)) {
        if (d.cc) return;
        O("Cannot register type '" + e + "' twice");
      }

      L[a] = b;
      delete Va[a];
      K.hasOwnProperty(a) && (b = K[a], delete K[a], b.forEach(function (a) {
        a();
      }));
    }

    var db = [],
        P = [{}, {
      value: void 0
    }, {
      value: null
    }, {
      value: !0
    }, {
      value: !1
    }];

    function eb(a) {
      4 < a && 0 === --P[a].Tb && (P[a] = void 0, db.push(a));
    }

    function R(a) {
      switch (a) {
        case void 0:
          return 1;

        case null:
          return 2;

        case !0:
          return 3;

        case !1:
          return 4;

        default:
          var b = db.length ? db.pop() : P.length;
          P[b] = {
            Tb: 1,
            value: a
          };
          return b;
      }
    }

    function fb(a) {
      if (null === a) return "null";

      var b = _typeof$1(a);

      return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
    }

    function gb(a, b) {
      switch (b) {
        case 2:
          return function (a) {
            return this.fromWireType(sa[a >> 2]);
          };

        case 3:
          return function (a) {
            return this.fromWireType(ta[a >> 3]);
          };

        default:
          throw new TypeError("Unknown float type: " + a);
      }
    }

    function hb(a) {
      var b = Function;
      if (!(b instanceof Function)) throw new TypeError("new_ called with constructor type " + _typeof$1(b) + " which is not a function");
      var d = Xa(b.name || "unknownFunctionName", function () {});
      d.prototype = b.prototype;
      d = new d();
      a = b.apply(d, a);
      return a instanceof Object ? a : d;
    }

    function ib(a, b) {
      var d = c;

      if (void 0 === d[a].Nb) {
        var e = d[a];

        d[a] = function () {
          d[a].Nb.hasOwnProperty(arguments.length) || O("Function '" + b + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + d[a].Nb + ")!");
          return d[a].Nb[arguments.length].apply(this, arguments);
        };

        d[a].Nb = [];
        d[a].Nb[e.Xb] = e;
      }
    }

    function jb(a, b, d) {
      c.hasOwnProperty(a) ? ((void 0 === d || void 0 !== c[a].Nb && void 0 !== c[a].Nb[d]) && O("Cannot register public name '" + a + "' twice"), ib(a, a), c.hasOwnProperty(d) && O("Cannot register multiple overloads of a function with the same number of arguments (" + d + ")!"), c[a].Nb[d] = b) : (c[a] = b, void 0 !== d && (c[a].vc = d));
    }

    function kb(a, b) {
      for (var d = [], e = 0; e < a; e++) {
        d.push(E[(b >> 2) + e]);
      }

      return d;
    }

    function lb(a, b) {
      a = N(a);
      if (void 0 !== c["FUNCTION_TABLE_" + a]) var d = c["FUNCTION_TABLE_" + a][b];else if ("undefined" !== typeof FUNCTION_TABLE) d = FUNCTION_TABLE[b];else {
        d = c["dynCall_" + a];
        void 0 === d && (d = c["dynCall_" + a.replace(/f/g, "d")], void 0 === d && O("No dynCall invoker for signature: " + a));

        for (var e = [], f = 1; f < a.length; ++f) {
          e.push("a" + f);
        }

        f = "return function " + ("dynCall_" + a + "_" + b) + "(" + e.join(", ") + ") {\n";
        f += "    return dynCall(rawFunction" + (e.length ? ", " : "") + e.join(", ") + ");\n";
        d = new Function("dynCall", "rawFunction", f + "};\n")(d, b);
      }
      "function" !== typeof d && O("unknown function pointer with signature " + a + ": " + b);
      return d;
    }

    var mb = void 0;

    function nb(a) {
      a = ob(a);
      var b = N(a);
      S(a);
      return b;
    }

    function pb(a, b) {
      function d(a) {
        f[a] || L[a] || (Va[a] ? Va[a].forEach(d) : (e.push(a), f[a] = !0));
      }

      var e = [],
          f = {};
      b.forEach(d);
      throw new mb(a + ": " + e.map(nb).join([", "]));
    }

    function qb(a, b, d) {
      switch (b) {
        case 0:
          return d ? function (a) {
            return A[a];
          } : function (a) {
            return C[a];
          };

        case 1:
          return d ? function (a) {
            return qa[a >> 1];
          } : function (a) {
            return ra[a >> 1];
          };

        case 2:
          return d ? function (a) {
            return E[a >> 2];
          } : function (a) {
            return _F[a >> 2];
          };

        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }

    function T(a) {
      a || O("Cannot use deleted val. handle = " + a);
      return P[a].value;
    }

    function rb(a, b) {
      var d = L[a];
      void 0 === d && O(b + " has unknown type " + nb(a));
      return d;
    }

    var sb = {};

    function tb(a) {
      var b = sb[a];
      return void 0 === b ? N(a) : b;
    }

    var ub = [];

    function vb(a) {
      var b = ub.length;
      ub.push(a);
      return b;
    }

    function wb(a, b) {
      for (var d = Array(a), e = 0; e < a; ++e) {
        d[e] = rb(E[(b >> 2) + e], "parameter " + e);
      }

      return d;
    }

    function xb(a, b) {
      yb = a;
      zb = b;
      if (Ab) if (0 == a) U = function U() {
        var a = Math.max(0, Bb + b - V()) | 0;
        setTimeout(_Cb, a);
      }, Db = "timeout";else if (1 == a) U = function U() {
        Eb(_Cb);
      }, Db = "rAF";else if (2 == a) {
        if ("undefined" === typeof setImmediate) {
          var d = [];
          addEventListener("message", function (a) {
            if ("setimmediate" === a.data || "setimmediate" === a.data.target) a.stopPropagation(), d.shift()();
          }, !0);

          setImmediate = function setImmediate(a) {
            d.push(a);
            postMessage("setimmediate", "*");
          };
        }

        U = function U() {
          setImmediate(_Cb);
        };

        Db = "immediate";
      }
    }

    function V() {
      z();
    }

    function Fb(a) {
      var b = Gb;
      c.noExitRuntime = !0;
      fa(!Ab, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
      Ab = a;
      Gb = b;
      var d = "undefined" !== typeof b ? function () {
        c.dynCall_vi(a, b);
      } : function () {
        c.dynCall_v(a);
      };
      var e = W;

      _Cb = function Cb() {
        if (!x) if (0 < Hb.length) {
          var a = Date.now(),
              b = Hb.shift();
          b.Sb(b.Pb);

          if (false) {
            var k;
          }

          console.log('main loop blocker "' + b.name + '" took ' + (Date.now() - a) + " ms");
          c.setStatus && (a = c.statusMessage || "Please wait...", b = Ib, k = Jb.qc, b ? b < k ? c.setStatus(a + " (" + (k - b) + "/" + k + ")") : c.setStatus(a) : c.setStatus(""));
          e < W || setTimeout(_Cb, 0);
        } else if (!(e < W)) if (Kb = Kb + 1 | 0, 1 == yb && 1 < zb && 0 != Kb % zb) U();else {
          0 == yb && (Bb = V());
          "timeout" === Db && c.Rb && (v("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), Db = "");

          a: if (!(x || c.preMainLoop && !1 === c.preMainLoop())) {
            try {
              d();
            } catch (l) {
              if (l instanceof Lb) break a;
              l && "object" === _typeof$1(l) && l.stack && v("exception thrown: " + [l, l.stack]);
              throw l;
            }

            c.postMainLoop && c.postMainLoop();
          }

          e < W || ("object" === (typeof SDL === "undefined" ? "undefined" : _typeof$1(SDL)) && SDL.audio && SDL.audio.ec && SDL.audio.ec(), U());
        }
      };
    }

    var U = null,
        Db = "",
        W = 0,
        Ab = null,
        Gb = 0,
        yb = 0,
        zb = 0,
        Kb = 0,
        Hb = [],
        Jb = {},
        Bb,
        _Cb,
        Ib,
        Nb = !1,
        Ob = !1,
        Pb = [];

    function Qb() {
      function a() {
        Ob = document.pointerLockElement === c.canvas || document.mozPointerLockElement === c.canvas || document.webkitPointerLockElement === c.canvas || document.msPointerLockElement === c.canvas;
      }

      c.preloadPlugins || (c.preloadPlugins = []);

      if (!Rb) {
        Rb = !0;

        try {
          Sb = !0;
        } catch (d) {
          Sb = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }

        Tb = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Sb ? null : console.log("warning: no BlobBuilder");
        Ub = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
        c.Wb || "undefined" !== typeof Ub || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), c.Wb = !0);
        c.preloadPlugins.push({
          canHandle: function canHandle(a) {
            return !c.Wb && /\.(jpg|jpeg|png|bmp)$/i.test(a);
          },
          handle: function handle(a, b, f, g) {
            var d = null;
            if (Sb) try {
              d = new Blob([a], {
                type: Vb(b)
              }), d.size !== a.length && (d = new Blob([new Uint8Array(a).buffer], {
                type: Vb(b)
              }));
            } catch (m) {
              ca("Blob constructor present but fails: " + m + "; falling back to blob builder");
            }
            d || (d = new Tb(), d.append(new Uint8Array(a).buffer), d = d.getBlob());
            var e = Ub.createObjectURL(d),
                l = new Image();

            l.onload = function () {
              fa(l.complete, "Image " + b + " could not be decoded");
              var d = document.createElement("canvas");
              d.width = l.width;
              d.height = l.height;
              d.getContext("2d").drawImage(l, 0, 0);
              c.preloadedImages[b] = d;
              Ub.revokeObjectURL(e);
              f && f(a);
            };

            l.onerror = function () {
              console.log("Image " + e + " could not be decoded");
              g && g();
            };

            l.src = e;
          }
        });
        c.preloadPlugins.push({
          canHandle: function canHandle(a) {
            return !c.uc && a.substr(-4) in {
              ".ogg": 1,
              ".wav": 1,
              ".mp3": 1
            };
          },
          handle: function handle(a, b, f, g) {
            function d(d) {
              l || (l = !0, c.preloadedAudios[b] = d, f && f(a));
            }

            function e() {
              l || (l = !0, c.preloadedAudios[b] = new Audio(), g && g());
            }

            var l = !1;

            if (Sb) {
              try {
                var m = new Blob([a], {
                  type: Vb(b)
                });
              } catch (q) {
                return e();
              }

              m = Ub.createObjectURL(m);
              var t = new Audio();
              t.addEventListener("canplaythrough", function () {
                d(t);
              }, !1);

              t.onerror = function () {
                if (!l) {
                  console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");

                  for (var e = "", f = 0, g = 0, h = 0; h < a.length; h++) {
                    for (f = f << 8 | a[h], g += 8; 6 <= g;) {
                      var k = f >> g - 6 & 63;
                      g -= 6;
                      e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[k];
                    }
                  }

                  2 == g ? (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 3) << 4], e += "==") : 4 == g && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 15) << 2], e += "=");
                  t.src = "data:audio/x-" + b.substr(-3) + ";base64," + e;
                  d(t);
                }
              };

              t.src = m;
              Wb(function () {
                d(t);
              });
            } else return e();
          }
        });
        var b = c.canvas;
        b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function () {}, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {}, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), c.elementPointerLock && b.addEventListener("click", function (a) {
          !Ob && c.canvas.requestPointerLock && (c.canvas.requestPointerLock(), a.preventDefault());
        }, !1));
      }
    }

    function Xb(a, b, d, e) {
      if (b && c.Rb && a == c.canvas) return c.Rb;
      var f;

      if (b) {
        var g = {
          antialias: !1,
          alpha: !1,
          sc: 1
        };
        if (e) for (var k in e) {
          g[k] = e[k];
        }
        if ("undefined" !== typeof GL && (f = GL.nc(a, g))) var h = GL.getContext(f).lc;
      } else h = a.getContext("2d");

      if (!h) return null;
      d && (b || fa("undefined" === typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), c.Rb = h, b && GL.tc(f), c.wc = b, Pb.forEach(function (a) {
        a();
      }), Qb());
      return h;
    }

    var Yb = !1,
        Zb = void 0,
        X = void 0;

    function $b(a, b, d) {
      function e() {
        Nb = !1;
        var a = f.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a ? (f.exitFullscreen = ac, Zb && f.requestPointerLock(), Nb = !0, X ? ("undefined" != typeof SDL && (E[SDL.screen >> 2] = _F[SDL.screen >> 2] | 8388608), bc(c.canvas), cc()) : bc(f)) : (a.parentNode.insertBefore(f, a), a.parentNode.removeChild(a), X ? ("undefined" != typeof SDL && (E[SDL.screen >> 2] = _F[SDL.screen >> 2] & -8388609), bc(c.canvas), cc()) : bc(f));
        if (c.onFullScreen) c.onFullScreen(Nb);
        if (c.onFullscreen) c.onFullscreen(Nb);
      }

      Zb = a;
      X = b;
      "undefined" === typeof Zb && (Zb = !0);
      "undefined" === typeof X && (X = !1);
      var f = c.canvas;
      Yb || (Yb = !0, document.addEventListener("fullscreenchange", e, !1), document.addEventListener("mozfullscreenchange", e, !1), document.addEventListener("webkitfullscreenchange", e, !1), document.addEventListener("MSFullscreenChange", e, !1));
      var g = document.createElement("div");
      f.parentNode.insertBefore(g, f);
      g.appendChild(f);
      g.requestFullscreen = g.requestFullscreen || g.mozRequestFullScreen || g.msRequestFullscreen || (g.webkitRequestFullscreen ? function () {
        g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (g.webkitRequestFullScreen ? function () {
        g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null);
      d ? g.requestFullscreen({
        xc: d
      }) : g.requestFullscreen();
    }

    function ec(a, b, d) {
      v("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");

      ec = function ec(a, b, d) {
        $b(a, b, d);
      };

      $b(a, b, d);
    }

    function ac() {
      if (!Nb) return !1;
      (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {}).apply(document, []);
      return !0;
    }

    var fc = 0;

    function Eb(a) {
      if ("function" === typeof requestAnimationFrame) requestAnimationFrame(a);else {
        var b = Date.now();
        if (0 === fc) fc = b + 1E3 / 60;else for (; b + 2 >= fc;) {
          fc += 1E3 / 60;
        }
        setTimeout(a, Math.max(fc - b, 0));
      }
    }

    function Wb(a) {
      c.noExitRuntime = !0;
      setTimeout(function () {
        x || a();
      }, 1E4);
    }

    function Vb(a) {
      return {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        bmp: "image/bmp",
        ogg: "audio/ogg",
        wav: "audio/wav",
        mp3: "audio/mpeg"
      }[a.substr(a.lastIndexOf(".") + 1)];
    }

    var gc = [];

    function cc() {
      var a = c.canvas;
      gc.forEach(function (b) {
        b(a.width, a.height);
      });
    }

    function bc(a, b, d) {
      b && d ? (a.kc = b, a.bc = d) : (b = a.kc, d = a.bc);
      var e = b,
          f = d;
      c.forcedAspectRatio && 0 < c.forcedAspectRatio && (e / f < c.forcedAspectRatio ? e = Math.round(f * c.forcedAspectRatio) : f = Math.round(e / c.forcedAspectRatio));

      if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
        var g = Math.min(screen.width / e, screen.height / f);
        e = Math.round(e * g);
        f = Math.round(f * g);
      }

      X ? (a.width != e && (a.width = e), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != d && (a.height = d), "undefined" != typeof a.style && (e != b || f != d ? (a.style.setProperty("width", e + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
    }

    var Y = {},
        hc = 0;

    function ic() {
      var a = hc;
      hc++;
      return a;
    }

    var Rb, Sb, Tb, Ub;

    function jc() {
      return A.length;
    }

    function kc() {
      if ("undefined" !== typeof indexedDB) return indexedDB;
      var a = null;
      "object" === (typeof window === "undefined" ? "undefined" : _typeof$1(window)) && (a = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
      fa(a, "IDBStore used, but indexedDB not supported");
      return a;
    }

    var lc = {};

    function mc(a, b) {
      var d = lc[a];
      if (d) b(null, d);else {
        try {
          var e = kc().open(a, 22);
        } catch (f) {
          b(f);
          return;
        }

        e.onupgradeneeded = function (a) {
          var b = a.target.result;
          a = a.target.transaction;
          b.objectStoreNames.contains("FILE_DATA") ? a.objectStore("FILE_DATA") : b.createObjectStore("FILE_DATA");
        };

        e.onsuccess = function () {
          d = e.result;
          lc[a] = d;
          b(null, d);
        };

        e.onerror = function (a) {
          b(this.error);
          a.preventDefault();
        };
      }
    }

    function nc(a, b, d) {
      mc(a, function (a, f) {
        if (a) return d(a);
        a = f.transaction(["FILE_DATA"], b);

        a.onerror = function (a) {
          d(this.error || "unknown error");
          a.preventDefault();
        };

        a = a.objectStore("FILE_DATA");
        d(null, a);
      });
    }

    function oc(a, b, d) {
      nc(a, "readonly", function (a, f) {
        if (a) return d(a);
        a = f.get(b);

        a.onsuccess = function (a) {
          return (a = a.target.result) ? d(null, a) : d("file " + b + " not found");
        };

        a.onerror = function (a) {
          d(a);
        };
      });
    }

    function pc(a, b, d, e) {
      nc(a, "readwrite", function (a, g) {
        if (a) return e(a);
        a = g.put(d, b);

        a.onsuccess = function () {
          e();
        };

        a.onerror = function (a) {
          e(a);
        };
      });
    }

    function qc(a) {
      if (!c.noExitRuntime && (x = !0, wa(Ba), c.onExit)) c.onExit(a);
      c.quit(a, new Lb(a));
    }

    c._exit = qc;
    ka("GMT", 17328, 4);

    function rc(a) {
      a = pa(a);
      var b = D.byteLength;

      try {
        return -1 !== w.grow((a - b) / 65536) ? (D = w.buffer, !0) : !1;
      } catch (d) {
        return !1;
      }
    }

    Ba.push(function () {
      var a = c._fflush;
      a && a(0);
      Pa[1].length && Qa(1, 10);
      Pa[2].length && Qa(2, 10);
    });
    Za = c.InternalError = Ya("InternalError");

    for (var sc = Array(256), tc = 0; 256 > tc; ++tc) {
      sc[tc] = String.fromCharCode(tc);
    }

    bb = sc;
    cb = c.BindingError = Ya("BindingError");

    c.count_emval_handles = function () {
      for (var a = 0, b = 5; b < P.length; ++b) {
        void 0 !== P[b] && ++a;
      }

      return a;
    };

    c.get_first_emval = function () {
      for (var a = 5; a < P.length; ++a) {
        if (void 0 !== P[a]) return P[a];
      }

      return null;
    };

    mb = c.UnboundTypeError = Ya("UnboundTypeError");

    c.requestFullScreen = function (a, b, d) {
      v("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");
      c.requestFullScreen = c.requestFullscreen;
      ec(a, b, d);
    };

    c.requestFullscreen = function (a, b, d) {
      $b(a, b, d);
    };

    c.requestAnimationFrame = function (a) {
      Eb(a);
    };

    c.setCanvasSize = function (a, b, d) {
      bc(c.canvas, a, b);
      d || cc();
    };

    c.pauseMainLoop = function () {
      U = null;
      W++;
    };

    c.resumeMainLoop = function () {
      W++;
      var a = yb,
          b = zb,
          d = Ab;
      Ab = null;
      Fb(d);
      xb(a, b);
      U();
    };

    c.getUserMedia = function () {
      window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
      window.getUserMedia(void 0);
    };

    c.createContext = function (a, b, d, e) {
      return Xb(a, b, d, e);
    };

    "undefined" !== typeof dateNow ? V = dateNow : "object" === (typeof performance === "undefined" ? "undefined" : _typeof$1(performance)) && performance && "function" === typeof performance.now ? V = function V() {
      return performance.now();
    } : V = Date.now;
    var xc = c.asm({}, {
      k: z,
      z: function z() {},
      ea: function ea() {
        v("missing function: _ZN5Umbra13MiniSceneCopy7connectERK20UmbraSceneCopySource");
        z(-1);
      },
      $: function $() {
        v("missing function: _ZN5Umbra13MiniSceneCopy9getStatusEPf");
        z(-1);
      },
      D: function D() {
        v("missing function: _ZN5Umbra13MiniSceneCopyC1ERNS_11MiniRuntimeERK25UmbraSceneCopyDestinationPK20UmbraEnvironmentInfoRKN5Eigen6MatrixIfLi3ELi1ELi0ELi3ELi1EEEfi");
        z(-1);
      },
      Y: function Y() {
        return Oa.apply(null, arguments);
      },
      v: function v() {},
      y: function y(a) {
        c.___errno_location && (E[c.___errno_location() >> 2] = a);
        return a;
      },
      M: function M(a, b) {
        _I = b;

        try {
          return Ra.Vb(), J(), J(), J(), J(), 0;
        } catch (d) {
          return z(d), -d.Qb;
        }
      },
      L: function L(a, b) {
        _I = b;

        try {
          var d = Ra.Vb(),
              e = J(),
              f = J();
          return Ra.oc(d, e, f);
        } catch (g) {
          return z(g), -g.Qb;
        }
      },
      x: function x(a, b) {
        _I = b;

        try {
          var d = J(),
              e = J(),
              f = J();

          for (b = a = 0; b < f; b++) {
            for (var g = E[e + 8 * b >> 2], k = E[e + (8 * b + 4) >> 2], h = 0; h < k; h++) {
              Qa(d, C[g + h]);
            }

            a += k;
          }

          return a;
        } catch (l) {
          return z(l), -l.Qb;
        }
      },
      da: function da(a, b) {
        _I = b;

        try {
          var d = B(J()),
              e = J();
          return Ra.pc((void 0).stat, d, e);
        } catch (f) {
          return z(f), -f.Qb;
        }
      },
      K: function K(a, b) {
        _I = b;
        return 0;
      },
      ca: function ca(a, b) {
        _I = b;

        try {
          var d = B(J()),
              e = J(),
              f = J();
          return (void 0).open(d, e, f).rc;
        } catch (g) {
          return z(g), -g.Qb;
        }
      },
      J: function J(a, b) {
        _I = b;
        return 0;
      },
      I: function I(a, b) {
        _I = b;

        try {
          return Ra.Vb(), 0;
        } catch (d) {
          return z(d), -d.Qb;
        }
      },
      w: function w() {},
      H: function H(a) {
        var b = Sa[a];
        delete Sa[a];
        var d = b.fc,
            e = b.gc,
            f = b.Ub,
            g = f.map(function (a) {
          return a.ac;
        }).concat(f.map(function (a) {
          return a.ic;
        }));
        $a([a], g, function (a) {
          var g = {};
          f.forEach(function (b, d) {
            var e = a[d],
                h = b.Zb,
                k = b.$b,
                l = a[d + f.length],
                m = b.hc,
                ya = b.jc;
            g[b.Yb] = {
              read: function read(a) {
                return e.fromWireType(h(k, a));
              },
              write: function write(a, b) {
                var d = [];
                m(ya, a, l.toWireType(d, b));
                Ta(d);
              }
            };
          });
          return [{
            name: b.name,
            fromWireType: function fromWireType(a) {
              var b = {},
                  d;

              for (d in g) {
                b[d] = g[d].read(a);
              }

              e(a);
              return b;
            },
            toWireType: function toWireType(a, b) {
              for (var f in g) {
                if (!(f in b)) throw new TypeError("Missing field");
              }

              var h = d();

              for (f in g) {
                g[f].write(h, b[f]);
              }

              null !== a && a.push(e, h);
              return h;
            },
            argPackAdvance: 8,
            readValueFromPointer: Ua,
            Ob: e
          }];
        });
      },
      ba: function ba(a, b, d, e, f) {
        var g = ab(d);
        b = N(b);
        M(a, {
          name: b,
          fromWireType: function fromWireType(a) {
            return !!a;
          },
          toWireType: function toWireType(a, b) {
            return b ? e : f;
          },
          argPackAdvance: 8,
          readValueFromPointer: function readValueFromPointer(a) {
            if (1 === d) var e = A;else if (2 === d) e = qa;else if (4 === d) e = E;else throw new TypeError("Unknown boolean type size: " + b);
            return this.fromWireType(e[a >> g]);
          },
          Ob: null
        });
      },
      p: function p(a, b, d) {
        a = N(a);
        $a([], [b], function (b) {
          b = b[0];
          c[a] = b.fromWireType(d);
          return [];
        });
      },
      aa: function aa(a, b) {
        b = N(b);
        M(a, {
          name: b,
          fromWireType: function fromWireType(a) {
            var b = P[a].value;
            eb(a);
            return b;
          },
          toWireType: function toWireType(a, b) {
            return R(b);
          },
          argPackAdvance: 8,
          readValueFromPointer: Ua,
          Ob: null
        });
      },
      G: function G(a, b, d) {
        d = ab(d);
        b = N(b);
        M(a, {
          name: b,
          fromWireType: function fromWireType(a) {
            return a;
          },
          toWireType: function toWireType(a, b) {
            if ("number" !== typeof b && "boolean" !== typeof b) throw new TypeError('Cannot convert "' + fb(b) + '" to ' + this.name);
            return b;
          },
          argPackAdvance: 8,
          readValueFromPointer: gb(b, d),
          Ob: null
        });
      },
      j: function j(a, b, d, e, f, g) {
        var k = kb(b, d);
        a = N(a);
        f = lb(e, f);
        jb(a, function () {
          pb("Cannot call " + a + " due to unbound types", k);
        }, b - 1);
        $a([], k, function (d) {
          var e = a,
              h = a;
          d = [d[0], null].concat(d.slice(1));
          var k = f,
              q = d.length;
          2 > q && O("argTypes array size mismatch! Must at least get return value and 'this' types!");

          for (var r = null !== d[1] && !1, y = !1, n = 1; n < d.length; ++n) {
            if (null !== d[n] && void 0 === d[n].Ob) {
              y = !0;
              break;
            }
          }

          var ya = "void" !== d[0].name,
              Q = "",
              Z = "";

          for (n = 0; n < q - 2; ++n) {
            Q += (0 !== n ? ", " : "") + "arg" + n, Z += (0 !== n ? ", " : "") + "arg" + n + "Wired";
          }

          h = "return function " + Wa(h) + "(" + Q + ") {\nif (arguments.length !== " + (q - 2) + ") {\nthrowBindingError('function " + h + " called with ' + arguments.length + ' arguments, expected " + (q - 2) + " args!');\n}\n";
          y && (h += "var destructors = [];\n");
          var Mb = y ? "destructors" : "null";
          Q = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
          k = [O, k, g, Ta, d[0], d[1]];
          r && (h += "var thisWired = classParam.toWireType(" + Mb + ", this);\n");

          for (n = 0; n < q - 2; ++n) {
            h += "var arg" + n + "Wired = argType" + n + ".toWireType(" + Mb + ", arg" + n + "); // " + d[n + 2].name + "\n", Q.push("argType" + n), k.push(d[n + 2]);
          }

          r && (Z = "thisWired" + (0 < Z.length ? ", " : "") + Z);
          h += (ya ? "var rv = " : "") + "invoker(fn" + (0 < Z.length ? ", " : "") + Z + ");\n";
          if (y) h += "runDestructors(destructors);\n";else for (n = r ? 1 : 2; n < d.length; ++n) {
            q = 1 === n ? "thisWired" : "arg" + (n - 2) + "Wired", null !== d[n].Ob && (h += q + "_dtor(" + q + "); // " + d[n].name + "\n", Q.push(q + "_dtor"), k.push(d[n].Ob));
          }
          ya && (h += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
          Q.push(h + "}\n");
          d = hb(Q).apply(null, k);
          n = b - 1;
          if (!c.hasOwnProperty(e)) throw new Za("Replacing nonexistant public symbol");
          void 0 !== c[e].Nb && void 0 !== n ? c[e].Nb[n] = d : (c[e] = d, c[e].Xb = n);
          return [];
        });
      },
      s: function s(a, b, d, e, f) {
        function g(a) {
          return a;
        }

        b = N(b);
        -1 === f && (f = 4294967295);
        var k = ab(d);

        if (0 === e) {
          var h = 32 - 8 * d;

          g = function g(a) {
            return a << h >>> h;
          };
        }

        var l = -1 != b.indexOf("unsigned");
        M(a, {
          name: b,
          fromWireType: g,
          toWireType: function toWireType(a, d) {
            if ("number" !== typeof d && "boolean" !== typeof d) throw new TypeError('Cannot convert "' + fb(d) + '" to ' + this.name);
            if (d < e || d > f) throw new TypeError('Passing a number "' + fb(d) + '" from JS side to C/C++ side to an argument of type "' + b + '", which is outside the valid range [' + e + ", " + f + "]!");
            return l ? d >>> 0 : d | 0;
          },
          argPackAdvance: 8,
          readValueFromPointer: qb(b, k, 0 !== e),
          Ob: null
        });
      },
      o: function o(a, b, d) {
        function e(a) {
          a >>= 2;
          var b = _F;
          return new f(b.buffer, b[a + 1], b[a]);
        }

        var f = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
        d = N(d);
        M(a, {
          name: d,
          fromWireType: e,
          argPackAdvance: 8,
          readValueFromPointer: e
        }, {
          cc: !0
        });
      },
      F: function F(a, b) {
        b = N(b);
        var d = "std::string" === b;
        M(a, {
          name: b,
          fromWireType: function fromWireType(a) {
            var b = _F[a >> 2];

            if (d) {
              var e = C[a + 4 + b],
                  k = 0;
              0 != e && (k = e, C[a + 4 + b] = 0);
              var h = a + 4;

              for (e = 0; e <= b; ++e) {
                var l = a + 4 + e;

                if (0 == C[l]) {
                  h = B(h);
                  if (void 0 === m) var m = h;else m += String.fromCharCode(0), m += h;
                  h = l + 1;
                }
              }

              0 != k && (C[a + 4 + b] = k);
            } else {
              m = Array(b);

              for (e = 0; e < b; ++e) {
                m[e] = String.fromCharCode(C[a + 4 + e]);
              }

              m = m.join("");
            }

            S(a);
            return m;
          },
          toWireType: function toWireType(a, b) {
            b instanceof ArrayBuffer && (b = new Uint8Array(b));
            var e = "string" === typeof b;
            e || b instanceof Uint8Array || b instanceof Uint8ClampedArray || b instanceof Int8Array || O("Cannot pass non-string to std::string");
            var f = (d && e ? function () {
              for (var a = 0, d = 0; d < b.length; ++d) {
                var e = b.charCodeAt(d);
                55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | b.charCodeAt(++d) & 1023);
                127 >= e ? ++a : a = 2047 >= e ? a + 2 : 65535 >= e ? a + 3 : a + 4;
              }

              return a;
            } : function () {
              return b.length;
            })(),
                h = uc(4 + f + 1);
            _F[h >> 2] = f;
            if (d && e) ka(b, h + 4, f + 1);else if (e) for (e = 0; e < f; ++e) {
              var l = b.charCodeAt(e);
              255 < l && (S(h), O("String has UTF-16 code units that do not fit in 8 bits"));
              C[h + 4 + e] = l;
            } else for (e = 0; e < f; ++e) {
              C[h + 4 + e] = b[e];
            }
            null !== a && a.push(S, h);
            return h;
          },
          argPackAdvance: 8,
          readValueFromPointer: Ua,
          Ob: function Ob(a) {
            S(a);
          }
        });
      },
      _: function _(a, b, d) {
        d = N(d);

        if (2 === b) {
          var e = function e() {
            return ra;
          };

          var f = 1;
        } else 4 === b && (e = function e() {
          return _F;
        }, f = 2);

        M(a, {
          name: d,
          fromWireType: function fromWireType(a) {
            for (var b = e(), d = _F[a >> 2], g = Array(d), m = a + 4 >> f, t = 0; t < d; ++t) {
              g[t] = String.fromCharCode(b[m + t]);
            }

            S(a);
            return g.join("");
          },
          toWireType: function toWireType(a, d) {
            var g = e(),
                k = d.length,
                m = uc(4 + k * b);
            _F[m >> 2] = k;

            for (var t = m + 4 >> f, q = 0; q < k; ++q) {
              g[t + q] = d.charCodeAt(q);
            }

            null !== a && a.push(S, m);
            return m;
          },
          argPackAdvance: 8,
          readValueFromPointer: Ua,
          Ob: function Ob(a) {
            S(a);
          }
        });
      },
      E: function E(a, b, d, e, f, g) {
        Sa[a] = {
          name: N(b),
          fc: lb(d, e),
          gc: lb(f, g),
          Ub: []
        };
      },
      t: function t(a, b, d, e, f, g, k, h, l, m) {
        Sa[a].Ub.push({
          Yb: N(b),
          ac: d,
          Zb: lb(e, f),
          $b: g,
          ic: k,
          hc: lb(h, l),
          jc: m
        });
      },
      Z: function Z(a, b) {
        b = N(b);
        M(a, {
          dc: !0,
          name: b,
          argPackAdvance: 0,
          fromWireType: function fromWireType() {},
          toWireType: function toWireType() {}
        });
      },
      i: function i(a, b, d) {
        a = T(a);
        b = rb(b, "emval::as");
        var e = [],
            f = R(e);
        E[d >> 2] = f;
        return b.toWireType(e, a);
      },
      m: function m(a, b, d, e) {
        a = ub[a];
        b = T(b);
        d = tb(d);
        a(b, d, null, e);
      },
      c: eb,
      l: function l(a, b) {
        b = wb(a, b);

        for (var d = b[0], e = d.name + "_$" + b.slice(1).map(function (a) {
          return a.name;
        }).join("_") + "$", f = ["retType"], g = [d], k = "", h = 0; h < a - 1; ++h) {
          k += (0 !== h ? ", " : "") + "arg" + h, f.push("argType" + h), g.push(b[1 + h]);
        }

        e = "return function " + Wa("methodCaller_" + e) + "(handle, name, destructors, args) {\n";
        var l = 0;

        for (h = 0; h < a - 1; ++h) {
          e += "    var arg" + h + " = argType" + h + ".readValueFromPointer(args" + (l ? "+" + l : "") + ");\n", l += b[h + 1].argPackAdvance;
        }

        e += "    var rv = handle[name](" + k + ");\n";

        for (h = 0; h < a - 1; ++h) {
          b[h + 1].deleteObject && (e += "    argType" + h + ".deleteObject(arg" + h + ");\n");
        }

        d.dc || (e += "    return retType.toWireType(destructors, rv);\n");
        f.push(e + "};\n");
        a = hb(f).apply(null, g);
        return vb(a);
      },
      g: function g(a, b) {
        a = T(a);
        b = T(b);
        return R(a[b]);
      },
      u: function u(a) {
        4 < a && (P[a].Tb += 1);
      },
      r: function r() {
        return R([]);
      },
      e: function e(a) {
        return R(tb(a));
      },
      q: function q() {
        return R({});
      },
      h: function h(a) {
        Ta(P[a].value);
        eb(a);
      },
      f: function f(a, b, d) {
        a = T(a);
        b = T(b);
        d = T(d);
        a[b] = d;
      },
      d: function d(a, b) {
        a = rb(a, "_emval_take_value");
        a = a.readValueFromPointer(b);
        return R(a);
      },
      X: function X() {
        c.abort();
      },
      C: function C(a) {
        return Ma[a]();
      },
      W: function W(a, b, d, e, f, g, k, h, l, m, t, q) {
        return Ma[a](b, d, e, f, g, k, h, l, m, t, q);
      },
      B: function B(a) {
        (a = Y[a]) && a.abort();
      },
      V: jc,
      n: V,
      A: function A(a, b, d, e, f) {
        oc(B(a), B(b), function (a, b) {
          a ? f && vc(f, d) : (a = uc(b.length), C.set(b, a), wc(e, d, a, b.length), S(a));
        });
      },
      U: function U(a, b, d, e, f, g, k) {
        pc(B(a), B(b), new Uint8Array(C.subarray(d, d + e)), function (a) {
          a ? k && vc(k, f) : g && vc(g, f);
        });
      },
      T: function T(a, b, d) {
        C.set(C.subarray(b, b + d), a);
      },
      S: function S(a) {
        if (2147418112 < a) return !1;

        for (var b = Math.max(jc(), 16777216); b < a;) {
          536870912 >= b ? b = pa(2 * b) : b = Math.min(pa((3 * b + 2147483648) / 4), 2147418112);
        }

        if (!rc(b)) return !1;
        ua();
        return !0;
      },
      R: qc,
      Q: function Q(a) {
        a = new Date(1E3 * E[a >> 2]);
        E[4320] = a.getUTCSeconds();
        E[4321] = a.getUTCMinutes();
        E[4322] = a.getUTCHours();
        E[4323] = a.getUTCDate();
        E[4324] = a.getUTCMonth();
        E[4325] = a.getUTCFullYear() - 1900;
        E[4326] = a.getUTCDay();
        E[4329] = 0;
        E[4328] = 0;
        E[4327] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
        E[4330] = 17328;
        return 17280;
      },
      P: function P() {
        z("trap!");
      },
      O: function O(a) {
        var b = Date.now() / 1E3 | 0;
        a && (E[a >> 2] = b);
        return b;
      },
      N: function N() {
        z("OOM");
      },
      a: 17424,
      b: 17264
    }, D);
    c.asm = xc;

    c._UmbraAssetLoadAbortRequested = function () {
      return c.asm.fa.apply(null, arguments);
    };

    c._UmbraAssetLoadFinish = function () {
      return c.asm.ga.apply(null, arguments);
    };

    c._UmbraAssetLoadGetType = function () {
      return c.asm.ha.apply(null, arguments);
    };

    c._UmbraAssetLoadPrepare = function () {
      return c.asm.ia.apply(null, arguments);
    };

    c._UmbraAssetUnloadFinish = function () {
      return c.asm.ja.apply(null, arguments);
    };

    c._UmbraAssetUnloadGetType = function () {
      return c.asm.ka.apply(null, arguments);
    };

    c._UmbraAssetUnloadGetUserPointer = function () {
      return c.asm.la.apply(null, arguments);
    };

    c._UmbraClientCreate = function () {
      return c.asm.ma.apply(null, arguments);
    };

    c._UmbraClientDestroy = function () {
      return c.asm.na.apply(null, arguments);
    };

    c._UmbraConfigInit = function () {
      return c.asm.oa.apply(null, arguments);
    };

    c._UmbraEcefToGeodetic = function () {
      return c.asm.pa.apply(null, arguments);
    };

    c._UmbraEnvironmentInfoDefaults = function () {
      return c.asm.qa.apply(null, arguments);
    };

    c._UmbraGeodeticToEcef = function () {
      return c.asm.ra.apply(null, arguments);
    };

    c._UmbraGetLibraryInfo = function () {
      return c.asm.sa.apply(null, arguments);
    };

    c._UmbraMaterialLoadGetInfo = function () {
      return c.asm.ta.apply(null, arguments);
    };

    c._UmbraMeshLoadFinishExternal = function () {
      return c.asm.ua.apply(null, arguments);
    };

    c._UmbraMeshLoadGetData = function () {
      return c.asm.va.apply(null, arguments);
    };

    c._UmbraMeshLoadGetInfo = function () {
      return c.asm.wa.apply(null, arguments);
    };

    c._UmbraMeshLoadGetSerializedSize = function () {
      return c.asm.xa.apply(null, arguments);
    };

    c._UmbraMeshLoadSerialize = function () {
      return c.asm.ya.apply(null, arguments);
    };

    c._UmbraMeshStreamDone = function () {
      return c.asm.za.apply(null, arguments);
    };

    c._UmbraMeshStreamNext = function () {
      return c.asm.Aa.apply(null, arguments);
    };

    c._UmbraMeshStreamSetBuffers = function () {
      return c.asm.Ba.apply(null, arguments);
    };

    c._UmbraRuntimeCreate = function () {
      return c.asm.Ca.apply(null, arguments);
    };

    c._UmbraRuntimeDestroy = function () {
      return c.asm.Da.apply(null, arguments);
    };

    c._UmbraRuntimeGetStreamingState = function () {
      return c.asm.Ea.apply(null, arguments);
    };

    c._UmbraRuntimeNextAssetLoad = function () {
      return c.asm.Fa.apply(null, arguments);
    };

    c._UmbraRuntimeNextAssetUnload = function () {
      return c.asm.Ga.apply(null, arguments);
    };

    c._UmbraRuntimeUpdate = function () {
      return c.asm.Ha.apply(null, arguments);
    };

    c._UmbraSceneCopyCreate = function () {
      return c.asm.Ia.apply(null, arguments);
    };

    c._UmbraSceneCopyDestroy = function () {
      return c.asm.Ja.apply(null, arguments);
    };

    c._UmbraSceneCopyGetError = function () {
      return c.asm.Ka.apply(null, arguments);
    };

    c._UmbraSceneCopyGetStatus = function () {
      return c.asm.La.apply(null, arguments);
    };

    c._UmbraSceneCreate = function () {
      return c.asm.Ma.apply(null, arguments);
    };

    c._UmbraSceneCreateLocal = function () {
      return c.asm.Na.apply(null, arguments);
    };

    c._UmbraSceneCreatePublic = function () {
      return c.asm.Oa.apply(null, arguments);
    };

    c._UmbraSceneDestroy = function () {
      return c.asm.Pa.apply(null, arguments);
    };

    c._UmbraSceneGetConnectionStatus = function () {
      return c.asm.Qa.apply(null, arguments);
    };

    c._UmbraSceneGetInfo = function () {
      return c.asm.Ra.apply(null, arguments);
    };

    c._UmbraSceneSetTransform = function () {
      return c.asm.Sa.apply(null, arguments);
    };

    c._UmbraSendInternalMessage = function () {
      return c.asm.Ta.apply(null, arguments);
    };

    c._UmbraSetAllocator = function () {
      return c.asm.Ua.apply(null, arguments);
    };

    c._UmbraSetHttp = function () {
      return c.asm.Va.apply(null, arguments);
    };

    c._UmbraSetLogger = function () {
      return c.asm.Wa.apply(null, arguments);
    };

    c._UmbraTextureGetMipmapLevelByteSize = function () {
      return c.asm.Xa.apply(null, arguments);
    };

    c._UmbraTextureGetMipmapLevelOffset = function () {
      return c.asm.Ya.apply(null, arguments);
    };

    c._UmbraTextureLoadGetData = function () {
      return c.asm.Za.apply(null, arguments);
    };

    c._UmbraTextureLoadGetInfo = function () {
      return c.asm._a.apply(null, arguments);
    };

    c._UmbraTextureLoadGetSerializedSize = function () {
      return c.asm.$a.apply(null, arguments);
    };

    c._UmbraTextureLoadSerialize = function () {
      return c.asm.ab.apply(null, arguments);
    };

    c._UmbraTextureMetaDataGetClassification = function () {
      return c.asm.bb.apply(null, arguments);
    };

    c._UmbraTextureMetaDataGetClassificationAmount = function () {
      return c.asm.cb.apply(null, arguments);
    };

    c._UmbraTextureMetaDataGetClassificationCount = function () {
      return c.asm.db.apply(null, arguments);
    };

    c._UmbraTextureMetaDataLoadGetData = function () {
      return c.asm.eb.apply(null, arguments);
    };

    c._UmbraVertexAttributeGetElementByteSize = function () {
      return c.asm.fb.apply(null, arguments);
    };

    c._UmbraViewCreate = function () {
      return c.asm.gb.apply(null, arguments);
    };

    c._UmbraViewDestroy = function () {
      return c.asm.hb.apply(null, arguments);
    };

    c._UmbraViewGetCompleted = function () {
      return c.asm.ib.apply(null, arguments);
    };

    c._UmbraViewNextRenderables = function () {
      return c.asm.jb.apply(null, arguments);
    };

    c._UmbraViewRayQuery = function () {
      return c.asm.kb.apply(null, arguments);
    };

    c._UmbraViewResetRenderables = function () {
      return c.asm.lb.apply(null, arguments);
    };

    c._UmbraViewUpdateFilter = function () {
      return c.asm.mb.apply(null, arguments);
    };

    c._UmbraViewUpdateRendering = function () {
      return c.asm.nb.apply(null, arguments);
    };

    c.___embind_register_native_and_builtin_types = function () {
      return c.asm.ob.apply(null, arguments);
    };

    var ob = c.___getTypeName = function () {
      return c.asm.pb.apply(null, arguments);
    },
        S = c._free = function () {
      return c.asm.qb.apply(null, arguments);
    },
        uc = c._malloc = function () {
      return c.asm.rb.apply(null, arguments);
    },
        Na = c.globalCtors = function () {
      return c.asm.Jb.apply(null, arguments);
    },
        ja = c.stackAlloc = function () {
      return c.asm.Kb.apply(null, arguments);
    },
        ma = c.stackRestore = function () {
      return c.asm.Lb.apply(null, arguments);
    },
        la = c.stackSave = function () {
      return c.asm.Mb.apply(null, arguments);
    };

    c.dynCall_i = function () {
      return c.asm.sb.apply(null, arguments);
    };

    c.dynCall_ii = function () {
      return c.asm.tb.apply(null, arguments);
    };

    c.dynCall_iii = function () {
      return c.asm.ub.apply(null, arguments);
    };

    c.dynCall_iiii = function () {
      return c.asm.vb.apply(null, arguments);
    };

    c.dynCall_iiiii = function () {
      return c.asm.wb.apply(null, arguments);
    };

    c.dynCall_iiiiii = function () {
      return c.asm.xb.apply(null, arguments);
    };

    c.dynCall_iiiiiiiiii = function () {
      return c.asm.yb.apply(null, arguments);
    };

    c.dynCall_iiiji = function () {
      return c.asm.zb.apply(null, arguments);
    };

    c.dynCall_jiji = function () {
      return c.asm.Ab.apply(null, arguments);
    };

    c.dynCall_v = function () {
      return c.asm.Bb.apply(null, arguments);
    };

    var vc = c.dynCall_vi = function () {
      return c.asm.Cb.apply(null, arguments);
    };

    c.dynCall_vii = function () {
      return c.asm.Db.apply(null, arguments);
    };

    var wc = c.dynCall_viii = function () {
      return c.asm.Eb.apply(null, arguments);
    };

    c.dynCall_viiii = function () {
      return c.asm.Fb.apply(null, arguments);
    };

    c.dynCall_viiiii = function () {
      return c.asm.Gb.apply(null, arguments);
    };

    c.dynCall_viiiiii = function () {
      return c.asm.Hb.apply(null, arguments);
    };

    c.dynCall_viiiiiiiii = function () {
      return c.asm.Ib.apply(null, arguments);
    };

    c.asm = xc;

    c.cwrap = function (a, b, d, e) {
      d = d || [];
      var f = d.every(function (a) {
        return "number" === a;
      });
      return "string" !== b && f && !e ? ha(a) : function () {
        return ia(a, b, d, arguments);
      };
    };

    c.then = function (a) {
      if (c.calledRun) a(c);else {
        var b = c.onRuntimeInitialized;

        c.onRuntimeInitialized = function () {
          b && b();
          a(c);
        };
      }
      return c;
    };

    function Lb(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }

    Lb.prototype = Error();
    Lb.prototype.constructor = Lb;

    Fa = function yc() {
      c.calledRun || zc();
      c.calledRun || (Fa = yc);
    };

    function zc() {
      function a() {
        if (!c.calledRun && (c.calledRun = !0, !x)) {
          wa(za);
          wa(Aa);
          if (c.onRuntimeInitialized) c.onRuntimeInitialized();
          if (c.postRun) for ("function" == typeof c.postRun && (c.postRun = [c.postRun]); c.postRun.length;) {
            var a = c.postRun.shift();
            Ca.unshift(a);
          }
          wa(Ca);
        }
      }

      if (!(0 < G)) {
        if (c.preRun) for ("function" == typeof c.preRun && (c.preRun = [c.preRun]); c.preRun.length;) {
          Da();
        }
        wa(xa);
        0 < G || c.calledRun || (c.setStatus ? (c.setStatus("Running..."), setTimeout(function () {
          setTimeout(function () {
            c.setStatus("");
          }, 1);
          a();
        }, 1)) : a());
      }
    }

    c.run = zc;

    function z(a) {
      if (c.onAbort) c.onAbort(a);
      ba(a);
      v(a);
      x = !0;
      throw "abort(" + a + "). Build with -s ASSERTIONS=1 for more info.";
    }

    c.abort = z;
    if (c.preInit) for ("function" == typeof c.preInit && (c.preInit = [c.preInit]); 0 < c.preInit.length;) {
      c.preInit.pop()();
    }
    zc();
    c.maxBytesDownloaded = 0;
    c.minBytesDownloaded = 0;
    c.URLsDownloaded = new Set([]);
    c.wgetRequests = Y;

    function La(a, b, d, e, f, g, k, h, l, m, t) {
      var q = B(a);
      b = B(b);
      g = B(g);
      var r = new XMLHttpRequest();
      r.open(b, q, !0);
      if ("GET" != b || 0 != g.length) r.withCredentials = !0;
      r.responseType = "arraybuffer";
      var y = ic();

      r.onload = function () {
        if (200 == r.status) {
          var b = new Uint8Array(r.response),
              g = c.URLsDownloaded;
          c.maxBytesDownloaded += r.response.byteLength;
          g.has(a) || (g.add(a), c.minBytesDownloaded += r.response.byteLength);
          m ? b.length != t ? c.dynCall_viii(f, y, d, 0) : (C.set(b, m), c.dynCall_viiii(e, y, d, null, 0)) : (g = uc(b.length), C.set(b, g), c.dynCall_viiii(e, y, d, g, b.length), S(g));
        } else c.dynCall_viii(f, y, d, r.status);

        delete Y[y];
      };

      r.onerror = function () {
        c.dynCall_viii(f, y, d, r.status);
        delete Y[y];
      };

      r.onabort = function () {
        delete Y[y];
      };

      0 != g.length && r.setRequestHeader("Authorization", "Basic " + btoa(g + ":"));
      l = B(l).split("\n");
      if (2 <= l.length) for (q = 0; q < l.length; q += 2) {
        r.setRequestHeader(l[q], l[q + 1]);
      }
      "POST" == b ? r.send(A.slice(k, k + h)) : r.send(null);
      Y[y] = r;
      return y;
    }
    return UmbraNativeAPI;
  };
}();

// Generated at 2020-07-06 15:28:19
var MatrixFormat;

(function (MatrixFormat) {
  MatrixFormat[MatrixFormat["ColumnMajor"] = 0] = "ColumnMajor";
  MatrixFormat[MatrixFormat["RowMajor"] = 1] = "RowMajor";
  MatrixFormat[MatrixFormat["Count"] = 2] = "Count";
})(MatrixFormat || (MatrixFormat = {}));

var TextureType;

(function (TextureType) {
  TextureType[TextureType["Diffuse"] = 0] = "Diffuse";
  TextureType[TextureType["Normal"] = 1] = "Normal";
  TextureType[TextureType["Specular"] = 2] = "Specular";
  TextureType[TextureType["MetaIndex"] = 3] = "MetaIndex";
  TextureType[TextureType["Count"] = 4] = "Count";
})(TextureType || (TextureType = {}));

var TextureFormat;

(function (TextureFormat) {
  TextureFormat[TextureFormat["RGBA32"] = 0] = "RGBA32";
  TextureFormat[TextureFormat["RGB24"] = 1] = "RGB24";
  TextureFormat[TextureFormat["BC1"] = 2] = "BC1";
  TextureFormat[TextureFormat["BC3"] = 3] = "BC3";
  TextureFormat[TextureFormat["BC4"] = 4] = "BC4";
  TextureFormat[TextureFormat["BC5"] = 5] = "BC5";
  TextureFormat[TextureFormat["ETC1_RGB"] = 6] = "ETC1_RGB";
  TextureFormat[TextureFormat["RGBA_FLOAT32"] = 7] = "RGBA_FLOAT32";
  TextureFormat[TextureFormat["UNC1"] = 8] = "UNC1";
  TextureFormat[TextureFormat["JPEG"] = 9] = "JPEG";
  TextureFormat[TextureFormat["PNG"] = 10] = "PNG";
  TextureFormat[TextureFormat["BMP"] = 11] = "BMP";
  TextureFormat[TextureFormat["PSD"] = 12] = "PSD";
  TextureFormat[TextureFormat["TGA"] = 13] = "TGA";
  TextureFormat[TextureFormat["GIF"] = 14] = "GIF";
  TextureFormat[TextureFormat["HDR"] = 15] = "HDR";
  TextureFormat[TextureFormat["PIC"] = 16] = "PIC";
  TextureFormat[TextureFormat["PNM"] = 17] = "PNM";
  TextureFormat[TextureFormat["ASTC_4X4"] = 18] = "ASTC_4X4";
  TextureFormat[TextureFormat["ASTC_5X4"] = 19] = "ASTC_5X4";
  TextureFormat[TextureFormat["ASTC_5X5"] = 20] = "ASTC_5X5";
  TextureFormat[TextureFormat["ASTC_6X5"] = 21] = "ASTC_6X5";
  TextureFormat[TextureFormat["ASTC_6X6"] = 22] = "ASTC_6X6";
  TextureFormat[TextureFormat["ASTC_8X5"] = 23] = "ASTC_8X5";
  TextureFormat[TextureFormat["ASTC_8X6"] = 24] = "ASTC_8X6";
  TextureFormat[TextureFormat["ASTC_10X5"] = 25] = "ASTC_10X5";
  TextureFormat[TextureFormat["ASTC_10X6"] = 26] = "ASTC_10X6";
  TextureFormat[TextureFormat["ASTC_8X8"] = 27] = "ASTC_8X8";
  TextureFormat[TextureFormat["ASTC_10X8"] = 28] = "ASTC_10X8";
  TextureFormat[TextureFormat["ASTC_10X10"] = 29] = "ASTC_10X10";
  TextureFormat[TextureFormat["ASTC_12X10"] = 30] = "ASTC_12X10";
  TextureFormat[TextureFormat["ASTC_12X12"] = 31] = "ASTC_12X12";
  TextureFormat[TextureFormat["ARGB32"] = 32] = "ARGB32";
  TextureFormat[TextureFormat["R8"] = 33] = "R8";
  TextureFormat[TextureFormat["PVRTC1_RGB4"] = 34] = "PVRTC1_RGB4";
  TextureFormat[TextureFormat["PVRTC1_RGBA4"] = 35] = "PVRTC1_RGBA4";
  TextureFormat[TextureFormat["UINT8"] = 36] = "UINT8";
  TextureFormat[TextureFormat["UINT16"] = 37] = "UINT16";
  TextureFormat[TextureFormat["UINT32"] = 38] = "UINT32";
  TextureFormat[TextureFormat["RGB565"] = 39] = "RGB565";
  TextureFormat[TextureFormat["RG8"] = 40] = "RG8";
  TextureFormat[TextureFormat["RG16F"] = 41] = "RG16F";
  TextureFormat[TextureFormat["OPENEXR"] = 42] = "OPENEXR";
  TextureFormat[TextureFormat["RGBA_FLOAT16"] = 43] = "RGBA_FLOAT16";
  TextureFormat[TextureFormat["RGB_FLOAT16"] = 44] = "RGB_FLOAT16";
  TextureFormat[TextureFormat["RGB_FLOAT32"] = 45] = "RGB_FLOAT32";
  TextureFormat[TextureFormat["Count"] = 46] = "Count";
})(TextureFormat || (TextureFormat = {}));

var ColorSpace;

(function (ColorSpace) {
  ColorSpace[ColorSpace["Linear"] = 0] = "Linear";
  ColorSpace[ColorSpace["SRGB"] = 1] = "SRGB";
  ColorSpace[ColorSpace["Count"] = 2] = "Count";
})(ColorSpace || (ColorSpace = {}));

var VertexAttribute;

(function (VertexAttribute) {
  VertexAttribute[VertexAttribute["Position"] = 0] = "Position";
  VertexAttribute[VertexAttribute["TextureCoordinate"] = 1] = "TextureCoordinate";
  VertexAttribute[VertexAttribute["Normal"] = 2] = "Normal";
  VertexAttribute[VertexAttribute["Tangent"] = 3] = "Tangent";
  VertexAttribute[VertexAttribute["Count"] = 4] = "Count";
})(VertexAttribute || (VertexAttribute = {}));

var BufferFlags;

(function (BufferFlags) {
  BufferFlags[BufferFlags["UncachedMemory"] = 1] = "UncachedMemory";
})(BufferFlags || (BufferFlags = {}));

var LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["Debug"] = 0] = "Debug";
  LogLevel[LogLevel["Info"] = 1] = "Info";
  LogLevel[LogLevel["Warning"] = 2] = "Warning";
  LogLevel[LogLevel["Error"] = 3] = "Error";
  LogLevel[LogLevel["Count"] = 4] = "Count";
})(LogLevel || (LogLevel = {}));

var TransferStatus;

(function (TransferStatus) {
  TransferStatus[TransferStatus["Inactive"] = 0] = "Inactive";
  TransferStatus[TransferStatus["Active"] = 1] = "Active";
  TransferStatus[TransferStatus["Complete"] = 2] = "Complete";
  TransferStatus[TransferStatus["Error"] = 3] = "Error";
  TransferStatus[TransferStatus["Count"] = 4] = "Count";
})(TransferStatus || (TransferStatus = {}));

var HeaderError;

(function (HeaderError) {
  HeaderError[HeaderError["Found"] = 0] = "Found";
  HeaderError[HeaderError["Not_Found"] = 1] = "Not_Found";
  HeaderError[HeaderError["Transfer_Not_Complete"] = 2] = "Transfer_Not_Complete";
  HeaderError[HeaderError["Buffer_Too_Small"] = 3] = "Buffer_Too_Small";
  HeaderError[HeaderError["Count"] = 4] = "Count";
})(HeaderError || (HeaderError = {}));

var HttpMethod;

(function (HttpMethod) {
  HttpMethod[HttpMethod["Get"] = 0] = "Get";
  HttpMethod[HttpMethod["Post"] = 1] = "Post";
  HttpMethod[HttpMethod["Put"] = 2] = "Put";
  HttpMethod[HttpMethod["Delete"] = 3] = "Delete";
  HttpMethod[HttpMethod["Count"] = 4] = "Count";
})(HttpMethod || (HttpMethod = {}));

var LibraryInfo;

(function (LibraryInfo) {
  LibraryInfo[LibraryInfo["Version"] = 0] = "Version";
  LibraryInfo[LibraryInfo["Copyright"] = 1] = "Copyright";
  LibraryInfo[LibraryInfo["BuildTime"] = 2] = "BuildTime";
  LibraryInfo[LibraryInfo["BuildId"] = 3] = "BuildId";
  LibraryInfo[LibraryInfo["Count"] = 4] = "Count";
})(LibraryInfo || (LibraryInfo = {}));

var InvalidUserPointer;

(function (InvalidUserPointer) {
  InvalidUserPointer[InvalidUserPointer["InvalidUserPointer"] = 0] = "InvalidUserPointer";
})(InvalidUserPointer || (InvalidUserPointer = {}));

var TextureSupportFlags;

(function (TextureSupportFlags) {
  TextureSupportFlags[TextureSupportFlags["None"] = 0] = "None";
  TextureSupportFlags[TextureSupportFlags["BC1"] = 1] = "BC1";
  TextureSupportFlags[TextureSupportFlags["BC2"] = 2] = "BC2";
  TextureSupportFlags[TextureSupportFlags["BC3"] = 4] = "BC3";
  TextureSupportFlags[TextureSupportFlags["BC4"] = 8] = "BC4";
  TextureSupportFlags[TextureSupportFlags["BC5"] = 16] = "BC5";
  TextureSupportFlags[TextureSupportFlags["BC6H"] = 32] = "BC6H";
  TextureSupportFlags[TextureSupportFlags["BC7"] = 64] = "BC7";
  TextureSupportFlags[TextureSupportFlags["ASTC"] = 128] = "ASTC";
  TextureSupportFlags[TextureSupportFlags["ETC1"] = 256] = "ETC1";
  TextureSupportFlags[TextureSupportFlags["ETC2"] = 512] = "ETC2";
  TextureSupportFlags[TextureSupportFlags["EAC_R"] = 1024] = "EAC_R";
  TextureSupportFlags[TextureSupportFlags["EAC_RG"] = 2048] = "EAC_RG";
  TextureSupportFlags[TextureSupportFlags["PVRTC1"] = 4096] = "PVRTC1";
  TextureSupportFlags[TextureSupportFlags["PVRTC2"] = 8192] = "PVRTC2";
  TextureSupportFlags[TextureSupportFlags["ATC"] = 16384] = "ATC";
  TextureSupportFlags[TextureSupportFlags["HalfFloat"] = 32768] = "HalfFloat";
  TextureSupportFlags[TextureSupportFlags["Float"] = 65536] = "Float";
  TextureSupportFlags[TextureSupportFlags["All"] = 2147483647] = "All";
})(TextureSupportFlags || (TextureSupportFlags = {}));

var RuntimeFlags;

(function (RuntimeFlags) {
  RuntimeFlags[RuntimeFlags["NeverUnload"] = 1] = "NeverUnload";
  RuntimeFlags[RuntimeFlags["ExclusiveRendering"] = 2] = "ExclusiveRendering";
  RuntimeFlags[RuntimeFlags["EnableRayQueries"] = 4] = "EnableRayQueries";
})(RuntimeFlags || (RuntimeFlags = {}));

var ConnectionStatus;

(function (ConnectionStatus) {
  ConnectionStatus[ConnectionStatus["Connected"] = 0] = "Connected";
  ConnectionStatus[ConnectionStatus["Connecting"] = 1] = "Connecting";
  ConnectionStatus[ConnectionStatus["ConnectionError"] = 2] = "ConnectionError";
  ConnectionStatus[ConnectionStatus["Count"] = 3] = "Count";
})(ConnectionStatus || (ConnectionStatus = {}));

var DepthRange;

(function (DepthRange) {
  DepthRange[DepthRange["ZeroToOne"] = 0] = "ZeroToOne";
  DepthRange[DepthRange["MinusOneToOne"] = 1] = "MinusOneToOne";
  DepthRange[DepthRange["Count"] = 2] = "Count";
})(DepthRange || (DepthRange = {}));

var FilterShapeType;

(function (FilterShapeType) {
  FilterShapeType[FilterShapeType["Sphere"] = 0] = "Sphere";
  FilterShapeType[FilterShapeType["Cylinder"] = 1] = "Cylinder";
  FilterShapeType[FilterShapeType["Count"] = 2] = "Count";
})(FilterShapeType || (FilterShapeType = {}));

var SceneCopyStatus;

(function (SceneCopyStatus) {
  SceneCopyStatus[SceneCopyStatus["InProgress"] = 0] = "InProgress";
  SceneCopyStatus[SceneCopyStatus["Done"] = 1] = "Done";
  SceneCopyStatus[SceneCopyStatus["Error"] = 2] = "Error";
  SceneCopyStatus[SceneCopyStatus["Count"] = 3] = "Count";
})(SceneCopyStatus || (SceneCopyStatus = {}));

var SceneCopyDestinationType;

(function (SceneCopyDestinationType) {
  SceneCopyDestinationType[SceneCopyDestinationType["File"] = 0] = "File";
  SceneCopyDestinationType[SceneCopyDestinationType["Directory"] = 1] = "Directory";
  SceneCopyDestinationType[SceneCopyDestinationType["Cloud"] = 2] = "Cloud";
  SceneCopyDestinationType[SceneCopyDestinationType["FormatObj"] = 3] = "FormatObj";
  SceneCopyDestinationType[SceneCopyDestinationType["Count"] = 4] = "Count";
})(SceneCopyDestinationType || (SceneCopyDestinationType = {}));

var SceneCopySourceType;

(function (SceneCopySourceType) {
  SceneCopySourceType[SceneCopySourceType["Directory"] = 0] = "Directory";
  SceneCopySourceType[SceneCopySourceType["Cloud"] = 1] = "Cloud";
  SceneCopySourceType[SceneCopySourceType["Count"] = 2] = "Count";
})(SceneCopySourceType || (SceneCopySourceType = {}));

var AssetType;

(function (AssetType) {
  AssetType[AssetType["Material"] = 0] = "Material";
  AssetType[AssetType["Texture"] = 1] = "Texture";
  AssetType[AssetType["Mesh"] = 2] = "Mesh";
  AssetType[AssetType["Count"] = 3] = "Count";
})(AssetType || (AssetType = {}));

var AssetLoadResult;

(function (AssetLoadResult) {
  AssetLoadResult[AssetLoadResult["Failure"] = 0] = "Failure";
  AssetLoadResult[AssetLoadResult["OutOfMemory"] = 1] = "OutOfMemory";
  AssetLoadResult[AssetLoadResult["Aborted"] = 2] = "Aborted";
  AssetLoadResult[AssetLoadResult["Success"] = 3] = "Success";
  AssetLoadResult[AssetLoadResult["Count"] = 4] = "Count";
})(AssetLoadResult || (AssetLoadResult = {}));

var RayQueryFlags;

(function (RayQueryFlags) {
  RayQueryFlags[RayQueryFlags["BackfaceCulling"] = 1] = "BackfaceCulling";
})(RayQueryFlags || (RayQueryFlags = {}));



var Assets = /*#__PURE__*/Object.freeze({
  get AssetType () { return AssetType; },
  get AssetLoadResult () { return AssetLoadResult; }
});

var MAX_LIGHTS = 32;
var arrayToHeap = new Map([[Float32Array, 'HEAPF32'], [Uint32Array, 'HEAPU32'], [Uint16Array, 'HEAPU16'], [Uint8Array, 'HEAPU8']]);

function assertInteger(x) {
  if (!Number.isInteger(x)) {
    throw new Error('Value was not integer: ' + x.toString());
  }
}
/**
 * We need to use a factory here since the native API classes depend on the Emscripten generated wasm code
 * that can't be loaded as a regular ES6 module. The "Module" object allows access to C++ functions and the
 * Emscripten heap.
 */


var create = function create(Module) {
  /**
   * A Buffer is a block of memory in the Emscripten heap. Typed arrays may get detached when Emscripten
   * memory growth happens, so any JS code that wants to read from the heap needs to create its typed views
   * right before they are used.
   *
   * The views are safe to use during synchronous execution, but for example a 'yield' in a generator may
   * trigger memory growth before the caller gets the returned value.
   */
  class Buffer {
    constructor(size) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Float32Array;
      this.ofs = void 0;
      this.size = void 0;
      this.type = void 0;
      assertInteger(size / type.BYTES_PER_ELEMENT);

      if (size === 0) {
        throw new Error('Buffer size was zero');
      }

      this.ofs = Module._malloc(size);

      if (this.ofs === 0) {
        throw new Error("Allocation of ".concat(size, " bytes failed."));
      }

      this.size = size; // In bytes

      this.type = type;
    }

    destroy() {
      Module._free(this.ofs);

      this.ofs = 0;
      this.size = 0;
    }
    /**
     * A destructive resize operation that never shrinks the buffer.
     * NOTE: Does *not* copy the old data over.
     */


    ensureSize(newSize) {
      if (this.size < newSize) {
        this.destroy();
        this.ofs = Module._malloc(newSize);

        if (this.ofs === 0) {
          throw new Error("Buffer growth to ".concat(newSize, " bytes failed."));
        }

        this.size = newSize;
      }
    }

    floats() {
      return new Float32Array(Module.HEAPF32.buffer, this.ofs, this.size / 4);
    }

    bytes() {
      return new Uint8Array(Module.HEAPU8.buffer, this.ofs, this.size);
    }

  }

  class BufferView {
    constructor(buffer) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buffer.size;
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : buffer.type;
      this.ofs = void 0;
      this.start = void 0;
      this.size = void 0;
      this.type = void 0;
      this.heapName = void 0;
      this.ofs = buffer.ofs;
      this.start = start;
      this.size = size;
      this.type = type;
      this.heapName = arrayToHeap.get(type);
    }

    getArray() {
      // eslint-disable-next-line new-cap
      return new this.type(Module[this.heapName].buffer, this.ofs + this.start, this.size / this.type.BYTES_PER_ELEMENT);
    }

  } // Struct field offsets are required for zero-copy interop


  var renderableStructOffsets = Module.getRenderableMemberOffsets(); // Used by MeshLoader to copy over mesh AABB without extra allocs

  var boundsBuffer = new Buffer(2 * 3 * 4);

  function copyMat4(buf, elements) {
    for (var i = 0; i < 16; i++) {
      buf[i] = elements[i];
    }
  }

  function copyVec3(buf, elements) {
    buf[0] = elements[0];
    buf[1] = elements[1];
    buf[2] = elements[2];
  }

  class Client {
    constructor() {
      this.ptr = void 0;
      this.configPtr = void 0;
      this.configPtr = Module._malloc(Module.CONFIG_SIZE);
      Module.configInit(this.configPtr);
      this.ptr = Module.clientCreate('UmbraJS', this.configPtr);
    }

    destroy() {
      Module.clientDestroy(this.ptr);

      Module._free(this.configPtr);

      this.ptr = 0;
    }

  }

  class NativeScene {
    constructor(ptr) {
      this.ptr = void 0;
      this.matrixBuffer = new Buffer(16 * 4);
      this.infoBuffer = new Buffer(Module.sceneInfoSize);
      this.ptr = ptr;
    }

    destroy() {
      this.matrixBuffer.destroy();
      Module.sceneDestroy(this.ptr);
    }

    connectionStatus() {
      return Module.sceneGetConnectionStatus(this.ptr);
    }

    getInfo() {
      Module.sceneGetInfo(this.ptr, this.infoBuffer.ofs);
      return Module.deserializeSceneInfo(this.infoBuffer.ofs);
    }

    isConnected() {
      return this.connectionStatus() === ConnectionStatus.Connected;
    }

    setTransform(matrix) {
      if (!Array.isArray(matrix)) {
        throw new TypeError('Matrix should be an array');
      }

      if (matrix.length !== 16) {
        throw new TypeError('Matrix should be of size 4x4');
      }

      copyMat4(this.matrixBuffer.floats(), matrix);
      Module.sceneSetTransform(this.ptr, this.matrixBuffer.ofs);
    }

  }

  class View {
    constructor(ptr, runtimeAssets) {
      this.ptr = void 0;
      this.matrixBuffer = void 0;
      this.vectorBuffer = void 0;
      this.lightBuffer = void 0;
      this.temp = void 0;
      this.runtimeAssets = void 0;
      this.ptr = ptr;
      this.matrixBuffer = new Buffer(16 * 4);
      this.vectorBuffer = new Buffer(4 * 4);
      this.lightBuffer = new Buffer(MAX_LIGHTS * 3 * 4);
      this.temp = undefined;
      this.runtimeAssets = runtimeAssets;
    }

    destroy() {
      this.matrixBuffer.destroy();
      this.vectorBuffer.destroy();
      this.lightBuffer.destroy();

      if (this.temp) {
        this.temp.destroy();
      }

      Module.viewDestroy(this.ptr);
    }

    setCamera(worldToClip, positionVector, quality) {
      var lights = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var depthRange = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DepthRange.MinusOneToOne;
      var matrixFormat = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : MatrixFormat.ColumnMajor;

      if (!Array.isArray(worldToClip)) {
        throw new TypeError('Camera matrix should be an array');
      }

      if (!Array.isArray(positionVector)) {
        throw new TypeError('Position should be an array');
      }

      if (typeof quality !== 'number') {
        throw new TypeError('Quality should be a number');
      }

      if (worldToClip.length !== 16) {
        throw new TypeError('WorldToClip matrix should be of size 4x4');
      }

      if (positionVector.length !== 3) {
        throw new TypeError('Position vector should be of length 3');
      }

      copyMat4(this.matrixBuffer.floats(), worldToClip);
      copyVec3(this.vectorBuffer.floats(), positionVector);

      if (lights) {
        if (lights.length > MAX_LIGHTS) {
          throw new Error('Too many lights given');
        }

        var buffer = this.lightBuffer.floats();

        for (var i = 0; i < lights.length; i++) {
          buffer[3 * i + 0] = lights[i][0];
          buffer[3 * i + 1] = lights[i][1];
          buffer[3 * i + 2] = lights[i][2];
        }
      }

      Module.viewUpdateRendering(this.ptr, this.matrixBuffer.ofs, this.vectorBuffer.ofs, depthRange, matrixFormat, quality, this.lightBuffer.ofs, lights.length);
    }

    getVisible(batchSize) {
      assertInteger(batchSize);
      var bufferSize = batchSize * Module.renderableSize; // Check if we should enlarge or allocate the temp buffer

      if (!this.temp || this.temp.size < bufferSize) {
        if (this.temp) {
          this.temp.destroy();
        }

        this.temp = new Buffer(bufferSize);
      }

      var temp = this.temp;
      var strideInWords = Module.renderableSize / 4;
      var bufferWordSize = bufferSize / 4;
      assertInteger(strideInWords);
      assertInteger(bufferWordSize);

      var getView = function getView(arrayType, heap, ptr, ofs) {
        assertInteger(ofs / 4); // eslint-disable-next-line new-cap

        return new arrayType(heap.buffer, ptr + ofs, bufferWordSize - ofs / 4);
      };

      var meshIDs = getView(Uint32Array, Module.HEAPU32, temp.ofs, renderableStructOffsets['mesh']);
      var lodLevels = getView(Int32Array, Module.HEAP32, temp.ofs, renderableStructOffsets['lodLevel']);
      var masks = getView(Uint32Array, Module.HEAPU32, temp.ofs, renderableStructOffsets['visibilityMask']); // const transforms = getView(Float32Array, Module.HEAPF32, temp.ofs, offsets['transform'])

      var scenePointers = getView(Uint32Array, Module.HEAPU32, temp.ofs, renderableStructOffsets['scene']);
      var count = Module.viewNextRenderables(this.ptr, temp.ofs, batchSize);
      var output = [];

      for (var i = 0; i < count; i++) {
        var id = meshIDs[strideInWords * i];
        var lod = lodLevels[strideInWords * i];
        var mask = masks[strideInWords * i];
        var scenePtr = scenePointers[strideInWords * i]; // TODO extract individual transforms too

        output.push({
          id: id,
          mesh: this.runtimeAssets.get(id),
          lod: lod,
          mask: mask,
          scenePtr: scenePtr
        });
      }

      return output;
    }

  }

  class AssetLoad {
    // TODO: Replace with a union container data types
    constructor(ptr) {
      this.ptr = void 0;
      this.assetType = void 0;
      this.type = void 0;
      this.data = void 0;
      this.ptr = ptr;
      this.assetType = Module.assetLoadGetType(this.ptr);
      this.type = 'Load' + AssetType[this.assetType];
      this.data = {}; // Type specific asset data set from the outside
    }

    prepare(userPtr) {
      Module.assetLoadPrepare(this.ptr, userPtr);
    }

    finish(result) {
      Module.assetLoadFinish(this.ptr, result);
    }

  }

  class AssetUnload {
    constructor(ptr) {
      this.ptr = void 0;
      this.assetType = void 0;
      this.type = void 0;
      this.userPointer = void 0;
      this.data = void 0;
      this.ptr = ptr;
      this.assetType = Module.assetUnloadGetType(this.ptr);
      this.type = 'Unload' + AssetType[this.assetType];
      this.userPointer = Module.assetUnloadGetUserPointer(this.ptr);
    }

    finish() {
      Module.assetUnloadFinish(this.ptr);
    }

  }

  var vertexBufferMap = new Map([['position', new Buffer(4)], ['normal', new Buffer(4)], ['uv', new Buffer(4)], ['tangent', new Buffer(4)], ['index', new Buffer(4)]]);

  function getBufferForAttribute(name, newSize, type) {
    var buffer = vertexBufferMap.get(name);

    if (buffer.size < newSize) {
      if (buffer.size > 0) {
        buffer.destroy();
      }

      buffer = new Buffer(newSize, type);
      vertexBufferMap.set(name, buffer);
    } else if (type) {
      buffer.type = type;
    }

    return buffer;
  }

  class Loader {
    // NOTE: These buffers get leaked but it doesn't matter since we will delete Emscripten's heap on shutdown anyway.
    constructor(load) {
      this.load = void 0;
      this.info = void 0;
      this.vertexBuffers = void 0;
      this.load = load;
      Module.meshLoadGetInfo(this.load.ptr, Loader.meshInfoBuffer.ofs);
      this.info = Module.deserializeMeshInfo(Loader.meshInfoBuffer.ofs);
    }

    setBuffers(buffers) {
      Loader.structBuffer.bytes().fill(0);
      Loader.tempDataBuffer.bytes().fill(0);
      Module.serializeElementBuffer(buffers.position.desc, Loader.structBuffer.ofs);
      Module.serializeElementBuffer(buffers.index.desc, Loader.tempDataBuffer.ofs);

      if ('uv' in buffers) {
        Module.serializeElementBuffer(buffers.uv.desc, Loader.structBuffer.ofs + Module.elementBufferSize * 1);
      }

      if ('normal' in buffers) {
        Module.serializeElementBuffer(buffers.normal.desc, Loader.structBuffer.ofs + Module.elementBufferSize * 2);
      }

      if ('tangent' in buffers) {
        Module.serializeElementBuffer(buffers.tangent.desc, Loader.structBuffer.ofs + Module.elementBufferSize * 3);
      }

      if (!Module.meshStreamSetBuffers(this.load.ptr, Loader.structBuffer.ofs, Loader.tempDataBuffer.ofs)) {
        console.log(buffers);
        throw new Error('setBuffers failed');
      }
    }

    loadNext() {
      return Module.meshStreamNext(this.load.ptr, 0, 0);
    }

    done() {
      return Module.meshStreamDone(this.load.ptr);
    }

    allocateBuffers() {
      var _this = this;

      var indexBytes = this.info.numUniqueVertices < 1 << 16 ? 2 : 4; // prettier-ignore

      var attrInfo = {
        position: {
          elemSize: Module.vertexAttributeGetElementByteSize(VertexAttribute.Position),
          count: this.info.numUniqueVertices,
          mask: 1 << VertexAttribute.Position,
          type: Float32Array
        },
        uv: {
          elemSize: Module.vertexAttributeGetElementByteSize(VertexAttribute.TextureCoordinate),
          count: this.info.numUniqueVertices,
          mask: 1 << VertexAttribute.TextureCoordinate,
          type: Float32Array
        },
        normal: {
          elemSize: Module.vertexAttributeGetElementByteSize(VertexAttribute.Normal),
          count: this.info.numUniqueVertices,
          mask: 1 << VertexAttribute.Normal,
          type: Float32Array
        },
        tangent: {
          elemSize: Module.vertexAttributeGetElementByteSize(VertexAttribute.Tangent),
          count: this.info.numUniqueVertices,
          mask: 1 << VertexAttribute.Tangent,
          type: Float32Array
        },
        index: {
          elemSize: indexBytes,
          count: this.info.numIndices,
          mask: 0xffffffff,
          type: indexBytes === 2 ? Uint16Array : Uint32Array
        }
      };
      var bufferSizes = {};
      Object.keys(attrInfo).forEach(function (name) {
        var byteSize = attrInfo[name].count * attrInfo[name].elemSize;
        assertInteger(byteSize / attrInfo[name].type.BYTES_PER_ELEMENT);
        bufferSizes[name] = byteSize;
      });
      var meshBuffers = {};
      Object.keys(attrInfo).forEach(function (name) {
        // Skip vertex attributes that aren't needed
        if (!(_this.info.attributes & attrInfo[name].mask)) {
          return;
        }

        var buffer = getBufferForAttribute(name, bufferSizes[name], attrInfo[name].type);
        var desc = {};
        desc.ptr = buffer.ofs; // Emscripten heap offset

        desc.elementByteSize = attrInfo[name].elemSize; // Size of a single element

        desc.elementCapacity = attrInfo[name].count; // Number of elements

        desc.elementStride = attrInfo[name].elemSize; // Distance (in bytes) between consecutive elements

        desc.flags = 0; // 0: cached memory, 1: uncached memory

        meshBuffers[name] = {
          data: new BufferView(buffer, 0, bufferSizes[name]),
          desc: desc
        };
      });
      return meshBuffers;
    }

  }

  Loader.structBuffer = new Buffer(Module.elementBufferSize * VertexAttribute.Count, Uint8Array);
  Loader.meshInfoBuffer = new Buffer(Module.meshInfoSize, Uint8Array);
  Loader.tempDataBuffer = new Buffer(Module.elementBufferSize, Uint8Array);

  class Runtime {
    constructor(client, platformFeatures) {
      var runtimeFlags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.assets = new Map();
      this.client = void 0;
      this.ptr = void 0;
      this.platformFeatures = void 0;
      this.nextId = 1;
      this.loader = undefined;
      this.tempTextureBuffer = new Buffer(1024 * 1024, Uint8Array);
      this.tempTranscodedBuffer = new Buffer(4, Uint8Array);
      this.tempStreamingStateBuffer = new Buffer(Module.streamingStateSize, Uint8Array);
      this.scratch = void 0;
      this.debug = void 0;

      /**
       * If no normal map formats are supported then force support for
       * BC5 so that textures get transcoded into an uncompressed format.
       */
      var normalFormats = TextureSupportFlags.ETC1 | TextureSupportFlags.ASTC | TextureSupportFlags.PVRTC1 | TextureSupportFlags.BC5;
      var textureSupportMask = platformFeatures.textureSupportMask;

      if (!(textureSupportMask & normalFormats)) {
        textureSupportMask |= TextureSupportFlags.BC5 | TextureSupportFlags.BC4;
      }

      this.client = client;
      var infoPtr = Module.serializeEnvironmentInfo({
        textureSupportFlags: textureSupportMask,
        localCacheDirectory: null,
        localCacheMaximumByteSize: 0
      }, 0);
      this.ptr = Module.runtimeCreate(client.ptr, infoPtr, runtimeFlags);

      Module._free(infoPtr);

      this.platformFeatures = platformFeatures;
      var size = Math.max(Module.meshInfoSize, Module.materialInfoSize, Module.textureInfoSize, Module.byteBufferSize);
      this.scratch = new Buffer(size, Uint8Array);
      this.debug = {
        textureFormatsInUse: new Set(),
        platformFeatures: platformFeatures
      };
    }

    destroy() {
      this.tempTextureBuffer.destroy();
      this.scratch.destroy();
      Module.runtimeDestroy(this.ptr);
      this.client.destroy();
      this.ptr = 0;
    }

    createScenePublic(publicKey) {
      var scenePtr = Module.sceneCreatePublic(this.ptr, publicKey);

      if (!scenePtr) {
        return undefined;
      }

      return new NativeScene(scenePtr);
    }

    createSceneLocal(url) {
      var scenePtr = Module.sceneCreateLocal(this.ptr, url);

      if (!scenePtr) {
        return undefined;
      }

      return new NativeScene(scenePtr);
    }

    createView() {
      var viewPtr = Module.viewCreate(this.ptr);
      return new View(viewPtr, this.assets);
    }

    update() {
      Module.runtimeUpdate(this.ptr);
    }

    *getAssetUnloads() {
      var p = Module.runtimeNextAssetUnload(this.ptr);

      while (p !== 0) {
        var unload = new AssetUnload(p);
        unload.data = this.assets.get(unload.userPointer);
        yield unload;
        p = Module.runtimeNextAssetUnload(this.ptr);
      }
    }

    *getAssetLoads() {
      var _this2 = this;

      while (true) {
        if (this.loader) {
          if (this.loader.done()) {
            var job = this.loader.load; // The buffers allocated by MeshLoader are handed over to the caller.

            job.data.buffers = this.loader.vertexBuffers;
            job.data.material = this.assets.get(this.loader.info.material);
            job.data.bounds = [this.loader.info.bounds.mn, this.loader.info.bounds.mx];
            this.loader = undefined;
            yield job;
          } else {
            /**
             * A mesh is still decompressing so we'll advance the decompression
             * one step further and return the control to the caller for a timeout check.
             */
            if (!this.loader.loadNext()) {
              throw new Error('loadNext failed');
            }

            yield undefined; // This processing step might have finished the decompression already, so loop back.

            continue;
          }
        }

        var loadPtr = Module.runtimeNextAssetLoad(this.ptr); // Terminate the generator when there are no more jobs to process.

        if (loadPtr === 0) {
          return undefined;
        }

        var load = new AssetLoad(loadPtr);

        if (load.type === 'LoadMaterial') {
          Module.materialLoadGetInfo(load.ptr, this.scratch.ofs);
          var info = Module.deserializeMaterialInfo(this.scratch.ofs);
          var textureObjects = info.textures.filter(function (ptr) {
            return ptr !== Module.INVALID_USERPOINTER;
          });
          textureObjects = textureObjects.map(function (id) {
            return _this2.assets.get(id);
          });
          load.data = {
            transparent: info.transparent,
            textures: textureObjects
          };
          yield load;
        } else if (load.type === 'LoadTexture') {
          var infoPtr = this.scratch.ofs;
          Module.textureLoadGetInfo(load.ptr, infoPtr);
          var texture = Module.deserializeTextureInfo(infoPtr);
          texture['mipByteSizes'] = [Module.textureGetMipmapLevelByteSize(infoPtr, 0)];
          texture['mipByteOffsets'] = [Module.textureGetMipmapLevelOffset(infoPtr, 0)];
          var buffer = this.tempTextureBuffer;
          buffer.ensureSize(texture.dataByteSize);
          Module.serializeByteBuffer({
            ptr: buffer.ofs,
            byteSize: texture.dataByteSize,
            // The output buffer size must match the texture data size
            flags: 0
          }, this.scratch.ofs);

          if (!Module.textureLoadGetData(load.ptr, this.scratch.ofs)) {
            throw new Error("textureLoadGetData failed: ".concat(load.ptr, ", ").concat(buffer.ofs, ", ").concat(texture.dataByteSize, "/").concat(buffer.size));
          }

          var bufferView = new BufferView(buffer, 0, texture.dataByteSize);

          if (this.formatNeedsTranscoding(texture.format)) {
            var _formatToArrayType;

            texture = this.downsampleAndTranscodeTexture(texture, buffer, this.tempTranscodedBuffer);
            var formatToArrayType = (_formatToArrayType = {}, _defineProperty$1(_formatToArrayType, TextureFormat.RGBA32, Uint8Array), _defineProperty$1(_formatToArrayType, TextureFormat.RGB565, Uint16Array), _defineProperty$1(_formatToArrayType, TextureFormat.RG8, Uint8Array), _defineProperty$1(_formatToArrayType, TextureFormat.RG16F, Uint16Array), _formatToArrayType);
            bufferView = new BufferView(this.tempTranscodedBuffer, 0, texture.dataByteSize);
            bufferView.type = formatToArrayType[texture.format];
          } // Convert internal enums to string constants
          // info.format = Native.TextureFormat[info.format]
          // info.colorSpace = Native.ColorSpace[info.colorSpace]
          // info.textureType = Native.TextureType[info.textureType]


          this.debug.textureFormatsInUse.add(texture.format);
          load.data = {
            info: texture,
            buffer: bufferView
          };
          yield load;
        } else if (load.type === 'LoadMesh') {
          // Mesh jobs create decompression work that needs to be done first.
          this.loader = new Loader(load);
          this.loader.vertexBuffers = this.loader.allocateBuffers();
          this.loader.setBuffers(this.loader.vertexBuffers);
          yield undefined;
        } else {
          throw new Error("Job wasn't handled correctly");
        }
      }
    }

    loadAssets(handlers, timeLimit) {
      var startTime = performance.now(); // First go and free up all pending assets

      for (var unload of this.getAssetUnloads()) {
        handlers[unload.type](unload);

        if (performance.now() - startTime > timeLimit) {
          break;
        }
      } // Process load jobs if there's still time left


      for (var load of this.getAssetLoads()) {
        // If job is 'undefined' it means a mesh is still decompressing
        if (load) {
          try {
            handlers[load.type](load);
          } catch (error) {
            load.finish(AssetLoadResult.Failure);
            throw error;
          }
        } // We always process at least one job before checking the time


        if (performance.now() - startTime > timeLimit) {
          break;
        }
      }
    }

    addAsset(asset) {
      // AssetJob IDs are just an increasing 32-bit series
      var userPtr = this.nextId;
      this.nextId = this.nextId + 1 | 0;

      if (this.nextId === 0) {
        this.nextId = 1;
      }

      this.assets.set(userPtr, asset);
      return userPtr;
    }
    /**
     * Removes the asset reference of the stream out job.
     * Assumes the caller has already freed their own asset resources.
     */


    removeAsset(job, asset) {
      var id = job.userPointer;

      if (this.assets.has(id)) {
        this.assets["delete"](id);
      }

      return id;
    }

    formatNeedsTranscoding(format) {
      var flags = this.platformFeatures.textureSupportMask;

      switch (format) {
        case TextureFormat.BC1:
          if (flags & TextureSupportFlags.BC1) {
            return false;
          }

          break;

        case TextureFormat.BC3:
          if (flags & TextureSupportFlags.BC3) {
            return false;
          }

          break;

        case TextureFormat.BC4:
          if (flags & TextureSupportFlags.BC4) {
            return false;
          }

          break;

        case TextureFormat.BC5:
          if (flags & TextureSupportFlags.BC5) {
            return false;
          }

          break;

        default:
          return false;
      }

      return true;
    }

    downsampleAndTranscodeTexture(info, buffer, outputBuffer) {
      var newFormat = Module.getUncompressedFromBCFormat(info.format);

      if (newFormat === TextureFormat.Count) {
        throw new Error("Couldn't find a matching BC format");
      } // If half float is not supported on this platform we need to make do with an 8-bit texture.


      if (newFormat === TextureFormat.RG16F && !this.platformFeatures.halfFloat) {
        newFormat = TextureFormat.RG8;
      }

      var outputSize = Module.getTextureByteSize(info.width, info.height, newFormat);
      outputBuffer.ensureSize(outputSize);
      var result = Module.downsampleAndTranscodeTexture(info.format, newFormat, info.width, info.height, buffer.ofs, info.dataByteSize, outputBuffer.ofs, outputBuffer.size);

      if (!result.success) {
        throw new Error("Texture transcoding failed. Input: ".concat(info.format, ", output: ").concat(newFormat, ", output size: ").concat(outputSize));
      }

      if (result.texture.format !== newFormat) {
        throw new Error("Transcoded texture format was ".concat(result.texture.format, " instead of the expected ").concat(newFormat));
      } // Create a new texture descriptor with updated properties and return it.


      var info2 = Object.assign({}, info);
      var desc = result.texture;
      info2 = Object.assign(info2, {
        format: desc.format,
        width: desc.width,
        height: desc.height,
        dataByteSize: desc.dataByteSize,
        mipByteSizes: [desc.dataByteSize]
      });
      return info2;
    }

    getStreamingState() {
      Module.runtimeGetStreamingState(this.ptr, this.tempStreamingStateBuffer.ofs);
      return Module.deserializeStreamingState(this.tempStreamingStateBuffer.ofs);
    }

    getStreamingProgress() {
      var state = this.getStreamingState();

      if (state.numResidentTiles == 0) {
        return 0.0;
      }

      return state.numResidentTilesLoaded / state.numResidentTiles;
    }

  } // Expose only runtime for instantiation


  return {
    createRuntime: function createRuntime(features) {
      return new Runtime(new Client(), features);
    }
  };
};

// Generated at 2020-07-06 15:28:19
function wrapNativeFunctions(Module) {
  Object.assign(Module, {
    configInit: Module.cwrap('UmbraConfigInit', null, ['number']),
    clientCreate: Module.cwrap('UmbraClientCreate', 'number', ['string', 'number']),
    clientDestroy: Module.cwrap('UmbraClientDestroy', null, ['number']),
    getLibraryInfo: Module.cwrap('UmbraGetLibraryInfo', 'string', ['number']),
    environmentInfoDefaults: Module.cwrap('UmbraEnvironmentInfoDefaults', null, ['number']),
    runtimeCreate: Module.cwrap('UmbraRuntimeCreate', 'number', ['number', 'number', 'number']),
    runtimeUpdate: Module.cwrap('UmbraRuntimeUpdate', null, ['number']),
    runtimeGetStreamingState: Module.cwrap('UmbraRuntimeGetStreamingState', null, ['number', 'number']),
    runtimeDestroy: Module.cwrap('UmbraRuntimeDestroy', null, ['number']),
    sceneCreate: Module.cwrap('UmbraSceneCreate', 'number', ['number', 'string', 'string']),
    sceneCreatePublic: Module.cwrap('UmbraSceneCreatePublic', 'number', ['number', 'string']),
    sceneCreateLocal: Module.cwrap('UmbraSceneCreateLocal', 'number', ['number', 'string']),
    sceneGetConnectionStatus: Module.cwrap('UmbraSceneGetConnectionStatus', 'number', ['number']),
    sceneGetInfo: Module.cwrap('UmbraSceneGetInfo', 'number', ['number', 'number']),
    sceneSetTransform: Module.cwrap('UmbraSceneSetTransform', null, ['number', 'number']),
    sceneDestroy: Module.cwrap('UmbraSceneDestroy', null, ['number']),
    viewCreate: Module.cwrap('UmbraViewCreate', 'number', ['number']),
    viewUpdateRendering: Module.cwrap('UmbraViewUpdateRendering', null, ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']),
    viewUpdateFilter: Module.cwrap('UmbraViewUpdateFilter', null, ['number', 'number']),
    viewGetCompleted: Module.cwrap('UmbraViewGetCompleted', 'number', ['number']),
    viewNextRenderables: Module.cwrap('UmbraViewNextRenderables', 'number', ['number', 'number', 'number']),
    viewResetRenderables: Module.cwrap('UmbraViewResetRenderables', null, ['number']),
    viewDestroy: Module.cwrap('UmbraViewDestroy', null, ['number']),
    viewRayQuery: Module.cwrap('UmbraViewRayQuery', 'number', ['number', 'number', 'number', 'number', 'number', 'number']),
    sceneCopyCreate: Module.cwrap('UmbraSceneCopyCreate', 'number', ['number', 'number', 'number', 'number', 'number']),
    sceneCopyGetStatus: Module.cwrap('UmbraSceneCopyGetStatus', 'number', ['number', 'number']),
    sceneCopyGetError: Module.cwrap('UmbraSceneCopyGetError', 'string', ['number']),
    sceneCopyDestroy: Module.cwrap('UmbraSceneCopyDestroy', null, ['number']),
    vertexAttributeGetElementByteSize: Module.cwrap('UmbraVertexAttributeGetElementByteSize', 'number', ['number']),
    runtimeNextAssetLoad: Module.cwrap('UmbraRuntimeNextAssetLoad', 'number', ['number']),
    assetLoadGetType: Module.cwrap('UmbraAssetLoadGetType', 'number', ['number']),
    assetLoadPrepare: Module.cwrap('UmbraAssetLoadPrepare', null, ['number', 'number']),
    assetLoadAbortRequested: Module.cwrap('UmbraAssetLoadAbortRequested', 'number', ['number']),
    assetLoadFinish: Module.cwrap('UmbraAssetLoadFinish', null, ['number', 'number']),
    meshLoadFinishExternal: Module.cwrap('UmbraMeshLoadFinishExternal', null, ['number', 'number', 'number', 'number']),
    meshLoadGetInfo: Module.cwrap('UmbraMeshLoadGetInfo', null, ['number', 'number']),
    meshLoadGetData: Module.cwrap('UmbraMeshLoadGetData', 'number', ['number', 'number', 'number']),
    meshStreamSetBuffers: Module.cwrap('UmbraMeshStreamSetBuffers', 'number', ['number', 'number', 'number']),
    meshStreamNext: Module.cwrap('UmbraMeshStreamNext', 'number', ['number', 'number', 'number']),
    meshStreamDone: Module.cwrap('UmbraMeshStreamDone', 'number', ['number']),
    meshLoadGetSerializedSize: Module.cwrap('UmbraMeshLoadGetSerializedSize', 'number', ['number']),
    textureGetMipmapLevelByteSize: Module.cwrap('UmbraTextureGetMipmapLevelByteSize', 'number', ['number', 'number']),
    textureGetMipmapLevelOffset: Module.cwrap('UmbraTextureGetMipmapLevelOffset', 'number', ['number', 'number']),
    textureLoadGetInfo: Module.cwrap('UmbraTextureLoadGetInfo', null, ['number', 'number']),
    textureLoadGetData: Module.cwrap('UmbraTextureLoadGetData', 'number', ['number', 'number']),
    textureLoadGetSerializedSize: Module.cwrap('UmbraTextureLoadGetSerializedSize', 'number', ['number']),
    textureMetaDataLoadGetData: Module.cwrap('UmbraTextureMetaDataLoadGetData', 'number', ['number', 'number']),
    textureMetaDataGetClassificationCount: Module.cwrap('UmbraTextureMetaDataGetClassificationCount', 'number', ['number', 'number']),
    textureMetaDataGetClassification: Module.cwrap('UmbraTextureMetaDataGetClassification', 'number', ['number', 'number', 'number']),
    textureMetaDataGetClassificationAmount: Module.cwrap('UmbraTextureMetaDataGetClassificationAmount', 'number', ['number', 'number', 'number']),
    materialLoadGetInfo: Module.cwrap('UmbraMaterialLoadGetInfo', null, ['number', 'number']),
    runtimeNextAssetUnload: Module.cwrap('UmbraRuntimeNextAssetUnload', 'number', ['number']),
    assetUnloadGetType: Module.cwrap('UmbraAssetUnloadGetType', 'number', ['number']),
    assetUnloadGetUserPointer: Module.cwrap('UmbraAssetUnloadGetUserPointer', 'number', ['number']),
    assetUnloadFinish: Module.cwrap('UmbraAssetUnloadFinish', null, ['number']),
    sendInternalMessage: Module.cwrap('UmbraSendInternalMessage', 'number', ['number', 'number'])
  });
}

/**
 * These definitions are exported in 'index.ts'.
 * See the API reference for more details:
 *
 *     https://github.com/UmbraSoftware/umbrajs/wiki/API-reference
 *
 */

/**
 * Returns a library instance that uses the Emscripten resources of "Module".
 */
function instantiate(Module) {
  var lib = {};
  /**
   * Queries supported texture formats and also enables the relevant WebGL extensions.
   */

  lib.getPlatformFeatures = function (gl) {
    var flags = 0; // We accumulate a texture format bitmask here

    var formats = new Set(); // Will hold all supported format names

    var supportsSRGB = false;
    var supportsHalfFloat = false;
    /**
     * We fetch all extension strings and strip off possible vendor prefixes of WEBGL
     * extensions. However, when we enable the extension we need the original full string.
     * Here 'extStrings' holds a mapping from a shortened to a full extension string.
     */

    var extStrings = new Map([]); // Full strings

    var extNames = []; // Shortened strings

    var allExtensions = gl.getSupportedExtensions();

    for (var full of allExtensions) {
      var shortened = full.replace(/^(.*)_WEBGL_/, 'WEBGL_');
      extStrings.set(shortened, full);
      extNames.push(shortened);
    }

    var mapping = new Map([['WEBGL_compressed_texture_s3tc', {
      mask: TextureSupportFlags.BC1 | TextureSupportFlags.BC2 | TextureSupportFlags.BC3,
      names: ['bc1', 'bc2', 'bc3']
    }], ['WEBGL_compressed_texture_s3tc_srgb', {
      mask: TextureSupportFlags.BC1 | TextureSupportFlags.BC2 | TextureSupportFlags.BC3,
      names: ['bc1', 'bc2', 'bc3']
    }], ['WEBGL_compressed_texture_rgtc', {
      mask: TextureSupportFlags.BC4 | TextureSupportFlags.BC5,
      names: ['bc4', 'bc5']
    }], ['WEBGL_compressed_texture_pvrtc', {
      mask: TextureSupportFlags.PVRTC1,
      names: ['pvrtc1_rgb4', 'pvrtc1_rgba4']
    }], ['WEBGL_compressed_texture_etc1', {
      mask: TextureSupportFlags.ETC1,
      names: ['etc1_rgb']
    }], ['WEBGL_compressed_texture_astc', {
      mask: TextureSupportFlags.ASTC,
      names: ['astc_4x4']
    }]]);

    for (var key of mapping.keys()) {
      if (extNames.includes(key)) {
        gl.getExtension(extStrings.get(key));
        var value = mapping.get(key);
        flags |= value.mask;
        value.names.forEach(function (name) {
          return formats.add(name);
        });
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

    return {
      textureSupportMask: flags,
      formats: _toConsumableArray$1(formats),
      srgb: supportsSRGB,
      halfFloat: supportsHalfFloat
    };
  }; // Access to the Emscripten module is needed for deinitialization


  lib.nativeModule = Module; // Allow access to Runtime class

  lib.createRuntime = create(Module).createRuntime;

  lib.getStreamingInfo = function () {
    return {
      minBytesDownloaded: lib.nativeModule.minBytesDownloaded,
      maxBytesDownloaded: lib.nativeModule.maxBytesDownloaded
    };
  };

  lib.getLibraryInfo = function () {
    return {
      version: Module.getLibraryInfo(LibraryInfo.Version),
      copyright: Module.getLibraryInfo(LibraryInfo.Copyright),
      buildTime: Module.getLibraryInfo(LibraryInfo.BuildTime),
      buildID: Module.getLibraryInfo(LibraryInfo.BuildId)
    };
  };

  lib.abortDownloads = function () {
    Object.values(Module.wgetRequests).forEach(function (req) {
      req.abort();
    });
  };

  return lib;
}
/**
 * Compiles the WebAssembly and code and initializes the Emscripten environment.
 * Returns a Promise that resolves with the library instance ready for use.
 */


var initUmbra = function initUmbra(config) {

  var defaults = {
    wasmURL: ''
  };
  config = Object.assign(defaults, config);
  return new Promise(function (resolve, reject) {
    try {
      var redirectWasmURL = function redirectWasmURL(path, prefix) {
        // If it's our wasm file, return a custom URL
        if (path.endsWith('umbra.wasm') && config.wasmURL !== '') {
          return config.wasmURL;
        }

        return prefix + path;
      };

      UmbraNativeAPI({
        locateFile: redirectWasmURL
      }).then(function (Module) {
        // A workaround for https://github.com/emscripten-core/emscripten/issues/5820
        delete Module['then'];

        Module['onAbort'] = function (what) {
          reject(what);
        };

        wrapNativeFunctions(Module);
        resolve(instantiate(Module));
      });
    } catch (e) {
      reject(e);
    }
  });
};
/**
 * Deinitializes the Emscripten environment.
 *
 * NOTE: We assume here that async IndexedDB loads and stores have already finished.
 * This is the case if Umbra.update() was *not* called before deinitUmbra() on the
 * same frame.
 */

var deinitUmbra = function deinitUmbra(Umbra) {
  // Pending requests must be aborted so that native handlers won't get called
  Umbra.abortDownloads();
  var privateUmbra = Umbra; // Emscripten's exit(0) call throws an ExitStatus exception

  try {
    privateUmbra.nativeModule._exit(0);
  } catch (e) {
    if (e.name !== 'ExitStatus') {
      throw e;
    }
  }
};

var _ThreeFormats;

function makeFormat(format, type, compressed) {
  return {
    format: format,
    type: type,
    compressed: compressed
  };
} // prettier-ignore


var ThreeFormats = (_ThreeFormats = {}, _defineProperty(_ThreeFormats, TextureFormat.RGB24, makeFormat(RGBFormat, UnsignedByteType, false)), _defineProperty(_ThreeFormats, TextureFormat.RGBA32, makeFormat(RGBAFormat, UnsignedByteType, false)), _defineProperty(_ThreeFormats, TextureFormat.RGB565, makeFormat(RGBFormat, UnsignedShort565Type, false)), _defineProperty(_ThreeFormats, TextureFormat.RG8, makeFormat(LuminanceAlphaFormat, UnsignedByteType, false)), _defineProperty(_ThreeFormats, TextureFormat.RG16F, makeFormat(LuminanceAlphaFormat, HalfFloatType, false)), _defineProperty(_ThreeFormats, TextureFormat.BC1, makeFormat(RGBA_S3TC_DXT1_Format, UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.BC3, makeFormat(RGBA_S3TC_DXT5_Format, UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.ETC1_RGB, makeFormat(RGB_ETC1_Format, UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.ASTC_4X4, makeFormat(RGBA_ASTC_4x4_Format, UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.PVRTC1_RGB4, makeFormat(RGB_PVRTC_4BPPV1_Format, UnsignedByteType, true)), _ThreeFormats);

var normalmapChunk = "\n#ifdef USE_NORMALMAP\n#ifdef USE_TANGENT\n\nvec3 tangentToWorld2 = normal;\nvec3 tangentToWorld0 = normalize(tangent - tangentToWorld2 * dot(tangentToWorld2, tangent));\n\n#ifdef UMBRA_FLIP_TANGENT\nvec3 tangentToWorld1 = normalize(cross(tangentToWorld0, tangentToWorld2));\n#else\nvec3 tangentToWorld1 = normalize(cross(tangentToWorld2, tangentToWorld0));\n#endif\n\n#if defined(UMBRA_TEXTURE_SUPPORT_BC5) || defined(UMBRA_TEXTURE_SUPPORT_ASTC)\nnormal.xy = texture2D(normalMap, vUv).xy * 2.0 - 1.0;\nnormal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));\n#elif defined(UMBRA_TEXTURE_SUPPORT_BC3)\nnormal.xy = texture2D(normalMap, vUv).yw * 2.0 - 1.0;\nnormal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));\n#else\nnormal.xyz = texture2D(normalMap, vUv).xyz;\nnormal.xy *= 2.0;\nnormal.xy -= 1.0;\nnormal = normalize(normal);\n#endif\n\nnormal = tangentToWorld0 * normal.x + tangentToWorld1 * normal.y + tangentToWorld2 * normal.z;\nnormal = normalize(normal);\n#endif\n#endif\n\n";
var metalnessMapChunk = "\nfloat metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\nvec4 texelMetalness = texture2D( metalnessMap, vUv );\nmetalnessFactor *= texelMetalness.r;\n#endif\n"; // The BSDF function (see 'bsdfs.glsl') squares the roughness so we don't need to do it here.

var roughnessMapChunk = "\nfloat roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\nvec4 texelRoughness = texture2D( roughnessMap, vUv );\nfloat roughness = 1.0 - texelRoughness.g;\nroughnessFactor *= roughness;\n#endif\n";
/**
 * ShaderPatcher is a preprocessor class that replaces the default PBR texture read
 * shader chunks with the correct Umbra versions. Doing it this way instead of completely
 * custom shaders allows the application to use its own materials with Umbra scenes.
 */

class ShaderPatcher {
  constructor(formats) {
    this.flipTangent = void 0;
    this.defines = void 0;

    /*
     * World space transform can swap handedness which isn't handled by three.js in tangent space
     * normal maps so we need to be able to flip them ourselves.
     */
    this.flipTangent = false; // Texture format feature flags

    this.defines = '';

    if (formats.indexOf('bc3') > -1) {
      this.defines += '#define UMBRA_TEXTURE_SUPPORT_BC3\n';
    }

    if (formats.indexOf('bc5') > -1) {
      this.defines += '#define UMBRA_TEXTURE_SUPPORT_BC5\n';
    }

    if (formats.indexOf('astc_4x4') > -1) {
      this.defines += '#define UMBRA_TEXTURE_SUPPORT_ASTC\n';
    }
  }

  process(shader, renderer) {
    var frag = shader.fragmentShader;

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
  constructor() {
    this.usedList = [];
    this.freeList = [];
  }

  // Tries to find an object matching "predicate", if any given.
  // Constructs a new object with "makeFunc" if none were found.
  allocate(makeFunc, predicate) {
    var obj;

    if (this.freeList.length > 0) {
      // If no predicate given we always take the last one
      if (typeof predicate === 'undefined') {
        obj = this.freeList.pop();
      } else {
        for (var i = 0; i < this.freeList.length; i++) {
          var elem = this.freeList[i];

          if (predicate(elem)) {
            obj = elem;
            this.freeList.splice(i, 1);
            break;
          }
        }
      }
    }

    if (!obj) {
      obj = makeFunc();
    }

    this.usedList.push(obj);
    return obj;
  }

  freeAll(clearFunc) {
    for (var i = 0; i < this.usedList.length; i++) {
      if (clearFunc) {
        clearFunc(this.usedList[i]);
      }

      this.freeList.push(this.usedList[i]);
    }

    this.usedList.length = 0;
  }

  clear() {
    this.usedList.length = 0;
    this.freeList.length = 0;
  }

}

class UmbraScene extends Object3D {
  // User editable config
  // Event callbacks
  // We need to present ourselves as a LOD object to get the update() call
  set quality(value) {
    console.error("UmbraScene.quality is not supported any more. Use camera.umbraQuality instead.");
  }

  // UmbraScene should be instantiated using Umbra.createScene()
  constructor(runtime, scene, sharedState, _renderer, features) {
    var _this;

    var onDispose = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
    super();
    _this = this;
    this.material = new MeshBasicMaterial();
    this.wireframe = false;
    this.freeze = false;
    this.onConnected = void 0;
    this.onConnectionError = void 0;
    this.onDisconnected = void 0;
    this.onConnectionChanged = void 0;
    this.onMeshChanged = void 0;
    this.isLOD = true;
    this.autoUpdate = true;
    this.name = 'UmbraScene';
    this.renderer = void 0;
    this.materialPool = new ObjectPool();
    this.shaderPatcher = void 0;
    this.sharedState = void 0;
    this.stats = {
      numVisible: 0,
      numShadowCasters: 0,
      numCachedMaterials: 0,
      numAssets: 0
    };
    this.diagnostics = {
      missingNormals: {
        checked: false,
        message: 'Property umbraScene.opaqueMaterial has been deprecated. Use umbraScene.material instead.'
      },
      deprecatedMaterial: {
        checked: false,
        message: 'UmbraScene has no normals so it will appear black.'
      },
      report: function report(field) {
        if (!_this.diagnostics[field].checked) {
          _this.diagnostics[field].checked = true;
          console.warn(_this.diagnostics[field].message);
        }
      }
    };
    this.umbra = void 0;
    this.onDispose = void 0;
    this.oldState = {
      status: undefined,
      visibleIDs: new Set()
    };

    this.update = function (camera) {
      var _this2 = this;

      if (this.freeze) {
        return;
      }

      var view = this.sharedState.cameraToView.get(camera);

      if (!view) {
        view = this.umbra.runtime.createView();
        this.sharedState.cameraToView.set(camera, view);
      }

      this.sharedState.viewLastUseFrame.set(view, this.renderer.info.render.frame);
      this.umbra.nativeScene.setTransform(this.matrixWorld.elements); // If we are using a PBR material then we might need to flip the tangent vector

      if (this.isPBREnabled()) {
        // TODO(pvaananen): Would be nice to avoid recalculating the determinant every frame.
        var flip = this.matrixWorld.determinant() < 0;

        if (flip !== this.shaderPatcher.flipTangent) {
          this.shaderPatcher.flipTangent = flip;
          this.materialPool.clear();
        }
      }

      this.stats.numVisible = 0;
      this.stats.numAssets = this.umbra.runtime.assets.size;
      /**
       * Next we find the visible Umbra meshes and add them to the scene graph.
       * This is pretty tricky, because we want more meshes to show up in the shadow map pass
       * than in the main camera render pass. This is why 'mesh.castShadow' doesn't help here
       * since it does the exact opposite.
       *
       * We use a workaround that first adds the common meshes as children of the Umbra scene
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
       *    three.js                           scene object (this)
       *    --------                           ------------------
       *    Starts traversing three.js scene graph
       *    Calls scene.update(cam) ---------> Updates views
       *                                       Fetches a list of renderables
       *                                       Adds common meshes to this.children
       *    Adds scene.children to
       *      the render list
       *    Starts rendering scene.children
       *    Calls proxy.update(cam) ---------> Proxy goes and adds shadow casters to this.children
       *    Starts the shadow pass
       *    Adds scene.children to shadow
       *      render list
       *    Renders the shadow pass
       *    Renders the opaque pass
       *    Renders the transparent pass
       *
       * As you can see, the 'this.children' list is mutated halfway through the renderer's
       * scene graph traversal so that different object list ends up to the shadow pass render code.
       */
      // First filter away last frame's meshes

      var newChildren = [];

      for (var i = 0; i < this.children.length; i++) {
        if (!this.children[i].isUmbraMesh) {
          newChildren.push(this.children[i]);
        }
      }

      this.children = newChildren;
      var shadowCasters = [];
      var proxy = new Object3D();
      proxy.isLOD = true;
      proxy.autoUpdate = true;

      proxy.update = function (cam) {
        // Remove the proxy itself
        _this2.children.pop(); // Add the shadow casters


        for (var _i = 0; _i < shadowCasters.length; _i++) {
          _this2.children.push(shadowCasters[_i]);
        }
      };

      this.materialPool.freeAll(function (mat) {
        // Remove references to textures so GC can release the three.js objects
        delete mat.map;
        delete mat.normalMap;
        delete mat.metalnessMap;
        delete mat.roughnessMap;
      });
      var visible = [];
      var visibleIDs = new Set(); // On the first frame the view didn't yet exist when UmbrajsThreeInternal collected a list of renderables,
      // so the list in "viewRenderables" may be missing.

      if (this.sharedState.viewRenderables.has(view)) {
        visible = this.sharedState.viewRenderables.get(view);
      }

      var _loop = function _loop(_i2) {
        // Each view's list includes renderables of all UmbraScenes, so we need to pick only the relevant ones here.
        if (visible[_i2].scenePtr !== _this2.umbra.nativeScene.ptr) {
          return "continue";
        }

        var _ref = visible[_i2].mesh,
            materialDesc = _ref.materialDesc,
            geometry = _ref.geometry;
        visibleIDs.add(visible[_i2].id);
        _this2.stats.numVisible += 1;
        var isTransparent = materialDesc.transparent || _this2.material.transparent; // Fetch a new material from the pool if we already have free ones. This avoids
        // extra allocations and more importantly 'onBeforeCompile' calls.

        var material = _this2.materialPool.allocate(function () {
          return _this2.material.clone();
        }, function (mat) {
          return mat.transparent === isTransparent;
        });

        material.wireframe = _this2.wireframe;
        material.opacity = _this2.material.opacity;
        material.transparent = isTransparent;

        material.onBeforeCompile = function (shader, renderer) {
          /**
           * If the original material already had a custom preprocessor callback we need to call
           * that first. We need to use 'apply' in case the callback uses 'this' reference to
           * access some material properties.
           */
          if (_this2.material.onBeforeCompile) {
            _this2.material.onBeforeCompile.apply(material, [shader, renderer]);
          }

          _this2.shaderPatcher.process(shader, renderer);
        };

        var diffuseMap = materialDesc.textures[TextureType.Diffuse];
        var normalMap = materialDesc.textures[TextureType.Normal];
        var metalglossMap = materialDesc.textures[TextureType.Specular];

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
         * gets cleared every frame.
         */


        var mesh = new Mesh(geometry, material);
        mesh.isUmbraMesh = true;
        mesh.matrixWorld.copy(_this2.matrixWorld);
        mesh.castShadow = _this2.castShadow;
        mesh.receiveShadow = _this2.receiveShadow;
        mesh.visible = true;

        _this2.children.push(mesh); // TODO(pvaananen): Does this check work with multiple cameras?


        if ((visible[_i2].mask & 0x01) === 0) {
          shadowCasters.push(mesh);
          mesh.frustumCulled = true;
        } else {
          _this2.children.push(mesh);

          mesh.frustumCulled = false;
        }
      };

      for (var _i2 = 0; _i2 < visible.length; _i2++) {
        var _ret = _loop(_i2);

        if (_ret === "continue") continue;
      } // Emit a warning if normals are required but missing


      if (!this.diagnostics.missingNormals.checked && this.isPBREnabled()) {
        for (var _i3 = 0; _i3 < this.children.length; _i3++) {
          if (!this.children[_i3].isUmbraMesh) {
            continue;
          }

          if (!('normal' in this.children[_i3].geometry.attributes)) {
            this.diagnostics.report('missingNormals');
            break;
          }
        }
      }

      this.stats.numShadowCasters = shadowCasters.length;
      this.stats.numCachedMaterials = this.materialPool.usedList.length + this.materialPool.freeList.length;

      if (shadowCasters.length > 0) {
        this.children.push(proxy);
      }

      this.updateStreamingEvents(visibleIDs);
    };

    this.renderer = _renderer;
    this.sharedState = sharedState;
    this.shaderPatcher = new ShaderPatcher(features.formats);
    this.onDispose = onDispose; // We need to flip the Z-axis since scenes are stored in "left-handed Y is up" coordinate system

    this.scale.set(1.0, 1.0, -1.0); // Add API objects under their own object for clarity

    this.umbra = {
      runtime: runtime,
      nativeScene: scene
    };
  }

  get opaqueMaterial() {
    this.diagnostics.report('deprecatedMaterial');
    return this.material;
  }

  set opaqueMaterial(mat) {
    this.diagnostics.report('deprecatedMaterial');
    this.material = mat;
  }

  getInfo() {
    var info = {
      connected: this.umbra.nativeScene.isConnected()
    };

    if (info.connected) {
      info['sceneInfo'] = this.umbra.nativeScene.getInfo();
    }

    Object.assign(info, this.stats);
    return info;
  }

  getBounds() {
    if (!this.umbra.nativeScene.isConnected()) {
      return undefined;
    }

    var info = this.umbra.nativeScene.getInfo();
    var bounds = info.bounds;
    var min = bounds.mn;
    var max = bounds.mx;
    var box = new Box3(new Vector3(min[0], min[1], min[2]), new Vector3(max[0], max[1], max[2]));
    return box;
  }

  getCenter() {
    var bounds = this.getBounds();
    bounds.applyMatrix4(this.matrixWorld);
    var center = new Vector3();
    bounds.getCenter(center);
    return center;
  }

  updateStreamingEvents(visibleIDs) {
    var then = this.oldState.visibleIDs;
    var now = visibleIDs;

    if (this.onMeshChanged) {
      if (then.size !== now.size) {
        this.onMeshChanged();
      } else {
        for (var id of now) {
          if (!then.has(id)) {
            this.onMeshChanged();
            break;
          }
        }
      }
    }

    this.oldState.visibleIDs = visibleIDs;
  } // This gets called by ThreejsIntegration's periodic update handler


  updateNetworkEvents() {
    var status = this.umbra.nativeScene.connectionStatus();

    if (this.oldState.status !== status) {
      if (this.onConnectionChanged) {
        this.onConnectionChanged(status);
      }

      switch (status) {
        case ConnectionStatus.ConnectionError:
          if (this.onConnectionError) {
            this.onConnectionError('Could not connect');
          }

          break;

        case ConnectionStatus.Connected:
          if (this.onConnected) {
            this.onConnected();
          }

          break;

        case ConnectionStatus.Connecting:
          if (this.onDisconnected) {
            this.onDisconnected();
          }

          break;
      }
    }

    this.oldState.status = status;
  }

  dispose() {
    if (this.onDispose) {
      this.onDispose(this);
    } // Remove all Umbra meshes from children


    this.children = this.children.filter(function (x) {
      return !x.isUmbraMesh;
    }); // Dispose all cached materials

    this.materialPool.freeAll(function (mat) {
      return mat.dispose();
    }); // We don't dispose mesh geometries here because they are managed by the Runtime, and
    // Views are managed by UmbrajsThreeInternal.

    this.umbra.nativeScene.destroy(); // Runtime must be manually freed by the user with .dispose() of the API object
  }

  isPBREnabled() {
    return 'normalMapType' in this.material;
  }

}

class Loader extends Loader$1 {
  constructor(Umbra, manager) {
    super(manager);
    this.Umbra = void 0;
    this.Umbra = Umbra;
  }

  load(url, onLoad, onProgress, onError) {
    var model = this.Umbra.createScene(url);

    if (onError) {
      model.onConnectionError = function (err) {
        onError(err);
      };
    }

    model.onConnected = function () {
      delete model.onConnectionError;

      if (onProgress) {
        onProgress(1.0);
      }

      onLoad(model);
    };
  }

}

function makeBoundingSphere(aabb) {
  var min = aabb[0];
  var max = aabb[1];
  var size = new Vector3(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
  var pos = new Vector3(min[0] + size.x * 0.5, min[1] + size.y * 0.5, min[2] + size.z * 0.5);
  return new Sphere(pos, size.length());
}

class UmbrajsThreeInternal {
  // Upper VRAM memory use limit in bytes
  // Upper total download size limit in bytes. Turned off by default.
  // This gets lowered automatically if memory limit is hit
  // An instance of the umbrajs library for debugging
  get memoryUsed() {
    return this.textureMemoryUsed + this.meshMemoryUsed;
  }

  // This class should be instantiated via initUmbra()
  constructor(umbrajs, renderer) {
    var _this = this;

    this.memoryLimit = 500 * 1024 * 1024;
    this.downloadLimit = 0;
    this.qualityFactor = 1.0;
    this.onStreamingUpdate = void 0;
    this.onStreamingComplete = void 0;
    this.umbrajs = void 0;
    this.runtime = void 0;
    this.features = void 0;
    this.renderer = void 0;
    this.updateTask = undefined;
    this.assetSizes = new Map();
    this.textureMemoryUsed = 0;
    this.meshMemoryUsed = 0;
    this.lastQualityLowerFrame = -1;
    this.umbraScenes = new Set();
    this.oldState = {
      progress: 0,
      downloadLimitReached: false
    };
    this.sharedState = {
      cameraToView: new Map(),
      viewRenderables: new Map(),
      viewLastUseFrame: new Map()
    };
    this.tempVector = new Vector3();
    this.dirVector = new Vector3();
    this.matrixWorldInverse = new Matrix4();
    this.projScreenMatrix = new Matrix4();
    this.cameraWorldPosition = new Vector3();
    this.handlers = {
      LoadMaterial: function (_LoadMaterial) {
        function LoadMaterial(_x) {
          return _LoadMaterial.apply(this, arguments);
        }

        LoadMaterial.toString = function () {
          return _LoadMaterial.toString();
        };

        return LoadMaterial;
      }(function (load) {
        var material = load.data;
        material.transparent = load.data.transparent ? true : false;
        load.prepare(_this.runtime.addAsset(material));
        load.finish(Assets.AssetLoadResult.Success);
      }),
      UnloadMaterial: function UnloadMaterial(unload) {
        _this.runtime.removeAsset(unload, unload.data);

        unload.finish();
      },
      LoadTexture: function (_LoadTexture) {
        function LoadTexture(_x2) {
          return _LoadTexture.apply(this, arguments);
        }

        LoadTexture.toString = function () {
          return _LoadTexture.toString();
        };

        return LoadTexture;
      }(function (load) {
        var info = load.data.info;
        var buffer = load.data.buffer;
        var glformat;

        if (ThreeFormats.hasOwnProperty(info.format)) {
          glformat = ThreeFormats[info.format];
        }

        if (!glformat) {
          // Add a dummy object for unknown formats. They will appear as a solid black color.
          console.log('Unknown texture format', info.format);
          load.prepare(_this.runtime.addAsset({
            isTexture: false
          }));
          load.finish(Assets.AssetLoadResult.Success);
          return;
        }

        if (!_this.canFitInMemory(buffer.size)) {
          load.finish(Assets.AssetLoadResult.OutOfMemory);

          _this.adjustQuality(0.8);

          return;
        }

        var tex = _this.makeTexture(info, buffer, glformat);
        /**
         * A workaround for the case where we directly output colors in gamma space.
         * We make diffuse textures linear to avoid gamma expansion at texture fetch time.
         * This is slightly wrong because texture filtering and shading will be done
         * in gamma space, but this behavior is what people usually expect.
         */


        var gammaOutput = false;

        if ('outputEncoding' in _this.renderer) {
          // three.js version 112 and after
          gammaOutput = _this.renderer['outputEncoding'] === sRGBEncoding;
        } else if ('gammaOutput' in _this.renderer) {
          // three.js prior to version 112
          gammaOutput = _this.renderer['gammaOutput'];
        }

        if (info.type === TextureType.Diffuse && !gammaOutput) {
          tex.encoding = LinearEncoding;
        } else {
          tex.encoding = info.colorSpace === ColorSpace.Linear ? LinearEncoding : sRGBEncoding;
        }

        tex.needsUpdate = true;
        _this.textureMemoryUsed += buffer.size;

        _this.assetSizes.set(tex, buffer.size);

        load.prepare(_this.runtime.addAsset(tex));
        load.finish(Assets.AssetLoadResult.Success);
      }),
      UnloadTexture: function UnloadTexture(unload) {
        // Free texture data only if it's not a dummy texture
        if (unload.data.isTexture) {
          unload.data.dispose();
        }

        if (_this.assetSizes.has(unload.data)) {
          _this.textureMemoryUsed -= _this.assetSizes.get(unload.data);

          _this.assetSizes["delete"](unload.data);
        }

        _this.runtime.removeAsset(unload, unload.data);

        unload.finish();
      },
      LoadMesh: function (_LoadMesh) {
        function LoadMesh(_x3) {
          return _LoadMesh.apply(this, arguments);
        }

        LoadMesh.toString = function () {
          return _LoadMesh.toString();
        };

        return LoadMesh;
      }(function (load) {
        /**
         * LoadMesh gives us all the vertex data in load.data.buffers.
         * The buffers are only valid during this handler, and the memory will be
         * reused for other meshes later. Therefore we make copies of the arrays
         * for three.js which is something we would have to do anyway.
         */
        var attribs = {
          position: {
            components: 3
          },
          normal: {
            components: 3
          },
          uv: {
            components: 2
          },
          tangent: {
            components: 3
          }
        };
        var totalSize = 0;
        Object.keys(attribs).map(function (name) {
          return load.data.buffers[name];
        }).forEach(function (buffer) {
          if (buffer) {
            totalSize += buffer.data.size;
          }
        });

        if (!_this.canFitInMemory(totalSize)) {
          load.finish(Assets.AssetLoadResult.OutOfMemory);

          _this.adjustQuality(0.8);

          return;
        }

        var geometry = new BufferGeometry();
        var indexArray = load.data.buffers['index'].data.getArray();
        var indices = Array.from(indexArray);
        geometry.setIndex(indices);
        geometry.boundingSphere = makeBoundingSphere(load.data.bounds);
        Object.keys(attribs).forEach(function (name) {
          var buffer = load.data.buffers[name];

          if (buffer) {
            var view = buffer.data;
            var array = view.getArray();
            var attrib = new Float32BufferAttribute(array.slice(), attribs[name].components);

            if ('setAttribute' in geometry) {
              // three.js v112
              geometry['setAttribute'](name, attrib);
            } else {
              // three.js prior to v112
              geometry['addAttribute'](name, attrib);
            }
          }
        });
        var meshDescriptor = {
          geometry: geometry,
          materialDesc: load.data.material
        };
        _this.meshMemoryUsed += totalSize;

        _this.assetSizes.set(meshDescriptor, totalSize);

        load.prepare(_this.runtime.addAsset(meshDescriptor));
        load.finish(Assets.AssetLoadResult.Success);
      }),
      UnloadMesh: function UnloadMesh(unload) {
        var meshDesc = unload.data;

        if (_this.assetSizes.has(unload.data)) {
          _this.meshMemoryUsed -= _this.assetSizes.get(unload.data);

          _this.assetSizes["delete"](unload.data);
        } // Tell Umbra's runtime that this asset doesn't exist anymore and finish the job


        _this.runtime.removeAsset(unload, meshDesc); // Release three.js's resources


        meshDesc.geometry.dispose();
        unload.finish();
      }
    };
    var context; // three.js r106 has no 'getContext'

    if ('getContext' in renderer) {
      context = renderer.getContext();
    } else {
      context = renderer.context;
    }

    var features = umbrajs.getPlatformFeatures(context); // Three.js does not support BC5 compressed formats so we manually disable them.

    features.textureSupportMask &= ~TextureSupportFlags.BC5;
    this.umbrajs = umbrajs;
    this.runtime = umbrajs.createRuntime(features);
    this.renderer = renderer;
    this.features = features;
    this.startEventUpdate(1000 / 60);
  }

  startEventUpdate(interval) {
    var _this2 = this;

    this.stopEventUpdate();
    this.updateTask = window.setInterval(function () {
      _this2.updateEvents();

      _this2.umbraScenes.forEach(function (m) {
        return m.updateNetworkEvents();
      });
    }, interval);
  }

  stopEventUpdate() {
    if (typeof this.updateTask !== 'undefined') {
      window.clearInterval(this.updateTask);
      delete this.updateTask;
    }
  }

  findLights(umbraScene) {
    var parentScene;
    umbraScene.traverseAncestors(function (obj) {
      if (obj['isScene']) {
        parentScene = obj;
      }
    });

    if (!parentScene || parentScene && !parentScene.isScene) {
      return new Set();
    }

    var lights = new Set();
    parentScene.traverseVisible(function (obj) {
      if (obj['isDirectionalLight'] && obj['castShadow']) {
        lights.add(obj);
      }
    });
    return lights;
  }

  pruneOldViews(frame) {
    /**
     * We get no notification when cameras are removed from the scene graph
     * so we'll go and remove views based on their age.
     */
    for (var _ref of this.sharedState.viewLastUseFrame) {
      var _ref2 = _slicedToArray(_ref, 2);

      var view = _ref2[0];
      var lastUsed = _ref2[1];

      if (frame - lastUsed < 600) {
        continue;
      }

      for (var _ref3 of this.sharedState.cameraToView) {
        var _ref4 = _slicedToArray(_ref3, 2);

        var cam = _ref4[0];
        var view2 = _ref4[1];

        if (view2 === view) {
          this.sharedState.cameraToView["delete"](cam);
          break;
        }
      }

      view.destroy();
      this.sharedState.viewLastUseFrame["delete"](view);
    }
  }

  updateViews() {
    var shared = this.sharedState;
    var lights = new Set();

    if (this.renderer.shadowMap.enabled) {
      for (var umbraScene of this.umbraScenes) {
        for (var light of this.findLights(umbraScene)) {
          lights.add(light);
        }
      }
    }

    var dir = this.dirVector;
    var vector3 = this.tempVector;
    var lightDirections = Array.from(lights).map(function (light) {
      dir.setFromMatrixPosition(light.target.matrixWorld);
      vector3.setFromMatrixPosition(light.matrixWorld);
      dir.sub(vector3);
      return [dir.x, dir.y, dir.z];
    }, lights);
    this.pruneOldViews(this.renderer.info.render.frame);

    for (var _ref5 of shared.cameraToView) {
      var _ref6 = _slicedToArray(_ref5, 2);

      var threeCamera = _ref6[0];
      var view = _ref6[1];
      var camera = threeCamera;
      this.matrixWorldInverse.getInverse(camera.matrixWorld);
      this.projScreenMatrix.multiplyMatrices(camera.projectionMatrix, this.matrixWorldInverse); // By default we stream in meshes around the camera, but user can override it.

      if ('umbraStreamingPosition' in camera) {
        this.cameraWorldPosition.copy(camera.umbraStreamingPosition);
      } else {
        camera.getWorldPosition(this.cameraWorldPosition);
      }

      var quality = 0.5;

      if ('umbraQuality' in camera) {
        quality = camera.umbraQuality;
      }

      var pos = this.cameraWorldPosition;
      view.setCamera(this.projScreenMatrix.elements, [pos.x, pos.y, pos.z], quality * this.qualityFactor, lightDirections);
      var list = [];

      if (shared.viewRenderables.has(view)) {
        list = shared.viewRenderables.get(view);
        list.length = 0;
      } else {
        shared.viewRenderables.set(view, list);
      }

      var batchSize = 500;
      var visible = [];

      do {
        var _list;

        visible = view.getVisible(batchSize);

        (_list = list).push.apply(_list, _toConsumableArray(visible));
      } while (visible.length === batchSize);
    }
  }

  update() {
    var timeBudget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
    var downloadLimitReached = this.downloadLimit !== 0 && this.getStats().maxBytesDownloaded >= this.downloadLimit; // If the limit is reached we freeze all updates. Streaming will stop completely.

    if (downloadLimitReached) {
      if (!this.oldState.downloadLimitReached) {
        this.umbrajs.abortDownloads();
      }
    } else {
      var start = performance.now();
      this.runtime.update();
      var updateTook = performance.now() - start;
      this.runtime.loadAssets(this.handlers, timeBudget - updateTook);
      this.updateViews();
    }

    this.oldState.downloadLimitReached = downloadLimitReached;

    if (this.memoryUsed / this.memoryLimit < 0.25) {
      this.adjustQuality(1.1);
    }
  }

  createScene(link) {
    var _this3 = this;

    var url;

    if (typeof link === 'string') {
      url = link;
    } else if (_typeof(link) === 'object') {
      if ('token' in link) {
        console.warn('Connection with {token, projectID, modelID} is deprecated. Use {key, project, model} or a string locator instad.');
        link.key = link['token'];
        link.project = link['projectID'];
        link.model = link['modelID'];
      }

      if (!('key' in link && 'project' in link && 'model' in link)) {
        throw new Error('createScene() expects an object with properties "key", "project", and "model"');
      }

      url = "key=".concat(link.key, "&project=").concat(link.project, "&model=").concat(link.model);
    } else {
      throw new TypeError('expected either string or an object argument');
    }

    var umbraScene = new UmbraScene(this.runtime, this.runtime.createScenePublic(url), this.sharedState, this.renderer, this.features, function (s) {
      return _this3.umbraScenes["delete"](s);
    });
    this.umbraScenes.add(umbraScene);
    return umbraScene;
  }

  createSceneWithURL(url) {
    var _this4 = this;

    var scene = this.runtime.createSceneLocal(url);
    var umbraScene = new UmbraScene(this.runtime, scene, this.sharedState, this.renderer, this.features, function (s) {
      return _this4.umbraScenes["delete"](s);
    });
    this.umbraScenes.add(umbraScene);
    return umbraScene;
  }
  /**
   * Returns streaming information. We can't tell which files came from the browser cache
   * so we report lower and upper limits of the true download size.
   *
   * The returned object has the following fields:
   *
   *  'maxBytesDownloaded' an upper limit assuming no file was cached,
   *  'minBytesDownloaded' the corresponding lower limit assuming all duplicates came from cache.
   *  'textureMemoryUse' the number of bytes used by texture assets
   *  'meshMemoryUse' the number of bytes used by mesh assets
   *
   */


  getStats() {
    return Object.assign(this.umbrajs.getStreamingInfo(), {
      textureMemoryUsed: this.textureMemoryUsed,
      meshMemoryUsed: this.meshMemoryUsed
    });
  }

  canFitInMemory(bytes) {
    return this.memoryUsed + bytes < this.memoryLimit;
  }

  adjustQuality(factor) {
    if (this.renderer.info.render.frame == this.lastQualityLowerFrame) {
      return;
    }

    this.qualityFactor = Math.max(0, Math.min(1, this.qualityFactor * factor));
    this.lastQualityLowerFrame = this.renderer.info.render.frame;
  } // Converts a texture descriptor and a pixel buffer to a three.js compatible texture


  makeTexture(info, buffer, glformat) {
    var pixelData = buffer.getArray().slice();
    var tex;

    if (glformat.compressed) {
      var mip = {
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
    return tex;
  } // AssetLoad handlers that create and remove materials, textures, and meshes


  updateEvents() {
    var progress = this.getStreamingProgress();

    if (this.oldState.progress != progress) {
      if (this.onStreamingUpdate) {
        this.onStreamingUpdate(progress);
      }

      if (progress === 1.0 && this.onStreamingComplete) {
        this.onStreamingComplete();
      }
    }

    this.oldState.progress = progress;
  }

  getStreamingProgress() {
    return this.runtime.getStreamingProgress();
  }

  dispose() {
    this.stopEventUpdate();

    for (var view of this.sharedState.cameraToView.values()) {
      view.destroy();
    }

    this.umbraScenes.forEach(function (m) {
      return m.dispose();
    });
    this.sharedState.cameraToView.clear();
    this.umbraScenes.clear();
    this.runtime.assets.forEach(function (asset, userPtr) {
      if ('geometry' in asset) {
        asset.geometry.dispose();
      }

      if ('dispose' in asset) {
        asset.dispose();
      }
    });
    this.assetSizes.clear();
    this.textureMemoryUsed = 0;
    this.meshMemoryUsed = 0;
    this.runtime.destroy();
    this.runtime = undefined;
    deinitUmbra(this.umbrajs);
  }

}

function initWithThreeJS(renderer, userConfig) {
  if (!renderer) {
    throw new TypeError('"renderer" should be of type THREE.WebGLRenderer');
  }

  return initUmbra(userConfig).then(function (Umbra) {
    return new UmbrajsThreeInternal(Umbra, renderer);
  });
} // Hide the library object constructor by wrapping it in an interface

export { Loader, UmbraScene as Scene, initWithThreeJS };
//# sourceMappingURL=umbrajs-three.esm.js.map
