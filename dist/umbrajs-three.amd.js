define(['exports', 'three'], function (exports, THREE) { 'use strict';

  function _typeof(obj) {
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
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
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

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
   * The purpose of this file is to re-export only the necessary Three.js modules
   * so that WebPack three-shaking has a better chance of working on the final bundle.
   */

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
          m;

      for (m in c) {
        c.hasOwnProperty(m) && (aa[m] = c[m]);
      }

      c.arguments = [];
      c.thisProgram = "./this.program";

      c.quit = function (a, b) {
        throw b;
      };

      c.preRun = [];
      c.postRun = [];
      var r = "";
      document.currentScript && (r = document.currentScript.src);
      _scriptDir && (r = _scriptDir);
      0 !== r.indexOf("blob:") ? r = r.substr(0, r.lastIndexOf("/") + 1) : r = "";
      var ba = c.print || ("undefined" !== typeof console ? console.log.bind(console) : "undefined" !== typeof print ? print : null),
          v = c.printErr || ("undefined" !== typeof printErr ? printErr : "undefined" !== typeof console && console.warn.bind(console) || ba);

      for (m in aa) {
        aa.hasOwnProperty(m) && (c[m] = aa[m]);
      }

      aa = void 0;

      function da(a) {
        var b = w[ea >> 2];
        a = b + a + 15 & -16;
        a > fa() && x();
        w[ea >> 2] = a;
        return b;
      }

      function ha(a) {
        ia || (ia = {});
        ia[a] || (ia[a] = 1, v(a));
      }

      var ia,
          ja = {
        "f64-rem": function f64Rem(a, b) {
          return a % b;
        },
        "debugger": function _debugger() {
          debugger;
        }
      };
      "object" !== (typeof WebAssembly === "undefined" ? "undefined" : _typeof$1(WebAssembly)) && v("no native wasm support detected");
      var z,
          A = !1;

      function B(a, b) {
        a || x("Assertion failed: " + b);
      }

      function ka(a) {
        var b = c["_" + a];
        B(b, "Cannot call unknown function " + a + ", make sure it is exported");
        return b;
      }

      function la(a, b, d, e) {
        var f = {
          string: function string(a) {
            var b = 0;

            if (null !== a && void 0 !== a && 0 !== a) {
              var d = (a.length << 2) + 1;
              b = ma(d);
              na(a, C, b, d);
            }

            return b;
          },
          array: function array(a) {
            var b = ma(a.length);
            D.set(a, b);
            return b;
          }
        },
            g = ka(a),
            k = [];
        a = 0;
        if (e) for (var h = 0; h < e.length; h++) {
          var l = f[d[h]];
          l ? (0 === a && (a = oa()), k[h] = l(e[h])) : k[h] = e[h];
        }
        d = g.apply(null, k);

        d = function (a) {
          return "string" === b ? _E(a) : "boolean" === b ? !!a : a;
        }(d);

        0 !== a && pa(a);
        return d;
      }

      function qa(a) {
        if ("number" === typeof a) {
          var b = !0;
          var d = a;
        } else b = !1, d = a.length;

        var e = F(Math.max(d, 1));

        if (b) {
          a = e;
          B(0 == (e & 3));

          for (b = e + (d & -4); a < b; a += 4) {
            w[a >> 2] = 0;
          }

          for (b = e + d; a < b;) {
            D[a++ >> 0] = 0;
          }

          return e;
        }

        a.subarray || a.slice ? C.set(a, e) : C.set(new Uint8Array(a), e);
        return e;
      }

      var ra = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

      function sa(a, b, d) {
        var e = b + d;

        for (d = b; a[d] && !(d >= e);) {
          ++d;
        }

        if (16 < d - b && a.subarray && ra) return ra.decode(a.subarray(b, d));

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

      function _E(a) {
        return a ? sa(C, a, void 0) : "";
      }

      function na(a, b, d, e) {
        if (0 < e) {
          e = d + e - 1;

          for (var f = 0; f < a.length; ++f) {
            var g = a.charCodeAt(f);

            if (55296 <= g && 57343 >= g) {
              var k = a.charCodeAt(++f);
              g = 65536 + ((g & 1023) << 10) | k & 1023;
            }

            if (127 >= g) {
              if (d >= e) break;
              b[d++] = g;
            } else {
              if (2047 >= g) {
                if (d + 1 >= e) break;
                b[d++] = 192 | g >> 6;
              } else {
                if (65535 >= g) {
                  if (d + 2 >= e) break;
                  b[d++] = 224 | g >> 12;
                } else {
                  if (d + 3 >= e) break;
                  b[d++] = 240 | g >> 18;
                  b[d++] = 128 | g >> 12 & 63;
                }

                b[d++] = 128 | g >> 6 & 63;
              }

              b[d++] = 128 | g & 63;
            }
          }

          b[d] = 0;
        }
      }

      function ta(a) {
        for (var b = 0, d = 0; d < a.length; ++d) {
          var e = a.charCodeAt(d);
          55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | a.charCodeAt(++d) & 1023);
          127 >= e ? ++b : b = 2047 >= e ? b + 2 : 65535 >= e ? b + 3 : b + 4;
        }

        return b;
      }

      "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");

      function ua(a) {
        0 < a % 65536 && (a += 65536 - a % 65536);
        return a;
      }

      var G, D, C, va, wa, w, H, xa, ya;

      function za() {
        c.HEAP8 = D = new Int8Array(G);
        c.HEAP16 = va = new Int16Array(G);
        c.HEAP32 = w = new Int32Array(G);
        c.HEAPU8 = C = new Uint8Array(G);
        c.HEAPU16 = wa = new Uint16Array(G);
        c.HEAPU32 = H = new Uint32Array(G);
        c.HEAPF32 = xa = new Float32Array(G);
        c.HEAPF64 = ya = new Float64Array(G);
      }

      var ea = 17008,
          Aa = c.TOTAL_MEMORY || 134217728;
      5242880 > Aa && v("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + Aa + "! (TOTAL_STACK=5242880)");
      c.wasmMemory ? z = c.wasmMemory : z = new WebAssembly.Memory({
        initial: Aa / 65536
      });
      z && (G = z.buffer);
      Aa = G.byteLength;
      za();
      w[ea >> 2] = 5259920;

      function Ba(a) {
        for (; 0 < a.length;) {
          var b = a.shift();
          if ("function" == typeof b) b();else {
            var d = b.Qb;
            "number" === typeof d ? void 0 === b.Nb ? c.dynCall_v(d) : c.dynCall_vi(d, b.Nb) : d(void 0 === b.Nb ? null : b.Nb);
          }
        }
      }

      var Ca = [],
          Ea = [],
          Fa = [],
          Ga = [],
          Ha = [],
          Ia = !1;

      function Ja() {
        var a = c.preRun.shift();
        Ca.unshift(a);
      }

      var I = 0,
          Ka = null,
          La = null;
      c.preloadedImages = {};
      c.preloadedAudios = {};

      function Ma() {
        var a = J;
        return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
      }

      var J = "umbra.wasm";

      if (!Ma()) {
        var Na = J;
        J = c.locateFile ? c.locateFile(Na, r) : r + Na;
      }

      function Oa() {
        try {
          if (c.wasmBinary) return new Uint8Array(c.wasmBinary);
          throw "both async and sync fetching of the wasm failed";
        } catch (a) {
          x(a);
        }
      }

      function Pa() {
        return c.wasmBinary || "function" !== typeof fetch ? new Promise(function (a) {
          a(Oa());
        }) : fetch(J, {
          credentials: "same-origin"
        }).then(function (a) {
          if (!a.ok) throw "failed to load wasm binary file at '" + J + "'";
          return a.arrayBuffer();
        })["catch"](function () {
          return Oa();
        });
      }

      function Qa(a) {
        function b(a) {
          c.asm = a.exports;
          I--;
          c.monitorRunDependencies && c.monitorRunDependencies(I);
          0 == I && (null !== Ka && (clearInterval(Ka), Ka = null), La && (a = La, La = null, a()));
        }

        function d(a) {
          b(a.instance);
        }

        function e(a) {
          return Pa().then(function (a) {
            return WebAssembly.instantiate(a, f);
          }).then(a, function (a) {
            v("failed to asynchronously prepare wasm: " + a);
            x(a);
          });
        }

        var f = {
          env: a,
          global: {
            NaN: NaN,
            Infinity: Infinity
          },
          "global.Math": Math,
          asm2wasm: ja
        };
        I++;
        c.monitorRunDependencies && c.monitorRunDependencies(I);
        if (c.instantiateWasm) try {
          return c.instantiateWasm(f, b);
        } catch (g) {
          return v("Module.instantiateWasm callback failed with error: " + g), !1;
        }

        (function () {
          if (c.wasmBinary || "function" !== typeof WebAssembly.instantiateStreaming || Ma() || "function" !== typeof fetch) return e(d);
          fetch(J, {
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
        b.memory = z;
        b.table = new WebAssembly.Table({
          initial: 358,
          maximum: 358,
          element: "anyfunc"
        });
        b.__memory_base = 1024;
        b.__table_base = 0;
        return Qa(b);
      };

      var Sa = [function () {
        alert("Invalid http method.");
      }, function (a, b, d, e, f, g, k, h, l, n, u) {
        return Ra(a, b, d, e, f, g, k, h, l, n, u);
      }, function () {
        alert("Uploads are not supported.");
      }];
      Ea.push({
        Qb: function Qb() {
          Ta();
        }
      });
      var K = {};

      function Ua(a) {
        if (Ua.Wb) {
          var b = w[a >> 2];
          var d = w[b >> 2];
        } else Ua.Wb = !0, K.USER = K.LOGNAME = "web_user", K.PATH = "/", K.PWD = "/", K.HOME = "/home/web_user", K.LANG = "C.UTF-8", K.LANG = ("object" === (typeof navigator === "undefined" ? "undefined" : _typeof$1(navigator)) && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", K._ = c.thisProgram, d = Ia ? F(1024) : da(1024), b = Ia ? F(256) : da(256), w[b >> 2] = d, w[a >> 2] = b;

        a = [];
        var e = 0,
            f;

        for (f in K) {
          if ("string" === typeof K[f]) {
            var g = f + "=" + K[f];
            a.push(g);
            e += g.length;
          }
        }

        if (1024 < e) throw Error("Environment size exceeded TOTAL_ENV_SIZE!");

        for (f = 0; f < a.length; f++) {
          e = g = a[f];

          for (var k = d, h = 0; h < e.length; ++h) {
            D[k++ >> 0] = e.charCodeAt(h);
          }

          D[k >> 0] = 0;
          w[b + 4 * f >> 2] = d;
          d += g.length + 1;
        }

        w[b + 4 * a.length >> 2] = 0;
      }

      function Va(a, b) {
        Ga.unshift({
          Qb: a,
          Nb: b
        });
      }

      var Wa = [null, [], []];

      function Xa(a, b) {
        var d = Wa[a];
        0 === b || 10 === b ? ((1 === a ? ba : v)(sa(d, 0)), d.length = 0) : d.push(b);
      }

      var _L = 0;

      function _M() {
        _L += 4;
        return w[_L - 4 >> 2];
      }

      var Ya = {},
          Za = {};

      function $a(a) {
        for (; a.length;) {
          var b = a.pop();
          a.pop()(b);
        }
      }

      function ab(a) {
        return this.fromWireType(H[a >> 2]);
      }

      var N = {},
          O = {},
          bb = {};

      function cb(a) {
        if (void 0 === a) return "_unknown";
        a = a.replace(/[^a-zA-Z0-9_]/g, "$");
        var b = a.charCodeAt(0);
        return 48 <= b && 57 >= b ? "_" + a : a;
      }

      function db(a, b) {
        a = cb(a);
        return new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(b);
      }

      function eb(a) {
        var b = Error,
            d = db(a, function (b) {
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

      var fb = void 0;

      function gb(a, b, d) {
        function e(b) {
          b = d(b);
          if (b.length !== a.length) throw new fb("Mismatched type converter count");

          for (var e = 0; e < a.length; ++e) {
            P(a[e], b[e]);
          }
        }

        a.forEach(function (a) {
          bb[a] = b;
        });
        var f = Array(b.length),
            g = [],
            k = 0;
        b.forEach(function (a, b) {
          O.hasOwnProperty(a) ? f[b] = O[a] : (g.push(a), N.hasOwnProperty(a) || (N[a] = []), N[a].push(function () {
            f[b] = O[a];
            ++k;
            k === g.length && e(f);
          }));
        });
        0 === g.length && e(f);
      }

      function hb(a) {
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

      var ib = void 0;

      function Q(a) {
        for (var b = ""; C[a];) {
          b += ib[C[a++]];
        }

        return b;
      }

      var jb = void 0;

      function R(a) {
        throw new jb(a);
      }

      function P(a, b, d) {
        d = d || {};
        if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
        var e = b.name;
        a || R('type "' + e + '" must have a positive integer typeid pointer');

        if (O.hasOwnProperty(a)) {
          if (d.bc) return;
          R("Cannot register type '" + e + "' twice");
        }

        O[a] = b;
        delete bb[a];
        N.hasOwnProperty(a) && (b = N[a], delete N[a], b.forEach(function (a) {
          a();
        }));
      }

      var kb = [],
          S = [{}, {
        value: void 0
      }, {
        value: null
      }, {
        value: !0
      }, {
        value: !1
      }];

      function lb(a) {
        4 < a && 0 === --S[a].Rb && (S[a] = void 0, kb.push(a));
      }

      function U(a) {
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
            var b = kb.length ? kb.pop() : S.length;
            S[b] = {
              Rb: 1,
              value: a
            };
            return b;
        }
      }

      function mb(a) {
        if (null === a) return "null";

        var b = _typeof$1(a);

        return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
      }

      function nb(a, b) {
        switch (b) {
          case 2:
            return function (a) {
              return this.fromWireType(xa[a >> 2]);
            };

          case 3:
            return function (a) {
              return this.fromWireType(ya[a >> 3]);
            };

          default:
            throw new TypeError("Unknown float type: " + a);
        }
      }

      function ob(a) {
        var b = Function;
        if (!(b instanceof Function)) throw new TypeError("new_ called with constructor type " + _typeof$1(b) + " which is not a function");
        var d = db(b.name || "unknownFunctionName", function () {});
        d.prototype = b.prototype;
        d = new d();
        a = b.apply(d, a);
        return a instanceof Object ? a : d;
      }

      function pb(a, b) {
        var d = c;

        if (void 0 === d[a].Lb) {
          var e = d[a];

          d[a] = function () {
            d[a].Lb.hasOwnProperty(arguments.length) || R("Function '" + b + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + d[a].Lb + ")!");
            return d[a].Lb[arguments.length].apply(this, arguments);
          };

          d[a].Lb = [];
          d[a].Lb[e.Vb] = e;
        }
      }

      function qb(a, b, d) {
        c.hasOwnProperty(a) ? ((void 0 === d || void 0 !== c[a].Lb && void 0 !== c[a].Lb[d]) && R("Cannot register public name '" + a + "' twice"), pb(a, a), c.hasOwnProperty(d) && R("Cannot register multiple overloads of a function with the same number of arguments (" + d + ")!"), c[a].Lb[d] = b) : (c[a] = b, void 0 !== d && (c[a].uc = d));
      }

      function rb(a, b) {
        for (var d = [], e = 0; e < a; e++) {
          d.push(w[(b >> 2) + e]);
        }

        return d;
      }

      function sb(a, b) {
        a = Q(a);
        if (void 0 !== c["FUNCTION_TABLE_" + a]) var d = c["FUNCTION_TABLE_" + a][b];else if ("undefined" !== typeof FUNCTION_TABLE) d = FUNCTION_TABLE[b];else {
          d = c["dynCall_" + a];
          void 0 === d && (d = c["dynCall_" + a.replace(/f/g, "d")], void 0 === d && R("No dynCall invoker for signature: " + a));

          for (var e = [], f = 1; f < a.length; ++f) {
            e.push("a" + f);
          }

          f = "return function " + ("dynCall_" + a + "_" + b) + "(" + e.join(", ") + ") {\n";
          f += "    return dynCall(rawFunction" + (e.length ? ", " : "") + e.join(", ") + ");\n";
          d = new Function("dynCall", "rawFunction", f + "};\n")(d, b);
        }
        "function" !== typeof d && R("unknown function pointer with signature " + a + ": " + b);
        return d;
      }

      var tb = void 0;

      function ub(a) {
        a = vb(a);
        var b = Q(a);
        V(a);
        return b;
      }

      function wb(a, b) {
        function d(a) {
          f[a] || O[a] || (bb[a] ? bb[a].forEach(d) : (e.push(a), f[a] = !0));
        }

        var e = [],
            f = {};
        b.forEach(d);
        throw new tb(a + ": " + e.map(ub).join([", "]));
      }

      function xb(a, b, d) {
        switch (b) {
          case 0:
            return d ? function (a) {
              return D[a];
            } : function (a) {
              return C[a];
            };

          case 1:
            return d ? function (a) {
              return va[a >> 1];
            } : function (a) {
              return wa[a >> 1];
            };

          case 2:
            return d ? function (a) {
              return w[a >> 2];
            } : function (a) {
              return H[a >> 2];
            };

          default:
            throw new TypeError("Unknown integer type: " + a);
        }
      }

      function W(a) {
        a || R("Cannot use deleted val. handle = " + a);
        return S[a].value;
      }

      function yb(a, b) {
        var d = O[a];
        void 0 === d && R(b + " has unknown type " + ub(a));
        return d;
      }

      var zb = {};

      function Ab(a) {
        var b = zb[a];
        return void 0 === b ? Q(a) : b;
      }

      var Bb = [];

      function Cb(a) {
        var b = Bb.length;
        Bb.push(a);
        return b;
      }

      function Db(a, b) {
        for (var d = Array(a), e = 0; e < a; ++e) {
          d[e] = yb(w[(b >> 2) + e], "parameter " + e);
        }

        return d;
      }

      function Eb(a, b) {
        Fb = a;
        Gb = b;
        if (Hb) if (0 == a) X = function X() {
          var a = Math.max(0, Ib + b - Y()) | 0;
          setTimeout(_Jb, a);
        }, Kb = "timeout";else if (1 == a) X = function X() {
          Lb(_Jb);
        }, Kb = "rAF";else if (2 == a) {
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

          X = function X() {
            setImmediate(_Jb);
          };

          Kb = "immediate";
        }
      }

      function Y() {
        x();
      }

      function Mb(a) {
        var b = Nb;
        c.noExitRuntime = !0;
        B(!Hb, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
        Hb = a;
        Nb = b;
        var d = "undefined" !== typeof b ? function () {
          c.dynCall_vi(a, b);
        } : function () {
          c.dynCall_v(a);
        };
        var e = Z;

        _Jb = function Jb() {
          if (!A) if (0 < Ob.length) {
            var a = Date.now(),
                b = Ob.shift();
            b.Qb(b.Nb);

            if (Pb) {
              var k = Pb,
                  h = 0 == k % 1 ? k - 1 : Math.floor(k);
              Pb = b.lc ? h : (8 * k + (h + .5)) / 9;
            }

            console.log('main loop blocker "' + b.name + '" took ' + (Date.now() - a) + " ms");
            c.setStatus && (a = c.statusMessage || "Please wait...", b = Pb, k = Qb.pc, b ? b < k ? c.setStatus(a + " (" + (k - b) + "/" + k + ")") : c.setStatus(a) : c.setStatus(""));
            e < Z || setTimeout(_Jb, 0);
          } else if (!(e < Z)) if (Rb = Rb + 1 | 0, 1 == Fb && 1 < Gb && 0 != Rb % Gb) X();else {
            0 == Fb && (Ib = Y());
            "timeout" === Kb && c.Pb && (v("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), Kb = "");

            a: if (!(A || c.preMainLoop && !1 === c.preMainLoop())) {
              try {
                d();
              } catch (l) {
                if (l instanceof Sb) break a;
                l && "object" === _typeof$1(l) && l.stack && v("exception thrown: " + [l, l.stack]);
                throw l;
              }

              c.postMainLoop && c.postMainLoop();
            }

            e < Z || ("object" === (typeof SDL === "undefined" ? "undefined" : _typeof$1(SDL)) && SDL.audio && SDL.audio.dc && SDL.audio.dc(), X());
          }
        };
      }

      var X = null,
          Kb = "",
          Z = 0,
          Hb = null,
          Nb = 0,
          Fb = 0,
          Gb = 0,
          Rb = 0,
          Ob = [],
          Qb = {},
          Ib,
          _Jb,
          Pb,
          Tb = !1,
          Ub = !1,
          Vb = [];

      function Xb() {
        function a() {
          Ub = document.pointerLockElement === c.canvas || document.mozPointerLockElement === c.canvas || document.webkitPointerLockElement === c.canvas || document.msPointerLockElement === c.canvas;
        }

        c.preloadPlugins || (c.preloadPlugins = []);

        if (!Yb) {
          Yb = !0;

          try {
            Zb = !0;
          } catch (d) {
            Zb = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
          }

          $b = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Zb ? null : console.log("warning: no BlobBuilder");
          ac = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
          c.Ub || "undefined" !== typeof ac || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), c.Ub = !0);
          c.preloadPlugins.push({
            canHandle: function canHandle(a) {
              return !c.Ub && /\.(jpg|jpeg|png|bmp)$/i.test(a);
            },
            handle: function handle(a, b, f, g) {
              var d = null;
              if (Zb) try {
                d = new Blob([a], {
                  type: bc(b)
                }), d.size !== a.length && (d = new Blob([new Uint8Array(a).buffer], {
                  type: bc(b)
                }));
              } catch (n) {
                ha("Blob constructor present but fails: " + n + "; falling back to blob builder");
              }
              d || (d = new $b(), d.append(new Uint8Array(a).buffer), d = d.getBlob());
              var e = ac.createObjectURL(d),
                  l = new Image();

              l.onload = function () {
                B(l.complete, "Image " + b + " could not be decoded");
                var d = document.createElement("canvas");
                d.width = l.width;
                d.height = l.height;
                d.getContext("2d").drawImage(l, 0, 0);
                c.preloadedImages[b] = d;
                ac.revokeObjectURL(e);
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
              return !c.tc && a.substr(-4) in {
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

              if (Zb) {
                try {
                  var n = new Blob([a], {
                    type: bc(b)
                  });
                } catch (q) {
                  return e();
                }

                n = ac.createObjectURL(n);
                var u = new Audio();
                u.addEventListener("canplaythrough", function () {
                  d(u);
                }, !1);

                u.onerror = function () {
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
                    u.src = "data:audio/x-" + b.substr(-3) + ";base64," + e;
                    d(u);
                  }
                };

                u.src = n;
                cc(function () {
                  d(u);
                });
              } else return e();
            }
          });
          var b = c.canvas;
          b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function () {}, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {}, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), c.elementPointerLock && b.addEventListener("click", function (a) {
            !Ub && c.canvas.requestPointerLock && (c.canvas.requestPointerLock(), a.preventDefault());
          }, !1));
        }
      }

      function dc(a, b, d, e) {
        if (b && c.Pb && a == c.canvas) return c.Pb;
        var f;

        if (b) {
          var g = {
            antialias: !1,
            alpha: !1,
            rc: 1
          };
          if (e) for (var k in e) {
            g[k] = e[k];
          }
          if ("undefined" !== typeof GL && (f = GL.mc(a, g))) var h = GL.getContext(f).kc;
        } else h = a.getContext("2d");

        if (!h) return null;
        d && (b || B("undefined" === typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), c.Pb = h, b && GL.sc(f), c.vc = b, Vb.forEach(function (a) {
          a();
        }), Xb());
        return h;
      }

      var ec = !1,
          fc = void 0,
          gc = void 0;

      function hc(a, b, d) {
        function e() {
          Tb = !1;
          var a = f.parentNode;
          (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a ? (f.exitFullscreen = ic, fc && f.requestPointerLock(), Tb = !0, gc ? ("undefined" != typeof SDL && (w[SDL.screen >> 2] = H[SDL.screen >> 2] | 8388608), jc(c.canvas), kc()) : jc(f)) : (a.parentNode.insertBefore(f, a), a.parentNode.removeChild(a), gc ? ("undefined" != typeof SDL && (w[SDL.screen >> 2] = H[SDL.screen >> 2] & -8388609), jc(c.canvas), kc()) : jc(f));
          if (c.onFullScreen) c.onFullScreen(Tb);
          if (c.onFullscreen) c.onFullscreen(Tb);
        }

        fc = a;
        gc = b;
        "undefined" === typeof fc && (fc = !0);
        "undefined" === typeof gc && (gc = !1);
        var f = c.canvas;
        ec || (ec = !0, document.addEventListener("fullscreenchange", e, !1), document.addEventListener("mozfullscreenchange", e, !1), document.addEventListener("webkitfullscreenchange", e, !1), document.addEventListener("MSFullscreenChange", e, !1));
        var g = document.createElement("div");
        f.parentNode.insertBefore(g, f);
        g.appendChild(f);
        g.requestFullscreen = g.requestFullscreen || g.mozRequestFullScreen || g.msRequestFullscreen || (g.webkitRequestFullscreen ? function () {
          g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (g.webkitRequestFullScreen ? function () {
          g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        d ? g.requestFullscreen({
          wc: d
        }) : g.requestFullscreen();
      }

      function mc(a, b, d) {
        v("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");

        mc = function mc(a, b, d) {
          hc(a, b, d);
        };

        hc(a, b, d);
      }

      function ic() {
        if (!Tb) return !1;
        (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {}).apply(document, []);
        return !0;
      }

      var nc = 0;

      function Lb(a) {
        if ("function" === typeof requestAnimationFrame) requestAnimationFrame(a);else {
          var b = Date.now();
          if (0 === nc) nc = b + 1E3 / 60;else for (; b + 2 >= nc;) {
            nc += 1E3 / 60;
          }
          setTimeout(a, Math.max(nc - b, 0));
        }
      }

      function cc(a) {
        c.noExitRuntime = !0;
        setTimeout(function () {
          A || a();
        }, 1E4);
      }

      function bc(a) {
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

      var oc = [];

      function kc() {
        var a = c.canvas;
        oc.forEach(function (b) {
          b(a.width, a.height);
        });
      }

      function jc(a, b, d) {
        b && d ? (a.jc = b, a.ac = d) : (b = a.jc, d = a.ac);
        var e = b,
            f = d;
        c.forcedAspectRatio && 0 < c.forcedAspectRatio && (e / f < c.forcedAspectRatio ? e = Math.round(f * c.forcedAspectRatio) : f = Math.round(e / c.forcedAspectRatio));

        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
          var g = Math.min(screen.width / e, screen.height / f);
          e = Math.round(e * g);
          f = Math.round(f * g);
        }

        gc ? (a.width != e && (a.width = e), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != d && (a.height = d), "undefined" != typeof a.style && (e != b || f != d ? (a.style.setProperty("width", e + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
      }

      var pc = {},
          qc = 0;

      function rc() {
        var a = qc;
        qc++;
        return a;
      }

      var Yb, Zb, $b, ac;

      function fa() {
        return D.length;
      }

      function sc() {
        if ("undefined" !== typeof indexedDB) return indexedDB;
        var a = null;
        "object" === (typeof window === "undefined" ? "undefined" : _typeof$1(window)) && (a = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
        B(a, "IDBStore used, but indexedDB not supported");
        return a;
      }

      var tc = {};

      function uc(a, b) {
        var d = tc[a];
        if (d) b(null, d);else {
          try {
            var e = sc().open(a, 22);
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
            tc[a] = d;
            b(null, d);
          };

          e.onerror = function (a) {
            b(this.error);
            a.preventDefault();
          };
        }
      }

      function vc(a, b, d) {
        uc(a, function (a, f) {
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

      function wc(a, b, d) {
        vc(a, "readonly", function (a, f) {
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

      function xc(a, b, d, e) {
        vc(a, "readwrite", function (a, g) {
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

      function yc(a) {
        if (!c.noExitRuntime && (A = !0, Ba(Ga), c.onExit)) c.onExit(a);
        c.quit(a, new Sb(a));
      }

      c._exit = yc;
      na("GMT", C, 16912, 4);

      function zc() {
        function a(a) {
          return (a = a.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? a[1] : "GMT";
        }

        if (!Ac) {
          Ac = !0;
          w[Bc() >> 2] = 60 * new Date().getTimezoneOffset();
          var b = new Date(2E3, 0, 1),
              d = new Date(2E3, 6, 1);
          w[Cc() >> 2] = Number(b.getTimezoneOffset() != d.getTimezoneOffset());
          var e = a(b),
              f = a(d);
          e = qa(Dc(e));
          f = qa(Dc(f));
          d.getTimezoneOffset() < b.getTimezoneOffset() ? (w[Ec() >> 2] = e, w[Ec() + 4 >> 2] = f) : (w[Ec() >> 2] = f, w[Ec() + 4 >> 2] = e);
        }
      }

      var Ac;

      function Fc(a) {
        a = ua(a);
        var b = G.byteLength;

        try {
          return -1 !== z.grow((a - b) / 65536) ? (G = z.buffer, !0) : !1;
        } catch (d) {
          return !1;
        }
      }

      Ga.push(function () {
        var a = c._fflush;
        a && a(0);
        Wa[1].length && Xa(1, 10);
        Wa[2].length && Xa(2, 10);
      });
      fb = c.InternalError = eb("InternalError");

      for (var Gc = Array(256), Hc = 0; 256 > Hc; ++Hc) {
        Gc[Hc] = String.fromCharCode(Hc);
      }

      ib = Gc;
      jb = c.BindingError = eb("BindingError");

      c.count_emval_handles = function () {
        for (var a = 0, b = 5; b < S.length; ++b) {
          void 0 !== S[b] && ++a;
        }

        return a;
      };

      c.get_first_emval = function () {
        for (var a = 5; a < S.length; ++a) {
          if (void 0 !== S[a]) return S[a];
        }

        return null;
      };

      tb = c.UnboundTypeError = eb("UnboundTypeError");

      c.requestFullScreen = function (a, b, d) {
        v("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");
        c.requestFullScreen = c.requestFullscreen;
        mc(a, b, d);
      };

      c.requestFullscreen = function (a, b, d) {
        hc(a, b, d);
      };

      c.requestAnimationFrame = function (a) {
        Lb(a);
      };

      c.setCanvasSize = function (a, b, d) {
        jc(c.canvas, a, b);
        d || kc();
      };

      c.pauseMainLoop = function () {
        X = null;
        Z++;
      };

      c.resumeMainLoop = function () {
        Z++;
        var a = Fb,
            b = Gb,
            d = Hb;
        Hb = null;
        Mb(d);
        Eb(a, b);
        X();
      };

      c.getUserMedia = function () {
        window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
        window.getUserMedia(void 0);
      };

      c.createContext = function (a, b, d, e) {
        return dc(a, b, d, e);
      };

      "undefined" !== typeof dateNow ? Y = dateNow : "object" === (typeof performance === "undefined" ? "undefined" : _typeof$1(performance)) && performance && "function" === typeof performance.now ? Y = function Y() {
        return performance.now();
      } : Y = Date.now;

      function Dc(a) {
        var b = Array(ta(a) + 1);
        na(a, b, 0, b.length);
        return b;
      }

      var Kc = c.asm({}, {
        j: x,
        y: function y() {},
        fa: function fa() {
          v("missing function: _ZN5Umbra13MiniSceneCopy7connectERK20UmbraSceneCopySource");
          x(-1);
        },
        ba: function ba() {
          v("missing function: _ZN5Umbra13MiniSceneCopy9getStatusEPf");
          x(-1);
        },
        C: function C() {
          v("missing function: _ZN5Umbra13MiniSceneCopyC1ERNS_11MiniRuntimeERK25UmbraSceneCopyDestinationPK20UmbraEnvironmentInfoRKN5Eigen6MatrixIfLi3ELi1ELi0ELi3ELi1EEEfi");
          x(-1);
        },
        Z: Ua,
        U: function U() {
          return Va.apply(null, arguments);
        },
        v: function v() {},
        x: function x(a) {
          c.___errno_location && (w[c.___errno_location() >> 2] = a);
          return a;
        },
        M: function M(a, b) {
          _L = b;

          try {
            return Ya.Tb(), _M(), _M(), _M(), _M(), 0;
          } catch (d) {
            return x(d), -d.Ob;
          }
        },
        L: function L(a, b) {
          _L = b;

          try {
            var d = Ya.Tb(),
                e = _M(),
                f = _M();

            return Ya.nc(d, e, f);
          } catch (g) {
            return x(g), -g.Ob;
          }
        },
        K: function K(a, b) {
          _L = b;

          try {
            var d = _M(),
                e = _M(),
                f = _M();

            for (b = a = 0; b < f; b++) {
              for (var g = w[e + 8 * b >> 2], k = w[e + (8 * b + 4) >> 2], h = 0; h < k; h++) {
                Xa(d, C[g + h]);
              }

              a += k;
            }

            return a;
          } catch (l) {
            return x(l), -l.Ob;
          }
        },
        ea: function ea(a, b) {
          _L = b;

          try {
            var d = _E(_M()),
                e = _M();

            return Ya.oc((void 0).stat, d, e);
          } catch (f) {
            return x(f), -f.Ob;
          }
        },
        J: function J(a, b) {
          _L = b;
          return 0;
        },
        da: function da(a, b) {
          _L = b;

          try {
            var d = _E(_M()),
                e = _M(),
                f = _M();

            return (void 0).open(d, e, f).qc;
          } catch (g) {
            return x(g), -g.Ob;
          }
        },
        I: function I(a, b) {
          _L = b;
          return 0;
        },
        H: function H(a, b) {
          _L = b;

          try {
            return Ya.Tb(), 0;
          } catch (d) {
            return x(d), -d.Ob;
          }
        },
        w: function w() {},
        G: function G(a) {
          var b = Za[a];
          delete Za[a];
          var d = b.ec,
              e = b.fc,
              f = b.Sb,
              g = f.map(function (a) {
            return a.$b;
          }).concat(f.map(function (a) {
            return a.hc;
          }));
          gb([a], g, function (a) {
            var g = {};
            f.forEach(function (b, d) {
              var e = a[d],
                  h = b.Yb,
                  k = b.Zb,
                  l = a[d + f.length],
                  n = b.gc,
                  Da = b.ic;
              g[b.Xb] = {
                read: function read(a) {
                  return e.fromWireType(h(k, a));
                },
                write: function write(a, b) {
                  var d = [];
                  n(Da, a, l.toWireType(d, b));
                  $a(d);
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
              readValueFromPointer: ab,
              Mb: e
            }];
          });
        },
        ca: function ca(a, b, d, e, f) {
          var g = hb(d);
          b = Q(b);
          P(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              return !!a;
            },
            toWireType: function toWireType(a, b) {
              return b ? e : f;
            },
            argPackAdvance: 8,
            readValueFromPointer: function readValueFromPointer(a) {
              if (1 === d) var e = D;else if (2 === d) e = va;else if (4 === d) e = w;else throw new TypeError("Unknown boolean type size: " + b);
              return this.fromWireType(e[a >> g]);
            },
            Mb: null
          });
        },
        p: function p(a, b, d) {
          a = Q(a);
          gb([], [b], function (b) {
            b = b[0];
            c[a] = b.fromWireType(d);
            return [];
          });
        },
        aa: function aa(a, b) {
          b = Q(b);
          P(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              var b = S[a].value;
              lb(a);
              return b;
            },
            toWireType: function toWireType(a, b) {
              return U(b);
            },
            argPackAdvance: 8,
            readValueFromPointer: ab,
            Mb: null
          });
        },
        F: function F(a, b, d) {
          d = hb(d);
          b = Q(b);
          P(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              return a;
            },
            toWireType: function toWireType(a, b) {
              if ("number" !== typeof b && "boolean" !== typeof b) throw new TypeError('Cannot convert "' + mb(b) + '" to ' + this.name);
              return b;
            },
            argPackAdvance: 8,
            readValueFromPointer: nb(b, d),
            Mb: null
          });
        },
        k: function k(a, b, d, e, f, g) {
          var k = rb(b, d);
          a = Q(a);
          f = sb(e, f);
          qb(a, function () {
            wb("Cannot call " + a + " due to unbound types", k);
          }, b - 1);
          gb([], k, function (d) {
            var e = a,
                h = a;
            d = [d[0], null].concat(d.slice(1));
            var k = f,
                q = d.length;
            2 > q && R("argTypes array size mismatch! Must at least get return value and 'this' types!");

            for (var t = null !== d[1] && !1, y = !1, p = 1; p < d.length; ++p) {
              if (null !== d[p] && void 0 === d[p].Mb) {
                y = !0;
                break;
              }
            }

            var Da = "void" !== d[0].name,
                T = "",
                ca = "";

            for (p = 0; p < q - 2; ++p) {
              T += (0 !== p ? ", " : "") + "arg" + p, ca += (0 !== p ? ", " : "") + "arg" + p + "Wired";
            }

            h = "return function " + cb(h) + "(" + T + ") {\nif (arguments.length !== " + (q - 2) + ") {\nthrowBindingError('function " + h + " called with ' + arguments.length + ' arguments, expected " + (q - 2) + " args!');\n}\n";
            y && (h += "var destructors = [];\n");
            var Wb = y ? "destructors" : "null";
            T = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
            k = [R, k, g, $a, d[0], d[1]];
            t && (h += "var thisWired = classParam.toWireType(" + Wb + ", this);\n");

            for (p = 0; p < q - 2; ++p) {
              h += "var arg" + p + "Wired = argType" + p + ".toWireType(" + Wb + ", arg" + p + "); // " + d[p + 2].name + "\n", T.push("argType" + p), k.push(d[p + 2]);
            }

            t && (ca = "thisWired" + (0 < ca.length ? ", " : "") + ca);
            h += (Da ? "var rv = " : "") + "invoker(fn" + (0 < ca.length ? ", " : "") + ca + ");\n";
            if (y) h += "runDestructors(destructors);\n";else for (p = t ? 1 : 2; p < d.length; ++p) {
              q = 1 === p ? "thisWired" : "arg" + (p - 2) + "Wired", null !== d[p].Mb && (h += q + "_dtor(" + q + "); // " + d[p].name + "\n", T.push(q + "_dtor"), k.push(d[p].Mb));
            }
            Da && (h += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
            T.push(h + "}\n");
            d = ob(T).apply(null, k);
            p = b - 1;
            if (!c.hasOwnProperty(e)) throw new fb("Replacing nonexistant public symbol");
            void 0 !== c[e].Lb && void 0 !== p ? c[e].Lb[p] = d : (c[e] = d, c[e].Vb = p);
            return [];
          });
        },
        s: function s(a, b, d, e, f) {
          function g(a) {
            return a;
          }

          b = Q(b);
          -1 === f && (f = 4294967295);
          var k = hb(d);

          if (0 === e) {
            var h = 32 - 8 * d;

            g = function g(a) {
              return a << h >>> h;
            };
          }

          var l = -1 != b.indexOf("unsigned");
          P(a, {
            name: b,
            fromWireType: g,
            toWireType: function toWireType(a, d) {
              if ("number" !== typeof d && "boolean" !== typeof d) throw new TypeError('Cannot convert "' + mb(d) + '" to ' + this.name);
              if (d < e || d > f) throw new TypeError('Passing a number "' + mb(d) + '" from JS side to C/C++ side to an argument of type "' + b + '", which is outside the valid range [' + e + ", " + f + "]!");
              return l ? d >>> 0 : d | 0;
            },
            argPackAdvance: 8,
            readValueFromPointer: xb(b, k, 0 !== e),
            Mb: null
          });
        },
        o: function o(a, b, d) {
          function e(a) {
            a >>= 2;
            var b = H;
            return new f(b.buffer, b[a + 1], b[a]);
          }

          var f = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
          d = Q(d);
          P(a, {
            name: d,
            fromWireType: e,
            argPackAdvance: 8,
            readValueFromPointer: e
          }, {
            bc: !0
          });
        },
        E: function E(a, b) {
          b = Q(b);
          var d = "std::string" === b;
          P(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              var b = H[a >> 2];

              if (d) {
                var e = C[a + 4 + b],
                    k = 0;
                0 != e && (k = e, C[a + 4 + b] = 0);
                var h = a + 4;

                for (e = 0; e <= b; ++e) {
                  var l = a + 4 + e;

                  if (0 == C[l]) {
                    h = _E(h);
                    if (void 0 === n) var n = h;else n += String.fromCharCode(0), n += h;
                    h = l + 1;
                  }
                }

                0 != k && (C[a + 4 + b] = k);
              } else {
                n = Array(b);

                for (e = 0; e < b; ++e) {
                  n[e] = String.fromCharCode(C[a + 4 + e]);
                }

                n = n.join("");
              }

              V(a);
              return n;
            },
            toWireType: function toWireType(a, b) {
              b instanceof ArrayBuffer && (b = new Uint8Array(b));
              var e = "string" === typeof b;
              e || b instanceof Uint8Array || b instanceof Uint8ClampedArray || b instanceof Int8Array || R("Cannot pass non-string to std::string");
              var f = (d && e ? function () {
                return ta(b);
              } : function () {
                return b.length;
              })(),
                  h = F(4 + f + 1);
              H[h >> 2] = f;
              if (d && e) na(b, C, h + 4, f + 1);else if (e) for (e = 0; e < f; ++e) {
                var l = b.charCodeAt(e);
                255 < l && (V(h), R("String has UTF-16 code units that do not fit in 8 bits"));
                C[h + 4 + e] = l;
              } else for (e = 0; e < f; ++e) {
                C[h + 4 + e] = b[e];
              }
              null !== a && a.push(V, h);
              return h;
            },
            argPackAdvance: 8,
            readValueFromPointer: ab,
            Mb: function Mb(a) {
              V(a);
            }
          });
        },
        $: function $(a, b, d) {
          d = Q(d);

          if (2 === b) {
            var e = function e() {
              return wa;
            };

            var f = 1;
          } else 4 === b && (e = function e() {
            return H;
          }, f = 2);

          P(a, {
            name: d,
            fromWireType: function fromWireType(a) {
              for (var b = e(), d = H[a >> 2], g = Array(d), n = a + 4 >> f, u = 0; u < d; ++u) {
                g[u] = String.fromCharCode(b[n + u]);
              }

              V(a);
              return g.join("");
            },
            toWireType: function toWireType(a, d) {
              var g = e(),
                  k = d.length,
                  n = F(4 + k * b);
              H[n >> 2] = k;

              for (var u = n + 4 >> f, q = 0; q < k; ++q) {
                g[u + q] = d.charCodeAt(q);
              }

              null !== a && a.push(V, n);
              return n;
            },
            argPackAdvance: 8,
            readValueFromPointer: ab,
            Mb: function Mb(a) {
              V(a);
            }
          });
        },
        D: function D(a, b, d, e, f, g) {
          Za[a] = {
            name: Q(b),
            ec: sb(d, e),
            fc: sb(f, g),
            Sb: []
          };
        },
        t: function t(a, b, d, e, f, g, k, h, l, n) {
          Za[a].Sb.push({
            Xb: Q(b),
            $b: d,
            Yb: sb(e, f),
            Zb: g,
            hc: k,
            gc: sb(h, l),
            ic: n
          });
        },
        _: function _(a, b) {
          b = Q(b);
          P(a, {
            cc: !0,
            name: b,
            argPackAdvance: 0,
            fromWireType: function fromWireType() {},
            toWireType: function toWireType() {}
          });
        },
        i: function i(a, b, d) {
          a = W(a);
          b = yb(b, "emval::as");
          var e = [],
              f = U(e);
          w[d >> 2] = f;
          return b.toWireType(e, a);
        },
        m: function m(a, b, d, e) {
          a = Bb[a];
          b = W(b);
          d = Ab(d);
          a(b, d, null, e);
        },
        c: lb,
        l: function l(a, b) {
          b = Db(a, b);

          for (var d = b[0], e = d.name + "_$" + b.slice(1).map(function (a) {
            return a.name;
          }).join("_") + "$", f = ["retType"], g = [d], k = "", h = 0; h < a - 1; ++h) {
            k += (0 !== h ? ", " : "") + "arg" + h, f.push("argType" + h), g.push(b[1 + h]);
          }

          e = "return function " + cb("methodCaller_" + e) + "(handle, name, destructors, args) {\n";
          var l = 0;

          for (h = 0; h < a - 1; ++h) {
            e += "    var arg" + h + " = argType" + h + ".readValueFromPointer(args" + (l ? "+" + l : "") + ");\n", l += b[h + 1].argPackAdvance;
          }

          e += "    var rv = handle[name](" + k + ");\n";

          for (h = 0; h < a - 1; ++h) {
            b[h + 1].deleteObject && (e += "    argType" + h + ".deleteObject(arg" + h + ");\n");
          }

          d.cc || (e += "    return retType.toWireType(destructors, rv);\n");
          f.push(e + "};\n");
          a = ob(f).apply(null, g);
          return Cb(a);
        },
        g: function g(a, b) {
          a = W(a);
          b = W(b);
          return U(a[b]);
        },
        u: function u(a) {
          4 < a && (S[a].Rb += 1);
        },
        r: function r() {
          return U([]);
        },
        e: function e(a) {
          return U(Ab(a));
        },
        q: function q() {
          return U({});
        },
        h: function h(a) {
          $a(S[a].value);
          lb(a);
        },
        f: function f(a, b, d) {
          a = W(a);
          b = W(b);
          d = W(d);
          a[b] = d;
        },
        d: function d(a, b) {
          a = yb(a, "_emval_take_value");
          a = a.readValueFromPointer(b);
          return U(a);
        },
        Y: function Y() {
          c.abort();
        },
        B: function B(a) {
          return Sa[a]();
        },
        X: function X(a, b, d, e, f, g, k, h, l, n, u, q) {
          return Sa[a](b, d, e, f, g, k, h, l, n, u, q);
        },
        A: function A(a) {
          (a = pc[a]) && a.abort();
        },
        W: fa,
        n: Y,
        z: function z(a, b, d, e, f) {
          wc(_E(a), _E(b), function (a, b) {
            a ? f && Ic(f, d) : (a = F(b.length), C.set(b, a), Jc(e, d, a, b.length), V(a));
          });
        },
        V: function V(a, b, d, e, f, g, k) {
          xc(_E(a), _E(b), new Uint8Array(C.subarray(d, d + e)), function (a) {
            a ? k && Ic(k, f) : g && Ic(g, f);
          });
        },
        T: function T(a, b, d) {
          C.set(C.subarray(b, b + d), a);
        },
        S: function S(a) {
          if (2147418112 < a) return !1;

          for (var b = Math.max(fa(), 16777216); b < a;) {
            536870912 >= b ? b = ua(2 * b) : b = Math.min(ua((3 * b + 2147483648) / 4), 2147418112);
          }

          if (!Fc(b)) return !1;
          za();
          return !0;
        },
        R: yc,
        Q: function Q() {
          x("trap!");
        },
        P: function P(a) {
          zc();
          a = new Date(1E3 * w[a >> 2]);
          w[4216] = a.getSeconds();
          w[4217] = a.getMinutes();
          w[4218] = a.getHours();
          w[4219] = a.getDate();
          w[4220] = a.getMonth();
          w[4221] = a.getFullYear() - 1900;
          w[4222] = a.getDay();
          var b = new Date(a.getFullYear(), 0, 1);
          w[4223] = (a.getTime() - b.getTime()) / 864E5 | 0;
          w[4225] = -(60 * a.getTimezoneOffset());
          var d = new Date(2E3, 6, 1).getTimezoneOffset();
          b = b.getTimezoneOffset();
          a = (d != b && a.getTimezoneOffset() == Math.min(b, d)) | 0;
          w[4224] = a;
          a = w[Ec() + (a ? 4 : 0) >> 2];
          w[4226] = a;
          return 16864;
        },
        O: function O(a) {
          var b = Date.now() / 1E3 | 0;
          a && (w[a >> 2] = b);
          return b;
        },
        N: function N() {
          x("OOM");
        },
        a: ea,
        b: 16848
      }, G);
      c.asm = Kc;

      c._UmbraAssetLoadAbortRequested = function () {
        return c.asm.ga.apply(null, arguments);
      };

      c._UmbraAssetLoadFinish = function () {
        return c.asm.ha.apply(null, arguments);
      };

      c._UmbraAssetLoadGetType = function () {
        return c.asm.ia.apply(null, arguments);
      };

      c._UmbraAssetLoadPrepare = function () {
        return c.asm.ja.apply(null, arguments);
      };

      c._UmbraAssetUnloadFinish = function () {
        return c.asm.ka.apply(null, arguments);
      };

      c._UmbraAssetUnloadGetType = function () {
        return c.asm.la.apply(null, arguments);
      };

      c._UmbraAssetUnloadGetUserPointer = function () {
        return c.asm.ma.apply(null, arguments);
      };

      c._UmbraClientCreate = function () {
        return c.asm.na.apply(null, arguments);
      };

      c._UmbraClientDestroy = function () {
        return c.asm.oa.apply(null, arguments);
      };

      c._UmbraConfigInit = function () {
        return c.asm.pa.apply(null, arguments);
      };

      c._UmbraEcefToGeodetic = function () {
        return c.asm.qa.apply(null, arguments);
      };

      c._UmbraEnvironmentInfoDefaults = function () {
        return c.asm.ra.apply(null, arguments);
      };

      c._UmbraGeodeticToEcef = function () {
        return c.asm.sa.apply(null, arguments);
      };

      c._UmbraGetLibraryInfo = function () {
        return c.asm.ta.apply(null, arguments);
      };

      c._UmbraMaterialLoadGetInfo = function () {
        return c.asm.ua.apply(null, arguments);
      };

      c._UmbraMeshLoadGetData = function () {
        return c.asm.va.apply(null, arguments);
      };

      c._UmbraMeshLoadGetInfo = function () {
        return c.asm.wa.apply(null, arguments);
      };

      c._UmbraMeshStreamDone = function () {
        return c.asm.xa.apply(null, arguments);
      };

      c._UmbraMeshStreamNext = function () {
        return c.asm.ya.apply(null, arguments);
      };

      c._UmbraMeshStreamSetBuffers = function () {
        return c.asm.za.apply(null, arguments);
      };

      c._UmbraRuntimeCreate = function () {
        return c.asm.Aa.apply(null, arguments);
      };

      c._UmbraRuntimeDestroy = function () {
        return c.asm.Ba.apply(null, arguments);
      };

      c._UmbraRuntimeGetStreamingState = function () {
        return c.asm.Ca.apply(null, arguments);
      };

      c._UmbraRuntimeNextAssetLoad = function () {
        return c.asm.Da.apply(null, arguments);
      };

      c._UmbraRuntimeNextAssetUnload = function () {
        return c.asm.Ea.apply(null, arguments);
      };

      c._UmbraRuntimeUpdate = function () {
        return c.asm.Fa.apply(null, arguments);
      };

      c._UmbraSceneCopyCreate = function () {
        return c.asm.Ga.apply(null, arguments);
      };

      c._UmbraSceneCopyDestroy = function () {
        return c.asm.Ha.apply(null, arguments);
      };

      c._UmbraSceneCopyGetError = function () {
        return c.asm.Ia.apply(null, arguments);
      };

      c._UmbraSceneCopyGetStatus = function () {
        return c.asm.Ja.apply(null, arguments);
      };

      c._UmbraSceneCreate = function () {
        return c.asm.Ka.apply(null, arguments);
      };

      c._UmbraSceneCreateLocal = function () {
        return c.asm.La.apply(null, arguments);
      };

      c._UmbraSceneCreatePublic = function () {
        return c.asm.Ma.apply(null, arguments);
      };

      c._UmbraSceneDestroy = function () {
        return c.asm.Na.apply(null, arguments);
      };

      c._UmbraSceneGetConnectionStatus = function () {
        return c.asm.Oa.apply(null, arguments);
      };

      c._UmbraSceneGetInfo = function () {
        return c.asm.Pa.apply(null, arguments);
      };

      c._UmbraSceneSetTransform = function () {
        return c.asm.Qa.apply(null, arguments);
      };

      c._UmbraSetAllocator = function () {
        return c.asm.Ra.apply(null, arguments);
      };

      c._UmbraSetHttp = function () {
        return c.asm.Sa.apply(null, arguments);
      };

      c._UmbraSetLogger = function () {
        return c.asm.Ta.apply(null, arguments);
      };

      c._UmbraTextureGetMipmapLevelByteSize = function () {
        return c.asm.Ua.apply(null, arguments);
      };

      c._UmbraTextureGetMipmapLevelOffset = function () {
        return c.asm.Va.apply(null, arguments);
      };

      c._UmbraTextureLoadGetData = function () {
        return c.asm.Wa.apply(null, arguments);
      };

      c._UmbraTextureLoadGetInfo = function () {
        return c.asm.Xa.apply(null, arguments);
      };

      c._UmbraTextureMetaDataGetClassification = function () {
        return c.asm.Ya.apply(null, arguments);
      };

      c._UmbraTextureMetaDataGetClassificationAmount = function () {
        return c.asm.Za.apply(null, arguments);
      };

      c._UmbraTextureMetaDataGetClassificationCount = function () {
        return c.asm._a.apply(null, arguments);
      };

      c._UmbraTextureMetaDataLoadGetData = function () {
        return c.asm.$a.apply(null, arguments);
      };

      c._UmbraVertexAttributeGetElementByteSize = function () {
        return c.asm.ab.apply(null, arguments);
      };

      c._UmbraViewCreate = function () {
        return c.asm.bb.apply(null, arguments);
      };

      c._UmbraViewDestroy = function () {
        return c.asm.cb.apply(null, arguments);
      };

      c._UmbraViewGetCompleted = function () {
        return c.asm.db.apply(null, arguments);
      };

      c._UmbraViewNextRenderables = function () {
        return c.asm.eb.apply(null, arguments);
      };

      c._UmbraViewResetRenderables = function () {
        return c.asm.fb.apply(null, arguments);
      };

      c._UmbraViewUpdateFilter = function () {
        return c.asm.gb.apply(null, arguments);
      };

      c._UmbraViewUpdateRendering = function () {
        return c.asm.hb.apply(null, arguments);
      };

      c.___embind_register_native_and_builtin_types = function () {
        return c.asm.ib.apply(null, arguments);
      };

      var vb = c.___getTypeName = function () {
        return c.asm.jb.apply(null, arguments);
      },
          Cc = c.__get_daylight = function () {
        return c.asm.kb.apply(null, arguments);
      },
          Bc = c.__get_timezone = function () {
        return c.asm.lb.apply(null, arguments);
      },
          Ec = c.__get_tzname = function () {
        return c.asm.mb.apply(null, arguments);
      },
          V = c._free = function () {
        return c.asm.nb.apply(null, arguments);
      },
          F = c._malloc = function () {
        return c.asm.ob.apply(null, arguments);
      },
          Ta = c.globalCtors = function () {
        return c.asm.Hb.apply(null, arguments);
      },
          ma = c.stackAlloc = function () {
        return c.asm.Ib.apply(null, arguments);
      },
          pa = c.stackRestore = function () {
        return c.asm.Jb.apply(null, arguments);
      },
          oa = c.stackSave = function () {
        return c.asm.Kb.apply(null, arguments);
      };

      c.dynCall_i = function () {
        return c.asm.pb.apply(null, arguments);
      };

      c.dynCall_ii = function () {
        return c.asm.qb.apply(null, arguments);
      };

      c.dynCall_iii = function () {
        return c.asm.rb.apply(null, arguments);
      };

      c.dynCall_iiii = function () {
        return c.asm.sb.apply(null, arguments);
      };

      c.dynCall_iiiii = function () {
        return c.asm.tb.apply(null, arguments);
      };

      c.dynCall_iiiiii = function () {
        return c.asm.ub.apply(null, arguments);
      };

      c.dynCall_iiiiiii = function () {
        return c.asm.vb.apply(null, arguments);
      };

      c.dynCall_iiiiiiiiii = function () {
        return c.asm.wb.apply(null, arguments);
      };

      c.dynCall_iiiji = function () {
        return c.asm.xb.apply(null, arguments);
      };

      c.dynCall_jiji = function () {
        return c.asm.yb.apply(null, arguments);
      };

      c.dynCall_v = function () {
        return c.asm.zb.apply(null, arguments);
      };

      var Ic = c.dynCall_vi = function () {
        return c.asm.Ab.apply(null, arguments);
      };

      c.dynCall_vii = function () {
        return c.asm.Bb.apply(null, arguments);
      };

      var Jc = c.dynCall_viii = function () {
        return c.asm.Cb.apply(null, arguments);
      };

      c.dynCall_viiii = function () {
        return c.asm.Db.apply(null, arguments);
      };

      c.dynCall_viiiii = function () {
        return c.asm.Eb.apply(null, arguments);
      };

      c.dynCall_viiiiii = function () {
        return c.asm.Fb.apply(null, arguments);
      };

      c.dynCall_viiiiiiiii = function () {
        return c.asm.Gb.apply(null, arguments);
      };

      c.asm = Kc;

      c.cwrap = function (a, b, d, e) {
        d = d || [];
        var f = d.every(function (a) {
          return "number" === a;
        });
        return "string" !== b && f && !e ? ka(a) : function () {
          return la(a, b, d, arguments);
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

      function Sb(a) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" + a + ")";
        this.status = a;
      }

      Sb.prototype = Error();
      Sb.prototype.constructor = Sb;

      La = function Lc() {
        c.calledRun || Mc();
        c.calledRun || (La = Lc);
      };

      function Mc() {
        function a() {
          if (!c.calledRun && (c.calledRun = !0, !A)) {
            Ia = !0;
            Ba(Ea);
            Ba(Fa);
            if (c.onRuntimeInitialized) c.onRuntimeInitialized();
            if (c.postRun) for ("function" == typeof c.postRun && (c.postRun = [c.postRun]); c.postRun.length;) {
              var a = c.postRun.shift();
              Ha.unshift(a);
            }
            Ba(Ha);
          }
        }

        if (!(0 < I)) {
          if (c.preRun) for ("function" == typeof c.preRun && (c.preRun = [c.preRun]); c.preRun.length;) {
            Ja();
          }
          Ba(Ca);
          0 < I || c.calledRun || (c.setStatus ? (c.setStatus("Running..."), setTimeout(function () {
            setTimeout(function () {
              c.setStatus("");
            }, 1);
            a();
          }, 1)) : a());
        }
      }

      c.run = Mc;

      function x(a) {
        if (c.onAbort) c.onAbort(a);
        ba(a);
        v(a);
        A = !0;
        throw "abort(" + a + "). Build with -s ASSERTIONS=1 for more info.";
      }

      c.abort = x;
      if (c.preInit) for ("function" == typeof c.preInit && (c.preInit = [c.preInit]); 0 < c.preInit.length;) {
        c.preInit.pop()();
      }
      Mc();
      c.maxBytesDownloaded = 0;
      c.minBytesDownloaded = 0;
      c.URLsDownloaded = new Set([]);
      c.wgetRequests = pc;

      function Ra(a, b, d, e, f, g, k, h, l, n, u) {
        var q = _E(a);

        b = _E(b);
        g = _E(g);
        var t = new XMLHttpRequest();
        t.open(b, q, !0);
        if ("GET" != b || 0 != g.length) t.withCredentials = !0;
        t.responseType = "arraybuffer";
        var y = rc();

        t.onload = function () {
          if (200 == t.status) {
            var b = new Uint8Array(t.response),
                g = c.URLsDownloaded;
            c.maxBytesDownloaded += t.response.byteLength;
            g.has(a) || (g.add(a), c.minBytesDownloaded += t.response.byteLength);
            n ? b.length != u ? c.dynCall_viii(f, y, d, 0) : (C.set(b, n), c.dynCall_viiii(e, y, d, null, 0)) : (g = F(b.length), C.set(b, g), c.dynCall_viiii(e, y, d, g, b.length), V(g));
          } else c.dynCall_viii(f, y, d, t.status);

          delete pc[y];
        };

        t.onerror = function () {
          c.dynCall_viii(f, y, d, t.status);
          delete pc[y];
        };

        t.onabort = function () {
          delete pc[y];
        };

        0 != g.length && t.setRequestHeader("Authorization", "Basic " + btoa(g + ":"));
        l = _E(l).split("\n");
        if (2 <= l.length) for (q = 0; q < l.length; q += 2) {
          t.setRequestHeader(l[q], l[q + 1]);
        }
        "POST" == b ? t.send(D.slice(k, k + h)) : t.send(null);
        pc[y] = t;
        return y;
      }
      return UmbraNativeAPI;
    };
  }();

  // Generated at 2020-01-24 17:26:12
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
    TextureSupportFlags[TextureSupportFlags["All"] = 4294967295] = "All";
  })(TextureSupportFlags || (TextureSupportFlags = {}));

  var RuntimeFlags;

  (function (RuntimeFlags) {
    RuntimeFlags[RuntimeFlags["NeverUnload"] = 1] = "NeverUnload";
    RuntimeFlags[RuntimeFlags["ExclusiveRendering"] = 2] = "ExclusiveRendering";
    RuntimeFlags[RuntimeFlags["UmbraDebug"] = -2147483648] = "UmbraDebug";
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

  var BufferFlags;

  (function (BufferFlags) {
    BufferFlags[BufferFlags["UncachedMemory"] = 1] = "UncachedMemory";
  })(BufferFlags || (BufferFlags = {}));

  var VertexAttribute;

  (function (VertexAttribute) {
    VertexAttribute[VertexAttribute["Position"] = 0] = "Position";
    VertexAttribute[VertexAttribute["TextureCoordinate"] = 1] = "TextureCoordinate";
    VertexAttribute[VertexAttribute["Normal"] = 2] = "Normal";
    VertexAttribute[VertexAttribute["Tangent"] = 3] = "Tangent";
    VertexAttribute[VertexAttribute["Count"] = 4] = "Count";
  })(VertexAttribute || (VertexAttribute = {}));

  var AssetLoadResult;

  (function (AssetLoadResult) {
    AssetLoadResult[AssetLoadResult["Failure"] = 0] = "Failure";
    AssetLoadResult[AssetLoadResult["OutOfMemory"] = 1] = "OutOfMemory";
    AssetLoadResult[AssetLoadResult["Aborted"] = 2] = "Aborted";
    AssetLoadResult[AssetLoadResult["Success"] = 3] = "Success";
    AssetLoadResult[AssetLoadResult["Count"] = 4] = "Count";
  })(AssetLoadResult || (AssetLoadResult = {}));



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
        this.data = void 0;
        this.ptr = ptr;
        this.assetType = Module.assetUnloadGetType(this.ptr);
        this.type = 'Unload' + AssetType[this.assetType];
      }

      finish() {
        Module.assetUnloadFinish(this.ptr);
      }

      get userPointer() {
        return Module.assetUnloadGetUserPointer(this.ptr);
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

  // Generated at 2020-01-24 17:26:12
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
      meshLoadGetInfo: Module.cwrap('UmbraMeshLoadGetInfo', null, ['number', 'number']),
      meshLoadGetData: Module.cwrap('UmbraMeshLoadGetData', 'number', ['number', 'number', 'number']),
      meshStreamSetBuffers: Module.cwrap('UmbraMeshStreamSetBuffers', 'number', ['number', 'number', 'number']),
      meshStreamDone: Module.cwrap('UmbraMeshStreamDone', 'number', ['number']),
      meshStreamNext: Module.cwrap('UmbraMeshStreamNext', 'number', ['number', 'number', 'number']),
      textureGetMipmapLevelByteSize: Module.cwrap('UmbraTextureGetMipmapLevelByteSize', 'number', ['number', 'number']),
      textureGetMipmapLevelOffset: Module.cwrap('UmbraTextureGetMipmapLevelOffset', 'number', ['number', 'number']),
      textureLoadGetInfo: Module.cwrap('UmbraTextureLoadGetInfo', null, ['number', 'number']),
      textureLoadGetData: Module.cwrap('UmbraTextureLoadGetData', 'number', ['number', 'number']),
      textureMetaDataLoadGetData: Module.cwrap('UmbraTextureMetaDataLoadGetData', 'number', ['number', 'number']),
      textureMetaDataGetClassificationCount: Module.cwrap('UmbraTextureMetaDataGetClassificationCount', 'number', ['number', 'number']),
      textureMetaDataGetClassification: Module.cwrap('UmbraTextureMetaDataGetClassification', 'number', ['number', 'number', 'number']),
      textureMetaDataGetClassificationAmount: Module.cwrap('UmbraTextureMetaDataGetClassificationAmount', 'number', ['number', 'number', 'number']),
      materialLoadGetInfo: Module.cwrap('UmbraMaterialLoadGetInfo', null, ['number', 'number']),
      runtimeNextAssetUnload: Module.cwrap('UmbraRuntimeNextAssetUnload', 'number', ['number']),
      assetUnloadGetType: Module.cwrap('UmbraAssetUnloadGetType', 'number', ['number']),
      assetUnloadGetUserPointer: Module.cwrap('UmbraAssetUnloadGetUserPointer', 'number', ['number']),
      assetUnloadFinish: Module.cwrap('UmbraAssetUnloadFinish', null, ['number'])
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


  var ThreeFormats = (_ThreeFormats = {}, _defineProperty(_ThreeFormats, TextureFormat.RGB24, makeFormat(THREE.RGBFormat, THREE.UnsignedByteType, false)), _defineProperty(_ThreeFormats, TextureFormat.RGBA32, makeFormat(THREE.RGBAFormat, THREE.UnsignedByteType, false)), _defineProperty(_ThreeFormats, TextureFormat.RGB565, makeFormat(THREE.RGBFormat, THREE.UnsignedShort565Type, false)), _defineProperty(_ThreeFormats, TextureFormat.RG8, makeFormat(THREE.LuminanceAlphaFormat, THREE.UnsignedByteType, false)), _defineProperty(_ThreeFormats, TextureFormat.RG16F, makeFormat(THREE.LuminanceAlphaFormat, THREE.HalfFloatType, false)), _defineProperty(_ThreeFormats, TextureFormat.BC1, makeFormat(THREE.RGBA_S3TC_DXT1_Format, THREE.UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.BC3, makeFormat(THREE.RGBA_S3TC_DXT5_Format, THREE.UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.ETC1_RGB, makeFormat(THREE.RGB_ETC1_Format, THREE.UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.ASTC_4X4, makeFormat(THREE.RGBA_ASTC_4x4_Format, THREE.UnsignedByteType, true)), _defineProperty(_ThreeFormats, TextureFormat.PVRTC1_RGB4, makeFormat(THREE.RGB_PVRTC_4BPPV1_Format, THREE.UnsignedByteType, true)), _ThreeFormats);

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

  class UmbraScene extends THREE.Object3D {
    // User editable config
    // Event callbacks
    // We need to present ourselves as a LOD object to get the update() call
    set quality(value) {
      console.error("Setting UmbraScene.quality is not supported any more. Set camera.umbraQuality = ".concat(value, " instead."));
    }

    constructor(runtime, scene, sharedState, _renderer, features) {
      var _this;

      var onDispose = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
      super();
      _this = this;
      this.material = new THREE.MeshBasicMaterial();
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
        visibleIDs: new Set() // UmbraScene should be instantiated using Umbra.createScene()

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
        var proxy = new THREE.Object3D();
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
            material.normalMapType = THREE.TangentSpaceNormalMap;
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


          var mesh = new THREE.Mesh(geometry, material);
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
      var box = new THREE.Box3(new THREE.Vector3(min[0], min[1], min[2]), new THREE.Vector3(max[0], max[1], max[2]));
      return box;
    }

    getCenter() {
      var bounds = this.getBounds();
      bounds.applyMatrix4(this.matrixWorld);
      var center = new THREE.Vector3();
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

  class Loader extends THREE.Loader {
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
    var size = new THREE.Vector3(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
    var pos = new THREE.Vector3(min[0] + size.x * 0.5, min[1] + size.y * 0.5, min[2] + size.z * 0.5);
    return new THREE.Sphere(pos, size.length());
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
        viewLastUseFrame: new Map() // Temporary values we don't want to reallocate every frame

      };
      this.tempVector = new THREE.Vector3();
      this.dirVector = new THREE.Vector3();
      this.matrixWorldInverse = new THREE.Matrix4();
      this.projScreenMatrix = new THREE.Matrix4();
      this.cameraWorldPosition = new THREE.Vector3();
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

            _this.runtime.addAsset({
              isTexture: false
            });

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
            gammaOutput = _this.renderer['outputEncoding'] === THREE.sRGBEncoding;
          } else if ('gammaOutput' in _this.renderer) {
            // three.js prior to version 112
            gammaOutput = _this.renderer['gammaOutput'];
          }

          if (info.type === TextureType.Diffuse && !gammaOutput) {
            tex.encoding = THREE.LinearEncoding;
          } else {
            tex.encoding = info.colorSpace === ColorSpace.Linear ? THREE.LinearEncoding : THREE.sRGBEncoding;
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

          var geometry = new THREE.BufferGeometry();
          var indexArray = load.data.buffers['index'].data.getArray();
          var indices = Array.from(indexArray);
          geometry.setIndex(indices);
          geometry.boundingSphere = makeBoundingSphere(load.data.bounds);
          Object.keys(attribs).forEach(function (name) {
            var buffer = load.data.buffers[name];

            if (buffer) {
              var view = buffer.data;
              var array = view.getArray();
              var attrib = new THREE.Float32BufferAttribute(array.slice(), attribs[name].components);

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
      var downloadLimitReached = this.downloadLimit !== 0 && this.getStats().maxBytesDownloaded >= this.downloadLimit; // If the limit is reached we freeze all updates. View frustum culling
      // will still work, but the streaming set is kept static.

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
        tex = new THREE.CompressedTexture([mip], info.width, info.height);
      } else {
        tex = new THREE.DataTexture(pixelData, info.width, info.height);
      }

      tex.format = glformat.format;
      tex.type = glformat.type;
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
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

  exports.Loader = Loader;
  exports.Scene = UmbraScene;
  exports.initWithThreeJS = initWithThreeJS;

  Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=umbrajs-three.amd.js.map
