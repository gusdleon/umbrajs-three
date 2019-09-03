(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
  typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
  (global = global || self, factory(global.UmbraRuntime = {}, global.THREE));
}(this, function (exports, THREE) { 'use strict';

  /**
   * The purpose of this file is to re-export only the necessary Three.js modules
   * so that WebPack three-shaking has a better chance of working on the final bundle.
   */

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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var UmbraNativeAPI = function () {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

    return function (UmbraNativeAPI) {
      UmbraNativeAPI = UmbraNativeAPI || {};
      var e;
      e || (e = typeof UmbraNativeAPI !== 'undefined' ? UmbraNativeAPI : {});
      var aa = {},
          m;

      for (m in e) {
        e.hasOwnProperty(m) && (aa[m] = e[m]);
      }

      e.arguments = [];
      e.thisProgram = "./this.program";

      e.quit = function (a, b) {
        throw b;
      };

      e.preRun = [];
      e.postRun = [];
      var q = "";
      document.currentScript && (q = document.currentScript.src);
      _scriptDir && (q = _scriptDir);
      0 !== q.indexOf("blob:") ? q = q.substr(0, q.lastIndexOf("/") + 1) : q = "";
      var ba = e.print || ("undefined" !== typeof console ? console.log.bind(console) : "undefined" !== typeof print ? print : null),
          v = e.printErr || ("undefined" !== typeof printErr ? printErr : "undefined" !== typeof console && console.warn.bind(console) || ba);

      for (m in aa) {
        aa.hasOwnProperty(m) && (e[m] = aa[m]);
      }

      aa = void 0;

      function ca(a) {
        var b = x[da >> 2];
        a = b + a + 15 & -16;
        a > fa() && _y();
        x[da >> 2] = a;
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
      "object" !== (typeof WebAssembly === "undefined" ? "undefined" : _typeof(WebAssembly)) && v("no native wasm support detected");
      var z,
          A = !1;

      function ka(a, b) {
        a || _y("Assertion failed: " + b);
      }

      function la(a) {
        if ("number" === typeof a) {
          var b = !0;
          var c = a;
        } else b = !1, c = a.length;

        var d = B(Math.max(c, 1));

        if (b) {
          a = d;
          ka(0 == (d & 3));

          for (b = d + (c & -4); a < b; a += 4) {
            x[a >> 2] = 0;
          }

          for (b = d + c; a < b;) {
            C[a++ >> 0] = 0;
          }

          return d;
        }

        a.subarray || a.slice ? D.set(a, d) : D.set(new Uint8Array(a), d);
        return d;
      }

      var ma = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;

      function na(a, b, c) {
        var d = b + c;

        for (c = b; a[c] && !(c >= d);) {
          ++c;
        }

        if (16 < c - b && a.subarray && ma) return ma.decode(a.subarray(b, c));

        for (d = ""; b < c;) {
          var f = a[b++];

          if (f & 128) {
            var g = a[b++] & 63;
            if (192 == (f & 224)) d += String.fromCharCode((f & 31) << 6 | g);else {
              var k = a[b++] & 63;
              f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | k : (f & 7) << 18 | g << 12 | k << 6 | a[b++] & 63;
              65536 > f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023));
            }
          } else d += String.fromCharCode(f);
        }

        return d;
      }

      function E(a) {
        return a ? na(D, a, void 0) : "";
      }

      function oa(a, b, c, d) {
        if (0 < d) {
          d = c + d - 1;

          for (var f = 0; f < a.length; ++f) {
            var g = a.charCodeAt(f);

            if (55296 <= g && 57343 >= g) {
              var k = a.charCodeAt(++f);
              g = 65536 + ((g & 1023) << 10) | k & 1023;
            }

            if (127 >= g) {
              if (c >= d) break;
              b[c++] = g;
            } else {
              if (2047 >= g) {
                if (c + 1 >= d) break;
                b[c++] = 192 | g >> 6;
              } else {
                if (65535 >= g) {
                  if (c + 2 >= d) break;
                  b[c++] = 224 | g >> 12;
                } else {
                  if (c + 3 >= d) break;
                  b[c++] = 240 | g >> 18;
                  b[c++] = 128 | g >> 12 & 63;
                }

                b[c++] = 128 | g >> 6 & 63;
              }

              b[c++] = 128 | g & 63;
            }
          }

          b[c] = 0;
        }
      }

      function pa(a) {
        for (var b = 0, c = 0; c < a.length; ++c) {
          var d = a.charCodeAt(c);
          55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
          127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4;
        }

        return b;
      }

      "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");

      function qa(a) {
        0 < a % 65536 && (a += 65536 - a % 65536);
        return a;
      }

      var F, C, D, ra, sa, x, G, ta, ua;

      function va() {
        e.HEAP8 = C = new Int8Array(F);
        e.HEAP16 = ra = new Int16Array(F);
        e.HEAP32 = x = new Int32Array(F);
        e.HEAPU8 = D = new Uint8Array(F);
        e.HEAPU16 = sa = new Uint16Array(F);
        e.HEAPU32 = G = new Uint32Array(F);
        e.HEAPF32 = ta = new Float32Array(F);
        e.HEAPF64 = ua = new Float64Array(F);
      }

      var da = 18576,
          wa = e.TOTAL_MEMORY || 134217728;
      5242880 > wa && v("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + wa + "! (TOTAL_STACK=5242880)");
      e.wasmMemory ? z = e.wasmMemory : z = new WebAssembly.Memory({
        initial: wa / 65536
      });
      z && (F = z.buffer);
      wa = F.byteLength;
      va();
      x[da >> 2] = 5261488;

      function xa(a) {
        for (; 0 < a.length;) {
          var b = a.shift();
          if ("function" == typeof b) b();else {
            var c = b.eb;
            "number" === typeof c ? void 0 === b.Wa ? e.dynCall_v(c) : e.dynCall_vi(c, b.Wa) : c(void 0 === b.Wa ? null : b.Wa);
          }
        }
      }

      var ya = [],
          za = [],
          Aa = [],
          Ba = [],
          Ca = [],
          Da = !1;

      function Ea() {
        var a = e.preRun.shift();
        ya.unshift(a);
      }

      var H = 0,
          Fa = null,
          Ga = null;
      e.preloadedImages = {};
      e.preloadedAudios = {};

      function Ha() {
        var a = I;
        return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
      }

      var I = "umbra.wasm";

      if (!Ha()) {
        var Ia = I;
        I = e.locateFile ? e.locateFile(Ia, q) : q + Ia;
      }

      function Ja() {
        try {
          if (e.wasmBinary) return new Uint8Array(e.wasmBinary);
          throw "both async and sync fetching of the wasm failed";
        } catch (a) {
          _y(a);
        }
      }

      function Ka() {
        return e.wasmBinary || "function" !== typeof fetch ? new Promise(function (a) {
          a(Ja());
        }) : fetch(I, {
          credentials: "same-origin"
        }).then(function (a) {
          if (!a.ok) throw "failed to load wasm binary file at '" + I + "'";
          return a.arrayBuffer();
        })["catch"](function () {
          return Ja();
        });
      }

      function La(a) {
        function b(a) {
          e.asm = a.exports;
          H--;
          e.monitorRunDependencies && e.monitorRunDependencies(H);
          0 == H && (null !== Fa && (clearInterval(Fa), Fa = null), Ga && (a = Ga, Ga = null, a()));
        }

        function c(a) {
          b(a.instance);
        }

        function d(a) {
          return Ka().then(function (a) {
            return WebAssembly.instantiate(a, f);
          }).then(a, function (a) {
            v("failed to asynchronously prepare wasm: " + a);

            _y(a);
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
        H++;
        e.monitorRunDependencies && e.monitorRunDependencies(H);
        if (e.instantiateWasm) try {
          return e.instantiateWasm(f, b);
        } catch (g) {
          return v("Module.instantiateWasm callback failed with error: " + g), !1;
        }

        (function () {
          if (e.wasmBinary || "function" !== typeof WebAssembly.instantiateStreaming || Ha() || "function" !== typeof fetch) return d(c);
          fetch(I, {
            credentials: "same-origin"
          }).then(function (a) {
            return WebAssembly.instantiateStreaming(a, f).then(c, function (a) {
              v("wasm streaming compile failed: " + a);
              v("falling back to ArrayBuffer instantiation");
              d(c);
            });
          });
        })();

        return {};
      }

      e.asm = function (a, b) {
        b.memory = z;
        b.table = new WebAssembly.Table({
          initial: 543,
          maximum: 543,
          element: "anyfunc"
        });
        b.__memory_base = 1024;
        b.__table_base = 0;
        return La(b);
      };

      var Na = [function () {
        alert("Invalid http method.");
      }, function (a, b, c, d, f, g, k, h, l, n, p) {
        return Ma(a, b, c, d, f, g, k, h, l, n, p);
      }, function () {
        alert("Uploads are not supported.");
      }];
      za.push({
        eb: function eb() {
          Oa();
        }
      });
      var J = {};

      function Pa(a) {
        if (Pa.pb) {
          var b = x[a >> 2];
          var c = x[b >> 2];
        } else Pa.pb = !0, J.USER = J.LOGNAME = "web_user", J.PATH = "/", J.PWD = "/", J.HOME = "/home/web_user", J.LANG = "C.UTF-8", J.LANG = ("object" === (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", J._ = e.thisProgram, c = Da ? B(1024) : ca(1024), b = Da ? B(256) : ca(256), x[b >> 2] = c, x[a >> 2] = b;

        a = [];
        var d = 0,
            f;

        for (f in J) {
          if ("string" === typeof J[f]) {
            var g = f + "=" + J[f];
            a.push(g);
            d += g.length;
          }
        }

        if (1024 < d) throw Error("Environment size exceeded TOTAL_ENV_SIZE!");

        for (f = 0; f < a.length; f++) {
          d = g = a[f];

          for (var k = c, h = 0; h < d.length; ++h) {
            C[k++ >> 0] = d.charCodeAt(h);
          }

          C[k >> 0] = 0;
          x[b + 4 * f >> 2] = c;
          c += g.length + 1;
        }

        x[b + 4 * a.length >> 2] = 0;
      }

      function Qa(a, b) {
        Ba.unshift({
          eb: a,
          Wa: b
        });
      }

      var Sa = [null, [], []];

      function Ta(a, b) {
        var c = Sa[a];
        0 === b || 10 === b ? ((1 === a ? ba : v)(na(c, 0)), c.length = 0) : c.push(b);
      }

      var _K = 0;

      function L() {
        _K += 4;
        return x[_K - 4 >> 2];
      }

      var Ua = {},
          Va = {};

      function Wa(a) {
        for (; a.length;) {
          var b = a.pop();
          a.pop()(b);
        }
      }

      function Xa(a) {
        return this.fromWireType(G[a >> 2]);
      }

      var M = {},
          N = {},
          Ya = {};

      function Za(a) {
        if (void 0 === a) return "_unknown";
        a = a.replace(/[^a-zA-Z0-9_]/g, "$");
        var b = a.charCodeAt(0);
        return 48 <= b && 57 >= b ? "_" + a : a;
      }

      function $a(a, b) {
        a = Za(a);
        return new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(b);
      }

      function ab(a) {
        var b = Error,
            c = $a(a, function (b) {
          this.name = a;
          this.message = b;
          b = Error(b).stack;
          void 0 !== b && (this.stack = this.toString() + "\n" + b.replace(/^Error(:[^\n]*)?\n/, ""));
        });
        c.prototype = Object.create(b.prototype);
        c.prototype.constructor = c;

        c.prototype.toString = function () {
          return void 0 === this.message ? this.name : this.name + ": " + this.message;
        };

        return c;
      }

      var bb = void 0;

      function cb(a) {
        throw new bb(a);
      }

      function db(a, b, c) {
        function d(b) {
          b = c(b);
          b.length !== a.length && cb("Mismatched type converter count");

          for (var d = 0; d < a.length; ++d) {
            O(a[d], b[d]);
          }
        }

        a.forEach(function (a) {
          Ya[a] = b;
        });
        var f = Array(b.length),
            g = [],
            k = 0;
        b.forEach(function (a, b) {
          N.hasOwnProperty(a) ? f[b] = N[a] : (g.push(a), M.hasOwnProperty(a) || (M[a] = []), M[a].push(function () {
            f[b] = N[a];
            ++k;
            k === g.length && d(f);
          }));
        });
        0 === g.length && d(f);
      }

      function eb(a) {
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

      var fb = void 0;

      function P(a) {
        for (var b = ""; D[a];) {
          b += fb[D[a++]];
        }

        return b;
      }

      var gb = void 0;

      function Q(a) {
        throw new gb(a);
      }

      function O(a, b, c) {
        c = c || {};
        if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
        var d = b.name;
        a || Q('type "' + d + '" must have a positive integer typeid pointer');

        if (N.hasOwnProperty(a)) {
          if (c.zb) return;
          Q("Cannot register type '" + d + "' twice");
        }

        N[a] = b;
        delete Ya[a];
        M.hasOwnProperty(a) && (b = M[a], delete M[a], b.forEach(function (a) {
          a();
        }));
      }

      function hb(a) {
        return {
          count: a.count,
          Va: a.Va,
          Za: a.Za,
          Ma: a.Ma,
          Oa: a.Oa,
          Pa: a.Pa,
          Ra: a.Ra
        };
      }

      function ib(a) {
        Q(a.La.Oa.Na.name + " instance already deleted");
      }

      var jb = !1;

      function kb() {}

      function lb(a) {
        --a.count.value;
        0 === a.count.value && (a.Pa ? a.Ra.Ua(a.Pa) : a.Oa.Na.Ua(a.Ma));
      }

      function mb(a) {
        if ("undefined" === typeof FinalizationGroup) return mb = function mb(a) {
          return a;
        }, a;
        jb = new FinalizationGroup(function (a) {
          for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value, b.Ma ? lb(b) : console.warn("object already deleted: " + b.Ma);
          }
        });

        mb = function mb(a) {
          jb.register(a, a.La, a.La);
          return a;
        };

        kb = function kb(a) {
          jb.unregister(a.La);
        };

        return mb(a);
      }

      var nb = void 0,
          ob = [];

      function pb() {
        for (; ob.length;) {
          var a = ob.pop();
          a.La.Va = !1;
          a["delete"]();
        }
      }

      function R() {}

      var qb = {};

      function rb(a, b) {
        var c = e;

        if (void 0 === c[a].Ta) {
          var d = c[a];

          c[a] = function () {
            c[a].Ta.hasOwnProperty(arguments.length) || Q("Function '" + b + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + c[a].Ta + ")!");
            return c[a].Ta[arguments.length].apply(this, arguments);
          };

          c[a].Ta = [];
          c[a].Ta[d.ob] = d;
        }
      }

      function sb(a, b, c) {
        e.hasOwnProperty(a) ? ((void 0 === c || void 0 !== e[a].Ta && void 0 !== e[a].Ta[c]) && Q("Cannot register public name '" + a + "' twice"), rb(a, a), e.hasOwnProperty(c) && Q("Cannot register multiple overloads of a function with the same number of arguments (" + c + ")!"), e[a].Ta[c] = b) : (e[a] = b, void 0 !== c && (e[a].Tb = c));
      }

      function tb(a, b, c, d, f, g, k, h) {
        this.name = a;
        this.constructor = b;
        this.Ya = c;
        this.Ua = d;
        this.Sa = f;
        this.tb = g;
        this.$a = k;
        this.rb = h;
      }

      function ub(a, b, c) {
        for (; b !== c;) {
          b.$a || Q("Expected null or instance of " + c.name + ", got an instance of " + b.name), a = b.$a(a), b = b.Sa;
        }

        return a;
      }

      function vb(a, b) {
        if (null === b) return this.fb && Q("null is not a valid " + this.name), 0;
        b.La || Q('Cannot pass "' + S(b) + '" as a ' + this.name);
        b.La.Ma || Q("Cannot pass deleted object as a pointer of type " + this.name);
        return ub(b.La.Ma, b.La.Oa.Na, this.Na);
      }

      function wb(a, b) {
        if (null === b) {
          this.fb && Q("null is not a valid " + this.name);

          if (this.bb) {
            var c = this.gb();
            null !== a && a.push(this.Ua, c);
            return c;
          }

          return 0;
        }

        b.La || Q('Cannot pass "' + S(b) + '" as a ' + this.name);
        b.La.Ma || Q("Cannot pass deleted object as a pointer of type " + this.name);
        !this.ab && b.La.Oa.ab && Q("Cannot convert argument of type " + (b.La.Ra ? b.La.Ra.name : b.La.Oa.name) + " to parameter type " + this.name);
        c = ub(b.La.Ma, b.La.Oa.Na, this.Na);
        if (this.bb) switch (void 0 === b.La.Pa && Q("Passing raw pointer to smart pointer is illegal"), this.Hb) {
          case 0:
            b.La.Ra === this ? c = b.La.Pa : Q("Cannot convert argument of type " + (b.La.Ra ? b.La.Ra.name : b.La.Oa.name) + " to parameter type " + this.name);
            break;

          case 1:
            c = b.La.Pa;
            break;

          case 2:
            if (b.La.Ra === this) c = b.La.Pa;else {
              var d = b.clone();
              c = this.Db(c, T(function () {
                d["delete"]();
              }));
              null !== a && a.push(this.Ua, c);
            }
            break;

          default:
            Q("Unsupporting sharing policy");
        }
        return c;
      }

      function xb(a, b) {
        if (null === b) return this.fb && Q("null is not a valid " + this.name), 0;
        b.La || Q('Cannot pass "' + S(b) + '" as a ' + this.name);
        b.La.Ma || Q("Cannot pass deleted object as a pointer of type " + this.name);
        b.La.Oa.ab && Q("Cannot convert argument of type " + b.La.Oa.name + " to parameter type " + this.name);
        return ub(b.La.Ma, b.La.Oa.Na, this.Na);
      }

      function yb(a, b, c) {
        if (b === c) return a;
        if (void 0 === c.Sa) return null;
        a = yb(a, b, c.Sa);
        return null === a ? null : c.rb(a);
      }

      var zb = {};

      function Ab(a, b) {
        for (void 0 === b && Q("ptr should not be undefined"); a.Sa;) {
          b = a.$a(b), a = a.Sa;
        }

        return zb[b];
      }

      function Bb(a, b) {
        b.Oa && b.Ma || cb("makeClassHandle requires ptr and ptrType");
        !!b.Ra !== !!b.Pa && cb("Both smartPtrType and smartPtr must be specified");
        b.count = {
          value: 1
        };
        return mb(Object.create(a, {
          La: {
            value: b
          }
        }));
      }

      function U(a, b, c, d) {
        this.name = a;
        this.Na = b;
        this.fb = c;
        this.ab = d;
        this.bb = !1;
        this.Ua = this.Db = this.gb = this.nb = this.Hb = this.Bb = void 0;
        void 0 !== b.Sa ? this.toWireType = wb : (this.toWireType = d ? vb : xb, this.Qa = null);
      }

      function Cb(a, b, c) {
        e.hasOwnProperty(a) || cb("Replacing nonexistant public symbol");
        void 0 !== e[a].Ta && void 0 !== c ? e[a].Ta[c] = b : (e[a] = b, e[a].ob = c);
      }

      function W(a, b) {
        a = P(a);
        if (void 0 !== e["FUNCTION_TABLE_" + a]) var c = e["FUNCTION_TABLE_" + a][b];else if ("undefined" !== typeof FUNCTION_TABLE) c = FUNCTION_TABLE[b];else {
          c = e["dynCall_" + a];
          void 0 === c && (c = e["dynCall_" + a.replace(/f/g, "d")], void 0 === c && Q("No dynCall invoker for signature: " + a));

          for (var d = [], f = 1; f < a.length; ++f) {
            d.push("a" + f);
          }

          f = "return function " + ("dynCall_" + a + "_" + b) + "(" + d.join(", ") + ") {\n";
          f += "    return dynCall(rawFunction" + (d.length ? ", " : "") + d.join(", ") + ");\n";
          c = new Function("dynCall", "rawFunction", f + "};\n")(c, b);
        }
        "function" !== typeof c && Q("unknown function pointer with signature " + a + ": " + b);
        return c;
      }

      var Db = void 0;

      function Eb(a) {
        a = Fb(a);
        var b = P(a);
        X(a);
        return b;
      }

      function Gb(a, b) {
        function c(a) {
          f[a] || N[a] || (Ya[a] ? Ya[a].forEach(c) : (d.push(a), f[a] = !0));
        }

        var d = [],
            f = {};
        b.forEach(c);
        throw new Db(a + ": " + d.map(Eb).join([", "]));
      }

      var Hb = [],
          Y = [{}, {
        value: void 0
      }, {
        value: null
      }, {
        value: !0
      }, {
        value: !1
      }];

      function Ib(a) {
        4 < a && 0 === --Y[a].hb && (Y[a] = void 0, Hb.push(a));
      }

      function T(a) {
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
            var b = Hb.length ? Hb.pop() : Y.length;
            Y[b] = {
              hb: 1,
              value: a
            };
            return b;
        }
      }

      function Jb(a, b, c) {
        switch (b) {
          case 0:
            return function (a) {
              return this.fromWireType((c ? C : D)[a]);
            };

          case 1:
            return function (a) {
              return this.fromWireType((c ? ra : sa)[a >> 1]);
            };

          case 2:
            return function (a) {
              return this.fromWireType((c ? x : G)[a >> 2]);
            };

          default:
            throw new TypeError("Unknown integer type: " + a);
        }
      }

      function Kb(a, b) {
        var c = N[a];
        void 0 === c && Q(b + " has unknown type " + Eb(a));
        return c;
      }

      function S(a) {
        if (null === a) return "null";

        var b = _typeof(a);

        return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
      }

      function Lb(a, b) {
        switch (b) {
          case 2:
            return function (a) {
              return this.fromWireType(ta[a >> 2]);
            };

          case 3:
            return function (a) {
              return this.fromWireType(ua[a >> 3]);
            };

          default:
            throw new TypeError("Unknown float type: " + a);
        }
      }

      function Mb(a) {
        var b = Function;
        if (!(b instanceof Function)) throw new TypeError("new_ called with constructor type " + _typeof(b) + " which is not a function");
        var c = $a(b.name || "unknownFunctionName", function () {});
        c.prototype = b.prototype;
        c = new c();
        a = b.apply(c, a);
        return a instanceof Object ? a : c;
      }

      function Nb(a, b) {
        for (var c = [], d = 0; d < a; d++) {
          c.push(x[(b >> 2) + d]);
        }

        return c;
      }

      function Ob(a, b, c) {
        switch (b) {
          case 0:
            return c ? function (a) {
              return C[a];
            } : function (a) {
              return D[a];
            };

          case 1:
            return c ? function (a) {
              return ra[a >> 1];
            } : function (a) {
              return sa[a >> 1];
            };

          case 2:
            return c ? function (a) {
              return x[a >> 2];
            } : function (a) {
              return G[a >> 2];
            };

          default:
            throw new TypeError("Unknown integer type: " + a);
        }
      }

      var Pb = {};

      function Qb(a) {
        var b = Pb[a];
        return void 0 === b ? P(a) : b;
      }

      var Rb = [];

      function Sb(a) {
        a || Q("Cannot use deleted val. handle = " + a);
        return Y[a].value;
      }

      function Tb(a) {
        var b = Rb.length;
        Rb.push(a);
        return b;
      }

      function Ub(a, b) {
        for (var c = Array(a), d = 0; d < a; ++d) {
          c[d] = Kb(x[(b >> 2) + d], "parameter " + d);
        }

        return c;
      }

      function Vb(a, b) {
        Wb = a;
        Xb = b;
        if (Yb) if (0 == a) Z = function Z() {
          var a = Math.max(0, Zb + b - $b()) | 0;
          setTimeout(_ac, a);
        }, bc = "timeout";else if (1 == a) Z = function Z() {
          cc(_ac);
        }, bc = "rAF";else if (2 == a) {
          if ("undefined" === typeof setImmediate) {
            var c = [];
            addEventListener("message", function (a) {
              if ("setimmediate" === a.data || "setimmediate" === a.data.target) a.stopPropagation(), c.shift()();
            }, !0);

            setImmediate = function setImmediate(a) {
              c.push(a);
              postMessage("setimmediate", "*");
            };
          }

          Z = function Z() {
            setImmediate(_ac);
          };

          bc = "immediate";
        }
      }

      function $b() {
        _y();
      }

      function dc(a) {
        var b = ec;
        e.noExitRuntime = !0;
        ka(!Yb, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
        Yb = a;
        ec = b;
        var c = "undefined" !== typeof b ? function () {
          e.dynCall_vi(a, b);
        } : function () {
          e.dynCall_v(a);
        };
        var d = fc;

        _ac = function ac() {
          if (!A) if (0 < gc.length) {
            var a = Date.now(),
                b = gc.shift();
            b.eb(b.Wa);

            if (hc) {
              var k = hc,
                  h = 0 == k % 1 ? k - 1 : Math.floor(k);
              hc = b.Kb ? h : (8 * k + (h + .5)) / 9;
            }

            console.log('main loop blocker "' + b.name + '" took ' + (Date.now() - a) + " ms");
            e.setStatus && (a = e.statusMessage || "Please wait...", b = hc, k = ic.Ob, b ? b < k ? e.setStatus(a + " (" + (k - b) + "/" + k + ")") : e.setStatus(a) : e.setStatus(""));
            d < fc || setTimeout(_ac, 0);
          } else if (!(d < fc)) if (jc = jc + 1 | 0, 1 == Wb && 1 < Xb && 0 != jc % Xb) Z();else {
            0 == Wb && (Zb = $b());
            "timeout" === bc && e.cb && (v("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"), bc = "");

            a: if (!(A || e.preMainLoop && !1 === e.preMainLoop())) {
              try {
                c();
              } catch (l) {
                if (l instanceof kc) break a;
                l && "object" === _typeof(l) && l.stack && v("exception thrown: " + [l, l.stack]);
                throw l;
              }

              e.postMainLoop && e.postMainLoop();
            }

            d < fc || ("object" === (typeof SDL === "undefined" ? "undefined" : _typeof(SDL)) && SDL.audio && SDL.audio.Cb && SDL.audio.Cb(), Z());
          }
        };
      }

      var Z = null,
          bc = "",
          fc = 0,
          Yb = null,
          ec = 0,
          Wb = 0,
          Xb = 0,
          jc = 0,
          gc = [],
          ic = {},
          Zb,
          _ac,
          hc,
          mc = !1,
          nc = !1,
          oc = [];

      function pc() {
        function a() {
          nc = document.pointerLockElement === e.canvas || document.mozPointerLockElement === e.canvas || document.webkitPointerLockElement === e.canvas || document.msPointerLockElement === e.canvas;
        }

        e.preloadPlugins || (e.preloadPlugins = []);

        if (!qc) {
          qc = !0;

          try {
            rc = !0;
          } catch (c) {
            rc = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
          }

          sc = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : rc ? null : console.log("warning: no BlobBuilder");
          tc = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0;
          e.mb || "undefined" !== typeof tc || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), e.mb = !0);
          e.preloadPlugins.push({
            canHandle: function canHandle(a) {
              return !e.mb && /\.(jpg|jpeg|png|bmp)$/i.test(a);
            },
            handle: function handle(a, b, f, g) {
              var c = null;
              if (rc) try {
                c = new Blob([a], {
                  type: uc(b)
                }), c.size !== a.length && (c = new Blob([new Uint8Array(a).buffer], {
                  type: uc(b)
                }));
              } catch (n) {
                ha("Blob constructor present but fails: " + n + "; falling back to blob builder");
              }
              c || (c = new sc(), c.append(new Uint8Array(a).buffer), c = c.getBlob());
              var d = tc.createObjectURL(c),
                  l = new Image();

              l.onload = function () {
                ka(l.complete, "Image " + b + " could not be decoded");
                var c = document.createElement("canvas");
                c.width = l.width;
                c.height = l.height;
                c.getContext("2d").drawImage(l, 0, 0);
                e.preloadedImages[b] = c;
                tc.revokeObjectURL(d);
                f && f(a);
              };

              l.onerror = function () {
                console.log("Image " + d + " could not be decoded");
                g && g();
              };

              l.src = d;
            }
          });
          e.preloadPlugins.push({
            canHandle: function canHandle(a) {
              return !e.Sb && a.substr(-4) in {
                ".ogg": 1,
                ".wav": 1,
                ".mp3": 1
              };
            },
            handle: function handle(a, b, f, g) {
              function c(c) {
                l || (l = !0, e.preloadedAudios[b] = c, f && f(a));
              }

              function d() {
                l || (l = !0, e.preloadedAudios[b] = new Audio(), g && g());
              }

              var l = !1;

              if (rc) {
                try {
                  var n = new Blob([a], {
                    type: uc(b)
                  });
                } catch (t) {
                  return d();
                }

                n = tc.createObjectURL(n);
                var p = new Audio();
                p.addEventListener("canplaythrough", function () {
                  c(p);
                }, !1);

                p.onerror = function () {
                  if (!l) {
                    console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");

                    for (var d = "", f = 0, g = 0, h = 0; h < a.length; h++) {
                      for (f = f << 8 | a[h], g += 8; 6 <= g;) {
                        var k = f >> g - 6 & 63;
                        g -= 6;
                        d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[k];
                      }
                    }

                    2 == g ? (d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 3) << 4], d += "==") : 4 == g && (d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f & 15) << 2], d += "=");
                    p.src = "data:audio/x-" + b.substr(-3) + ";base64," + d;
                    c(p);
                  }
                };

                p.src = n;
                vc(function () {
                  c(p);
                });
              } else return d();
            }
          });
          var b = e.canvas;
          b && (b.requestPointerLock = b.requestPointerLock || b.mozRequestPointerLock || b.webkitRequestPointerLock || b.msRequestPointerLock || function () {}, b.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {}, b.exitPointerLock = b.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", a, !1), document.addEventListener("mozpointerlockchange", a, !1), document.addEventListener("webkitpointerlockchange", a, !1), document.addEventListener("mspointerlockchange", a, !1), e.elementPointerLock && b.addEventListener("click", function (a) {
            !nc && e.canvas.requestPointerLock && (e.canvas.requestPointerLock(), a.preventDefault());
          }, !1));
        }
      }

      function wc(a, b, c, d) {
        if (b && e.cb && a == e.canvas) return e.cb;
        var f;

        if (b) {
          var g = {
            antialias: !1,
            alpha: !1,
            Qb: 1
          };
          if (d) for (var k in d) {
            g[k] = d[k];
          }
          if ("undefined" !== typeof GL && (f = GL.Lb(a, g))) var h = GL.getContext(f).Jb;
        } else h = a.getContext("2d");

        if (!h) return null;
        c && (b || ka("undefined" === typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), e.cb = h, b && GL.Rb(f), e.Ub = b, oc.forEach(function (a) {
          a();
        }), pc());
        return h;
      }

      var xc = !1,
          yc = void 0,
          zc = void 0;

      function Ac(a, b, c) {
        function d() {
          mc = !1;
          var a = f.parentNode;
          (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a ? (f.exitFullscreen = Bc, yc && f.requestPointerLock(), mc = !0, zc ? ("undefined" != typeof SDL && (x[SDL.screen >> 2] = G[SDL.screen >> 2] | 8388608), Cc(e.canvas), Dc()) : Cc(f)) : (a.parentNode.insertBefore(f, a), a.parentNode.removeChild(a), zc ? ("undefined" != typeof SDL && (x[SDL.screen >> 2] = G[SDL.screen >> 2] & -8388609), Cc(e.canvas), Dc()) : Cc(f));
          if (e.onFullScreen) e.onFullScreen(mc);
          if (e.onFullscreen) e.onFullscreen(mc);
        }

        yc = a;
        zc = b;
        "undefined" === typeof yc && (yc = !0);
        "undefined" === typeof zc && (zc = !1);
        var f = e.canvas;
        xc || (xc = !0, document.addEventListener("fullscreenchange", d, !1), document.addEventListener("mozfullscreenchange", d, !1), document.addEventListener("webkitfullscreenchange", d, !1), document.addEventListener("MSFullscreenChange", d, !1));
        var g = document.createElement("div");
        f.parentNode.insertBefore(g, f);
        g.appendChild(f);
        g.requestFullscreen = g.requestFullscreen || g.mozRequestFullScreen || g.msRequestFullscreen || (g.webkitRequestFullscreen ? function () {
          g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null) || (g.webkitRequestFullScreen ? function () {
          g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } : null);
        c ? g.requestFullscreen({
          Vb: c
        }) : g.requestFullscreen();
      }

      function Fc(a, b, c) {
        v("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");

        Fc = function Fc(a, b, c) {
          Ac(a, b, c);
        };

        Ac(a, b, c);
      }

      function Bc() {
        if (!mc) return !1;
        (document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {}).apply(document, []);
        return !0;
      }

      var Gc = 0;

      function cc(a) {
        if ("function" === typeof requestAnimationFrame) requestAnimationFrame(a);else {
          var b = Date.now();
          if (0 === Gc) Gc = b + 1E3 / 60;else for (; b + 2 >= Gc;) {
            Gc += 1E3 / 60;
          }
          setTimeout(a, Math.max(Gc - b, 0));
        }
      }

      function vc(a) {
        e.noExitRuntime = !0;
        setTimeout(function () {
          A || a();
        }, 1E4);
      }

      function uc(a) {
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

      var Hc = [];

      function Dc() {
        var a = e.canvas;
        Hc.forEach(function (b) {
          b(a.width, a.height);
        });
      }

      function Cc(a, b, c) {
        b && c ? (a.Ib = b, a.yb = c) : (b = a.Ib, c = a.yb);
        var d = b,
            f = c;
        e.forcedAspectRatio && 0 < e.forcedAspectRatio && (d / f < e.forcedAspectRatio ? d = Math.round(f * e.forcedAspectRatio) : f = Math.round(d / e.forcedAspectRatio));

        if ((document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === a.parentNode && "undefined" != typeof screen) {
          var g = Math.min(screen.width / d, screen.height / f);
          d = Math.round(d * g);
          f = Math.round(f * g);
        }

        zc ? (a.width != d && (a.width = d), a.height != f && (a.height = f), "undefined" != typeof a.style && (a.style.removeProperty("width"), a.style.removeProperty("height"))) : (a.width != b && (a.width = b), a.height != c && (a.height = c), "undefined" != typeof a.style && (d != b || f != c ? (a.style.setProperty("width", d + "px", "important"), a.style.setProperty("height", f + "px", "important")) : (a.style.removeProperty("width"), a.style.removeProperty("height"))));
      }

      var Ic = {},
          Jc = 0;

      function Kc() {
        var a = Jc;
        Jc++;
        return a;
      }

      var qc, rc, sc, tc;

      function fa() {
        return C.length;
      }

      function Lc() {
        if ("undefined" !== typeof indexedDB) return indexedDB;
        var a = null;
        "object" === (typeof window === "undefined" ? "undefined" : _typeof(window)) && (a = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
        ka(a, "IDBStore used, but indexedDB not supported");
        return a;
      }

      var Mc = {};

      function Nc(a, b) {
        var c = Mc[a];
        if (c) b(null, c);else {
          try {
            var d = Lc().open(a, 22);
          } catch (f) {
            b(f);
            return;
          }

          d.onupgradeneeded = function (a) {
            var b = a.target.result;
            a = a.target.transaction;
            b.objectStoreNames.contains("FILE_DATA") ? a.objectStore("FILE_DATA") : b.createObjectStore("FILE_DATA");
          };

          d.onsuccess = function () {
            c = d.result;
            Mc[a] = c;
            b(null, c);
          };

          d.onerror = function (a) {
            b(this.error);
            a.preventDefault();
          };
        }
      }

      function Oc(a, b, c) {
        Nc(a, function (a, f) {
          if (a) return c(a);
          a = f.transaction(["FILE_DATA"], b);

          a.onerror = function (a) {
            c(this.error || "unknown error");
            a.preventDefault();
          };

          a = a.objectStore("FILE_DATA");
          c(null, a);
        });
      }

      function Pc(a, b, c) {
        Oc(a, "readonly", function (a, f) {
          if (a) return c(a);
          a = f.get(b);

          a.onsuccess = function (a) {
            return (a = a.target.result) ? c(null, a) : c("file " + b + " not found");
          };

          a.onerror = function (a) {
            c(a);
          };
        });
      }

      function Qc(a, b, c, d) {
        Oc(a, "readwrite", function (a, g) {
          if (a) return d(a);
          a = g.put(c, b);

          a.onsuccess = function () {
            d();
          };

          a.onerror = function (a) {
            d(a);
          };
        });
      }

      oa("GMT", D, 18480, 4);

      function Rc() {
        function a(a) {
          return (a = a.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? a[1] : "GMT";
        }

        if (!Sc) {
          Sc = !0;
          x[Tc() >> 2] = 60 * new Date().getTimezoneOffset();
          var b = new Date(2E3, 0, 1),
              c = new Date(2E3, 6, 1);
          x[Uc() >> 2] = Number(b.getTimezoneOffset() != c.getTimezoneOffset());
          var d = a(b),
              f = a(c);
          d = la(Vc(d));
          f = la(Vc(f));
          c.getTimezoneOffset() < b.getTimezoneOffset() ? (x[Wc() >> 2] = d, x[Wc() + 4 >> 2] = f) : (x[Wc() >> 2] = f, x[Wc() + 4 >> 2] = d);
        }
      }

      var Sc;

      function Xc(a) {
        a = qa(a);
        var b = F.byteLength;

        try {
          return -1 !== z.grow((a - b) / 65536) ? (F = z.buffer, !0) : !1;
        } catch (c) {
          return !1;
        }
      }

      Ba.push(function () {
        var a = e._fflush;
        a && a(0);
        Sa[1].length && Ta(1, 10);
        Sa[2].length && Ta(2, 10);
      });
      bb = e.InternalError = ab("InternalError");

      for (var Yc = Array(256), Zc = 0; 256 > Zc; ++Zc) {
        Yc[Zc] = String.fromCharCode(Zc);
      }

      fb = Yc;
      gb = e.BindingError = ab("BindingError");

      R.prototype.isAliasOf = function (a) {
        if (!(this instanceof R && a instanceof R)) return !1;
        var b = this.La.Oa.Na,
            c = this.La.Ma,
            d = a.La.Oa.Na;

        for (a = a.La.Ma; b.Sa;) {
          c = b.$a(c), b = b.Sa;
        }

        for (; d.Sa;) {
          a = d.$a(a), d = d.Sa;
        }

        return b === d && c === a;
      };

      R.prototype.clone = function () {
        this.La.Ma || ib(this);
        if (this.La.Za) return this.La.count.value += 1, this;
        var a = mb(Object.create(Object.getPrototypeOf(this), {
          La: {
            value: hb(this.La)
          }
        }));
        a.La.count.value += 1;
        a.La.Va = !1;
        return a;
      };

      R.prototype["delete"] = function () {
        this.La.Ma || ib(this);
        this.La.Va && !this.La.Za && Q("Object already scheduled for deletion");
        kb(this);
        lb(this.La);
        this.La.Za || (this.La.Pa = void 0, this.La.Ma = void 0);
      };

      R.prototype.isDeleted = function () {
        return !this.La.Ma;
      };

      R.prototype.deleteLater = function () {
        this.La.Ma || ib(this);
        this.La.Va && !this.La.Za && Q("Object already scheduled for deletion");
        ob.push(this);
        1 === ob.length && nb && nb(pb);
        this.La.Va = !0;
        return this;
      };

      U.prototype.ub = function (a) {
        this.nb && (a = this.nb(a));
        return a;
      };

      U.prototype.jb = function (a) {
        this.Ua && this.Ua(a);
      };

      U.prototype.argPackAdvance = 8;
      U.prototype.readValueFromPointer = Xa;

      U.prototype.deleteObject = function (a) {
        if (null !== a) a["delete"]();
      };

      U.prototype.fromWireType = function (a) {
        function b() {
          return this.bb ? Bb(this.Na.Ya, {
            Oa: this.Bb,
            Ma: c,
            Ra: this,
            Pa: a
          }) : Bb(this.Na.Ya, {
            Oa: this,
            Ma: a
          });
        }

        var c = this.ub(a);
        if (!c) return this.jb(a), null;
        var d = Ab(this.Na, c);

        if (void 0 !== d) {
          if (0 === d.La.count.value) return d.La.Ma = c, d.La.Pa = a, d.clone();
          d = d.clone();
          this.jb(a);
          return d;
        }

        d = this.Na.tb(c);
        d = qb[d];
        if (!d) return b.call(this);
        d = this.ab ? d.qb : d.pointerType;
        var f = yb(c, this.Na, d.Na);
        return null === f ? b.call(this) : this.bb ? Bb(d.Na.Ya, {
          Oa: d,
          Ma: f,
          Ra: this,
          Pa: a
        }) : Bb(d.Na.Ya, {
          Oa: d,
          Ma: f
        });
      };

      e.getInheritedInstanceCount = function () {
        return Object.keys(zb).length;
      };

      e.getLiveInheritedInstances = function () {
        var a = [],
            b;

        for (b in zb) {
          zb.hasOwnProperty(b) && a.push(zb[b]);
        }

        return a;
      };

      e.flushPendingDeletes = pb;

      e.setDelayFunction = function (a) {
        nb = a;
        ob.length && nb && nb(pb);
      };

      Db = e.UnboundTypeError = ab("UnboundTypeError");

      e.count_emval_handles = function () {
        for (var a = 0, b = 5; b < Y.length; ++b) {
          void 0 !== Y[b] && ++a;
        }

        return a;
      };

      e.get_first_emval = function () {
        for (var a = 5; a < Y.length; ++a) {
          if (void 0 !== Y[a]) return Y[a];
        }

        return null;
      };

      e.requestFullScreen = function (a, b, c) {
        v("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");
        e.requestFullScreen = e.requestFullscreen;
        Fc(a, b, c);
      };

      e.requestFullscreen = function (a, b, c) {
        Ac(a, b, c);
      };

      e.requestAnimationFrame = function (a) {
        cc(a);
      };

      e.setCanvasSize = function (a, b, c) {
        Cc(e.canvas, a, b);
        c || Dc();
      };

      e.pauseMainLoop = function () {
        Z = null;
        fc++;
      };

      e.resumeMainLoop = function () {
        fc++;
        var a = Wb,
            b = Xb,
            c = Yb;
        Yb = null;
        dc(c);
        Vb(a, b);
        Z();
      };

      e.getUserMedia = function () {
        window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia);
        window.getUserMedia(void 0);
      };

      e.createContext = function (a, b, c, d) {
        return wc(a, b, c, d);
      };

      "undefined" !== typeof dateNow ? $b = dateNow : "object" === (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance && "function" === typeof performance.now ? $b = function $b() {
        return performance.now();
      } : $b = Date.now;

      function Vc(a) {
        var b = Array(pa(a) + 1);
        oa(a, b, 0, b.length);
        return b;
      }

      var bd = e.asm({}, {
        i: _y,
        A: function A() {},
        da: function da() {
          v("missing function: _ZN5Umbra18createDirRecursiveEPKc");

          _y(-1);
        },
        _: Pa,
        G: function G() {
          return Qa.apply(null, arguments);
        },
        X: function X() {
          A = !0;
          throw "Pure virtual function called!";
        },
        w: function w() {},
        z: function z(a) {
          e.___errno_location && (x[e.___errno_location() >> 2] = a);
          return a;
        },
        N: function N(a, b) {
          _K = b;

          try {
            return Ua.lb(), L(), L(), L(), L(), 0;
          } catch (c) {
            return _y(c), -c.Xa;
          }
        },
        M: function M(a, b) {
          _K = b;

          try {
            var c = Ua.lb(),
                d = L(),
                f = L();
            return Ua.Mb(c, d, f);
          } catch (g) {
            return _y(g), -g.Xa;
          }
        },
        y: function y(a, b) {
          _K = b;

          try {
            var c = L(),
                d = L(),
                f = L();

            for (b = a = 0; b < f; b++) {
              for (var g = x[d + 8 * b >> 2], k = x[d + (8 * b + 4) >> 2], h = 0; h < k; h++) {
                Ta(c, D[g + h]);
              }

              a += k;
            }

            return a;
          } catch (l) {
            return _y(l), -l.Xa;
          }
        },
        ca: function ca(a, b) {
          _K = b;

          try {
            var c = E(L()),
                d = L();
            return Ua.Nb((void 0).stat, c, d);
          } catch (f) {
            return _y(f), -f.Xa;
          }
        },
        v: function v(a, b) {
          _K = b;
          return 0;
        },
        ba: function ba(a, b) {
          _K = b;

          try {
            var c = E(L()),
                d = L(),
                f = L();
            return (void 0).open(c, d, f).Pb;
          } catch (g) {
            return _y(g), -g.Xa;
          }
        },
        L: function L(a, b) {
          _K = b;
          return 0;
        },
        K: function K(a, b) {
          _K = b;

          try {
            return Ua.lb(), 0;
          } catch (c) {
            return _y(c), -c.Xa;
          }
        },
        x: function x() {},
        u: function u(a) {
          var b = Va[a];
          delete Va[a];
          var c = b.gb,
              d = b.Ua,
              f = b.kb,
              g = f.map(function (a) {
            return a.xb;
          }).concat(f.map(function (a) {
            return a.Fb;
          }));
          db([a], g, function (a) {
            var g = {};
            f.forEach(function (b, c) {
              var d = a[c],
                  h = b.vb,
                  k = b.wb,
                  l = a[c + f.length],
                  n = b.Eb,
                  Ra = b.Gb;
              g[b.sb] = {
                read: function read(a) {
                  return d.fromWireType(h(k, a));
                },
                write: function write(a, b) {
                  var c = [];
                  n(Ra, a, l.toWireType(c, b));
                  Wa(c);
                }
              };
            });
            return [{
              name: b.name,
              fromWireType: function fromWireType(a) {
                var b = {},
                    c;

                for (c in g) {
                  b[c] = g[c].read(a);
                }

                d(a);
                return b;
              },
              toWireType: function toWireType(a, b) {
                for (var f in g) {
                  if (!(f in b)) throw new TypeError("Missing field");
                }

                var h = c();

                for (f in g) {
                  g[f].write(h, b[f]);
                }

                null !== a && a.push(d, h);
                return h;
              },
              argPackAdvance: 8,
              readValueFromPointer: Xa,
              Qa: d
            }];
          });
        },
        aa: function aa(a, b, c, d, f) {
          var g = eb(c);
          b = P(b);
          O(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              return !!a;
            },
            toWireType: function toWireType(a, b) {
              return b ? d : f;
            },
            argPackAdvance: 8,
            readValueFromPointer: function readValueFromPointer(a) {
              if (1 === c) var d = C;else if (2 === c) d = ra;else if (4 === c) d = x;else throw new TypeError("Unknown boolean type size: " + b);
              return this.fromWireType(d[a >> g]);
            },
            Qa: null
          });
        },
        J: function J(a, b, c, d, f, g, k, h, l, n, p, t, u) {
          p = P(p);
          g = W(f, g);
          h && (h = W(k, h));
          n && (n = W(l, n));
          u = W(t, u);
          var w = Za(p);
          sb(w, function () {
            Gb("Cannot construct " + p + " due to unbound types", [d]);
          });
          db([a, b, c], d ? [d] : [], function (b) {
            b = b[0];

            if (d) {
              var c = b.Na;
              var f = c.Ya;
            } else f = R.prototype;

            b = $a(w, function () {
              if (Object.getPrototypeOf(this) !== k) throw new gb("Use 'new' to construct " + p);
              if (void 0 === l.ib) throw new gb(p + " has no accessible constructor");
              var a = l.ib[arguments.length];
              if (void 0 === a) throw new gb("Tried to invoke ctor of " + p + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(l.ib).toString() + ") parameters instead!");
              return a.apply(this, arguments);
            });
            var k = Object.create(f, {
              constructor: {
                value: b
              }
            });
            b.prototype = k;
            var l = new tb(p, b, k, u, c, g, h, n);
            c = new U(p, l, !0, !1);
            f = new U(p + "*", l, !1, !1);
            var r = new U(p + " const*", l, !1, !0);
            qb[a] = {
              pointerType: f,
              qb: r
            };
            Cb(w, b);
            return [c, f, r];
          });
        },
        $: function $(a, b) {
          b = P(b);
          O(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              var b = Y[a].value;
              Ib(a);
              return b;
            },
            toWireType: function toWireType(a, b) {
              return T(b);
            },
            argPackAdvance: 8,
            readValueFromPointer: Xa,
            Qa: null
          });
        },
        t: function t(a, b, c, d) {
          function f() {}

          c = eb(c);
          b = P(b);
          f.values = {};
          O(a, {
            name: b,
            constructor: f,
            fromWireType: function fromWireType(a) {
              return this.constructor.values[a];
            },
            toWireType: function toWireType(a, b) {
              return b.value;
            },
            argPackAdvance: 8,
            readValueFromPointer: Jb(b, c, d),
            Qa: null
          });
          sb(b, f);
        },
        h: function h(a, b, c) {
          var d = Kb(a, "enum");
          b = P(b);
          a = d.constructor;
          d = Object.create(d.constructor.prototype, {
            value: {
              value: c
            },
            constructor: {
              value: $a(d.name + "_" + b, function () {})
            }
          });
          a.values[c] = d;
          a[b] = d;
        },
        I: function I(a, b, c) {
          c = eb(c);
          b = P(b);
          O(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              return a;
            },
            toWireType: function toWireType(a, b) {
              if ("number" !== typeof b && "boolean" !== typeof b) throw new TypeError('Cannot convert "' + S(b) + '" to ' + this.name);
              return b;
            },
            argPackAdvance: 8,
            readValueFromPointer: Lb(b, c),
            Qa: null
          });
        },
        d: function d(a, b, c, _d, f, g) {
          var k = Nb(b, c);
          a = P(a);
          f = W(_d, f);
          sb(a, function () {
            Gb("Cannot call " + a + " due to unbound types", k);
          }, b - 1);
          db([], k, function (c) {
            var d = a,
                h = a;
            c = [c[0], null].concat(c.slice(1));
            var k = f,
                t = c.length;
            2 > t && Q("argTypes array size mismatch! Must at least get return value and 'this' types!");

            for (var u = null !== c[1] && !1, w = !1, r = 1; r < c.length; ++r) {
              if (null !== c[r] && void 0 === c[r].Qa) {
                w = !0;
                break;
              }
            }

            var Ra = "void" !== c[0].name,
                V = "",
                ea = "";

            for (r = 0; r < t - 2; ++r) {
              V += (0 !== r ? ", " : "") + "arg" + r, ea += (0 !== r ? ", " : "") + "arg" + r + "Wired";
            }

            h = "return function " + Za(h) + "(" + V + ") {\nif (arguments.length !== " + (t - 2) + ") {\nthrowBindingError('function " + h + " called with ' + arguments.length + ' arguments, expected " + (t - 2) + " args!');\n}\n";
            w && (h += "var destructors = [];\n");
            var lc = w ? "destructors" : "null";
            V = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
            k = [Q, k, g, Wa, c[0], c[1]];
            u && (h += "var thisWired = classParam.toWireType(" + lc + ", this);\n");

            for (r = 0; r < t - 2; ++r) {
              h += "var arg" + r + "Wired = argType" + r + ".toWireType(" + lc + ", arg" + r + "); // " + c[r + 2].name + "\n", V.push("argType" + r), k.push(c[r + 2]);
            }

            u && (ea = "thisWired" + (0 < ea.length ? ", " : "") + ea);
            h += (Ra ? "var rv = " : "") + "invoker(fn" + (0 < ea.length ? ", " : "") + ea + ");\n";
            if (w) h += "runDestructors(destructors);\n";else for (r = u ? 1 : 2; r < c.length; ++r) {
              t = 1 === r ? "thisWired" : "arg" + (r - 2) + "Wired", null !== c[r].Qa && (h += t + "_dtor(" + t + "); // " + c[r].name + "\n", V.push(t + "_dtor"), k.push(c[r].Qa));
            }
            Ra && (h += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
            V.push(h + "}\n");
            c = Mb(V).apply(null, k);
            Cb(d, c, b - 1);
            return [];
          });
        },
        o: function o(a, b, c, d, f) {
          function g(a) {
            return a;
          }

          b = P(b);
          -1 === f && (f = 4294967295);
          var k = eb(c);

          if (0 === d) {
            var h = 32 - 8 * c;

            g = function g(a) {
              return a << h >>> h;
            };
          }

          var l = -1 != b.indexOf("unsigned");
          O(a, {
            name: b,
            fromWireType: g,
            toWireType: function toWireType(a, c) {
              if ("number" !== typeof c && "boolean" !== typeof c) throw new TypeError('Cannot convert "' + S(c) + '" to ' + this.name);
              if (c < d || c > f) throw new TypeError('Passing a number "' + S(c) + '" from JS side to C/C++ side to an argument of type "' + b + '", which is outside the valid range [' + d + ", " + f + "]!");
              return l ? c >>> 0 : c | 0;
            },
            argPackAdvance: 8,
            readValueFromPointer: Ob(b, k, 0 !== d),
            Qa: null
          });
        },
        m: function m(a, b, c) {
          function d(a) {
            a >>= 2;
            var b = G;
            return new f(b.buffer, b[a + 1], b[a]);
          }

          var f = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][b];
          c = P(c);
          O(a, {
            name: c,
            fromWireType: d,
            argPackAdvance: 8,
            readValueFromPointer: d
          }, {
            zb: !0
          });
        },
        H: function H(a, b) {
          b = P(b);
          var c = "std::string" === b;
          O(a, {
            name: b,
            fromWireType: function fromWireType(a) {
              var b = G[a >> 2];

              if (c) {
                var d = D[a + 4 + b],
                    k = 0;
                0 != d && (k = d, D[a + 4 + b] = 0);
                var h = a + 4;

                for (d = 0; d <= b; ++d) {
                  var l = a + 4 + d;

                  if (0 == D[l]) {
                    h = E(h);
                    if (void 0 === n) var n = h;else n += String.fromCharCode(0), n += h;
                    h = l + 1;
                  }
                }

                0 != k && (D[a + 4 + b] = k);
              } else {
                n = Array(b);

                for (d = 0; d < b; ++d) {
                  n[d] = String.fromCharCode(D[a + 4 + d]);
                }

                n = n.join("");
              }

              X(a);
              return n;
            },
            toWireType: function toWireType(a, b) {
              b instanceof ArrayBuffer && (b = new Uint8Array(b));
              var d = "string" === typeof b;
              d || b instanceof Uint8Array || b instanceof Uint8ClampedArray || b instanceof Int8Array || Q("Cannot pass non-string to std::string");
              var f = (c && d ? function () {
                return pa(b);
              } : function () {
                return b.length;
              })(),
                  h = B(4 + f + 1);
              G[h >> 2] = f;
              if (c && d) oa(b, D, h + 4, f + 1);else if (d) for (d = 0; d < f; ++d) {
                var l = b.charCodeAt(d);
                255 < l && (X(h), Q("String has UTF-16 code units that do not fit in 8 bits"));
                D[h + 4 + d] = l;
              } else for (d = 0; d < f; ++d) {
                D[h + 4 + d] = b[d];
              }
              null !== a && a.push(X, h);
              return h;
            },
            argPackAdvance: 8,
            readValueFromPointer: Xa,
            Qa: function Qa(a) {
              X(a);
            }
          });
        },
        Z: function Z(a, b, c) {
          c = P(c);

          if (2 === b) {
            var d = function d() {
              return sa;
            };

            var f = 1;
          } else 4 === b && (d = function d() {
            return G;
          }, f = 2);

          O(a, {
            name: c,
            fromWireType: function fromWireType(a) {
              for (var b = d(), c = G[a >> 2], g = Array(c), n = a + 4 >> f, p = 0; p < c; ++p) {
                g[p] = String.fromCharCode(b[n + p]);
              }

              X(a);
              return g.join("");
            },
            toWireType: function toWireType(a, c) {
              var g = d(),
                  k = c.length,
                  n = B(4 + k * b);
              G[n >> 2] = k;

              for (var p = n + 4 >> f, t = 0; t < k; ++t) {
                g[p + t] = c.charCodeAt(t);
              }

              null !== a && a.push(X, n);
              return n;
            },
            argPackAdvance: 8,
            readValueFromPointer: Xa,
            Qa: function Qa(a) {
              X(a);
            }
          });
        },
        s: function s(a, b, c, d, f, g) {
          Va[a] = {
            name: P(b),
            gb: W(c, d),
            Ua: W(f, g),
            kb: []
          };
        },
        j: function j(a, b, c, d, f, g, k, h, l, n) {
          Va[a].kb.push({
            sb: P(b),
            xb: c,
            vb: W(d, f),
            wb: g,
            Fb: k,
            Eb: W(h, l),
            Gb: n
          });
        },
        Y: function Y(a, b) {
          b = P(b);
          O(a, {
            Ab: !0,
            name: b,
            argPackAdvance: 0,
            fromWireType: function fromWireType() {},
            toWireType: function toWireType() {}
          });
        },
        q: function q(a, b, c, d) {
          a = Rb[a];
          b = Sb(b);
          c = Qb(c);
          a(b, c, null, d);
        },
        c: Ib,
        p: function p(a, b) {
          b = Ub(a, b);

          for (var c = b[0], d = c.name + "_$" + b.slice(1).map(function (a) {
            return a.name;
          }).join("_") + "$", f = ["retType"], g = [c], k = "", h = 0; h < a - 1; ++h) {
            k += (0 !== h ? ", " : "") + "arg" + h, f.push("argType" + h), g.push(b[1 + h]);
          }

          d = "return function " + Za("methodCaller_" + d) + "(handle, name, destructors, args) {\n";
          var l = 0;

          for (h = 0; h < a - 1; ++h) {
            d += "    var arg" + h + " = argType" + h + ".readValueFromPointer(args" + (l ? "+" + l : "") + ");\n", l += b[h + 1].argPackAdvance;
          }

          d += "    var rv = handle[name](" + k + ");\n";

          for (h = 0; h < a - 1; ++h) {
            b[h + 1].deleteObject && (d += "    argType" + h + ".deleteObject(arg" + h + ");\n");
          }

          c.Ab || (d += "    return retType.toWireType(destructors, rv);\n");
          f.push(d + "};\n");
          a = Mb(f).apply(null, g);
          return Tb(a);
        },
        F: function F(a) {
          4 < a && (Y[a].hb += 1);
        },
        r: function r() {
          return T([]);
        },
        g: function g(a) {
          return T(Qb(a));
        },
        n: function n() {
          return T({});
        },
        e: function e(a, b, c) {
          a = Sb(a);
          b = Sb(b);
          c = Sb(c);
          a[b] = c;
        },
        f: function f(a, b) {
          a = Kb(a, "_emval_take_value");
          a = a.readValueFromPointer(b);
          return T(a);
        },
        l: function l() {
          e.abort();
        },
        E: function E(a) {
          return Na[a]();
        },
        W: function W(a, b, c, d, f, g, k, h, l, n, p, t) {
          return Na[a](b, c, d, f, g, k, h, l, n, p, t);
        },
        D: function D(a) {
          (a = Ic[a]) && a.abort();
        },
        V: fa,
        k: $b,
        C: function C(a, b, c, d, f) {
          Pc(E(a), E(b), function (a, b) {
            a ? f && $c(f, c) : (a = B(b.length), D.set(b, a), ad(d, c, a, b.length), X(a));
          });
        },
        U: function U(a, b, c, d, f, g, k) {
          Qc(E(a), E(b), new Uint8Array(D.subarray(c, c + d)), function (a) {
            a ? k && $c(k, f) : g && $c(g, f);
          });
        },
        T: function T(a, b, c) {
          D.set(D.subarray(b, b + c), a);
        },
        S: function S(a) {
          if (2147418112 < a) return !1;

          for (var b = Math.max(fa(), 16777216); b < a;) {
            536870912 >= b ? b = qa(2 * b) : b = Math.min(qa((3 * b + 2147483648) / 4), 2147418112);
          }

          if (!Xc(b)) return !1;
          va();
          return !0;
        },
        R: function R(a) {
          if (!e.noExitRuntime && (A = !0, xa(Ba), e.onExit)) e.onExit(a);
          e.quit(a, new kc(a));
        },
        B: function B() {
          _y("trap!");
        },
        Q: function Q(a) {
          Rc();
          a = new Date(1E3 * x[a >> 2]);
          x[4608] = a.getSeconds();
          x[4609] = a.getMinutes();
          x[4610] = a.getHours();
          x[4611] = a.getDate();
          x[4612] = a.getMonth();
          x[4613] = a.getFullYear() - 1900;
          x[4614] = a.getDay();
          var b = new Date(a.getFullYear(), 0, 1);
          x[4615] = (a.getTime() - b.getTime()) / 864E5 | 0;
          x[4617] = -(60 * a.getTimezoneOffset());
          var c = new Date(2E3, 6, 1).getTimezoneOffset();
          b = b.getTimezoneOffset();
          a = (c != b && a.getTimezoneOffset() == Math.min(b, c)) | 0;
          x[4616] = a;
          a = x[Wc() + (a ? 4 : 0) >> 2];
          x[4618] = a;
          return 18432;
        },
        P: function P(a) {
          var b = Date.now() / 1E3 | 0;
          a && (x[a >> 2] = b);
          return b;
        },
        O: function O() {
          _y("OOM");
        },
        a: da,
        b: 18416
      }, F);
      e.asm = bd;

      e.___embind_register_native_and_builtin_types = function () {
        return e.asm.ea.apply(null, arguments);
      };

      var Fb = e.___getTypeName = function () {
        return e.asm.fa.apply(null, arguments);
      },
          Uc = e.__get_daylight = function () {
        return e.asm.ga.apply(null, arguments);
      },
          Tc = e.__get_timezone = function () {
        return e.asm.ha.apply(null, arguments);
      },
          Wc = e.__get_tzname = function () {
        return e.asm.ia.apply(null, arguments);
      },
          X = e._free = function () {
        return e.asm.ja.apply(null, arguments);
      },
          B = e._malloc = function () {
        return e.asm.ka.apply(null, arguments);
      },
          Oa = e.globalCtors = function () {
        return e.asm.Ja.apply(null, arguments);
      };

      e.stackAlloc = function () {
        return e.asm.Ka.apply(null, arguments);
      };

      e.dynCall_i = function () {
        return e.asm.la.apply(null, arguments);
      };

      e.dynCall_ii = function () {
        return e.asm.ma.apply(null, arguments);
      };

      e.dynCall_iii = function () {
        return e.asm.na.apply(null, arguments);
      };

      e.dynCall_iiii = function () {
        return e.asm.oa.apply(null, arguments);
      };

      e.dynCall_iiiii = function () {
        return e.asm.pa.apply(null, arguments);
      };

      e.dynCall_iiiiii = function () {
        return e.asm.qa.apply(null, arguments);
      };

      e.dynCall_iiiiiifi = function () {
        return e.asm.ra.apply(null, arguments);
      };

      e.dynCall_iiiiiiiiii = function () {
        return e.asm.sa.apply(null, arguments);
      };

      e.dynCall_iiiji = function () {
        return e.asm.ta.apply(null, arguments);
      };

      e.dynCall_ji = function () {
        return e.asm.ua.apply(null, arguments);
      };

      e.dynCall_jiji = function () {
        return e.asm.va.apply(null, arguments);
      };

      e.dynCall_v = function () {
        return e.asm.wa.apply(null, arguments);
      };

      var $c = e.dynCall_vi = function () {
        return e.asm.xa.apply(null, arguments);
      };

      e.dynCall_vii = function () {
        return e.asm.ya.apply(null, arguments);
      };

      e.dynCall_viifiii = function () {
        return e.asm.za.apply(null, arguments);
      };

      var ad = e.dynCall_viii = function () {
        return e.asm.Aa.apply(null, arguments);
      };

      e.dynCall_viiif = function () {
        return e.asm.Ba.apply(null, arguments);
      };

      e.dynCall_viiifi = function () {
        return e.asm.Ca.apply(null, arguments);
      };

      e.dynCall_viiifiii = function () {
        return e.asm.Da.apply(null, arguments);
      };

      e.dynCall_viiii = function () {
        return e.asm.Ea.apply(null, arguments);
      };

      e.dynCall_viiiii = function () {
        return e.asm.Fa.apply(null, arguments);
      };

      e.dynCall_viiiiii = function () {
        return e.asm.Ga.apply(null, arguments);
      };

      e.dynCall_viiiiiiiii = function () {
        return e.asm.Ha.apply(null, arguments);
      };

      e.dynCall_viij = function () {
        return e.asm.Ia.apply(null, arguments);
      };

      e.asm = bd;

      e.then = function (a) {
        if (e.calledRun) a(e);else {
          var b = e.onRuntimeInitialized;

          e.onRuntimeInitialized = function () {
            b && b();
            a(e);
          };
        }
        return e;
      };

      function kc(a) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" + a + ")";
        this.status = a;
      }

      kc.prototype = Error();
      kc.prototype.constructor = kc;

      Ga = function cd() {
        e.calledRun || dd();
        e.calledRun || (Ga = cd);
      };

      function dd() {
        function a() {
          if (!e.calledRun && (e.calledRun = !0, !A)) {
            Da = !0;
            xa(za);
            xa(Aa);
            if (e.onRuntimeInitialized) e.onRuntimeInitialized();
            if (e.postRun) for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
              var a = e.postRun.shift();
              Ca.unshift(a);
            }
            xa(Ca);
          }
        }

        if (!(0 < H)) {
          if (e.preRun) for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) {
            Ea();
          }
          xa(ya);
          0 < H || e.calledRun || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function () {
            setTimeout(function () {
              e.setStatus("");
            }, 1);
            a();
          }, 1)) : a());
        }
      }

      e.run = dd;

      function _y(a) {
        if (e.onAbort) e.onAbort(a);
        ba(a);
        v(a);
        A = !0;
        throw "abort(" + a + "). Build with -s ASSERTIONS=1 for more info.";
      }

      e.abort = _y;
      if (e.preInit) for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) {
        e.preInit.pop()();
      }
      dd();
      e.maxBytesDownloaded = 0;
      e.minBytesDownloaded = 0;
      e.URLsDownloaded = new Set([]);
      e.wgetRequests = Ic;

      function Ma(a, b, c, d, f, g, k, h, l, n, p) {
        var t = E(a);
        b = E(b);
        g = E(g);
        var u = new XMLHttpRequest();
        u.open(b, t, !0);
        if ("GET" != b || 0 != g.length) u.withCredentials = !0;
        u.responseType = "arraybuffer";
        var w = Kc();

        u.onload = function () {
          if (200 == u.status) {
            var b = new Uint8Array(u.response),
                g = e.URLsDownloaded;
            e.maxBytesDownloaded += u.response.byteLength;
            g.has(a) || (g.add(a), e.minBytesDownloaded += u.response.byteLength);
            n ? b.length != p ? e.dynCall_viii(f, w, c, 0) : (D.set(b, n), e.dynCall_viiii(d, w, c, null, 0)) : (g = B(b.length), D.set(b, g), e.dynCall_viiii(d, w, c, g, b.length), X(g));
          } else e.dynCall_viii(f, w, c, u.status);

          delete Ic[w];
        };

        u.onerror = function () {
          e.dynCall_viii(f, w, c, u.status);
          delete Ic[w];
        };

        u.onabort = function () {
          delete Ic[w];
        };

        0 != g.length && u.setRequestHeader("Authorization", "Basic " + btoa(g + ":"));
        l = E(l).split("\n");
        if (2 <= l.length) for (t = 0; t < l.length; t += 2) {
          u.setRequestHeader(l[t], l[t + 1]);
        }
        "POST" == b ? u.send(C.slice(k, k + h)) : u.send(null);
        Ic[w] = u;
        return w;
      }
      return UmbraNativeAPI;
    };
  }();

  var TextureFormat = {
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
  var TextureFormatNames = ['rgba32', 'rgb24', 'bc1', // Also known as DXT1
  'bc3', // Also known as DXT5
  'bc4', 'bc5', 'etc1_rgb', 'rgba_float32', 'unc1', // Deprecated internal format, for backwards compatibility
  'jpeg', 'png', 'bmp', 'psd', 'tga', 'gif', 'hdr', 'pic', 'pnm', 'astc_4x4', // 8.00 bpp
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
  'argb32', 'r8', 'pvrtc1_rgb4', 'pvrtc1_rgba4', 'uint8', 'uint16', 'uint32', 'rgb565', 'rg8', 'rg16f', 'count'];
  var ColorSpace = {
    LINEAR: 0,
    SRGB: 1
  };
  var ColorSpaceNames = ['linear', 'srgb'];
  var TextureType = {
    DIFFUSE: 0,
    NORMAL: 1,
    LEGACY_UNUSED: 2,
    SPECULAR: 3,
    META_INDEX: 4,
    COUNT: 5
  };
  var TextureTypeNames = ['diffuse', 'normal', 'legacy_unused', 'specular', 'meta_index'];
  var TextureCapability = {
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

  var TextureCapability$1 = TextureCapability;
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

    } // Struct size and field offsets are requried for zero-copy interop


    var renderableSize = Module.getRenderableSize();
    var renderableFields = Module.getRenderableFields(); // Used by MeshLoader to copy over mesh AABB without extra allocs

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
        this.ptr = Module.clientCreate();
      }

      destroy() {
        Module.clientDestroy(this.ptr);
        this.ptr = 0;
      }

    }

    class Scene {
      constructor(ptr) {
        this.ptr = void 0;
        this.creds = void 0;
        this.matrixBuffer = void 0;
        this.ptr = ptr;
        this.creds = Module.sceneCredsCreate();
        this.matrixBuffer = new Buffer(16 * 4);
      }

      destroy() {
        Module.sceneCredsDestroy(this.creds);
        this.matrixBuffer.destroy();
      }

      connect(token, projectID, modelID) {
        if (typeof token !== 'string') {
          throw new TypeError('token should be a string');
        }

        if (typeof projectID !== 'string') {
          throw new TypeError('projectID should be a string');
        }

        if (typeof modelID !== 'string') {
          throw new TypeError('modelID should be a string');
        }

        Module.sceneConnect(this.ptr, this.creds, token, projectID, modelID);
      }

      connectToCustomAPI(token, projectID, modelID, apiURL) {
        if (typeof token !== 'string') {
          throw new TypeError('token should be a string');
        }

        if (typeof projectID !== 'string') {
          throw new TypeError('projectID should be a string');
        }

        if (typeof modelID !== 'string') {
          throw new TypeError('modelID should be a string');
        }

        if (typeof apiURL !== 'string') {
          throw new TypeError('apiURL should be a string');
        }

        if (token.indexOf('#') !== -1) {
          throw new Error('Use the "apiURL" argument instead of a magic token.');
        }

        if (apiURL.length > 0 && apiURL[apiURL.length - 1] !== '/') {
          apiURL = apiURL + '/';
        }

        var magicToken = "".concat(apiURL, "#token");
        Module.sceneConnect(this.ptr, this.creds, magicToken, projectID, modelID);
      }

      connectWithURL(url) {
        if (typeof url !== 'string') {
          throw new TypeError('URL should be a string');
        }

        if (url.indexOf('http:') === 0 || url.indexOf('https:') === 0) {
          Module.sceneConnectWithURL(this.ptr, this.creds, url);
        } else {
          throw new Error('Should be an HTTP or HTTPS URL');
        }
      }

      connectionStatus() {
        return Module.sceneGetConnectionStatus(this.ptr);
      }

      getInfo() {
        return Module.sceneGetInfo(this.ptr);
      }

      isConnected() {
        return this.connectionStatus() === Module.ConnectionStatus.Connected;
      }

      update(matrix) {
        if (!Array.isArray(matrix)) {
          throw new TypeError('Matrix should be an array');
        }

        if (matrix.length !== 16) {
          throw new TypeError('Matrix should be of size 4x4');
        }

        copyMat4(this.matrixBuffer.floats(), matrix);
        Module.sceneUpdate(this.ptr, this.matrixBuffer.ofs);
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
      }

      update(cameraMatrix, positionVector, quality) {
        var lights = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

        if (!Array.isArray(cameraMatrix)) {
          throw new TypeError('Camera matrix should be an array');
        }

        if (!Array.isArray(positionVector)) {
          throw new TypeError('Position should be an array');
        }

        if (typeof quality !== 'number') {
          throw new TypeError('Quality should be a number');
        }

        if (cameraMatrix.length !== 16) {
          throw new TypeError('Camera matrix should be of size 4x4');
        }

        if (positionVector.length !== 3) {
          throw new TypeError('Position vector should be of length 3');
        }

        copyMat4(this.matrixBuffer.floats(), cameraMatrix);
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

        Module.viewUpdate(this.ptr, this.matrixBuffer.ofs, quality, this.vectorBuffer.ofs, this.lightBuffer.ofs, lights.length);
      }

      getVisible(batchSize) {
        assertInteger(batchSize);
        var bufferSize = batchSize * renderableSize; // Check if we should enlarge or allocate the temp buffer

        if (!this.temp || this.temp.size < bufferSize) {
          if (this.temp) {
            this.temp.destroy();
          }

          this.temp = new Buffer(bufferSize);
        }

        var temp = this.temp;
        var strideInWords = renderableSize / 4;
        var bufferWordSize = bufferSize / 4;
        var offsets = renderableFields;
        assertInteger(strideInWords);
        assertInteger(bufferWordSize);

        var getView = function getView(arrayType, heap, ptr, ofs) {
          assertInteger(ofs / 4); // eslint-disable-next-line new-cap

          return new arrayType(heap.buffer, ptr + ofs, bufferWordSize - ofs / 4);
        };

        var meshIDs = getView(Uint32Array, Module.HEAPU32, temp.ofs, offsets['mesh']);
        var lodLevels = getView(Int32Array, Module.HEAP32, temp.ofs, offsets['lodLevel']);
        var masks = getView(Uint32Array, Module.HEAPU32, temp.ofs, offsets['visibilityMask']); // const transforms = getView(Float32Array, Module.HEAPF32, temp.ofs, offsets['transform'])

        var count = Module.viewNextRenderables(this.ptr, temp.ofs, batchSize);
        var output = [];

        for (var i = 0; i < count; i++) {
          var id = meshIDs[strideInWords * i];
          var lod = lodLevels[strideInWords * i];
          var mask = masks[strideInWords * i]; // TODO extract individual transforms too

          output.push({
            id: id,
            mesh: this.runtimeAssets.get(id),
            lod: lod,
            mask: mask
          });
        }

        return output;
      }

    }

    var jobTypeToString = new Map([[Module.JobType.StreamIn, 'Create'], [Module.JobType.StreamOut, 'Destroy']]);
    var assetTypeToString = new Map([[Module.AssetType.Material, 'Material'], [Module.AssetType.Texture, 'Texture'], [Module.AssetType.Mesh, 'Mesh']]);

    class AssetJob {
      // TODO: Replace with a union container data types
      constructor(ptr) {
        this.ptr = void 0;
        this.jobType = void 0;
        this.assetType = void 0;
        this.type = void 0;
        this.data = void 0;
        this.ptr = ptr;
        this.jobType = jobTypeToString.get(Module.jobGetJobType(ptr));
        this.assetType = assetTypeToString.get(Module.jobGetAssetType(ptr));
        this.type = this.jobType + this.assetType;
        this.data = {}; // Type specific asset data set from the outside
      }

      finish(result, userPtr) {
        Module.jobFinish(this.ptr, result, userPtr);
      }

      success() {
        var userPtr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        Module.jobFinish(this.ptr, Module.JobResult.Success, userPtr);
      }

      fail() {
        Module.jobFinish(this.ptr, Module.JobResult.Failure, 0);
      }

      get userPointer() {
        return Module.jobGetUserPointer(this.ptr);
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

    class MeshLoader {
      constructor(ptr, ownerJob) {
        this.ownerJob = void 0;
        this.vertexBuffers = void 0;
        this.ptr = void 0;
        this.ptr = ptr;
        this.ownerJob = ownerJob;
      } // TODO create a type for bufferDescriptors


      setBuffers(bufferDescriptors) {
        if (!Module.meshLoaderSetBuffers(this.ptr, bufferDescriptors)) {
          console.log(bufferDescriptors);
          throw new Error('setBuffers failed');
        }
      }

      loadNext() {
        return Module.meshLoaderLoadNext(this.ptr);
      }

      done() {
        return Module.meshLoaderDone(this.ptr);
      }

      allocateBuffers() {
        var attrInfo = Module.meshLoaderGetAttributes(this.ptr);
        var vertexCount = this.uniqueVertexCount;
        /**
         * We support the following attributes: 'position', 'uv', 'normal', 'tangent', and 'index'.
         */

        var bufferDescs = Module.getEmptyMeshBufferDesc();
        var heapBuffers = {};
        var bufferSizes = {};
        Object.keys(attrInfo).forEach(function (name) {
          var byteSize = vertexCount * attrInfo[name].elemSize;
          assertInteger(byteSize / Float32Array.BYTES_PER_ELEMENT);
          bufferSizes[name] = byteSize;
        });
        Object.keys(attrInfo).forEach(function (name) {
          var buffer = getBufferForAttribute(name, bufferSizes[name], Float32Array);
          var desc = bufferDescs[name];
          heapBuffers[name] = buffer;
          desc.ptr = buffer.ofs; // Emscripten heap offset

          desc.elemSize = attrInfo[name].elemSize; // Size of a single element

          desc.size = vertexCount; // Number of elements

          desc.stride = desc.elemSize; // Distance (in bytes) between consecutive elements

          desc.flags = 0; // 0: cached memory, 1: uncached memory
        });
        var indexCount = this.indexCount;
        var indexBytes = vertexCount < 1 << 16 ? 2 : 4;

        if (indexCount === 0) {
          throw new Error('Mesh index count was zero!');
        }

        var indexType = indexBytes === 2 ? Uint16Array : Uint32Array;
        var indexBufferSize = indexCount * indexBytes;
        var indexBuffer = getBufferForAttribute('index', indexBufferSize, indexType);
        var index = {};
        index.elemSize = indexBytes;
        index.ptr = indexBuffer.ofs;
        index.size = indexCount;
        index.stride = index.elemSize;
        index.flags = 0;
        heapBuffers['index'] = indexBuffer;
        bufferSizes['index'] = indexBufferSize;
        bufferDescs['index'] = index;
        var views = {};
        Object.keys(heapBuffers).forEach(function (name) {
          views[name] = new BufferView(heapBuffers[name], 0, bufferSizes[name]);
        });
        return {
          buffers: views,
          desc: bufferDescs
        };
      }

      get uniqueVertexCount() {
        return Module.meshLoaderUniqueVertexCount(this.ptr);
      }

      get indexCount() {
        return Module.meshLoaderIndexCount(this.ptr);
      }

      get attributes() {
        return Module.meshLoaderGetAttributes(this.ptr);
      }

      get material() {
        return Module.meshLoaderGetMaterial(this.ptr);
      }

      get bounds() {
        Module.meshLoaderGetBounds(this.ptr, boundsBuffer.ofs);
        var aabb = boundsBuffer.floats();
        return [[aabb[0], aabb[1], aabb[2]], [aabb[3], aabb[4], aabb[5]]];
      }

    }

    class Runtime {
      constructor(client, platformFeatures) {
        this.assets = void 0;
        this.client = void 0;
        this.ptr = void 0;
        this.platformFeatures = void 0;
        this.nextId = void 0;
        this.loader = void 0;
        this.tempTextureBuffer = void 0;
        this.tempTranscodedBuffer = void 0;
        this.debug = void 0;

        /**
         * If no normal map formats are supported then force support for
         * BC5 so that textures get transcoded into an uncompressed format.
         */
        var normalFormats = TextureCapability$1.ETC1 | TextureCapability$1.ASTC | TextureCapability$1.PVRTC1 | TextureCapability$1.BC5;
        var capabilityMask = platformFeatures.capabilityMask;

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
          platformFeatures: platformFeatures
        };
      }

      destroy() {
        this.tempTextureBuffer.destroy();
        this.tempTranscodedBuffer.destroy();
        Module.runtimeDestroy(this.ptr);
        this.client.destroy();
        this.ptr = 0;
      }

      createScene() {
        var scenePtr = Module.runtimeCreateScene(this.ptr);
        return new Scene(scenePtr);
      }

      destroyScene(scene) {
        Module.runtimeDestroyScene(this.ptr, scene.ptr);
      }

      createView() {
        var viewPtr = Module.runtimeCreateView(this.ptr);
        return new View(viewPtr, this.assets);
      }

      destroyView(view) {
        Module.runtimeDestroyView(this.ptr, view.ptr);
      }

      update() {
        Module.runtimeUpdate(this.ptr);
      }

      *getJobs() {
        var _this = this;

        while (true) {
          if (this.loader) {
            if (this.loader.done()) {
              var _job = this.loader.ownerJob; // The buffers allocated by MeshLoader are handed over to the caller.

              _job.data.buffers = this.loader.vertexBuffers.buffers;
              _job.data.desc = this.loader.vertexBuffers.desc;
              _job.data.material = this.assets.get(this.loader.material);
              _job.data.bounds = this.loader.bounds;
              this.loader = undefined;
              yield _job;
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

          var jobPtr = Module.runtimeGetJob(this.ptr); // Terminate the generator when there are no more jobs to process.

          if (jobPtr === 0) {
            return undefined;
          }

          var job = new AssetJob(jobPtr);

          if (job.type === 'CreateMaterial') {
            job.data = Module.jobGetMaterialData(job.ptr);
            job.data.textures = job.data.textures.map(function (id) {
              return _this.assets.get(id);
            });
            yield job;
          } else if (job.type === 'CreateTexture') {
            var info = Module.jobGetTextureData(job.ptr);
            var buffer = this.tempTextureBuffer;
            buffer.ensureSize(info.dataByteSize); // Fill the allocated buffer with texture data

            var success = Module.jobCopyTextureContents(job.ptr, buffer.ofs, buffer.size, false);

            if (!success) {
              job.fail();
              var msg = 'Texture copying failed! Job pointer: ' + job.ptr + ', buffer ofs: ' + buffer.ofs + ', buffer size: ' + buffer.size;
              throw new Error(msg);
            }

            var bufferView = new BufferView(buffer, 0, info.dataByteSize);

            if (this.formatNeedsTranscoding(info.format)) {
              var _formatToArrayType;

              var newInfo = this.downsampleAndTranscodeTexture(info, buffer, this.tempTranscodedBuffer);
              info = newInfo;
              var formatToArrayType = (_formatToArrayType = {}, _defineProperty(_formatToArrayType, TextureFormat.RGBA32, Uint8Array), _defineProperty(_formatToArrayType, TextureFormat.RGB565, Uint16Array), _defineProperty(_formatToArrayType, TextureFormat.RG8, Uint8Array), _defineProperty(_formatToArrayType, TextureFormat.RG16F, Uint16Array), _formatToArrayType);
              bufferView = new BufferView(this.tempTranscodedBuffer, 0, info.dataByteSize);
              bufferView.type = formatToArrayType[info.format];
            } // Convert internal enums to string constants


            info.format = TextureFormatNames[info.format];
            info.colorSpace = ColorSpaceNames[info.colorSpace];
            info.textureType = TextureTypeNames[info.textureType];
            this.debug.textureFormatsInUse.add(info.format);
            job.data = {
              info: info,
              buffer: bufferView
            };
            yield job;
          } else if (job.type === 'CreateMesh') {
            // Mesh jobs create decompression work that needs to be done first.
            this.loader = new MeshLoader(Module.jobGetMeshLoader(job.ptr), job);
            this.loader.vertexBuffers = this.loader.allocateBuffers();
            this.loader.setBuffers(this.loader.vertexBuffers.desc);
            yield undefined;
          } else if (job.jobType === 'Destroy') {
            // The handler gets a reference to the asset object in 'job.data'
            job.data = this.assets.get(job.userPointer);
            yield job;
          } else {
            throw new Error("Job wasn't handled correctly");
          }
        }
      }

      handleJobs(handlers, timeLimit) {
        var startTime = performance.now();

        for (var job of this.getJobs()) {
          // If job is 'undefined' it means a mesh is still decompressing
          if (job) {
            try {
              handlers[job.type](job);
            } catch (error) {
              job.fail();
              throw error;
            }
          } // We always process at least one job before checking the time


          if (performance.now() - startTime > timeLimit) {
            break;
          }
        }
      }

      addAsset(job, asset) {
        // AssetJob IDs are just an increasing 32-bit series
        var userPtr = this.nextId;
        this.nextId = this.nextId + 1 | 0;

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


      removeAsset(job, asset) {
        var id = job.userPointer;

        if (this.assets.has(id)) {
          this.assets["delete"](id);
        }

        job.finish(Module.JobResult.Success, 0);
      }

      failJob(job) {
        job.finish(Module.JobResult.Failure, 0);
      }

      formatNeedsTranscoding(format) {
        var flags = this.platformFeatures.capabilityMask;

        switch (format) {
          case TextureFormat.BC1:
            if (flags & TextureCapability.BC1) {
              return false;
            }

            break;

          case TextureFormat.BC3:
            if (flags & TextureCapability.BC3) {
              return false;
            }

            break;

          case TextureFormat.BC4:
            if (flags & TextureCapability.BC4) {
              return false;
            }

            break;

          case TextureFormat.BC5:
            if (flags & TextureCapability.BC5) {
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

        if (newFormat === TextureFormat.COUNT) {
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

      getDebugInfo() {
        return Module.runtimeGetDebugInfo(this.ptr);
      }

    } // Expose only runtime for instantiation


    return {
      createRuntime: function createRuntime(features) {
        return new Runtime(new Client(), features);
      }
    };
  };

  /**
   * Returns a library instance that uses the Emscripten resources of "Module".
   */
  function instantiate(Module) {
    var API_VERSION = 'api/v2';

    var apicall = function apicall(endPoint, path, options) {
      var buildURL = function buildURL(endPoint, path) {
        var url = endPoint.url;

        if (url.substr(-1) !== '/') {
          url += '/';
        }

        url += API_VERSION;
        url += path;
        return url;
      };

      var url = buildURL(endPoint, path);
      var init = Object.assign({
        method: 'GET',
        headers: {
          'Umbra-Client': 'UmbraJS',
          Authorization: 'Basic ' + btoa(endPoint.key + ':') // 'Umbra-Device' : '{}'

        },
        mode: 'cors'
      }, options);
      return fetch(url, init).then(function (response) {
        if (!response.ok) {
          // FIXME: handle http errors better
          throw new Error('HTTP error, status = ' + response.status);
        }

        return response.json();
      });
    };

    var lib = {};

    lib.getProjects = function (token) {
      var endPoint = Module.parseCloudCredentials(token);

      if (endPoint.key === '') {
        throw new Error("Couldn't parse token " + token);
      }

      return apicall(endPoint, '/projects', {});
    };
    /**
     * Queries supported texture formats and also enables the relevant WebGL extensions.
     */


    lib.getPlatformFeatures = function (gl) {
      var flags = 0; // We accumulate a texture format bitmask here

      var formats$1 = new Set(); // Will hold all supported format names

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
        mask: TextureCapability.BC1 | TextureCapability.BC2 | TextureCapability.BC3,
        names: ['bc1', 'bc2', 'bc3']
      }], ['WEBGL_compressed_texture_s3tc_srgb', {
        mask: TextureCapability.BC1 | TextureCapability.BC2 | TextureCapability.BC3,
        names: ['bc1', 'bc2', 'bc3']
      }], ['WEBGL_compressed_texture_rgtc', {
        mask: TextureCapability.BC4 | TextureCapability.BC5,
        names: ['bc4', 'bc5']
      }], ['WEBGL_compressed_texture_pvrtc', {
        mask: TextureCapability.PVRTC1,
        names: ['pvrtc1_rgb4', 'pvrtc1_rgba4']
      }], ['WEBGL_compressed_texture_etc1', {
        mask: TextureCapability.ETC1,
        names: ['etc1_rgb']
      }], ['WEBGL_compressed_texture_astc', {
        mask: TextureCapability.ASTC,
        names: ['astc_4x4']
      }]]);

      for (var key of mapping.keys()) {
        if (extNames.includes(key)) {
          gl.getExtension(extStrings.get(key));
          var value = mapping.get(key);
          flags |= value.mask;
          value.names.forEach(function (name) {
            return formats$1.add(name);
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
        capabilityMask: flags,
        formats: _toConsumableArray(formats$1),
        srgb: supportsSRGB,
        halfFloat: supportsHalfFloat
      };
    };

    lib.getIDs = function (args) {
      // The application can connect with either direct IDs or names
      if ('projectID' in args && 'modelID' in args) {
        return Promise.resolve({
          project: args.projectID,
          model: args.modelID
        });
      } else if ('project' in args && 'model' in args) {
        var token = args.token,
            project = args.project,
            model = args.model;
        return lib.getProjects(token).then(function (projects) {
          var proj = projects.find(function (p) {
            return p.name === project;
          });
          var model = proj.models.find(function (m) {
            return m.name === model;
          });

          if (!proj) {
            var names = projects.map(function (p) {
              return p.name;
            });
            throw new Error('Couldn\'t find a project with name "' + project + '". Only found the following: ' + names);
          }

          if (!model) {
            var _names = proj.models.map(function (m) {
              return m.name;
            });

            throw new Error('Couldn\'t find a model with name "' + model + '". Only found the following: ' + _names);
          }

          return {
            project: proj.id,
            model: model.id
          };
        });
      } else {
        throw new Error('Invalid project & model ID combination.\nYou should define either both "projectID" and "modelID" or "project" and "model"');
      }
    }; // Access to the Emscripten module is needed for deinitialization


    lib.nativeModule = Module; // Allow access to API classes

    var classes = create(Module);
    lib.createRuntime = classes.createRuntime;

    lib.getStreamingInfo = function () {
      return {
        minBytesDownloaded: lib.nativeModule.minBytesDownloaded,
        maxBytesDownloaded: lib.nativeModule.maxBytesDownloaded
      };
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
    Object.values(Umbra.nativeModule.wgetRequests).forEach(function (req) {
      req.abort();
    });

    try {
      Umbra.nativeModule.systemExit();
    } catch (e) {
      if (e.name !== 'ExitStatus') {
        throw e;
      }
    }
  };

  /* eslint  @typescript-eslint/camelcase: 0 */

  function makeFormat(format, type, compressed) {
    return {
      format: format,
      type: type,
      compressed: compressed
    };
  }

  var ThreeFormats = {
    rgb24: makeFormat(THREE.RGBFormat, THREE.UnsignedByteType, false),
    rgba32: makeFormat(THREE.RGBAFormat, THREE.UnsignedByteType, false),
    rgb565: makeFormat(THREE.RGBFormat, THREE.UnsignedShort565Type, false),
    rg8: makeFormat(THREE.LuminanceAlphaFormat, THREE.UnsignedByteType, false),
    rg16f: makeFormat(THREE.LuminanceAlphaFormat, THREE.HalfFloatType, false),
    bc1: makeFormat(THREE.RGBA_S3TC_DXT1_Format, THREE.UnsignedByteType, true),
    bc3: makeFormat(THREE.RGBA_S3TC_DXT5_Format, THREE.UnsignedByteType, true),
    etc1_rgb: makeFormat(THREE.RGB_ETC1_Format, THREE.UnsignedByteType, true),
    astc_4x4: makeFormat(THREE.RGBA_ASTC_4x4_Format, THREE.UnsignedByteType, true),
    pvrtc1_rgb4: makeFormat(THREE.RGB_PVRTC_4BPPV1_Format, THREE.UnsignedByteType, true)
  };

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var normalmapChunk = "\n#ifdef USE_NORMALMAP\n#ifdef USE_TANGENT\n\nvec3 tangentToWorld2 = normal;\nvec3 tangentToWorld0 = normalize(tangent - tangentToWorld2 * dot(tangentToWorld2, tangent));\n\n#ifdef UMBRA_FLIP_TANGENT\nvec3 tangentToWorld1 = normalize(cross(tangentToWorld0, tangentToWorld2));\n#else\nvec3 tangentToWorld1 = normalize(cross(tangentToWorld2, tangentToWorld0));\n#endif\n\n#if defined(UMBRA_TEXTURE_SUPPORT_BC5) || defined(UMBRA_TEXTURE_SUPPORT_ASTC)\nnormal.xy = texture2D(normalMap, vUv).xy * 2.0 - 1.0;\nnormal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));\n#elif defined(UMBRA_TEXTURE_SUPPORT_BC3)\nnormal.xy = texture2D(normalMap, vUv).yw * 2.0 - 1.0;\nnormal.z = sqrt(1.0 - clamp(dot(normal.xy, normal.xy), 0.0, 1.0));\n#else\nnormal.xyz = texture2D(normalMap, vUv).xyz;\nnormal.xy *= 2.0;\nnormal.xy -= 1.0;\nnormal = normalize(normal);\n#endif\n\nnormal = tangentToWorld0 * normal.x + tangentToWorld1 * normal.y + tangentToWorld2 * normal.z;\nnormal = normalize(normal);\n#endif\n#endif\n\n";
  var metalnessMapChunk = "\nfloat metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\nvec4 texelMetalness = texture2D( metalnessMap, vUv );\nmetalnessFactor *= texelMetalness.r;\n#endif\n"; // The BSDF function (see 'bsdfs.glsl') squares the roughness so we don't need to do it here.

  var roughnessMapChunk = "\nfloat roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\nvec4 texelRoughness = texture2D( roughnessMap, vUv );\nfloat roughness = 1.0 - texelRoughness.g;\nroughnessFactor *= roughness;\n#endif\n";
  /**
   * ShaderPatcher is a preprocessor class that replaces the default PBR texture read
   * shader chunks with the correct Umbra versions. Doing it this way instead of completely
   * custom shaders allows the application to use its own materials with Umbrafied models.
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
      this.usedList = void 0;
      this.freeList = void 0;
      this.usedList = [];
      this.freeList = [];
    }

    allocate(makeFunc) {
      var obj;

      if (this.freeList.length > 0) {
        obj = this.freeList.pop();
      } else {
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

  class Model extends THREE.Object3D {
    // User editable config
    // Streaming model quality. Ranges from 0 to 1.
    // We need to present ourselves as a LOD object to get the update() call
    // Temporary values we don't want to reallocate every frame
    constructor(runtime, _scene, _renderer, features) {
      super();
      this.quality = 0.5;
      this.opaqueMaterial = new THREE.MeshBasicMaterial();
      this.wireframe = false;
      this.freeze = false;
      this.isLOD = true;
      this.autoUpdate = true;
      this.name = 'UmbraModel';
      this.renderer = void 0;
      this.materialPool = new ObjectPool();
      this.cameraToView = new Map();
      this.viewLastUsed = new Map();
      this.shaderPatcher = void 0;
      this.stats = {
        numVisible: 0,
        numShadowCasters: 0,
        numCachedMaterials: 0,
        numAssets: 0
      };
      this.umbra = void 0;
      this.matrixWorldInverse = new THREE.Matrix4();
      this.projScreenMatrix = new THREE.Matrix4();
      this.cameraWorldPosition = new THREE.Vector3();
      this.tempVector = new THREE.Vector3();
      this.dirVector = new THREE.Vector3();

      this.update = function (camera) {
        var _this = this;

        var scene;

        if (this.freeze) {
          return;
        }

        this.traverseAncestors(function (obj) {
          if (obj.isScene) {
            scene = obj;
          }
        });

        if (!scene && !scene.isScene) {
          console.log('No parent scene found');
          return;
        }

        function findLights(scene) {
          var lights = [];
          scene.traverseVisible(function (obj) {
            if (obj.isDirectionalLight && obj.castShadow) {
              lights.push(obj);
            }
          });
          return lights;
        }

        var lights = [];

        if (this.renderer.shadowMap.enabled) {
          lights = findLights(scene);
        }

        var view = this.cameraToView.get(camera);

        if (!view) {
          view = this.umbra.runtime.createView();
          this.cameraToView.set(camera, view);
        }

        var frame = this.renderer.info.render.frame;
        this.viewLastUsed.set(view, frame);
        this.pruneOldViews(frame);
        this.umbra.scene.update(this.matrixWorld.elements); // If we are using a PBR material then we might need to flip the tangent vector

        if (typeof this.opaqueMaterial.normalMapType !== 'undefined') {
          // TODO(pvaananen): Would be nice to avoid recalculating the determinant every frame.
          var flip = this.matrixWorld.determinant() < 0;

          if (flip !== this.shaderPatcher.flipTangent) {
            this.shaderPatcher.flipTangent = flip;
            this.materialPool.clear();
          }
        }

        this.matrixWorldInverse.getInverse(camera.matrixWorld);
        this.projScreenMatrix.multiplyMatrices(camera.projectionMatrix, this.matrixWorldInverse);
        var dir = this.dirVector;
        var vector3 = this.tempVector;
        var lightDirections = lights.map(function (light) {
          dir.setFromMatrixPosition(light.target.matrixWorld);
          vector3.setFromMatrixPosition(light.matrixWorld);
          dir.sub(vector3);
          return [dir.x, dir.y, dir.z];
        }, lights); // By default we stream in meshes around the camera, but the user can override it too.

        if (camera.umbraStreamingPosition) {
          this.cameraWorldPosition.copy(camera.umbraStreamingPosition);
        } else {
          camera.getWorldPosition(this.cameraWorldPosition);
        }

        var pos = this.cameraWorldPosition;
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
          _this.children.pop(); // Add the shadow casters


          for (var _i = 0; _i < shadowCasters.length; _i++) {
            _this.children.push(shadowCasters[_i]);
          }
        };

        this.materialPool.freeAll(function (mat) {
          // Remove references to textures so GC can release the three.js objects
          delete mat.map;
          delete mat.normalMap;
          delete mat.metalnessMap;
          delete mat.roughnessMap;
        });
        var batchSize = 200;
        var visible = [];

        do {
          visible = view.getVisible(batchSize);

          var _loop = function _loop(_i2) {
            var _ref = visible[_i2].mesh,
                materialDesc = _ref.materialDesc,
                geometry = _ref.geometry; // Fetch a new material from the pool if we already have free ones. This avoids
            // extra allocations and more importantly 'onBeforeCompile' calls.

            var material = _this.materialPool.allocate(function () {
              return _this.opaqueMaterial.clone();
            });

            material.wireframe = _this.wireframe;
            material.transparent = materialDesc.transparent;

            material.onBeforeCompile = function (shader, renderer) {
              /**
               * If the original material already had a custom preprocessor callback we need to call
               * that first. We need to use 'apply' in case the callback uses 'this' reference to
               * access some material properties.
               */
              if (_this.opaqueMaterial.onBeforeCompile) {
                _this.opaqueMaterial.onBeforeCompile.apply(material, [shader, renderer]);
              }

              _this.shaderPatcher.process(shader, renderer);
            };

            var diffuseMap = materialDesc.textures[formats.TextureType.DIFFUSE];
            var normalMap = materialDesc.textures[formats.TextureType.NORMAL];
            var metalglossMap = materialDesc.textures[formats.TextureType.SPECULAR];

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
             * gets cleared every frame. However if this still causes too much allocations
             * an object pool could help.
             */


            var mesh = new THREE.Mesh(geometry, material);
            mesh.isUmbraMesh = true;
            mesh.matrixWorld.copy(_this.matrixWorld);
            mesh.castShadow = _this.castShadow;
            mesh.receiveShadow = _this.receiveShadow;
            mesh.visible = true;

            _this.children.push(mesh);

            if ((visible[_i2].mask & 0x01) === 0) {
              shadowCasters.push(mesh);
              mesh.frustumCulled = true;
            } else {
              _this.children.push(mesh);

              mesh.frustumCulled = false;
            }
          };

          for (var _i2 = 0; _i2 < visible.length; _i2++) {
            _loop(_i2);
          }

          this.stats.numVisible += visible.length;
        } while (visible.length === batchSize);

        this.stats.numShadowCasters = shadowCasters.length;
        this.stats.numCachedMaterials = this.materialPool.usedList.length + this.materialPool.freeList.length;

        if (shadowCasters.length > 0) {
          this.children.push(proxy);
        }
      };

      this.renderer = _renderer;
      this.shaderPatcher = new ShaderPatcher(features.formats); // We need to flip the Z-axis since models are stored in "left-handed Y is up" coordinate system

      this.scale.set(1.0, 1.0, -1.0); // Add API objects under their own object for clarity

      this.umbra = {
        runtime: runtime,
        scene: _scene
      };
    }

    getInfo() {
      var info = {
        connected: this.umbra.scene.isConnected()
      };

      if (info.connected) {
        info['sceneInfo'] = this.umbra.scene.getInfo();
      }

      Object.assign(info, this.stats);
      return info;
    }

    getBounds() {
      if (!this.umbra.scene.isConnected()) {
        return undefined;
      }

      var info = this.umbra.scene.getInfo();
      var bounds = info.bounds;
      var min = bounds.min;
      var max = bounds.max;
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

    pruneOldViews(frame) {
      /**
       * We get no notification when cameras are removed from the scene graph
       * so we'll go and remove old views.
       */
      for (var _ref2 of this.viewLastUsed) {
        var _ref3 = _slicedToArray(_ref2, 2);

        var view = _ref3[0];
        var lastUsed = _ref3[1];

        if (frame - lastUsed > 1000) {
          for (var _ref4 of this.cameraToView) {
            var _ref5 = _slicedToArray(_ref4, 2);

            var cam = _ref5[0];
            var view2 = _ref5[1];

            if (view2 === view) {
              this.cameraToView["delete"](cam);
              break;
            }
          }

          this.umbra.runtime.destroyView(view);
          this.viewLastUsed["delete"](view);
        }
      }
    }

    dispose() {
      for (var view of this.cameraToView.values()) {
        this.umbra.runtime.destroyView(view);
      } // Remove all Umbra meshes from children


      this.children = this.children.filter(function (x) {
        return !x.isUmbraMesh;
      }); // Dispose all cached materials

      this.materialPool.freeAll(function (mat) {
        return mat.dispose();
      }); // We don't dispose mesh geometries here because they are managed by the Runtime

      this.umbra.runtime.destroyScene(this.umbra.scene); // Runtime must be manually freed by the user with .dispose() of the API object
    }

  }

  function makeBoundingSphere(aabb) {
    var min = aabb[0];
    var max = aabb[1];
    var size = new THREE.Vector3(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
    var pos = new THREE.Vector3(min[0] + size.x * 0.5, min[1] + size.y * 0.5, min[2] + size.z * 0.5);
    return new THREE.Sphere(pos, size.length());
  }

  function initWithThreeJS(renderer, userConfig) {
    if (!renderer) {
      throw new TypeError('"renderer" should be of type THREE.WebGLRenderer');
    }

    return initUmbra(userConfig).then(function (Umbra) {
      var context; // three.js r106 has no 'getContext'

      if ('getContext' in renderer) {
        context = renderer.getContext();
      } else {
        context = renderer.context;
      }

      var features = Umbra.getPlatformFeatures(context); // Three.js does not support BC5 compressed formats so we manually disable them.

      features.capabilityMask &= ~formats.TextureCapability.BC5;
      var runtime = Umbra.createRuntime(features);
      /**
       * Creating a model is an asynchronous operation because we might need to query the Project API
       * to map the given string names into numeric IDs. If IDs or URL are used then the promise will
       * resolve immediately.
       */

      var createModel = function createModel(cloudArgs) {
        var scene = runtime.createScene();
        return new Promise(function (resolve, reject) {
          try {
            if ('url' in cloudArgs) {
              scene.connectWithURL(cloudArgs.url);
              resolve(new Model(runtime, scene, renderer, features));
            } else if ('token' in cloudArgs) {
              return Umbra.getIDs(cloudArgs).then( // on resolve
              function (IDs) {
                if ('apiURL' in cloudArgs) {
                  scene.connectToCustomAPI(cloudArgs.token, IDs.project, IDs.model, cloudArgs.apiURL);
                } else {
                  scene.connect(cloudArgs.token, IDs.project, IDs.model);
                }

                resolve(new Model(runtime, scene, renderer, features));
              }, // on reject
              function () {
                var args = cloudArgs;
                throw new Error("Couldn't fetch IDs matching arguments ".concat(args.project, " and ").concat(args.model));
              });
            } else {
              throw new Error('Invalid connection arguments');
            }
          } catch (e) {
            runtime.destroyScene(scene);
            reject(e);
          }
        });
      };
      /*
       * This launches new downloads and hands out generated assets to three.js.
       * Should be called at the beginning of a frame.
       */


      var update = function update() {
        var timeBudget = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var handlers = {
          CreateMaterial: function CreateMaterial(job) {
            runtime.addAsset(job, job.data);
          },
          DestroyMaterial: function DestroyMaterial(job) {
            runtime.removeAsset(job, job.data);
          },
          CreateTexture: function CreateTexture(job) {
            var info = job.data.info;
            var buffer = job.data.buffer;
            var glformat;

            if (ThreeFormats.hasOwnProperty(info.format)) {
              glformat = ThreeFormats[info.format];
            }

            if (!glformat) {
              // Add a dummy object for unknown formats. They will appear as a solid black color.
              console.log('Unknown texture format', info.format);
              runtime.addAsset(job, {
                isTexture: false
              });
              return;
            } // eslint-disable-next-line new-cap


            var pixelData = new buffer.type(buffer.getArray().slice());
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
            /**
             * A workaround for the case where we directly output colors in gamma space.
             * We make diffuse textures linear to avoid gamma expansion at texture fetch time.
             * This is slightly wrong because texture filtering and shading will be done
             * in gamma space, but this behavior is what people usually expect.
             */

            if (info.textureType === 'diffuse' && !renderer.gammaOutput) {
              tex.encoding = THREE.LinearEncoding;
            } else {
              tex.encoding = info.colorSpace === 'linear' ? THREE.LinearEncoding : THREE.sRGBEncoding;
            }

            tex.needsUpdate = true;
            runtime.addAsset(job, tex);
          },
          DestroyTexture: function (_DestroyTexture) {
            function DestroyTexture(_x) {
              return _DestroyTexture.apply(this, arguments);
            }

            DestroyTexture.toString = function () {
              return _DestroyTexture.toString();
            };

            return DestroyTexture;
          }(function (job) {
            // Free texture data only if it's not a dummy texture
            if (job.data.isTexture) {
              job.data.dispose();
            }

            runtime.removeAsset(job, job.data);
          }),
          CreateMesh: function (_CreateMesh) {
            function CreateMesh(_x2) {
              return _CreateMesh.apply(this, arguments);
            }

            CreateMesh.toString = function () {
              return _CreateMesh.toString();
            };

            return CreateMesh;
          }(function (job) {
            /**
             * The mesh creation job gives us all the vertex data in job.data.buffers.
             * The buffers are only valid during this handler, and the memory will be
             * reused for other meshes later. Therefore we make copies of the arrays
             * for three.js which is something we would have to do anyway.
             */
            var geometry = new THREE.BufferGeometry();
            var indexArray = job.data.buffers['index'].getArray();
            var indices = Array.from(indexArray);
            geometry.setIndex(indices);
            geometry.boundingSphere = makeBoundingSphere(job.data.bounds);
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
            Object.keys(attribs).forEach(function (name) {
              var buffer = job.data.buffers[name];

              if (buffer) {
                var array = buffer.getArray();
                var attrib = new THREE.Float32BufferAttribute(array.slice(), attribs[name].components);
                geometry.addAttribute(name, attrib);
              }
            });
            var meshDescriptor = {
              geometry: geometry,
              materialDesc: job.data.material
            };
            runtime.addAsset(job, meshDescriptor);
          }),
          DestroyMesh: function DestroyMesh(job) {
            var meshDesc = job.data; // Tell Umbra's runtime that this asset doesn't exist anymore and finish the job

            runtime.removeAsset(job, meshDesc); // Release three.js's resources

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


      function getStats() {
        return {
          maxBytesDownloaded: Umbra.nativeModule.maxBytesDownloaded,
          minBytesDownloaded: Umbra.nativeModule.minBytesDownloaded
        };
      }

      return {
        createModel: createModel,
        getStats: getStats,
        update: update,
        dispose: function dispose() {
          runtime.assets.forEach(function (asset, userPtr) {
            // TODO: Use separate types for assets instead
            if ('geometry' in asset) {
              asset.geometry.dispose();
            }

            if ('dispose' in asset) {
              asset.dispose();
            }
          });
          runtime.destroy();
          runtime = undefined;
          deinitUmbra(Umbra);
        },
        lib: Umbra,
        runtime: runtime
      };
    });
  }

  exports.initWithThreeJS = initWithThreeJS;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=umbrajs-three.js.map
