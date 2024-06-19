var gopreact = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // client/main.js
  var main_exports = {};
  __export(main_exports, {
    preload: () => preload,
    render: () => render
  });

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var p = [];
  var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n3, l5) {
    for (var u5 in l5) n3[u5] = l5[u5];
    return n3;
  }
  function w(n3) {
    var l5 = n3.parentNode;
    l5 && l5.removeChild(n3);
  }
  function _(l5, u5, t3) {
    var i5, o4, r3, f5 = {};
    for (r3 in u5) "key" == r3 ? i5 = u5[r3] : "ref" == r3 ? o4 = u5[r3] : f5[r3] = u5[r3];
    if (arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l5 && null != l5.defaultProps) for (r3 in l5.defaultProps) void 0 === f5[r3] && (f5[r3] = l5.defaultProps[r3]);
    return g(l5, f5, i5, o4, null);
  }
  function g(n3, t3, i5, o4, r3) {
    var f5 = { type: n3, props: t3, key: i5, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f5), f5;
  }
  function k(n3) {
    return n3.children;
  }
  function b(n3, l5) {
    this.props = n3, this.context = l5;
  }
  function x(n3, l5) {
    if (null == l5) return n3.__ ? x(n3.__, n3.__i + 1) : null;
    for (var u5; l5 < n3.__k.length; l5++) if (null != (u5 = n3.__k[l5]) && null != u5.__e) return u5.__e;
    return "function" == typeof n3.type ? x(n3) : null;
  }
  function C(n3) {
    var l5, u5;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l5 = 0; l5 < n3.__k.length; l5++) if (null != (u5 = n3.__k[l5]) && null != u5.__e) {
        n3.__e = n3.__c.base = u5.__e;
        break;
      }
      return C(n3);
    }
  }
  function M(n3) {
    (!n3.__d && (n3.__d = true) && i.push(n3) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n3, u5, t3, o4, r3, e3, c5, s5;
    for (i.sort(f); n3 = i.shift(); ) n3.__d && (u5 = i.length, o4 = void 0, e3 = (r3 = (t3 = n3).__v).__e, c5 = [], s5 = [], t3.__P && ((o4 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o4), O(t3.__P, o4, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c5, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s5), o4.__v = r3.__v, o4.__.__k[o4.__i] = o4, j(c5, o4, s5), o4.__e != e3 && C(o4)), i.length > u5 && i.sort(f));
    P.__r = 0;
  }
  function S(n3, l5, u5, t3, i5, o4, r3, f5, e3, c5, s5) {
    var a5, v4, y4, d4, w5, _3 = t3 && t3.__k || p, g4 = l5.length;
    for (u5.__d = e3, $(u5, l5, _3), e3 = u5.__d, a5 = 0; a5 < g4; a5++) null != (y4 = u5.__k[a5]) && "boolean" != typeof y4 && "function" != typeof y4 && (v4 = -1 === y4.__i ? h : _3[y4.__i] || h, y4.__i = a5, O(n3, y4, v4, i5, o4, r3, f5, e3, c5, s5), d4 = y4.__e, y4.ref && v4.ref != y4.ref && (v4.ref && N(v4.ref, null, y4), s5.push(y4.ref, y4.__c || d4, y4)), null == w5 && null != d4 && (w5 = d4), 65536 & y4.__u || v4.__k === y4.__k ? (e3 && !e3.isConnected && (e3 = x(v4)), e3 = I(y4, e3, n3)) : "function" == typeof y4.type && void 0 !== y4.__d ? e3 = y4.__d : d4 && (e3 = d4.nextSibling), y4.__d = void 0, y4.__u &= -196609);
    u5.__d = e3, u5.__e = w5;
  }
  function $(n3, l5, u5) {
    var t3, i5, o4, r3, f5, e3 = l5.length, c5 = u5.length, s5 = c5, a5 = 0;
    for (n3.__k = [], t3 = 0; t3 < e3; t3++) r3 = t3 + a5, null != (i5 = n3.__k[t3] = null == (i5 = l5[t3]) || "boolean" == typeof i5 || "function" == typeof i5 ? null : "string" == typeof i5 || "number" == typeof i5 || "bigint" == typeof i5 || i5.constructor == String ? g(null, i5, null, null, null) : y(i5) ? g(k, { children: i5 }, null, null, null) : void 0 === i5.constructor && i5.__b > 0 ? g(i5.type, i5.props, i5.key, i5.ref ? i5.ref : null, i5.__v) : i5) ? (i5.__ = n3, i5.__b = n3.__b + 1, f5 = L(i5, u5, r3, s5), i5.__i = f5, o4 = null, -1 !== f5 && (s5--, (o4 = u5[f5]) && (o4.__u |= 131072)), null == o4 || null === o4.__v ? (-1 == f5 && a5--, "function" != typeof i5.type && (i5.__u |= 65536)) : f5 !== r3 && (f5 === r3 + 1 ? a5++ : f5 > r3 ? s5 > e3 - r3 ? a5 += f5 - r3 : a5-- : f5 < r3 ? f5 == r3 - 1 && (a5 = f5 - r3) : a5 = 0, f5 !== t3 + a5 && (i5.__u |= 65536))) : (o4 = u5[r3]) && null == o4.key && o4.__e && 0 == (131072 & o4.__u) && (o4.__e == n3.__d && (n3.__d = x(o4)), V(o4, o4, false), u5[r3] = null, s5--);
    if (s5) for (t3 = 0; t3 < c5; t3++) null != (o4 = u5[t3]) && 0 == (131072 & o4.__u) && (o4.__e == n3.__d && (n3.__d = x(o4)), V(o4, o4));
  }
  function I(n3, l5, u5) {
    var t3, i5;
    if ("function" == typeof n3.type) {
      for (t3 = n3.__k, i5 = 0; t3 && i5 < t3.length; i5++) t3[i5] && (t3[i5].__ = n3, l5 = I(t3[i5], l5, u5));
      return l5;
    }
    n3.__e != l5 && (u5.insertBefore(n3.__e, l5 || null), l5 = n3.__e);
    do {
      l5 = l5 && l5.nextSibling;
    } while (null != l5 && 8 === l5.nodeType);
    return l5;
  }
  function H(n3, l5) {
    return l5 = l5 || [], null == n3 || "boolean" == typeof n3 || (y(n3) ? n3.some(function(n4) {
      H(n4, l5);
    }) : l5.push(n3)), l5;
  }
  function L(n3, l5, u5, t3) {
    var i5 = n3.key, o4 = n3.type, r3 = u5 - 1, f5 = u5 + 1, e3 = l5[u5];
    if (null === e3 || e3 && i5 == e3.key && o4 === e3.type && 0 == (131072 & e3.__u)) return u5;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0)) for (; r3 >= 0 || f5 < l5.length; ) {
      if (r3 >= 0) {
        if ((e3 = l5[r3]) && 0 == (131072 & e3.__u) && i5 == e3.key && o4 === e3.type) return r3;
        r3--;
      }
      if (f5 < l5.length) {
        if ((e3 = l5[f5]) && 0 == (131072 & e3.__u) && i5 == e3.key && o4 === e3.type) return f5;
        f5++;
      }
    }
    return -1;
  }
  function T(n3, l5, u5) {
    "-" === l5[0] ? n3.setProperty(l5, null == u5 ? "" : u5) : n3[l5] = null == u5 ? "" : "number" != typeof u5 || v.test(l5) ? u5 : u5 + "px";
  }
  function A(n3, l5, u5, t3, i5) {
    var o4;
    n: if ("style" === l5) if ("string" == typeof u5) n3.style.cssText = u5;
    else {
      if ("string" == typeof t3 && (n3.style.cssText = t3 = ""), t3) for (l5 in t3) u5 && l5 in u5 || T(n3.style, l5, "");
      if (u5) for (l5 in u5) t3 && u5[l5] === t3[l5] || T(n3.style, l5, u5[l5]);
    }
    else if ("o" === l5[0] && "n" === l5[1]) o4 = l5 !== (l5 = l5.replace(/(PointerCapture)$|Capture$/i, "$1")), l5 = l5.toLowerCase() in n3 || "onFocusOut" === l5 || "onFocusIn" === l5 ? l5.toLowerCase().slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + o4] = u5, u5 ? t3 ? u5.u = t3.u : (u5.u = e, n3.addEventListener(l5, o4 ? s : c, o4)) : n3.removeEventListener(l5, o4 ? s : c, o4);
    else {
      if ("http://www.w3.org/2000/svg" == i5) l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l5 && "height" != l5 && "href" != l5 && "list" != l5 && "form" != l5 && "tabIndex" != l5 && "download" != l5 && "rowSpan" != l5 && "colSpan" != l5 && "role" != l5 && l5 in n3) try {
        n3[l5] = null == u5 ? "" : u5;
        break n;
      } catch (n4) {
      }
      "function" == typeof u5 || (null == u5 || false === u5 && "-" !== l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, u5));
    }
  }
  function F(n3) {
    return function(u5) {
      if (this.l) {
        var t3 = this.l[u5.type + n3];
        if (null == u5.t) u5.t = e++;
        else if (u5.t < t3.u) return;
        return t3(l.event ? l.event(u5) : u5);
      }
    };
  }
  function O(n3, u5, t3, i5, o4, r3, f5, e3, c5, s5) {
    var a5, h4, p5, v4, w5, _3, g4, m4, x2, C3, M3, P3, $3, I3, H2, L3 = u5.type;
    if (void 0 !== u5.constructor) return null;
    128 & t3.__u && (c5 = !!(32 & t3.__u), r3 = [e3 = u5.__e = t3.__e]), (a5 = l.__b) && a5(u5);
    n: if ("function" == typeof L3) try {
      if (m4 = u5.props, x2 = (a5 = L3.contextType) && i5[a5.__c], C3 = a5 ? x2 ? x2.props.value : a5.__ : i5, t3.__c ? g4 = (h4 = u5.__c = t3.__c).__ = h4.__E : ("prototype" in L3 && L3.prototype.render ? u5.__c = h4 = new L3(m4, C3) : (u5.__c = h4 = new b(m4, C3), h4.constructor = L3, h4.render = q), x2 && x2.sub(h4), h4.props = m4, h4.state || (h4.state = {}), h4.context = C3, h4.__n = i5, p5 = h4.__d = true, h4.__h = [], h4._sb = []), null == h4.__s && (h4.__s = h4.state), null != L3.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = d({}, h4.__s)), d(h4.__s, L3.getDerivedStateFromProps(m4, h4.__s))), v4 = h4.props, w5 = h4.state, h4.__v = u5, p5) null == L3.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
      else {
        if (null == L3.getDerivedStateFromProps && m4 !== v4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(m4, C3), !h4.__e && (null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(m4, h4.__s, C3) || u5.__v === t3.__v)) {
          for (u5.__v !== t3.__v && (h4.props = m4, h4.state = h4.__s, h4.__d = false), u5.__e = t3.__e, u5.__k = t3.__k, u5.__k.forEach(function(n4) {
            n4 && (n4.__ = u5);
          }), M3 = 0; M3 < h4._sb.length; M3++) h4.__h.push(h4._sb[M3]);
          h4._sb = [], h4.__h.length && f5.push(h4);
          break n;
        }
        null != h4.componentWillUpdate && h4.componentWillUpdate(m4, h4.__s, C3), null != h4.componentDidUpdate && h4.__h.push(function() {
          h4.componentDidUpdate(v4, w5, _3);
        });
      }
      if (h4.context = C3, h4.props = m4, h4.__P = n3, h4.__e = false, P3 = l.__r, $3 = 0, "prototype" in L3 && L3.prototype.render) {
        for (h4.state = h4.__s, h4.__d = false, P3 && P3(u5), a5 = h4.render(h4.props, h4.state, h4.context), I3 = 0; I3 < h4._sb.length; I3++) h4.__h.push(h4._sb[I3]);
        h4._sb = [];
      } else do {
        h4.__d = false, P3 && P3(u5), a5 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
      } while (h4.__d && ++$3 < 25);
      h4.state = h4.__s, null != h4.getChildContext && (i5 = d(d({}, i5), h4.getChildContext())), p5 || null == h4.getSnapshotBeforeUpdate || (_3 = h4.getSnapshotBeforeUpdate(v4, w5)), S(n3, y(H2 = null != a5 && a5.type === k && null == a5.key ? a5.props.children : a5) ? H2 : [H2], u5, t3, i5, o4, r3, f5, e3, c5, s5), h4.base = u5.__e, u5.__u &= -161, h4.__h.length && f5.push(h4), g4 && (h4.__E = h4.__ = null);
    } catch (n4) {
      u5.__v = null, c5 || null != r3 ? (u5.__e = e3, u5.__u |= c5 ? 160 : 32, r3[r3.indexOf(e3)] = null) : (u5.__e = t3.__e, u5.__k = t3.__k), l.__e(n4, u5, t3);
    }
    else null == r3 && u5.__v === t3.__v ? (u5.__k = t3.__k, u5.__e = t3.__e) : u5.__e = z(t3.__e, u5, t3, i5, o4, r3, f5, c5, s5);
    (a5 = l.diffed) && a5(u5);
  }
  function j(n3, u5, t3) {
    u5.__d = void 0;
    for (var i5 = 0; i5 < t3.length; i5++) N(t3[i5], t3[++i5], t3[++i5]);
    l.__c && l.__c(u5, n3), n3.some(function(u6) {
      try {
        n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
          n4.call(u6);
        });
      } catch (n4) {
        l.__e(n4, u6.__v);
      }
    });
  }
  function z(l5, u5, t3, i5, o4, r3, f5, e3, c5) {
    var s5, a5, p5, v4, d4, _3, g4, m4 = t3.props, k5 = u5.props, b4 = u5.type;
    if ("svg" === b4 ? o4 = "http://www.w3.org/2000/svg" : "math" === b4 ? o4 = "http://www.w3.org/1998/Math/MathML" : o4 || (o4 = "http://www.w3.org/1999/xhtml"), null != r3) {
      for (s5 = 0; s5 < r3.length; s5++) if ((d4 = r3[s5]) && "setAttribute" in d4 == !!b4 && (b4 ? d4.localName === b4 : 3 === d4.nodeType)) {
        l5 = d4, r3[s5] = null;
        break;
      }
    }
    if (null == l5) {
      if (null === b4) return document.createTextNode(k5);
      l5 = document.createElementNS(o4, b4, k5.is && k5), r3 = null, e3 = false;
    }
    if (null === b4) m4 === k5 || e3 && l5.data === k5 || (l5.data = k5);
    else {
      if (r3 = r3 && n.call(l5.childNodes), m4 = t3.props || h, !e3 && null != r3) for (m4 = {}, s5 = 0; s5 < l5.attributes.length; s5++) m4[(d4 = l5.attributes[s5]).name] = d4.value;
      for (s5 in m4) if (d4 = m4[s5], "children" == s5) ;
      else if ("dangerouslySetInnerHTML" == s5) p5 = d4;
      else if ("key" !== s5 && !(s5 in k5)) {
        if ("value" == s5 && "defaultValue" in k5 || "checked" == s5 && "defaultChecked" in k5) continue;
        A(l5, s5, null, d4, o4);
      }
      for (s5 in k5) d4 = k5[s5], "children" == s5 ? v4 = d4 : "dangerouslySetInnerHTML" == s5 ? a5 = d4 : "value" == s5 ? _3 = d4 : "checked" == s5 ? g4 = d4 : "key" === s5 || e3 && "function" != typeof d4 || m4[s5] === d4 || A(l5, s5, d4, m4[s5], o4);
      if (a5) e3 || p5 && (a5.__html === p5.__html || a5.__html === l5.innerHTML) || (l5.innerHTML = a5.__html), u5.__k = [];
      else if (p5 && (l5.innerHTML = ""), S(l5, y(v4) ? v4 : [v4], u5, t3, i5, "foreignObject" === b4 ? "http://www.w3.org/1999/xhtml" : o4, r3, f5, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c5), null != r3) for (s5 = r3.length; s5--; ) null != r3[s5] && w(r3[s5]);
      e3 || (s5 = "value", void 0 !== _3 && (_3 !== l5[s5] || "progress" === b4 && !_3 || "option" === b4 && _3 !== m4[s5]) && A(l5, s5, _3, m4[s5], o4), s5 = "checked", void 0 !== g4 && g4 !== l5[s5] && A(l5, s5, g4, m4[s5], o4));
    }
    return l5;
  }
  function N(n3, u5, t3) {
    try {
      "function" == typeof n3 ? n3(u5) : n3.current = u5;
    } catch (n4) {
      l.__e(n4, t3);
    }
  }
  function V(n3, u5, t3) {
    var i5, o4;
    if (l.unmount && l.unmount(n3), (i5 = n3.ref) && (i5.current && i5.current !== n3.__e || N(i5, null, u5)), null != (i5 = n3.__c)) {
      if (i5.componentWillUnmount) try {
        i5.componentWillUnmount();
      } catch (n4) {
        l.__e(n4, u5);
      }
      i5.base = i5.__P = null;
    }
    if (i5 = n3.__k) for (o4 = 0; o4 < i5.length; o4++) i5[o4] && V(i5[o4], u5, t3 || "function" != typeof n3.type);
    t3 || null == n3.__e || w(n3.__e), n3.__c = n3.__ = n3.__e = n3.__d = void 0;
  }
  function q(n3, l5, u5) {
    return this.constructor(n3, u5);
  }
  function B(u5, t3, i5) {
    var o4, r3, f5, e3;
    l.__ && l.__(u5, t3), r3 = (o4 = "function" == typeof i5) ? null : i5 && i5.__k || t3.__k, f5 = [], e3 = [], O(t3, u5 = (!o4 && i5 || t3).__k = _(k, null, [u5]), r3 || h, h, t3.namespaceURI, !o4 && i5 ? [i5] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f5, !o4 && i5 ? i5 : r3 ? r3.__e : t3.firstChild, o4, e3), j(f5, u5, e3);
  }
  function D(n3, l5) {
    B(n3, l5, D);
  }
  function E(l5, u5, t3) {
    var i5, o4, r3, f5, e3 = d({}, l5.props);
    for (r3 in l5.type && l5.type.defaultProps && (f5 = l5.type.defaultProps), u5) "key" == r3 ? i5 = u5[r3] : "ref" == r3 ? o4 = u5[r3] : e3[r3] = void 0 === u5[r3] && void 0 !== f5 ? f5[r3] : u5[r3];
    return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), g(l5.type, e3, i5 || l5.key, o4 || l5.ref, null);
  }
  function G(n3, l5) {
    var u5 = { __c: l5 = "__cC" + a++, __: n3, Consumer: function(n4, l6) {
      return n4.children(l6);
    }, Provider: function(n4) {
      var u6, t3;
      return this.getChildContext || (u6 = [], (t3 = {})[l5] = this, this.getChildContext = function() {
        return t3;
      }, this.shouldComponentUpdate = function(n5) {
        this.props.value !== n5.value && u6.some(function(n6) {
          n6.__e = true, M(n6);
        });
      }, this.sub = function(n5) {
        u6.push(n5);
        var l6 = n5.componentWillUnmount;
        n5.componentWillUnmount = function() {
          u6.splice(u6.indexOf(n5), 1), l6 && l6.call(n5);
        };
      }), n4.children;
    } };
    return u5.Provider.__ = u5.Consumer.contextType = u5;
  }
  n = p.slice, l = { __e: function(n3, l5, u5, t3) {
    for (var i5, o4, r3; l5 = l5.__; ) if ((i5 = l5.__c) && !i5.__) try {
      if ((o4 = i5.constructor) && null != o4.getDerivedStateFromError && (i5.setState(o4.getDerivedStateFromError(n3)), r3 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n3, t3 || {}), r3 = i5.__d), r3) return i5.__E = i5;
    } catch (l6) {
      n3 = l6;
    }
    throw n3;
  } }, u = 0, t = function(n3) {
    return null != n3 && null == n3.constructor;
  }, b.prototype.setState = function(n3, l5) {
    var u5;
    u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n3 && (n3 = n3(d({}, u5), this.props)), n3 && d(u5, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), M(this));
  }, b.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), M(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n3, l5) {
    return n3.__v.__b - l5.__v.__b;
  }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

  // node_modules/preact-render-to-string/dist/index.module.js
  var n2 = /[\s\n\\/='"\0<>]/;
  var o2 = /^(xlink|xmlns|xml)([A-Z])/;
  var i2 = /^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|spellC|src[A-Z]|tabI|useM|item[A-Z]/;
  var a2 = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/;
  var c2 = /["&<]/;
  function s2(e3) {
    if (0 === e3.length || false === c2.test(e3)) return e3;
    for (var t3 = 0, r3 = 0, n3 = "", o4 = ""; r3 < e3.length; r3++) {
      switch (e3.charCodeAt(r3)) {
        case 34:
          o4 = "&quot;";
          break;
        case 38:
          o4 = "&amp;";
          break;
        case 60:
          o4 = "&lt;";
          break;
        default:
          continue;
      }
      r3 !== t3 && (n3 += e3.slice(t3, r3)), n3 += o4, t3 = r3 + 1;
    }
    return r3 !== t3 && (n3 += e3.slice(t3, r3)), n3;
  }
  var l2 = {};
  var u2 = /* @__PURE__ */ new Set(["animation-iteration-count", "border-image-outset", "border-image-slice", "border-image-width", "box-flex", "box-flex-group", "box-ordinal-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-negative", "flex-order", "flex-positive", "flex-shrink", "flood-opacity", "font-weight", "grid-column", "grid-row", "line-clamp", "line-height", "opacity", "order", "orphans", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-miterlimit", "stroke-opacity", "stroke-width", "tab-size", "widows", "z-index", "zoom"]);
  var f2 = /[A-Z]/g;
  function p2(e3) {
    var t3 = "";
    for (var r3 in e3) {
      var n3 = e3[r3];
      if (null != n3 && "" !== n3) {
        var o4 = "-" == r3[0] ? r3 : l2[r3] || (l2[r3] = r3.replace(f2, "-$&").toLowerCase()), i5 = ";";
        "number" != typeof n3 || o4.startsWith("--") || u2.has(o4) || (i5 = "px;"), t3 = t3 + o4 + ":" + n3 + i5;
      }
    }
    return t3 || void 0;
  }
  var m;
  var g2;
  var b2;
  var k2;
  var w2 = [];
  var A2 = Array.isArray;
  var C2 = Object.assign;
  function S2(n3, o4, i5) {
    var a5 = l.__s;
    l.__s = true, m = l.__b, g2 = l.diffed, b2 = l.__r, k2 = l.unmount;
    var c5 = _(k, null);
    c5.__k = [n3];
    try {
      var s5 = j2(n3, o4 || E2, false, void 0, c5, false, i5);
      return Array.isArray(s5) ? s5.join("") : s5;
    } catch (e3) {
      if (e3.then) throw new Error('Use "renderToStringAsync" for suspenseful rendering.');
      throw e3;
    } finally {
      l.__c && l.__c(n3, w2), l.__s = a5, w2.length = 0;
    }
  }
  function L2() {
    this.__d = true;
  }
  var E2 = {};
  function T2(e3, t3) {
    var r3, n3 = e3.type, o4 = true;
    return e3.__c ? (o4 = false, (r3 = e3.__c).state = r3.__s) : r3 = new n3(e3.props, t3), e3.__c = r3, r3.__v = e3, r3.props = e3.props, r3.context = t3, r3.__d = true, null == r3.state && (r3.state = E2), null == r3.__s && (r3.__s = r3.state), n3.getDerivedStateFromProps ? r3.state = C2({}, r3.state, n3.getDerivedStateFromProps(r3.props, r3.state)) : o4 && r3.componentWillMount ? (r3.componentWillMount(), r3.state = r3.__s !== r3.state ? r3.__s : r3.state) : !o4 && r3.componentWillUpdate && r3.componentWillUpdate(), b2 && b2(e3), r3.render(r3.props, r3.state, t3);
  }
  function j2(t3, c5, l5, u5, f5, h4, d4) {
    if (null == t3 || true === t3 || false === t3 || "" === t3) return "";
    if ("object" != typeof t3) return "function" == typeof t3 ? "" : s2(t3 + "");
    if (A2(t3)) {
      var _3, v4 = "";
      f5.__k = t3;
      for (var y4 = 0; y4 < t3.length; y4++) {
        var x2 = t3[y4];
        if (null != x2 && "boolean" != typeof x2) {
          var w5, S3 = j2(x2, c5, l5, u5, f5, h4, d4);
          "string" == typeof S3 ? v4 += S3 : (_3 = _3 || [], v4 && _3.push(v4), v4 = "", Array.isArray(S3) ? (w5 = _3).push.apply(w5, S3) : _3.push(S3));
        }
      }
      return _3 ? (v4 && _3.push(v4), _3) : v4;
    }
    if (void 0 !== t3.constructor) return "";
    t3.__ = f5, m && m(t3);
    var E3, P3, U2, Z = t3.type, F2 = t3.props, M3 = c5;
    if ("function" == typeof Z) {
      if (Z === k) {
        if (F2.tpl) {
          for (var W2 = "", $3 = 0; $3 < F2.tpl.length; $3++) if (W2 += F2.tpl[$3], F2.exprs && $3 < F2.exprs.length) {
            var z3 = F2.exprs[$3];
            if (null == z3) continue;
            "object" != typeof z3 || void 0 !== z3.constructor && !A2(z3) ? W2 += z3 : W2 += j2(z3, c5, l5, u5, t3, h4, d4);
          }
          return W2;
        }
        if (F2.UNSTABLE_comment) return "<!--" + s2(F2.UNSTABLE_comment || "") + "-->";
        P3 = F2.children;
      } else {
        if (null != (E3 = Z.contextType)) {
          var H2 = c5[E3.__c];
          M3 = H2 ? H2.props.value : E3.__;
        }
        if (Z.prototype && "function" == typeof Z.prototype.render) P3 = T2(t3, M3), U2 = t3.__c;
        else {
          t3.__c = U2 = { __v: t3, props: F2, context: M3, setState: L2, forceUpdate: L2, __d: true, __h: [] };
          for (var q2 = 0; U2.__d && q2++ < 25; ) U2.__d = false, b2 && b2(t3), P3 = Z.call(U2, F2, M3);
          U2.__d = true;
        }
        if (null != U2.getChildContext && (c5 = C2({}, c5, U2.getChildContext())), (Z.getDerivedStateFromError || U2.componentDidCatch) && l.errorBoundaries) {
          var B3 = "";
          P3 = null != P3 && P3.type === k && null == P3.key ? P3.props.children : P3;
          try {
            return B3 = j2(P3, c5, l5, u5, t3, h4, d4);
          } catch (e3) {
            return Z.getDerivedStateFromError && (U2.__s = Z.getDerivedStateFromError(e3)), U2.componentDidCatch && U2.componentDidCatch(e3, {}), U2.__d && (P3 = T2(t3, c5), null != (U2 = t3.__c).getChildContext && (c5 = C2({}, c5, U2.getChildContext())), B3 = j2(P3 = null != P3 && P3.type === k && null == P3.key ? P3.props.children : P3, c5, l5, u5, t3, h4, d4)), B3;
          } finally {
            g2 && g2(t3), t3.__ = null, k2 && k2(t3);
          }
        }
      }
      P3 = null != P3 && P3.type === k && null == P3.key && null == P3.props.tpl ? P3.props.children : P3;
      try {
        var I3 = j2(P3, c5, l5, u5, t3, h4, d4);
        return g2 && g2(t3), t3.__ = null, l.unmount && l.unmount(t3), I3;
      } catch (r3) {
        if (!h4 && d4 && d4.onError) {
          var N2 = d4.onError(r3, t3, function(e3) {
            return j2(e3, c5, l5, u5, t3, h4, d4);
          });
          if (void 0 !== N2) return N2;
          var O2 = l.__e;
          return O2 && O2(r3, t3), "";
        }
        if (!h4) throw r3;
        if (!r3 || "function" != typeof r3.then) throw r3;
        var R2 = function e3() {
          try {
            return j2(P3, c5, l5, u5, t3, h4, d4);
          } catch (r4) {
            if (!r4 || "function" != typeof r4.then) throw r4;
            return r4.then(function() {
              return j2(P3, c5, l5, u5, t3, h4, d4);
            }, function() {
              return e3();
            });
          }
        };
        return r3.then(function() {
          return R2();
        });
      }
    }
    var V2, K = "<" + Z, G2 = "";
    for (var J in F2) {
      var Q = F2[J];
      switch (J) {
        case "children":
          V2 = Q;
          continue;
        case "key":
        case "ref":
        case "__self":
        case "__source":
          continue;
        case "htmlFor":
          if ("for" in F2) continue;
          J = "for";
          break;
        case "className":
          if ("class" in F2) continue;
          J = "class";
          break;
        case "defaultChecked":
          J = "checked";
          break;
        case "defaultSelected":
          J = "selected";
          break;
        case "defaultValue":
        case "value":
          switch (J = "value", Z) {
            case "textarea":
              V2 = Q;
              continue;
            case "select":
              u5 = Q;
              continue;
            case "option":
              u5 != Q || "selected" in F2 || (K += " selected");
          }
          break;
        case "dangerouslySetInnerHTML":
          G2 = Q && Q.__html;
          continue;
        case "style":
          "object" == typeof Q && (Q = p2(Q));
          break;
        case "acceptCharset":
          J = "accept-charset";
          break;
        case "httpEquiv":
          J = "http-equiv";
          break;
        default:
          if (o2.test(J)) J = J.replace(o2, "$1:$2").toLowerCase();
          else {
            if (n2.test(J)) continue;
            "-" !== J[4] && "draggable" !== J || null == Q ? l5 ? a2.test(J) && (J = "panose1" === J ? "panose-1" : J.replace(/([A-Z])/g, "-$1").toLowerCase()) : i2.test(J) && (J = J.toLowerCase()) : Q += "";
          }
      }
      null != Q && false !== Q && "function" != typeof Q && (K = true === Q || "" === Q ? K + " " + J : K + " " + J + '="' + s2(Q + "") + '"');
    }
    if (n2.test(Z)) throw new Error(Z + " is not a valid HTML tag name in " + K + ">");
    if (G2 || ("string" == typeof V2 ? G2 = s2(V2) : null != V2 && false !== V2 && true !== V2 && (G2 = j2(V2, c5, "svg" === Z || "foreignObject" !== Z && l5, u5, t3, h4, d4))), g2 && g2(t3), t3.__ = null, k2 && k2(t3), !G2 && D2.has(Z)) return K + "/>";
    var X = "</" + Z + ">", Y = K + ">";
    return Array.isArray(G2) ? [Y].concat(G2, [X]) : "string" != typeof G2 ? [Y, G2, X] : Y + G2 + X;
  }
  var D2 = /* @__PURE__ */ new Set(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]);

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u3;
  var i3;
  var o3 = 0;
  var f3 = [];
  var c3 = [];
  var e2 = l;
  var a3 = e2.__b;
  var v2 = e2.__r;
  var l3 = e2.diffed;
  var m2 = e2.__c;
  var s3 = e2.unmount;
  var d2 = e2.__;
  function h2(n3, t3) {
    e2.__h && e2.__h(r2, n3, o3 || t3), o3 = 0;
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n3 >= u5.__.length && u5.__.push({ __V: c3 }), u5.__[n3];
  }
  function p3(n3) {
    return o3 = 1, y2(D3, n3);
  }
  function y2(n3, u5, i5) {
    var o4 = h2(t2++, 2);
    if (o4.t = n3, !o4.__c && (o4.__ = [i5 ? i5(u5) : D3(void 0, u5), function(n4) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n4);
      t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      var f5 = function(n4, t3, r3) {
        if (!o4.__c.__H) return true;
        var u6 = o4.__c.__H.__.filter(function(n5) {
          return !!n5.__c;
        });
        if (u6.every(function(n5) {
          return !n5.__N;
        })) return !c5 || c5.call(this, n4, t3, r3);
        var i6 = false;
        return u6.forEach(function(n5) {
          if (n5.__N) {
            var t4 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t4 !== n5.__[0] && (i6 = true);
          }
        }), !(!i6 && o4.__c.props === n4) && (!c5 || c5.call(this, n4, t3, r3));
      };
      r2.u = true;
      var c5 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n4, t3, r3) {
        if (this.__e) {
          var u6 = c5;
          c5 = void 0, f5(n4, t3, r3), c5 = u6;
        }
        e3 && e3.call(this, n4, t3, r3);
      }, r2.shouldComponentUpdate = f5;
    }
    return o4.__N || o4.__;
  }
  function j3() {
    for (var n3; n3 = f3.shift(); ) if (n3.__P && n3.__H) try {
      n3.__H.__h.forEach(z2), n3.__H.__h.forEach(B2), n3.__H.__h = [];
    } catch (t3) {
      n3.__H.__h = [], e2.__e(t3, n3.__v);
    }
  }
  e2.__b = function(n3) {
    r2 = null, a3 && a3(n3);
  }, e2.__ = function(n3, t3) {
    n3 && t3.__k && t3.__k.__m && (n3.__m = t3.__k.__m), d2 && d2(n3, t3);
  }, e2.__r = function(n3) {
    v2 && v2(n3), t2 = 0;
    var i5 = (r2 = n3.__c).__H;
    i5 && (u3 === r2 ? (i5.__h = [], r2.__h = [], i5.__.forEach(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.__V = c3, n4.__N = n4.i = void 0;
    })) : (i5.__h.forEach(z2), i5.__h.forEach(B2), i5.__h = [], t2 = 0)), u3 = r2;
  }, e2.diffed = function(n3) {
    l3 && l3(n3);
    var t3 = n3.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f3.push(t3) && i3 === e2.requestAnimationFrame || ((i3 = e2.requestAnimationFrame) || w3)(j3)), t3.__H.__.forEach(function(n4) {
      n4.i && (n4.__H = n4.i), n4.__V !== c3 && (n4.__ = n4.__V), n4.i = void 0, n4.__V = c3;
    })), u3 = r2 = null;
  }, e2.__c = function(n3, t3) {
    t3.some(function(n4) {
      try {
        n4.__h.forEach(z2), n4.__h = n4.__h.filter(function(n5) {
          return !n5.__ || B2(n5);
        });
      } catch (r3) {
        t3.some(function(n5) {
          n5.__h && (n5.__h = []);
        }), t3 = [], e2.__e(r3, n4.__v);
      }
    }), m2 && m2(n3, t3);
  }, e2.unmount = function(n3) {
    s3 && s3(n3);
    var t3, r3 = n3.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n4) {
      try {
        z2(n4);
      } catch (n5) {
        t3 = n5;
      }
    }), r3.__H = void 0, t3 && e2.__e(t3, r3.__v));
  };
  var k3 = "function" == typeof requestAnimationFrame;
  function w3(n3) {
    var t3, r3 = function() {
      clearTimeout(u5), k3 && cancelAnimationFrame(t3), setTimeout(n3);
    }, u5 = setTimeout(r3, 100);
    k3 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n3) {
    var t3 = r2, u5 = n3.__c;
    "function" == typeof u5 && (n3.__c = void 0, u5()), r2 = t3;
  }
  function B2(n3) {
    var t3 = r2;
    n3.__c = n3.__(), r2 = t3;
  }
  function D3(n3, t3) {
    return "function" == typeof t3 ? t3(n3) : t3;
  }

  // node_modules/preact-router/dist/preact-router.mjs
  var a4 = {};
  function c4(n3, t3) {
    for (var r3 in t3) n3[r3] = t3[r3];
    return n3;
  }
  function s4(n3, t3, r3) {
    var i5, o4 = /(?:\?([^#]*))?(#.*)?$/, e3 = n3.match(o4), u5 = {};
    if (e3 && e3[1]) for (var f5 = e3[1].split("&"), c5 = 0; c5 < f5.length; c5++) {
      var s5 = f5[c5].split("=");
      u5[decodeURIComponent(s5[0])] = decodeURIComponent(s5.slice(1).join("="));
    }
    n3 = d3(n3.replace(o4, "")), t3 = d3(t3 || "");
    for (var h4 = Math.max(n3.length, t3.length), v4 = 0; v4 < h4; v4++) if (t3[v4] && ":" === t3[v4].charAt(0)) {
      var l5 = t3[v4].replace(/(^:|[+*?]+$)/g, ""), p5 = (t3[v4].match(/[+*?]+$/) || a4)[0] || "", m4 = ~p5.indexOf("+"), y4 = ~p5.indexOf("*"), U2 = n3[v4] || "";
      if (!U2 && !y4 && (p5.indexOf("?") < 0 || m4)) {
        i5 = false;
        break;
      }
      if (u5[l5] = decodeURIComponent(U2), m4 || y4) {
        u5[l5] = n3.slice(v4).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t3[v4] !== n3[v4]) {
      i5 = false;
      break;
    }
    return (true === r3.default || false !== i5) && u5;
  }
  function h3(n3, t3) {
    return n3.rank < t3.rank ? 1 : n3.rank > t3.rank ? -1 : n3.index - t3.index;
  }
  function v3(n3, t3) {
    return n3.index = t3, n3.rank = function(n4) {
      return n4.props.default ? 0 : d3(n4.props.path).map(l4).join("");
    }(n3), n3.props;
  }
  function d3(n3) {
    return n3.replace(/(^\/+|\/+$)/g, "").split("/");
  }
  function l4(n3) {
    return ":" == n3.charAt(0) ? 1 + "*+?".indexOf(n3.charAt(n3.length - 1)) || 4 : 5;
  }
  var p4 = {};
  var m3 = [];
  var y3 = [];
  var U = null;
  var g3 = { url: R() };
  var k4 = G(g3);
  function R() {
    var n3;
    return "" + ((n3 = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p4).pathname || "") + (n3.search || "");
  }
  function $2(n3, t3) {
    return void 0 === t3 && (t3 = false), "string" != typeof n3 && n3.url && (t3 = n3.replace, n3 = n3.url), function(n4) {
      for (var t4 = m3.length; t4--; ) if (m3[t4].canRoute(n4)) return true;
      return false;
    }(n3) && function(n4, t4) {
      void 0 === t4 && (t4 = "push"), U && U[t4] ? U[t4](n4) : "undefined" != typeof history && history[t4 + "State"] && history[t4 + "State"](null, null, n4);
    }(n3, t3 ? "replace" : "push"), I2(n3);
  }
  function I2(n3) {
    for (var t3 = false, r3 = 0; r3 < m3.length; r3++) m3[r3].routeTo(n3) && (t3 = true);
    return t3;
  }
  function M2(n3) {
    if (n3 && n3.getAttribute) {
      var t3 = n3.getAttribute("href"), r3 = n3.getAttribute("target");
      if (t3 && t3.match(/^\//g) && (!r3 || r3.match(/^_?self$/i))) return $2(t3);
    }
  }
  function b3(n3) {
    return n3.stopImmediatePropagation && n3.stopImmediatePropagation(), n3.stopPropagation && n3.stopPropagation(), n3.preventDefault(), false;
  }
  function W(n3) {
    if (!(n3.ctrlKey || n3.metaKey || n3.altKey || n3.shiftKey || n3.button)) {
      var t3 = n3.target;
      do {
        if ("a" === t3.localName && t3.getAttribute("href")) {
          if (t3.hasAttribute("data-native") || t3.hasAttribute("native")) return;
          if (M2(t3)) return b3(n3);
        }
      } while (t3 = t3.parentNode);
    }
  }
  var w4 = false;
  function D4(n3) {
    n3.history && (U = n3.history), this.state = { url: n3.url || R() };
  }
  c4(D4.prototype = new b(), { shouldComponentUpdate: function(n3) {
    return true !== n3.static || n3.url !== this.props.url || n3.onChange !== this.props.onChange;
  }, canRoute: function(n3) {
    var t3 = H(this.props.children);
    return void 0 !== this.g(t3, n3);
  }, routeTo: function(n3) {
    this.setState({ url: n3 });
    var t3 = this.canRoute(n3);
    return this.p || this.forceUpdate(), t3;
  }, componentWillMount: function() {
    this.p = true;
  }, componentDidMount: function() {
    var n3 = this;
    w4 || (w4 = true, U || addEventListener("popstate", function() {
      I2(R());
    }), addEventListener("click", W)), m3.push(this), U && (this.u = U.listen(function(t3) {
      var r3 = t3.location || t3;
      n3.routeTo("" + (r3.pathname || "") + (r3.search || ""));
    })), this.p = false;
  }, componentWillUnmount: function() {
    "function" == typeof this.u && this.u(), m3.splice(m3.indexOf(this), 1);
  }, componentWillUpdate: function() {
    this.p = true;
  }, componentDidUpdate: function() {
    this.p = false;
  }, g: function(n3, t3) {
    n3 = n3.filter(v3).sort(h3);
    for (var r3 = 0; r3 < n3.length; r3++) {
      var i5 = n3[r3], o4 = s4(t3, i5.props.path, i5.props);
      if (o4) return [i5, o4];
    }
  }, render: function(n3, t3) {
    var e3, u5, f5 = n3.onChange, a5 = t3.url, s5 = this.c, h4 = this.g(H(n3.children), a5);
    if (h4 && (u5 = E(h4[0], c4(c4({ url: a5, matches: e3 = h4[1] }, e3), { key: void 0, ref: void 0 }))), a5 !== (s5 && s5.url)) {
      c4(g3, s5 = this.c = { url: a5, previous: s5 && s5.url, current: u5, path: u5 ? u5.props.path : null, matches: e3 }), s5.router = this, s5.active = u5 ? [u5] : [];
      for (var v4 = y3.length; v4--; ) y3[v4]({});
      "function" == typeof f5 && f5(s5);
    }
    return _(k4.Provider, { value: s5 }, u5);
  } });

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f4 = 0;
  var i4 = Array.isArray;
  function u4(e3, t3, n3, o4, i5, u5) {
    t3 || (t3 = {});
    var a5, c5, p5 = t3;
    if ("ref" in p5) for (c5 in p5 = {}, t3) "ref" == c5 ? a5 = t3[c5] : p5[c5] = t3[c5];
    var l5 = { type: e3, props: p5, key: n3, ref: a5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f4, __i: -1, __u: 0, __source: i5, __self: u5 };
    if ("function" == typeof e3 && (a5 = e3.defaultProps)) for (c5 in a5) void 0 === p5[c5] && (p5[c5] = a5[c5]);
    return l.vnode && l.vnode(l5), l5;
  }

  // client/main.js
  var App = ({ url }) => {
    return /* @__PURE__ */ u4(D4, { url, children: [
      /* @__PURE__ */ u4(About, { path: "/about" }),
      /* @__PURE__ */ u4(Home, { path: "/" })
    ] });
  };
  function Home() {
    const [count, setCount] = p3(0);
    return /* @__PURE__ */ u4("button", { onClick: () => setCount(count + 1), children: count });
  }
  function About() {
    return /* @__PURE__ */ u4("h1", { children: "About" });
  }
  var render = () => D(/* @__PURE__ */ u4(App, {}), document.getElementById("app"));
  var preload = (url) => {
    return S2(/* @__PURE__ */ u4(App, { url }));
  };
  return __toCommonJS(main_exports);
})();
