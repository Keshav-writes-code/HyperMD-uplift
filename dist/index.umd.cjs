;(function (le, Ae) {
  typeof exports == 'object' && typeof module < 'u'
    ? Ae(exports, require('codemirror'))
    : typeof define == 'function' && define.amd
      ? define(['exports', 'codemirror'], Ae)
      : ((le = typeof globalThis < 'u' ? globalThis : le || self),
        Ae((le.HyperMD = {}), le.CodeMirror))
})(this, function (le, Ae) {
  'use strict'
  var Xc = Object.defineProperty
  var Yc = (le, Ae, dn) =>
    Ae in le
      ? Xc(le, Ae, { enumerable: !0, configurable: !0, writable: !0, value: dn })
      : (le[Ae] = dn)
  var Z = (le, Ae, dn) => Yc(le, typeof Ae != 'symbol' ? Ae + '' : Ae, dn)
  function dn(d) {
    const s = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } })
    if (d) {
      for (const u in d)
        if (u !== 'default') {
          const h = Object.getOwnPropertyDescriptor(d, u)
          Object.defineProperty(s, u, h.get ? h : { enumerable: !0, get: () => d[u] })
        }
    }
    return ((s.default = d), Object.freeze(s))
  }
  const ge = dn(Ae)
  typeof Object.assign != 'function' &&
    Object.defineProperty(Object, 'assign', {
      value: function (s, u) {
        if (s == null) throw new TypeError('Cannot convert undefined or null to object')
        for (var h = Object(s), p = 1; p < arguments.length; p++) {
          var m = arguments[p]
          if (m != null)
            for (var x in m) Object.prototype.hasOwnProperty.call(m, x) && (h[x] = m[x])
        }
        return h
      },
      writable: !0,
      configurable: !0,
    })
  class pt {
    constructor(s, u, h = !1, p = 'enabled') {
      ;((this.on_cb = s), (this.off_cb = u), (this.state = h), (this.subkey = p))
    }
    ON(s) {
      return ((this.on_cb = s), this)
    }
    OFF(s) {
      return ((this.off_cb = s), this)
    }
    set(s, u) {
      let h = typeof s == 'object' && s ? s[this.subkey] : s
      ;(u && (h = !!h),
        h !== this.state &&
          ((this.state = h) ? this.on_cb && this.on_cb(h) : this.off_cb && this.off_cb(h)))
    }
    setBool(s) {
      return this.set(s, !0)
    }
    bind(s, u, h) {
      return (
        Object.defineProperty(s, u, {
          get: () => this.state,
          set: (p) => this.set(p, h),
          configurable: !0,
          enumerable: !0,
        }),
        this
      )
    }
  }
  function oo(d, s, u) {
    s = ~~s || 5
    var h = 250
    function p() {
      if (!s--) {
        u && u()
        return
      }
      try {
        if (d()) return
      } catch {}
      ;(setTimeout(p, h), (h *= 2))
    }
    setTimeout(p, 0)
  }
  function pn(d, s) {
    var u = null,
      h = 0,
      p = function () {
        ;(d(), (u = 0))
      },
      m = function () {
        var x = +new Date()
        if (u) {
          if (x < h) return
          clearTimeout(u)
        }
        ;((u = setTimeout(p, s)), (h = x + 100))
      }
    return (
      (m.stop = function () {
        u && (clearTimeout(u), (u = 0))
      }),
      m
    )
  }
  const Fu = ge.addClass,
    Hu = ge.rmClass,
    Ru = ge.contains
  function ao(d, s) {
    var u = new Array(s)
    if (u.fill) u.fill(d)
    else for (let h = 0; h < s; h++) u[h] = d
    return u
  }
  function $t(d, s) {
    for (var u = ''; s-- > 0; ) u += d
    return u
  }
  function Ai(d, s) {
    for (var u = [d], h; (h = u.shift()); )
      for (let p = 0; p < h.length; p++) {
        const m = h[p]
        !m ||
          m.nodeType != Node.ELEMENT_NODE ||
          (s(m), m.children && m.children.length > 0 && u.push(m.children))
      }
  }
  function Ei(d, s, u) {
    var { width: h, height: p } = d.getBoundingClientRect(),
      m = pn(() => {
        var _ = d.getBoundingClientRect(),
          { width: R, height: F } = _
        ;(h != R || p != F) && (s(R, F, h, p), (h = R), (p = F), setTimeout(m, 200))
      }, 100),
      x = null
    function b() {
      ;(x && clearTimeout(x), v || (x = setTimeout(b, 200)), m())
    }
    var v = !1
    function L() {
      ;((v = !0), m.stop(), x && (clearTimeout(x), (x = null)))
      for (let _ = 0; _ < g.length; _++) g[_][0].removeEventListener(g[_][1], m, !1)
    }
    var g = []
    function S(_) {
      const R = _.tagName,
        F = getComputedStyle(_)
      ;(((D) => F.getPropertyValue(D) || '')('resize') != 'none' && (u = !0),
        /^(?:img|video)$/i.test(R)
          ? (_.addEventListener('load', m, !1), _.addEventListener('error', m, !1))
          : /^(?:details|summary)$/i.test(R) && _.addEventListener('click', m, !1))
    }
    return (u || Ai([d], S), u && (x = setTimeout(b, 200)), { check: m, stop: L })
  }
  function so(d) {
    return typeof Symbol == 'function'
      ? Symbol(d)
      : `_
` +
          d +
          `
_` +
          Math.floor(Math.random() * 65535).toString(16)
  }
  var Pu =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof self < 'u'
              ? self
              : {},
    Iu = { exports: {} },
    Ni = { exports: {} },
    uo
  function Zt() {
    return (
      uo ||
        ((uo = 1),
        (function (d, s) {
          ;(function (u, h) {
            d.exports = h()
          })(Pu, function () {
            var u = navigator.userAgent,
              h = navigator.platform,
              p = /gecko\/\d/i.test(u),
              m = /MSIE \d/.test(u),
              x = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(u),
              b = /Edge\/(\d+)/.exec(u),
              v = m || x || b,
              L = v && (m ? document.documentMode || 6 : +(b || x)[1]),
              g = !b && /WebKit\//.test(u),
              S = g && /Qt\/\d+\.\d+/.test(u),
              _ = !b && /Chrome\/(\d+)/.exec(u),
              R = _ && +_[1],
              F = /Opera\//.test(u),
              P = /Apple Computer/.test(navigator.vendor),
              D = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(u),
              C = /PhantomJS/.test(u),
              O = P && (/Mobile\/\w+/.test(u) || navigator.maxTouchPoints > 2),
              N = /Android/.test(u),
              I = O || N || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(u),
              z = O || /Mac/.test(h),
              ce = /\bCrOS\b/.test(u),
              ee = /win/i.test(h),
              Y = F && u.match(/Version\/(\d*\.\d*)/)
            ;(Y && (Y = Number(Y[1])), Y && Y >= 15 && ((F = !1), (g = !0)))
            var ue = z && (S || (F && (Y == null || Y < 12.11))),
              xe = p || (v && L >= 9)
            function X(e) {
              return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*')
            }
            var oe = function (e, t) {
              var r = e.className,
                n = X(t).exec(r)
              if (n) {
                var i = r.slice(n.index + n[0].length)
                e.className = r.slice(0, n.index) + (i ? n[1] + i : '')
              }
            }
            function V(e) {
              for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild)
              return e
            }
            function se(e, t) {
              return V(e).appendChild(t)
            }
            function A(e, t, r, n) {
              var i = document.createElement(e)
              if ((r && (i.className = r), n && (i.style.cssText = n), typeof t == 'string'))
                i.appendChild(document.createTextNode(t))
              else if (t) for (var l = 0; l < t.length; ++l) i.appendChild(t[l])
              return i
            }
            function G(e, t, r, n) {
              var i = A(e, t, r, n)
              return (i.setAttribute('role', 'presentation'), i)
            }
            var q
            document.createRange
              ? (q = function (e, t, r, n) {
                  var i = document.createRange()
                  return (i.setEnd(n || e, r), i.setStart(e, t), i)
                })
              : (q = function (e, t, r) {
                  var n = document.body.createTextRange()
                  try {
                    n.moveToElementText(e.parentNode)
                  } catch {
                    return n
                  }
                  return (n.collapse(!0), n.moveEnd('character', r), n.moveStart('character', t), n)
                })
            function te(e, t) {
              if ((t.nodeType == 3 && (t = t.parentNode), e.contains)) return e.contains(t)
              do if ((t.nodeType == 11 && (t = t.host), t == e)) return !0
              while ((t = t.parentNode))
            }
            function be(e) {
              var t = e.ownerDocument || e,
                r
              try {
                r = e.activeElement
              } catch {
                r = t.body || null
              }
              for (; r && r.shadowRoot && r.shadowRoot.activeElement; )
                r = r.shadowRoot.activeElement
              return r
            }
            function Le(e, t) {
              var r = e.className
              X(t).test(r) || (e.className += (r ? ' ' : '') + t)
            }
            function $e(e, t) {
              for (var r = e.split(' '), n = 0; n < r.length; n++)
                r[n] && !X(r[n]).test(t) && (t += ' ' + r[n])
              return t
            }
            var T = function (e) {
              e.select()
            }
            O
              ? (T = function (e) {
                  ;((e.selectionStart = 0), (e.selectionEnd = e.value.length))
                })
              : v &&
                (T = function (e) {
                  try {
                    e.select()
                  } catch {}
                })
            function y(e) {
              return e.display.wrapper.ownerDocument
            }
            function J(e) {
              return me(e.display.wrapper)
            }
            function me(e) {
              return e.getRootNode ? e.getRootNode() : e.ownerDocument
            }
            function de(e) {
              return y(e).defaultView
            }
            function et(e) {
              var t = Array.prototype.slice.call(arguments, 1)
              return function () {
                return e.apply(null, t)
              }
            }
            function ft(e, t, r) {
              t || (t = {})
              for (var n in e)
                e.hasOwnProperty(n) && (r !== !1 || !t.hasOwnProperty(n)) && (t[n] = e[n])
              return t
            }
            function Re(e, t, r, n, i) {
              t == null && ((t = e.search(/[^\s\u00a0]/)), t == -1 && (t = e.length))
              for (var l = n || 0, o = i || 0; ; ) {
                var a = e.indexOf('	', l)
                if (a < 0 || a >= t) return o + (t - l)
                ;((o += a - l), (o += r - (o % r)), (l = a + 1))
              }
            }
            var Ze = function () {
              ;((this.id = null),
                (this.f = null),
                (this.time = 0),
                (this.handler = et(this.onTimeout, this)))
            }
            ;((Ze.prototype.onTimeout = function (e) {
              ;((e.id = 0),
                e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date()))
            }),
              (Ze.prototype.set = function (e, t) {
                this.f = t
                var r = +new Date() + e
                ;(!this.id || r < this.time) &&
                  (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = r))
              }))
            function Ce(e, t) {
              for (var r = 0; r < e.length; ++r) if (e[r] == t) return r
              return -1
            }
            var De = 50,
              Pe = {
                toString: function () {
                  return 'CodeMirror.Pass'
                },
              },
              tt = { scroll: !1 },
              ir = { origin: '*mouse' },
              kt = { origin: '+move' }
            function St(e, t, r) {
              for (var n = 0, i = 0; ; ) {
                var l = e.indexOf('	', n)
                l == -1 && (l = e.length)
                var o = l - n
                if (l == e.length || i + o >= t) return n + Math.min(o, t - i)
                if (((i += l - n), (i += r - (i % r)), (n = l + 1), i >= t)) return n
              }
            }
            var gt = ['']
            function It(e) {
              for (; gt.length <= e; ) gt.push(ve(gt) + ' ')
              return gt[e]
            }
            function ve(e) {
              return e[e.length - 1]
            }
            function vt(e, t) {
              for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n)
              return r
            }
            function Wt(e, t, r) {
              for (var n = 0, i = r(t); n < e.length && r(e[n]) <= i; ) n++
              e.splice(n, 0, t)
            }
            function Zr() {}
            function _a(e, t) {
              var r
              return (
                Object.create ? (r = Object.create(e)) : ((Zr.prototype = e), (r = new Zr())),
                t && ft(t, r),
                r
              )
            }
            var Hf =
              /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
            function Qi(e) {
              return /\w/.test(e) || (e > '' && (e.toUpperCase() != e.toLowerCase() || Hf.test(e)))
            }
            function Qr(e, t) {
              return t ? (t.source.indexOf('\\w') > -1 && Qi(e) ? !0 : t.test(e)) : Qi(e)
            }
            function Da(e) {
              for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1
              return !0
            }
            var Rf =
              /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
            function Ji(e) {
              return e.charCodeAt(0) >= 768 && Rf.test(e)
            }
            function Ma(e, t, r) {
              for (; (r < 0 ? t > 0 : t < e.length) && Ji(e.charAt(t)); ) t += r
              return t
            }
            function lr(e, t, r) {
              for (var n = t > r ? -1 : 1; ; ) {
                if (t == r) return t
                var i = (t + r) / 2,
                  l = n < 0 ? Math.ceil(i) : Math.floor(i)
                if (l == t) return e(l) ? t : r
                e(l) ? (r = l) : (t = l + n)
              }
            }
            function Pf(e, t, r, n) {
              if (!e) return n(t, r, 'ltr', 0)
              for (var i = !1, l = 0; l < e.length; ++l) {
                var o = e[l]
                ;((o.from < r && o.to > t) || (t == r && o.to == t)) &&
                  (n(Math.max(o.from, t), Math.min(o.to, r), o.level == 1 ? 'rtl' : 'ltr', l),
                  (i = !0))
              }
              i || n(t, r, 'ltr')
            }
            var or = null
            function ar(e, t, r) {
              var n
              or = null
              for (var i = 0; i < e.length; ++i) {
                var l = e[i]
                if (l.from < t && l.to > t) return i
                ;(l.to == t && (l.from != l.to && r == 'before' ? (n = i) : (or = i)),
                  l.from == t && (l.from != l.to && r != 'before' ? (n = i) : (or = i)))
              }
              return n ?? or
            }
            var If = (function () {
              var e =
                  'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
                t =
                  'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111'
              function r(c) {
                return c <= 247
                  ? e.charAt(c)
                  : 1424 <= c && c <= 1524
                    ? 'R'
                    : 1536 <= c && c <= 1785
                      ? t.charAt(c - 1536)
                      : 1774 <= c && c <= 2220
                        ? 'r'
                        : 8192 <= c && c <= 8203
                          ? 'w'
                          : c == 8204
                            ? 'b'
                            : 'L'
              }
              var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                i = /[stwN]/,
                l = /[LRr]/,
                o = /[Lb1n]/,
                a = /[1n]/
              function f(c, k, w) {
                ;((this.level = c), (this.from = k), (this.to = w))
              }
              return function (c, k) {
                var w = k == 'ltr' ? 'L' : 'R'
                if (c.length == 0 || (k == 'ltr' && !n.test(c))) return !1
                for (var E = c.length, M = [], H = 0; H < E; ++H) M.push(r(c.charCodeAt(H)))
                for (var W = 0, j = w; W < E; ++W) {
                  var U = M[W]
                  U == 'm' ? (M[W] = j) : (j = U)
                }
                for (var $ = 0, K = w; $ < E; ++$) {
                  var Q = M[$]
                  Q == '1' && K == 'r'
                    ? (M[$] = 'n')
                    : l.test(Q) && ((K = Q), Q == 'r' && (M[$] = 'R'))
                }
                for (var ie = 1, re = M[0]; ie < E - 1; ++ie) {
                  var pe = M[ie]
                  ;(pe == '+' && re == '1' && M[ie + 1] == '1'
                    ? (M[ie] = '1')
                    : pe == ',' && re == M[ie + 1] && (re == '1' || re == 'n') && (M[ie] = re),
                    (re = pe))
                }
                for (var we = 0; we < E; ++we) {
                  var Ge = M[we]
                  if (Ge == ',') M[we] = 'N'
                  else if (Ge == '%') {
                    var _e = void 0
                    for (_e = we + 1; _e < E && M[_e] == '%'; ++_e);
                    for (
                      var ut = (we && M[we - 1] == '!') || (_e < E && M[_e] == '1') ? '1' : 'N',
                        lt = we;
                      lt < _e;
                      ++lt
                    )
                      M[lt] = ut
                    we = _e - 1
                  }
                }
                for (var Fe = 0, ot = w; Fe < E; ++Fe) {
                  var Ke = M[Fe]
                  ot == 'L' && Ke == '1' ? (M[Fe] = 'L') : l.test(Ke) && (ot = Ke)
                }
                for (var Ie = 0; Ie < E; ++Ie)
                  if (i.test(M[Ie])) {
                    var He = void 0
                    for (He = Ie + 1; He < E && i.test(M[He]); ++He);
                    for (
                      var Me = (Ie ? M[Ie - 1] : w) == 'L',
                        at = (He < E ? M[He] : w) == 'L',
                        Bn = Me == at ? (Me ? 'L' : 'R') : w,
                        Yt = Ie;
                      Yt < He;
                      ++Yt
                    )
                      M[Yt] = Bn
                    Ie = He - 1
                  }
                for (var Ye = [], _t, Ue = 0; Ue < E; )
                  if (o.test(M[Ue])) {
                    var io = Ue
                    for (++Ue; Ue < E && o.test(M[Ue]); ++Ue);
                    Ye.push(new f(0, io, Ue))
                  } else {
                    var Ht = Ue,
                      hn = Ye.length,
                      cn = k == 'rtl' ? 1 : 0
                    for (++Ue; Ue < E && M[Ue] != 'L'; ++Ue);
                    for (var Je = Ht; Je < Ue; )
                      if (a.test(M[Je])) {
                        Ht < Je && (Ye.splice(hn, 0, new f(1, Ht, Je)), (hn += cn))
                        var zn = Je
                        for (++Je; Je < Ue && a.test(M[Je]); ++Je);
                        ;(Ye.splice(hn, 0, new f(2, zn, Je)), (hn += cn), (Ht = Je))
                      } else ++Je
                    Ht < Ue && Ye.splice(hn, 0, new f(1, Ht, Ue))
                  }
                return (
                  k == 'ltr' &&
                    (Ye[0].level == 1 &&
                      (_t = c.match(/^\s+/)) &&
                      ((Ye[0].from = _t[0].length), Ye.unshift(new f(0, 0, _t[0].length))),
                    ve(Ye).level == 1 &&
                      (_t = c.match(/\s+$/)) &&
                      ((ve(Ye).to -= _t[0].length), Ye.push(new f(0, E - _t[0].length, E)))),
                  k == 'rtl' ? Ye.reverse() : Ye
                )
              }
            })()
            function Mt(e, t) {
              var r = e.order
              return (r == null && (r = e.order = If(e.text, t)), r)
            }
            var Oa = [],
              ae = function (e, t, r) {
                if (e.addEventListener) e.addEventListener(t, r, !1)
                else if (e.attachEvent) e.attachEvent('on' + t, r)
                else {
                  var n = e._handlers || (e._handlers = {})
                  n[t] = (n[t] || Oa).concat(r)
                }
              }
            function Vi(e, t) {
              return (e._handlers && e._handlers[t]) || Oa
            }
            function ht(e, t, r) {
              if (e.removeEventListener) e.removeEventListener(t, r, !1)
              else if (e.detachEvent) e.detachEvent('on' + t, r)
              else {
                var n = e._handlers,
                  i = n && n[t]
                if (i) {
                  var l = Ce(i, r)
                  l > -1 && (n[t] = i.slice(0, l).concat(i.slice(l + 1)))
                }
              }
            }
            function Ee(e, t) {
              var r = Vi(e, t)
              if (r.length)
                for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i)
                  r[i].apply(null, n)
            }
            function Be(e, t, r) {
              return (
                typeof t == 'string' &&
                  (t = {
                    type: t,
                    preventDefault: function () {
                      this.defaultPrevented = !0
                    },
                  }),
                Ee(e, r || t.type, e, t),
                el(t) || t.codemirrorIgnore
              )
            }
            function Aa(e) {
              var t = e._handlers && e._handlers.cursorActivity
              if (t)
                for (
                  var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []),
                    n = 0;
                  n < t.length;
                  ++n
                )
                  Ce(r, t[n]) == -1 && r.push(t[n])
            }
            function dt(e, t) {
              return Vi(e, t).length > 0
            }
            function xn(e) {
              ;((e.prototype.on = function (t, r) {
                ae(this, t, r)
              }),
                (e.prototype.off = function (t, r) {
                  ht(this, t, r)
                }))
            }
            function nt(e) {
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
            }
            function Ea(e) {
              e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0)
            }
            function el(e) {
              return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1
            }
            function sr(e) {
              ;(nt(e), Ea(e))
            }
            function tl(e) {
              return e.target || e.srcElement
            }
            function Na(e) {
              var t = e.which
              return (
                t == null &&
                  (e.button & 1 ? (t = 1) : e.button & 2 ? (t = 3) : e.button & 4 && (t = 2)),
                z && e.ctrlKey && t == 1 && (t = 3),
                t
              )
            }
            var Wf = (function () {
                if (v && L < 9) return !1
                var e = A('div')
                return 'draggable' in e || 'dragDrop' in e
              })(),
              nl
            function Bf(e) {
              if (nl == null) {
                var t = A('span', '​')
                ;(se(e, A('span', [t, document.createTextNode('x')])),
                  e.firstChild.offsetHeight != 0 &&
                    (nl = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(v && L < 8)))
              }
              var r = nl
                ? A('span', '​')
                : A('span', ' ', null, 'display: inline-block; width: 1px; margin-right: -1px')
              return (r.setAttribute('cm-text', ''), r)
            }
            var rl
            function zf(e) {
              if (rl != null) return rl
              var t = se(e, document.createTextNode('AخA')),
                r = q(t, 0, 1).getBoundingClientRect(),
                n = q(t, 1, 2).getBoundingClientRect()
              return (V(e), !r || r.left == r.right ? !1 : (rl = n.right - r.right < 3))
            }
            var il =
                `

b`.split(/\n/).length != 3
                  ? function (e) {
                      for (var t = 0, r = [], n = e.length; t <= n; ) {
                        var i = e.indexOf(
                          `
`,
                          t,
                        )
                        i == -1 && (i = e.length)
                        var l = e.slice(t, e.charAt(i - 1) == '\r' ? i - 1 : i),
                          o = l.indexOf('\r')
                        o != -1 ? (r.push(l.slice(0, o)), (t += o + 1)) : (r.push(l), (t = i + 1))
                      }
                      return r
                    }
                  : function (e) {
                      return e.split(/\r\n?|\n/)
                    },
              jf = window.getSelection
                ? function (e) {
                    try {
                      return e.selectionStart != e.selectionEnd
                    } catch {
                      return !1
                    }
                  }
                : function (e) {
                    var t
                    try {
                      t = e.ownerDocument.selection.createRange()
                    } catch {}
                    return !t || t.parentElement() != e
                      ? !1
                      : t.compareEndPoints('StartToEnd', t) != 0
                  },
              qf = (function () {
                var e = A('div')
                return 'oncopy' in e
                  ? !0
                  : (e.setAttribute('oncopy', 'return;'), typeof e.oncopy == 'function')
              })(),
              ll = null
            function Gf(e) {
              if (ll != null) return ll
              var t = se(e, A('span', 'x')),
                r = t.getBoundingClientRect(),
                n = q(t, 0, 1).getBoundingClientRect()
              return (ll = Math.abs(r.left - n.left) > 1)
            }
            var ol = {},
              kn = {}
            function Uf(e, t) {
              ;(arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
                (ol[e] = t))
            }
            function Kf(e, t) {
              kn[e] = t
            }
            function Jr(e) {
              if (typeof e == 'string' && kn.hasOwnProperty(e)) e = kn[e]
              else if (e && typeof e.name == 'string' && kn.hasOwnProperty(e.name)) {
                var t = kn[e.name]
                ;(typeof t == 'string' && (t = { name: t }), (e = _a(t, e)), (e.name = t.name))
              } else {
                if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
                  return Jr('application/xml')
                if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
                  return Jr('application/json')
              }
              return typeof e == 'string' ? { name: e } : e || { name: 'null' }
            }
            function al(e, t) {
              t = Jr(t)
              var r = ol[t.name]
              if (!r) return al(e, 'text/plain')
              var n = r(e, t)
              if (Sn.hasOwnProperty(t.name)) {
                var i = Sn[t.name]
                for (var l in i)
                  i.hasOwnProperty(l) && (n.hasOwnProperty(l) && (n['_' + l] = n[l]), (n[l] = i[l]))
              }
              if (((n.name = t.name), t.helperType && (n.helperType = t.helperType), t.modeProps))
                for (var o in t.modeProps) n[o] = t.modeProps[o]
              return n
            }
            var Sn = {}
            function Xf(e, t) {
              var r = Sn.hasOwnProperty(e) ? Sn[e] : (Sn[e] = {})
              ft(t, r)
            }
            function Vt(e, t) {
              if (t === !0) return t
              if (e.copyState) return e.copyState(t)
              var r = {}
              for (var n in t) {
                var i = t[n]
                ;(i instanceof Array && (i = i.concat([])), (r[n] = i))
              }
              return r
            }
            function sl(e, t) {
              for (var r; e.innerMode && ((r = e.innerMode(t)), !(!r || r.mode == e)); )
                ((t = r.state), (e = r.mode))
              return r || { mode: e, state: t }
            }
            function Fa(e, t, r) {
              return e.startState ? e.startState(t, r) : !0
            }
            var Ne = function (e, t, r) {
              ;((this.pos = this.start = 0),
                (this.string = e),
                (this.tabSize = t || 8),
                (this.lastColumnPos = this.lastColumnValue = 0),
                (this.lineStart = 0),
                (this.lineOracle = r))
            }
            ;((Ne.prototype.eol = function () {
              return this.pos >= this.string.length
            }),
              (Ne.prototype.sol = function () {
                return this.pos == this.lineStart
              }),
              (Ne.prototype.peek = function () {
                return this.string.charAt(this.pos) || void 0
              }),
              (Ne.prototype.next = function () {
                if (this.pos < this.string.length) return this.string.charAt(this.pos++)
              }),
              (Ne.prototype.eat = function (e) {
                var t = this.string.charAt(this.pos),
                  r
                if (
                  (typeof e == 'string' ? (r = t == e) : (r = t && (e.test ? e.test(t) : e(t))), r)
                )
                  return (++this.pos, t)
              }),
              (Ne.prototype.eatWhile = function (e) {
                for (var t = this.pos; this.eat(e); );
                return this.pos > t
              }),
              (Ne.prototype.eatSpace = function () {
                for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos
                return this.pos > e
              }),
              (Ne.prototype.skipToEnd = function () {
                this.pos = this.string.length
              }),
              (Ne.prototype.skipTo = function (e) {
                var t = this.string.indexOf(e, this.pos)
                if (t > -1) return ((this.pos = t), !0)
              }),
              (Ne.prototype.backUp = function (e) {
                this.pos -= e
              }),
              (Ne.prototype.column = function () {
                return (
                  this.lastColumnPos < this.start &&
                    ((this.lastColumnValue = Re(
                      this.string,
                      this.start,
                      this.tabSize,
                      this.lastColumnPos,
                      this.lastColumnValue,
                    )),
                    (this.lastColumnPos = this.start)),
                  this.lastColumnValue -
                    (this.lineStart ? Re(this.string, this.lineStart, this.tabSize) : 0)
                )
              }),
              (Ne.prototype.indentation = function () {
                return (
                  Re(this.string, null, this.tabSize) -
                  (this.lineStart ? Re(this.string, this.lineStart, this.tabSize) : 0)
                )
              }),
              (Ne.prototype.match = function (e, t, r) {
                if (typeof e == 'string') {
                  var n = function (o) {
                      return r ? o.toLowerCase() : o
                    },
                    i = this.string.substr(this.pos, e.length)
                  if (n(i) == n(e)) return (t !== !1 && (this.pos += e.length), !0)
                } else {
                  var l = this.string.slice(this.pos).match(e)
                  return l && l.index > 0 ? null : (l && t !== !1 && (this.pos += l[0].length), l)
                }
              }),
              (Ne.prototype.current = function () {
                return this.string.slice(this.start, this.pos)
              }),
              (Ne.prototype.hideFirstChars = function (e, t) {
                this.lineStart += e
                try {
                  return t()
                } finally {
                  this.lineStart -= e
                }
              }),
              (Ne.prototype.lookAhead = function (e) {
                var t = this.lineOracle
                return t && t.lookAhead(e)
              }),
              (Ne.prototype.baseToken = function () {
                var e = this.lineOracle
                return e && e.baseToken(this.pos)
              }))
            function ne(e, t) {
              if (((t -= e.first), t < 0 || t >= e.size))
                throw new Error('There is no line ' + (t + e.first) + ' in the document.')
              for (var r = e; !r.lines; )
                for (var n = 0; ; ++n) {
                  var i = r.children[n],
                    l = i.chunkSize()
                  if (t < l) {
                    r = i
                    break
                  }
                  t -= l
                }
              return r.lines[t]
            }
            function en(e, t, r) {
              var n = [],
                i = t.line
              return (
                e.iter(t.line, r.line + 1, function (l) {
                  var o = l.text
                  ;(i == r.line && (o = o.slice(0, r.ch)),
                    i == t.line && (o = o.slice(t.ch)),
                    n.push(o),
                    ++i)
                }),
                n
              )
            }
            function ul(e, t, r) {
              var n = []
              return (
                e.iter(t, r, function (i) {
                  n.push(i.text)
                }),
                n
              )
            }
            function wt(e, t) {
              var r = t - e.height
              if (r) for (var n = e; n; n = n.parent) n.height += r
            }
            function ke(e) {
              if (e.parent == null) return null
              for (var t = e.parent, r = Ce(t.lines, e), n = t.parent; n; t = n, n = n.parent)
                for (var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize()
              return r + t.first
            }
            function tn(e, t) {
              var r = e.first
              e: do {
                for (var n = 0; n < e.children.length; ++n) {
                  var i = e.children[n],
                    l = i.height
                  if (t < l) {
                    e = i
                    continue e
                  }
                  ;((t -= l), (r += i.chunkSize()))
                }
                return r
              } while (!e.lines)
              for (var o = 0; o < e.lines.length; ++o) {
                var a = e.lines[o],
                  f = a.height
                if (t < f) break
                t -= f
              }
              return r + o
            }
            function ur(e, t) {
              return t >= e.first && t < e.first + e.size
            }
            function fl(e, t) {
              return String(e.lineNumberFormatter(t + e.firstLineNumber))
            }
            function B(e, t, r) {
              if ((r === void 0 && (r = null), !(this instanceof B))) return new B(e, t, r)
              ;((this.line = e), (this.ch = t), (this.sticky = r))
            }
            function fe(e, t) {
              return e.line - t.line || e.ch - t.ch
            }
            function hl(e, t) {
              return e.sticky == t.sticky && fe(e, t) == 0
            }
            function cl(e) {
              return B(e.line, e.ch)
            }
            function Vr(e, t) {
              return fe(e, t) < 0 ? t : e
            }
            function ei(e, t) {
              return fe(e, t) < 0 ? e : t
            }
            function Ha(e, t) {
              return Math.max(e.first, Math.min(t, e.first + e.size - 1))
            }
            function he(e, t) {
              if (t.line < e.first) return B(e.first, 0)
              var r = e.first + e.size - 1
              return t.line > r ? B(r, ne(e, r).text.length) : Yf(t, ne(e, t.line).text.length)
            }
            function Yf(e, t) {
              var r = e.ch
              return r == null || r > t ? B(e.line, t) : r < 0 ? B(e.line, 0) : e
            }
            function Ra(e, t) {
              for (var r = [], n = 0; n < t.length; n++) r[n] = he(e, t[n])
              return r
            }
            var ti = function (e, t) {
                ;((this.state = e), (this.lookAhead = t))
              },
              Lt = function (e, t, r, n) {
                ;((this.state = t),
                  (this.doc = e),
                  (this.line = r),
                  (this.maxLookAhead = n || 0),
                  (this.baseTokens = null),
                  (this.baseTokenPos = 1))
              }
            ;((Lt.prototype.lookAhead = function (e) {
              var t = this.doc.getLine(this.line + e)
              return (t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t)
            }),
              (Lt.prototype.baseToken = function (e) {
                if (!this.baseTokens) return null
                for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2
                var t = this.baseTokens[this.baseTokenPos + 1]
                return {
                  type: t && t.replace(/( |^)overlay .*/, ''),
                  size: this.baseTokens[this.baseTokenPos] - e,
                }
              }),
              (Lt.prototype.nextLine = function () {
                ;(this.line++, this.maxLookAhead > 0 && this.maxLookAhead--)
              }),
              (Lt.fromSaved = function (e, t, r) {
                return t instanceof ti
                  ? new Lt(e, Vt(e.mode, t.state), r, t.lookAhead)
                  : new Lt(e, Vt(e.mode, t), r)
              }),
              (Lt.prototype.save = function (e) {
                var t = e !== !1 ? Vt(this.doc.mode, this.state) : this.state
                return this.maxLookAhead > 0 ? new ti(t, this.maxLookAhead) : t
              }))
            function Pa(e, t, r, n) {
              var i = [e.state.modeGen],
                l = {}
              qa(
                e,
                t.text,
                e.doc.mode,
                r,
                function (c, k) {
                  return i.push(c, k)
                },
                l,
                n,
              )
              for (
                var o = r.state,
                  a = function (c) {
                    r.baseTokens = i
                    var k = e.state.overlays[c],
                      w = 1,
                      E = 0
                    ;((r.state = !0),
                      qa(
                        e,
                        t.text,
                        k.mode,
                        r,
                        function (M, H) {
                          for (var W = w; E < M; ) {
                            var j = i[w]
                            ;(j > M && i.splice(w, 1, M, i[w + 1], j),
                              (w += 2),
                              (E = Math.min(M, j)))
                          }
                          if (H)
                            if (k.opaque) (i.splice(W, w - W, M, 'overlay ' + H), (w = W + 2))
                            else
                              for (; W < w; W += 2) {
                                var U = i[W + 1]
                                i[W + 1] = (U ? U + ' ' : '') + 'overlay ' + H
                              }
                        },
                        l,
                      ),
                      (r.state = o),
                      (r.baseTokens = null),
                      (r.baseTokenPos = 1))
                  },
                  f = 0;
                f < e.state.overlays.length;
                ++f
              )
                a(f)
              return { styles: i, classes: l.bgClass || l.textClass ? l : null }
            }
            function Ia(e, t, r) {
              if (!t.styles || t.styles[0] != e.state.modeGen) {
                var n = fr(e, ke(t)),
                  i = t.text.length > e.options.maxHighlightLength && Vt(e.doc.mode, n.state),
                  l = Pa(e, t, n)
                ;(i && (n.state = i),
                  (t.stateAfter = n.save(!i)),
                  (t.styles = l.styles),
                  l.classes
                    ? (t.styleClasses = l.classes)
                    : t.styleClasses && (t.styleClasses = null),
                  r === e.doc.highlightFrontier &&
                    (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier)))
              }
              return t.styles
            }
            function fr(e, t, r) {
              var n = e.doc,
                i = e.display
              if (!n.mode.startState) return new Lt(n, !0, t)
              var l = $f(e, t, r),
                o = l > n.first && ne(n, l - 1).stateAfter,
                a = o ? Lt.fromSaved(n, o, l) : new Lt(n, Fa(n.mode), l)
              return (
                n.iter(l, t, function (f) {
                  dl(e, f.text, a)
                  var c = a.line
                  ;((f.stateAfter =
                    c == t - 1 || c % 5 == 0 || (c >= i.viewFrom && c < i.viewTo)
                      ? a.save()
                      : null),
                    a.nextLine())
                }),
                r && (n.modeFrontier = a.line),
                a
              )
            }
            function dl(e, t, r, n) {
              var i = e.doc.mode,
                l = new Ne(t, e.options.tabSize, r)
              for (l.start = l.pos = n || 0, t == '' && Wa(i, r.state); !l.eol(); )
                (pl(i, l, r.state), (l.start = l.pos))
            }
            function Wa(e, t) {
              if (e.blankLine) return e.blankLine(t)
              if (e.innerMode) {
                var r = sl(e, t)
                if (r.mode.blankLine) return r.mode.blankLine(r.state)
              }
            }
            function pl(e, t, r, n) {
              for (var i = 0; i < 10; i++) {
                n && (n[0] = sl(e, r).mode)
                var l = e.token(t, r)
                if (t.pos > t.start) return l
              }
              throw new Error('Mode ' + e.name + ' failed to advance stream.')
            }
            var Ba = function (e, t, r) {
              ;((this.start = e.start),
                (this.end = e.pos),
                (this.string = e.current()),
                (this.type = t || null),
                (this.state = r))
            }
            function za(e, t, r, n) {
              var i = e.doc,
                l = i.mode,
                o
              t = he(i, t)
              var a = ne(i, t.line),
                f = fr(e, t.line, r),
                c = new Ne(a.text, e.options.tabSize, f),
                k
              for (n && (k = []); (n || c.pos < t.ch) && !c.eol(); )
                ((c.start = c.pos),
                  (o = pl(l, c, f.state)),
                  n && k.push(new Ba(c, o, Vt(i.mode, f.state))))
              return n ? k : new Ba(c, o, f.state)
            }
            function ja(e, t) {
              if (e)
                for (;;) {
                  var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/)
                  if (!r) break
                  e = e.slice(0, r.index) + e.slice(r.index + r[0].length)
                  var n = r[1] ? 'bgClass' : 'textClass'
                  t[n] == null
                    ? (t[n] = r[2])
                    : new RegExp('(?:^|\\s)' + r[2] + '(?:$|\\s)').test(t[n]) ||
                      (t[n] += ' ' + r[2])
                }
              return e
            }
            function qa(e, t, r, n, i, l, o) {
              var a = r.flattenSpans
              a == null && (a = e.options.flattenSpans)
              var f = 0,
                c = null,
                k = new Ne(t, e.options.tabSize, n),
                w,
                E = e.options.addModeClass && [null]
              for (t == '' && ja(Wa(r, n.state), l); !k.eol(); ) {
                if (
                  (k.pos > e.options.maxHighlightLength
                    ? ((a = !1), o && dl(e, t, n, k.pos), (k.pos = t.length), (w = null))
                    : (w = ja(pl(r, k, n.state, E), l)),
                  E)
                ) {
                  var M = E[0].name
                  M && (w = 'm-' + (w ? M + ' ' + w : M))
                }
                if (!a || c != w) {
                  for (; f < k.start; ) ((f = Math.min(k.start, f + 5e3)), i(f, c))
                  c = w
                }
                k.start = k.pos
              }
              for (; f < k.pos; ) {
                var H = Math.min(k.pos, f + 5e3)
                ;(i(H, c), (f = H))
              }
            }
            function $f(e, t, r) {
              for (
                var n, i, l = e.doc, o = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t;
                a > o;
                --a
              ) {
                if (a <= l.first) return l.first
                var f = ne(l, a - 1),
                  c = f.stateAfter
                if (c && (!r || a + (c instanceof ti ? c.lookAhead : 0) <= l.modeFrontier)) return a
                var k = Re(f.text, null, e.options.tabSize)
                ;(i == null || n > k) && ((i = a - 1), (n = k))
              }
              return i
            }
            function Zf(e, t) {
              if (
                ((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))
              ) {
                for (var r = e.first, n = t - 1; n > r; n--) {
                  var i = ne(e, n).stateAfter
                  if (i && (!(i instanceof ti) || n + i.lookAhead < t)) {
                    r = n + 1
                    break
                  }
                }
                e.highlightFrontier = Math.min(e.highlightFrontier, r)
              }
            }
            var Ga = !1,
              Ot = !1
            function Qf() {
              Ga = !0
            }
            function Jf() {
              Ot = !0
            }
            function ni(e, t, r) {
              ;((this.marker = e), (this.from = t), (this.to = r))
            }
            function hr(e, t) {
              if (e)
                for (var r = 0; r < e.length; ++r) {
                  var n = e[r]
                  if (n.marker == t) return n
                }
            }
            function Vf(e, t) {
              for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n])
              return r
            }
            function eh(e, t, r) {
              var n = r && window.WeakSet && (r.markedSpans || (r.markedSpans = new WeakSet()))
              ;(n && e.markedSpans && n.has(e.markedSpans)
                ? e.markedSpans.push(t)
                : ((e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]),
                  n && n.add(e.markedSpans)),
                t.marker.attachLine(e))
            }
            function th(e, t, r) {
              var n
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var l = e[i],
                    o = l.marker,
                    a = l.from == null || (o.inclusiveLeft ? l.from <= t : l.from < t)
                  if (a || (l.from == t && o.type == 'bookmark' && (!r || !l.marker.insertLeft))) {
                    var f = l.to == null || (o.inclusiveRight ? l.to >= t : l.to > t)
                    ;(n || (n = [])).push(new ni(o, l.from, f ? null : l.to))
                  }
                }
              return n
            }
            function nh(e, t, r) {
              var n
              if (e)
                for (var i = 0; i < e.length; ++i) {
                  var l = e[i],
                    o = l.marker,
                    a = l.to == null || (o.inclusiveRight ? l.to >= t : l.to > t)
                  if (a || (l.from == t && o.type == 'bookmark' && (!r || l.marker.insertLeft))) {
                    var f = l.from == null || (o.inclusiveLeft ? l.from <= t : l.from < t)
                    ;(n || (n = [])).push(
                      new ni(o, f ? null : l.from - t, l.to == null ? null : l.to - t),
                    )
                  }
                }
              return n
            }
            function gl(e, t) {
              if (t.full) return null
              var r = ur(e, t.from.line) && ne(e, t.from.line).markedSpans,
                n = ur(e, t.to.line) && ne(e, t.to.line).markedSpans
              if (!r && !n) return null
              var i = t.from.ch,
                l = t.to.ch,
                o = fe(t.from, t.to) == 0,
                a = th(r, i, o),
                f = nh(n, l, o),
                c = t.text.length == 1,
                k = ve(t.text).length + (c ? i : 0)
              if (a)
                for (var w = 0; w < a.length; ++w) {
                  var E = a[w]
                  if (E.to == null) {
                    var M = hr(f, E.marker)
                    M ? c && (E.to = M.to == null ? null : M.to + k) : (E.to = i)
                  }
                }
              if (f)
                for (var H = 0; H < f.length; ++H) {
                  var W = f[H]
                  if ((W.to != null && (W.to += k), W.from == null)) {
                    var j = hr(a, W.marker)
                    j || ((W.from = k), c && (a || (a = [])).push(W))
                  } else ((W.from += k), c && (a || (a = [])).push(W))
                }
              ;(a && (a = Ua(a)), f && f != a && (f = Ua(f)))
              var U = [a]
              if (!c) {
                var $ = t.text.length - 2,
                  K
                if ($ > 0 && a)
                  for (var Q = 0; Q < a.length; ++Q)
                    a[Q].to == null && (K || (K = [])).push(new ni(a[Q].marker, null, null))
                for (var ie = 0; ie < $; ++ie) U.push(K)
                U.push(f)
              }
              return U
            }
            function Ua(e) {
              for (var t = 0; t < e.length; ++t) {
                var r = e[t]
                r.from != null &&
                  r.from == r.to &&
                  r.marker.clearWhenEmpty !== !1 &&
                  e.splice(t--, 1)
              }
              return e.length ? e : null
            }
            function rh(e, t, r) {
              var n = null
              if (
                (e.iter(t.line, r.line + 1, function (M) {
                  if (M.markedSpans)
                    for (var H = 0; H < M.markedSpans.length; ++H) {
                      var W = M.markedSpans[H].marker
                      W.readOnly && (!n || Ce(n, W) == -1) && (n || (n = [])).push(W)
                    }
                }),
                !n)
              )
                return null
              for (var i = [{ from: t, to: r }], l = 0; l < n.length; ++l)
                for (var o = n[l], a = o.find(0), f = 0; f < i.length; ++f) {
                  var c = i[f]
                  if (!(fe(c.to, a.from) < 0 || fe(c.from, a.to) > 0)) {
                    var k = [f, 1],
                      w = fe(c.from, a.from),
                      E = fe(c.to, a.to)
                    ;((w < 0 || (!o.inclusiveLeft && !w)) && k.push({ from: c.from, to: a.from }),
                      (E > 0 || (!o.inclusiveRight && !E)) && k.push({ from: a.to, to: c.to }),
                      i.splice.apply(i, k),
                      (f += k.length - 3))
                  }
                }
              return i
            }
            function Ka(e) {
              var t = e.markedSpans
              if (t) {
                for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e)
                e.markedSpans = null
              }
            }
            function Xa(e, t) {
              if (t) {
                for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e)
                e.markedSpans = t
              }
            }
            function ri(e) {
              return e.inclusiveLeft ? -1 : 0
            }
            function ii(e) {
              return e.inclusiveRight ? 1 : 0
            }
            function vl(e, t) {
              var r = e.lines.length - t.lines.length
              if (r != 0) return r
              var n = e.find(),
                i = t.find(),
                l = fe(n.from, i.from) || ri(e) - ri(t)
              if (l) return -l
              var o = fe(n.to, i.to) || ii(e) - ii(t)
              return o || t.id - e.id
            }
            function Ya(e, t) {
              var r = Ot && e.markedSpans,
                n
              if (r)
                for (var i = void 0, l = 0; l < r.length; ++l)
                  ((i = r[l]),
                    i.marker.collapsed &&
                      (t ? i.from : i.to) == null &&
                      (!n || vl(n, i.marker) < 0) &&
                      (n = i.marker))
              return n
            }
            function $a(e) {
              return Ya(e, !0)
            }
            function li(e) {
              return Ya(e, !1)
            }
            function ih(e, t) {
              var r = Ot && e.markedSpans,
                n
              if (r)
                for (var i = 0; i < r.length; ++i) {
                  var l = r[i]
                  l.marker.collapsed &&
                    (l.from == null || l.from < t) &&
                    (l.to == null || l.to > t) &&
                    (!n || vl(n, l.marker) < 0) &&
                    (n = l.marker)
                }
              return n
            }
            function Za(e, t, r, n, i) {
              var l = ne(e, t),
                o = Ot && l.markedSpans
              if (o)
                for (var a = 0; a < o.length; ++a) {
                  var f = o[a]
                  if (f.marker.collapsed) {
                    var c = f.marker.find(0),
                      k = fe(c.from, r) || ri(f.marker) - ri(i),
                      w = fe(c.to, n) || ii(f.marker) - ii(i)
                    if (
                      !((k >= 0 && w <= 0) || (k <= 0 && w >= 0)) &&
                      ((k <= 0 &&
                        (f.marker.inclusiveRight && i.inclusiveLeft
                          ? fe(c.to, r) >= 0
                          : fe(c.to, r) > 0)) ||
                        (k >= 0 &&
                          (f.marker.inclusiveRight && i.inclusiveLeft
                            ? fe(c.from, n) <= 0
                            : fe(c.from, n) < 0)))
                    )
                      return !0
                  }
                }
            }
            function mt(e) {
              for (var t; (t = $a(e)); ) e = t.find(-1, !0).line
              return e
            }
            function lh(e) {
              for (var t; (t = li(e)); ) e = t.find(1, !0).line
              return e
            }
            function oh(e) {
              for (var t, r; (t = li(e)); ) ((e = t.find(1, !0).line), (r || (r = [])).push(e))
              return r
            }
            function ml(e, t) {
              var r = ne(e, t),
                n = mt(r)
              return r == n ? t : ke(n)
            }
            function Qa(e, t) {
              if (t > e.lastLine()) return t
              var r = ne(e, t),
                n
              if (!Bt(e, r)) return t
              for (; (n = li(r)); ) r = n.find(1, !0).line
              return ke(r) + 1
            }
            function Bt(e, t) {
              var r = Ot && t.markedSpans
              if (r) {
                for (var n = void 0, i = 0; i < r.length; ++i)
                  if (((n = r[i]), !!n.marker.collapsed)) {
                    if (n.from == null) return !0
                    if (
                      !n.marker.widgetNode &&
                      n.from == 0 &&
                      n.marker.inclusiveLeft &&
                      yl(e, t, n)
                    )
                      return !0
                  }
              }
            }
            function yl(e, t, r) {
              if (r.to == null) {
                var n = r.marker.find(1, !0)
                return yl(e, n.line, hr(n.line.markedSpans, r.marker))
              }
              if (r.marker.inclusiveRight && r.to == t.text.length) return !0
              for (var i = void 0, l = 0; l < t.markedSpans.length; ++l)
                if (
                  ((i = t.markedSpans[l]),
                  i.marker.collapsed &&
                    !i.marker.widgetNode &&
                    i.from == r.to &&
                    (i.to == null || i.to != r.from) &&
                    (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
                    yl(e, t, i))
                )
                  return !0
            }
            function At(e) {
              e = mt(e)
              for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
                var i = r.lines[n]
                if (i == e) break
                t += i.height
              }
              for (var l = r.parent; l; r = l, l = r.parent)
                for (var o = 0; o < l.children.length; ++o) {
                  var a = l.children[o]
                  if (a == r) break
                  t += a.height
                }
              return t
            }
            function oi(e) {
              if (e.height == 0) return 0
              for (var t = e.text.length, r, n = e; (r = $a(n)); ) {
                var i = r.find(0, !0)
                ;((n = i.from.line), (t += i.from.ch - i.to.ch))
              }
              for (n = e; (r = li(n)); ) {
                var l = r.find(0, !0)
                ;((t -= n.text.length - l.from.ch), (n = l.to.line), (t += n.text.length - l.to.ch))
              }
              return t
            }
            function bl(e) {
              var t = e.display,
                r = e.doc
              ;((t.maxLine = ne(r, r.first)),
                (t.maxLineLength = oi(t.maxLine)),
                (t.maxLineChanged = !0),
                r.iter(function (n) {
                  var i = oi(n)
                  i > t.maxLineLength && ((t.maxLineLength = i), (t.maxLine = n))
                }))
            }
            var wn = function (e, t, r) {
              ;((this.text = e), Xa(this, t), (this.height = r ? r(this) : 1))
            }
            ;((wn.prototype.lineNo = function () {
              return ke(this)
            }),
              xn(wn))
            function ah(e, t, r, n) {
              ;((e.text = t),
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null),
                e.order != null && (e.order = null),
                Ka(e),
                Xa(e, r))
              var i = n ? n(e) : 1
              i != e.height && wt(e, i)
            }
            function sh(e) {
              ;((e.parent = null), Ka(e))
            }
            var uh = {},
              fh = {}
            function Ja(e, t) {
              if (!e || /^\s*$/.test(e)) return null
              var r = t.addModeClass ? fh : uh
              return r[e] || (r[e] = e.replace(/\S+/g, 'cm-$&'))
            }
            function Va(e, t) {
              var r = G('span', null, null, g ? 'padding-right: .1px' : null),
                n = {
                  pre: G('pre', [r], 'CodeMirror-line'),
                  content: r,
                  col: 0,
                  pos: 0,
                  cm: e,
                  trailingSpace: !1,
                  splitSpaces: e.getOption('lineWrapping'),
                }
              t.measure = {}
              for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                var l = i ? t.rest[i - 1] : t.line,
                  o = void 0
                ;((n.pos = 0),
                  (n.addToken = ch),
                  zf(e.display.measure) &&
                    (o = Mt(l, e.doc.direction)) &&
                    (n.addToken = ph(n.addToken, o)),
                  (n.map = []))
                var a = t != e.display.externalMeasured && ke(l)
                ;(gh(l, n, Ia(e, l, a)),
                  l.styleClasses &&
                    (l.styleClasses.bgClass &&
                      (n.bgClass = $e(l.styleClasses.bgClass, n.bgClass || '')),
                    l.styleClasses.textClass &&
                      (n.textClass = $e(l.styleClasses.textClass, n.textClass || ''))),
                  n.map.length == 0 &&
                    n.map.push(0, 0, n.content.appendChild(Bf(e.display.measure))),
                  i == 0
                    ? ((t.measure.map = n.map), (t.measure.cache = {}))
                    : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
                      (t.measure.caches || (t.measure.caches = [])).push({})))
              }
              if (g) {
                var f = n.content.lastChild
                ;(/\bcm-tab\b/.test(f.className) ||
                  (f.querySelector && f.querySelector('.cm-tab'))) &&
                  (n.content.className = 'cm-tab-wrap-hack')
              }
              return (
                Ee(e, 'renderLine', e, t.line, n.pre),
                n.pre.className && (n.textClass = $e(n.pre.className, n.textClass || '')),
                n
              )
            }
            function hh(e) {
              var t = A('span', '•', 'cm-invalidchar')
              return (
                (t.title = '\\u' + e.charCodeAt(0).toString(16)),
                t.setAttribute('aria-label', t.title),
                t
              )
            }
            function ch(e, t, r, n, i, l, o) {
              if (t) {
                var a = e.splitSpaces ? dh(t, e.trailingSpace) : t,
                  f = e.cm.state.specialChars,
                  c = !1,
                  k
                if (!f.test(t))
                  ((e.col += t.length),
                    (k = document.createTextNode(a)),
                    e.map.push(e.pos, e.pos + t.length, k),
                    v && L < 9 && (c = !0),
                    (e.pos += t.length))
                else {
                  k = document.createDocumentFragment()
                  for (var w = 0; ; ) {
                    f.lastIndex = w
                    var E = f.exec(t),
                      M = E ? E.index - w : t.length - w
                    if (M) {
                      var H = document.createTextNode(a.slice(w, w + M))
                      ;(v && L < 9 ? k.appendChild(A('span', [H])) : k.appendChild(H),
                        e.map.push(e.pos, e.pos + M, H),
                        (e.col += M),
                        (e.pos += M))
                    }
                    if (!E) break
                    w += M + 1
                    var W = void 0
                    if (E[0] == '	') {
                      var j = e.cm.options.tabSize,
                        U = j - (e.col % j)
                      ;((W = k.appendChild(A('span', It(U), 'cm-tab'))),
                        W.setAttribute('role', 'presentation'),
                        W.setAttribute('cm-text', '	'),
                        (e.col += U))
                    } else
                      E[0] == '\r' ||
                      E[0] ==
                        `
`
                        ? ((W = k.appendChild(
                            A('span', E[0] == '\r' ? '␍' : '␤', 'cm-invalidchar'),
                          )),
                          W.setAttribute('cm-text', E[0]),
                          (e.col += 1))
                        : ((W = e.cm.options.specialCharPlaceholder(E[0])),
                          W.setAttribute('cm-text', E[0]),
                          v && L < 9 ? k.appendChild(A('span', [W])) : k.appendChild(W),
                          (e.col += 1))
                    ;(e.map.push(e.pos, e.pos + 1, W), e.pos++)
                  }
                }
                if (
                  ((e.trailingSpace = a.charCodeAt(t.length - 1) == 32), r || n || i || c || l || o)
                ) {
                  var $ = r || ''
                  ;(n && ($ += n), i && ($ += i))
                  var K = A('span', [k], $, l)
                  if (o)
                    for (var Q in o)
                      o.hasOwnProperty(Q) && Q != 'style' && Q != 'class' && K.setAttribute(Q, o[Q])
                  return e.content.appendChild(K)
                }
                e.content.appendChild(k)
              }
            }
            function dh(e, t) {
              if (e.length > 1 && !/  /.test(e)) return e
              for (var r = t, n = '', i = 0; i < e.length; i++) {
                var l = e.charAt(i)
                ;(l == ' ' && r && (i == e.length - 1 || e.charCodeAt(i + 1) == 32) && (l = ' '),
                  (n += l),
                  (r = l == ' '))
              }
              return n
            }
            function ph(e, t) {
              return function (r, n, i, l, o, a, f) {
                i = i ? i + ' cm-force-border' : 'cm-force-border'
                for (var c = r.pos, k = c + n.length; ; ) {
                  for (
                    var w = void 0, E = 0;
                    E < t.length && ((w = t[E]), !(w.to > c && w.from <= c));
                    E++
                  );
                  if (w.to >= k) return e(r, n, i, l, o, a, f)
                  ;(e(r, n.slice(0, w.to - c), i, l, null, a, f),
                    (l = null),
                    (n = n.slice(w.to - c)),
                    (c = w.to))
                }
              }
            }
            function es(e, t, r, n) {
              var i = !n && r.widgetNode
              ;(i && e.map.push(e.pos, e.pos + t, i),
                !n &&
                  e.cm.display.input.needsContentAttribute &&
                  (i || (i = e.content.appendChild(document.createElement('span'))),
                  i.setAttribute('cm-marker', r.id)),
                i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
                (e.pos += t),
                (e.trailingSpace = !1))
            }
            function gh(e, t, r) {
              var n = e.markedSpans,
                i = e.text,
                l = 0
              if (!n) {
                for (var o = 1; o < r.length; o += 2)
                  t.addToken(t, i.slice(l, (l = r[o])), Ja(r[o + 1], t.cm.options))
                return
              }
              for (var a = i.length, f = 0, c = 1, k = '', w, E, M = 0, H, W, j, U, $; ; ) {
                if (M == f) {
                  ;((H = W = j = E = ''), ($ = null), (U = null), (M = 1 / 0))
                  for (var K = [], Q = void 0, ie = 0; ie < n.length; ++ie) {
                    var re = n[ie],
                      pe = re.marker
                    if (pe.type == 'bookmark' && re.from == f && pe.widgetNode) K.push(pe)
                    else if (
                      re.from <= f &&
                      (re.to == null || re.to > f || (pe.collapsed && re.to == f && re.from == f))
                    ) {
                      if (
                        (re.to != null && re.to != f && M > re.to && ((M = re.to), (W = '')),
                        pe.className && (H += ' ' + pe.className),
                        pe.css && (E = (E ? E + ';' : '') + pe.css),
                        pe.startStyle && re.from == f && (j += ' ' + pe.startStyle),
                        pe.endStyle && re.to == M && (Q || (Q = [])).push(pe.endStyle, re.to),
                        pe.title && (($ || ($ = {})).title = pe.title),
                        pe.attributes)
                      )
                        for (var we in pe.attributes) ($ || ($ = {}))[we] = pe.attributes[we]
                      pe.collapsed && (!U || vl(U.marker, pe) < 0) && (U = re)
                    } else re.from > f && M > re.from && (M = re.from)
                  }
                  if (Q)
                    for (var Ge = 0; Ge < Q.length; Ge += 2) Q[Ge + 1] == M && (W += ' ' + Q[Ge])
                  if (!U || U.from == f) for (var _e = 0; _e < K.length; ++_e) es(t, 0, K[_e])
                  if (U && (U.from || 0) == f) {
                    if (
                      (es(t, (U.to == null ? a + 1 : U.to) - f, U.marker, U.from == null),
                      U.to == null)
                    )
                      return
                    U.to == f && (U = !1)
                  }
                }
                if (f >= a) break
                for (var ut = Math.min(a, M); ; ) {
                  if (k) {
                    var lt = f + k.length
                    if (!U) {
                      var Fe = lt > ut ? k.slice(0, ut - f) : k
                      t.addToken(t, Fe, w ? w + H : H, j, f + Fe.length == M ? W : '', E, $)
                    }
                    if (lt >= ut) {
                      ;((k = k.slice(ut - f)), (f = ut))
                      break
                    }
                    ;((f = lt), (j = ''))
                  }
                  ;((k = i.slice(l, (l = r[c++]))), (w = Ja(r[c++], t.cm.options)))
                }
              }
            }
            function ts(e, t, r) {
              ;((this.line = t),
                (this.rest = oh(t)),
                (this.size = this.rest ? ke(ve(this.rest)) - r + 1 : 1),
                (this.node = this.text = null),
                (this.hidden = Bt(e, t)))
            }
            function ai(e, t, r) {
              for (var n = [], i, l = t; l < r; l = i) {
                var o = new ts(e.doc, ne(e.doc, l), l)
                ;((i = l + o.size), n.push(o))
              }
              return n
            }
            var Ln = null
            function vh(e) {
              Ln ? Ln.ops.push(e) : (e.ownsGroup = Ln = { ops: [e], delayedCallbacks: [] })
            }
            function mh(e) {
              var t = e.delayedCallbacks,
                r = 0
              do {
                for (; r < t.length; r++) t[r].call(null)
                for (var n = 0; n < e.ops.length; n++) {
                  var i = e.ops[n]
                  if (i.cursorActivityHandlers)
                    for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                      i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                }
              } while (r < t.length)
            }
            function yh(e, t) {
              var r = e.ownsGroup
              if (r)
                try {
                  mh(r)
                } finally {
                  ;((Ln = null), t(r))
                }
            }
            var cr = null
            function ze(e, t) {
              var r = Vi(e, t)
              if (r.length) {
                var n = Array.prototype.slice.call(arguments, 2),
                  i
                Ln ? (i = Ln.delayedCallbacks) : cr ? (i = cr) : ((i = cr = []), setTimeout(bh, 0))
                for (
                  var l = function (a) {
                      i.push(function () {
                        return r[a].apply(null, n)
                      })
                    },
                    o = 0;
                  o < r.length;
                  ++o
                )
                  l(o)
              }
            }
            function bh() {
              var e = cr
              cr = null
              for (var t = 0; t < e.length; ++t) e[t]()
            }
            function ns(e, t, r, n) {
              for (var i = 0; i < t.changes.length; i++) {
                var l = t.changes[i]
                l == 'text'
                  ? kh(e, t)
                  : l == 'gutter'
                    ? is(e, t, r, n)
                    : l == 'class'
                      ? xl(e, t)
                      : l == 'widget' && Sh(e, t, n)
              }
              t.changes = null
            }
            function dr(e) {
              return (
                e.node == e.text &&
                  ((e.node = A('div', null, null, 'position: relative')),
                  e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
                  e.node.appendChild(e.text),
                  v && L < 8 && (e.node.style.zIndex = 2)),
                e.node
              )
            }
            function xh(e, t) {
              var r = t.bgClass ? t.bgClass + ' ' + (t.line.bgClass || '') : t.line.bgClass
              if ((r && (r += ' CodeMirror-linebackground'), t.background))
                r
                  ? (t.background.className = r)
                  : (t.background.parentNode.removeChild(t.background), (t.background = null))
              else if (r) {
                var n = dr(t)
                ;((t.background = n.insertBefore(A('div', null, r), n.firstChild)),
                  e.display.input.setUneditable(t.background))
              }
            }
            function rs(e, t) {
              var r = e.display.externalMeasured
              return r && r.line == t.line
                ? ((e.display.externalMeasured = null), (t.measure = r.measure), r.built)
                : Va(e, t)
            }
            function kh(e, t) {
              var r = t.text.className,
                n = rs(e, t)
              ;(t.text == t.node && (t.node = n.pre),
                t.text.parentNode.replaceChild(n.pre, t.text),
                (t.text = n.pre),
                n.bgClass != t.bgClass || n.textClass != t.textClass
                  ? ((t.bgClass = n.bgClass), (t.textClass = n.textClass), xl(e, t))
                  : r && (t.text.className = r))
            }
            function xl(e, t) {
              ;(xh(e, t),
                t.line.wrapClass
                  ? (dr(t).className = t.line.wrapClass)
                  : t.node != t.text && (t.node.className = ''))
              var r = t.textClass ? t.textClass + ' ' + (t.line.textClass || '') : t.line.textClass
              t.text.className = r || ''
            }
            function is(e, t, r, n) {
              if (
                (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
                t.gutterBackground &&
                  (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
                t.line.gutterClass)
              ) {
                var i = dr(t)
                ;((t.gutterBackground = A(
                  'div',
                  null,
                  'CodeMirror-gutter-background ' + t.line.gutterClass,
                  'left: ' +
                    (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                    'px; width: ' +
                    n.gutterTotalWidth +
                    'px',
                )),
                  e.display.input.setUneditable(t.gutterBackground),
                  i.insertBefore(t.gutterBackground, t.text))
              }
              var l = t.line.gutterMarkers
              if (e.options.lineNumbers || l) {
                var o = dr(t),
                  a = (t.gutter = A(
                    'div',
                    null,
                    'CodeMirror-gutter-wrapper',
                    'left: ' + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + 'px',
                  ))
                if (
                  (a.setAttribute('aria-hidden', 'true'),
                  e.display.input.setUneditable(a),
                  o.insertBefore(a, t.text),
                  t.line.gutterClass && (a.className += ' ' + t.line.gutterClass),
                  e.options.lineNumbers &&
                    (!l || !l['CodeMirror-linenumbers']) &&
                    (t.lineNumber = a.appendChild(
                      A(
                        'div',
                        fl(e.options, r),
                        'CodeMirror-linenumber CodeMirror-gutter-elt',
                        'left: ' +
                          n.gutterLeft['CodeMirror-linenumbers'] +
                          'px; width: ' +
                          e.display.lineNumInnerWidth +
                          'px',
                      ),
                    )),
                  l)
                )
                  for (var f = 0; f < e.display.gutterSpecs.length; ++f) {
                    var c = e.display.gutterSpecs[f].className,
                      k = l.hasOwnProperty(c) && l[c]
                    k &&
                      a.appendChild(
                        A(
                          'div',
                          [k],
                          'CodeMirror-gutter-elt',
                          'left: ' + n.gutterLeft[c] + 'px; width: ' + n.gutterWidth[c] + 'px',
                        ),
                      )
                  }
              }
            }
            function Sh(e, t, r) {
              t.alignable && (t.alignable = null)
              for (var n = X('CodeMirror-linewidget'), i = t.node.firstChild, l = void 0; i; i = l)
                ((l = i.nextSibling), n.test(i.className) && t.node.removeChild(i))
              ls(e, t, r)
            }
            function wh(e, t, r, n) {
              var i = rs(e, t)
              return (
                (t.text = t.node = i.pre),
                i.bgClass && (t.bgClass = i.bgClass),
                i.textClass && (t.textClass = i.textClass),
                xl(e, t),
                is(e, t, r, n),
                ls(e, t, n),
                t.node
              )
            }
            function ls(e, t, r) {
              if ((os(e, t.line, t, r, !0), t.rest))
                for (var n = 0; n < t.rest.length; n++) os(e, t.rest[n], t, r, !1)
            }
            function os(e, t, r, n, i) {
              if (t.widgets)
                for (var l = dr(r), o = 0, a = t.widgets; o < a.length; ++o) {
                  var f = a[o],
                    c = A(
                      'div',
                      [f.node],
                      'CodeMirror-linewidget' + (f.className ? ' ' + f.className : ''),
                    )
                  ;(f.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
                    Lh(f, c, r, n),
                    e.display.input.setUneditable(c),
                    i && f.above ? l.insertBefore(c, r.gutter || r.text) : l.appendChild(c),
                    ze(f, 'redraw'))
                }
            }
            function Lh(e, t, r, n) {
              if (e.noHScroll) {
                ;(r.alignable || (r.alignable = [])).push(t)
                var i = n.wrapperWidth
                ;((t.style.left = n.fixedPos + 'px'),
                  e.coverGutter ||
                    ((i -= n.gutterTotalWidth), (t.style.paddingLeft = n.gutterTotalWidth + 'px')),
                  (t.style.width = i + 'px'))
              }
              e.coverGutter &&
                ((t.style.zIndex = 5),
                (t.style.position = 'relative'),
                e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + 'px'))
            }
            function pr(e) {
              if (e.height != null) return e.height
              var t = e.doc.cm
              if (!t) return 0
              if (!te(document.body, e.node)) {
                var r = 'position: relative;'
                ;(e.coverGutter && (r += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
                  e.noHScroll && (r += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
                  se(t.display.measure, A('div', [e.node], null, r)))
              }
              return (e.height = e.node.parentNode.offsetHeight)
            }
            function Et(e, t) {
              for (var r = tl(t); r != e.wrapper; r = r.parentNode)
                if (
                  !r ||
                  (r.nodeType == 1 && r.getAttribute('cm-ignore-events') == 'true') ||
                  (r.parentNode == e.sizer && r != e.mover)
                )
                  return !0
            }
            function si(e) {
              return e.lineSpace.offsetTop
            }
            function kl(e) {
              return e.mover.offsetHeight - e.lineSpace.offsetHeight
            }
            function as(e) {
              if (e.cachedPaddingH) return e.cachedPaddingH
              var t = se(e.measure, A('pre', 'x', 'CodeMirror-line-like')),
                r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                n = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) }
              return (!isNaN(n.left) && !isNaN(n.right) && (e.cachedPaddingH = n), n)
            }
            function Ct(e) {
              return De - e.display.nativeBarWidth
            }
            function nn(e) {
              return e.display.scroller.clientWidth - Ct(e) - e.display.barWidth
            }
            function Sl(e) {
              return e.display.scroller.clientHeight - Ct(e) - e.display.barHeight
            }
            function Ch(e, t, r) {
              var n = e.options.lineWrapping,
                i = n && nn(e)
              if (!t.measure.heights || (n && t.measure.width != i)) {
                var l = (t.measure.heights = [])
                if (n) {
                  t.measure.width = i
                  for (var o = t.text.firstChild.getClientRects(), a = 0; a < o.length - 1; a++) {
                    var f = o[a],
                      c = o[a + 1]
                    Math.abs(f.bottom - c.bottom) > 2 && l.push((f.bottom + c.top) / 2 - r.top)
                  }
                }
                l.push(r.bottom - r.top)
              }
            }
            function ss(e, t, r) {
              if (e.line == t) return { map: e.measure.map, cache: e.measure.cache }
              if (e.rest) {
                for (var n = 0; n < e.rest.length; n++)
                  if (e.rest[n] == t) return { map: e.measure.maps[n], cache: e.measure.caches[n] }
                for (var i = 0; i < e.rest.length; i++)
                  if (ke(e.rest[i]) > r)
                    return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 }
              }
            }
            function Th(e, t) {
              t = mt(t)
              var r = ke(t),
                n = (e.display.externalMeasured = new ts(e.doc, t, r))
              n.lineN = r
              var i = (n.built = Va(e, n))
              return ((n.text = i.pre), se(e.display.lineMeasure, i.pre), n)
            }
            function us(e, t, r, n) {
              return Tt(e, Cn(e, t), r, n)
            }
            function wl(e, t) {
              if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[on(e, t)]
              var r = e.display.externalMeasured
              if (r && t >= r.lineN && t < r.lineN + r.size) return r
            }
            function Cn(e, t) {
              var r = ke(t),
                n = wl(e, r)
              ;(n && !n.text
                ? (n = null)
                : n && n.changes && (ns(e, n, r, Dl(e)), (e.curOp.forceUpdate = !0)),
                n || (n = Th(e, t)))
              var i = ss(n, t, r)
              return {
                line: t,
                view: n,
                rect: null,
                map: i.map,
                cache: i.cache,
                before: i.before,
                hasHeights: !1,
              }
            }
            function Tt(e, t, r, n, i) {
              t.before && (r = -1)
              var l = r + (n || ''),
                o
              return (
                t.cache.hasOwnProperty(l)
                  ? (o = t.cache[l])
                  : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                    t.hasHeights || (Ch(e, t.view, t.rect), (t.hasHeights = !0)),
                    (o = Dh(e, t, r, n)),
                    o.bogus || (t.cache[l] = o)),
                {
                  left: o.left,
                  right: o.right,
                  top: i ? o.rtop : o.top,
                  bottom: i ? o.rbottom : o.bottom,
                }
              )
            }
            var fs = { left: 0, right: 0, top: 0, bottom: 0 }
            function hs(e, t, r) {
              for (var n, i, l, o, a, f, c = 0; c < e.length; c += 3)
                if (
                  ((a = e[c]),
                  (f = e[c + 1]),
                  t < a
                    ? ((i = 0), (l = 1), (o = 'left'))
                    : t < f
                      ? ((i = t - a), (l = i + 1))
                      : (c == e.length - 3 || (t == f && e[c + 3] > t)) &&
                        ((l = f - a), (i = l - 1), t >= f && (o = 'right')),
                  i != null)
                ) {
                  if (
                    ((n = e[c + 2]),
                    a == f && r == (n.insertLeft ? 'left' : 'right') && (o = r),
                    r == 'left' && i == 0)
                  )
                    for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                      ((n = e[(c -= 3) + 2]), (o = 'left'))
                  if (r == 'right' && i == f - a)
                    for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft; )
                      ((n = e[(c += 3) + 2]), (o = 'right'))
                  break
                }
              return { node: n, start: i, end: l, collapse: o, coverStart: a, coverEnd: f }
            }
            function _h(e, t) {
              var r = fs
              if (t == 'left') for (var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
              else for (var i = e.length - 1; i >= 0 && (r = e[i]).left == r.right; i--);
              return r
            }
            function Dh(e, t, r, n) {
              var i = hs(t.map, r, n),
                l = i.node,
                o = i.start,
                a = i.end,
                f = i.collapse,
                c
              if (l.nodeType == 3) {
                for (var k = 0; k < 4; k++) {
                  for (; o && Ji(t.line.text.charAt(i.coverStart + o)); ) --o
                  for (
                    ;
                    i.coverStart + a < i.coverEnd && Ji(t.line.text.charAt(i.coverStart + a));
                  )
                    ++a
                  if (
                    (v && L < 9 && o == 0 && a == i.coverEnd - i.coverStart
                      ? (c = l.parentNode.getBoundingClientRect())
                      : (c = _h(q(l, o, a).getClientRects(), n)),
                    c.left || c.right || o == 0)
                  )
                    break
                  ;((a = o), (o = o - 1), (f = 'right'))
                }
                v && L < 11 && (c = Mh(e.display.measure, c))
              } else {
                o > 0 && (f = n = 'right')
                var w
                e.options.lineWrapping && (w = l.getClientRects()).length > 1
                  ? (c = w[n == 'right' ? w.length - 1 : 0])
                  : (c = l.getBoundingClientRect())
              }
              if (v && L < 9 && !o && (!c || (!c.left && !c.right))) {
                var E = l.parentNode.getClientRects()[0]
                E
                  ? (c = {
                      left: E.left,
                      right: E.left + _n(e.display),
                      top: E.top,
                      bottom: E.bottom,
                    })
                  : (c = fs)
              }
              for (
                var M = c.top - t.rect.top,
                  H = c.bottom - t.rect.top,
                  W = (M + H) / 2,
                  j = t.view.measure.heights,
                  U = 0;
                U < j.length - 1 && !(W < j[U]);
                U++
              );
              var $ = U ? j[U - 1] : 0,
                K = j[U],
                Q = {
                  left: (f == 'right' ? c.right : c.left) - t.rect.left,
                  right: (f == 'left' ? c.left : c.right) - t.rect.left,
                  top: $,
                  bottom: K,
                }
              return (
                !c.left && !c.right && (Q.bogus = !0),
                e.options.singleCursorHeightPerLine || ((Q.rtop = M), (Q.rbottom = H)),
                Q
              )
            }
            function Mh(e, t) {
              if (
                !window.screen ||
                screen.logicalXDPI == null ||
                screen.logicalXDPI == screen.deviceXDPI ||
                !Gf(e)
              )
                return t
              var r = screen.logicalXDPI / screen.deviceXDPI,
                n = screen.logicalYDPI / screen.deviceYDPI
              return { left: t.left * r, right: t.right * r, top: t.top * n, bottom: t.bottom * n }
            }
            function cs(e) {
              if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
                for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
            }
            function ds(e) {
              ;((e.display.externalMeasure = null), V(e.display.lineMeasure))
              for (var t = 0; t < e.display.view.length; t++) cs(e.display.view[t])
            }
            function gr(e) {
              ;(ds(e),
                (e.display.cachedCharWidth =
                  e.display.cachedTextHeight =
                  e.display.cachedPaddingH =
                    null),
                e.options.lineWrapping || (e.display.maxLineChanged = !0),
                (e.display.lineNumChars = null))
            }
            function ps(e) {
              return _ && N
                ? -(
                    e.body.getBoundingClientRect().left -
                    parseInt(getComputedStyle(e.body).marginLeft)
                  )
                : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft
            }
            function gs(e) {
              return _ && N
                ? -(
                    e.body.getBoundingClientRect().top -
                    parseInt(getComputedStyle(e.body).marginTop)
                  )
                : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop
            }
            function Ll(e) {
              var t = mt(e),
                r = t.widgets,
                n = 0
              if (r) for (var i = 0; i < r.length; ++i) r[i].above && (n += pr(r[i]))
              return n
            }
            function ui(e, t, r, n, i) {
              if (!i) {
                var l = Ll(t)
                ;((r.top += l), (r.bottom += l))
              }
              if (n == 'line') return r
              n || (n = 'local')
              var o = At(t)
              if (
                (n == 'local' ? (o += si(e.display)) : (o -= e.display.viewOffset),
                n == 'page' || n == 'window')
              ) {
                var a = e.display.lineSpace.getBoundingClientRect()
                o += a.top + (n == 'window' ? 0 : gs(y(e)))
                var f = a.left + (n == 'window' ? 0 : ps(y(e)))
                ;((r.left += f), (r.right += f))
              }
              return ((r.top += o), (r.bottom += o), r)
            }
            function vs(e, t, r) {
              if (r == 'div') return t
              var n = t.left,
                i = t.top
              if (r == 'page') ((n -= ps(y(e))), (i -= gs(y(e))))
              else if (r == 'local' || !r) {
                var l = e.display.sizer.getBoundingClientRect()
                ;((n += l.left), (i += l.top))
              }
              var o = e.display.lineSpace.getBoundingClientRect()
              return { left: n - o.left, top: i - o.top }
            }
            function fi(e, t, r, n, i) {
              return (n || (n = ne(e.doc, t.line)), ui(e, n, us(e, n, t.ch, i), r))
            }
            function yt(e, t, r, n, i, l) {
              ;((n = n || ne(e.doc, t.line)), i || (i = Cn(e, n)))
              function o(H, W) {
                var j = Tt(e, i, H, W ? 'right' : 'left', l)
                return (W ? (j.left = j.right) : (j.right = j.left), ui(e, n, j, r))
              }
              var a = Mt(n, e.doc.direction),
                f = t.ch,
                c = t.sticky
              if (
                (f >= n.text.length
                  ? ((f = n.text.length), (c = 'before'))
                  : f <= 0 && ((f = 0), (c = 'after')),
                !a)
              )
                return o(c == 'before' ? f - 1 : f, c == 'before')
              function k(H, W, j) {
                var U = a[W],
                  $ = U.level == 1
                return o(j ? H - 1 : H, $ != j)
              }
              var w = ar(a, f, c),
                E = or,
                M = k(f, w, c == 'before')
              return (E != null && (M.other = k(f, E, c != 'before')), M)
            }
            function ms(e, t) {
              var r = 0
              ;((t = he(e.doc, t)), e.options.lineWrapping || (r = _n(e.display) * t.ch))
              var n = ne(e.doc, t.line),
                i = At(n) + si(e.display)
              return { left: r, right: r, top: i, bottom: i + n.height }
            }
            function Cl(e, t, r, n, i) {
              var l = B(e, t, r)
              return ((l.xRel = i), n && (l.outside = n), l)
            }
            function Tl(e, t, r) {
              var n = e.doc
              if (((r += e.display.viewOffset), r < 0)) return Cl(n.first, 0, null, -1, -1)
              var i = tn(n, r),
                l = n.first + n.size - 1
              if (i > l) return Cl(n.first + n.size - 1, ne(n, l).text.length, null, 1, 1)
              t < 0 && (t = 0)
              for (var o = ne(n, i); ; ) {
                var a = Oh(e, o, i, t, r),
                  f = ih(o, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0))
                if (!f) return a
                var c = f.find(1)
                if (c.line == i) return c
                o = ne(n, (i = c.line))
              }
            }
            function ys(e, t, r, n) {
              n -= Ll(t)
              var i = t.text.length,
                l = lr(
                  function (o) {
                    return Tt(e, r, o - 1).bottom <= n
                  },
                  i,
                  0,
                )
              return (
                (i = lr(
                  function (o) {
                    return Tt(e, r, o).top > n
                  },
                  l,
                  i,
                )),
                { begin: l, end: i }
              )
            }
            function bs(e, t, r, n) {
              r || (r = Cn(e, t))
              var i = ui(e, t, Tt(e, r, n), 'line').top
              return ys(e, t, r, i)
            }
            function _l(e, t, r, n) {
              return e.bottom <= r ? !1 : e.top > r ? !0 : (n ? e.left : e.right) > t
            }
            function Oh(e, t, r, n, i) {
              i -= At(t)
              var l = Cn(e, t),
                o = Ll(t),
                a = 0,
                f = t.text.length,
                c = !0,
                k = Mt(t, e.doc.direction)
              if (k) {
                var w = (e.options.lineWrapping ? Eh : Ah)(e, t, r, l, k, n, i)
                ;((c = w.level != 1), (a = c ? w.from : w.to - 1), (f = c ? w.to : w.from - 1))
              }
              var E = null,
                M = null,
                H = lr(
                  function (ie) {
                    var re = Tt(e, l, ie)
                    return (
                      (re.top += o),
                      (re.bottom += o),
                      _l(re, n, i, !1)
                        ? (re.top <= i && re.left <= n && ((E = ie), (M = re)), !0)
                        : !1
                    )
                  },
                  a,
                  f,
                ),
                W,
                j,
                U = !1
              if (M) {
                var $ = n - M.left < M.right - n,
                  K = $ == c
                ;((H = E + (K ? 0 : 1)), (j = K ? 'after' : 'before'), (W = $ ? M.left : M.right))
              } else {
                ;(!c && (H == f || H == a) && H++,
                  (j =
                    H == 0
                      ? 'after'
                      : H == t.text.length
                        ? 'before'
                        : Tt(e, l, H - (c ? 1 : 0)).bottom + o <= i == c
                          ? 'after'
                          : 'before'))
                var Q = yt(e, B(r, H, j), 'line', t, l)
                ;((W = Q.left), (U = i < Q.top ? -1 : i >= Q.bottom ? 1 : 0))
              }
              return ((H = Ma(t.text, H, 1)), Cl(r, H, j, U, n - W))
            }
            function Ah(e, t, r, n, i, l, o) {
              var a = lr(
                  function (w) {
                    var E = i[w],
                      M = E.level != 1
                    return _l(
                      yt(e, B(r, M ? E.to : E.from, M ? 'before' : 'after'), 'line', t, n),
                      l,
                      o,
                      !0,
                    )
                  },
                  0,
                  i.length - 1,
                ),
                f = i[a]
              if (a > 0) {
                var c = f.level != 1,
                  k = yt(e, B(r, c ? f.from : f.to, c ? 'after' : 'before'), 'line', t, n)
                _l(k, l, o, !0) && k.top > o && (f = i[a - 1])
              }
              return f
            }
            function Eh(e, t, r, n, i, l, o) {
              var a = ys(e, t, n, o),
                f = a.begin,
                c = a.end
              ;/\s/.test(t.text.charAt(c - 1)) && c--
              for (var k = null, w = null, E = 0; E < i.length; E++) {
                var M = i[E]
                if (!(M.from >= c || M.to <= f)) {
                  var H = M.level != 1,
                    W = Tt(e, n, H ? Math.min(c, M.to) - 1 : Math.max(f, M.from)).right,
                    j = W < l ? l - W + 1e9 : W - l
                  ;(!k || w > j) && ((k = M), (w = j))
                }
              }
              return (
                k || (k = i[i.length - 1]),
                k.from < f && (k = { from: f, to: k.to, level: k.level }),
                k.to > c && (k = { from: k.from, to: c, level: k.level }),
                k
              )
            }
            var rn
            function Tn(e) {
              if (e.cachedTextHeight != null) return e.cachedTextHeight
              if (rn == null) {
                rn = A('pre', null, 'CodeMirror-line-like')
                for (var t = 0; t < 49; ++t)
                  (rn.appendChild(document.createTextNode('x')), rn.appendChild(A('br')))
                rn.appendChild(document.createTextNode('x'))
              }
              se(e.measure, rn)
              var r = rn.offsetHeight / 50
              return (r > 3 && (e.cachedTextHeight = r), V(e.measure), r || 1)
            }
            function _n(e) {
              if (e.cachedCharWidth != null) return e.cachedCharWidth
              var t = A('span', 'xxxxxxxxxx'),
                r = A('pre', [t], 'CodeMirror-line-like')
              se(e.measure, r)
              var n = t.getBoundingClientRect(),
                i = (n.right - n.left) / 10
              return (i > 2 && (e.cachedCharWidth = i), i || 10)
            }
            function Dl(e) {
              for (
                var t = e.display,
                  r = {},
                  n = {},
                  i = t.gutters.clientLeft,
                  l = t.gutters.firstChild,
                  o = 0;
                l;
                l = l.nextSibling, ++o
              ) {
                var a = e.display.gutterSpecs[o].className
                ;((r[a] = l.offsetLeft + l.clientLeft + i), (n[a] = l.clientWidth))
              }
              return {
                fixedPos: Ml(t),
                gutterTotalWidth: t.gutters.offsetWidth,
                gutterLeft: r,
                gutterWidth: n,
                wrapperWidth: t.wrapper.clientWidth,
              }
            }
            function Ml(e) {
              return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
            }
            function xs(e) {
              var t = Tn(e.display),
                r = e.options.lineWrapping,
                n = r && Math.max(5, e.display.scroller.clientWidth / _n(e.display) - 3)
              return function (i) {
                if (Bt(e.doc, i)) return 0
                var l = 0
                if (i.widgets)
                  for (var o = 0; o < i.widgets.length; o++)
                    i.widgets[o].height && (l += i.widgets[o].height)
                return r ? l + (Math.ceil(i.text.length / n) || 1) * t : l + t
              }
            }
            function Ol(e) {
              var t = e.doc,
                r = xs(e)
              t.iter(function (n) {
                var i = r(n)
                i != n.height && wt(n, i)
              })
            }
            function ln(e, t, r, n) {
              var i = e.display
              if (!r && tl(t).getAttribute('cm-not-content') == 'true') return null
              var l,
                o,
                a = i.lineSpace.getBoundingClientRect()
              try {
                ;((l = t.clientX - a.left), (o = t.clientY - a.top))
              } catch {
                return null
              }
              var f = Tl(e, l, o),
                c
              if (n && f.xRel > 0 && (c = ne(e.doc, f.line).text).length == f.ch) {
                var k = Re(c, c.length, e.options.tabSize) - c.length
                f = B(f.line, Math.max(0, Math.round((l - as(e.display).left) / _n(e.display)) - k))
              }
              return f
            }
            function on(e, t) {
              if (t >= e.display.viewTo || ((t -= e.display.viewFrom), t < 0)) return null
              for (var r = e.display.view, n = 0; n < r.length; n++)
                if (((t -= r[n].size), t < 0)) return n
            }
            function rt(e, t, r, n) {
              ;(t == null && (t = e.doc.first),
                r == null && (r = e.doc.first + e.doc.size),
                n || (n = 0))
              var i = e.display
              if (
                (n &&
                  r < i.viewTo &&
                  (i.updateLineNumbers == null || i.updateLineNumbers > t) &&
                  (i.updateLineNumbers = t),
                (e.curOp.viewChanged = !0),
                t >= i.viewTo)
              )
                Ot && ml(e.doc, t) < i.viewTo && jt(e)
              else if (r <= i.viewFrom)
                Ot && Qa(e.doc, r + n) > i.viewFrom ? jt(e) : ((i.viewFrom += n), (i.viewTo += n))
              else if (t <= i.viewFrom && r >= i.viewTo) jt(e)
              else if (t <= i.viewFrom) {
                var l = hi(e, r, r + n, 1)
                l
                  ? ((i.view = i.view.slice(l.index)), (i.viewFrom = l.lineN), (i.viewTo += n))
                  : jt(e)
              } else if (r >= i.viewTo) {
                var o = hi(e, t, t, -1)
                o ? ((i.view = i.view.slice(0, o.index)), (i.viewTo = o.lineN)) : jt(e)
              } else {
                var a = hi(e, t, t, -1),
                  f = hi(e, r, r + n, 1)
                a && f
                  ? ((i.view = i.view
                      .slice(0, a.index)
                      .concat(ai(e, a.lineN, f.lineN))
                      .concat(i.view.slice(f.index))),
                    (i.viewTo += n))
                  : jt(e)
              }
              var c = i.externalMeasured
              c &&
                (r < c.lineN ? (c.lineN += n) : t < c.lineN + c.size && (i.externalMeasured = null))
            }
            function zt(e, t, r) {
              e.curOp.viewChanged = !0
              var n = e.display,
                i = e.display.externalMeasured
              if (
                (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null),
                !(t < n.viewFrom || t >= n.viewTo))
              ) {
                var l = n.view[on(e, t)]
                if (l.node != null) {
                  var o = l.changes || (l.changes = [])
                  Ce(o, r) == -1 && o.push(r)
                }
              }
            }
            function jt(e) {
              ;((e.display.viewFrom = e.display.viewTo = e.doc.first),
                (e.display.view = []),
                (e.display.viewOffset = 0))
            }
            function hi(e, t, r, n) {
              var i = on(e, t),
                l,
                o = e.display.view
              if (!Ot || r == e.doc.first + e.doc.size) return { index: i, lineN: r }
              for (var a = e.display.viewFrom, f = 0; f < i; f++) a += o[f].size
              if (a != t) {
                if (n > 0) {
                  if (i == o.length - 1) return null
                  ;((l = a + o[i].size - t), i++)
                } else l = a - t
                ;((t += l), (r += l))
              }
              for (; ml(e.doc, r) != r; ) {
                if (i == (n < 0 ? 0 : o.length - 1)) return null
                ;((r += n * o[i - (n < 0 ? 1 : 0)].size), (i += n))
              }
              return { index: i, lineN: r }
            }
            function Nh(e, t, r) {
              var n = e.display,
                i = n.view
              ;(i.length == 0 || t >= n.viewTo || r <= n.viewFrom
                ? ((n.view = ai(e, t, r)), (n.viewFrom = t))
                : (n.viewFrom > t
                    ? (n.view = ai(e, t, n.viewFrom).concat(n.view))
                    : n.viewFrom < t && (n.view = n.view.slice(on(e, t))),
                  (n.viewFrom = t),
                  n.viewTo < r
                    ? (n.view = n.view.concat(ai(e, n.viewTo, r)))
                    : n.viewTo > r && (n.view = n.view.slice(0, on(e, r)))),
                (n.viewTo = r))
            }
            function ks(e) {
              for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
                var i = t[n]
                !i.hidden && (!i.node || i.changes) && ++r
              }
              return r
            }
            function vr(e) {
              e.display.input.showSelection(e.display.input.prepareSelection())
            }
            function Ss(e, t) {
              t === void 0 && (t = !0)
              var r = e.doc,
                n = {},
                i = (n.cursors = document.createDocumentFragment()),
                l = (n.selection = document.createDocumentFragment()),
                o = e.options.$customCursor
              o && (t = !0)
              for (var a = 0; a < r.sel.ranges.length; a++)
                if (!(!t && a == r.sel.primIndex)) {
                  var f = r.sel.ranges[a]
                  if (!(f.from().line >= e.display.viewTo || f.to().line < e.display.viewFrom)) {
                    var c = f.empty()
                    if (o) {
                      var k = o(e, f)
                      k && Al(e, k, i)
                    } else (c || e.options.showCursorWhenSelecting) && Al(e, f.head, i)
                    c || Fh(e, f, l)
                  }
                }
              return n
            }
            function Al(e, t, r) {
              var n = yt(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
                i = r.appendChild(A('div', ' ', 'CodeMirror-cursor'))
              if (
                ((i.style.left = n.left + 'px'),
                (i.style.top = n.top + 'px'),
                (i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + 'px'),
                /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
              ) {
                var l = fi(e, t, 'div', null, null),
                  o = l.right - l.left
                i.style.width = (o > 0 ? o : e.defaultCharWidth()) + 'px'
              }
              if (n.other) {
                var a = r.appendChild(A('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor'))
                ;((a.style.display = ''),
                  (a.style.left = n.other.left + 'px'),
                  (a.style.top = n.other.top + 'px'),
                  (a.style.height = (n.other.bottom - n.other.top) * 0.85 + 'px'))
              }
            }
            function ci(e, t) {
              return e.top - t.top || e.left - t.left
            }
            function Fh(e, t, r) {
              var n = e.display,
                i = e.doc,
                l = document.createDocumentFragment(),
                o = as(e.display),
                a = o.left,
                f = Math.max(n.sizerWidth, nn(e) - n.sizer.offsetLeft) - o.right,
                c = i.direction == 'ltr'
              function k(K, Q, ie, re) {
                ;(Q < 0 && (Q = 0),
                  (Q = Math.round(Q)),
                  (re = Math.round(re)),
                  l.appendChild(
                    A(
                      'div',
                      null,
                      'CodeMirror-selected',
                      'position: absolute; left: ' +
                        K +
                        `px;
                             top: ` +
                        Q +
                        'px; width: ' +
                        (ie ?? f - K) +
                        `px;
                             height: ` +
                        (re - Q) +
                        'px',
                    ),
                  ))
              }
              function w(K, Q, ie) {
                var re = ne(i, K),
                  pe = re.text.length,
                  we,
                  Ge
                function _e(Fe, ot) {
                  return fi(e, B(K, Fe), 'div', re, ot)
                }
                function ut(Fe, ot, Ke) {
                  var Ie = bs(e, re, null, Fe),
                    He = (ot == 'ltr') == (Ke == 'after') ? 'left' : 'right',
                    Me =
                      Ke == 'after'
                        ? Ie.begin
                        : Ie.end - (/\s/.test(re.text.charAt(Ie.end - 1)) ? 2 : 1)
                  return _e(Me, He)[He]
                }
                var lt = Mt(re, i.direction)
                return (
                  Pf(lt, Q || 0, ie ?? pe, function (Fe, ot, Ke, Ie) {
                    var He = Ke == 'ltr',
                      Me = _e(Fe, He ? 'left' : 'right'),
                      at = _e(ot - 1, He ? 'right' : 'left'),
                      Bn = Q == null && Fe == 0,
                      Yt = ie == null && ot == pe,
                      Ye = Ie == 0,
                      _t = !lt || Ie == lt.length - 1
                    if (at.top - Me.top <= 3) {
                      var Ue = (c ? Bn : Yt) && Ye,
                        io = (c ? Yt : Bn) && _t,
                        Ht = Ue ? a : (He ? Me : at).left,
                        hn = io ? f : (He ? at : Me).right
                      k(Ht, Me.top, hn - Ht, Me.bottom)
                    } else {
                      var cn, Je, zn, lo
                      ;(He
                        ? ((cn = c && Bn && Ye ? a : Me.left),
                          (Je = c ? f : ut(Fe, Ke, 'before')),
                          (zn = c ? a : ut(ot, Ke, 'after')),
                          (lo = c && Yt && _t ? f : at.right))
                        : ((cn = c ? ut(Fe, Ke, 'before') : a),
                          (Je = !c && Bn && Ye ? f : Me.right),
                          (zn = !c && Yt && _t ? a : at.left),
                          (lo = c ? ut(ot, Ke, 'after') : f)),
                        k(cn, Me.top, Je - cn, Me.bottom),
                        Me.bottom < at.top && k(a, Me.bottom, null, at.top),
                        k(zn, at.top, lo - zn, at.bottom))
                    }
                    ;((!we || ci(Me, we) < 0) && (we = Me),
                      ci(at, we) < 0 && (we = at),
                      (!Ge || ci(Me, Ge) < 0) && (Ge = Me),
                      ci(at, Ge) < 0 && (Ge = at))
                  }),
                  { start: we, end: Ge }
                )
              }
              var E = t.from(),
                M = t.to()
              if (E.line == M.line) w(E.line, E.ch, M.ch)
              else {
                var H = ne(i, E.line),
                  W = ne(i, M.line),
                  j = mt(H) == mt(W),
                  U = w(E.line, E.ch, j ? H.text.length + 1 : null).end,
                  $ = w(M.line, j ? 0 : null, M.ch).start
                ;(j &&
                  (U.top < $.top - 2
                    ? (k(U.right, U.top, null, U.bottom), k(a, $.top, $.left, $.bottom))
                    : k(U.right, U.top, $.left - U.right, U.bottom)),
                  U.bottom < $.top && k(a, U.bottom, null, $.top))
              }
              r.appendChild(l)
            }
            function El(e) {
              if (e.state.focused) {
                var t = e.display
                clearInterval(t.blinker)
                var r = !0
                ;((t.cursorDiv.style.visibility = ''),
                  e.options.cursorBlinkRate > 0
                    ? (t.blinker = setInterval(function () {
                        ;(e.hasFocus() || Dn(e),
                          (t.cursorDiv.style.visibility = (r = !r) ? '' : 'hidden'))
                      }, e.options.cursorBlinkRate))
                    : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = 'hidden'))
              }
            }
            function ws(e) {
              e.hasFocus() || (e.display.input.focus(), e.state.focused || Fl(e))
            }
            function Nl(e) {
              ;((e.state.delayingBlurEvent = !0),
                setTimeout(function () {
                  e.state.delayingBlurEvent &&
                    ((e.state.delayingBlurEvent = !1), e.state.focused && Dn(e))
                }, 100))
            }
            function Fl(e, t) {
              ;(e.state.delayingBlurEvent &&
                !e.state.draggingText &&
                (e.state.delayingBlurEvent = !1),
                e.options.readOnly != 'nocursor' &&
                  (e.state.focused ||
                    (Ee(e, 'focus', e, t),
                    (e.state.focused = !0),
                    Le(e.display.wrapper, 'CodeMirror-focused'),
                    !e.curOp &&
                      e.display.selForContextMenu != e.doc.sel &&
                      (e.display.input.reset(),
                      g &&
                        setTimeout(function () {
                          return e.display.input.reset(!0)
                        }, 20)),
                    e.display.input.receivedFocus()),
                  El(e)))
            }
            function Dn(e, t) {
              e.state.delayingBlurEvent ||
                (e.state.focused &&
                  (Ee(e, 'blur', e, t),
                  (e.state.focused = !1),
                  oe(e.display.wrapper, 'CodeMirror-focused')),
                clearInterval(e.display.blinker),
                setTimeout(function () {
                  e.state.focused || (e.display.shift = !1)
                }, 150))
            }
            function di(e) {
              for (
                var t = e.display,
                  r = t.lineDiv.offsetTop,
                  n = Math.max(0, t.scroller.getBoundingClientRect().top),
                  i = t.lineDiv.getBoundingClientRect().top,
                  l = 0,
                  o = 0;
                o < t.view.length;
                o++
              ) {
                var a = t.view[o],
                  f = e.options.lineWrapping,
                  c = void 0,
                  k = 0
                if (!a.hidden) {
                  if (((i += a.line.height), v && L < 8)) {
                    var w = a.node.offsetTop + a.node.offsetHeight
                    ;((c = w - r), (r = w))
                  } else {
                    var E = a.node.getBoundingClientRect()
                    ;((c = E.bottom - E.top),
                      !f &&
                        a.text.firstChild &&
                        (k = a.text.firstChild.getBoundingClientRect().right - E.left - 1))
                  }
                  var M = a.line.height - c
                  if (
                    (M > 0.005 || M < -0.005) &&
                    (i < n && (l -= M), wt(a.line, c), Ls(a.line), a.rest)
                  )
                    for (var H = 0; H < a.rest.length; H++) Ls(a.rest[H])
                  if (k > e.display.sizerWidth) {
                    var W = Math.ceil(k / _n(e.display))
                    W > e.display.maxLineLength &&
                      ((e.display.maxLineLength = W),
                      (e.display.maxLine = a.line),
                      (e.display.maxLineChanged = !0))
                  }
                }
              }
              Math.abs(l) > 2 && (t.scroller.scrollTop += l)
            }
            function Ls(e) {
              if (e.widgets)
                for (var t = 0; t < e.widgets.length; ++t) {
                  var r = e.widgets[t],
                    n = r.node.parentNode
                  n && (r.height = n.offsetHeight)
                }
            }
            function pi(e, t, r) {
              var n = r && r.top != null ? Math.max(0, r.top) : e.scroller.scrollTop
              n = Math.floor(n - si(e))
              var i = r && r.bottom != null ? r.bottom : n + e.wrapper.clientHeight,
                l = tn(t, n),
                o = tn(t, i)
              if (r && r.ensure) {
                var a = r.ensure.from.line,
                  f = r.ensure.to.line
                a < l
                  ? ((l = a), (o = tn(t, At(ne(t, a)) + e.wrapper.clientHeight)))
                  : Math.min(f, t.lastLine()) >= o &&
                    ((l = tn(t, At(ne(t, f)) - e.wrapper.clientHeight)), (o = f))
              }
              return { from: l, to: Math.max(o, l + 1) }
            }
            function Hh(e, t) {
              if (!Be(e, 'scrollCursorIntoView')) {
                var r = e.display,
                  n = r.sizer.getBoundingClientRect(),
                  i = null,
                  l = r.wrapper.ownerDocument
                if (
                  (t.top + n.top < 0
                    ? (i = !0)
                    : t.bottom + n.top >
                        (l.defaultView.innerHeight || l.documentElement.clientHeight) && (i = !1),
                  i != null && !C)
                ) {
                  var o = A(
                    'div',
                    '​',
                    null,
                    `position: absolute;
                         top: ` +
                      (t.top - r.viewOffset - si(e.display)) +
                      `px;
                         height: ` +
                      (t.bottom - t.top + Ct(e) + r.barHeight) +
                      `px;
                         left: ` +
                      t.left +
                      'px; width: ' +
                      Math.max(2, t.right - t.left) +
                      'px;',
                  )
                  ;(e.display.lineSpace.appendChild(o),
                    o.scrollIntoView(i),
                    e.display.lineSpace.removeChild(o))
                }
              }
            }
            function Rh(e, t, r, n) {
              n == null && (n = 0)
              var i
              !e.options.lineWrapping &&
                t == r &&
                ((r = t.sticky == 'before' ? B(t.line, t.ch + 1, 'before') : t),
                (t = t.ch ? B(t.line, t.sticky == 'before' ? t.ch - 1 : t.ch, 'after') : t))
              for (var l = 0; l < 5; l++) {
                var o = !1,
                  a = yt(e, t),
                  f = !r || r == t ? a : yt(e, r)
                i = {
                  left: Math.min(a.left, f.left),
                  top: Math.min(a.top, f.top) - n,
                  right: Math.max(a.left, f.left),
                  bottom: Math.max(a.bottom, f.bottom) + n,
                }
                var c = Hl(e, i),
                  k = e.doc.scrollTop,
                  w = e.doc.scrollLeft
                if (
                  (c.scrollTop != null &&
                    (yr(e, c.scrollTop), Math.abs(e.doc.scrollTop - k) > 1 && (o = !0)),
                  c.scrollLeft != null &&
                    (an(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - w) > 1 && (o = !0)),
                  !o)
                )
                  break
              }
              return i
            }
            function Ph(e, t) {
              var r = Hl(e, t)
              ;(r.scrollTop != null && yr(e, r.scrollTop),
                r.scrollLeft != null && an(e, r.scrollLeft))
            }
            function Hl(e, t) {
              var r = e.display,
                n = Tn(e.display)
              t.top < 0 && (t.top = 0)
              var i =
                  e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : r.scroller.scrollTop,
                l = Sl(e),
                o = {}
              t.bottom - t.top > l && (t.bottom = t.top + l)
              var a = e.doc.height + kl(r),
                f = t.top < n,
                c = t.bottom > a - n
              if (t.top < i) o.scrollTop = f ? 0 : t.top
              else if (t.bottom > i + l) {
                var k = Math.min(t.top, (c ? a : t.bottom) - l)
                k != i && (o.scrollTop = k)
              }
              var w = e.options.fixedGutter ? 0 : r.gutters.offsetWidth,
                E =
                  e.curOp && e.curOp.scrollLeft != null
                    ? e.curOp.scrollLeft
                    : r.scroller.scrollLeft - w,
                M = nn(e) - r.gutters.offsetWidth,
                H = t.right - t.left > M
              return (
                H && (t.right = t.left + M),
                t.left < 10
                  ? (o.scrollLeft = 0)
                  : t.left < E
                    ? (o.scrollLeft = Math.max(0, t.left + w - (H ? 0 : 10)))
                    : t.right > M + E - 3 && (o.scrollLeft = t.right + (H ? 0 : 10) - M),
                o
              )
            }
            function Rl(e, t) {
              t != null &&
                (gi(e),
                (e.curOp.scrollTop =
                  (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + t))
            }
            function Mn(e) {
              gi(e)
              var t = e.getCursor()
              e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin }
            }
            function mr(e, t, r) {
              ;((t != null || r != null) && gi(e),
                t != null && (e.curOp.scrollLeft = t),
                r != null && (e.curOp.scrollTop = r))
            }
            function Ih(e, t) {
              ;(gi(e), (e.curOp.scrollToPos = t))
            }
            function gi(e) {
              var t = e.curOp.scrollToPos
              if (t) {
                e.curOp.scrollToPos = null
                var r = ms(e, t.from),
                  n = ms(e, t.to)
                Cs(e, r, n, t.margin)
              }
            }
            function Cs(e, t, r, n) {
              var i = Hl(e, {
                left: Math.min(t.left, r.left),
                top: Math.min(t.top, r.top) - n,
                right: Math.max(t.right, r.right),
                bottom: Math.max(t.bottom, r.bottom) + n,
              })
              mr(e, i.scrollLeft, i.scrollTop)
            }
            function yr(e, t) {
              Math.abs(e.doc.scrollTop - t) < 2 ||
                (p || Il(e, { top: t }), Ts(e, t, !0), p && Il(e), kr(e, 100))
            }
            function Ts(e, t, r) {
              ;((t = Math.max(
                0,
                Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t),
              )),
                !(e.display.scroller.scrollTop == t && !r) &&
                  ((e.doc.scrollTop = t),
                  e.display.scrollbars.setScrollTop(t),
                  e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t)))
            }
            function an(e, t, r, n) {
              ;((t = Math.max(
                0,
                Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth),
              )),
                !((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n) &&
                  ((e.doc.scrollLeft = t),
                  As(e),
                  e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
                  e.display.scrollbars.setScrollLeft(t)))
            }
            function br(e) {
              var t = e.display,
                r = t.gutters.offsetWidth,
                n = Math.round(e.doc.height + kl(e.display))
              return {
                clientHeight: t.scroller.clientHeight,
                viewHeight: t.wrapper.clientHeight,
                scrollWidth: t.scroller.scrollWidth,
                clientWidth: t.scroller.clientWidth,
                viewWidth: t.wrapper.clientWidth,
                barLeft: e.options.fixedGutter ? r : 0,
                docHeight: n,
                scrollHeight: n + Ct(e) + t.barHeight,
                nativeBarWidth: t.nativeBarWidth,
                gutterWidth: r,
              }
            }
            var sn = function (e, t, r) {
              this.cm = r
              var n = (this.vert = A(
                  'div',
                  [A('div', null, null, 'min-width: 1px')],
                  'CodeMirror-vscrollbar',
                )),
                i = (this.horiz = A(
                  'div',
                  [A('div', null, null, 'height: 100%; min-height: 1px')],
                  'CodeMirror-hscrollbar',
                ))
              ;((n.tabIndex = i.tabIndex = -1),
                e(n),
                e(i),
                ae(n, 'scroll', function () {
                  n.clientHeight && t(n.scrollTop, 'vertical')
                }),
                ae(i, 'scroll', function () {
                  i.clientWidth && t(i.scrollLeft, 'horizontal')
                }),
                (this.checkedZeroWidth = !1),
                v && L < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = '18px'))
            }
            ;((sn.prototype.update = function (e) {
              var t = e.scrollWidth > e.clientWidth + 1,
                r = e.scrollHeight > e.clientHeight + 1,
                n = e.nativeBarWidth
              if (r) {
                ;((this.vert.style.display = 'block'),
                  (this.vert.style.bottom = t ? n + 'px' : '0'))
                var i = e.viewHeight - (t ? n : 0)
                this.vert.firstChild.style.height =
                  Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px'
              } else
                ((this.vert.scrollTop = 0),
                  (this.vert.style.display = ''),
                  (this.vert.firstChild.style.height = '0'))
              if (t) {
                ;((this.horiz.style.display = 'block'),
                  (this.horiz.style.right = r ? n + 'px' : '0'),
                  (this.horiz.style.left = e.barLeft + 'px'))
                var l = e.viewWidth - e.barLeft - (r ? n : 0)
                this.horiz.firstChild.style.width =
                  Math.max(0, e.scrollWidth - e.clientWidth + l) + 'px'
              } else ((this.horiz.style.display = ''), (this.horiz.firstChild.style.width = '0'))
              return (
                !this.checkedZeroWidth &&
                  e.clientHeight > 0 &&
                  (n == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
                { right: r ? n : 0, bottom: t ? n : 0 }
              )
            }),
              (sn.prototype.setScrollLeft = function (e) {
                ;(this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
                  this.disableHoriz &&
                    this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz'))
              }),
              (sn.prototype.setScrollTop = function (e) {
                ;(this.vert.scrollTop != e && (this.vert.scrollTop = e),
                  this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, 'vert'))
              }),
              (sn.prototype.zeroWidthHack = function () {
                var e = z && !D ? '12px' : '18px'
                ;((this.horiz.style.height = this.vert.style.width = e),
                  (this.horiz.style.visibility = this.vert.style.visibility = 'hidden'),
                  (this.disableHoriz = new Ze()),
                  (this.disableVert = new Ze()))
              }),
              (sn.prototype.enableZeroWidthBar = function (e, t, r) {
                e.style.visibility = ''
                function n() {
                  var i = e.getBoundingClientRect(),
                    l =
                      r == 'vert'
                        ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                        : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)
                  l != e ? (e.style.visibility = 'hidden') : t.set(1e3, n)
                }
                t.set(1e3, n)
              }),
              (sn.prototype.clear = function () {
                var e = this.horiz.parentNode
                ;(e.removeChild(this.horiz), e.removeChild(this.vert))
              }))
            var xr = function () {}
            ;((xr.prototype.update = function () {
              return { bottom: 0, right: 0 }
            }),
              (xr.prototype.setScrollLeft = function () {}),
              (xr.prototype.setScrollTop = function () {}),
              (xr.prototype.clear = function () {}))
            function On(e, t) {
              t || (t = br(e))
              var r = e.display.barWidth,
                n = e.display.barHeight
              _s(e, t)
              for (var i = 0; (i < 4 && r != e.display.barWidth) || n != e.display.barHeight; i++)
                (r != e.display.barWidth && e.options.lineWrapping && di(e),
                  _s(e, br(e)),
                  (r = e.display.barWidth),
                  (n = e.display.barHeight))
            }
            function _s(e, t) {
              var r = e.display,
                n = r.scrollbars.update(t)
              ;((r.sizer.style.paddingRight = (r.barWidth = n.right) + 'px'),
                (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + 'px'),
                (r.heightForcer.style.borderBottom = n.bottom + 'px solid transparent'),
                n.right && n.bottom
                  ? ((r.scrollbarFiller.style.display = 'block'),
                    (r.scrollbarFiller.style.height = n.bottom + 'px'),
                    (r.scrollbarFiller.style.width = n.right + 'px'))
                  : (r.scrollbarFiller.style.display = ''),
                n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
                  ? ((r.gutterFiller.style.display = 'block'),
                    (r.gutterFiller.style.height = n.bottom + 'px'),
                    (r.gutterFiller.style.width = t.gutterWidth + 'px'))
                  : (r.gutterFiller.style.display = ''))
            }
            var Ds = { native: sn, null: xr }
            function Ms(e) {
              ;(e.display.scrollbars &&
                (e.display.scrollbars.clear(),
                e.display.scrollbars.addClass &&
                  oe(e.display.wrapper, e.display.scrollbars.addClass)),
                (e.display.scrollbars = new Ds[e.options.scrollbarStyle](
                  function (t) {
                    ;(e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                      ae(t, 'mousedown', function () {
                        e.state.focused &&
                          setTimeout(function () {
                            return e.display.input.focus()
                          }, 0)
                      }),
                      t.setAttribute('cm-not-content', 'true'))
                  },
                  function (t, r) {
                    r == 'horizontal' ? an(e, t) : yr(e, t)
                  },
                  e,
                )),
                e.display.scrollbars.addClass &&
                  Le(e.display.wrapper, e.display.scrollbars.addClass))
            }
            var Wh = 0
            function un(e) {
              ;((e.curOp = {
                cm: e,
                viewChanged: !1,
                startHeight: e.doc.height,
                forceUpdate: !1,
                updateInput: 0,
                typing: !1,
                changeObjs: null,
                cursorActivityHandlers: null,
                cursorActivityCalled: 0,
                selectionChanged: !1,
                updateMaxLine: !1,
                scrollLeft: null,
                scrollTop: null,
                scrollToPos: null,
                focus: !1,
                id: ++Wh,
                markArrays: null,
              }),
                vh(e.curOp))
            }
            function fn(e) {
              var t = e.curOp
              t &&
                yh(t, function (r) {
                  for (var n = 0; n < r.ops.length; n++) r.ops[n].cm.curOp = null
                  Bh(r)
                })
            }
            function Bh(e) {
              for (var t = e.ops, r = 0; r < t.length; r++) zh(t[r])
              for (var n = 0; n < t.length; n++) jh(t[n])
              for (var i = 0; i < t.length; i++) qh(t[i])
              for (var l = 0; l < t.length; l++) Gh(t[l])
              for (var o = 0; o < t.length; o++) Uh(t[o])
            }
            function zh(e) {
              var t = e.cm,
                r = t.display
              ;(Xh(t),
                e.updateMaxLine && bl(t),
                (e.mustUpdate =
                  e.viewChanged ||
                  e.forceUpdate ||
                  e.scrollTop != null ||
                  (e.scrollToPos &&
                    (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo)) ||
                  (r.maxLineChanged && t.options.lineWrapping)),
                (e.update =
                  e.mustUpdate &&
                  new vi(
                    t,
                    e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                    e.forceUpdate,
                  )))
            }
            function jh(e) {
              e.updatedDisplay = e.mustUpdate && Pl(e.cm, e.update)
            }
            function qh(e) {
              var t = e.cm,
                r = t.display
              ;(e.updatedDisplay && di(t),
                (e.barMeasure = br(t)),
                r.maxLineChanged &&
                  !t.options.lineWrapping &&
                  ((e.adjustWidthTo = us(t, r.maxLine, r.maxLine.text.length).left + 3),
                  (t.display.sizerWidth = e.adjustWidthTo),
                  (e.barMeasure.scrollWidth = Math.max(
                    r.scroller.clientWidth,
                    r.sizer.offsetLeft + e.adjustWidthTo + Ct(t) + t.display.barWidth,
                  )),
                  (e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - nn(t)))),
                (e.updatedDisplay || e.selectionChanged) &&
                  (e.preparedSelection = r.input.prepareSelection()))
            }
            function Gh(e) {
              var t = e.cm
              e.adjustWidthTo != null &&
                ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
                e.maxScrollLeft < t.doc.scrollLeft &&
                  an(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
                (t.display.maxLineChanged = !1))
              var r = e.focus && e.focus == be(J(t))
              ;(e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r),
                (e.updatedDisplay || e.startHeight != t.doc.height) && On(t, e.barMeasure),
                e.updatedDisplay && Bl(t, e.barMeasure),
                e.selectionChanged && El(t),
                t.state.focused && e.updateInput && t.display.input.reset(e.typing),
                r && ws(e.cm))
            }
            function Uh(e) {
              var t = e.cm,
                r = t.display,
                n = t.doc
              if (
                (e.updatedDisplay && Os(t, e.update),
                r.wheelStartX != null &&
                  (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) &&
                  (r.wheelStartX = r.wheelStartY = null),
                e.scrollTop != null && Ts(t, e.scrollTop, e.forceScroll),
                e.scrollLeft != null && an(t, e.scrollLeft, !0, !0),
                e.scrollToPos)
              ) {
                var i = Rh(
                  t,
                  he(n, e.scrollToPos.from),
                  he(n, e.scrollToPos.to),
                  e.scrollToPos.margin,
                )
                Hh(t, i)
              }
              var l = e.maybeHiddenMarkers,
                o = e.maybeUnhiddenMarkers
              if (l) for (var a = 0; a < l.length; ++a) l[a].lines.length || Ee(l[a], 'hide')
              if (o) for (var f = 0; f < o.length; ++f) o[f].lines.length && Ee(o[f], 'unhide')
              ;(r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop),
                e.changeObjs && Ee(t, 'changes', t, e.changeObjs),
                e.update && e.update.finish())
            }
            function st(e, t) {
              if (e.curOp) return t()
              un(e)
              try {
                return t()
              } finally {
                fn(e)
              }
            }
            function je(e, t) {
              return function () {
                if (e.curOp) return t.apply(e, arguments)
                un(e)
                try {
                  return t.apply(e, arguments)
                } finally {
                  fn(e)
                }
              }
            }
            function Qe(e) {
              return function () {
                if (this.curOp) return e.apply(this, arguments)
                un(this)
                try {
                  return e.apply(this, arguments)
                } finally {
                  fn(this)
                }
              }
            }
            function qe(e) {
              return function () {
                var t = this.cm
                if (!t || t.curOp) return e.apply(this, arguments)
                un(t)
                try {
                  return e.apply(this, arguments)
                } finally {
                  fn(t)
                }
              }
            }
            function kr(e, t) {
              e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, et(Kh, e))
            }
            function Kh(e) {
              var t = e.doc
              if (!(t.highlightFrontier >= e.display.viewTo)) {
                var r = +new Date() + e.options.workTime,
                  n = fr(e, t.highlightFrontier),
                  i = []
                ;(t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (l) {
                  if (n.line >= e.display.viewFrom) {
                    var o = l.styles,
                      a = l.text.length > e.options.maxHighlightLength ? Vt(t.mode, n.state) : null,
                      f = Pa(e, l, n, !0)
                    ;(a && (n.state = a), (l.styles = f.styles))
                    var c = l.styleClasses,
                      k = f.classes
                    k ? (l.styleClasses = k) : c && (l.styleClasses = null)
                    for (
                      var w =
                          !o ||
                          o.length != l.styles.length ||
                          (c != k &&
                            (!c || !k || c.bgClass != k.bgClass || c.textClass != k.textClass)),
                        E = 0;
                      !w && E < o.length;
                      ++E
                    )
                      w = o[E] != l.styles[E]
                    ;(w && i.push(n.line), (l.stateAfter = n.save()), n.nextLine())
                  } else
                    (l.text.length <= e.options.maxHighlightLength && dl(e, l.text, n),
                      (l.stateAfter = n.line % 5 == 0 ? n.save() : null),
                      n.nextLine())
                  if (+new Date() > r) return (kr(e, e.options.workDelay), !0)
                }),
                  (t.highlightFrontier = n.line),
                  (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
                  i.length &&
                    st(e, function () {
                      for (var l = 0; l < i.length; l++) zt(e, i[l], 'text')
                    }))
              }
            }
            var vi = function (e, t, r) {
              var n = e.display
              ;((this.viewport = t),
                (this.visible = pi(n, e.doc, t)),
                (this.editorIsHidden = !n.wrapper.offsetWidth),
                (this.wrapperHeight = n.wrapper.clientHeight),
                (this.wrapperWidth = n.wrapper.clientWidth),
                (this.oldDisplayWidth = nn(e)),
                (this.force = r),
                (this.dims = Dl(e)),
                (this.events = []))
            }
            ;((vi.prototype.signal = function (e, t) {
              dt(e, t) && this.events.push(arguments)
            }),
              (vi.prototype.finish = function () {
                for (var e = 0; e < this.events.length; e++) Ee.apply(null, this.events[e])
              }))
            function Xh(e) {
              var t = e.display
              !t.scrollbarsClipped &&
                t.scroller.offsetWidth &&
                ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
                (t.heightForcer.style.height = Ct(e) + 'px'),
                (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
                (t.sizer.style.borderRightWidth = Ct(e) + 'px'),
                (t.scrollbarsClipped = !0))
            }
            function Yh(e) {
              if (e.hasFocus()) return null
              var t = be(J(e))
              if (!t || !te(e.display.lineDiv, t)) return null
              var r = { activeElt: t }
              if (window.getSelection) {
                var n = de(e).getSelection()
                n.anchorNode &&
                  n.extend &&
                  te(e.display.lineDiv, n.anchorNode) &&
                  ((r.anchorNode = n.anchorNode),
                  (r.anchorOffset = n.anchorOffset),
                  (r.focusNode = n.focusNode),
                  (r.focusOffset = n.focusOffset))
              }
              return r
            }
            function $h(e) {
              if (
                !(!e || !e.activeElt || e.activeElt == be(me(e.activeElt))) &&
                (e.activeElt.focus(),
                !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
                  e.anchorNode &&
                  te(document.body, e.anchorNode) &&
                  te(document.body, e.focusNode))
              ) {
                var t = e.activeElt.ownerDocument,
                  r = t.defaultView.getSelection(),
                  n = t.createRange()
                ;(n.setEnd(e.anchorNode, e.anchorOffset),
                  n.collapse(!1),
                  r.removeAllRanges(),
                  r.addRange(n),
                  r.extend(e.focusNode, e.focusOffset))
              }
            }
            function Pl(e, t) {
              var r = e.display,
                n = e.doc
              if (t.editorIsHidden) return (jt(e), !1)
              if (
                !t.force &&
                t.visible.from >= r.viewFrom &&
                t.visible.to <= r.viewTo &&
                (r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo) &&
                r.renderedView == r.view &&
                ks(e) == 0
              )
                return !1
              Es(e) && (jt(e), (t.dims = Dl(e)))
              var i = n.first + n.size,
                l = Math.max(t.visible.from - e.options.viewportMargin, n.first),
                o = Math.min(i, t.visible.to + e.options.viewportMargin)
              ;(r.viewFrom < l && l - r.viewFrom < 20 && (l = Math.max(n.first, r.viewFrom)),
                r.viewTo > o && r.viewTo - o < 20 && (o = Math.min(i, r.viewTo)),
                Ot && ((l = ml(e.doc, l)), (o = Qa(e.doc, o))))
              var a =
                l != r.viewFrom ||
                o != r.viewTo ||
                r.lastWrapHeight != t.wrapperHeight ||
                r.lastWrapWidth != t.wrapperWidth
              ;(Nh(e, l, o),
                (r.viewOffset = At(ne(e.doc, r.viewFrom))),
                (e.display.mover.style.top = r.viewOffset + 'px'))
              var f = ks(e)
              if (
                !a &&
                f == 0 &&
                !t.force &&
                r.renderedView == r.view &&
                (r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo)
              )
                return !1
              var c = Yh(e)
              return (
                f > 4 && (r.lineDiv.style.display = 'none'),
                Zh(e, r.updateLineNumbers, t.dims),
                f > 4 && (r.lineDiv.style.display = ''),
                (r.renderedView = r.view),
                $h(c),
                V(r.cursorDiv),
                V(r.selectionDiv),
                (r.gutters.style.height = r.sizer.style.minHeight = 0),
                a &&
                  ((r.lastWrapHeight = t.wrapperHeight),
                  (r.lastWrapWidth = t.wrapperWidth),
                  kr(e, 400)),
                (r.updateLineNumbers = null),
                !0
              )
            }
            function Os(e, t) {
              for (var r = t.viewport, n = !0; ; n = !1) {
                if (!n || !e.options.lineWrapping || t.oldDisplayWidth == nn(e)) {
                  if (
                    (r &&
                      r.top != null &&
                      (r = { top: Math.min(e.doc.height + kl(e.display) - Sl(e), r.top) }),
                    (t.visible = pi(e.display, e.doc, r)),
                    t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
                  )
                    break
                } else n && (t.visible = pi(e.display, e.doc, r))
                if (!Pl(e, t)) break
                di(e)
                var i = br(e)
                ;(vr(e), On(e, i), Bl(e, i), (t.force = !1))
              }
              ;(t.signal(e, 'update', e),
                (e.display.viewFrom != e.display.reportedViewFrom ||
                  e.display.viewTo != e.display.reportedViewTo) &&
                  (t.signal(e, 'viewportChange', e, e.display.viewFrom, e.display.viewTo),
                  (e.display.reportedViewFrom = e.display.viewFrom),
                  (e.display.reportedViewTo = e.display.viewTo)))
            }
            function Il(e, t) {
              var r = new vi(e, t)
              if (Pl(e, r)) {
                ;(di(e), Os(e, r))
                var n = br(e)
                ;(vr(e), On(e, n), Bl(e, n), r.finish())
              }
            }
            function Zh(e, t, r) {
              var n = e.display,
                i = e.options.lineNumbers,
                l = n.lineDiv,
                o = l.firstChild
              function a(H) {
                var W = H.nextSibling
                return (
                  g && z && e.display.currentWheelTarget == H
                    ? (H.style.display = 'none')
                    : H.parentNode.removeChild(H),
                  W
                )
              }
              for (var f = n.view, c = n.viewFrom, k = 0; k < f.length; k++) {
                var w = f[k]
                if (!w.hidden)
                  if (!w.node || w.node.parentNode != l) {
                    var E = wh(e, w, c, r)
                    l.insertBefore(E, o)
                  } else {
                    for (; o != w.node; ) o = a(o)
                    var M = i && t != null && t <= c && w.lineNumber
                    ;(w.changes && (Ce(w.changes, 'gutter') > -1 && (M = !1), ns(e, w, c, r)),
                      M &&
                        (V(w.lineNumber),
                        w.lineNumber.appendChild(document.createTextNode(fl(e.options, c)))),
                      (o = w.node.nextSibling))
                  }
                c += w.size
              }
              for (; o; ) o = a(o)
            }
            function Wl(e) {
              var t = e.gutters.offsetWidth
              ;((e.sizer.style.marginLeft = t + 'px'), ze(e, 'gutterChanged', e))
            }
            function Bl(e, t) {
              ;((e.display.sizer.style.minHeight = t.docHeight + 'px'),
                (e.display.heightForcer.style.top = t.docHeight + 'px'),
                (e.display.gutters.style.height = t.docHeight + e.display.barHeight + Ct(e) + 'px'))
            }
            function As(e) {
              var t = e.display,
                r = t.view
              if (!(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))) {
                for (
                  var n = Ml(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                    i = t.gutters.offsetWidth,
                    l = n + 'px',
                    o = 0;
                  o < r.length;
                  o++
                )
                  if (!r[o].hidden) {
                    e.options.fixedGutter &&
                      (r[o].gutter && (r[o].gutter.style.left = l),
                      r[o].gutterBackground && (r[o].gutterBackground.style.left = l))
                    var a = r[o].alignable
                    if (a) for (var f = 0; f < a.length; f++) a[f].style.left = l
                  }
                e.options.fixedGutter && (t.gutters.style.left = n + i + 'px')
              }
            }
            function Es(e) {
              if (!e.options.lineNumbers) return !1
              var t = e.doc,
                r = fl(e.options, t.first + t.size - 1),
                n = e.display
              if (r.length != n.lineNumChars) {
                var i = n.measure.appendChild(
                    A('div', [A('div', r)], 'CodeMirror-linenumber CodeMirror-gutter-elt'),
                  ),
                  l = i.firstChild.offsetWidth,
                  o = i.offsetWidth - l
                return (
                  (n.lineGutter.style.width = ''),
                  (n.lineNumInnerWidth = Math.max(l, n.lineGutter.offsetWidth - o) + 1),
                  (n.lineNumWidth = n.lineNumInnerWidth + o),
                  (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
                  (n.lineGutter.style.width = n.lineNumWidth + 'px'),
                  Wl(e.display),
                  !0
                )
              }
              return !1
            }
            function zl(e, t) {
              for (var r = [], n = !1, i = 0; i < e.length; i++) {
                var l = e[i],
                  o = null
                if (
                  (typeof l != 'string' && ((o = l.style), (l = l.className)),
                  l == 'CodeMirror-linenumbers')
                )
                  if (t) n = !0
                  else continue
                r.push({ className: l, style: o })
              }
              return (t && !n && r.push({ className: 'CodeMirror-linenumbers', style: null }), r)
            }
            function Ns(e) {
              var t = e.gutters,
                r = e.gutterSpecs
              ;(V(t), (e.lineGutter = null))
              for (var n = 0; n < r.length; ++n) {
                var i = r[n],
                  l = i.className,
                  o = i.style,
                  a = t.appendChild(A('div', null, 'CodeMirror-gutter ' + l))
                ;(o && (a.style.cssText = o),
                  l == 'CodeMirror-linenumbers' &&
                    ((e.lineGutter = a), (a.style.width = (e.lineNumWidth || 1) + 'px')))
              }
              ;((t.style.display = r.length ? '' : 'none'), Wl(e))
            }
            function Sr(e) {
              ;(Ns(e.display), rt(e), As(e))
            }
            function Qh(e, t, r, n) {
              var i = this
              ;((this.input = r),
                (i.scrollbarFiller = A('div', null, 'CodeMirror-scrollbar-filler')),
                i.scrollbarFiller.setAttribute('cm-not-content', 'true'),
                (i.gutterFiller = A('div', null, 'CodeMirror-gutter-filler')),
                i.gutterFiller.setAttribute('cm-not-content', 'true'),
                (i.lineDiv = G('div', null, 'CodeMirror-code')),
                (i.selectionDiv = A('div', null, null, 'position: relative; z-index: 1')),
                (i.cursorDiv = A('div', null, 'CodeMirror-cursors')),
                (i.measure = A('div', null, 'CodeMirror-measure')),
                (i.lineMeasure = A('div', null, 'CodeMirror-measure')),
                (i.lineSpace = G(
                  'div',
                  [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
                  null,
                  'position: relative; outline: none',
                )))
              var l = G('div', [i.lineSpace], 'CodeMirror-lines')
              ;((i.mover = A('div', [l], null, 'position: relative')),
                (i.sizer = A('div', [i.mover], 'CodeMirror-sizer')),
                (i.sizerWidth = null),
                (i.heightForcer = A(
                  'div',
                  null,
                  null,
                  'position: absolute; height: ' + De + 'px; width: 1px;',
                )),
                (i.gutters = A('div', null, 'CodeMirror-gutters')),
                (i.lineGutter = null),
                (i.scroller = A('div', [i.sizer, i.heightForcer, i.gutters], 'CodeMirror-scroll')),
                i.scroller.setAttribute('tabIndex', '-1'),
                (i.wrapper = A(
                  'div',
                  [i.scrollbarFiller, i.gutterFiller, i.scroller],
                  'CodeMirror',
                )),
                _ && R === 105 && (i.wrapper.style.clipPath = 'inset(0px)'),
                i.wrapper.setAttribute('translate', 'no'),
                v && L < 8 && ((i.gutters.style.zIndex = -1), (i.scroller.style.paddingRight = 0)),
                !g && !(p && I) && (i.scroller.draggable = !0),
                e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
                (i.viewFrom = i.viewTo = t.first),
                (i.reportedViewFrom = i.reportedViewTo = t.first),
                (i.view = []),
                (i.renderedView = null),
                (i.externalMeasured = null),
                (i.viewOffset = 0),
                (i.lastWrapHeight = i.lastWrapWidth = 0),
                (i.updateLineNumbers = null),
                (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
                (i.scrollbarsClipped = !1),
                (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
                (i.alignWidgets = !1),
                (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
                (i.maxLine = null),
                (i.maxLineLength = 0),
                (i.maxLineChanged = !1),
                (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
                (i.shift = !1),
                (i.selForContextMenu = null),
                (i.activeTouch = null),
                (i.gutterSpecs = zl(n.gutters, n.lineNumbers)),
                Ns(i),
                r.init(i))
            }
            var mi = 0,
              Nt = null
            v ? (Nt = -0.53) : p ? (Nt = 15) : _ ? (Nt = -0.7) : P && (Nt = -1 / 3)
            function Fs(e) {
              var t = e.wheelDeltaX,
                r = e.wheelDeltaY
              return (
                t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
                r == null && e.detail && e.axis == e.VERTICAL_AXIS
                  ? (r = e.detail)
                  : r == null && (r = e.wheelDelta),
                { x: t, y: r }
              )
            }
            function Jh(e) {
              var t = Fs(e)
              return ((t.x *= Nt), (t.y *= Nt), t)
            }
            function Hs(e, t) {
              _ &&
                R == 102 &&
                (e.display.chromeScrollHack == null
                  ? (e.display.sizer.style.pointerEvents = 'none')
                  : clearTimeout(e.display.chromeScrollHack),
                (e.display.chromeScrollHack = setTimeout(function () {
                  ;((e.display.chromeScrollHack = null), (e.display.sizer.style.pointerEvents = ''))
                }, 100)))
              var r = Fs(t),
                n = r.x,
                i = r.y,
                l = Nt
              t.deltaMode === 0 && ((n = t.deltaX), (i = t.deltaY), (l = 1))
              var o = e.display,
                a = o.scroller,
                f = a.scrollWidth > a.clientWidth,
                c = a.scrollHeight > a.clientHeight
              if ((n && f) || (i && c)) {
                if (i && z && g) {
                  e: for (var k = t.target, w = o.view; k != a; k = k.parentNode)
                    for (var E = 0; E < w.length; E++)
                      if (w[E].node == k) {
                        e.display.currentWheelTarget = k
                        break e
                      }
                }
                if (n && !p && !F && l != null) {
                  ;(i && c && yr(e, Math.max(0, a.scrollTop + i * l)),
                    an(e, Math.max(0, a.scrollLeft + n * l)),
                    (!i || (i && c)) && nt(t),
                    (o.wheelStartX = null))
                  return
                }
                if (i && l != null) {
                  var M = i * l,
                    H = e.doc.scrollTop,
                    W = H + o.wrapper.clientHeight
                  ;(M < 0
                    ? (H = Math.max(0, H + M - 50))
                    : (W = Math.min(e.doc.height, W + M + 50)),
                    Il(e, { top: H, bottom: W }))
                }
                mi < 20 &&
                  t.deltaMode !== 0 &&
                  (o.wheelStartX == null
                    ? ((o.wheelStartX = a.scrollLeft),
                      (o.wheelStartY = a.scrollTop),
                      (o.wheelDX = n),
                      (o.wheelDY = i),
                      setTimeout(function () {
                        if (o.wheelStartX != null) {
                          var j = a.scrollLeft - o.wheelStartX,
                            U = a.scrollTop - o.wheelStartY,
                            $ =
                              (U && o.wheelDY && U / o.wheelDY) || (j && o.wheelDX && j / o.wheelDX)
                          ;((o.wheelStartX = o.wheelStartY = null),
                            $ && ((Nt = (Nt * mi + $) / (mi + 1)), ++mi))
                        }
                      }, 200))
                    : ((o.wheelDX += n), (o.wheelDY += i)))
              }
            }
            var ct = function (e, t) {
              ;((this.ranges = e), (this.primIndex = t))
            }
            ;((ct.prototype.primary = function () {
              return this.ranges[this.primIndex]
            }),
              (ct.prototype.equals = function (e) {
                if (e == this) return !0
                if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
                  return !1
                for (var t = 0; t < this.ranges.length; t++) {
                  var r = this.ranges[t],
                    n = e.ranges[t]
                  if (!hl(r.anchor, n.anchor) || !hl(r.head, n.head)) return !1
                }
                return !0
              }),
              (ct.prototype.deepCopy = function () {
                for (var e = [], t = 0; t < this.ranges.length; t++)
                  e[t] = new ye(cl(this.ranges[t].anchor), cl(this.ranges[t].head))
                return new ct(e, this.primIndex)
              }),
              (ct.prototype.somethingSelected = function () {
                for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0
                return !1
              }),
              (ct.prototype.contains = function (e, t) {
                t || (t = e)
                for (var r = 0; r < this.ranges.length; r++) {
                  var n = this.ranges[r]
                  if (fe(t, n.from()) >= 0 && fe(e, n.to()) <= 0) return r
                }
                return -1
              }))
            var ye = function (e, t) {
              ;((this.anchor = e), (this.head = t))
            }
            ;((ye.prototype.from = function () {
              return ei(this.anchor, this.head)
            }),
              (ye.prototype.to = function () {
                return Vr(this.anchor, this.head)
              }),
              (ye.prototype.empty = function () {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
              }))
            function bt(e, t, r) {
              var n = e && e.options.selectionsMayTouch,
                i = t[r]
              ;(t.sort(function (E, M) {
                return fe(E.from(), M.from())
              }),
                (r = Ce(t, i)))
              for (var l = 1; l < t.length; l++) {
                var o = t[l],
                  a = t[l - 1],
                  f = fe(a.to(), o.from())
                if (n && !o.empty() ? f > 0 : f >= 0) {
                  var c = ei(a.from(), o.from()),
                    k = Vr(a.to(), o.to()),
                    w = a.empty() ? o.from() == o.head : a.from() == a.head
                  ;(l <= r && --r, t.splice(--l, 2, new ye(w ? k : c, w ? c : k)))
                }
              }
              return new ct(t, r)
            }
            function qt(e, t) {
              return new ct([new ye(e, t || e)], 0)
            }
            function Gt(e) {
              return e.text
                ? B(
                    e.from.line + e.text.length - 1,
                    ve(e.text).length + (e.text.length == 1 ? e.from.ch : 0),
                  )
                : e.to
            }
            function Rs(e, t) {
              if (fe(e, t.from) < 0) return e
              if (fe(e, t.to) <= 0) return Gt(t)
              var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                n = e.ch
              return (e.line == t.to.line && (n += Gt(t).ch - t.to.ch), B(r, n))
            }
            function jl(e, t) {
              for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
                var i = e.sel.ranges[n]
                r.push(new ye(Rs(i.anchor, t), Rs(i.head, t)))
              }
              return bt(e.cm, r, e.sel.primIndex)
            }
            function Ps(e, t, r) {
              return e.line == t.line
                ? B(r.line, e.ch - t.ch + r.ch)
                : B(r.line + (e.line - t.line), e.ch)
            }
            function Vh(e, t, r) {
              for (var n = [], i = B(e.first, 0), l = i, o = 0; o < t.length; o++) {
                var a = t[o],
                  f = Ps(a.from, i, l),
                  c = Ps(Gt(a), i, l)
                if (((i = a.to), (l = c), r == 'around')) {
                  var k = e.sel.ranges[o],
                    w = fe(k.head, k.anchor) < 0
                  n[o] = new ye(w ? c : f, w ? f : c)
                } else n[o] = new ye(f, f)
              }
              return new ct(n, e.sel.primIndex)
            }
            function ql(e) {
              ;((e.doc.mode = al(e.options, e.doc.modeOption)), wr(e))
            }
            function wr(e) {
              ;(e.doc.iter(function (t) {
                ;(t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null))
              }),
                (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
                kr(e, 100),
                e.state.modeGen++,
                e.curOp && rt(e))
            }
            function Is(e, t) {
              return (
                t.from.ch == 0 &&
                t.to.ch == 0 &&
                ve(t.text) == '' &&
                (!e.cm || e.cm.options.wholeLineUpdateBefore)
              )
            }
            function Gl(e, t, r, n) {
              function i($) {
                return r ? r[$] : null
              }
              function l($, K, Q) {
                ;(ah($, K, Q, n), ze($, 'change', $, t))
              }
              function o($, K) {
                for (var Q = [], ie = $; ie < K; ++ie) Q.push(new wn(c[ie], i(ie), n))
                return Q
              }
              var a = t.from,
                f = t.to,
                c = t.text,
                k = ne(e, a.line),
                w = ne(e, f.line),
                E = ve(c),
                M = i(c.length - 1),
                H = f.line - a.line
              if (t.full) (e.insert(0, o(0, c.length)), e.remove(c.length, e.size - c.length))
              else if (Is(e, t)) {
                var W = o(0, c.length - 1)
                ;(l(w, w.text, M), H && e.remove(a.line, H), W.length && e.insert(a.line, W))
              } else if (k == w)
                if (c.length == 1) l(k, k.text.slice(0, a.ch) + E + k.text.slice(f.ch), M)
                else {
                  var j = o(1, c.length - 1)
                  ;(j.push(new wn(E + k.text.slice(f.ch), M, n)),
                    l(k, k.text.slice(0, a.ch) + c[0], i(0)),
                    e.insert(a.line + 1, j))
                }
              else if (c.length == 1)
                (l(k, k.text.slice(0, a.ch) + c[0] + w.text.slice(f.ch), i(0)),
                  e.remove(a.line + 1, H))
              else {
                ;(l(k, k.text.slice(0, a.ch) + c[0], i(0)), l(w, E + w.text.slice(f.ch), M))
                var U = o(1, c.length - 1)
                ;(H > 1 && e.remove(a.line + 1, H - 1), e.insert(a.line + 1, U))
              }
              ze(e, 'change', e, t)
            }
            function Ut(e, t, r) {
              function n(i, l, o) {
                if (i.linked)
                  for (var a = 0; a < i.linked.length; ++a) {
                    var f = i.linked[a]
                    if (f.doc != l) {
                      var c = o && f.sharedHist
                      ;(r && !c) || (t(f.doc, c), n(f.doc, i, c))
                    }
                  }
              }
              n(e, null, !0)
            }
            function Ws(e, t) {
              if (t.cm) throw new Error('This document is already in use.')
              ;((e.doc = t),
                (t.cm = e),
                Ol(e),
                ql(e),
                Bs(e),
                (e.options.direction = t.direction),
                e.options.lineWrapping || bl(e),
                (e.options.mode = t.modeOption),
                rt(e))
            }
            function Bs(e) {
              ;(e.doc.direction == 'rtl' ? Le : oe)(e.display.lineDiv, 'CodeMirror-rtl')
            }
            function ec(e) {
              st(e, function () {
                ;(Bs(e), rt(e))
              })
            }
            function yi(e) {
              ;((this.done = []),
                (this.undone = []),
                (this.undoDepth = e ? e.undoDepth : 1 / 0),
                (this.lastModTime = this.lastSelTime = 0),
                (this.lastOp = this.lastSelOp = null),
                (this.lastOrigin = this.lastSelOrigin = null),
                (this.generation = this.maxGeneration = e ? e.maxGeneration : 1))
            }
            function Ul(e, t) {
              var r = { from: cl(t.from), to: Gt(t), text: en(e, t.from, t.to) }
              return (
                qs(e, r, t.from.line, t.to.line + 1),
                Ut(
                  e,
                  function (n) {
                    return qs(n, r, t.from.line, t.to.line + 1)
                  },
                  !0,
                ),
                r
              )
            }
            function zs(e) {
              for (; e.length; ) {
                var t = ve(e)
                if (t.ranges) e.pop()
                else break
              }
            }
            function tc(e, t) {
              if (t) return (zs(e.done), ve(e.done))
              if (e.done.length && !ve(e.done).ranges) return ve(e.done)
              if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
                return (e.done.pop(), ve(e.done))
            }
            function js(e, t, r, n) {
              var i = e.history
              i.undone.length = 0
              var l = +new Date(),
                o,
                a
              if (
                (i.lastOp == n ||
                  (i.lastOrigin == t.origin &&
                    t.origin &&
                    ((t.origin.charAt(0) == '+' &&
                      i.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                      t.origin.charAt(0) == '*'))) &&
                (o = tc(i, i.lastOp == n))
              )
                ((a = ve(o.changes)),
                  fe(t.from, t.to) == 0 && fe(t.from, a.to) == 0
                    ? (a.to = Gt(t))
                    : o.changes.push(Ul(e, t)))
              else {
                var f = ve(i.done)
                for (
                  (!f || !f.ranges) && bi(e.sel, i.done),
                    o = { changes: [Ul(e, t)], generation: i.generation },
                    i.done.push(o);
                  i.done.length > i.undoDepth;
                )
                  (i.done.shift(), i.done[0].ranges || i.done.shift())
              }
              ;(i.done.push(r),
                (i.generation = ++i.maxGeneration),
                (i.lastModTime = i.lastSelTime = l),
                (i.lastOp = i.lastSelOp = n),
                (i.lastOrigin = i.lastSelOrigin = t.origin),
                a || Ee(e, 'historyAdded'))
            }
            function nc(e, t, r, n) {
              var i = t.charAt(0)
              return (
                i == '*' ||
                (i == '+' &&
                  r.ranges.length == n.ranges.length &&
                  r.somethingSelected() == n.somethingSelected() &&
                  new Date() - e.history.lastSelTime <=
                    (e.cm ? e.cm.options.historyEventDelay : 500))
              )
            }
            function rc(e, t, r, n) {
              var i = e.history,
                l = n && n.origin
              ;(r == i.lastSelOp ||
              (l &&
                i.lastSelOrigin == l &&
                ((i.lastModTime == i.lastSelTime && i.lastOrigin == l) || nc(e, l, ve(i.done), t)))
                ? (i.done[i.done.length - 1] = t)
                : bi(t, i.done),
                (i.lastSelTime = +new Date()),
                (i.lastSelOrigin = l),
                (i.lastSelOp = r),
                n && n.clearRedo !== !1 && zs(i.undone))
            }
            function bi(e, t) {
              var r = ve(t)
              ;(r && r.ranges && r.equals(e)) || t.push(e)
            }
            function qs(e, t, r, n) {
              var i = t['spans_' + e.id],
                l = 0
              e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function (o) {
                ;(o.markedSpans && ((i || (i = t['spans_' + e.id] = {}))[l] = o.markedSpans), ++l)
              })
            }
            function ic(e) {
              if (!e) return null
              for (var t, r = 0; r < e.length; ++r)
                e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r])
              return t ? (t.length ? t : null) : e
            }
            function lc(e, t) {
              var r = t['spans_' + e.id]
              if (!r) return null
              for (var n = [], i = 0; i < t.text.length; ++i) n.push(ic(r[i]))
              return n
            }
            function Gs(e, t) {
              var r = lc(e, t),
                n = gl(e, t)
              if (!r) return n
              if (!n) return r
              for (var i = 0; i < r.length; ++i) {
                var l = r[i],
                  o = n[i]
                if (l && o)
                  e: for (var a = 0; a < o.length; ++a) {
                    for (var f = o[a], c = 0; c < l.length; ++c)
                      if (l[c].marker == f.marker) continue e
                    l.push(f)
                  }
                else o && (r[i] = o)
              }
              return r
            }
            function An(e, t, r) {
              for (var n = [], i = 0; i < e.length; ++i) {
                var l = e[i]
                if (l.ranges) {
                  n.push(r ? ct.prototype.deepCopy.call(l) : l)
                  continue
                }
                var o = l.changes,
                  a = []
                n.push({ changes: a })
                for (var f = 0; f < o.length; ++f) {
                  var c = o[f],
                    k = void 0
                  if ((a.push({ from: c.from, to: c.to, text: c.text }), t))
                    for (var w in c)
                      (k = w.match(/^spans_(\d+)$/)) &&
                        Ce(t, Number(k[1])) > -1 &&
                        ((ve(a)[w] = c[w]), delete c[w])
                }
              }
              return n
            }
            function Kl(e, t, r, n) {
              if (n) {
                var i = e.anchor
                if (r) {
                  var l = fe(t, i) < 0
                  l != fe(r, i) < 0 ? ((i = t), (t = r)) : l != fe(t, r) < 0 && (t = r)
                }
                return new ye(i, t)
              } else return new ye(r || t, t)
            }
            function xi(e, t, r, n, i) {
              ;(i == null && (i = e.cm && (e.cm.display.shift || e.extend)),
                Xe(e, new ct([Kl(e.sel.primary(), t, r, i)], 0), n))
            }
            function Us(e, t, r) {
              for (
                var n = [], i = e.cm && (e.cm.display.shift || e.extend), l = 0;
                l < e.sel.ranges.length;
                l++
              )
                n[l] = Kl(e.sel.ranges[l], t[l], null, i)
              var o = bt(e.cm, n, e.sel.primIndex)
              Xe(e, o, r)
            }
            function Xl(e, t, r, n) {
              var i = e.sel.ranges.slice(0)
              ;((i[t] = r), Xe(e, bt(e.cm, i, e.sel.primIndex), n))
            }
            function Ks(e, t, r, n) {
              Xe(e, qt(t, r), n)
            }
            function oc(e, t, r) {
              var n = {
                ranges: t.ranges,
                update: function (i) {
                  this.ranges = []
                  for (var l = 0; l < i.length; l++)
                    this.ranges[l] = new ye(he(e, i[l].anchor), he(e, i[l].head))
                },
                origin: r && r.origin,
              }
              return (
                Ee(e, 'beforeSelectionChange', e, n),
                e.cm && Ee(e.cm, 'beforeSelectionChange', e.cm, n),
                n.ranges != t.ranges ? bt(e.cm, n.ranges, n.ranges.length - 1) : t
              )
            }
            function Xs(e, t, r) {
              var n = e.history.done,
                i = ve(n)
              i && i.ranges ? ((n[n.length - 1] = t), ki(e, t, r)) : Xe(e, t, r)
            }
            function Xe(e, t, r) {
              ;(ki(e, t, r), rc(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r))
            }
            function ki(e, t, r) {
              ;(dt(e, 'beforeSelectionChange') || (e.cm && dt(e.cm, 'beforeSelectionChange'))) &&
                (t = oc(e, t, r))
              var n = (r && r.bias) || (fe(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1)
              ;(Ys(e, Zs(e, t, n, !0)),
                !(r && r.scroll === !1) &&
                  e.cm &&
                  e.cm.getOption('readOnly') != 'nocursor' &&
                  Mn(e.cm))
            }
            function Ys(e, t) {
              t.equals(e.sel) ||
                ((e.sel = t),
                e.cm &&
                  ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), Aa(e.cm)),
                ze(e, 'cursorActivity', e))
            }
            function $s(e) {
              Ys(e, Zs(e, e.sel, null, !1))
            }
            function Zs(e, t, r, n) {
              for (var i, l = 0; l < t.ranges.length; l++) {
                var o = t.ranges[l],
                  a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[l],
                  f = Si(e, o.anchor, a && a.anchor, r, n),
                  c = o.head == o.anchor ? f : Si(e, o.head, a && a.head, r, n)
                ;(i || f != o.anchor || c != o.head) &&
                  (i || (i = t.ranges.slice(0, l)), (i[l] = new ye(f, c)))
              }
              return i ? bt(e.cm, i, t.primIndex) : t
            }
            function En(e, t, r, n, i) {
              var l = ne(e, t.line)
              if (l.markedSpans)
                for (var o = 0; o < l.markedSpans.length; ++o) {
                  var a = l.markedSpans[o],
                    f = a.marker,
                    c = 'selectLeft' in f ? !f.selectLeft : f.inclusiveLeft,
                    k = 'selectRight' in f ? !f.selectRight : f.inclusiveRight
                  if (
                    (a.from == null || (c ? a.from <= t.ch : a.from < t.ch)) &&
                    (a.to == null || (k ? a.to >= t.ch : a.to > t.ch))
                  ) {
                    if (i && (Ee(f, 'beforeCursorEnter'), f.explicitlyCleared))
                      if (l.markedSpans) {
                        --o
                        continue
                      } else break
                    if (!f.atomic) continue
                    if (r) {
                      var w = f.find(n < 0 ? 1 : -1),
                        E = void 0
                      if (
                        ((n < 0 ? k : c) && (w = Qs(e, w, -n, w && w.line == t.line ? l : null)),
                        w && w.line == t.line && (E = fe(w, r)) && (n < 0 ? E < 0 : E > 0))
                      )
                        return En(e, w, t, n, i)
                    }
                    var M = f.find(n < 0 ? -1 : 1)
                    return (
                      (n < 0 ? c : k) && (M = Qs(e, M, n, M.line == t.line ? l : null)),
                      M ? En(e, M, t, n, i) : null
                    )
                  }
                }
              return t
            }
            function Si(e, t, r, n, i) {
              var l = n || 1,
                o =
                  En(e, t, r, l, i) ||
                  (!i && En(e, t, r, l, !0)) ||
                  En(e, t, r, -l, i) ||
                  (!i && En(e, t, r, -l, !0))
              return o || ((e.cantEdit = !0), B(e.first, 0))
            }
            function Qs(e, t, r, n) {
              return r < 0 && t.ch == 0
                ? t.line > e.first
                  ? he(e, B(t.line - 1))
                  : null
                : r > 0 && t.ch == (n || ne(e, t.line)).text.length
                  ? t.line < e.first + e.size - 1
                    ? B(t.line + 1, 0)
                    : null
                  : new B(t.line, t.ch + r)
            }
            function Js(e) {
              e.setSelection(B(e.firstLine(), 0), B(e.lastLine()), tt)
            }
            function Vs(e, t, r) {
              var n = {
                canceled: !1,
                from: t.from,
                to: t.to,
                text: t.text,
                origin: t.origin,
                cancel: function () {
                  return (n.canceled = !0)
                },
              }
              return (
                r &&
                  (n.update = function (i, l, o, a) {
                    ;(i && (n.from = he(e, i)),
                      l && (n.to = he(e, l)),
                      o && (n.text = o),
                      a !== void 0 && (n.origin = a))
                  }),
                Ee(e, 'beforeChange', e, n),
                e.cm && Ee(e.cm, 'beforeChange', e.cm, n),
                n.canceled
                  ? (e.cm && (e.cm.curOp.updateInput = 2), null)
                  : { from: n.from, to: n.to, text: n.text, origin: n.origin }
              )
            }
            function Nn(e, t, r) {
              if (e.cm) {
                if (!e.cm.curOp) return je(e.cm, Nn)(e, t, r)
                if (e.cm.state.suppressEdits) return
              }
              if (
                !(
                  (dt(e, 'beforeChange') || (e.cm && dt(e.cm, 'beforeChange'))) &&
                  ((t = Vs(e, t, !0)), !t)
                )
              ) {
                var n = Ga && !r && rh(e, t.from, t.to)
                if (n)
                  for (var i = n.length - 1; i >= 0; --i)
                    eu(e, {
                      from: n[i].from,
                      to: n[i].to,
                      text: i ? [''] : t.text,
                      origin: t.origin,
                    })
                else eu(e, t)
              }
            }
            function eu(e, t) {
              if (!(t.text.length == 1 && t.text[0] == '' && fe(t.from, t.to) == 0)) {
                var r = jl(e, t)
                ;(js(e, t, r, e.cm ? e.cm.curOp.id : NaN), Lr(e, t, r, gl(e, t)))
                var n = []
                Ut(e, function (i, l) {
                  ;(!l && Ce(n, i.history) == -1 && (iu(i.history, t), n.push(i.history)),
                    Lr(i, t, null, gl(i, t)))
                })
              }
            }
            function wi(e, t, r) {
              var n = e.cm && e.cm.state.suppressEdits
              if (!(n && !r)) {
                for (
                  var i = e.history,
                    l,
                    o = e.sel,
                    a = t == 'undo' ? i.done : i.undone,
                    f = t == 'undo' ? i.undone : i.done,
                    c = 0;
                  c < a.length && ((l = a[c]), !(r ? l.ranges && !l.equals(e.sel) : !l.ranges));
                  c++
                );
                if (c != a.length) {
                  for (i.lastOrigin = i.lastSelOrigin = null; ; )
                    if (((l = a.pop()), l.ranges)) {
                      if ((bi(l, f), r && !l.equals(e.sel))) {
                        Xe(e, l, { clearRedo: !1 })
                        return
                      }
                      o = l
                    } else if (n) {
                      a.push(l)
                      return
                    } else break
                  var k = []
                  ;(bi(o, f),
                    f.push({ changes: k, generation: i.generation }),
                    (i.generation = l.generation || ++i.maxGeneration))
                  for (
                    var w = dt(e, 'beforeChange') || (e.cm && dt(e.cm, 'beforeChange')),
                      E = function (W) {
                        var j = l.changes[W]
                        if (((j.origin = t), w && !Vs(e, j, !1))) return ((a.length = 0), {})
                        k.push(Ul(e, j))
                        var U = W ? jl(e, j) : ve(a)
                        ;(Lr(e, j, U, Gs(e, j)),
                          !W && e.cm && e.cm.scrollIntoView({ from: j.from, to: Gt(j) }))
                        var $ = []
                        Ut(e, function (K, Q) {
                          ;(!Q && Ce($, K.history) == -1 && (iu(K.history, j), $.push(K.history)),
                            Lr(K, j, null, Gs(K, j)))
                        })
                      },
                      M = l.changes.length - 1;
                    M >= 0;
                    --M
                  ) {
                    var H = E(M)
                    if (H) return H.v
                  }
                }
              }
            }
            function tu(e, t) {
              if (
                t != 0 &&
                ((e.first += t),
                (e.sel = new ct(
                  vt(e.sel.ranges, function (i) {
                    return new ye(B(i.anchor.line + t, i.anchor.ch), B(i.head.line + t, i.head.ch))
                  }),
                  e.sel.primIndex,
                )),
                e.cm)
              ) {
                rt(e.cm, e.first, e.first - t, t)
                for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) zt(e.cm, n, 'gutter')
              }
            }
            function Lr(e, t, r, n) {
              if (e.cm && !e.cm.curOp) return je(e.cm, Lr)(e, t, r, n)
              if (t.to.line < e.first) {
                tu(e, t.text.length - 1 - (t.to.line - t.from.line))
                return
              }
              if (!(t.from.line > e.lastLine())) {
                if (t.from.line < e.first) {
                  var i = t.text.length - 1 - (e.first - t.from.line)
                  ;(tu(e, i),
                    (t = {
                      from: B(e.first, 0),
                      to: B(t.to.line + i, t.to.ch),
                      text: [ve(t.text)],
                      origin: t.origin,
                    }))
                }
                var l = e.lastLine()
                ;(t.to.line > l &&
                  (t = {
                    from: t.from,
                    to: B(l, ne(e, l).text.length),
                    text: [t.text[0]],
                    origin: t.origin,
                  }),
                  (t.removed = en(e, t.from, t.to)),
                  r || (r = jl(e, t)),
                  e.cm ? ac(e.cm, t, n) : Gl(e, t, n),
                  ki(e, r, tt),
                  e.cantEdit && Si(e, B(e.firstLine(), 0)) && (e.cantEdit = !1))
              }
            }
            function ac(e, t, r) {
              var n = e.doc,
                i = e.display,
                l = t.from,
                o = t.to,
                a = !1,
                f = l.line
              ;(e.options.lineWrapping ||
                ((f = ke(mt(ne(n, l.line)))),
                n.iter(f, o.line + 1, function (M) {
                  if (M == i.maxLine) return ((a = !0), !0)
                })),
                n.sel.contains(t.from, t.to) > -1 && Aa(e),
                Gl(n, t, r, xs(e)),
                e.options.lineWrapping ||
                  (n.iter(f, l.line + t.text.length, function (M) {
                    var H = oi(M)
                    H > i.maxLineLength &&
                      ((i.maxLine = M), (i.maxLineLength = H), (i.maxLineChanged = !0), (a = !1))
                  }),
                  a && (e.curOp.updateMaxLine = !0)),
                Zf(n, l.line),
                kr(e, 400))
              var c = t.text.length - (o.line - l.line) - 1
              t.full
                ? rt(e)
                : l.line == o.line && t.text.length == 1 && !Is(e.doc, t)
                  ? zt(e, l.line, 'text')
                  : rt(e, l.line, o.line + 1, c)
              var k = dt(e, 'changes'),
                w = dt(e, 'change')
              if (w || k) {
                var E = { from: l, to: o, text: t.text, removed: t.removed, origin: t.origin }
                ;(w && ze(e, 'change', e, E),
                  k && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(E))
              }
              e.display.selForContextMenu = null
            }
            function Fn(e, t, r, n, i) {
              var l
              ;(n || (n = r),
                fe(n, r) < 0 && ((l = [n, r]), (r = l[0]), (n = l[1])),
                typeof t == 'string' && (t = e.splitLines(t)),
                Nn(e, { from: r, to: n, text: t, origin: i }))
            }
            function nu(e, t, r, n) {
              r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0))
            }
            function ru(e, t, r, n) {
              for (var i = 0; i < e.length; ++i) {
                var l = e[i],
                  o = !0
                if (l.ranges) {
                  l.copied || ((l = e[i] = l.deepCopy()), (l.copied = !0))
                  for (var a = 0; a < l.ranges.length; a++)
                    (nu(l.ranges[a].anchor, t, r, n), nu(l.ranges[a].head, t, r, n))
                  continue
                }
                for (var f = 0; f < l.changes.length; ++f) {
                  var c = l.changes[f]
                  if (r < c.from.line)
                    ((c.from = B(c.from.line + n, c.from.ch)), (c.to = B(c.to.line + n, c.to.ch)))
                  else if (t <= c.to.line) {
                    o = !1
                    break
                  }
                }
                o || (e.splice(0, i + 1), (i = 0))
              }
            }
            function iu(e, t) {
              var r = t.from.line,
                n = t.to.line,
                i = t.text.length - (n - r) - 1
              ;(ru(e.done, r, n, i), ru(e.undone, r, n, i))
            }
            function Cr(e, t, r, n) {
              var i = t,
                l = t
              return (
                typeof t == 'number' ? (l = ne(e, Ha(e, t))) : (i = ke(t)),
                i == null ? null : (n(l, i) && e.cm && zt(e.cm, i, r), l)
              )
            }
            function Tr(e) {
              ;((this.lines = e), (this.parent = null))
              for (var t = 0, r = 0; r < e.length; ++r) ((e[r].parent = this), (t += e[r].height))
              this.height = t
            }
            Tr.prototype = {
              chunkSize: function () {
                return this.lines.length
              },
              removeInner: function (e, t) {
                for (var r = e, n = e + t; r < n; ++r) {
                  var i = this.lines[r]
                  ;((this.height -= i.height), sh(i), ze(i, 'delete'))
                }
                this.lines.splice(e, t)
              },
              collapse: function (e) {
                e.push.apply(e, this.lines)
              },
              insertInner: function (e, t, r) {
                ;((this.height += r),
                  (this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e))))
                for (var n = 0; n < t.length; ++n) t[n].parent = this
              },
              iterN: function (e, t, r) {
                for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0
              },
            }
            function _r(e) {
              this.children = e
              for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
                var i = e[n]
                ;((t += i.chunkSize()), (r += i.height), (i.parent = this))
              }
              ;((this.size = t), (this.height = r), (this.parent = null))
            }
            _r.prototype = {
              chunkSize: function () {
                return this.size
              },
              removeInner: function (e, t) {
                this.size -= t
                for (var r = 0; r < this.children.length; ++r) {
                  var n = this.children[r],
                    i = n.chunkSize()
                  if (e < i) {
                    var l = Math.min(t, i - e),
                      o = n.height
                    if (
                      (n.removeInner(e, l),
                      (this.height -= o - n.height),
                      i == l && (this.children.splice(r--, 1), (n.parent = null)),
                      (t -= l) == 0)
                    )
                      break
                    e = 0
                  } else e -= i
                }
                if (
                  this.size - t < 25 &&
                  (this.children.length > 1 || !(this.children[0] instanceof Tr))
                ) {
                  var a = []
                  ;(this.collapse(a),
                    (this.children = [new Tr(a)]),
                    (this.children[0].parent = this))
                }
              },
              collapse: function (e) {
                for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e)
              },
              insertInner: function (e, t, r) {
                ;((this.size += t.length), (this.height += r))
                for (var n = 0; n < this.children.length; ++n) {
                  var i = this.children[n],
                    l = i.chunkSize()
                  if (e <= l) {
                    if ((i.insertInner(e, t, r), i.lines && i.lines.length > 50)) {
                      for (var o = (i.lines.length % 25) + 25, a = o; a < i.lines.length; ) {
                        var f = new Tr(i.lines.slice(a, (a += 25)))
                        ;((i.height -= f.height),
                          this.children.splice(++n, 0, f),
                          (f.parent = this))
                      }
                      ;((i.lines = i.lines.slice(0, o)), this.maybeSpill())
                    }
                    break
                  }
                  e -= l
                }
              },
              maybeSpill: function () {
                if (!(this.children.length <= 10)) {
                  var e = this
                  do {
                    var t = e.children.splice(e.children.length - 5, 5),
                      r = new _r(t)
                    if (e.parent) {
                      ;((e.size -= r.size), (e.height -= r.height))
                      var i = Ce(e.parent.children, e)
                      e.parent.children.splice(i + 1, 0, r)
                    } else {
                      var n = new _r(e.children)
                      ;((n.parent = e), (e.children = [n, r]), (e = n))
                    }
                    r.parent = e.parent
                  } while (e.children.length > 10)
                  e.parent.maybeSpill()
                }
              },
              iterN: function (e, t, r) {
                for (var n = 0; n < this.children.length; ++n) {
                  var i = this.children[n],
                    l = i.chunkSize()
                  if (e < l) {
                    var o = Math.min(t, l - e)
                    if (i.iterN(e, o, r)) return !0
                    if ((t -= o) == 0) break
                    e = 0
                  } else e -= l
                }
              },
            }
            var Dr = function (e, t, r) {
              if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n])
              ;((this.doc = e), (this.node = t))
            }
            ;((Dr.prototype.clear = function () {
              var e = this.doc.cm,
                t = this.line.widgets,
                r = this.line,
                n = ke(r)
              if (!(n == null || !t)) {
                for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1)
                t.length || (r.widgets = null)
                var l = pr(this)
                ;(wt(r, Math.max(0, r.height - l)),
                  e &&
                    (st(e, function () {
                      ;(lu(e, r, -l), zt(e, n, 'widget'))
                    }),
                    ze(e, 'lineWidgetCleared', e, this, n)))
              }
            }),
              (Dr.prototype.changed = function () {
                var e = this,
                  t = this.height,
                  r = this.doc.cm,
                  n = this.line
                this.height = null
                var i = pr(this) - t
                i &&
                  (Bt(this.doc, n) || wt(n, n.height + i),
                  r &&
                    st(r, function () {
                      ;((r.curOp.forceUpdate = !0),
                        lu(r, n, i),
                        ze(r, 'lineWidgetChanged', r, e, ke(n)))
                    }))
              }),
              xn(Dr))
            function lu(e, t, r) {
              At(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Rl(e, r)
            }
            function sc(e, t, r, n) {
              var i = new Dr(e, r, n),
                l = e.cm
              return (
                l && i.noHScroll && (l.display.alignWidgets = !0),
                Cr(e, t, 'widget', function (o) {
                  var a = o.widgets || (o.widgets = [])
                  if (
                    (i.insertAt == null
                      ? a.push(i)
                      : a.splice(Math.min(a.length, Math.max(0, i.insertAt)), 0, i),
                    (i.line = o),
                    l && !Bt(e, o))
                  ) {
                    var f = At(o) < e.scrollTop
                    ;(wt(o, o.height + pr(i)), f && Rl(l, i.height), (l.curOp.forceUpdate = !0))
                  }
                  return !0
                }),
                l && ze(l, 'lineWidgetAdded', l, i, typeof t == 'number' ? t : ke(t)),
                i
              )
            }
            var ou = 0,
              Kt = function (e, t) {
                ;((this.lines = []), (this.type = t), (this.doc = e), (this.id = ++ou))
              }
            ;((Kt.prototype.clear = function () {
              if (!this.explicitlyCleared) {
                var e = this.doc.cm,
                  t = e && !e.curOp
                if ((t && un(e), dt(this, 'clear'))) {
                  var r = this.find()
                  r && ze(this, 'clear', r.from, r.to)
                }
                for (var n = null, i = null, l = 0; l < this.lines.length; ++l) {
                  var o = this.lines[l],
                    a = hr(o.markedSpans, this)
                  ;(e && !this.collapsed
                    ? zt(e, ke(o), 'text')
                    : e && (a.to != null && (i = ke(o)), a.from != null && (n = ke(o))),
                    (o.markedSpans = Vf(o.markedSpans, a)),
                    a.from == null &&
                      this.collapsed &&
                      !Bt(this.doc, o) &&
                      e &&
                      wt(o, Tn(e.display)))
                }
                if (e && this.collapsed && !e.options.lineWrapping)
                  for (var f = 0; f < this.lines.length; ++f) {
                    var c = mt(this.lines[f]),
                      k = oi(c)
                    k > e.display.maxLineLength &&
                      ((e.display.maxLine = c),
                      (e.display.maxLineLength = k),
                      (e.display.maxLineChanged = !0))
                  }
                ;(n != null && e && this.collapsed && rt(e, n, i + 1),
                  (this.lines.length = 0),
                  (this.explicitlyCleared = !0),
                  this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && $s(e.doc)),
                  e && ze(e, 'markerCleared', e, this, n, i),
                  t && fn(e),
                  this.parent && this.parent.clear())
              }
            }),
              (Kt.prototype.find = function (e, t) {
                e == null && this.type == 'bookmark' && (e = 1)
                for (var r, n, i = 0; i < this.lines.length; ++i) {
                  var l = this.lines[i],
                    o = hr(l.markedSpans, this)
                  if (o.from != null && ((r = B(t ? l : ke(l), o.from)), e == -1)) return r
                  if (o.to != null && ((n = B(t ? l : ke(l), o.to)), e == 1)) return n
                }
                return r && { from: r, to: n }
              }),
              (Kt.prototype.changed = function () {
                var e = this,
                  t = this.find(-1, !0),
                  r = this,
                  n = this.doc.cm
                !t ||
                  !n ||
                  st(n, function () {
                    var i = t.line,
                      l = ke(t.line),
                      o = wl(n, l)
                    if (
                      (o && (cs(o), (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                      (n.curOp.updateMaxLine = !0),
                      !Bt(r.doc, i) && r.height != null)
                    ) {
                      var a = r.height
                      r.height = null
                      var f = pr(r) - a
                      f && wt(i, i.height + f)
                    }
                    ze(n, 'markerChanged', n, e)
                  })
              }),
              (Kt.prototype.attachLine = function (e) {
                if (!this.lines.length && this.doc.cm) {
                  var t = this.doc.cm.curOp
                  ;(!t.maybeHiddenMarkers || Ce(t.maybeHiddenMarkers, this) == -1) &&
                    (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(e)
              }),
              (Kt.prototype.detachLine = function (e) {
                if ((this.lines.splice(Ce(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
                  var t = this.doc.cm.curOp
                  ;(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                }
              }),
              xn(Kt))
            function Hn(e, t, r, n, i) {
              if (n && n.shared) return uc(e, t, r, n, i)
              if (e.cm && !e.cm.curOp) return je(e.cm, Hn)(e, t, r, n, i)
              var l = new Kt(e, i),
                o = fe(t, r)
              if ((n && ft(n, l, !1), o > 0 || (o == 0 && l.clearWhenEmpty !== !1))) return l
              if (
                (l.replacedWith &&
                  ((l.collapsed = !0),
                  (l.widgetNode = G('span', [l.replacedWith], 'CodeMirror-widget')),
                  n.handleMouseEvents || l.widgetNode.setAttribute('cm-ignore-events', 'true'),
                  n.insertLeft && (l.widgetNode.insertLeft = !0)),
                l.collapsed)
              ) {
                if (Za(e, t.line, t, r, l) || (t.line != r.line && Za(e, r.line, t, r, l)))
                  throw new Error(
                    'Inserting collapsed marker partially overlapping an existing one',
                  )
                Jf()
              }
              l.addToHistory && js(e, { from: t, to: r, origin: 'markText' }, e.sel, NaN)
              var a = t.line,
                f = e.cm,
                c
              if (
                (e.iter(a, r.line + 1, function (w) {
                  ;(f &&
                    l.collapsed &&
                    !f.options.lineWrapping &&
                    mt(w) == f.display.maxLine &&
                    (c = !0),
                    l.collapsed && a != t.line && wt(w, 0),
                    eh(
                      w,
                      new ni(l, a == t.line ? t.ch : null, a == r.line ? r.ch : null),
                      e.cm && e.cm.curOp,
                    ),
                    ++a)
                }),
                l.collapsed &&
                  e.iter(t.line, r.line + 1, function (w) {
                    Bt(e, w) && wt(w, 0)
                  }),
                l.clearOnEnter &&
                  ae(l, 'beforeCursorEnter', function () {
                    return l.clear()
                  }),
                l.readOnly &&
                  (Qf(), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
                l.collapsed && ((l.id = ++ou), (l.atomic = !0)),
                f)
              ) {
                if ((c && (f.curOp.updateMaxLine = !0), l.collapsed)) rt(f, t.line, r.line + 1)
                else if (
                  l.className ||
                  l.startStyle ||
                  l.endStyle ||
                  l.css ||
                  l.attributes ||
                  l.title
                )
                  for (var k = t.line; k <= r.line; k++) zt(f, k, 'text')
                ;(l.atomic && $s(f.doc), ze(f, 'markerAdded', f, l))
              }
              return l
            }
            var Mr = function (e, t) {
              ;((this.markers = e), (this.primary = t))
              for (var r = 0; r < e.length; ++r) e[r].parent = this
            }
            ;((Mr.prototype.clear = function () {
              if (!this.explicitlyCleared) {
                this.explicitlyCleared = !0
                for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear()
                ze(this, 'clear')
              }
            }),
              (Mr.prototype.find = function (e, t) {
                return this.primary.find(e, t)
              }),
              xn(Mr))
            function uc(e, t, r, n, i) {
              ;((n = ft(n)), (n.shared = !1))
              var l = [Hn(e, t, r, n, i)],
                o = l[0],
                a = n.widgetNode
              return (
                Ut(e, function (f) {
                  ;(a && (n.widgetNode = a.cloneNode(!0)), l.push(Hn(f, he(f, t), he(f, r), n, i)))
                  for (var c = 0; c < f.linked.length; ++c) if (f.linked[c].isParent) return
                  o = ve(l)
                }),
                new Mr(l, o)
              )
            }
            function au(e) {
              return e.findMarks(B(e.first, 0), e.clipPos(B(e.lastLine())), function (t) {
                return t.parent
              })
            }
            function fc(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r],
                  i = n.find(),
                  l = e.clipPos(i.from),
                  o = e.clipPos(i.to)
                if (fe(l, o)) {
                  var a = Hn(e, l, o, n.primary, n.primary.type)
                  ;(n.markers.push(a), (a.parent = n))
                }
              }
            }
            function hc(e) {
              for (
                var t = function (n) {
                    var i = e[n],
                      l = [i.primary.doc]
                    Ut(i.primary.doc, function (f) {
                      return l.push(f)
                    })
                    for (var o = 0; o < i.markers.length; o++) {
                      var a = i.markers[o]
                      Ce(l, a.doc) == -1 && ((a.parent = null), i.markers.splice(o--, 1))
                    }
                  },
                  r = 0;
                r < e.length;
                r++
              )
                t(r)
            }
            var cc = 0,
              it = function (e, t, r, n, i) {
                if (!(this instanceof it)) return new it(e, t, r, n, i)
                ;(r == null && (r = 0),
                  _r.call(this, [new Tr([new wn('', null)])]),
                  (this.first = r),
                  (this.scrollTop = this.scrollLeft = 0),
                  (this.cantEdit = !1),
                  (this.cleanGeneration = 1),
                  (this.modeFrontier = this.highlightFrontier = r))
                var l = B(r, 0)
                ;((this.sel = qt(l)),
                  (this.history = new yi(null)),
                  (this.id = ++cc),
                  (this.modeOption = t),
                  (this.lineSep = n),
                  (this.direction = i == 'rtl' ? 'rtl' : 'ltr'),
                  (this.extend = !1),
                  typeof e == 'string' && (e = this.splitLines(e)),
                  Gl(this, { from: l, to: l, text: e }),
                  Xe(this, qt(l), tt))
              }
            ;((it.prototype = _a(_r.prototype, {
              constructor: it,
              iter: function (e, t, r) {
                r
                  ? this.iterN(e - this.first, t - e, r)
                  : this.iterN(this.first, this.first + this.size, e)
              },
              insert: function (e, t) {
                for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height
                this.insertInner(e - this.first, t, r)
              },
              remove: function (e, t) {
                this.removeInner(e - this.first, t)
              },
              getValue: function (e) {
                var t = ul(this, this.first, this.first + this.size)
                return e === !1 ? t : t.join(e || this.lineSeparator())
              },
              setValue: qe(function (e) {
                var t = B(this.first, 0),
                  r = this.first + this.size - 1
                ;(Nn(
                  this,
                  {
                    from: t,
                    to: B(r, ne(this, r).text.length),
                    text: this.splitLines(e),
                    origin: 'setValue',
                    full: !0,
                  },
                  !0,
                ),
                  this.cm && mr(this.cm, 0, 0),
                  Xe(this, qt(t), tt))
              }),
              replaceRange: function (e, t, r, n) {
                ;((t = he(this, t)), (r = r ? he(this, r) : t), Fn(this, e, t, r, n))
              },
              getRange: function (e, t, r) {
                var n = en(this, he(this, e), he(this, t))
                return r === !1 ? n : r === '' ? n.join('') : n.join(r || this.lineSeparator())
              },
              getLine: function (e) {
                var t = this.getLineHandle(e)
                return t && t.text
              },
              getLineHandle: function (e) {
                if (ur(this, e)) return ne(this, e)
              },
              getLineNumber: function (e) {
                return ke(e)
              },
              getLineHandleVisualStart: function (e) {
                return (typeof e == 'number' && (e = ne(this, e)), mt(e))
              },
              lineCount: function () {
                return this.size
              },
              firstLine: function () {
                return this.first
              },
              lastLine: function () {
                return this.first + this.size - 1
              },
              clipPos: function (e) {
                return he(this, e)
              },
              getCursor: function (e) {
                var t = this.sel.primary(),
                  r
                return (
                  e == null || e == 'head'
                    ? (r = t.head)
                    : e == 'anchor'
                      ? (r = t.anchor)
                      : e == 'end' || e == 'to' || e === !1
                        ? (r = t.to())
                        : (r = t.from()),
                  r
                )
              },
              listSelections: function () {
                return this.sel.ranges
              },
              somethingSelected: function () {
                return this.sel.somethingSelected()
              },
              setCursor: qe(function (e, t, r) {
                Ks(this, he(this, typeof e == 'number' ? B(e, t || 0) : e), null, r)
              }),
              setSelection: qe(function (e, t, r) {
                Ks(this, he(this, e), he(this, t || e), r)
              }),
              extendSelection: qe(function (e, t, r) {
                xi(this, he(this, e), t && he(this, t), r)
              }),
              extendSelections: qe(function (e, t) {
                Us(this, Ra(this, e), t)
              }),
              extendSelectionsBy: qe(function (e, t) {
                var r = vt(this.sel.ranges, e)
                Us(this, Ra(this, r), t)
              }),
              setSelections: qe(function (e, t, r) {
                if (e.length) {
                  for (var n = [], i = 0; i < e.length; i++)
                    n[i] = new ye(he(this, e[i].anchor), he(this, e[i].head || e[i].anchor))
                  ;(t == null && (t = Math.min(e.length - 1, this.sel.primIndex)),
                    Xe(this, bt(this.cm, n, t), r))
                }
              }),
              addSelection: qe(function (e, t, r) {
                var n = this.sel.ranges.slice(0)
                ;(n.push(new ye(he(this, e), he(this, t || e))),
                  Xe(this, bt(this.cm, n, n.length - 1), r))
              }),
              getSelection: function (e) {
                for (var t = this.sel.ranges, r, n = 0; n < t.length; n++) {
                  var i = en(this, t[n].from(), t[n].to())
                  r = r ? r.concat(i) : i
                }
                return e === !1 ? r : r.join(e || this.lineSeparator())
              },
              getSelections: function (e) {
                for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
                  var i = en(this, r[n].from(), r[n].to())
                  ;(e !== !1 && (i = i.join(e || this.lineSeparator())), (t[n] = i))
                }
                return t
              },
              replaceSelection: function (e, t, r) {
                for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e
                this.replaceSelections(n, t, r || '+input')
              },
              replaceSelections: qe(function (e, t, r) {
                for (var n = [], i = this.sel, l = 0; l < i.ranges.length; l++) {
                  var o = i.ranges[l]
                  n[l] = { from: o.from(), to: o.to(), text: this.splitLines(e[l]), origin: r }
                }
                for (var a = t && t != 'end' && Vh(this, n, t), f = n.length - 1; f >= 0; f--)
                  Nn(this, n[f])
                a ? Xs(this, a) : this.cm && Mn(this.cm)
              }),
              undo: qe(function () {
                wi(this, 'undo')
              }),
              redo: qe(function () {
                wi(this, 'redo')
              }),
              undoSelection: qe(function () {
                wi(this, 'undo', !0)
              }),
              redoSelection: qe(function () {
                wi(this, 'redo', !0)
              }),
              setExtending: function (e) {
                this.extend = e
              },
              getExtending: function () {
                return this.extend
              },
              historySize: function () {
                for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++)
                  e.done[n].ranges || ++t
                for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r
                return { undo: t, redo: r }
              },
              clearHistory: function () {
                var e = this
                ;((this.history = new yi(this.history)),
                  Ut(
                    this,
                    function (t) {
                      return (t.history = e.history)
                    },
                    !0,
                  ))
              },
              markClean: function () {
                this.cleanGeneration = this.changeGeneration(!0)
              },
              changeGeneration: function (e) {
                return (
                  e &&
                    (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
                  this.history.generation
                )
              },
              isClean: function (e) {
                return this.history.generation == (e || this.cleanGeneration)
              },
              getHistory: function () {
                return { done: An(this.history.done), undone: An(this.history.undone) }
              },
              setHistory: function (e) {
                var t = (this.history = new yi(this.history))
                ;((t.done = An(e.done.slice(0), null, !0)),
                  (t.undone = An(e.undone.slice(0), null, !0)))
              },
              setGutterMarker: qe(function (e, t, r) {
                return Cr(this, e, 'gutter', function (n) {
                  var i = n.gutterMarkers || (n.gutterMarkers = {})
                  return ((i[t] = r), !r && Da(i) && (n.gutterMarkers = null), !0)
                })
              }),
              clearGutter: qe(function (e) {
                var t = this
                this.iter(function (r) {
                  r.gutterMarkers &&
                    r.gutterMarkers[e] &&
                    Cr(t, r, 'gutter', function () {
                      return (
                        (r.gutterMarkers[e] = null),
                        Da(r.gutterMarkers) && (r.gutterMarkers = null),
                        !0
                      )
                    })
                })
              }),
              lineInfo: function (e) {
                var t
                if (typeof e == 'number') {
                  if (!ur(this, e) || ((t = e), (e = ne(this, e)), !e)) return null
                } else if (((t = ke(e)), t == null)) return null
                return {
                  line: t,
                  handle: e,
                  text: e.text,
                  gutterMarkers: e.gutterMarkers,
                  textClass: e.textClass,
                  bgClass: e.bgClass,
                  wrapClass: e.wrapClass,
                  widgets: e.widgets,
                }
              },
              addLineClass: qe(function (e, t, r) {
                return Cr(this, e, t == 'gutter' ? 'gutter' : 'class', function (n) {
                  var i =
                    t == 'text'
                      ? 'textClass'
                      : t == 'background'
                        ? 'bgClass'
                        : t == 'gutter'
                          ? 'gutterClass'
                          : 'wrapClass'
                  if (!n[i]) n[i] = r
                  else {
                    if (X(r).test(n[i])) return !1
                    n[i] += ' ' + r
                  }
                  return !0
                })
              }),
              removeLineClass: qe(function (e, t, r) {
                return Cr(this, e, t == 'gutter' ? 'gutter' : 'class', function (n) {
                  var i =
                      t == 'text'
                        ? 'textClass'
                        : t == 'background'
                          ? 'bgClass'
                          : t == 'gutter'
                            ? 'gutterClass'
                            : 'wrapClass',
                    l = n[i]
                  if (l)
                    if (r == null) n[i] = null
                    else {
                      var o = l.match(X(r))
                      if (!o) return !1
                      var a = o.index + o[0].length
                      n[i] =
                        l.slice(0, o.index) + (!o.index || a == l.length ? '' : ' ') + l.slice(a) ||
                        null
                    }
                  else return !1
                  return !0
                })
              }),
              addLineWidget: qe(function (e, t, r) {
                return sc(this, e, t, r)
              }),
              removeLineWidget: function (e) {
                e.clear()
              },
              markText: function (e, t, r) {
                return Hn(this, he(this, e), he(this, t), r, (r && r.type) || 'range')
              },
              setBookmark: function (e, t) {
                var r = {
                  replacedWith: t && (t.nodeType == null ? t.widget : t),
                  insertLeft: t && t.insertLeft,
                  clearWhenEmpty: !1,
                  shared: t && t.shared,
                  handleMouseEvents: t && t.handleMouseEvents,
                }
                return ((e = he(this, e)), Hn(this, e, e, r, 'bookmark'))
              },
              findMarksAt: function (e) {
                e = he(this, e)
                var t = [],
                  r = ne(this, e.line).markedSpans
                if (r)
                  for (var n = 0; n < r.length; ++n) {
                    var i = r[n]
                    ;(i.from == null || i.from <= e.ch) &&
                      (i.to == null || i.to >= e.ch) &&
                      t.push(i.marker.parent || i.marker)
                  }
                return t
              },
              findMarks: function (e, t, r) {
                ;((e = he(this, e)), (t = he(this, t)))
                var n = [],
                  i = e.line
                return (
                  this.iter(e.line, t.line + 1, function (l) {
                    var o = l.markedSpans
                    if (o)
                      for (var a = 0; a < o.length; a++) {
                        var f = o[a]
                        !(
                          (f.to != null && i == e.line && e.ch >= f.to) ||
                          (f.from == null && i != e.line) ||
                          (f.from != null && i == t.line && f.from >= t.ch)
                        ) &&
                          (!r || r(f.marker)) &&
                          n.push(f.marker.parent || f.marker)
                      }
                    ++i
                  }),
                  n
                )
              },
              getAllMarks: function () {
                var e = []
                return (
                  this.iter(function (t) {
                    var r = t.markedSpans
                    if (r)
                      for (var n = 0; n < r.length; ++n) r[n].from != null && e.push(r[n].marker)
                  }),
                  e
                )
              },
              posFromIndex: function (e) {
                var t,
                  r = this.first,
                  n = this.lineSeparator().length
                return (
                  this.iter(function (i) {
                    var l = i.text.length + n
                    if (l > e) return ((t = e), !0)
                    ;((e -= l), ++r)
                  }),
                  he(this, B(r, t))
                )
              },
              indexFromPos: function (e) {
                e = he(this, e)
                var t = e.ch
                if (e.line < this.first || e.ch < 0) return 0
                var r = this.lineSeparator().length
                return (
                  this.iter(this.first, e.line, function (n) {
                    t += n.text.length + r
                  }),
                  t
                )
              },
              copy: function (e) {
                var t = new it(
                  ul(this, this.first, this.first + this.size),
                  this.modeOption,
                  this.first,
                  this.lineSep,
                  this.direction,
                )
                return (
                  (t.scrollTop = this.scrollTop),
                  (t.scrollLeft = this.scrollLeft),
                  (t.sel = this.sel),
                  (t.extend = !1),
                  e &&
                    ((t.history.undoDepth = this.history.undoDepth),
                    t.setHistory(this.getHistory())),
                  t
                )
              },
              linkedDoc: function (e) {
                e || (e = {})
                var t = this.first,
                  r = this.first + this.size
                ;(e.from != null && e.from > t && (t = e.from),
                  e.to != null && e.to < r && (r = e.to))
                var n = new it(
                  ul(this, t, r),
                  e.mode || this.modeOption,
                  t,
                  this.lineSep,
                  this.direction,
                )
                return (
                  e.sharedHist && (n.history = this.history),
                  (this.linked || (this.linked = [])).push({ doc: n, sharedHist: e.sharedHist }),
                  (n.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
                  fc(n, au(this)),
                  n
                )
              },
              unlinkDoc: function (e) {
                if ((e instanceof Te && (e = e.doc), this.linked))
                  for (var t = 0; t < this.linked.length; ++t) {
                    var r = this.linked[t]
                    if (r.doc == e) {
                      ;(this.linked.splice(t, 1), e.unlinkDoc(this), hc(au(this)))
                      break
                    }
                  }
                if (e.history == this.history) {
                  var n = [e.id]
                  ;(Ut(
                    e,
                    function (i) {
                      return n.push(i.id)
                    },
                    !0,
                  ),
                    (e.history = new yi(null)),
                    (e.history.done = An(this.history.done, n)),
                    (e.history.undone = An(this.history.undone, n)))
                }
              },
              iterLinkedDocs: function (e) {
                Ut(this, e)
              },
              getMode: function () {
                return this.mode
              },
              getEditor: function () {
                return this.cm
              },
              splitLines: function (e) {
                return this.lineSep ? e.split(this.lineSep) : il(e)
              },
              lineSeparator: function () {
                return (
                  this.lineSep ||
                  `
`
                )
              },
              setDirection: qe(function (e) {
                ;(e != 'rtl' && (e = 'ltr'),
                  e != this.direction &&
                    ((this.direction = e),
                    this.iter(function (t) {
                      return (t.order = null)
                    }),
                    this.cm && ec(this.cm)))
              }),
            })),
              (it.prototype.eachLine = it.prototype.iter))
            var su = 0
            function dc(e) {
              var t = this
              if ((uu(t), !(Be(t, e) || Et(t.display, e)))) {
                ;(nt(e), v && (su = +new Date()))
                var r = ln(t, e, !0),
                  n = e.dataTransfer.files
                if (!(!r || t.isReadOnly()))
                  if (n && n.length && window.FileReader && window.File)
                    for (
                      var i = n.length,
                        l = Array(i),
                        o = 0,
                        a = function () {
                          ++o == i &&
                            je(t, function () {
                              r = he(t.doc, r)
                              var M = {
                                from: r,
                                to: r,
                                text: t.doc.splitLines(
                                  l
                                    .filter(function (H) {
                                      return H != null
                                    })
                                    .join(t.doc.lineSeparator()),
                                ),
                                origin: 'paste',
                              }
                              ;(Nn(t.doc, M), Xs(t.doc, qt(he(t.doc, r), he(t.doc, Gt(M)))))
                            })()
                        },
                        f = function (M, H) {
                          if (
                            t.options.allowDropFileTypes &&
                            Ce(t.options.allowDropFileTypes, M.type) == -1
                          ) {
                            a()
                            return
                          }
                          var W = new FileReader()
                          ;((W.onerror = function () {
                            return a()
                          }),
                            (W.onload = function () {
                              var j = W.result
                              if (/[\x00-\x08\x0e-\x1f]{2}/.test(j)) {
                                a()
                                return
                              }
                              ;((l[H] = j), a())
                            }),
                            W.readAsText(M))
                        },
                        c = 0;
                      c < n.length;
                      c++
                    )
                      f(n[c], c)
                  else {
                    if (t.state.draggingText && t.doc.sel.contains(r) > -1) {
                      ;(t.state.draggingText(e),
                        setTimeout(function () {
                          return t.display.input.focus()
                        }, 20))
                      return
                    }
                    try {
                      var k = e.dataTransfer.getData('Text')
                      if (k) {
                        var w
                        if (
                          (t.state.draggingText &&
                            !t.state.draggingText.copy &&
                            (w = t.listSelections()),
                          ki(t.doc, qt(r, r)),
                          w)
                        )
                          for (var E = 0; E < w.length; ++E)
                            Fn(t.doc, '', w[E].anchor, w[E].head, 'drag')
                        ;(t.replaceSelection(k, 'around', 'paste'), t.display.input.focus())
                      }
                    } catch {}
                  }
              }
            }
            function pc(e, t) {
              if (v && (!e.state.draggingText || +new Date() - su < 100)) {
                sr(t)
                return
              }
              if (
                !(Be(e, t) || Et(e.display, t)) &&
                (t.dataTransfer.setData('Text', e.getSelection()),
                (t.dataTransfer.effectAllowed = 'copyMove'),
                t.dataTransfer.setDragImage && !P)
              ) {
                var r = A('img', null, null, 'position: fixed; left: 0; top: 0;')
                ;((r.src =
                  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
                  F &&
                    ((r.width = r.height = 1),
                    e.display.wrapper.appendChild(r),
                    (r._top = r.offsetTop)),
                  t.dataTransfer.setDragImage(r, 0, 0),
                  F && r.parentNode.removeChild(r))
              }
            }
            function gc(e, t) {
              var r = ln(e, t)
              if (r) {
                var n = document.createDocumentFragment()
                ;(Al(e, r, n),
                  e.display.dragCursor ||
                    ((e.display.dragCursor = A(
                      'div',
                      null,
                      'CodeMirror-cursors CodeMirror-dragcursors',
                    )),
                    e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                  se(e.display.dragCursor, n))
              }
            }
            function uu(e) {
              e.display.dragCursor &&
                (e.display.lineSpace.removeChild(e.display.dragCursor),
                (e.display.dragCursor = null))
            }
            function fu(e) {
              if (document.getElementsByClassName) {
                for (
                  var t = document.getElementsByClassName('CodeMirror'), r = [], n = 0;
                  n < t.length;
                  n++
                ) {
                  var i = t[n].CodeMirror
                  i && r.push(i)
                }
                r.length &&
                  r[0].operation(function () {
                    for (var l = 0; l < r.length; l++) e(r[l])
                  })
              }
            }
            var hu = !1
            function vc() {
              hu || (mc(), (hu = !0))
            }
            function mc() {
              var e
              ;(ae(window, 'resize', function () {
                e == null &&
                  (e = setTimeout(function () {
                    ;((e = null), fu(yc))
                  }, 100))
              }),
                ae(window, 'blur', function () {
                  return fu(Dn)
                }))
            }
            function yc(e) {
              var t = e.display
              ;((t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
                (t.scrollbarsClipped = !1),
                e.setSize())
            }
            for (
              var Xt = {
                  3: 'Pause',
                  8: 'Backspace',
                  9: 'Tab',
                  13: 'Enter',
                  16: 'Shift',
                  17: 'Ctrl',
                  18: 'Alt',
                  19: 'Pause',
                  20: 'CapsLock',
                  27: 'Esc',
                  32: 'Space',
                  33: 'PageUp',
                  34: 'PageDown',
                  35: 'End',
                  36: 'Home',
                  37: 'Left',
                  38: 'Up',
                  39: 'Right',
                  40: 'Down',
                  44: 'PrintScrn',
                  45: 'Insert',
                  46: 'Delete',
                  59: ';',
                  61: '=',
                  91: 'Mod',
                  92: 'Mod',
                  93: 'Mod',
                  106: '*',
                  107: '=',
                  109: '-',
                  110: '.',
                  111: '/',
                  145: 'ScrollLock',
                  173: '-',
                  186: ';',
                  187: '=',
                  188: ',',
                  189: '-',
                  190: '.',
                  191: '/',
                  192: '`',
                  219: '[',
                  220: '\\',
                  221: ']',
                  222: "'",
                  224: 'Mod',
                  63232: 'Up',
                  63233: 'Down',
                  63234: 'Left',
                  63235: 'Right',
                  63272: 'Delete',
                  63273: 'Home',
                  63275: 'End',
                  63276: 'PageUp',
                  63277: 'PageDown',
                  63302: 'Insert',
                },
                Or = 0;
              Or < 10;
              Or++
            )
              Xt[Or + 48] = Xt[Or + 96] = String(Or)
            for (var Li = 65; Li <= 90; Li++) Xt[Li] = String.fromCharCode(Li)
            for (var Ar = 1; Ar <= 12; Ar++) Xt[Ar + 111] = Xt[Ar + 63235] = 'F' + Ar
            var Ft = {}
            ;((Ft.basic = {
              Left: 'goCharLeft',
              Right: 'goCharRight',
              Up: 'goLineUp',
              Down: 'goLineDown',
              End: 'goLineEnd',
              Home: 'goLineStartSmart',
              PageUp: 'goPageUp',
              PageDown: 'goPageDown',
              Delete: 'delCharAfter',
              Backspace: 'delCharBefore',
              'Shift-Backspace': 'delCharBefore',
              Tab: 'defaultTab',
              'Shift-Tab': 'indentAuto',
              Enter: 'newlineAndIndent',
              Insert: 'toggleOverwrite',
              Esc: 'singleSelection',
            }),
              (Ft.pcDefault = {
                'Ctrl-A': 'selectAll',
                'Ctrl-D': 'deleteLine',
                'Ctrl-Z': 'undo',
                'Shift-Ctrl-Z': 'redo',
                'Ctrl-Y': 'redo',
                'Ctrl-Home': 'goDocStart',
                'Ctrl-End': 'goDocEnd',
                'Ctrl-Up': 'goLineUp',
                'Ctrl-Down': 'goLineDown',
                'Ctrl-Left': 'goGroupLeft',
                'Ctrl-Right': 'goGroupRight',
                'Alt-Left': 'goLineStart',
                'Alt-Right': 'goLineEnd',
                'Ctrl-Backspace': 'delGroupBefore',
                'Ctrl-Delete': 'delGroupAfter',
                'Ctrl-S': 'save',
                'Ctrl-F': 'find',
                'Ctrl-G': 'findNext',
                'Shift-Ctrl-G': 'findPrev',
                'Shift-Ctrl-F': 'replace',
                'Shift-Ctrl-R': 'replaceAll',
                'Ctrl-[': 'indentLess',
                'Ctrl-]': 'indentMore',
                'Ctrl-U': 'undoSelection',
                'Shift-Ctrl-U': 'redoSelection',
                'Alt-U': 'redoSelection',
                fallthrough: 'basic',
              }),
              (Ft.emacsy = {
                'Ctrl-F': 'goCharRight',
                'Ctrl-B': 'goCharLeft',
                'Ctrl-P': 'goLineUp',
                'Ctrl-N': 'goLineDown',
                'Ctrl-A': 'goLineStart',
                'Ctrl-E': 'goLineEnd',
                'Ctrl-V': 'goPageDown',
                'Shift-Ctrl-V': 'goPageUp',
                'Ctrl-D': 'delCharAfter',
                'Ctrl-H': 'delCharBefore',
                'Alt-Backspace': 'delWordBefore',
                'Ctrl-K': 'killLine',
                'Ctrl-T': 'transposeChars',
                'Ctrl-O': 'openLine',
              }),
              (Ft.macDefault = {
                'Cmd-A': 'selectAll',
                'Cmd-D': 'deleteLine',
                'Cmd-Z': 'undo',
                'Shift-Cmd-Z': 'redo',
                'Cmd-Y': 'redo',
                'Cmd-Home': 'goDocStart',
                'Cmd-Up': 'goDocStart',
                'Cmd-End': 'goDocEnd',
                'Cmd-Down': 'goDocEnd',
                'Alt-Left': 'goGroupLeft',
                'Alt-Right': 'goGroupRight',
                'Cmd-Left': 'goLineLeft',
                'Cmd-Right': 'goLineRight',
                'Alt-Backspace': 'delGroupBefore',
                'Ctrl-Alt-Backspace': 'delGroupAfter',
                'Alt-Delete': 'delGroupAfter',
                'Cmd-S': 'save',
                'Cmd-F': 'find',
                'Cmd-G': 'findNext',
                'Shift-Cmd-G': 'findPrev',
                'Cmd-Alt-F': 'replace',
                'Shift-Cmd-Alt-F': 'replaceAll',
                'Cmd-[': 'indentLess',
                'Cmd-]': 'indentMore',
                'Cmd-Backspace': 'delWrappedLineLeft',
                'Cmd-Delete': 'delWrappedLineRight',
                'Cmd-U': 'undoSelection',
                'Shift-Cmd-U': 'redoSelection',
                'Ctrl-Up': 'goDocStart',
                'Ctrl-Down': 'goDocEnd',
                fallthrough: ['basic', 'emacsy'],
              }),
              (Ft.default = z ? Ft.macDefault : Ft.pcDefault))
            function bc(e) {
              var t = e.split(/-(?!$)/)
              e = t[t.length - 1]
              for (var r, n, i, l, o = 0; o < t.length - 1; o++) {
                var a = t[o]
                if (/^(cmd|meta|m)$/i.test(a)) l = !0
                else if (/^a(lt)?$/i.test(a)) r = !0
                else if (/^(c|ctrl|control)$/i.test(a)) n = !0
                else if (/^s(hift)?$/i.test(a)) i = !0
                else throw new Error('Unrecognized modifier name: ' + a)
              }
              return (
                r && (e = 'Alt-' + e),
                n && (e = 'Ctrl-' + e),
                l && (e = 'Cmd-' + e),
                i && (e = 'Shift-' + e),
                e
              )
            }
            function xc(e) {
              var t = {}
              for (var r in e)
                if (e.hasOwnProperty(r)) {
                  var n = e[r]
                  if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue
                  if (n == '...') {
                    delete e[r]
                    continue
                  }
                  for (var i = vt(r.split(' '), bc), l = 0; l < i.length; l++) {
                    var o = void 0,
                      a = void 0
                    l == i.length - 1
                      ? ((a = i.join(' ')), (o = n))
                      : ((a = i.slice(0, l + 1).join(' ')), (o = '...'))
                    var f = t[a]
                    if (!f) t[a] = o
                    else if (f != o) throw new Error('Inconsistent bindings for ' + a)
                  }
                  delete e[r]
                }
              for (var c in t) e[c] = t[c]
              return e
            }
            function Rn(e, t, r, n) {
              t = Ci(t)
              var i = t.call ? t.call(e, n) : t[e]
              if (i === !1) return 'nothing'
              if (i === '...') return 'multi'
              if (i != null && r(i)) return 'handled'
              if (t.fallthrough) {
                if (Object.prototype.toString.call(t.fallthrough) != '[object Array]')
                  return Rn(e, t.fallthrough, r, n)
                for (var l = 0; l < t.fallthrough.length; l++) {
                  var o = Rn(e, t.fallthrough[l], r, n)
                  if (o) return o
                }
              }
            }
            function cu(e) {
              var t = typeof e == 'string' ? e : Xt[e.keyCode]
              return t == 'Ctrl' || t == 'Alt' || t == 'Shift' || t == 'Mod'
            }
            function du(e, t, r) {
              var n = e
              return (
                t.altKey && n != 'Alt' && (e = 'Alt-' + e),
                (ue ? t.metaKey : t.ctrlKey) && n != 'Ctrl' && (e = 'Ctrl-' + e),
                (ue ? t.ctrlKey : t.metaKey) && n != 'Mod' && (e = 'Cmd-' + e),
                !r && t.shiftKey && n != 'Shift' && (e = 'Shift-' + e),
                e
              )
            }
            function pu(e, t) {
              if (F && e.keyCode == 34 && e.char) return !1
              var r = Xt[e.keyCode]
              return r == null || e.altGraphKey
                ? !1
                : (e.keyCode == 3 && e.code && (r = e.code), du(r, e, t))
            }
            function Ci(e) {
              return typeof e == 'string' ? Ft[e] : e
            }
            function Pn(e, t) {
              for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
                for (var l = t(r[i]); n.length && fe(l.from, ve(n).to) <= 0; ) {
                  var o = n.pop()
                  if (fe(o.from, l.from) < 0) {
                    l.from = o.from
                    break
                  }
                }
                n.push(l)
              }
              st(e, function () {
                for (var a = n.length - 1; a >= 0; a--) Fn(e.doc, '', n[a].from, n[a].to, '+delete')
                Mn(e)
              })
            }
            function Yl(e, t, r) {
              var n = Ma(e.text, t + r, r)
              return n < 0 || n > e.text.length ? null : n
            }
            function $l(e, t, r) {
              var n = Yl(e, t.ch, r)
              return n == null ? null : new B(t.line, n, r < 0 ? 'after' : 'before')
            }
            function Zl(e, t, r, n, i) {
              if (e) {
                t.doc.direction == 'rtl' && (i = -i)
                var l = Mt(r, t.doc.direction)
                if (l) {
                  var o = i < 0 ? ve(l) : l[0],
                    a = i < 0 == (o.level == 1),
                    f = a ? 'after' : 'before',
                    c
                  if (o.level > 0 || t.doc.direction == 'rtl') {
                    var k = Cn(t, r)
                    c = i < 0 ? r.text.length - 1 : 0
                    var w = Tt(t, k, c).top
                    ;((c = lr(
                      function (E) {
                        return Tt(t, k, E).top == w
                      },
                      i < 0 == (o.level == 1) ? o.from : o.to - 1,
                      c,
                    )),
                      f == 'before' && (c = Yl(r, c, 1)))
                  } else c = i < 0 ? o.to : o.from
                  return new B(n, c, f)
                }
              }
              return new B(n, i < 0 ? r.text.length : 0, i < 0 ? 'before' : 'after')
            }
            function kc(e, t, r, n) {
              var i = Mt(t, e.doc.direction)
              if (!i) return $l(t, r, n)
              r.ch >= t.text.length
                ? ((r.ch = t.text.length), (r.sticky = 'before'))
                : r.ch <= 0 && ((r.ch = 0), (r.sticky = 'after'))
              var l = ar(i, r.ch, r.sticky),
                o = i[l]
              if (
                e.doc.direction == 'ltr' &&
                o.level % 2 == 0 &&
                (n > 0 ? o.to > r.ch : o.from < r.ch)
              )
                return $l(t, r, n)
              var a = function (U, $) {
                  return Yl(t, U instanceof B ? U.ch : U, $)
                },
                f,
                c = function (U) {
                  return e.options.lineWrapping
                    ? ((f = f || Cn(e, t)), bs(e, t, f, U))
                    : { begin: 0, end: t.text.length }
                },
                k = c(r.sticky == 'before' ? a(r, -1) : r.ch)
              if (e.doc.direction == 'rtl' || o.level == 1) {
                var w = (o.level == 1) == n < 0,
                  E = a(r, w ? 1 : -1)
                if (E != null && (w ? E <= o.to && E <= k.end : E >= o.from && E >= k.begin)) {
                  var M = w ? 'before' : 'after'
                  return new B(r.line, E, M)
                }
              }
              var H = function (U, $, K) {
                  for (
                    var Q = function (we, Ge) {
                      return Ge ? new B(r.line, a(we, 1), 'before') : new B(r.line, we, 'after')
                    };
                    U >= 0 && U < i.length;
                    U += $
                  ) {
                    var ie = i[U],
                      re = $ > 0 == (ie.level != 1),
                      pe = re ? K.begin : a(K.end, -1)
                    if (
                      (ie.from <= pe && pe < ie.to) ||
                      ((pe = re ? ie.from : a(ie.to, -1)), K.begin <= pe && pe < K.end)
                    )
                      return Q(pe, re)
                  }
                },
                W = H(l + n, n, k)
              if (W) return W
              var j = n > 0 ? k.end : a(k.begin, -1)
              return j != null &&
                !(n > 0 && j == t.text.length) &&
                ((W = H(n > 0 ? 0 : i.length - 1, n, c(j))), W)
                ? W
                : null
            }
            var Er = {
              selectAll: Js,
              singleSelection: function (e) {
                return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), tt)
              },
              killLine: function (e) {
                return Pn(e, function (t) {
                  if (t.empty()) {
                    var r = ne(e.doc, t.head.line).text.length
                    return t.head.ch == r && t.head.line < e.lastLine()
                      ? { from: t.head, to: B(t.head.line + 1, 0) }
                      : { from: t.head, to: B(t.head.line, r) }
                  } else return { from: t.from(), to: t.to() }
                })
              },
              deleteLine: function (e) {
                return Pn(e, function (t) {
                  return { from: B(t.from().line, 0), to: he(e.doc, B(t.to().line + 1, 0)) }
                })
              },
              delLineLeft: function (e) {
                return Pn(e, function (t) {
                  return { from: B(t.from().line, 0), to: t.from() }
                })
              },
              delWrappedLineLeft: function (e) {
                return Pn(e, function (t) {
                  var r = e.charCoords(t.head, 'div').top + 5,
                    n = e.coordsChar({ left: 0, top: r }, 'div')
                  return { from: n, to: t.from() }
                })
              },
              delWrappedLineRight: function (e) {
                return Pn(e, function (t) {
                  var r = e.charCoords(t.head, 'div').top + 5,
                    n = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, 'div')
                  return { from: t.from(), to: n }
                })
              },
              undo: function (e) {
                return e.undo()
              },
              redo: function (e) {
                return e.redo()
              },
              undoSelection: function (e) {
                return e.undoSelection()
              },
              redoSelection: function (e) {
                return e.redoSelection()
              },
              goDocStart: function (e) {
                return e.extendSelection(B(e.firstLine(), 0))
              },
              goDocEnd: function (e) {
                return e.extendSelection(B(e.lastLine()))
              },
              goLineStart: function (e) {
                return e.extendSelectionsBy(
                  function (t) {
                    return gu(e, t.head.line)
                  },
                  { origin: '+move', bias: 1 },
                )
              },
              goLineStartSmart: function (e) {
                return e.extendSelectionsBy(
                  function (t) {
                    return vu(e, t.head)
                  },
                  { origin: '+move', bias: 1 },
                )
              },
              goLineEnd: function (e) {
                return e.extendSelectionsBy(
                  function (t) {
                    return Sc(e, t.head.line)
                  },
                  { origin: '+move', bias: -1 },
                )
              },
              goLineRight: function (e) {
                return e.extendSelectionsBy(function (t) {
                  var r = e.cursorCoords(t.head, 'div').top + 5
                  return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, 'div')
                }, kt)
              },
              goLineLeft: function (e) {
                return e.extendSelectionsBy(function (t) {
                  var r = e.cursorCoords(t.head, 'div').top + 5
                  return e.coordsChar({ left: 0, top: r }, 'div')
                }, kt)
              },
              goLineLeftSmart: function (e) {
                return e.extendSelectionsBy(function (t) {
                  var r = e.cursorCoords(t.head, 'div').top + 5,
                    n = e.coordsChar({ left: 0, top: r }, 'div')
                  return n.ch < e.getLine(n.line).search(/\S/) ? vu(e, t.head) : n
                }, kt)
              },
              goLineUp: function (e) {
                return e.moveV(-1, 'line')
              },
              goLineDown: function (e) {
                return e.moveV(1, 'line')
              },
              goPageUp: function (e) {
                return e.moveV(-1, 'page')
              },
              goPageDown: function (e) {
                return e.moveV(1, 'page')
              },
              goCharLeft: function (e) {
                return e.moveH(-1, 'char')
              },
              goCharRight: function (e) {
                return e.moveH(1, 'char')
              },
              goColumnLeft: function (e) {
                return e.moveH(-1, 'column')
              },
              goColumnRight: function (e) {
                return e.moveH(1, 'column')
              },
              goWordLeft: function (e) {
                return e.moveH(-1, 'word')
              },
              goGroupRight: function (e) {
                return e.moveH(1, 'group')
              },
              goGroupLeft: function (e) {
                return e.moveH(-1, 'group')
              },
              goWordRight: function (e) {
                return e.moveH(1, 'word')
              },
              delCharBefore: function (e) {
                return e.deleteH(-1, 'codepoint')
              },
              delCharAfter: function (e) {
                return e.deleteH(1, 'char')
              },
              delWordBefore: function (e) {
                return e.deleteH(-1, 'word')
              },
              delWordAfter: function (e) {
                return e.deleteH(1, 'word')
              },
              delGroupBefore: function (e) {
                return e.deleteH(-1, 'group')
              },
              delGroupAfter: function (e) {
                return e.deleteH(1, 'group')
              },
              indentAuto: function (e) {
                return e.indentSelection('smart')
              },
              indentMore: function (e) {
                return e.indentSelection('add')
              },
              indentLess: function (e) {
                return e.indentSelection('subtract')
              },
              insertTab: function (e) {
                return e.replaceSelection('	')
              },
              insertSoftTab: function (e) {
                for (
                  var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0;
                  i < r.length;
                  i++
                ) {
                  var l = r[i].from(),
                    o = Re(e.getLine(l.line), l.ch, n)
                  t.push(It(n - (o % n)))
                }
                e.replaceSelections(t)
              },
              defaultTab: function (e) {
                e.somethingSelected() ? e.indentSelection('add') : e.execCommand('insertTab')
              },
              transposeChars: function (e) {
                return st(e, function () {
                  for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                    if (t[n].empty()) {
                      var i = t[n].head,
                        l = ne(e.doc, i.line).text
                      if (l) {
                        if ((i.ch == l.length && (i = new B(i.line, i.ch - 1)), i.ch > 0))
                          ((i = new B(i.line, i.ch + 1)),
                            e.replaceRange(
                              l.charAt(i.ch - 1) + l.charAt(i.ch - 2),
                              B(i.line, i.ch - 2),
                              i,
                              '+transpose',
                            ))
                        else if (i.line > e.doc.first) {
                          var o = ne(e.doc, i.line - 1).text
                          o &&
                            ((i = new B(i.line, 1)),
                            e.replaceRange(
                              l.charAt(0) + e.doc.lineSeparator() + o.charAt(o.length - 1),
                              B(i.line - 1, o.length - 1),
                              i,
                              '+transpose',
                            ))
                        }
                      }
                      r.push(new ye(i, i))
                    }
                  e.setSelections(r)
                })
              },
              newlineAndIndent: function (e) {
                return st(e, function () {
                  for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--)
                    e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, '+input')
                  t = e.listSelections()
                  for (var n = 0; n < t.length; n++) e.indentLine(t[n].from().line, null, !0)
                  Mn(e)
                })
              },
              openLine: function (e) {
                return e.replaceSelection(
                  `
`,
                  'start',
                )
              },
              toggleOverwrite: function (e) {
                return e.toggleOverwrite()
              },
            }
            function gu(e, t) {
              var r = ne(e.doc, t),
                n = mt(r)
              return (n != r && (t = ke(n)), Zl(!0, e, n, t, 1))
            }
            function Sc(e, t) {
              var r = ne(e.doc, t),
                n = lh(r)
              return (n != r && (t = ke(n)), Zl(!0, e, r, t, -1))
            }
            function vu(e, t) {
              var r = gu(e, t.line),
                n = ne(e.doc, r.line),
                i = Mt(n, e.doc.direction)
              if (!i || i[0].level == 0) {
                var l = Math.max(r.ch, n.text.search(/\S/)),
                  o = t.line == r.line && t.ch <= l && t.ch
                return B(r.line, o ? 0 : l, r.sticky)
              }
              return r
            }
            function Ti(e, t, r) {
              if (typeof t == 'string' && ((t = Er[t]), !t)) return !1
              e.display.input.ensurePolled()
              var n = e.display.shift,
                i = !1
              try {
                ;(e.isReadOnly() && (e.state.suppressEdits = !0),
                  r && (e.display.shift = !1),
                  (i = t(e) != Pe))
              } finally {
                ;((e.display.shift = n), (e.state.suppressEdits = !1))
              }
              return i
            }
            function wc(e, t, r) {
              for (var n = 0; n < e.state.keyMaps.length; n++) {
                var i = Rn(t, e.state.keyMaps[n], r, e)
                if (i) return i
              }
              return (
                (e.options.extraKeys && Rn(t, e.options.extraKeys, r, e)) ||
                Rn(t, e.options.keyMap, r, e)
              )
            }
            var Lc = new Ze()
            function Nr(e, t, r, n) {
              var i = e.state.keySeq
              if (i) {
                if (cu(t)) return 'handled'
                if (
                  (/\'$/.test(t)
                    ? (e.state.keySeq = null)
                    : Lc.set(50, function () {
                        e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset())
                      }),
                  mu(e, i + ' ' + t, r, n))
                )
                  return !0
              }
              return mu(e, t, r, n)
            }
            function mu(e, t, r, n) {
              var i = wc(e, t, n)
              return (
                i == 'multi' && (e.state.keySeq = t),
                i == 'handled' && ze(e, 'keyHandled', e, t, r),
                (i == 'handled' || i == 'multi') && (nt(r), El(e)),
                !!i
              )
            }
            function yu(e, t) {
              var r = pu(t, !0)
              return r
                ? t.shiftKey && !e.state.keySeq
                  ? Nr(e, 'Shift-' + r, t, function (n) {
                      return Ti(e, n, !0)
                    }) ||
                    Nr(e, r, t, function (n) {
                      if (typeof n == 'string' ? /^go[A-Z]/.test(n) : n.motion) return Ti(e, n)
                    })
                  : Nr(e, r, t, function (n) {
                      return Ti(e, n)
                    })
                : !1
            }
            function Cc(e, t, r) {
              return Nr(e, "'" + r + "'", t, function (n) {
                return Ti(e, n, !0)
              })
            }
            var Ql = null
            function bu(e) {
              var t = this
              if (
                !(e.target && e.target != t.display.input.getField()) &&
                ((t.curOp.focus = be(J(t))), !Be(t, e))
              ) {
                v && L < 11 && e.keyCode == 27 && (e.returnValue = !1)
                var r = e.keyCode
                t.display.shift = r == 16 || e.shiftKey
                var n = yu(t, e)
                ;(F &&
                  ((Ql = n ? r : null),
                  !n &&
                    r == 88 &&
                    !qf &&
                    (z ? e.metaKey : e.ctrlKey) &&
                    t.replaceSelection('', null, 'cut')),
                  p &&
                    !z &&
                    !n &&
                    r == 46 &&
                    e.shiftKey &&
                    !e.ctrlKey &&
                    document.execCommand &&
                    document.execCommand('cut'),
                  r == 18 && !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) && Tc(t))
              }
            }
            function Tc(e) {
              var t = e.display.lineDiv
              Le(t, 'CodeMirror-crosshair')
              function r(n) {
                ;(n.keyCode == 18 || !n.altKey) &&
                  (oe(t, 'CodeMirror-crosshair'),
                  ht(document, 'keyup', r),
                  ht(document, 'mouseover', r))
              }
              ;(ae(document, 'keyup', r), ae(document, 'mouseover', r))
            }
            function xu(e) {
              ;(e.keyCode == 16 && (this.doc.sel.shift = !1), Be(this, e))
            }
            function ku(e) {
              var t = this
              if (
                !(e.target && e.target != t.display.input.getField()) &&
                !(Et(t.display, e) || Be(t, e) || (e.ctrlKey && !e.altKey) || (z && e.metaKey))
              ) {
                var r = e.keyCode,
                  n = e.charCode
                if (F && r == Ql) {
                  ;((Ql = null), nt(e))
                  return
                }
                if (!(F && (!e.which || e.which < 10) && yu(t, e))) {
                  var i = String.fromCharCode(n ?? r)
                  i != '\b' && (Cc(t, e, i) || t.display.input.onKeyPress(e))
                }
              }
            }
            var _c = 400,
              Jl = function (e, t, r) {
                ;((this.time = e), (this.pos = t), (this.button = r))
              }
            Jl.prototype.compare = function (e, t, r) {
              return this.time + _c > e && fe(t, this.pos) == 0 && r == this.button
            }
            var Fr, Hr
            function Dc(e, t) {
              var r = +new Date()
              return Hr && Hr.compare(r, e, t)
                ? ((Fr = Hr = null), 'triple')
                : Fr && Fr.compare(r, e, t)
                  ? ((Hr = new Jl(r, e, t)), (Fr = null), 'double')
                  : ((Fr = new Jl(r, e, t)), (Hr = null), 'single')
            }
            function Su(e) {
              var t = this,
                r = t.display
              if (!(Be(t, e) || (r.activeTouch && r.input.supportsTouch()))) {
                if ((r.input.ensurePolled(), (r.shift = e.shiftKey), Et(r, e))) {
                  g ||
                    ((r.scroller.draggable = !1),
                    setTimeout(function () {
                      return (r.scroller.draggable = !0)
                    }, 100))
                  return
                }
                if (!Vl(t, e)) {
                  var n = ln(t, e),
                    i = Na(e),
                    l = n ? Dc(n, i) : 'single'
                  ;(de(t).focus(),
                    i == 1 && t.state.selectingText && t.state.selectingText(e),
                    !(n && Mc(t, i, n, l, e)) &&
                      (i == 1
                        ? n
                          ? Ac(t, n, l, e)
                          : tl(e) == r.scroller && nt(e)
                        : i == 2
                          ? (n && xi(t.doc, n),
                            setTimeout(function () {
                              return r.input.focus()
                            }, 20))
                          : i == 3 && (xe ? t.display.input.onContextMenu(e) : Nl(t))))
                }
              }
            }
            function Mc(e, t, r, n, i) {
              var l = 'Click'
              return (
                n == 'double' ? (l = 'Double' + l) : n == 'triple' && (l = 'Triple' + l),
                (l = (t == 1 ? 'Left' : t == 2 ? 'Middle' : 'Right') + l),
                Nr(e, du(l, i), i, function (o) {
                  if ((typeof o == 'string' && (o = Er[o]), !o)) return !1
                  var a = !1
                  try {
                    ;(e.isReadOnly() && (e.state.suppressEdits = !0), (a = o(e, r) != Pe))
                  } finally {
                    e.state.suppressEdits = !1
                  }
                  return a
                })
              )
            }
            function Oc(e, t, r) {
              var n = e.getOption('configureMouse'),
                i = n ? n(e, t, r) : {}
              if (i.unit == null) {
                var l = ce ? r.shiftKey && r.metaKey : r.altKey
                i.unit = l ? 'rectangle' : t == 'single' ? 'char' : t == 'double' ? 'word' : 'line'
              }
              return (
                (i.extend == null || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey),
                i.addNew == null && (i.addNew = z ? r.metaKey : r.ctrlKey),
                i.moveOnDrag == null && (i.moveOnDrag = !(z ? r.altKey : r.ctrlKey)),
                i
              )
            }
            function Ac(e, t, r, n) {
              v ? setTimeout(et(ws, e), 0) : (e.curOp.focus = be(J(e)))
              var i = Oc(e, r, n),
                l = e.doc.sel,
                o
              e.options.dragDrop &&
              Wf &&
              !e.isReadOnly() &&
              r == 'single' &&
              (o = l.contains(t)) > -1 &&
              (fe((o = l.ranges[o]).from(), t) < 0 || t.xRel > 0) &&
              (fe(o.to(), t) > 0 || t.xRel < 0)
                ? Ec(e, n, t, i)
                : Nc(e, n, t, i)
            }
            function Ec(e, t, r, n) {
              var i = e.display,
                l = !1,
                o = je(e, function (c) {
                  ;(g && (i.scroller.draggable = !1),
                    (e.state.draggingText = !1),
                    e.state.delayingBlurEvent &&
                      (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : Nl(e)),
                    ht(i.wrapper.ownerDocument, 'mouseup', o),
                    ht(i.wrapper.ownerDocument, 'mousemove', a),
                    ht(i.scroller, 'dragstart', f),
                    ht(i.scroller, 'drop', o),
                    l ||
                      (nt(c),
                      n.addNew || xi(e.doc, r, null, null, n.extend),
                      (g && !P) || (v && L == 9)
                        ? setTimeout(function () {
                            ;(i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }),
                              i.input.focus())
                          }, 20)
                        : i.input.focus()))
                }),
                a = function (c) {
                  l = l || Math.abs(t.clientX - c.clientX) + Math.abs(t.clientY - c.clientY) >= 10
                },
                f = function () {
                  return (l = !0)
                }
              ;(g && (i.scroller.draggable = !0),
                (e.state.draggingText = o),
                (o.copy = !n.moveOnDrag),
                ae(i.wrapper.ownerDocument, 'mouseup', o),
                ae(i.wrapper.ownerDocument, 'mousemove', a),
                ae(i.scroller, 'dragstart', f),
                ae(i.scroller, 'drop', o),
                (e.state.delayingBlurEvent = !0),
                setTimeout(function () {
                  return i.input.focus()
                }, 20),
                i.scroller.dragDrop && i.scroller.dragDrop())
            }
            function wu(e, t, r) {
              if (r == 'char') return new ye(t, t)
              if (r == 'word') return e.findWordAt(t)
              if (r == 'line') return new ye(B(t.line, 0), he(e.doc, B(t.line + 1, 0)))
              var n = r(e, t)
              return new ye(n.from, n.to)
            }
            function Nc(e, t, r, n) {
              v && Nl(e)
              var i = e.display,
                l = e.doc
              nt(t)
              var o,
                a,
                f = l.sel,
                c = f.ranges
              if (
                (n.addNew && !n.extend
                  ? ((a = l.sel.contains(r)), a > -1 ? (o = c[a]) : (o = new ye(r, r)))
                  : ((o = l.sel.primary()), (a = l.sel.primIndex)),
                n.unit == 'rectangle')
              )
                (n.addNew || (o = new ye(r, r)), (r = ln(e, t, !0, !0)), (a = -1))
              else {
                var k = wu(e, r, n.unit)
                n.extend ? (o = Kl(o, k.anchor, k.head, n.extend)) : (o = k)
              }
              n.addNew
                ? a == -1
                  ? ((a = c.length),
                    Xe(l, bt(e, c.concat([o]), a), { scroll: !1, origin: '*mouse' }))
                  : c.length > 1 && c[a].empty() && n.unit == 'char' && !n.extend
                    ? (Xe(l, bt(e, c.slice(0, a).concat(c.slice(a + 1)), 0), {
                        scroll: !1,
                        origin: '*mouse',
                      }),
                      (f = l.sel))
                    : Xl(l, a, o, ir)
                : ((a = 0), Xe(l, new ct([o], 0), ir), (f = l.sel))
              var w = r
              function E(K) {
                if (fe(w, K) != 0)
                  if (((w = K), n.unit == 'rectangle')) {
                    for (
                      var Q = [],
                        ie = e.options.tabSize,
                        re = Re(ne(l, r.line).text, r.ch, ie),
                        pe = Re(ne(l, K.line).text, K.ch, ie),
                        we = Math.min(re, pe),
                        Ge = Math.max(re, pe),
                        _e = Math.min(r.line, K.line),
                        ut = Math.min(e.lastLine(), Math.max(r.line, K.line));
                      _e <= ut;
                      _e++
                    ) {
                      var lt = ne(l, _e).text,
                        Fe = St(lt, we, ie)
                      we == Ge
                        ? Q.push(new ye(B(_e, Fe), B(_e, Fe)))
                        : lt.length > Fe && Q.push(new ye(B(_e, Fe), B(_e, St(lt, Ge, ie))))
                    }
                    ;(Q.length || Q.push(new ye(r, r)),
                      Xe(l, bt(e, f.ranges.slice(0, a).concat(Q), a), {
                        origin: '*mouse',
                        scroll: !1,
                      }),
                      e.scrollIntoView(K))
                  } else {
                    var ot = o,
                      Ke = wu(e, K, n.unit),
                      Ie = ot.anchor,
                      He
                    fe(Ke.anchor, Ie) > 0
                      ? ((He = Ke.head), (Ie = ei(ot.from(), Ke.anchor)))
                      : ((He = Ke.anchor), (Ie = Vr(ot.to(), Ke.head)))
                    var Me = f.ranges.slice(0)
                    ;((Me[a] = Fc(e, new ye(he(l, Ie), He))), Xe(l, bt(e, Me, a), ir))
                  }
              }
              var M = i.wrapper.getBoundingClientRect(),
                H = 0
              function W(K) {
                var Q = ++H,
                  ie = ln(e, K, !0, n.unit == 'rectangle')
                if (ie)
                  if (fe(ie, w) != 0) {
                    ;((e.curOp.focus = be(J(e))), E(ie))
                    var re = pi(i, l)
                    ;(ie.line >= re.to || ie.line < re.from) &&
                      setTimeout(
                        je(e, function () {
                          H == Q && W(K)
                        }),
                        150,
                      )
                  } else {
                    var pe = K.clientY < M.top ? -20 : K.clientY > M.bottom ? 20 : 0
                    pe &&
                      setTimeout(
                        je(e, function () {
                          H == Q && ((i.scroller.scrollTop += pe), W(K))
                        }),
                        50,
                      )
                  }
              }
              function j(K) {
                ;((e.state.selectingText = !1),
                  (H = 1 / 0),
                  K && (nt(K), i.input.focus()),
                  ht(i.wrapper.ownerDocument, 'mousemove', U),
                  ht(i.wrapper.ownerDocument, 'mouseup', $),
                  (l.history.lastSelOrigin = null))
              }
              var U = je(e, function (K) {
                  K.buttons === 0 || !Na(K) ? j(K) : W(K)
                }),
                $ = je(e, j)
              ;((e.state.selectingText = $),
                ae(i.wrapper.ownerDocument, 'mousemove', U),
                ae(i.wrapper.ownerDocument, 'mouseup', $))
            }
            function Fc(e, t) {
              var r = t.anchor,
                n = t.head,
                i = ne(e.doc, r.line)
              if (fe(r, n) == 0 && r.sticky == n.sticky) return t
              var l = Mt(i)
              if (!l) return t
              var o = ar(l, r.ch, r.sticky),
                a = l[o]
              if (a.from != r.ch && a.to != r.ch) return t
              var f = o + ((a.from == r.ch) == (a.level != 1) ? 0 : 1)
              if (f == 0 || f == l.length) return t
              var c
              if (n.line != r.line) c = (n.line - r.line) * (e.doc.direction == 'ltr' ? 1 : -1) > 0
              else {
                var k = ar(l, n.ch, n.sticky),
                  w = k - o || (n.ch - r.ch) * (a.level == 1 ? -1 : 1)
                k == f - 1 || k == f ? (c = w < 0) : (c = w > 0)
              }
              var E = l[f + (c ? -1 : 0)],
                M = c == (E.level == 1),
                H = M ? E.from : E.to,
                W = M ? 'after' : 'before'
              return r.ch == H && r.sticky == W ? t : new ye(new B(r.line, H, W), n)
            }
            function Lu(e, t, r, n) {
              var i, l
              if (t.touches) ((i = t.touches[0].clientX), (l = t.touches[0].clientY))
              else
                try {
                  ;((i = t.clientX), (l = t.clientY))
                } catch {
                  return !1
                }
              if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1
              n && nt(t)
              var o = e.display,
                a = o.lineDiv.getBoundingClientRect()
              if (l > a.bottom || !dt(e, r)) return el(t)
              l -= a.top - o.viewOffset
              for (var f = 0; f < e.display.gutterSpecs.length; ++f) {
                var c = o.gutters.childNodes[f]
                if (c && c.getBoundingClientRect().right >= i) {
                  var k = tn(e.doc, l),
                    w = e.display.gutterSpecs[f]
                  return (Ee(e, r, e, k, w.className, t), el(t))
                }
              }
            }
            function Vl(e, t) {
              return Lu(e, t, 'gutterClick', !0)
            }
            function Cu(e, t) {
              Et(e.display, t) ||
                Hc(e, t) ||
                Be(e, t, 'contextmenu') ||
                xe ||
                e.display.input.onContextMenu(t)
            }
            function Hc(e, t) {
              return dt(e, 'gutterContextMenu') ? Lu(e, t, 'gutterContextMenu', !1) : !1
            }
            function Tu(e) {
              ;((e.display.wrapper.className =
                e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
                e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
                gr(e))
            }
            var In = {
                toString: function () {
                  return 'CodeMirror.Init'
                },
              },
              _u = {},
              _i = {}
            function Rc(e) {
              var t = e.optionHandlers
              function r(n, i, l, o) {
                ;((e.defaults[n] = i),
                  l &&
                    (t[n] = o
                      ? function (a, f, c) {
                          c != In && l(a, f, c)
                        }
                      : l))
              }
              ;((e.defineOption = r),
                (e.Init = In),
                r(
                  'value',
                  '',
                  function (n, i) {
                    return n.setValue(i)
                  },
                  !0,
                ),
                r(
                  'mode',
                  null,
                  function (n, i) {
                    ;((n.doc.modeOption = i), ql(n))
                  },
                  !0,
                ),
                r('indentUnit', 2, ql, !0),
                r('indentWithTabs', !1),
                r('smartIndent', !0),
                r(
                  'tabSize',
                  4,
                  function (n) {
                    ;(wr(n), gr(n), rt(n))
                  },
                  !0,
                ),
                r('lineSeparator', null, function (n, i) {
                  if (((n.doc.lineSep = i), !!i)) {
                    var l = [],
                      o = n.doc.first
                    n.doc.iter(function (f) {
                      for (var c = 0; ; ) {
                        var k = f.text.indexOf(i, c)
                        if (k == -1) break
                        ;((c = k + i.length), l.push(B(o, k)))
                      }
                      o++
                    })
                    for (var a = l.length - 1; a >= 0; a--)
                      Fn(n.doc, i, l[a], B(l[a].line, l[a].ch + i.length))
                  }
                }),
                r(
                  'specialChars',
                  /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
                  function (n, i, l) {
                    ;((n.state.specialChars = new RegExp(i.source + (i.test('	') ? '' : '|	'), 'g')),
                      l != In && n.refresh())
                  },
                ),
                r(
                  'specialCharPlaceholder',
                  hh,
                  function (n) {
                    return n.refresh()
                  },
                  !0,
                ),
                r('electricChars', !0),
                r(
                  'inputStyle',
                  I ? 'contenteditable' : 'textarea',
                  function () {
                    throw new Error('inputStyle can not (yet) be changed in a running editor')
                  },
                  !0,
                ),
                r(
                  'spellcheck',
                  !1,
                  function (n, i) {
                    return (n.getInputField().spellcheck = i)
                  },
                  !0,
                ),
                r(
                  'autocorrect',
                  !1,
                  function (n, i) {
                    return (n.getInputField().autocorrect = i)
                  },
                  !0,
                ),
                r(
                  'autocapitalize',
                  !1,
                  function (n, i) {
                    return (n.getInputField().autocapitalize = i)
                  },
                  !0,
                ),
                r('rtlMoveVisually', !ee),
                r('wholeLineUpdateBefore', !0),
                r(
                  'theme',
                  'default',
                  function (n) {
                    ;(Tu(n), Sr(n))
                  },
                  !0,
                ),
                r('keyMap', 'default', function (n, i, l) {
                  var o = Ci(i),
                    a = l != In && Ci(l)
                  ;(a && a.detach && a.detach(n, o), o.attach && o.attach(n, a || null))
                }),
                r('extraKeys', null),
                r('configureMouse', null),
                r('lineWrapping', !1, Ic, !0),
                r(
                  'gutters',
                  [],
                  function (n, i) {
                    ;((n.display.gutterSpecs = zl(i, n.options.lineNumbers)), Sr(n))
                  },
                  !0,
                ),
                r(
                  'fixedGutter',
                  !0,
                  function (n, i) {
                    ;((n.display.gutters.style.left = i ? Ml(n.display) + 'px' : '0'), n.refresh())
                  },
                  !0,
                ),
                r(
                  'coverGutterNextToScrollbar',
                  !1,
                  function (n) {
                    return On(n)
                  },
                  !0,
                ),
                r(
                  'scrollbarStyle',
                  'native',
                  function (n) {
                    ;(Ms(n),
                      On(n),
                      n.display.scrollbars.setScrollTop(n.doc.scrollTop),
                      n.display.scrollbars.setScrollLeft(n.doc.scrollLeft))
                  },
                  !0,
                ),
                r(
                  'lineNumbers',
                  !1,
                  function (n, i) {
                    ;((n.display.gutterSpecs = zl(n.options.gutters, i)), Sr(n))
                  },
                  !0,
                ),
                r('firstLineNumber', 1, Sr, !0),
                r(
                  'lineNumberFormatter',
                  function (n) {
                    return n
                  },
                  Sr,
                  !0,
                ),
                r('showCursorWhenSelecting', !1, vr, !0),
                r('resetSelectionOnContextMenu', !0),
                r('lineWiseCopyCut', !0),
                r('pasteLinesPerSelection', !0),
                r('selectionsMayTouch', !1),
                r('readOnly', !1, function (n, i) {
                  ;(i == 'nocursor' && (Dn(n), n.display.input.blur()),
                    n.display.input.readOnlyChanged(i))
                }),
                r('screenReaderLabel', null, function (n, i) {
                  ;((i = i === '' ? null : i), n.display.input.screenReaderLabelChanged(i))
                }),
                r(
                  'disableInput',
                  !1,
                  function (n, i) {
                    i || n.display.input.reset()
                  },
                  !0,
                ),
                r('dragDrop', !0, Pc),
                r('allowDropFileTypes', null),
                r('cursorBlinkRate', 530),
                r('cursorScrollMargin', 0),
                r('cursorHeight', 1, vr, !0),
                r('singleCursorHeightPerLine', !0, vr, !0),
                r('workTime', 100),
                r('workDelay', 100),
                r('flattenSpans', !0, wr, !0),
                r('addModeClass', !1, wr, !0),
                r('pollInterval', 100),
                r('undoDepth', 200, function (n, i) {
                  return (n.doc.history.undoDepth = i)
                }),
                r('historyEventDelay', 1250),
                r(
                  'viewportMargin',
                  10,
                  function (n) {
                    return n.refresh()
                  },
                  !0,
                ),
                r('maxHighlightLength', 1e4, wr, !0),
                r('moveInputWithCursor', !0, function (n, i) {
                  i || n.display.input.resetPosition()
                }),
                r('tabindex', null, function (n, i) {
                  return (n.display.input.getField().tabIndex = i || '')
                }),
                r('autofocus', null),
                r(
                  'direction',
                  'ltr',
                  function (n, i) {
                    return n.doc.setDirection(i)
                  },
                  !0,
                ),
                r('phrases', null))
            }
            function Pc(e, t, r) {
              var n = r && r != In
              if (!t != !n) {
                var i = e.display.dragFunctions,
                  l = t ? ae : ht
                ;(l(e.display.scroller, 'dragstart', i.start),
                  l(e.display.scroller, 'dragenter', i.enter),
                  l(e.display.scroller, 'dragover', i.over),
                  l(e.display.scroller, 'dragleave', i.leave),
                  l(e.display.scroller, 'drop', i.drop))
              }
            }
            function Ic(e) {
              ;(e.options.lineWrapping
                ? (Le(e.display.wrapper, 'CodeMirror-wrap'),
                  (e.display.sizer.style.minWidth = ''),
                  (e.display.sizerWidth = null))
                : (oe(e.display.wrapper, 'CodeMirror-wrap'), bl(e)),
                Ol(e),
                rt(e),
                gr(e),
                setTimeout(function () {
                  return On(e)
                }, 100))
            }
            function Te(e, t) {
              var r = this
              if (!(this instanceof Te)) return new Te(e, t)
              ;((this.options = t = t ? ft(t) : {}), ft(_u, t, !1))
              var n = t.value
              ;(typeof n == 'string'
                ? (n = new it(n, t.mode, null, t.lineSeparator, t.direction))
                : t.mode && (n.modeOption = t.mode),
                (this.doc = n))
              var i = new Te.inputStyles[t.inputStyle](this),
                l = (this.display = new Qh(e, n, i, t))
              ;((l.wrapper.CodeMirror = this),
                Tu(this),
                t.lineWrapping && (this.display.wrapper.className += ' CodeMirror-wrap'),
                Ms(this),
                (this.state = {
                  keyMaps: [],
                  overlays: [],
                  modeGen: 0,
                  overwrite: !1,
                  delayingBlurEvent: !1,
                  focused: !1,
                  suppressEdits: !1,
                  pasteIncoming: -1,
                  cutIncoming: -1,
                  selectingText: !1,
                  draggingText: !1,
                  highlight: new Ze(),
                  keySeq: null,
                  specialChars: null,
                }),
                t.autofocus && !I && l.input.focus(),
                v &&
                  L < 11 &&
                  setTimeout(function () {
                    return r.display.input.reset(!0)
                  }, 20),
                Wc(this),
                vc(),
                un(this),
                (this.curOp.forceUpdate = !0),
                Ws(this, n),
                (t.autofocus && !I) || this.hasFocus()
                  ? setTimeout(function () {
                      r.hasFocus() && !r.state.focused && Fl(r)
                    }, 20)
                  : Dn(this))
              for (var o in _i) _i.hasOwnProperty(o) && _i[o](this, t[o], In)
              ;(Es(this), t.finishInit && t.finishInit(this))
              for (var a = 0; a < eo.length; ++a) eo[a](this)
              ;(fn(this),
                g &&
                  t.lineWrapping &&
                  getComputedStyle(l.lineDiv).textRendering == 'optimizelegibility' &&
                  (l.lineDiv.style.textRendering = 'auto'))
            }
            ;((Te.defaults = _u), (Te.optionHandlers = _i))
            function Wc(e) {
              var t = e.display
              ;(ae(t.scroller, 'mousedown', je(e, Su)),
                v && L < 11
                  ? ae(
                      t.scroller,
                      'dblclick',
                      je(e, function (f) {
                        if (!Be(e, f)) {
                          var c = ln(e, f)
                          if (!(!c || Vl(e, f) || Et(e.display, f))) {
                            nt(f)
                            var k = e.findWordAt(c)
                            xi(e.doc, k.anchor, k.head)
                          }
                        }
                      }),
                    )
                  : ae(t.scroller, 'dblclick', function (f) {
                      return Be(e, f) || nt(f)
                    }),
                ae(t.scroller, 'contextmenu', function (f) {
                  return Cu(e, f)
                }),
                ae(t.input.getField(), 'contextmenu', function (f) {
                  t.scroller.contains(f.target) || Cu(e, f)
                }))
              var r,
                n = { end: 0 }
              function i() {
                t.activeTouch &&
                  ((r = setTimeout(function () {
                    return (t.activeTouch = null)
                  }, 1e3)),
                  (n = t.activeTouch),
                  (n.end = +new Date()))
              }
              function l(f) {
                if (f.touches.length != 1) return !1
                var c = f.touches[0]
                return c.radiusX <= 1 && c.radiusY <= 1
              }
              function o(f, c) {
                if (c.left == null) return !0
                var k = c.left - f.left,
                  w = c.top - f.top
                return k * k + w * w > 20 * 20
              }
              ;(ae(t.scroller, 'touchstart', function (f) {
                if (!Be(e, f) && !l(f) && !Vl(e, f)) {
                  ;(t.input.ensurePolled(), clearTimeout(r))
                  var c = +new Date()
                  ;((t.activeTouch = { start: c, moved: !1, prev: c - n.end <= 300 ? n : null }),
                    f.touches.length == 1 &&
                      ((t.activeTouch.left = f.touches[0].pageX),
                      (t.activeTouch.top = f.touches[0].pageY)))
                }
              }),
                ae(t.scroller, 'touchmove', function () {
                  t.activeTouch && (t.activeTouch.moved = !0)
                }),
                ae(t.scroller, 'touchend', function (f) {
                  var c = t.activeTouch
                  if (c && !Et(t, f) && c.left != null && !c.moved && new Date() - c.start < 300) {
                    var k = e.coordsChar(t.activeTouch, 'page'),
                      w
                    ;(!c.prev || o(c, c.prev)
                      ? (w = new ye(k, k))
                      : !c.prev.prev || o(c, c.prev.prev)
                        ? (w = e.findWordAt(k))
                        : (w = new ye(B(k.line, 0), he(e.doc, B(k.line + 1, 0)))),
                      e.setSelection(w.anchor, w.head),
                      e.focus(),
                      nt(f))
                  }
                  i()
                }),
                ae(t.scroller, 'touchcancel', i),
                ae(t.scroller, 'scroll', function () {
                  t.scroller.clientHeight &&
                    (yr(e, t.scroller.scrollTop),
                    an(e, t.scroller.scrollLeft, !0),
                    Ee(e, 'scroll', e))
                }),
                ae(t.scroller, 'mousewheel', function (f) {
                  return Hs(e, f)
                }),
                ae(t.scroller, 'DOMMouseScroll', function (f) {
                  return Hs(e, f)
                }),
                ae(t.wrapper, 'scroll', function () {
                  return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0)
                }),
                (t.dragFunctions = {
                  enter: function (f) {
                    Be(e, f) || sr(f)
                  },
                  over: function (f) {
                    Be(e, f) || (gc(e, f), sr(f))
                  },
                  start: function (f) {
                    return pc(e, f)
                  },
                  drop: je(e, dc),
                  leave: function (f) {
                    Be(e, f) || uu(e)
                  },
                }))
              var a = t.input.getField()
              ;(ae(a, 'keyup', function (f) {
                return xu.call(e, f)
              }),
                ae(a, 'keydown', je(e, bu)),
                ae(a, 'keypress', je(e, ku)),
                ae(a, 'focus', function (f) {
                  return Fl(e, f)
                }),
                ae(a, 'blur', function (f) {
                  return Dn(e, f)
                }))
            }
            var eo = []
            Te.defineInitHook = function (e) {
              return eo.push(e)
            }
            function Rr(e, t, r, n) {
              var i = e.doc,
                l
              ;(r == null && (r = 'add'),
                r == 'smart' && (i.mode.indent ? (l = fr(e, t).state) : (r = 'prev')))
              var o = e.options.tabSize,
                a = ne(i, t),
                f = Re(a.text, null, o)
              a.stateAfter && (a.stateAfter = null)
              var c = a.text.match(/^\s*/)[0],
                k
              if (!n && !/\S/.test(a.text)) ((k = 0), (r = 'not'))
              else if (
                r == 'smart' &&
                ((k = i.mode.indent(l, a.text.slice(c.length), a.text)), k == Pe || k > 150)
              ) {
                if (!n) return
                r = 'prev'
              }
              ;(r == 'prev'
                ? t > i.first
                  ? (k = Re(ne(i, t - 1).text, null, o))
                  : (k = 0)
                : r == 'add'
                  ? (k = f + e.options.indentUnit)
                  : r == 'subtract'
                    ? (k = f - e.options.indentUnit)
                    : typeof r == 'number' && (k = f + r),
                (k = Math.max(0, k)))
              var w = '',
                E = 0
              if (e.options.indentWithTabs)
                for (var M = Math.floor(k / o); M; --M) ((E += o), (w += '	'))
              if ((E < k && (w += It(k - E)), w != c))
                return (Fn(i, w, B(t, 0), B(t, c.length), '+input'), (a.stateAfter = null), !0)
              for (var H = 0; H < i.sel.ranges.length; H++) {
                var W = i.sel.ranges[H]
                if (W.head.line == t && W.head.ch < c.length) {
                  var j = B(t, c.length)
                  Xl(i, H, new ye(j, j))
                  break
                }
              }
            }
            var xt = null
            function Di(e) {
              xt = e
            }
            function to(e, t, r, n, i) {
              var l = e.doc
              ;((e.display.shift = !1), n || (n = l.sel))
              var o = +new Date() - 200,
                a = i == 'paste' || e.state.pasteIncoming > o,
                f = il(t),
                c = null
              if (a && n.ranges.length > 1)
                if (
                  xt &&
                  xt.text.join(`
`) == t
                ) {
                  if (n.ranges.length % xt.text.length == 0) {
                    c = []
                    for (var k = 0; k < xt.text.length; k++) c.push(l.splitLines(xt.text[k]))
                  }
                } else
                  f.length == n.ranges.length &&
                    e.options.pasteLinesPerSelection &&
                    (c = vt(f, function (U) {
                      return [U]
                    }))
              for (var w = e.curOp.updateInput, E = n.ranges.length - 1; E >= 0; E--) {
                var M = n.ranges[E],
                  H = M.from(),
                  W = M.to()
                M.empty() &&
                  (r && r > 0
                    ? (H = B(H.line, H.ch - r))
                    : e.state.overwrite && !a
                      ? (W = B(W.line, Math.min(ne(l, W.line).text.length, W.ch + ve(f).length)))
                      : a &&
                        xt &&
                        xt.lineWise &&
                        xt.text.join(`
`) ==
                          f.join(`
`) &&
                        (H = W = B(H.line, 0)))
                var j = {
                  from: H,
                  to: W,
                  text: c ? c[E % c.length] : f,
                  origin: i || (a ? 'paste' : e.state.cutIncoming > o ? 'cut' : '+input'),
                }
                ;(Nn(e.doc, j), ze(e, 'inputRead', e, j))
              }
              ;(t && !a && Mu(e, t),
                Mn(e),
                e.curOp.updateInput < 2 && (e.curOp.updateInput = w),
                (e.curOp.typing = !0),
                (e.state.pasteIncoming = e.state.cutIncoming = -1))
            }
            function Du(e, t) {
              var r = e.clipboardData && e.clipboardData.getData('Text')
              if (r)
                return (
                  e.preventDefault(),
                  !t.isReadOnly() &&
                    !t.options.disableInput &&
                    t.hasFocus() &&
                    st(t, function () {
                      return to(t, r, 0, null, 'paste')
                    }),
                  !0
                )
            }
            function Mu(e, t) {
              if (!(!e.options.electricChars || !e.options.smartIndent))
                for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
                  var i = r.ranges[n]
                  if (!(i.head.ch > 100 || (n && r.ranges[n - 1].head.line == i.head.line))) {
                    var l = e.getModeAt(i.head),
                      o = !1
                    if (l.electricChars) {
                      for (var a = 0; a < l.electricChars.length; a++)
                        if (t.indexOf(l.electricChars.charAt(a)) > -1) {
                          o = Rr(e, i.head.line, 'smart')
                          break
                        }
                    } else
                      l.electricInput &&
                        l.electricInput.test(ne(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
                        (o = Rr(e, i.head.line, 'smart'))
                    o && ze(e, 'electricInput', e, i.head.line)
                  }
                }
            }
            function Ou(e) {
              for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
                var i = e.doc.sel.ranges[n].head.line,
                  l = { anchor: B(i, 0), head: B(i + 1, 0) }
                ;(r.push(l), t.push(e.getRange(l.anchor, l.head)))
              }
              return { text: t, ranges: r }
            }
            function no(e, t, r, n) {
              ;(e.setAttribute('autocorrect', r ? 'on' : 'off'),
                e.setAttribute('autocapitalize', n ? 'on' : 'off'),
                e.setAttribute('spellcheck', !!t))
            }
            function Au() {
              var e = A(
                  'textarea',
                  null,
                  null,
                  'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none',
                ),
                t = A(
                  'div',
                  [e],
                  null,
                  'overflow: hidden; position: relative; width: 3px; height: 0px;',
                )
              return (
                g ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
                O && (e.style.border = '1px solid black'),
                t
              )
            }
            function Bc(e) {
              var t = e.optionHandlers,
                r = (e.helpers = {})
              ;((e.prototype = {
                constructor: e,
                focus: function () {
                  ;(de(this).focus(), this.display.input.focus())
                },
                setOption: function (n, i) {
                  var l = this.options,
                    o = l[n]
                  ;(l[n] == i && n != 'mode') ||
                    ((l[n] = i),
                    t.hasOwnProperty(n) && je(this, t[n])(this, i, o),
                    Ee(this, 'optionChange', this, n))
                },
                getOption: function (n) {
                  return this.options[n]
                },
                getDoc: function () {
                  return this.doc
                },
                addKeyMap: function (n, i) {
                  this.state.keyMaps[i ? 'push' : 'unshift'](Ci(n))
                },
                removeKeyMap: function (n) {
                  for (var i = this.state.keyMaps, l = 0; l < i.length; ++l)
                    if (i[l] == n || i[l].name == n) return (i.splice(l, 1), !0)
                },
                addOverlay: Qe(function (n, i) {
                  var l = n.token ? n : e.getMode(this.options, n)
                  if (l.startState) throw new Error('Overlays may not be stateful.')
                  ;(Wt(
                    this.state.overlays,
                    {
                      mode: l,
                      modeSpec: n,
                      opaque: i && i.opaque,
                      priority: (i && i.priority) || 0,
                    },
                    function (o) {
                      return o.priority
                    },
                  ),
                    this.state.modeGen++,
                    rt(this))
                }),
                removeOverlay: Qe(function (n) {
                  for (var i = this.state.overlays, l = 0; l < i.length; ++l) {
                    var o = i[l].modeSpec
                    if (o == n || (typeof n == 'string' && o.name == n)) {
                      ;(i.splice(l, 1), this.state.modeGen++, rt(this))
                      return
                    }
                  }
                }),
                indentLine: Qe(function (n, i, l) {
                  ;(typeof i != 'string' &&
                    typeof i != 'number' &&
                    (i == null
                      ? (i = this.options.smartIndent ? 'smart' : 'prev')
                      : (i = i ? 'add' : 'subtract')),
                    ur(this.doc, n) && Rr(this, n, i, l))
                }),
                indentSelection: Qe(function (n) {
                  for (var i = this.doc.sel.ranges, l = -1, o = 0; o < i.length; o++) {
                    var a = i[o]
                    if (a.empty())
                      a.head.line > l &&
                        (Rr(this, a.head.line, n, !0),
                        (l = a.head.line),
                        o == this.doc.sel.primIndex && Mn(this))
                    else {
                      var f = a.from(),
                        c = a.to(),
                        k = Math.max(l, f.line)
                      l = Math.min(this.lastLine(), c.line - (c.ch ? 0 : 1)) + 1
                      for (var w = k; w < l; ++w) Rr(this, w, n)
                      var E = this.doc.sel.ranges
                      f.ch == 0 &&
                        i.length == E.length &&
                        E[o].from().ch > 0 &&
                        Xl(this.doc, o, new ye(f, E[o].to()), tt)
                    }
                  }
                }),
                getTokenAt: function (n, i) {
                  return za(this, n, i)
                },
                getLineTokens: function (n, i) {
                  return za(this, B(n), i, !0)
                },
                getTokenTypeAt: function (n) {
                  n = he(this.doc, n)
                  var i = Ia(this, ne(this.doc, n.line)),
                    l = 0,
                    o = (i.length - 1) / 2,
                    a = n.ch,
                    f
                  if (a == 0) f = i[2]
                  else
                    for (;;) {
                      var c = (l + o) >> 1
                      if ((c ? i[c * 2 - 1] : 0) >= a) o = c
                      else if (i[c * 2 + 1] < a) l = c + 1
                      else {
                        f = i[c * 2 + 2]
                        break
                      }
                    }
                  var k = f ? f.indexOf('overlay ') : -1
                  return k < 0 ? f : k == 0 ? null : f.slice(0, k - 1)
                },
                getModeAt: function (n) {
                  var i = this.doc.mode
                  return i.innerMode ? e.innerMode(i, this.getTokenAt(n).state).mode : i
                },
                getHelper: function (n, i) {
                  return this.getHelpers(n, i)[0]
                },
                getHelpers: function (n, i) {
                  var l = []
                  if (!r.hasOwnProperty(i)) return l
                  var o = r[i],
                    a = this.getModeAt(n)
                  if (typeof a[i] == 'string') o[a[i]] && l.push(o[a[i]])
                  else if (a[i])
                    for (var f = 0; f < a[i].length; f++) {
                      var c = o[a[i][f]]
                      c && l.push(c)
                    }
                  else
                    a.helperType && o[a.helperType]
                      ? l.push(o[a.helperType])
                      : o[a.name] && l.push(o[a.name])
                  for (var k = 0; k < o._global.length; k++) {
                    var w = o._global[k]
                    w.pred(a, this) && Ce(l, w.val) == -1 && l.push(w.val)
                  }
                  return l
                },
                getStateAfter: function (n, i) {
                  var l = this.doc
                  return ((n = Ha(l, n ?? l.first + l.size - 1)), fr(this, n + 1, i).state)
                },
                cursorCoords: function (n, i) {
                  var l,
                    o = this.doc.sel.primary()
                  return (
                    n == null
                      ? (l = o.head)
                      : typeof n == 'object'
                        ? (l = he(this.doc, n))
                        : (l = n ? o.from() : o.to()),
                    yt(this, l, i || 'page')
                  )
                },
                charCoords: function (n, i) {
                  return fi(this, he(this.doc, n), i || 'page')
                },
                coordsChar: function (n, i) {
                  return ((n = vs(this, n, i || 'page')), Tl(this, n.left, n.top))
                },
                lineAtHeight: function (n, i) {
                  return (
                    (n = vs(this, { top: n, left: 0 }, i || 'page').top),
                    tn(this.doc, n + this.display.viewOffset)
                  )
                },
                heightAtLine: function (n, i, l) {
                  var o = !1,
                    a
                  if (typeof n == 'number') {
                    var f = this.doc.first + this.doc.size - 1
                    ;(n < this.doc.first ? (n = this.doc.first) : n > f && ((n = f), (o = !0)),
                      (a = ne(this.doc, n)))
                  } else a = n
                  return (
                    ui(this, a, { top: 0, left: 0 }, i || 'page', l || o).top +
                    (o ? this.doc.height - At(a) : 0)
                  )
                },
                defaultTextHeight: function () {
                  return Tn(this.display)
                },
                defaultCharWidth: function () {
                  return _n(this.display)
                },
                getViewport: function () {
                  return { from: this.display.viewFrom, to: this.display.viewTo }
                },
                addWidget: function (n, i, l, o, a) {
                  var f = this.display
                  n = yt(this, he(this.doc, n))
                  var c = n.bottom,
                    k = n.left
                  if (
                    ((i.style.position = 'absolute'),
                    i.setAttribute('cm-ignore-events', 'true'),
                    this.display.input.setUneditable(i),
                    f.sizer.appendChild(i),
                    o == 'over')
                  )
                    c = n.top
                  else if (o == 'above' || o == 'near') {
                    var w = Math.max(f.wrapper.clientHeight, this.doc.height),
                      E = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth)
                    ;((o == 'above' || n.bottom + i.offsetHeight > w) && n.top > i.offsetHeight
                      ? (c = n.top - i.offsetHeight)
                      : n.bottom + i.offsetHeight <= w && (c = n.bottom),
                      k + i.offsetWidth > E && (k = E - i.offsetWidth))
                  }
                  ;((i.style.top = c + 'px'),
                    (i.style.left = i.style.right = ''),
                    a == 'right'
                      ? ((k = f.sizer.clientWidth - i.offsetWidth), (i.style.right = '0px'))
                      : (a == 'left'
                          ? (k = 0)
                          : a == 'middle' && (k = (f.sizer.clientWidth - i.offsetWidth) / 2),
                        (i.style.left = k + 'px')),
                    l &&
                      Ph(this, {
                        left: k,
                        top: c,
                        right: k + i.offsetWidth,
                        bottom: c + i.offsetHeight,
                      }))
                },
                triggerOnKeyDown: Qe(bu),
                triggerOnKeyPress: Qe(ku),
                triggerOnKeyUp: xu,
                triggerOnMouseDown: Qe(Su),
                execCommand: function (n) {
                  if (Er.hasOwnProperty(n)) return Er[n].call(null, this)
                },
                triggerElectric: Qe(function (n) {
                  Mu(this, n)
                }),
                findPosH: function (n, i, l, o) {
                  var a = 1
                  i < 0 && ((a = -1), (i = -i))
                  for (
                    var f = he(this.doc, n), c = 0;
                    c < i && ((f = ro(this.doc, f, a, l, o)), !f.hitSide);
                    ++c
                  );
                  return f
                },
                moveH: Qe(function (n, i) {
                  var l = this
                  this.extendSelectionsBy(function (o) {
                    return l.display.shift || l.doc.extend || o.empty()
                      ? ro(l.doc, o.head, n, i, l.options.rtlMoveVisually)
                      : n < 0
                        ? o.from()
                        : o.to()
                  }, kt)
                }),
                deleteH: Qe(function (n, i) {
                  var l = this.doc.sel,
                    o = this.doc
                  l.somethingSelected()
                    ? o.replaceSelection('', null, '+delete')
                    : Pn(this, function (a) {
                        var f = ro(o, a.head, n, i, !1)
                        return n < 0 ? { from: f, to: a.head } : { from: a.head, to: f }
                      })
                }),
                findPosV: function (n, i, l, o) {
                  var a = 1,
                    f = o
                  i < 0 && ((a = -1), (i = -i))
                  for (var c = he(this.doc, n), k = 0; k < i; ++k) {
                    var w = yt(this, c, 'div')
                    if (
                      (f == null ? (f = w.left) : (w.left = f), (c = Eu(this, w, a, l)), c.hitSide)
                    )
                      break
                  }
                  return c
                },
                moveV: Qe(function (n, i) {
                  var l = this,
                    o = this.doc,
                    a = [],
                    f = !this.display.shift && !o.extend && o.sel.somethingSelected()
                  if (
                    (o.extendSelectionsBy(function (k) {
                      if (f) return n < 0 ? k.from() : k.to()
                      var w = yt(l, k.head, 'div')
                      ;(k.goalColumn != null && (w.left = k.goalColumn), a.push(w.left))
                      var E = Eu(l, w, n, i)
                      return (
                        i == 'page' && k == o.sel.primary() && Rl(l, fi(l, E, 'div').top - w.top),
                        E
                      )
                    }, kt),
                    a.length)
                  )
                    for (var c = 0; c < o.sel.ranges.length; c++) o.sel.ranges[c].goalColumn = a[c]
                }),
                findWordAt: function (n) {
                  var i = this.doc,
                    l = ne(i, n.line).text,
                    o = n.ch,
                    a = n.ch
                  if (l) {
                    var f = this.getHelper(n, 'wordChars')
                    ;(n.sticky == 'before' || a == l.length) && o ? --o : ++a
                    for (
                      var c = l.charAt(o),
                        k = Qr(c, f)
                          ? function (w) {
                              return Qr(w, f)
                            }
                          : /\s/.test(c)
                            ? function (w) {
                                return /\s/.test(w)
                              }
                            : function (w) {
                                return !/\s/.test(w) && !Qr(w)
                              };
                      o > 0 && k(l.charAt(o - 1));
                    )
                      --o
                    for (; a < l.length && k(l.charAt(a)); ) ++a
                  }
                  return new ye(B(n.line, o), B(n.line, a))
                },
                toggleOverwrite: function (n) {
                  ;(n != null && n == this.state.overwrite) ||
                    ((this.state.overwrite = !this.state.overwrite)
                      ? Le(this.display.cursorDiv, 'CodeMirror-overwrite')
                      : oe(this.display.cursorDiv, 'CodeMirror-overwrite'),
                    Ee(this, 'overwriteToggle', this, this.state.overwrite))
                },
                hasFocus: function () {
                  return this.display.input.getField() == be(J(this))
                },
                isReadOnly: function () {
                  return !!(this.options.readOnly || this.doc.cantEdit)
                },
                scrollTo: Qe(function (n, i) {
                  mr(this, n, i)
                }),
                getScrollInfo: function () {
                  var n = this.display.scroller
                  return {
                    left: n.scrollLeft,
                    top: n.scrollTop,
                    height: n.scrollHeight - Ct(this) - this.display.barHeight,
                    width: n.scrollWidth - Ct(this) - this.display.barWidth,
                    clientHeight: Sl(this),
                    clientWidth: nn(this),
                  }
                },
                scrollIntoView: Qe(function (n, i) {
                  ;(n == null
                    ? ((n = { from: this.doc.sel.primary().head, to: null }),
                      i == null && (i = this.options.cursorScrollMargin))
                    : typeof n == 'number'
                      ? (n = { from: B(n, 0), to: null })
                      : n.from == null && (n = { from: n, to: null }),
                    n.to || (n.to = n.from),
                    (n.margin = i || 0),
                    n.from.line != null ? Ih(this, n) : Cs(this, n.from, n.to, n.margin))
                }),
                setSize: Qe(function (n, i) {
                  var l = this,
                    o = function (f) {
                      return typeof f == 'number' || /^\d+$/.test(String(f)) ? f + 'px' : f
                    }
                  ;(n != null && (this.display.wrapper.style.width = o(n)),
                    i != null && (this.display.wrapper.style.height = o(i)),
                    this.options.lineWrapping && ds(this))
                  var a = this.display.viewFrom
                  ;(this.doc.iter(a, this.display.viewTo, function (f) {
                    if (f.widgets) {
                      for (var c = 0; c < f.widgets.length; c++)
                        if (f.widgets[c].noHScroll) {
                          zt(l, a, 'widget')
                          break
                        }
                    }
                    ++a
                  }),
                    (this.curOp.forceUpdate = !0),
                    Ee(this, 'refresh', this))
                }),
                operation: function (n) {
                  return st(this, n)
                },
                startOperation: function () {
                  return un(this)
                },
                endOperation: function () {
                  return fn(this)
                },
                refresh: Qe(function () {
                  var n = this.display.cachedTextHeight
                  ;(rt(this),
                    (this.curOp.forceUpdate = !0),
                    gr(this),
                    mr(this, this.doc.scrollLeft, this.doc.scrollTop),
                    Wl(this.display),
                    (n == null ||
                      Math.abs(n - Tn(this.display)) > 0.5 ||
                      this.options.lineWrapping) &&
                      Ol(this),
                    Ee(this, 'refresh', this))
                }),
                swapDoc: Qe(function (n) {
                  var i = this.doc
                  return (
                    (i.cm = null),
                    this.state.selectingText && this.state.selectingText(),
                    Ws(this, n),
                    gr(this),
                    this.display.input.reset(),
                    mr(this, n.scrollLeft, n.scrollTop),
                    (this.curOp.forceScroll = !0),
                    ze(this, 'swapDoc', this, i),
                    i
                  )
                }),
                phrase: function (n) {
                  var i = this.options.phrases
                  return i && Object.prototype.hasOwnProperty.call(i, n) ? i[n] : n
                },
                getInputField: function () {
                  return this.display.input.getField()
                },
                getWrapperElement: function () {
                  return this.display.wrapper
                },
                getScrollerElement: function () {
                  return this.display.scroller
                },
                getGutterElement: function () {
                  return this.display.gutters
                },
              }),
                xn(e),
                (e.registerHelper = function (n, i, l) {
                  ;(r.hasOwnProperty(n) || (r[n] = e[n] = { _global: [] }), (r[n][i] = l))
                }),
                (e.registerGlobalHelper = function (n, i, l, o) {
                  ;(e.registerHelper(n, i, o), r[n]._global.push({ pred: l, val: o }))
                }))
            }
            function ro(e, t, r, n, i) {
              var l = t,
                o = r,
                a = ne(e, t.line),
                f = i && e.direction == 'rtl' ? -r : r
              function c() {
                var $ = t.line + f
                return $ < e.first || $ >= e.first + e.size
                  ? !1
                  : ((t = new B($, t.ch, t.sticky)), (a = ne(e, $)))
              }
              function k($) {
                var K
                if (n == 'codepoint') {
                  var Q = a.text.charCodeAt(t.ch + (r > 0 ? 0 : -1))
                  if (isNaN(Q)) K = null
                  else {
                    var ie = r > 0 ? Q >= 55296 && Q < 56320 : Q >= 56320 && Q < 57343
                    K = new B(
                      t.line,
                      Math.max(0, Math.min(a.text.length, t.ch + r * (ie ? 2 : 1))),
                      -r,
                    )
                  }
                } else i ? (K = kc(e.cm, a, t, r)) : (K = $l(a, t, r))
                if (K == null)
                  if (!$ && c()) t = Zl(i, e.cm, a, t.line, f)
                  else return !1
                else t = K
                return !0
              }
              if (n == 'char' || n == 'codepoint') k()
              else if (n == 'column') k(!0)
              else if (n == 'word' || n == 'group')
                for (
                  var w = null,
                    E = n == 'group',
                    M = e.cm && e.cm.getHelper(t, 'wordChars'),
                    H = !0;
                  !(r < 0 && !k(!H));
                  H = !1
                ) {
                  var W =
                      a.text.charAt(t.ch) ||
                      `
`,
                    j = Qr(W, M)
                      ? 'w'
                      : E &&
                          W ==
                            `
`
                        ? 'n'
                        : !E || /\s/.test(W)
                          ? null
                          : 'p'
                  if ((E && !H && !j && (j = 's'), w && w != j)) {
                    r < 0 && ((r = 1), k(), (t.sticky = 'after'))
                    break
                  }
                  if ((j && (w = j), r > 0 && !k(!H))) break
                }
              var U = Si(e, t, l, o, !0)
              return (hl(l, U) && (U.hitSide = !0), U)
            }
            function Eu(e, t, r, n) {
              var i = e.doc,
                l = t.left,
                o
              if (n == 'page') {
                var a = Math.min(
                    e.display.wrapper.clientHeight,
                    de(e).innerHeight || i(e).documentElement.clientHeight,
                  ),
                  f = Math.max(a - 0.5 * Tn(e.display), 3)
                o = (r > 0 ? t.bottom : t.top) + r * f
              } else n == 'line' && (o = r > 0 ? t.bottom + 3 : t.top - 3)
              for (var c; (c = Tl(e, l, o)), !!c.outside; ) {
                if (r < 0 ? o <= 0 : o >= i.height) {
                  c.hitSide = !0
                  break
                }
                o += r * 5
              }
              return c
            }
            var Se = function (e) {
              ;((this.cm = e),
                (this.lastAnchorNode =
                  this.lastAnchorOffset =
                  this.lastFocusNode =
                  this.lastFocusOffset =
                    null),
                (this.polling = new Ze()),
                (this.composing = null),
                (this.gracePeriod = !1),
                (this.readDOMTimeout = null))
            }
            ;((Se.prototype.init = function (e) {
              var t = this,
                r = this,
                n = r.cm,
                i = (r.div = e.lineDiv)
              ;((i.contentEditable = !0),
                no(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize))
              function l(a) {
                for (var f = a.target; f; f = f.parentNode) {
                  if (f == i) return !0
                  if (/\bCodeMirror-(?:line)?widget\b/.test(f.className)) break
                }
                return !1
              }
              ;(ae(i, 'paste', function (a) {
                !l(a) ||
                  Be(n, a) ||
                  Du(a, n) ||
                  (L <= 11 &&
                    setTimeout(
                      je(n, function () {
                        return t.updateFromDOM()
                      }),
                      20,
                    ))
              }),
                ae(i, 'compositionstart', function (a) {
                  t.composing = { data: a.data, done: !1 }
                }),
                ae(i, 'compositionupdate', function (a) {
                  t.composing || (t.composing = { data: a.data, done: !1 })
                }),
                ae(i, 'compositionend', function (a) {
                  t.composing &&
                    (a.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0))
                }),
                ae(i, 'touchstart', function () {
                  return r.forceCompositionEnd()
                }),
                ae(i, 'input', function () {
                  t.composing || t.readFromDOMSoon()
                }))
              function o(a) {
                if (!(!l(a) || Be(n, a))) {
                  if (n.somethingSelected())
                    (Di({ lineWise: !1, text: n.getSelections() }),
                      a.type == 'cut' && n.replaceSelection('', null, 'cut'))
                  else if (n.options.lineWiseCopyCut) {
                    var f = Ou(n)
                    ;(Di({ lineWise: !0, text: f.text }),
                      a.type == 'cut' &&
                        n.operation(function () {
                          ;(n.setSelections(f.ranges, 0, tt), n.replaceSelection('', null, 'cut'))
                        }))
                  } else return
                  if (a.clipboardData) {
                    a.clipboardData.clearData()
                    var c = xt.text.join(`
`)
                    if (
                      (a.clipboardData.setData('Text', c), a.clipboardData.getData('Text') == c)
                    ) {
                      a.preventDefault()
                      return
                    }
                  }
                  var k = Au(),
                    w = k.firstChild
                  ;(no(w),
                    n.display.lineSpace.insertBefore(k, n.display.lineSpace.firstChild),
                    (w.value = xt.text.join(`
`)))
                  var E = be(me(i))
                  ;(T(w),
                    setTimeout(function () {
                      ;(n.display.lineSpace.removeChild(k),
                        E.focus(),
                        E == i && r.showPrimarySelection())
                    }, 50))
                }
              }
              ;(ae(i, 'copy', o), ae(i, 'cut', o))
            }),
              (Se.prototype.screenReaderLabelChanged = function (e) {
                e ? this.div.setAttribute('aria-label', e) : this.div.removeAttribute('aria-label')
              }),
              (Se.prototype.prepareSelection = function () {
                var e = Ss(this.cm, !1)
                return ((e.focus = be(me(this.div)) == this.div), e)
              }),
              (Se.prototype.showSelection = function (e, t) {
                !e ||
                  !this.cm.display.view.length ||
                  ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
              }),
              (Se.prototype.getSelection = function () {
                return this.cm.display.wrapper.ownerDocument.getSelection()
              }),
              (Se.prototype.showPrimarySelection = function () {
                var e = this.getSelection(),
                  t = this.cm,
                  r = t.doc.sel.primary(),
                  n = r.from(),
                  i = r.to()
                if (
                  t.display.viewTo == t.display.viewFrom ||
                  n.line >= t.display.viewTo ||
                  i.line < t.display.viewFrom
                ) {
                  e.removeAllRanges()
                  return
                }
                var l = Mi(t, e.anchorNode, e.anchorOffset),
                  o = Mi(t, e.focusNode, e.focusOffset)
                if (!(l && !l.bad && o && !o.bad && fe(ei(l, o), n) == 0 && fe(Vr(l, o), i) == 0)) {
                  var a = t.display.view,
                    f = (n.line >= t.display.viewFrom && Nu(t, n)) || {
                      node: a[0].measure.map[2],
                      offset: 0,
                    },
                    c = i.line < t.display.viewTo && Nu(t, i)
                  if (!c) {
                    var k = a[a.length - 1].measure,
                      w = k.maps ? k.maps[k.maps.length - 1] : k.map
                    c = { node: w[w.length - 1], offset: w[w.length - 2] - w[w.length - 3] }
                  }
                  if (!f || !c) {
                    e.removeAllRanges()
                    return
                  }
                  var E = e.rangeCount && e.getRangeAt(0),
                    M
                  try {
                    M = q(f.node, f.offset, c.offset, c.node)
                  } catch {}
                  ;(M &&
                    (!p && t.state.focused
                      ? (e.collapse(f.node, f.offset),
                        M.collapsed || (e.removeAllRanges(), e.addRange(M)))
                      : (e.removeAllRanges(), e.addRange(M)),
                    E && e.anchorNode == null ? e.addRange(E) : p && this.startGracePeriod()),
                    this.rememberSelection())
                }
              }),
              (Se.prototype.startGracePeriod = function () {
                var e = this
                ;(clearTimeout(this.gracePeriod),
                  (this.gracePeriod = setTimeout(function () {
                    ;((e.gracePeriod = !1),
                      e.selectionChanged() &&
                        e.cm.operation(function () {
                          return (e.cm.curOp.selectionChanged = !0)
                        }))
                  }, 20)))
              }),
              (Se.prototype.showMultipleSelections = function (e) {
                ;(se(this.cm.display.cursorDiv, e.cursors),
                  se(this.cm.display.selectionDiv, e.selection))
              }),
              (Se.prototype.rememberSelection = function () {
                var e = this.getSelection()
                ;((this.lastAnchorNode = e.anchorNode),
                  (this.lastAnchorOffset = e.anchorOffset),
                  (this.lastFocusNode = e.focusNode),
                  (this.lastFocusOffset = e.focusOffset))
              }),
              (Se.prototype.selectionInEditor = function () {
                var e = this.getSelection()
                if (!e.rangeCount) return !1
                var t = e.getRangeAt(0).commonAncestorContainer
                return te(this.div, t)
              }),
              (Se.prototype.focus = function () {
                this.cm.options.readOnly != 'nocursor' &&
                  ((!this.selectionInEditor() || be(me(this.div)) != this.div) &&
                    this.showSelection(this.prepareSelection(), !0),
                  this.div.focus())
              }),
              (Se.prototype.blur = function () {
                this.div.blur()
              }),
              (Se.prototype.getField = function () {
                return this.div
              }),
              (Se.prototype.supportsTouch = function () {
                return !0
              }),
              (Se.prototype.receivedFocus = function () {
                var e = this,
                  t = this
                this.selectionInEditor()
                  ? setTimeout(function () {
                      return e.pollSelection()
                    }, 20)
                  : st(this.cm, function () {
                      return (t.cm.curOp.selectionChanged = !0)
                    })
                function r() {
                  t.cm.state.focused &&
                    (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, r))
                }
                this.polling.set(this.cm.options.pollInterval, r)
              }),
              (Se.prototype.selectionChanged = function () {
                var e = this.getSelection()
                return (
                  e.anchorNode != this.lastAnchorNode ||
                  e.anchorOffset != this.lastAnchorOffset ||
                  e.focusNode != this.lastFocusNode ||
                  e.focusOffset != this.lastFocusOffset
                )
              }),
              (Se.prototype.pollSelection = function () {
                if (
                  !(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())
                ) {
                  var e = this.getSelection(),
                    t = this.cm
                  if (N && _ && this.cm.display.gutterSpecs.length && zc(e.anchorNode)) {
                    ;(this.cm.triggerOnKeyDown({
                      type: 'keydown',
                      keyCode: 8,
                      preventDefault: Math.abs,
                    }),
                      this.blur(),
                      this.focus())
                    return
                  }
                  if (!this.composing) {
                    this.rememberSelection()
                    var r = Mi(t, e.anchorNode, e.anchorOffset),
                      n = Mi(t, e.focusNode, e.focusOffset)
                    r &&
                      n &&
                      st(t, function () {
                        ;(Xe(t.doc, qt(r, n), tt),
                          (r.bad || n.bad) && (t.curOp.selectionChanged = !0))
                      })
                  }
                }
              }),
              (Se.prototype.pollContent = function () {
                this.readDOMTimeout != null &&
                  (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null))
                var e = this.cm,
                  t = e.display,
                  r = e.doc.sel.primary(),
                  n = r.from(),
                  i = r.to()
                if (
                  (n.ch == 0 &&
                    n.line > e.firstLine() &&
                    (n = B(n.line - 1, ne(e.doc, n.line - 1).length)),
                  i.ch == ne(e.doc, i.line).text.length &&
                    i.line < e.lastLine() &&
                    (i = B(i.line + 1, 0)),
                  n.line < t.viewFrom || i.line > t.viewTo - 1)
                )
                  return !1
                var l, o, a
                n.line == t.viewFrom || (l = on(e, n.line)) == 0
                  ? ((o = ke(t.view[0].line)), (a = t.view[0].node))
                  : ((o = ke(t.view[l].line)), (a = t.view[l - 1].node.nextSibling))
                var f = on(e, i.line),
                  c,
                  k
                if (
                  (f == t.view.length - 1
                    ? ((c = t.viewTo - 1), (k = t.lineDiv.lastChild))
                    : ((c = ke(t.view[f + 1].line) - 1), (k = t.view[f + 1].node.previousSibling)),
                  !a)
                )
                  return !1
                for (
                  var w = e.doc.splitLines(jc(e, a, k, o, c)),
                    E = en(e.doc, B(o, 0), B(c, ne(e.doc, c).text.length));
                  w.length > 1 && E.length > 1;
                )
                  if (ve(w) == ve(E)) (w.pop(), E.pop(), c--)
                  else if (w[0] == E[0]) (w.shift(), E.shift(), o++)
                  else break
                for (
                  var M = 0, H = 0, W = w[0], j = E[0], U = Math.min(W.length, j.length);
                  M < U && W.charCodeAt(M) == j.charCodeAt(M);
                )
                  ++M
                for (
                  var $ = ve(w),
                    K = ve(E),
                    Q = Math.min(
                      $.length - (w.length == 1 ? M : 0),
                      K.length - (E.length == 1 ? M : 0),
                    );
                  H < Q && $.charCodeAt($.length - H - 1) == K.charCodeAt(K.length - H - 1);
                )
                  ++H
                if (w.length == 1 && E.length == 1 && o == n.line)
                  for (
                    ;
                    M &&
                    M > n.ch &&
                    $.charCodeAt($.length - H - 1) == K.charCodeAt(K.length - H - 1);
                  )
                    (M--, H++)
                ;((w[w.length - 1] = $.slice(0, $.length - H).replace(/^\u200b+/, '')),
                  (w[0] = w[0].slice(M).replace(/\u200b+$/, '')))
                var ie = B(o, M),
                  re = B(c, E.length ? ve(E).length - H : 0)
                if (w.length > 1 || w[0] || fe(ie, re)) return (Fn(e.doc, w, ie, re, '+input'), !0)
              }),
              (Se.prototype.ensurePolled = function () {
                this.forceCompositionEnd()
              }),
              (Se.prototype.reset = function () {
                this.forceCompositionEnd()
              }),
              (Se.prototype.forceCompositionEnd = function () {
                this.composing &&
                  (clearTimeout(this.readDOMTimeout),
                  (this.composing = null),
                  this.updateFromDOM(),
                  this.div.blur(),
                  this.div.focus())
              }),
              (Se.prototype.readFromDOMSoon = function () {
                var e = this
                this.readDOMTimeout == null &&
                  (this.readDOMTimeout = setTimeout(function () {
                    if (((e.readDOMTimeout = null), e.composing))
                      if (e.composing.done) e.composing = null
                      else return
                    e.updateFromDOM()
                  }, 80))
              }),
              (Se.prototype.updateFromDOM = function () {
                var e = this
                ;(this.cm.isReadOnly() || !this.pollContent()) &&
                  st(this.cm, function () {
                    return rt(e.cm)
                  })
              }),
              (Se.prototype.setUneditable = function (e) {
                e.contentEditable = 'false'
              }),
              (Se.prototype.onKeyPress = function (e) {
                e.charCode == 0 ||
                  this.composing ||
                  (e.preventDefault(),
                  this.cm.isReadOnly() ||
                    je(this.cm, to)(
                      this.cm,
                      String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode),
                      0,
                    ))
              }),
              (Se.prototype.readOnlyChanged = function (e) {
                this.div.contentEditable = String(e != 'nocursor')
              }),
              (Se.prototype.onContextMenu = function () {}),
              (Se.prototype.resetPosition = function () {}),
              (Se.prototype.needsContentAttribute = !0))
            function Nu(e, t) {
              var r = wl(e, t.line)
              if (!r || r.hidden) return null
              var n = ne(e.doc, t.line),
                i = ss(r, n, t.line),
                l = Mt(n, e.doc.direction),
                o = 'left'
              if (l) {
                var a = ar(l, t.ch)
                o = a % 2 ? 'right' : 'left'
              }
              var f = hs(i.map, t.ch, o)
              return ((f.offset = f.collapse == 'right' ? f.end : f.start), f)
            }
            function zc(e) {
              for (var t = e; t; t = t.parentNode)
                if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0
              return !1
            }
            function Wn(e, t) {
              return (t && (e.bad = !0), e)
            }
            function jc(e, t, r, n, i) {
              var l = '',
                o = !1,
                a = e.doc.lineSeparator(),
                f = !1
              function c(M) {
                return function (H) {
                  return H.id == M
                }
              }
              function k() {
                o && ((l += a), f && (l += a), (o = f = !1))
              }
              function w(M) {
                M && (k(), (l += M))
              }
              function E(M) {
                if (M.nodeType == 1) {
                  var H = M.getAttribute('cm-text')
                  if (H) {
                    w(H)
                    return
                  }
                  var W = M.getAttribute('cm-marker'),
                    j
                  if (W) {
                    var U = e.findMarks(B(n, 0), B(i + 1, 0), c(+W))
                    U.length && (j = U[0].find(0)) && w(en(e.doc, j.from, j.to).join(a))
                    return
                  }
                  if (M.getAttribute('contenteditable') == 'false') return
                  var $ = /^(pre|div|p|li|table|br)$/i.test(M.nodeName)
                  if (!/^br$/i.test(M.nodeName) && M.textContent.length == 0) return
                  $ && k()
                  for (var K = 0; K < M.childNodes.length; K++) E(M.childNodes[K])
                  ;(/^(pre|p)$/i.test(M.nodeName) && (f = !0), $ && (o = !0))
                } else
                  M.nodeType == 3 && w(M.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '))
              }
              for (; E(t), t != r; ) ((t = t.nextSibling), (f = !1))
              return l
            }
            function Mi(e, t, r) {
              var n
              if (t == e.display.lineDiv) {
                if (((n = e.display.lineDiv.childNodes[r]), !n))
                  return Wn(e.clipPos(B(e.display.viewTo - 1)), !0)
                ;((t = null), (r = 0))
              } else
                for (n = t; ; n = n.parentNode) {
                  if (!n || n == e.display.lineDiv) return null
                  if (n.parentNode && n.parentNode == e.display.lineDiv) break
                }
              for (var i = 0; i < e.display.view.length; i++) {
                var l = e.display.view[i]
                if (l.node == n) return qc(l, t, r)
              }
            }
            function qc(e, t, r) {
              var n = e.text.firstChild,
                i = !1
              if (!t || !te(n, t)) return Wn(B(ke(e.line), 0), !0)
              if (t == n && ((i = !0), (t = n.childNodes[r]), (r = 0), !t)) {
                var l = e.rest ? ve(e.rest) : e.line
                return Wn(B(ke(l), l.text.length), i)
              }
              var o = t.nodeType == 3 ? t : null,
                a = t
              for (
                !o &&
                t.childNodes.length == 1 &&
                t.firstChild.nodeType == 3 &&
                ((o = t.firstChild), r && (r = o.nodeValue.length));
                a.parentNode != n;
              )
                a = a.parentNode
              var f = e.measure,
                c = f.maps
              function k(j, U, $) {
                for (var K = -1; K < (c ? c.length : 0); K++)
                  for (var Q = K < 0 ? f.map : c[K], ie = 0; ie < Q.length; ie += 3) {
                    var re = Q[ie + 2]
                    if (re == j || re == U) {
                      var pe = ke(K < 0 ? e.line : e.rest[K]),
                        we = Q[ie] + $
                      return (($ < 0 || re != j) && (we = Q[ie + ($ ? 1 : 0)]), B(pe, we))
                    }
                  }
              }
              var w = k(o, a, r)
              if (w) return Wn(w, i)
              for (
                var E = a.nextSibling, M = o ? o.nodeValue.length - r : 0;
                E;
                E = E.nextSibling
              ) {
                if (((w = k(E, E.firstChild, 0)), w)) return Wn(B(w.line, w.ch - M), i)
                M += E.textContent.length
              }
              for (var H = a.previousSibling, W = r; H; H = H.previousSibling) {
                if (((w = k(H, H.firstChild, -1)), w)) return Wn(B(w.line, w.ch + W), i)
                W += H.textContent.length
              }
            }
            var Oe = function (e) {
              ;((this.cm = e),
                (this.prevInput = ''),
                (this.pollingFast = !1),
                (this.polling = new Ze()),
                (this.hasSelection = !1),
                (this.composing = null),
                (this.resetting = !1))
            }
            ;((Oe.prototype.init = function (e) {
              var t = this,
                r = this,
                n = this.cm
              this.createField(e)
              var i = this.textarea
              ;(e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
                O && (i.style.width = '0px'),
                ae(i, 'input', function () {
                  ;(v && L >= 9 && t.hasSelection && (t.hasSelection = null), r.poll())
                }),
                ae(i, 'paste', function (o) {
                  Be(n, o) || Du(o, n) || ((n.state.pasteIncoming = +new Date()), r.fastPoll())
                }))
              function l(o) {
                if (!Be(n, o)) {
                  if (n.somethingSelected()) Di({ lineWise: !1, text: n.getSelections() })
                  else if (n.options.lineWiseCopyCut) {
                    var a = Ou(n)
                    ;(Di({ lineWise: !0, text: a.text }),
                      o.type == 'cut'
                        ? n.setSelections(a.ranges, null, tt)
                        : ((r.prevInput = ''),
                          (i.value = a.text.join(`
`)),
                          T(i)))
                  } else return
                  o.type == 'cut' && (n.state.cutIncoming = +new Date())
                }
              }
              ;(ae(i, 'cut', l),
                ae(i, 'copy', l),
                ae(e.scroller, 'paste', function (o) {
                  if (!(Et(e, o) || Be(n, o))) {
                    if (!i.dispatchEvent) {
                      ;((n.state.pasteIncoming = +new Date()), r.focus())
                      return
                    }
                    var a = new Event('paste')
                    ;((a.clipboardData = o.clipboardData), i.dispatchEvent(a))
                  }
                }),
                ae(e.lineSpace, 'selectstart', function (o) {
                  Et(e, o) || nt(o)
                }),
                ae(i, 'compositionstart', function () {
                  var o = n.getCursor('from')
                  ;(r.composing && r.composing.range.clear(),
                    (r.composing = {
                      start: o,
                      range: n.markText(o, n.getCursor('to'), {
                        className: 'CodeMirror-composing',
                      }),
                    }))
                }),
                ae(i, 'compositionend', function () {
                  r.composing && (r.poll(), r.composing.range.clear(), (r.composing = null))
                }))
            }),
              (Oe.prototype.createField = function (e) {
                ;((this.wrapper = Au()), (this.textarea = this.wrapper.firstChild))
                var t = this.cm.options
                no(this.textarea, t.spellcheck, t.autocorrect, t.autocapitalize)
              }),
              (Oe.prototype.screenReaderLabelChanged = function (e) {
                e
                  ? this.textarea.setAttribute('aria-label', e)
                  : this.textarea.removeAttribute('aria-label')
              }),
              (Oe.prototype.prepareSelection = function () {
                var e = this.cm,
                  t = e.display,
                  r = e.doc,
                  n = Ss(e)
                if (e.options.moveInputWithCursor) {
                  var i = yt(e, r.sel.primary().head, 'div'),
                    l = t.wrapper.getBoundingClientRect(),
                    o = t.lineDiv.getBoundingClientRect()
                  ;((n.teTop = Math.max(
                    0,
                    Math.min(t.wrapper.clientHeight - 10, i.top + o.top - l.top),
                  )),
                    (n.teLeft = Math.max(
                      0,
                      Math.min(t.wrapper.clientWidth - 10, i.left + o.left - l.left),
                    )))
                }
                return n
              }),
              (Oe.prototype.showSelection = function (e) {
                var t = this.cm,
                  r = t.display
                ;(se(r.cursorDiv, e.cursors),
                  se(r.selectionDiv, e.selection),
                  e.teTop != null &&
                    ((this.wrapper.style.top = e.teTop + 'px'),
                    (this.wrapper.style.left = e.teLeft + 'px')))
              }),
              (Oe.prototype.reset = function (e) {
                if (!(this.contextMenuPending || (this.composing && e))) {
                  var t = this.cm
                  if (((this.resetting = !0), t.somethingSelected())) {
                    this.prevInput = ''
                    var r = t.getSelection()
                    ;((this.textarea.value = r),
                      t.state.focused && T(this.textarea),
                      v && L >= 9 && (this.hasSelection = r))
                  } else
                    e ||
                      ((this.prevInput = this.textarea.value = ''),
                      v && L >= 9 && (this.hasSelection = null))
                  this.resetting = !1
                }
              }),
              (Oe.prototype.getField = function () {
                return this.textarea
              }),
              (Oe.prototype.supportsTouch = function () {
                return !1
              }),
              (Oe.prototype.focus = function () {
                if (
                  this.cm.options.readOnly != 'nocursor' &&
                  (!I || be(me(this.textarea)) != this.textarea)
                )
                  try {
                    this.textarea.focus()
                  } catch {}
              }),
              (Oe.prototype.blur = function () {
                this.textarea.blur()
              }),
              (Oe.prototype.resetPosition = function () {
                this.wrapper.style.top = this.wrapper.style.left = 0
              }),
              (Oe.prototype.receivedFocus = function () {
                this.slowPoll()
              }),
              (Oe.prototype.slowPoll = function () {
                var e = this
                this.pollingFast ||
                  this.polling.set(this.cm.options.pollInterval, function () {
                    ;(e.poll(), e.cm.state.focused && e.slowPoll())
                  })
              }),
              (Oe.prototype.fastPoll = function () {
                var e = !1,
                  t = this
                t.pollingFast = !0
                function r() {
                  var n = t.poll()
                  !n && !e ? ((e = !0), t.polling.set(60, r)) : ((t.pollingFast = !1), t.slowPoll())
                }
                t.polling.set(20, r)
              }),
              (Oe.prototype.poll = function () {
                var e = this,
                  t = this.cm,
                  r = this.textarea,
                  n = this.prevInput
                if (
                  this.contextMenuPending ||
                  this.resetting ||
                  !t.state.focused ||
                  (jf(r) && !n && !this.composing) ||
                  t.isReadOnly() ||
                  t.options.disableInput ||
                  t.state.keySeq
                )
                  return !1
                var i = r.value
                if (i == n && !t.somethingSelected()) return !1
                if ((v && L >= 9 && this.hasSelection === i) || (z && /[\uf700-\uf7ff]/.test(i)))
                  return (t.display.input.reset(), !1)
                if (t.doc.sel == t.display.selForContextMenu) {
                  var l = i.charCodeAt(0)
                  if ((l == 8203 && !n && (n = '​'), l == 8666))
                    return (this.reset(), this.cm.execCommand('undo'))
                }
                for (
                  var o = 0, a = Math.min(n.length, i.length);
                  o < a && n.charCodeAt(o) == i.charCodeAt(o);
                )
                  ++o
                return (
                  st(t, function () {
                    ;(to(t, i.slice(o), n.length - o, null, e.composing ? '*compose' : null),
                      i.length > 1e3 ||
                      i.indexOf(`
`) > -1
                        ? (r.value = e.prevInput = '')
                        : (e.prevInput = i),
                      e.composing &&
                        (e.composing.range.clear(),
                        (e.composing.range = t.markText(e.composing.start, t.getCursor('to'), {
                          className: 'CodeMirror-composing',
                        }))))
                  }),
                  !0
                )
              }),
              (Oe.prototype.ensurePolled = function () {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
              }),
              (Oe.prototype.onKeyPress = function () {
                ;(v && L >= 9 && (this.hasSelection = null), this.fastPoll())
              }),
              (Oe.prototype.onContextMenu = function (e) {
                var t = this,
                  r = t.cm,
                  n = r.display,
                  i = t.textarea
                t.contextMenuPending && t.contextMenuPending()
                var l = ln(r, e),
                  o = n.scroller.scrollTop
                if (!l || F) return
                var a = r.options.resetSelectionOnContextMenu
                a && r.doc.sel.contains(l) == -1 && je(r, Xe)(r.doc, qt(l), tt)
                var f = i.style.cssText,
                  c = t.wrapper.style.cssText,
                  k = t.wrapper.offsetParent.getBoundingClientRect()
                ;((t.wrapper.style.cssText = 'position: static'),
                  (i.style.cssText =
                    `position: absolute; width: 30px; height: 30px;
      top: ` +
                    (e.clientY - k.top - 5) +
                    'px; left: ' +
                    (e.clientX - k.left - 5) +
                    `px;
      z-index: 1000; background: ` +
                    (v ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                    `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`))
                var w
                ;(g && (w = i.ownerDocument.defaultView.scrollY),
                  n.input.focus(),
                  g && i.ownerDocument.defaultView.scrollTo(null, w),
                  n.input.reset(),
                  r.somethingSelected() || (i.value = t.prevInput = ' '),
                  (t.contextMenuPending = M),
                  (n.selForContextMenu = r.doc.sel),
                  clearTimeout(n.detectingSelectAll))
                function E() {
                  if (i.selectionStart != null) {
                    var W = r.somethingSelected(),
                      j = '​' + (W ? i.value : '')
                    ;((i.value = '⇚'),
                      (i.value = j),
                      (t.prevInput = W ? '' : '​'),
                      (i.selectionStart = 1),
                      (i.selectionEnd = j.length),
                      (n.selForContextMenu = r.doc.sel))
                  }
                }
                function M() {
                  if (
                    t.contextMenuPending == M &&
                    ((t.contextMenuPending = !1),
                    (t.wrapper.style.cssText = c),
                    (i.style.cssText = f),
                    v && L < 9 && n.scrollbars.setScrollTop((n.scroller.scrollTop = o)),
                    i.selectionStart != null)
                  ) {
                    ;(!v || (v && L < 9)) && E()
                    var W = 0,
                      j = function () {
                        n.selForContextMenu == r.doc.sel &&
                        i.selectionStart == 0 &&
                        i.selectionEnd > 0 &&
                        t.prevInput == '​'
                          ? je(r, Js)(r)
                          : W++ < 10
                            ? (n.detectingSelectAll = setTimeout(j, 500))
                            : ((n.selForContextMenu = null), n.input.reset())
                      }
                    n.detectingSelectAll = setTimeout(j, 200)
                  }
                }
                if ((v && L >= 9 && E(), xe)) {
                  sr(e)
                  var H = function () {
                    ;(ht(window, 'mouseup', H), setTimeout(M, 20))
                  }
                  ae(window, 'mouseup', H)
                } else setTimeout(M, 50)
              }),
              (Oe.prototype.readOnlyChanged = function (e) {
                ;(e || this.reset(),
                  (this.textarea.disabled = e == 'nocursor'),
                  (this.textarea.readOnly = !!e))
              }),
              (Oe.prototype.setUneditable = function () {}),
              (Oe.prototype.needsContentAttribute = !1))
            function Gc(e, t) {
              if (
                ((t = t ? ft(t) : {}),
                (t.value = e.value),
                !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
                !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
                t.autofocus == null)
              ) {
                var r = be(me(e))
                t.autofocus = r == e || (e.getAttribute('autofocus') != null && r == document.body)
              }
              function n() {
                e.value = a.getValue()
              }
              var i
              if (e.form && (ae(e.form, 'submit', n), !t.leaveSubmitMethodAlone)) {
                var l = e.form
                i = l.submit
                try {
                  var o = (l.submit = function () {
                    ;(n(), (l.submit = i), l.submit(), (l.submit = o))
                  })
                } catch {}
              }
              ;((t.finishInit = function (f) {
                ;((f.save = n),
                  (f.getTextArea = function () {
                    return e
                  }),
                  (f.toTextArea = function () {
                    ;((f.toTextArea = isNaN),
                      n(),
                      e.parentNode.removeChild(f.getWrapperElement()),
                      (e.style.display = ''),
                      e.form &&
                        (ht(e.form, 'submit', n),
                        !t.leaveSubmitMethodAlone &&
                          typeof e.form.submit == 'function' &&
                          (e.form.submit = i)))
                  }))
              }),
                (e.style.display = 'none'))
              var a = Te(function (f) {
                return e.parentNode.insertBefore(f, e.nextSibling)
              }, t)
              return a
            }
            function Uc(e) {
              ;((e.off = ht),
                (e.on = ae),
                (e.wheelEventPixels = Jh),
                (e.Doc = it),
                (e.splitLines = il),
                (e.countColumn = Re),
                (e.findColumn = St),
                (e.isWordChar = Qi),
                (e.Pass = Pe),
                (e.signal = Ee),
                (e.Line = wn),
                (e.changeEnd = Gt),
                (e.scrollbarModel = Ds),
                (e.Pos = B),
                (e.cmpPos = fe),
                (e.modes = ol),
                (e.mimeModes = kn),
                (e.resolveMode = Jr),
                (e.getMode = al),
                (e.modeExtensions = Sn),
                (e.extendMode = Xf),
                (e.copyState = Vt),
                (e.startState = Fa),
                (e.innerMode = sl),
                (e.commands = Er),
                (e.keyMap = Ft),
                (e.keyName = pu),
                (e.isModifierKey = cu),
                (e.lookupKey = Rn),
                (e.normalizeKeyMap = xc),
                (e.StringStream = Ne),
                (e.SharedTextMarker = Mr),
                (e.TextMarker = Kt),
                (e.LineWidget = Dr),
                (e.e_preventDefault = nt),
                (e.e_stopPropagation = Ea),
                (e.e_stop = sr),
                (e.addClass = Le),
                (e.contains = te),
                (e.rmClass = oe),
                (e.keyNames = Xt))
            }
            ;(Rc(Te), Bc(Te))
            var Kc = 'iter insert remove copy getEditor constructor'.split(' ')
            for (var Oi in it.prototype)
              it.prototype.hasOwnProperty(Oi) &&
                Ce(Kc, Oi) < 0 &&
                (Te.prototype[Oi] = (function (e) {
                  return function () {
                    return e.apply(this.doc, arguments)
                  }
                })(it.prototype[Oi]))
            return (
              xn(it),
              (Te.inputStyles = { textarea: Oe, contenteditable: Se }),
              (Te.defineMode = function (e) {
                ;(!Te.defaults.mode && e != 'null' && (Te.defaults.mode = e),
                  Uf.apply(this, arguments))
              }),
              (Te.defineMIME = Kf),
              Te.defineMode('null', function () {
                return {
                  token: function (e) {
                    return e.skipToEnd()
                  },
                }
              }),
              Te.defineMIME('text/plain', 'null'),
              (Te.defineExtension = function (e, t) {
                Te.prototype[e] = t
              }),
              (Te.defineDocExtension = function (e, t) {
                it.prototype[e] = t
              }),
              (Te.fromTextArea = Gc),
              Uc(Te),
              (Te.version = '5.65.20'),
              Te
            )
          })
        })(Ni)),
      Ni.exports
    )
  }
  ;(function (d, s) {
    ;(function (u) {
      u(Zt())
    })(function (u) {
      function h(b, v, L, g) {
        if (L && L.call) {
          var S = L
          L = null
        } else var S = x(b, L, 'rangeFinder')
        typeof v == 'number' && (v = u.Pos(v, 0))
        var _ = x(b, L, 'minFoldSize')
        function R(C) {
          var O = S(b, v)
          if (!O || O.to.line - O.from.line < _) return null
          if (g === 'fold') return O
          for (var N = b.findMarksAt(O.from), I = 0; I < N.length; ++I)
            if (N[I].__isFold) {
              if (!C) return null
              ;((O.cleared = !0), N[I].clear())
            }
          return O
        }
        var F = R(!0)
        if (x(b, L, 'scanUp'))
          for (; !F && v.line > b.firstLine(); ) ((v = u.Pos(v.line - 1, 0)), (F = R(!1)))
        if (!(!F || F.cleared || g === 'unfold')) {
          var P = p(b, L, F)
          u.on(P, 'mousedown', function (C) {
            ;(D.clear(), u.e_preventDefault(C))
          })
          var D = b.markText(F.from, F.to, {
            replacedWith: P,
            clearOnEnter: x(b, L, 'clearOnEnter'),
            __isFold: !0,
          })
          ;(D.on('clear', function (C, O) {
            u.signal(b, 'unfold', b, C, O)
          }),
            u.signal(b, 'fold', b, F.from, F.to))
        }
      }
      function p(b, v, L) {
        var g = x(b, v, 'widget')
        if ((typeof g == 'function' && (g = g(L.from, L.to)), typeof g == 'string')) {
          var S = document.createTextNode(g)
          ;((g = document.createElement('span')),
            g.appendChild(S),
            (g.className = 'CodeMirror-foldmarker'))
        } else g && (g = g.cloneNode(!0))
        return g
      }
      ;((u.newFoldFunction = function (b, v) {
        return function (L, g) {
          h(L, g, { rangeFinder: b, widget: v })
        }
      }),
        u.defineExtension('foldCode', function (b, v, L) {
          h(this, b, v, L)
        }),
        u.defineExtension('isFolded', function (b) {
          for (var v = this.findMarksAt(b), L = 0; L < v.length; ++L) if (v[L].__isFold) return !0
        }),
        (u.commands.toggleFold = function (b) {
          b.foldCode(b.getCursor())
        }),
        (u.commands.fold = function (b) {
          b.foldCode(b.getCursor(), null, 'fold')
        }),
        (u.commands.unfold = function (b) {
          b.foldCode(b.getCursor(), { scanUp: !1 }, 'unfold')
        }),
        (u.commands.foldAll = function (b) {
          b.operation(function () {
            for (var v = b.firstLine(), L = b.lastLine(); v <= L; v++)
              b.foldCode(u.Pos(v, 0), { scanUp: !1 }, 'fold')
          })
        }),
        (u.commands.unfoldAll = function (b) {
          b.operation(function () {
            for (var v = b.firstLine(), L = b.lastLine(); v <= L; v++)
              b.foldCode(u.Pos(v, 0), { scanUp: !1 }, 'unfold')
          })
        }),
        u.registerHelper('fold', 'combine', function () {
          var b = Array.prototype.slice.call(arguments, 0)
          return function (v, L) {
            for (var g = 0; g < b.length; ++g) {
              var S = b[g](v, L)
              if (S) return S
            }
          }
        }),
        u.registerHelper('fold', 'auto', function (b, v) {
          for (var L = b.getHelpers(v, 'fold'), g = 0; g < L.length; g++) {
            var S = L[g](b, v)
            if (S) return S
          }
        }))
      var m = {
        rangeFinder: u.fold.auto,
        widget: '↔',
        minFoldSize: 0,
        scanUp: !1,
        clearOnEnter: !0,
      }
      u.defineOption('foldOptions', null)
      function x(b, v, L) {
        if (v && v[L] !== void 0) return v[L]
        var g = b.options.foldOptions
        return g && g[L] !== void 0 ? g[L] : m[L]
      }
      u.defineExtension('foldOption', function (b, v) {
        return x(this, b, v)
      })
    })
  })()
  var Wu = Iu.exports
  ;((function (d, s) {
    ;(function (u) {
      u(Zt(), Wu)
    })(function (u) {
      u.defineOption('foldGutter', !1, function (D, C, O) {
        ;(O &&
          O != u.Init &&
          (D.clearGutter(D.state.foldGutter.options.gutter),
          (D.state.foldGutter = null),
          D.off('gutterClick', S),
          D.off('changes', R),
          D.off('viewportChange', F),
          D.off('fold', P),
          D.off('unfold', P),
          D.off('swapDoc', R),
          D.off('optionChange', _)),
          C &&
            ((D.state.foldGutter = new p(m(C))),
            g(D),
            D.on('gutterClick', S),
            D.on('changes', R),
            D.on('viewportChange', F),
            D.on('fold', P),
            D.on('unfold', P),
            D.on('swapDoc', R),
            D.on('optionChange', _)))
      })
      var h = u.Pos
      function p(D) {
        ;((this.options = D), (this.from = this.to = 0))
      }
      function m(D) {
        return (
          D === !0 && (D = {}),
          D.gutter == null && (D.gutter = 'CodeMirror-foldgutter'),
          D.indicatorOpen == null && (D.indicatorOpen = 'CodeMirror-foldgutter-open'),
          D.indicatorFolded == null && (D.indicatorFolded = 'CodeMirror-foldgutter-folded'),
          D
        )
      }
      function x(D, C) {
        for (var O = D.findMarks(h(C, 0), h(C + 1, 0)), N = 0; N < O.length; ++N)
          if (O[N].__isFold) {
            var I = O[N].find(-1)
            if (I && I.line === C) return O[N]
          }
      }
      function b(D) {
        if (typeof D == 'string') {
          var C = document.createElement('div')
          return ((C.className = D + ' CodeMirror-guttermarker-subtle'), C)
        } else return D.cloneNode(!0)
      }
      function v(D, C, O) {
        var N = D.state.foldGutter.options,
          I = C - 1,
          z = D.foldOption(N, 'minFoldSize'),
          ce = D.foldOption(N, 'rangeFinder'),
          ee = typeof N.indicatorFolded == 'string' && L(N.indicatorFolded),
          Y = typeof N.indicatorOpen == 'string' && L(N.indicatorOpen)
        D.eachLine(C, O, function (ue) {
          ++I
          var xe = null,
            X = ue.gutterMarkers
          if ((X && (X = X[N.gutter]), x(D, I))) {
            if (ee && X && ee.test(X.className)) return
            xe = b(N.indicatorFolded)
          } else {
            var oe = h(I, 0),
              V = ce && ce(D, oe)
            if (V && V.to.line - V.from.line >= z) {
              if (Y && X && Y.test(X.className)) return
              xe = b(N.indicatorOpen)
            }
          }
          ;(!xe && !X) || D.setGutterMarker(ue, N.gutter, xe)
        })
      }
      function L(D) {
        return new RegExp('(^|\\s)' + D + '(?:$|\\s)\\s*')
      }
      function g(D) {
        var C = D.getViewport(),
          O = D.state.foldGutter
        O &&
          (D.operation(function () {
            v(D, C.from, C.to)
          }),
          (O.from = C.from),
          (O.to = C.to))
      }
      function S(D, C, O) {
        var N = D.state.foldGutter
        if (N) {
          var I = N.options
          if (O == I.gutter) {
            var z = x(D, C)
            z ? z.clear() : D.foldCode(h(C, 0), I)
          }
        }
      }
      function _(D, C) {
        C == 'mode' && R(D)
      }
      function R(D) {
        var C = D.state.foldGutter
        if (C) {
          var O = C.options
          ;((C.from = C.to = 0),
            clearTimeout(C.changeUpdate),
            (C.changeUpdate = setTimeout(function () {
              g(D)
            }, O.foldOnChangeTimeSpan || 600)))
        }
      }
      function F(D) {
        var C = D.state.foldGutter
        if (C) {
          var O = C.options
          ;(clearTimeout(C.changeUpdate),
            (C.changeUpdate = setTimeout(function () {
              var N = D.getViewport()
              C.from == C.to || N.from - C.to > 20 || C.from - N.to > 20
                ? g(D)
                : D.operation(function () {
                    ;(N.from < C.from && (v(D, N.from, C.from), (C.from = N.from)),
                      N.to > C.to && (v(D, C.to, N.to), (C.to = N.to)))
                  })
            }, O.updateViewportTimeSpan || 400)))
        }
      }
      function P(D, C) {
        var O = D.state.foldGutter
        if (O) {
          var N = C.line
          N >= O.from && N < O.to && v(D, N, N + 1)
        }
      }
    })
  })(),
    (function (d, s) {
      ;(function (u) {
        u(Zt())
      })(function (u) {
        u.registerHelper('fold', 'markdown', function (h, p) {
          var m = 100
          function x(F) {
            var P = h.getTokenTypeAt(u.Pos(F, 0))
            return P && /\bheader\b/.test(P)
          }
          function b(F, P, D) {
            var C = P && P.match(/^#+/)
            return C && x(F)
              ? C[0].length
              : ((C = D && D.match(/^[=\-]+\s*$/)), C && x(F + 1) ? (D[0] == '=' ? 1 : 2) : m)
          }
          var v = h.getLine(p.line),
            L = h.getLine(p.line + 1),
            g = b(p.line, v, L)
          if (g !== m) {
            for (
              var S = h.lastLine(), _ = p.line, R = h.getLine(_ + 2);
              _ < S && !(b(_ + 1, L, R) <= g);
            )
              (++_, (L = R), (R = h.getLine(_ + 2)))
            return { from: u.Pos(p.line, v.length), to: u.Pos(_, h.getLine(_).length) }
          }
        })
      })
    })(),
    (function (d, s) {
      ;(function (u) {
        u(Zt())
      })(function (u) {
        var h = { pairs: `()[]{}''""`, closeBefore: `)]}'":;>`, triples: '', explode: '[]{}' },
          p = u.Pos
        u.defineOption('autoCloseBrackets', !1, function (C, O, N) {
          ;(N && N != u.Init && (C.removeKeyMap(x), (C.state.closeBrackets = null)),
            O && (b(m(O, 'pairs')), (C.state.closeBrackets = O), C.addKeyMap(x)))
        })
        function m(C, O) {
          return O == 'pairs' && typeof C == 'string'
            ? C
            : typeof C == 'object' && C[O] != null
              ? C[O]
              : h[O]
        }
        var x = { Backspace: g, Enter: S }
        function b(C) {
          for (var O = 0; O < C.length; O++) {
            var N = C.charAt(O),
              I = "'" + N + "'"
            x[I] || (x[I] = v(N))
          }
        }
        b(h.pairs + '`')
        function v(C) {
          return function (O) {
            return F(O, C)
          }
        }
        function L(C) {
          var O = C.state.closeBrackets
          if (!O || O.override) return O
          var N = C.getModeAt(C.getCursor())
          return N.closeBrackets || O
        }
        function g(C) {
          var O = L(C)
          if (!O || C.getOption('disableInput')) return u.Pass
          for (var N = m(O, 'pairs'), I = C.listSelections(), z = 0; z < I.length; z++) {
            if (!I[z].empty()) return u.Pass
            var ce = P(C, I[z].head)
            if (!ce || N.indexOf(ce) % 2 != 0) return u.Pass
          }
          for (var z = I.length - 1; z >= 0; z--) {
            var ee = I[z].head
            C.replaceRange('', p(ee.line, ee.ch - 1), p(ee.line, ee.ch + 1), '+delete')
          }
        }
        function S(C) {
          var O = L(C),
            N = O && m(O, 'explode')
          if (!N || C.getOption('disableInput')) return u.Pass
          for (var I = C.listSelections(), z = 0; z < I.length; z++) {
            if (!I[z].empty()) return u.Pass
            var ce = P(C, I[z].head)
            if (!ce || N.indexOf(ce) % 2 != 0) return u.Pass
          }
          C.operation(function () {
            var ee =
              C.lineSeparator() ||
              `
`
            ;(C.replaceSelection(ee + ee, null), _(C, -1), (I = C.listSelections()))
            for (var Y = 0; Y < I.length; Y++) {
              var ue = I[Y].head.line
              ;(C.indentLine(ue, null, !0), C.indentLine(ue + 1, null, !0))
            }
          })
        }
        function _(C, O) {
          for (var N = [], I = C.listSelections(), z = 0, ce = 0; ce < I.length; ce++) {
            var ee = I[ce]
            ee.head == C.getCursor() && (z = ce)
            var Y =
              ee.head.ch || O > 0
                ? { line: ee.head.line, ch: ee.head.ch + O }
                : { line: ee.head.line - 1 }
            N.push({ anchor: Y, head: Y })
          }
          C.setSelections(N, z)
        }
        function R(C) {
          var O = u.cmpPos(C.anchor, C.head) > 0
          return {
            anchor: new p(C.anchor.line, C.anchor.ch + (O ? -1 : 1)),
            head: new p(C.head.line, C.head.ch + (O ? 1 : -1)),
          }
        }
        function F(C, O) {
          var N = L(C)
          if (!N || C.getOption('disableInput')) return u.Pass
          var I = m(N, 'pairs'),
            z = I.indexOf(O)
          if (z == -1) return u.Pass
          for (
            var ce = m(N, 'closeBefore'),
              ee = m(N, 'triples'),
              Y = I.charAt(z + 1) == O,
              ue = C.listSelections(),
              xe = z % 2 == 0,
              X,
              oe = 0;
            oe < ue.length;
            oe++
          ) {
            var V = ue[oe],
              se = V.head,
              A,
              G = C.getRange(se, p(se.line, se.ch + 1))
            if (xe && !V.empty()) A = 'surround'
            else if ((Y || !xe) && G == O)
              Y && D(C, se)
                ? (A = 'both')
                : ee.indexOf(O) >= 0 && C.getRange(se, p(se.line, se.ch + 3)) == O + O + O
                  ? (A = 'skipThree')
                  : (A = 'skip')
            else if (
              Y &&
              se.ch > 1 &&
              ee.indexOf(O) >= 0 &&
              C.getRange(p(se.line, se.ch - 2), se) == O + O
            ) {
              if (se.ch > 2 && /\bstring/.test(C.getTokenTypeAt(p(se.line, se.ch - 2))))
                return u.Pass
              A = 'addFour'
            } else if (Y) {
              var q = se.ch == 0 ? ' ' : C.getRange(p(se.line, se.ch - 1), se)
              if (!u.isWordChar(G) && q != O && !u.isWordChar(q)) A = 'both'
              else return u.Pass
            } else if (xe && (G.length === 0 || /\s/.test(G) || ce.indexOf(G) > -1)) A = 'both'
            else return u.Pass
            if (!X) X = A
            else if (X != A) return u.Pass
          }
          var te = z % 2 ? I.charAt(z - 1) : O,
            be = z % 2 ? O : I.charAt(z + 1)
          C.operation(function () {
            if (X == 'skip') _(C, 1)
            else if (X == 'skipThree') _(C, 3)
            else if (X == 'surround') {
              for (var Le = C.getSelections(), $e = 0; $e < Le.length; $e++)
                Le[$e] = te + Le[$e] + be
              ;(C.replaceSelections(Le, 'around'), (Le = C.listSelections().slice()))
              for (var $e = 0; $e < Le.length; $e++) Le[$e] = R(Le[$e])
              C.setSelections(Le)
            } else
              X == 'both'
                ? (C.replaceSelection(te + be, null), C.triggerElectric(te + be), _(C, -1))
                : X == 'addFour' && (C.replaceSelection(te + te + te + te, 'before'), _(C, 1))
          })
        }
        function P(C, O) {
          var N = C.getRange(p(O.line, O.ch - 1), p(O.line, O.ch + 1))
          return N.length == 2 ? N : null
        }
        function D(C, O) {
          var N = C.getTokenAt(p(O.line, O.ch + 1))
          return (
            /\bstring/.test(N.type) &&
            N.start == O.ch &&
            (O.ch == 0 || !/\bstring/.test(C.getTokenTypeAt(O)))
          )
        }
      })
    })())
  const Pr = '__hypermd__'
  var We = {
      lineNumbers: !0,
      lineWrapping: !0,
      theme: 'hypermd-light',
      mode: 'text/x-hypermd',
      tabSize: 4,
      autoCloseBrackets: !0,
      foldGutter: !0,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'HyperMD-goback'],
    },
    gn = { theme: 'default' }
  function Bu(d, s) {
    var u = { ...We, ...s },
      h = ge.fromTextArea(d, u)
    return ((h[Pr] = !0), h)
  }
  function zu(d, s) {
    if (d[Pr]) {
      typeof s == 'string' && (s = { theme: s })
      var u = { ...gn, ...s }
      for (const h in u) d.setOption(h, u[h])
    }
  }
  function ju(d, s) {
    typeof s == 'string' && (s = { theme: s })
    var u = {}
    if (Pr in d) {
      for (const h in gn) u[h] = We[h]
      Object.assign(u, s)
    } else (Object.assign(u, We, s), (d[Pr] = !0))
    for (const h in u) d.setOption(h, u[h])
  }
  function fo(d, s) {
    if (s >= d.display.viewTo || ((s -= d.display.viewFrom), s < 0)) return null
    let u = d.display.view
    for (let h = 0; h < u.length; h++) if (((s -= u[h].size), s < 0)) return h
  }
  function ho(d, s) {
    if (s >= d.display.viewFrom && s < d.display.viewTo) return d.display.view[fo(d, s)]
    let u = d.display.externalMeasured
    if (u && s >= u.lineN && s < u.lineN + u.size) return u
  }
  function co(d, s, u) {
    if (d.line == s) return { map: d.measure.map, cache: d.measure.cache, before: !1 }
    for (let h = 0; h < d.rest.length; h++)
      if (d.rest[h] == s) return { map: d.measure.maps[h], cache: d.measure.caches[h], before: !1 }
    for (let h = 0; h < d.rest.length; h++)
      if (d.rest[h].lineNo() > u)
        return { map: d.measure.maps[h], cache: d.measure.caches[h], before: !0 }
  }
  const qu = Object.freeze(
    Object.defineProperty(
      { __proto__: null, findViewForLine: ho, findViewIndex: fo, mapFromLineView: co },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
  class jn {
    constructor(s) {
      Z(this, 'line')
      Z(this, 'lineNo')
      Z(this, 'lineTokens')
      Z(this, 'i_token')
      this.cm = s
    }
    findNext(s, u, h) {
      var p = this.lineNo,
        m = this.lineTokens,
        x = null,
        b = this.i_token + 1,
        v = !1
      if ((u === !0 ? (v = !0) : typeof u == 'number' && (b = u), h)) {
        if (h.line > p) b = m.length
        else if (!(h.line < p)) for (; b < m.length && !(m[b].start >= h.ch); b++);
      }
      for (; b < m.length; b++) {
        let L = m[b]
        if (typeof s == 'function' ? s(L, m, b) : s.test(L.type)) {
          x = L
          break
        }
      }
      if (!x && v) {
        const L = this.cm,
          g = Math.max(h ? h.line : 0, p + 1)
        L.eachLine(g, L.lastLine() + 1, (S) => {
          if (((p = S.lineNo()), (m = L.getLineTokens(p)), (b = 0), h && p === h.line))
            for (; b < m.length && !(m[b].start >= h.ch); b++);
          for (; b < m.length; b++) {
            let _ = m[b]
            if (typeof s == 'function' ? s(_, m, b) : s.test(_.type)) return ((x = _), !0)
          }
        })
      }
      return x ? { lineNo: p, token: x, i_token: b } : null
    }
    findPrev(s, u, h) {
      var p = this.lineNo,
        m = this.lineTokens,
        x = null,
        b = this.i_token - 1,
        v = !1
      if ((u === !0 ? (v = !0) : typeof u == 'number' && (b = u), h)) {
        if (h.line < p) b = -1
        else if (!(h.line > p)) for (; b < m.length && !(m[b].start >= h.ch); b++);
      }
      for (b >= m.length && (b = m.length - 1); b >= 0; b--) {
        var L = m[b]
        if (typeof s == 'function' ? s(L, m, b) : s.test(L.type)) {
          x = L
          break
        }
      }
      if (!x && v) {
        const g = this.cm,
          S = Math.min(h ? h.line : g.lastLine(), p - 1),
          _ = g.firstLine()
        for (p = S + 1; !x && _ <= --p; ) {
          if ((g.getLineHandle(p), (m = g.getLineTokens(p)), (b = 0), h && p === h.line))
            for (; b < m.length && !(m[b].start >= h.ch); b++);
          for (b >= m.length && (b = m.length - 1); b >= 0; b--) {
            var L = m[b]
            if (typeof s == 'function' ? s(L, m, b) : s.test(L.type)) {
              x = L
              break
            }
          }
        }
      }
      return x ? { lineNo: p, token: x, i_token: b } : null
    }
    expandRange(s, u) {
      const h = this.cm
      var p
      typeof s == 'function'
        ? (p = s)
        : (typeof s == 'string' && (s = new RegExp('(?:^|\\s)' + s + '(?:\\s|$)')),
          (p = (g) => (g ? s.test(g.type || '') : !1)))
      for (
        var m = {
            lineNo: this.lineNo,
            i_token: this.i_token,
            token: this.lineTokens[this.i_token],
          },
          x = Object.assign({}, m),
          b = !1,
          v = this.lineTokens,
          L = this.i_token;
        !b;
      ) {
        for (L >= v.length && (L = v.length - 1); L >= 0; L--) {
          let g = v[L]
          if (p(g, v, L)) ((m.i_token = L), (m.token = g))
          else {
            b = !0
            break
          }
        }
        if (b || !(u && m.lineNo > h.firstLine())) break
        ;((v = h.getLineTokens(--m.lineNo)), (L = v.length - 1))
      }
      for (var b = !1, v = this.lineTokens, L = this.i_token; !b; ) {
        for (L < 0 && (L = 0); L < v.length; L++) {
          let g = v[L]
          if (p(g, v, L)) ((x.i_token = L), (x.token = g))
          else {
            b = !0
            break
          }
        }
        if (b || !(u && x.lineNo < h.lastLine())) break
        ;((v = h.getLineTokens(++x.lineNo)), (L = 0))
      }
      return { from: m, to: x }
    }
    setPos(s, u, h) {
      u === void 0
        ? ((u = s), (s = this.line))
        : typeof s == 'number' && (s = this.cm.getLineHandle(s))
      const p = s === this.line
      var m = 0
      h || !p
        ? ((this.line = s),
          (this.lineNo = s.lineNo()),
          (this.lineTokens = this.cm.getLineTokens(this.lineNo)))
        : ((m = this.i_token), this.lineTokens[m].start > u && (m = 0))
      for (var x = this.lineTokens; m < x.length && !(x[m].end > u); m++);
      this.i_token = m
    }
    getToken(s) {
      return (typeof s != 'number' && (s = this.i_token), this.lineTokens[s])
    }
    getTokenType(s) {
      typeof s != 'number' && (s = this.i_token)
      var u = this.lineTokens[s]
      return (u && u.type) || ''
    }
  }
  function Gu(d) {
    var s = new Array(d.text.length),
      u = d.styles,
      h = 0
    if (u)
      for (let p = 1; p < u.length; p += 2) {
        let m = u[p],
          x = u[p + 1]
        for (; h < m; ) s[h++] = x
      }
    else {
      let m = (d.parent.cm || d.parent.parent.cm || d.parent.parent.parent.cm).getLineTokens(
        d.lineNo(),
      )
      for (let x = 0; x < m.length; x++) {
        let b = m[x].end,
          v = m[x].type
        for (; h < b; ) s[h++] = v
      }
    }
    return s
  }
  function Rt(d, s, u) {
    var h = s.line,
      p = { line: h, ch: 0 },
      m = { line: h, ch: s.ch },
      x = typeof u == 'function' ? u : !1,
      b = !x && new RegExp('(?:^|\\s)' + u + '(?:\\s|$)'),
      v = d.getLineTokens(h),
      L
    for (L = 0; L < v.length && !(v[L].end >= s.ch); L++);
    if (L === v.length) return null
    for (var g = L; g < v.length; g++) {
      var S = v[g]
      if (x ? x(S) : b.test(S.type)) m.ch = S.end
      else break
    }
    for (var g = L; g >= 0; g--) {
      var S = v[g]
      if (!(x ? x(S) : b.test(S.type))) {
        p.ch = S.end
        break
      }
    }
    return { from: p, to: m }
  }
  function Fi(d) {
    return (
      'anchor' in d && (d = [d.head, d.anchor]),
      Ae.cmpPos(d[0], d[1]) > 0 ? [d[1], d[0]] : [d[0], d[1]]
    )
  }
  function Ir(d, s) {
    const [u, h] = d,
      [p, m] = s
    return !(Ae.cmpPos(h, p) < 0 || Ae.cmpPos(u, m) > 0)
  }
  var po = { exports: {} },
    go
  function Uu() {
    return (
      go ||
        ((go = 1),
        (function (d, s) {
          ;(function (u) {
            u(Zt())
          })(function (u) {
            var h = {
                autoSelfClosers: {
                  area: !0,
                  base: !0,
                  br: !0,
                  col: !0,
                  command: !0,
                  embed: !0,
                  frame: !0,
                  hr: !0,
                  img: !0,
                  input: !0,
                  keygen: !0,
                  link: !0,
                  meta: !0,
                  param: !0,
                  source: !0,
                  track: !0,
                  wbr: !0,
                  menuitem: !0,
                },
                implicitlyClosed: {
                  dd: !0,
                  li: !0,
                  optgroup: !0,
                  option: !0,
                  p: !0,
                  rp: !0,
                  rt: !0,
                  tbody: !0,
                  td: !0,
                  tfoot: !0,
                  th: !0,
                  tr: !0,
                },
                contextGrabbers: {
                  dd: { dd: !0, dt: !0 },
                  dt: { dd: !0, dt: !0 },
                  li: { li: !0 },
                  option: { option: !0, optgroup: !0 },
                  optgroup: { optgroup: !0 },
                  p: {
                    address: !0,
                    article: !0,
                    aside: !0,
                    blockquote: !0,
                    dir: !0,
                    div: !0,
                    dl: !0,
                    fieldset: !0,
                    footer: !0,
                    form: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0,
                    header: !0,
                    hgroup: !0,
                    hr: !0,
                    menu: !0,
                    nav: !0,
                    ol: !0,
                    p: !0,
                    pre: !0,
                    section: !0,
                    table: !0,
                    ul: !0,
                  },
                  rp: { rp: !0, rt: !0 },
                  rt: { rp: !0, rt: !0 },
                  tbody: { tbody: !0, tfoot: !0 },
                  td: { td: !0, th: !0 },
                  tfoot: { tbody: !0 },
                  th: { td: !0, th: !0 },
                  thead: { tbody: !0, tfoot: !0 },
                  tr: { tr: !0 },
                },
                doNotIndent: { pre: !0 },
                allowUnquoted: !0,
                allowMissing: !0,
                caseFold: !0,
              },
              p = {
                autoSelfClosers: {},
                implicitlyClosed: {},
                contextGrabbers: {},
                doNotIndent: {},
                allowUnquoted: !1,
                allowMissing: !1,
                allowMissingTagName: !1,
                caseFold: !1,
              }
            ;(u.defineMode('xml', function (m, x) {
              var b = m.indentUnit,
                v = {},
                L = x.htmlMode ? h : p
              for (var g in L) v[g] = L[g]
              for (var g in x) v[g] = x[g]
              var S, _
              function R(A, G) {
                function q(Le) {
                  return ((G.tokenize = Le), Le(A, G))
                }
                var te = A.next()
                if (te == '<')
                  return A.eat('!')
                    ? A.eat('[')
                      ? A.match('CDATA[')
                        ? q(D('atom', ']]>'))
                        : null
                      : A.match('--')
                        ? q(D('comment', '-->'))
                        : A.match('DOCTYPE', !0, !0)
                          ? (A.eatWhile(/[\w\._\-]/), q(C(1)))
                          : null
                    : A.eat('?')
                      ? (A.eatWhile(/[\w\._\-]/), (G.tokenize = D('meta', '?>')), 'meta')
                      : ((S = A.eat('/') ? 'closeTag' : 'openTag'), (G.tokenize = F), 'tag bracket')
                if (te == '&') {
                  var be
                  return (
                    A.eat('#')
                      ? A.eat('x')
                        ? (be = A.eatWhile(/[a-fA-F\d]/) && A.eat(';'))
                        : (be = A.eatWhile(/[\d]/) && A.eat(';'))
                      : (be = A.eatWhile(/[\w\.\-:]/) && A.eat(';')),
                    be ? 'atom' : 'error'
                  )
                } else return (A.eatWhile(/[^&<]/), null)
              }
              R.isInText = !0
              function F(A, G) {
                var q = A.next()
                if (q == '>' || (q == '/' && A.eat('>')))
                  return (
                    (G.tokenize = R),
                    (S = q == '>' ? 'endTag' : 'selfcloseTag'),
                    'tag bracket'
                  )
                if (q == '=') return ((S = 'equals'), null)
                if (q == '<') {
                  ;((G.tokenize = R), (G.state = ce), (G.tagName = G.tagStart = null))
                  var te = G.tokenize(A, G)
                  return te ? te + ' tag error' : 'tag error'
                } else
                  return /[\'\"]/.test(q)
                    ? ((G.tokenize = P(q)), (G.stringStartCol = A.column()), G.tokenize(A, G))
                    : (A.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word')
              }
              function P(A) {
                var G = function (q, te) {
                  for (; !q.eol(); )
                    if (q.next() == A) {
                      te.tokenize = F
                      break
                    }
                  return 'string'
                }
                return ((G.isInAttribute = !0), G)
              }
              function D(A, G) {
                return function (q, te) {
                  for (; !q.eol(); ) {
                    if (q.match(G)) {
                      te.tokenize = R
                      break
                    }
                    q.next()
                  }
                  return A
                }
              }
              function C(A) {
                return function (G, q) {
                  for (var te; (te = G.next()) != null; ) {
                    if (te == '<') return ((q.tokenize = C(A + 1)), q.tokenize(G, q))
                    if (te == '>')
                      if (A == 1) {
                        q.tokenize = R
                        break
                      } else return ((q.tokenize = C(A - 1)), q.tokenize(G, q))
                  }
                  return 'meta'
                }
              }
              function O(A) {
                return A && A.toLowerCase()
              }
              function N(A, G, q) {
                ;((this.prev = A.context),
                  (this.tagName = G || ''),
                  (this.indent = A.indented),
                  (this.startOfLine = q),
                  (v.doNotIndent.hasOwnProperty(G) || (A.context && A.context.noIndent)) &&
                    (this.noIndent = !0))
              }
              function I(A) {
                A.context && (A.context = A.context.prev)
              }
              function z(A, G) {
                for (var q; ; ) {
                  if (
                    !A.context ||
                    ((q = A.context.tagName),
                    !v.contextGrabbers.hasOwnProperty(O(q)) ||
                      !v.contextGrabbers[O(q)].hasOwnProperty(O(G)))
                  )
                    return
                  I(A)
                }
              }
              function ce(A, G, q) {
                return A == 'openTag' ? ((q.tagStart = G.column()), ee) : A == 'closeTag' ? Y : ce
              }
              function ee(A, G, q) {
                return A == 'word'
                  ? ((q.tagName = G.current()), (_ = 'tag'), X)
                  : v.allowMissingTagName && A == 'endTag'
                    ? ((_ = 'tag bracket'), X(A, G, q))
                    : ((_ = 'error'), ee)
              }
              function Y(A, G, q) {
                if (A == 'word') {
                  var te = G.current()
                  return (
                    q.context &&
                      q.context.tagName != te &&
                      v.implicitlyClosed.hasOwnProperty(O(q.context.tagName)) &&
                      I(q),
                    (q.context && q.context.tagName == te) || v.matchClosing === !1
                      ? ((_ = 'tag'), ue)
                      : ((_ = 'tag error'), xe)
                  )
                } else
                  return v.allowMissingTagName && A == 'endTag'
                    ? ((_ = 'tag bracket'), ue(A, G, q))
                    : ((_ = 'error'), xe)
              }
              function ue(A, G, q) {
                return A != 'endTag' ? ((_ = 'error'), ue) : (I(q), ce)
              }
              function xe(A, G, q) {
                return ((_ = 'error'), ue(A, G, q))
              }
              function X(A, G, q) {
                if (A == 'word') return ((_ = 'attribute'), oe)
                if (A == 'endTag' || A == 'selfcloseTag') {
                  var te = q.tagName,
                    be = q.tagStart
                  return (
                    (q.tagName = q.tagStart = null),
                    A == 'selfcloseTag' || v.autoSelfClosers.hasOwnProperty(O(te))
                      ? z(q, te)
                      : (z(q, te), (q.context = new N(q, te, be == q.indented))),
                    ce
                  )
                }
                return ((_ = 'error'), X)
              }
              function oe(A, G, q) {
                return A == 'equals' ? V : (v.allowMissing || (_ = 'error'), X(A, G, q))
              }
              function V(A, G, q) {
                return A == 'string'
                  ? se
                  : A == 'word' && v.allowUnquoted
                    ? ((_ = 'string'), X)
                    : ((_ = 'error'), X(A, G, q))
              }
              function se(A, G, q) {
                return A == 'string' ? se : X(A, G, q)
              }
              return {
                startState: function (A) {
                  var G = {
                    tokenize: R,
                    state: ce,
                    indented: A || 0,
                    tagName: null,
                    tagStart: null,
                    context: null,
                  }
                  return (A != null && (G.baseIndent = A), G)
                },
                token: function (A, G) {
                  if ((!G.tagName && A.sol() && (G.indented = A.indentation()), A.eatSpace()))
                    return null
                  S = null
                  var q = G.tokenize(A, G)
                  return (
                    (q || S) &&
                      q != 'comment' &&
                      ((_ = null),
                      (G.state = G.state(S || q, A, G)),
                      _ && (q = _ == 'error' ? q + ' error' : _)),
                    q
                  )
                },
                indent: function (A, G, q) {
                  var te = A.context
                  if (A.tokenize.isInAttribute)
                    return A.tagStart == A.indented ? A.stringStartCol + 1 : A.indented + b
                  if (te && te.noIndent) return u.Pass
                  if (A.tokenize != F && A.tokenize != R) return q ? q.match(/^(\s*)/)[0].length : 0
                  if (A.tagName)
                    return v.multilineTagIndentPastTag !== !1
                      ? A.tagStart + A.tagName.length + 2
                      : A.tagStart + b * (v.multilineTagIndentFactor || 1)
                  if (v.alignCDATA && /<!\[CDATA\[/.test(G)) return 0
                  var be = G && /^<(\/)?([\w_:\.-]*)/.exec(G)
                  if (be && be[1])
                    for (; te; )
                      if (te.tagName == be[2]) {
                        te = te.prev
                        break
                      } else if (v.implicitlyClosed.hasOwnProperty(O(te.tagName))) te = te.prev
                      else break
                  else if (be)
                    for (; te; ) {
                      var Le = v.contextGrabbers[O(te.tagName)]
                      if (Le && Le.hasOwnProperty(O(be[2]))) te = te.prev
                      else break
                    }
                  for (; te && te.prev && !te.startOfLine; ) te = te.prev
                  return te ? te.indent + b : A.baseIndent || 0
                },
                electricInput: /<\/[\s\w:]+>$/,
                blockCommentStart: '<!--',
                blockCommentEnd: '-->',
                configuration: v.htmlMode ? 'html' : 'xml',
                helperType: v.htmlMode ? 'html' : 'xml',
                skipAttribute: function (A) {
                  A.state == V && (A.state = X)
                },
                xmlCurrentTag: function (A) {
                  return A.tagName ? { name: A.tagName, close: A.type == 'closeTag' } : null
                },
                xmlCurrentContext: function (A) {
                  for (var G = [], q = A.context; q; q = q.prev) G.push(q.tagName)
                  return G.reverse()
                },
              }
            }),
              u.defineMIME('text/xml', 'xml'),
              u.defineMIME('application/xml', 'xml'),
              u.mimeModes.hasOwnProperty('text/html') ||
                u.defineMIME('text/html', { name: 'xml', htmlMode: !0 }))
          })
        })()),
      po.exports
    )
  }
  var vo = { exports: {} },
    mo
  function yo() {
    return (
      mo ||
        ((mo = 1),
        (function (d, s) {
          ;(function (u) {
            u(Zt())
          })(function (u) {
            u.modeInfo = [
              { name: 'APL', mime: 'text/apl', mode: 'apl', ext: ['dyalog', 'apl'] },
              {
                name: 'PGP',
                mimes: [
                  'application/pgp',
                  'application/pgp-encrypted',
                  'application/pgp-keys',
                  'application/pgp-signature',
                ],
                mode: 'asciiarmor',
                ext: ['asc', 'pgp', 'sig'],
              },
              { name: 'ASN.1', mime: 'text/x-ttcn-asn', mode: 'asn.1', ext: ['asn', 'asn1'] },
              {
                name: 'Asterisk',
                mime: 'text/x-asterisk',
                mode: 'asterisk',
                file: /^extensions\.conf$/i,
              },
              { name: 'Brainfuck', mime: 'text/x-brainfuck', mode: 'brainfuck', ext: ['b', 'bf'] },
              { name: 'C', mime: 'text/x-csrc', mode: 'clike', ext: ['c', 'h', 'ino'] },
              {
                name: 'C++',
                mime: 'text/x-c++src',
                mode: 'clike',
                ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
                alias: ['cpp'],
              },
              { name: 'Cobol', mime: 'text/x-cobol', mode: 'cobol', ext: ['cob', 'cpy', 'cbl'] },
              {
                name: 'C#',
                mime: 'text/x-csharp',
                mode: 'clike',
                ext: ['cs'],
                alias: ['csharp', 'cs'],
              },
              {
                name: 'Clojure',
                mime: 'text/x-clojure',
                mode: 'clojure',
                ext: ['clj', 'cljc', 'cljx'],
              },
              {
                name: 'ClojureScript',
                mime: 'text/x-clojurescript',
                mode: 'clojure',
                ext: ['cljs'],
              },
              { name: 'Closure Stylesheets (GSS)', mime: 'text/x-gss', mode: 'css', ext: ['gss'] },
              {
                name: 'CMake',
                mime: 'text/x-cmake',
                mode: 'cmake',
                ext: ['cmake', 'cmake.in'],
                file: /^CMakeLists\.txt$/,
              },
              {
                name: 'CoffeeScript',
                mimes: ['application/vnd.coffeescript', 'text/coffeescript', 'text/x-coffeescript'],
                mode: 'coffeescript',
                ext: ['coffee'],
                alias: ['coffee', 'coffee-script'],
              },
              {
                name: 'Common Lisp',
                mime: 'text/x-common-lisp',
                mode: 'commonlisp',
                ext: ['cl', 'lisp', 'el'],
                alias: ['lisp'],
              },
              {
                name: 'Cypher',
                mime: 'application/x-cypher-query',
                mode: 'cypher',
                ext: ['cyp', 'cypher'],
              },
              { name: 'Cython', mime: 'text/x-cython', mode: 'python', ext: ['pyx', 'pxd', 'pxi'] },
              { name: 'Crystal', mime: 'text/x-crystal', mode: 'crystal', ext: ['cr'] },
              { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
              { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
              { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
              {
                name: 'Dart',
                mimes: ['application/dart', 'text/x-dart'],
                mode: 'dart',
                ext: ['dart'],
              },
              { name: 'diff', mime: 'text/x-diff', mode: 'diff', ext: ['diff', 'patch'] },
              { name: 'Django', mime: 'text/x-django', mode: 'django' },
              {
                name: 'Dockerfile',
                mime: 'text/x-dockerfile',
                mode: 'dockerfile',
                file: /^Dockerfile$/,
              },
              { name: 'DTD', mime: 'application/xml-dtd', mode: 'dtd', ext: ['dtd'] },
              { name: 'Dylan', mime: 'text/x-dylan', mode: 'dylan', ext: ['dylan', 'dyl', 'intr'] },
              { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
              { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
              { name: 'edn', mime: 'application/edn', mode: 'clojure', ext: ['edn'] },
              { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
              { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
              {
                name: 'Embedded JavaScript',
                mime: 'application/x-ejs',
                mode: 'htmlembedded',
                ext: ['ejs'],
              },
              {
                name: 'Embedded Ruby',
                mime: 'application/x-erb',
                mode: 'htmlembedded',
                ext: ['erb'],
              },
              { name: 'Erlang', mime: 'text/x-erlang', mode: 'erlang', ext: ['erl'] },
              { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
              { name: 'Factor', mime: 'text/x-factor', mode: 'factor', ext: ['factor'] },
              { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
              { name: 'Forth', mime: 'text/x-forth', mode: 'forth', ext: ['forth', 'fth', '4th'] },
              {
                name: 'Fortran',
                mime: 'text/x-fortran',
                mode: 'fortran',
                ext: ['f', 'for', 'f77', 'f90', 'f95'],
              },
              { name: 'F#', mime: 'text/x-fsharp', mode: 'mllike', ext: ['fs'], alias: ['fsharp'] },
              { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
              { name: 'Gherkin', mime: 'text/x-feature', mode: 'gherkin', ext: ['feature'] },
              {
                name: 'GitHub Flavored Markdown',
                mime: 'text/x-gfm',
                mode: 'gfm',
                file: /^(readme|contributing|history)\.md$/i,
              },
              { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
              {
                name: 'Groovy',
                mime: 'text/x-groovy',
                mode: 'groovy',
                ext: ['groovy', 'gradle'],
                file: /^Jenkinsfile$/,
              },
              { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
              { name: 'Haskell', mime: 'text/x-haskell', mode: 'haskell', ext: ['hs'] },
              {
                name: 'Haskell (Literate)',
                mime: 'text/x-literate-haskell',
                mode: 'haskell-literate',
                ext: ['lhs'],
              },
              { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
              { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
              {
                name: 'ASP.NET',
                mime: 'application/x-aspx',
                mode: 'htmlembedded',
                ext: ['aspx'],
                alias: ['asp', 'aspx'],
              },
              {
                name: 'HTML',
                mime: 'text/html',
                mode: 'htmlmixed',
                ext: ['html', 'htm', 'handlebars', 'hbs'],
                alias: ['xhtml'],
              },
              { name: 'HTTP', mime: 'message/http', mode: 'http' },
              { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
              {
                name: 'Pug',
                mime: 'text/x-pug',
                mode: 'pug',
                ext: ['jade', 'pug'],
                alias: ['jade'],
              },
              { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
              {
                name: 'Java Server Pages',
                mime: 'application/x-jsp',
                mode: 'htmlembedded',
                ext: ['jsp'],
                alias: ['jsp'],
              },
              {
                name: 'JavaScript',
                mimes: [
                  'text/javascript',
                  'text/ecmascript',
                  'application/javascript',
                  'application/x-javascript',
                  'application/ecmascript',
                ],
                mode: 'javascript',
                ext: ['js'],
                alias: ['ecmascript', 'js', 'node'],
              },
              {
                name: 'JSON',
                mimes: ['application/json', 'application/x-json'],
                mode: 'javascript',
                ext: ['json', 'map'],
                alias: ['json5'],
              },
              {
                name: 'JSON-LD',
                mime: 'application/ld+json',
                mode: 'javascript',
                ext: ['jsonld'],
                alias: ['jsonld'],
              },
              { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
              {
                name: 'Jinja2',
                mime: 'text/jinja2',
                mode: 'jinja2',
                ext: ['j2', 'jinja', 'jinja2'],
              },
              { name: 'Julia', mime: 'text/x-julia', mode: 'julia', ext: ['jl'], alias: ['jl'] },
              { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
              { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
              {
                name: 'LiveScript',
                mime: 'text/x-livescript',
                mode: 'livescript',
                ext: ['ls'],
                alias: ['ls'],
              },
              { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
              {
                name: 'Markdown',
                mime: 'text/x-markdown',
                mode: 'markdown',
                ext: ['markdown', 'md', 'mkd'],
              },
              { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
              { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
              {
                name: 'Mathematica',
                mime: 'text/x-mathematica',
                mode: 'mathematica',
                ext: ['m', 'nb', 'wl', 'wls'],
              },
              { name: 'Modelica', mime: 'text/x-modelica', mode: 'modelica', ext: ['mo'] },
              { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
              { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
              { name: 'mbox', mime: 'application/mbox', mode: 'mbox', ext: ['mbox'] },
              { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
              { name: 'Nginx', mime: 'text/x-nginx-conf', mode: 'nginx', file: /nginx.*\.conf$/i },
              { name: 'NSIS', mime: 'text/x-nsis', mode: 'nsis', ext: ['nsh', 'nsi'] },
              {
                name: 'NTriples',
                mimes: ['application/n-triples', 'application/n-quads', 'text/n-triples'],
                mode: 'ntriples',
                ext: ['nt', 'nq'],
              },
              {
                name: 'Objective-C',
                mime: 'text/x-objectivec',
                mode: 'clike',
                ext: ['m'],
                alias: ['objective-c', 'objc'],
              },
              {
                name: 'Objective-C++',
                mime: 'text/x-objectivec++',
                mode: 'clike',
                ext: ['mm'],
                alias: ['objective-c++', 'objc++'],
              },
              {
                name: 'OCaml',
                mime: 'text/x-ocaml',
                mode: 'mllike',
                ext: ['ml', 'mli', 'mll', 'mly'],
              },
              { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
              { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
              { name: 'Pascal', mime: 'text/x-pascal', mode: 'pascal', ext: ['p', 'pas'] },
              { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
              { name: 'Perl', mime: 'text/x-perl', mode: 'perl', ext: ['pl', 'pm'] },
              {
                name: 'PHP',
                mimes: ['text/x-php', 'application/x-httpd-php', 'application/x-httpd-php-open'],
                mode: 'php',
                ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
              },
              { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
              {
                name: 'Plain Text',
                mime: 'text/plain',
                mode: 'null',
                ext: ['txt', 'text', 'conf', 'def', 'list', 'log'],
              },
              { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
              { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
              {
                name: 'PowerShell',
                mime: 'application/x-powershell',
                mode: 'powershell',
                ext: ['ps1', 'psd1', 'psm1'],
              },
              {
                name: 'Properties files',
                mime: 'text/x-properties',
                mode: 'properties',
                ext: ['properties', 'ini', 'in'],
                alias: ['ini', 'properties'],
              },
              { name: 'ProtoBuf', mime: 'text/x-protobuf', mode: 'protobuf', ext: ['proto'] },
              {
                name: 'Python',
                mime: 'text/x-python',
                mode: 'python',
                ext: ['BUILD', 'bzl', 'py', 'pyw'],
                file: /^(BUCK|BUILD)$/,
              },
              { name: 'Puppet', mime: 'text/x-puppet', mode: 'puppet', ext: ['pp'] },
              { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
              { name: 'R', mime: 'text/x-rsrc', mode: 'r', ext: ['r', 'R'], alias: ['rscript'] },
              {
                name: 'reStructuredText',
                mime: 'text/x-rst',
                mode: 'rst',
                ext: ['rst'],
                alias: ['rst'],
              },
              { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
              { name: 'RPM Spec', mime: 'text/x-rpm-spec', mode: 'rpm', ext: ['spec'] },
              {
                name: 'Ruby',
                mime: 'text/x-ruby',
                mode: 'ruby',
                ext: ['rb'],
                alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
              },
              { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
              { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
              { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
              { name: 'Scala', mime: 'text/x-scala', mode: 'clike', ext: ['scala'] },
              { name: 'Scheme', mime: 'text/x-scheme', mode: 'scheme', ext: ['scm', 'ss'] },
              { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
              {
                name: 'Shell',
                mimes: ['text/x-sh', 'application/x-sh'],
                mode: 'shell',
                ext: ['sh', 'ksh', 'bash'],
                alias: ['bash', 'sh', 'zsh'],
                file: /^PKGBUILD$/,
              },
              { name: 'Sieve', mime: 'application/sieve', mode: 'sieve', ext: ['siv', 'sieve'] },
              {
                name: 'Slim',
                mimes: ['text/x-slim', 'application/x-slim'],
                mode: 'slim',
                ext: ['slim'],
              },
              { name: 'Smalltalk', mime: 'text/x-stsrc', mode: 'smalltalk', ext: ['st'] },
              { name: 'Smarty', mime: 'text/x-smarty', mode: 'smarty', ext: ['tpl'] },
              { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
              {
                name: 'SML',
                mime: 'text/x-sml',
                mode: 'mllike',
                ext: ['sml', 'sig', 'fun', 'smackspec'],
              },
              {
                name: 'Soy',
                mime: 'text/x-soy',
                mode: 'soy',
                ext: ['soy'],
                alias: ['closure template'],
              },
              {
                name: 'SPARQL',
                mime: 'application/sparql-query',
                mode: 'sparql',
                ext: ['rq', 'sparql'],
                alias: ['sparul'],
              },
              {
                name: 'Spreadsheet',
                mime: 'text/x-spreadsheet',
                mode: 'spreadsheet',
                alias: ['excel', 'formula'],
              },
              { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
              { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
              { name: 'Squirrel', mime: 'text/x-squirrel', mode: 'clike', ext: ['nut'] },
              { name: 'Stylus', mime: 'text/x-styl', mode: 'stylus', ext: ['styl'] },
              { name: 'Swift', mime: 'text/x-swift', mode: 'swift', ext: ['swift'] },
              { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
              {
                name: 'LaTeX',
                mime: 'text/x-latex',
                mode: 'stex',
                ext: ['text', 'ltx', 'tex'],
                alias: ['tex'],
              },
              {
                name: 'SystemVerilog',
                mime: 'text/x-systemverilog',
                mode: 'verilog',
                ext: ['v', 'sv', 'svh'],
              },
              { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
              { name: 'Textile', mime: 'text/x-textile', mode: 'textile', ext: ['textile'] },
              { name: 'TiddlyWiki', mime: 'text/x-tiddlywiki', mode: 'tiddlywiki' },
              { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
              { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
              { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
              {
                name: 'troff',
                mime: 'text/troff',
                mode: 'troff',
                ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
              },
              { name: 'TTCN', mime: 'text/x-ttcn', mode: 'ttcn', ext: ['ttcn', 'ttcn3', 'ttcnpp'] },
              { name: 'TTCN_CFG', mime: 'text/x-ttcn-cfg', mode: 'ttcn-cfg', ext: ['cfg'] },
              { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
              {
                name: 'TypeScript',
                mime: 'application/typescript',
                mode: 'javascript',
                ext: ['ts'],
                alias: ['ts'],
              },
              {
                name: 'TypeScript-JSX',
                mime: 'text/typescript-jsx',
                mode: 'jsx',
                ext: ['tsx'],
                alias: ['tsx'],
              },
              { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
              { name: 'Web IDL', mime: 'text/x-webidl', mode: 'webidl', ext: ['webidl'] },
              { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
              { name: 'VBScript', mime: 'text/vbscript', mode: 'vbscript', ext: ['vbs'] },
              { name: 'Velocity', mime: 'text/velocity', mode: 'velocity', ext: ['vtl'] },
              { name: 'Verilog', mime: 'text/x-verilog', mode: 'verilog', ext: ['v'] },
              { name: 'VHDL', mime: 'text/x-vhdl', mode: 'vhdl', ext: ['vhd', 'vhdl'] },
              {
                name: 'Vue.js Component',
                mimes: ['script/x-vue', 'text/x-vue'],
                mode: 'vue',
                ext: ['vue'],
              },
              {
                name: 'XML',
                mimes: ['application/xml', 'text/xml'],
                mode: 'xml',
                ext: ['xml', 'xsl', 'xsd', 'svg'],
                alias: ['rss', 'wsdl', 'xsd'],
              },
              { name: 'XQuery', mime: 'application/xquery', mode: 'xquery', ext: ['xy', 'xquery'] },
              { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
              {
                name: 'YAML',
                mimes: ['text/x-yaml', 'text/yaml'],
                mode: 'yaml',
                ext: ['yaml', 'yml'],
                alias: ['yml'],
              },
              { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
              {
                name: 'mscgen',
                mime: 'text/x-mscgen',
                mode: 'mscgen',
                ext: ['mscgen', 'mscin', 'msc'],
              },
              { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
              { name: 'msgenny', mime: 'text/x-msgenny', mode: 'mscgen', ext: ['msgenny'] },
              { name: 'WebAssembly', mime: 'text/webassembly', mode: 'wast', ext: ['wat', 'wast'] },
            ]
            for (var h = 0; h < u.modeInfo.length; h++) {
              var p = u.modeInfo[h]
              p.mimes && (p.mime = p.mimes[0])
            }
            ;((u.findModeByMIME = function (m) {
              m = m.toLowerCase()
              for (var x = 0; x < u.modeInfo.length; x++) {
                var b = u.modeInfo[x]
                if (b.mime == m) return b
                if (b.mimes) {
                  for (var v = 0; v < b.mimes.length; v++) if (b.mimes[v] == m) return b
                }
              }
              if (/\+xml$/.test(m)) return u.findModeByMIME('application/xml')
              if (/\+json$/.test(m)) return u.findModeByMIME('application/json')
            }),
              (u.findModeByExtension = function (m) {
                m = m.toLowerCase()
                for (var x = 0; x < u.modeInfo.length; x++) {
                  var b = u.modeInfo[x]
                  if (b.ext) {
                    for (var v = 0; v < b.ext.length; v++) if (b.ext[v] == m) return b
                  }
                }
              }),
              (u.findModeByFileName = function (m) {
                for (var x = 0; x < u.modeInfo.length; x++) {
                  var b = u.modeInfo[x]
                  if (b.file && b.file.test(m)) return b
                }
                var v = m.lastIndexOf('.'),
                  L = v > -1 && m.substring(v + 1, m.length)
                if (L) return u.findModeByExtension(L)
              }),
              (u.findModeByName = function (m) {
                m = m.toLowerCase()
                for (var x = 0; x < u.modeInfo.length; x++) {
                  var b = u.modeInfo[x]
                  if (b.name.toLowerCase() == m) return b
                  if (b.alias) {
                    for (var v = 0; v < b.alias.length; v++)
                      if (b.alias[v].toLowerCase() == m) return b
                  }
                }
              }))
          })
        })()),
      vo.exports
    )
  }
  ;(function (d, s) {
    ;(function (u) {
      u(Zt(), Uu(), yo())
    })(function (u) {
      ;(u.defineMode(
        'markdown',
        function (h, p) {
          var m = u.getMode(h, 'text/html'),
            x = m.name == 'null'
          function b(T) {
            if (u.findModeByName) {
              var y = u.findModeByName(T)
              y && (T = y.mime || y.mimes[0])
            }
            var J = u.getMode(h, T)
            return J.name == 'null' ? null : J
          }
          ;(p.highlightFormatting === void 0 && (p.highlightFormatting = !1),
            p.maxBlockquoteDepth === void 0 && (p.maxBlockquoteDepth = 0),
            p.taskLists === void 0 && (p.taskLists = !1),
            p.strikethrough === void 0 && (p.strikethrough = !1),
            p.emoji === void 0 && (p.emoji = !1),
            p.fencedCodeBlockHighlighting === void 0 && (p.fencedCodeBlockHighlighting = !0),
            p.fencedCodeBlockDefaultMode === void 0 &&
              (p.fencedCodeBlockDefaultMode = 'text/plain'),
            p.xml === void 0 && (p.xml = !0),
            p.tokenTypeOverrides === void 0 && (p.tokenTypeOverrides = {}))
          var v = {
            header: 'header',
            code: 'comment',
            quote: 'quote',
            list1: 'variable-2',
            list2: 'variable-3',
            list3: 'keyword',
            hr: 'hr',
            image: 'image',
            imageAltText: 'image-alt-text',
            imageMarker: 'image-marker',
            formatting: 'formatting',
            linkInline: 'link',
            linkEmail: 'link',
            linkText: 'link',
            linkHref: 'string',
            em: 'em',
            strong: 'strong',
            strikethrough: 'strikethrough',
            emoji: 'builtin',
          }
          for (var L in v)
            v.hasOwnProperty(L) && p.tokenTypeOverrides[L] && (v[L] = p.tokenTypeOverrides[L])
          var g = /^([*\-_])(?:\s*\1){2,}\s*$/,
            S = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
            _ = /^\[(x| )\](?=\s)/i,
            R = p.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
            F = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
            P = /^[^#!\[\]*_\\<>` "'(~:]+/,
            D = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
            C = /^\s*\[[^\]]+?\]:.*$/,
            O =
              /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
            N = '    '
          function I(T, y, J) {
            return ((y.f = y.inline = J), J(T, y))
          }
          function z(T, y, J) {
            return ((y.f = y.block = J), J(T, y))
          }
          function ce(T) {
            return !T || !/\S/.test(T.string)
          }
          function ee(T) {
            if (
              ((T.linkTitle = !1),
              (T.linkHref = !1),
              (T.linkText = !1),
              (T.em = !1),
              (T.strong = !1),
              (T.strikethrough = !1),
              (T.quote = 0),
              (T.indentedCode = !1),
              T.f == ue)
            ) {
              var y = x
              if (!y) {
                var J = u.innerMode(m, T.htmlState)
                y =
                  J.mode.name == 'xml' &&
                  J.state.tagStart === null &&
                  !J.state.context &&
                  J.state.tokenize.isInText
              }
              y && ((T.f = V), (T.block = Y), (T.htmlState = null))
            }
            return (
              (T.trailingSpace = 0),
              (T.trailingSpaceNewLine = !1),
              (T.prevLine = T.thisLine),
              (T.thisLine = { stream: null }),
              null
            )
          }
          function Y(T, y) {
            var J = T.column() === y.indentation,
              me = ce(y.prevLine.stream),
              de = y.indentedCode,
              et = y.prevLine.hr,
              ft = y.list !== !1,
              Re = (y.listStack[y.listStack.length - 1] || 0) + 3
            y.indentedCode = !1
            var Ze = y.indentation
            if (y.indentationDiff === null && ((y.indentationDiff = y.indentation), ft)) {
              for (y.list = null; Ze < y.listStack[y.listStack.length - 1]; )
                (y.listStack.pop(),
                  y.listStack.length
                    ? (y.indentation = y.listStack[y.listStack.length - 1])
                    : (y.list = !1))
              y.list !== !1 && (y.indentationDiff = Ze - y.listStack[y.listStack.length - 1])
            }
            var Ce = !me && !et && !y.prevLine.header && (!ft || !de) && !y.prevLine.fencedCodeEnd,
              De = (y.list === !1 || et || me) && y.indentation <= Re && T.match(g),
              Pe = null
            if (
              y.indentationDiff >= 4 &&
              (de || y.prevLine.fencedCodeEnd || y.prevLine.header || me)
            )
              return (T.skipToEnd(), (y.indentedCode = !0), v.code)
            if (T.eatSpace()) return null
            if (J && y.indentation <= Re && (Pe = T.match(R)) && Pe[1].length <= 6)
              return (
                (y.quote = 0),
                (y.header = Pe[1].length),
                (y.thisLine.header = !0),
                p.highlightFormatting && (y.formatting = 'header'),
                (y.f = y.inline),
                X(y)
              )
            if (y.indentation <= Re && T.eat('>'))
              return (
                (y.quote = J ? 1 : y.quote + 1),
                p.highlightFormatting && (y.formatting = 'quote'),
                T.eatSpace(),
                X(y)
              )
            if (!De && !y.setext && J && y.indentation <= Re && (Pe = T.match(S))) {
              var tt = Pe[1] ? 'ol' : 'ul'
              return (
                (y.indentation = Ze + T.current().length),
                (y.list = !0),
                (y.quote = 0),
                y.listStack.push(y.indentation),
                (y.em = !1),
                (y.strong = !1),
                (y.code = !1),
                (y.strikethrough = !1),
                p.taskLists && T.match(_, !1) && (y.taskList = !0),
                (y.f = y.inline),
                p.highlightFormatting && (y.formatting = ['list', 'list-' + tt]),
                X(y)
              )
            } else {
              if (J && y.indentation <= Re && (Pe = T.match(D, !0)))
                return (
                  (y.quote = 0),
                  (y.fencedEndRE = new RegExp(Pe[1] + '+ *$')),
                  (y.localMode =
                    p.fencedCodeBlockHighlighting && b(Pe[2] || p.fencedCodeBlockDefaultMode)),
                  y.localMode && (y.localState = u.startState(y.localMode)),
                  (y.f = y.block = xe),
                  p.highlightFormatting && (y.formatting = 'code-block'),
                  (y.code = -1),
                  X(y)
                )
              if (
                y.setext ||
                ((!Ce || !ft) &&
                  !y.quote &&
                  y.list === !1 &&
                  !y.code &&
                  !De &&
                  !C.test(T.string) &&
                  (Pe = T.lookAhead(1)) &&
                  (Pe = Pe.match(F)))
              )
                return (
                  y.setext
                    ? ((y.header = y.setext),
                      (y.setext = 0),
                      T.skipToEnd(),
                      p.highlightFormatting && (y.formatting = 'header'))
                    : ((y.header = Pe[0].charAt(0) == '=' ? 1 : 2), (y.setext = y.header)),
                  (y.thisLine.header = !0),
                  (y.f = y.inline),
                  X(y)
                )
              if (De) return (T.skipToEnd(), (y.hr = !0), (y.thisLine.hr = !0), v.hr)
              if (T.peek() === '[') return I(T, y, te)
            }
            return I(T, y, y.inline)
          }
          function ue(T, y) {
            var J = m.token(T, y.htmlState)
            if (!x) {
              var me = u.innerMode(m, y.htmlState)
              ;((me.mode.name == 'xml' &&
                me.state.tagStart === null &&
                !me.state.context &&
                me.state.tokenize.isInText) ||
                (y.md_inside && T.current().indexOf('>') > -1)) &&
                ((y.f = V), (y.block = Y), (y.htmlState = null))
            }
            return J
          }
          function xe(T, y) {
            var J = y.listStack[y.listStack.length - 1] || 0,
              me = y.indentation < J,
              de = J + 3
            if (y.fencedEndRE && y.indentation <= de && (me || T.match(y.fencedEndRE))) {
              p.highlightFormatting && (y.formatting = 'code-block')
              var et
              return (
                me || (et = X(y)),
                (y.localMode = y.localState = null),
                (y.block = Y),
                (y.f = V),
                (y.fencedEndRE = null),
                (y.code = 0),
                (y.thisLine.fencedCodeEnd = !0),
                me ? z(T, y, y.block) : et
              )
            } else return y.localMode ? y.localMode.token(T, y.localState) : (T.skipToEnd(), v.code)
          }
          function X(T) {
            var y = []
            if (T.formatting) {
              ;(y.push(v.formatting),
                typeof T.formatting == 'string' && (T.formatting = [T.formatting]))
              for (var J = 0; J < T.formatting.length; J++)
                (y.push(v.formatting + '-' + T.formatting[J]),
                  T.formatting[J] === 'header' &&
                    y.push(v.formatting + '-' + T.formatting[J] + '-' + T.header),
                  T.formatting[J] === 'quote' &&
                    (!p.maxBlockquoteDepth || p.maxBlockquoteDepth >= T.quote
                      ? y.push(v.formatting + '-' + T.formatting[J] + '-' + T.quote)
                      : y.push('error')))
            }
            if (T.taskOpen) return (y.push('meta'), y.length ? y.join(' ') : null)
            if (T.taskClosed) return (y.push('property'), y.length ? y.join(' ') : null)
            if (
              (T.linkHref
                ? y.push(v.linkHref, 'url')
                : (T.strong && y.push(v.strong),
                  T.em && y.push(v.em),
                  T.strikethrough && y.push(v.strikethrough),
                  T.emoji && y.push(v.emoji),
                  T.linkText && y.push(v.linkText),
                  T.code && y.push(v.code),
                  T.image && y.push(v.image),
                  T.imageAltText && y.push(v.imageAltText, 'link'),
                  T.imageMarker && y.push(v.imageMarker)),
              T.header && y.push(v.header, v.header + '-' + T.header),
              T.quote &&
                (y.push(v.quote),
                !p.maxBlockquoteDepth || p.maxBlockquoteDepth >= T.quote
                  ? y.push(v.quote + '-' + T.quote)
                  : y.push(v.quote + '-' + p.maxBlockquoteDepth)),
              T.list !== !1)
            ) {
              var me = (T.listStack.length - 1) % 3
              me ? (me === 1 ? y.push(v.list2) : y.push(v.list3)) : y.push(v.list1)
            }
            return (
              T.trailingSpaceNewLine
                ? y.push('trailing-space-new-line')
                : T.trailingSpace && y.push('trailing-space-' + (T.trailingSpace % 2 ? 'a' : 'b')),
              y.length ? y.join(' ') : null
            )
          }
          function oe(T, y) {
            if (T.match(P, !0)) return X(y)
          }
          function V(T, y) {
            var J = y.text(T, y)
            if (typeof J < 'u') return J
            if (y.list) return ((y.list = null), X(y))
            if (y.taskList) {
              var me = T.match(_, !0)[1] === ' '
              return (
                me ? (y.taskOpen = !0) : (y.taskClosed = !0),
                p.highlightFormatting && (y.formatting = 'task'),
                (y.taskList = !1),
                X(y)
              )
            }
            if (((y.taskOpen = !1), (y.taskClosed = !1), y.header && T.match(/^#+$/, !0)))
              return (p.highlightFormatting && (y.formatting = 'header'), X(y))
            var de = T.next()
            if (y.linkTitle) {
              y.linkTitle = !1
              var et = de
              ;(de === '(' && (et = ')'),
                (et = (et + '').replace(/([.?*+^\[\]\\(){}|-])/g, '\\$1')))
              var ft = '^\\s*(?:[^' + et + '\\\\]+|\\\\\\\\|\\\\.)' + et
              if (T.match(new RegExp(ft), !0)) return v.linkHref
            }
            if (de === '`') {
              var Re = y.formatting
              ;(p.highlightFormatting && (y.formatting = 'code'), T.eatWhile('`'))
              var Ze = T.current().length
              if (y.code == 0 && (!y.quote || Ze == 1)) return ((y.code = Ze), X(y))
              if (Ze == y.code) {
                var Ce = X(y)
                return ((y.code = 0), Ce)
              } else return ((y.formatting = Re), X(y))
            } else if (y.code) return X(y)
            if (de === '\\' && (T.next(), p.highlightFormatting)) {
              var De = X(y),
                Pe = v.formatting + '-escape'
              return De ? De + ' ' + Pe : Pe
            }
            if (de === '!' && T.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
              return (
                (y.imageMarker = !0),
                (y.image = !0),
                p.highlightFormatting && (y.formatting = 'image'),
                X(y)
              )
            if (de === '[' && y.imageMarker && T.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1))
              return (
                (y.imageMarker = !1),
                (y.imageAltText = !0),
                p.highlightFormatting && (y.formatting = 'image'),
                X(y)
              )
            if (de === ']' && y.imageAltText) {
              p.highlightFormatting && (y.formatting = 'image')
              var De = X(y)
              return ((y.imageAltText = !1), (y.image = !1), (y.inline = y.f = A), De)
            }
            if (de === '[' && !y.image)
              return (
                (y.linkText && T.match(/^.*?\]/)) ||
                  ((y.linkText = !0), p.highlightFormatting && (y.formatting = 'link')),
                X(y)
              )
            if (de === ']' && y.linkText) {
              p.highlightFormatting && (y.formatting = 'link')
              var De = X(y)
              return (
                (y.linkText = !1),
                (y.inline = y.f = T.match(/\(.*?\)| ?\[.*?\]/, !1) ? A : V),
                De
              )
            }
            if (de === '<' && T.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
              ;((y.f = y.inline = se), p.highlightFormatting && (y.formatting = 'link'))
              var De = X(y)
              return (De ? (De += ' ') : (De = ''), De + v.linkInline)
            }
            if (de === '<' && T.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
              ;((y.f = y.inline = se), p.highlightFormatting && (y.formatting = 'link'))
              var De = X(y)
              return (De ? (De += ' ') : (De = ''), De + v.linkEmail)
            }
            if (
              p.xml &&
              de === '<' &&
              T.match(
                /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                !1,
              )
            ) {
              var tt = T.string.indexOf('>', T.pos)
              if (tt != -1) {
                var ir = T.string.substring(T.start, tt)
                ;/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(ir) && (y.md_inside = !0)
              }
              return (T.backUp(1), (y.htmlState = u.startState(m)), z(T, y, ue))
            }
            if (p.xml && de === '<' && T.match(/^\/\w*?>/)) return ((y.md_inside = !1), 'tag')
            if (de === '*' || de === '_') {
              for (
                var kt = 1, St = T.pos == 1 ? ' ' : T.string.charAt(T.pos - 2);
                kt < 3 && T.eat(de);
              )
                kt++
              var gt = T.peek() || ' ',
                It = !/\s/.test(gt) && (!O.test(gt) || /\s/.test(St) || O.test(St)),
                ve = !/\s/.test(St) && (!O.test(St) || /\s/.test(gt) || O.test(gt)),
                vt = null,
                Wt = null
              if (
                (kt % 2 &&
                  (!y.em && It && (de === '*' || !ve || O.test(St))
                    ? (vt = !0)
                    : y.em == de && ve && (de === '*' || !It || O.test(gt)) && (vt = !1)),
                kt > 1 &&
                  (!y.strong && It && (de === '*' || !ve || O.test(St))
                    ? (Wt = !0)
                    : y.strong == de && ve && (de === '*' || !It || O.test(gt)) && (Wt = !1)),
                Wt != null || vt != null)
              ) {
                ;(p.highlightFormatting &&
                  (y.formatting = vt == null ? 'strong' : Wt == null ? 'em' : 'strong em'),
                  vt === !0 && (y.em = de),
                  Wt === !0 && (y.strong = de))
                var Ce = X(y)
                return (vt === !1 && (y.em = !1), Wt === !1 && (y.strong = !1), Ce)
              }
            } else if (de === ' ' && (T.eat('*') || T.eat('_'))) {
              if (T.peek() === ' ') return X(y)
              T.backUp(1)
            }
            if (p.strikethrough) {
              if (de === '~' && T.eatWhile(de)) {
                if (y.strikethrough) {
                  p.highlightFormatting && (y.formatting = 'strikethrough')
                  var Ce = X(y)
                  return ((y.strikethrough = !1), Ce)
                } else if (T.match(/^[^\s]/, !1))
                  return (
                    (y.strikethrough = !0),
                    p.highlightFormatting && (y.formatting = 'strikethrough'),
                    X(y)
                  )
              } else if (de === ' ' && T.match('~~', !0)) {
                if (T.peek() === ' ') return X(y)
                T.backUp(2)
              }
            }
            if (
              p.emoji &&
              de === ':' &&
              T.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)
            ) {
              ;((y.emoji = !0), p.highlightFormatting && (y.formatting = 'emoji'))
              var Zr = X(y)
              return ((y.emoji = !1), Zr)
            }
            return (
              de === ' ' &&
                (T.match(/^ +$/, !1)
                  ? y.trailingSpace++
                  : y.trailingSpace && (y.trailingSpaceNewLine = !0)),
              X(y)
            )
          }
          function se(T, y) {
            var J = T.next()
            if (J === '>') {
              ;((y.f = y.inline = V), p.highlightFormatting && (y.formatting = 'link'))
              var me = X(y)
              return (me ? (me += ' ') : (me = ''), me + v.linkInline)
            }
            return (T.match(/^[^>]+/, !0), v.linkInline)
          }
          function A(T, y) {
            if (T.eatSpace()) return null
            var J = T.next()
            return J === '(' || J === '['
              ? ((y.f = y.inline = q(J === '(' ? ')' : ']')),
                p.highlightFormatting && (y.formatting = 'link-string'),
                (y.linkHref = !0),
                X(y))
              : 'error'
          }
          var G = {
            ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
            ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
          }
          function q(T) {
            return function (y, J) {
              var me = y.next()
              if (me === T) {
                ;((J.f = J.inline = V), p.highlightFormatting && (J.formatting = 'link-string'))
                var de = X(J)
                return ((J.linkHref = !1), de)
              }
              return (y.match(G[T]), (J.linkHref = !0), X(J))
            }
          }
          function te(T, y) {
            return T.match(/^([^\]\\]|\\.)*\]:/, !1)
              ? ((y.f = be),
                T.next(),
                p.highlightFormatting && (y.formatting = 'link'),
                (y.linkText = !0),
                X(y))
              : I(T, y, V)
          }
          function be(T, y) {
            if (T.match(']:', !0)) {
              ;((y.f = y.inline = Le), p.highlightFormatting && (y.formatting = 'link'))
              var J = X(y)
              return ((y.linkText = !1), J)
            }
            return (T.match(/^([^\]\\]|\\.)+/, !0), v.linkText)
          }
          function Le(T, y) {
            return T.eatSpace()
              ? null
              : (T.match(/^[^\s]+/, !0),
                T.peek() === void 0
                  ? (y.linkTitle = !0)
                  : T.match(
                      /^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,
                      !0,
                    ),
                (y.f = y.inline = V),
                v.linkHref + ' url')
          }
          var $e = {
            startState: function () {
              return {
                f: Y,
                prevLine: { stream: null },
                thisLine: { stream: null },
                block: Y,
                htmlState: null,
                indentation: 0,
                inline: V,
                text: oe,
                formatting: !1,
                linkText: !1,
                linkHref: !1,
                linkTitle: !1,
                code: 0,
                em: !1,
                strong: !1,
                header: 0,
                setext: 0,
                hr: !1,
                taskList: !1,
                list: !1,
                listStack: [],
                quote: 0,
                trailingSpace: 0,
                trailingSpaceNewLine: !1,
                strikethrough: !1,
                emoji: !1,
                fencedEndRE: null,
              }
            },
            copyState: function (T) {
              return {
                f: T.f,
                prevLine: T.prevLine,
                thisLine: T.thisLine,
                block: T.block,
                htmlState: T.htmlState && u.copyState(m, T.htmlState),
                indentation: T.indentation,
                localMode: T.localMode,
                localState: T.localMode ? u.copyState(T.localMode, T.localState) : null,
                inline: T.inline,
                text: T.text,
                formatting: !1,
                linkText: T.linkText,
                linkTitle: T.linkTitle,
                linkHref: T.linkHref,
                code: T.code,
                em: T.em,
                strong: T.strong,
                strikethrough: T.strikethrough,
                emoji: T.emoji,
                header: T.header,
                setext: T.setext,
                hr: T.hr,
                taskList: T.taskList,
                list: T.list,
                listStack: T.listStack.slice(0),
                quote: T.quote,
                indentedCode: T.indentedCode,
                trailingSpace: T.trailingSpace,
                trailingSpaceNewLine: T.trailingSpaceNewLine,
                md_inside: T.md_inside,
                fencedEndRE: T.fencedEndRE,
              }
            },
            token: function (T, y) {
              if (((y.formatting = !1), T != y.thisLine.stream)) {
                if (((y.header = 0), (y.hr = !1), T.match(/^\s*$/, !0))) return (ee(y), null)
                if (
                  ((y.prevLine = y.thisLine),
                  (y.thisLine = { stream: T }),
                  (y.taskList = !1),
                  (y.trailingSpace = 0),
                  (y.trailingSpaceNewLine = !1),
                  !y.localState && ((y.f = y.block), y.f != ue))
                ) {
                  var J = T.match(/^\s*/, !0)[0].replace(/\t/g, N).length
                  if (((y.indentation = J), (y.indentationDiff = null), J > 0)) return null
                }
              }
              return y.f(T, y)
            },
            innerMode: function (T) {
              return T.block == ue
                ? { state: T.htmlState, mode: m }
                : T.localState
                  ? { state: T.localState, mode: T.localMode }
                  : { state: T, mode: $e }
            },
            indent: function (T, y, J) {
              return T.block == ue && m.indent
                ? m.indent(T.htmlState, y, J)
                : T.localState && T.localMode.indent
                  ? T.localMode.indent(T.localState, y, J)
                  : u.Pass
            },
            blankLine: ee,
            getType: X,
            blockCommentStart: '<!--',
            blockCommentEnd: '-->',
            closeBrackets: '()[]{}\'\'""``',
            fold: 'markdown',
          }
          return $e
        },
        'xml',
      ),
        u.defineMIME('text/markdown', 'markdown'),
        u.defineMIME('text/x-markdown', 'markdown'))
    })
  })()
  const Ku = /[^\\][$|]/,
    bo = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
    xo =
      /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i,
    Xu =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    Yu = /^\.{0,2}\/[^\>\s]+/,
    qn =
      /^(?:[-()/a-zA-Z0-9ァ-ヺー-ヾｦ-ﾟｰ０-９Ａ-Ｚａ-ｚぁ-ゖ゙-ゞー々ぁ-んァ-ヾ一-\u9FEF㐀-䶵﨎﨏﨑﨓﨔﨟﨡﨣﨤﨧-﨩]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d])+/
  var ko = ((d) => (
      (d[(d.NONE = 0)] = 'NONE'),
      (d[(d.NORMAL = 1)] = 'NORMAL'),
      (d[(d.WITH_SPACE = 2)] = 'WITH_SPACE'),
      d
    ))(ko || {}),
    Pt = ((d) => (
      (d[(d.NONE = 0)] = 'NONE'),
      (d[(d.SIMPLE = 1)] = 'SIMPLE'),
      (d[(d.NORMAL = 2)] = 'NORMAL'),
      d
    ))(Pt || {})
  const So = /^\s*[^\|].*?\|.*[^|]\s*$/,
    $u = /^\s*[^\|].*\|/,
    wo = /^\s*\|[^\|]+\|.+\|\s*$/,
    Zu = /^\s*\|/
  var Lo = ((d) => (
      (d[(d.NONE = 0)] = 'NONE'),
      (d[(d.FRONT_MATTER = 1)] = 'FRONT_MATTER'),
      (d[(d.FRONT_MATTER_END = 2)] = 'FRONT_MATTER_END'),
      d
    ))(Lo || {}),
    Wr = ((d) => (
      (d[(d.NONE = 0)] = 'NONE'),
      (d[(d.BARELINK = 1)] = 'BARELINK'),
      (d[(d.FOOTREF = 2)] = 'FOOTREF'),
      (d[(d.NORMAL = 3)] = 'NORMAL'),
      (d[(d.FOOTNOTE = 4)] = 'FOOTNOTE'),
      (d[(d.MAYBE_FOOTNOTE_URL = 5)] = 'MAYBE_FOOTNOTE_URL'),
      (d[(d.BARELINK2 = 6)] = 'BARELINK2'),
      (d[(d.FOOTREF2 = 7)] = 'FOOTREF2'),
      d
    ))(Wr || {})
  const Gn = {
    1: 'hmd-barelink',
    6: 'hmd-barelink2',
    2: 'hmd-barelink hmd-footref',
    4: 'hmd-footnote line-HyperMD-footnote',
    7: 'hmd-footref2',
  }
  function Hi(d) {
    ;((d.hmdTable = 0),
      (d.hmdTableColumns = []),
      (d.hmdTableID = null),
      (d.hmdTableCol = d.hmdTableRow = 0))
  }
  const Qu = /^\s+((\d+[).]|[-*+])\s+)?/,
    Ri = {
      hr: 'line-HyperMD-hr line-background-HyperMD-hr-bg hr',
      list1: 'list-1',
      list2: 'list-2',
      list3: 'list-3',
      code: 'inline-code',
      hashtag: 'hashtag meta',
    }
  ;(ge.defineMode(
    'hypermd',
    function (d, s) {
      var u = {
        front_matter: !0,
        math: !0,
        table: !0,
        toc: !0,
        orgModeMarkup: !0,
        hashtag: !1,
        fencedCodeBlockHighlighting: !0,
        name: 'markdown',
        highlightFormatting: !0,
        taskLists: !0,
        strikethrough: !0,
        emoji: !0,
        tokenTypeOverrides: Ri,
      }
      ;(Object.assign(u, s),
        u.tokenTypeOverrides !== Ri &&
          (u.tokenTypeOverrides = Object.assign({}, Ri, u.tokenTypeOverrides)),
        (u.name = 'markdown'))
      var h = { htmlBlock: null },
        p = ge.getMode(d, u),
        m = { ...p }
      ;((m.startState = function () {
        var g = p.startState()
        return (
          Hi(g),
          (g.hmdOverride = null),
          (g.hmdInnerExitChecker = null),
          (g.hmdInnerMode = null),
          (g.hmdLinkType = 0),
          (g.hmdNextMaybe = u.front_matter ? 1 : 0),
          (g.hmdNextState = null),
          (g.hmdNextStyle = null),
          (g.hmdNextPos = null),
          (g.hmdHashtag = 0),
          g
        )
      }),
        (m.copyState = function (g) {
          var S = p.copyState(g)
          const _ = [
            'hmdLinkType',
            'hmdNextMaybe',
            'hmdTable',
            'hmdTableID',
            'hmdTableCol',
            'hmdTableRow',
            'hmdOverride',
            'hmdInnerMode',
            'hmdInnerStyle',
            'hmdInnerExitChecker',
            'hmdNextPos',
            'hmdNextState',
            'hmdNextStyle',
            'hmdHashtag',
          ]
          for (const R of _) S[R] = g[R]
          return (
            (S.hmdTableColumns = g.hmdTableColumns.slice(0)),
            g.hmdInnerMode && (S.hmdInnerState = ge.copyState(g.hmdInnerMode, g.hmdInnerState)),
            S
          )
        }),
        (m.blankLine = function (g) {
          var S,
            _ = g.hmdInnerMode
          return (
            _ ? _.blankLine && (S = _.blankLine(g.hmdInnerState)) : (S = p.blankLine(g)),
            S || (S = ''),
            g.code === -1 && (S += ' line-HyperMD-codeblock line-background-HyperMD-codeblock-bg'),
            Hi(g),
            S.trim() || null
          )
        }),
        (m.indent = function (g, S) {
          var _ = g.hmdInnerMode || p,
            R = _.indent
          return typeof R == 'function' ? R.apply(_, arguments) : ge.Pass
        }),
        (m.innerMode = function (g) {
          return g.hmdInnerMode ? { mode: g.hmdInnerMode, state: g.hmdInnerState } : p.innerMode(g)
        }),
        (m.token = function (g, S) {
          if (S.hmdOverride) return S.hmdOverride(g, S)
          if (S.hmdNextMaybe === 1) {
            if (g.string === '---')
              return (
                (S.hmdNextMaybe = 2),
                L(g, S, 'yaml', {
                  style: 'hmd-frontmatter',
                  fallbackMode: () => b('---'),
                  exitChecker: function (Y, ue) {
                    return Y.string === '---' ? ((ue.hmdNextMaybe = 0), { endPos: 3 }) : null
                  },
                })
              )
            S.hmdNextMaybe = 0
          }
          const _ = S.f === h.htmlBlock,
            R = S.code === -1,
            F = g.start === 0,
            P = S.linkText,
            D = S.linkHref
          let C = !(R || _),
            O = C && !(S.code || S.indentedCode || S.linkHref)
          var N = '',
            I
          if (C) {
            if (u.math && O && (I = g.match(/^\${1,2}/, !1))) {
              let Y = I[0],
                ue = Y.length
              if (ue === 2 || g.string.slice(g.pos).match(/[^\\]\$/)) {
                let xe = ge.getMode(d, { name: 'stex' }),
                  X = xe.name !== 'stex'
                return (
                  (N += L(g, S, xe, {
                    style: 'math',
                    skipFirstToken: X,
                    fallbackMode: () => b(Y),
                    exitChecker: v(Y, {
                      style: 'formatting formatting-math formatting-math-end math-' + ue,
                    }),
                  })),
                  X && (g.pos += I[0].length),
                  (N += ' formatting formatting-math formatting-math-begin math-' + ue),
                  N
                )
              }
            }
            if (F && u.orgModeMarkup && (I = g.match(/^\#\+(\w+\:?)\s*/)))
              return (
                g.eol() ||
                  (S.hmdOverride = (Y, ue) => (
                    Y.skipToEnd(),
                    (ue.hmdOverride = null),
                    'string hmd-orgmode-markup'
                  )),
                'meta formatting-hmd-orgmode-markup hmd-orgmode-markup line-HyperMD-orgmode-markup'
              )
            if (F && u.toc && g.match(/^\[TOCM?\]\s*$/i)) return 'meta line-HyperMD-toc hmd-toc'
            if (O && !S.hmdLinkType && (g.match(xo) || g.match(Xu))) return 'url'
          }
          ;(S.hmdNextState
            ? ((g.pos = S.hmdNextPos),
              (N += ' ' + (S.hmdNextStyle || '')),
              Object.assign(S, S.hmdNextState),
              (S.hmdNextState = null),
              (S.hmdNextStyle = null),
              (S.hmdNextPos = null))
            : (N += ' ' + (p.token(g, S) || '')),
            S.hmdHashtag !== 0 && (N += ' ' + u.tokenTypeOverrides.hashtag),
            !h.htmlBlock && S.htmlState && (h.htmlBlock = S.f))
          const z = S.f === h.htmlBlock,
            ce = S.code === -1
          ;((C = C && !(z || ce)),
            (O = O && C && !(S.code || S.indentedCode || S.linkHref)),
            O && (I = g.current().match(Ku)) && (g.pos = g.start + I.index + 1))
          var ee = g.current()
          if (
            (z != _ &&
              (z ? ((N += ' hmd-html-begin'), (h.htmlBlock = S.f)) : (N += ' hmd-html-end')),
            (R || ce) &&
              ((!S.localMode || !R) && (N = N.replace('inline-code', '')),
              (N += ' line-HyperMD-codeblock line-background-HyperMD-codeblock-bg'),
              ce !== R &&
                (ce
                  ? R ||
                    (N +=
                      ' line-HyperMD-codeblock-begin line-background-HyperMD-codeblock-begin-bg')
                  : (N += ' line-HyperMD-codeblock-end line-background-HyperMD-codeblock-end-bg'))),
            C)
          ) {
            let Y = S.hmdTable
            if (
              (F &&
                Y &&
                ((Y == 1 ? $u : Zu).test(g.string)
                  ? ((S.hmdTableCol = 0), S.hmdTableRow++)
                  : Hi(S)),
              F &&
                S.header &&
                (/^(?:---+|===+)\s*$/.test(g.string) && S.prevLine && S.prevLine.header
                  ? (N += ' line-HyperMD-header-line line-HyperMD-header-line-' + S.header)
                  : (N += ' line-HyperMD-header line-HyperMD-header-' + S.header)),
              S.indentedCode && (N += ' hmd-indented-code'),
              S.quote)
            ) {
              if (
                (g.eol() &&
                  ((N += ' line-HyperMD-quote line-HyperMD-quote-' + S.quote),
                  /^ {0,3}\>/.test(g.string) || (N += ' line-HyperMD-quote-lazy')),
                F && (I = ee.match(/^\s+/)))
              )
                return ((g.pos = I[0].length), (N += ' hmd-indent-in-quote'), N.trim())
              ;/^>\s+$/.test(ee) &&
                g.peek() != '>' &&
                ((g.pos = g.start + 1),
                (ee = '>'),
                (S.hmdOverride = (oe, V) => (
                  oe.match(Qu),
                  (V.hmdOverride = null),
                  'hmd-indent-in-quote line-HyperMD-quote line-HyperMD-quote-' + V.quote
                )))
            }
            let ue = (S.listStack[S.listStack.length - 1] || 0) + 3,
              xe = F && /^\s+$/.test(ee) && (S.list !== !1 || g.indentation() <= ue),
              X = S.list && /formatting-list/.test(N)
            if (X || (xe && (S.list !== !1 || g.match(bo, !1)))) {
              let oe = (S.listStack && S.listStack.length) || 0
              if (xe) {
                if (g.match(bo, !1)) S.list === !1 && oe++
                else {
                  for (; oe > 0 && g.pos < S.listStack[oe - 1]; ) oe--
                  if (!oe) return N.trim() || null
                  N += ` line-HyperMD-list-line-nobullet line-HyperMD-list-line line-HyperMD-list-line-${oe}`
                }
                N += ` hmd-list-indent hmd-list-indent-${oe}`
              } else X && (N += ` line-HyperMD-list-line line-HyperMD-list-line-${oe}`)
            }
            if (
              (P !== S.linkText &&
                (P
                  ? (S.hmdLinkType in Gn && (N += ' ' + Gn[S.hmdLinkType]),
                    S.hmdLinkType === 4 ? (S.hmdLinkType = 5) : (S.hmdLinkType = 0))
                  : ((I = g.match(/^([^\]]+)\](\(| ?\[|\:)?/, !1)),
                    I
                      ? I[2]
                        ? I[2] === ':'
                          ? (S.hmdLinkType = 4)
                          : (I[2] === '[' || I[2] === ' [') &&
                              g.string.charAt(g.pos + I[0].length) === ']'
                            ? (S.hmdLinkType = 6)
                            : (S.hmdLinkType = 3)
                        : I[1].charAt(0) === '^'
                          ? (S.hmdLinkType = 2)
                          : (S.hmdLinkType = 1)
                      : (S.hmdLinkType = 1))),
              D !== S.linkHref &&
                (D
                  ? S.hmdLinkType && ((N += ' ' + Gn[S.hmdLinkType]), (S.hmdLinkType = 0))
                  : ee === '[' && g.peek() !== ']' && (S.hmdLinkType = 7)),
              S.hmdLinkType !== 0 &&
                (S.hmdLinkType in Gn && (N += ' ' + Gn[S.hmdLinkType]),
                S.hmdLinkType === 5 &&
                  (/^(?:\]\:)?\s*$/.test(ee) ||
                    (xo.test(ee) || Yu.test(ee)
                      ? (N += ' hmd-footnote-url')
                      : (N = N.replace('string url', '')),
                    (S.hmdLinkType = 0)))),
              /formatting-escape/.test(N) && ee.length > 1)
            ) {
              let oe = ee.length - 1,
                V = N.replace('formatting-escape', 'escape') + ' hmd-escape-char'
              return (
                (S.hmdOverride = (se, A) => ((se.pos += oe), (A.hmdOverride = null), V.trim())),
                (N += ' hmd-escape-backslash'),
                (g.pos -= oe),
                N
              )
            }
            if (!N.trim() && u.table) {
              let oe = !1
              if ((ee.charAt(0) === '|' && ((g.pos = g.start + 1), (ee = '|'), (oe = !0)), oe)) {
                if (!Y) {
                  So.test(g.string) ? (Y = 1) : wo.test(g.string) && (Y = 2)
                  let V
                  if (Y) {
                    let se = g.lookAhead(1)
                    if (
                      (Y === 2
                        ? wo.test(se)
                          ? (se = se.replace(/^\s*\|/, '').replace(/\|\s*$/, ''))
                          : (Y = 0)
                        : Y === 1 && (So.test(se) || (Y = 0)),
                      Y)
                    ) {
                      V = se.split('|')
                      for (let A = 0; A < V.length; A++) {
                        let G = V[A]
                        if (/^\s*--+\s*:\s*$/.test(G)) G = 'right'
                        else if (/^\s*:\s*--+\s*$/.test(G)) G = 'left'
                        else if (/^\s*:\s*--+\s*:\s*$/.test(G)) G = 'center'
                        else if (/^\s*--+\s*$/.test(G)) G = 'default'
                        else {
                          Y = 0
                          break
                        }
                        V[A] = G
                      }
                    }
                  }
                  Y &&
                    ((S.hmdTable = Y),
                    (S.hmdTableColumns = V),
                    (S.hmdTableID = 'T' + g.lineOracle.line),
                    (S.hmdTableRow = S.hmdTableCol = 0))
                }
                if (Y) {
                  const V = S.hmdTableColumns.length - 1
                  if (
                    Y === 2 &&
                    ((S.hmdTableCol === 0 && /^\s*\|$/.test(g.string.slice(0, g.pos))) ||
                      g.match(/^\s*$/, !1))
                  )
                    N += ' hmd-table-sep hmd-table-sep-dummy'
                  else if (S.hmdTableCol < V) {
                    const se = S.hmdTableRow,
                      A = S.hmdTableCol++
                    ;(A == 0 &&
                      (N += ` line-HyperMD-table_${S.hmdTableID} line-HyperMD-table-${Y} line-HyperMD-table-row line-HyperMD-table-row-${se}`),
                      (N += ` hmd-table-sep hmd-table-sep-${A}`))
                  }
                }
              }
            }
            if ((Y && S.hmdTableRow === 1 && /emoji/.test(N) && (N = ''), O && ee === '<')) {
              let oe = null
              if (
                (g.match(/^\![A-Z]+/)
                  ? (oe = '>')
                  : g.match('?')
                    ? (oe = '?>')
                    : g.match('![CDATA[') && (oe = ']]>'),
                oe != null)
              )
                return L(g, S, null, { endTag: oe, style: (N + ' comment hmd-cdata-html').trim() })
            }
            if (u.hashtag && O)
              switch (S.hmdHashtag) {
                case 0:
                  if (
                    ee === '#' &&
                    !S.linkText &&
                    !S.image &&
                    (F || /^\s*$/.test(g.string.charAt(g.start - 1)))
                  ) {
                    let V = g.string.slice(g.pos).replace(/\\./g, '')
                    if ((I = qn.exec(V))) {
                      ;(/^\d+$/.test(I[0]) ? (S.hmdHashtag = 0) : (S.hmdHashtag = 1),
                        (V = V.slice(I[0].length)))
                      do {
                        if (V[0] === '#' && (V.length === 1 || !qn.test(V[1]))) {
                          S.hmdHashtag = 2
                          break
                        }
                        if (
                          (I = V.match(/^\s+/)) &&
                          ((V = V.slice(I[0].length)), (I = V.match(qn)))
                        ) {
                          V = V.slice(I[0].length)
                          continue
                        }
                        break
                      } while (!0)
                    }
                    S.hmdHashtag &&
                      (N +=
                        ' formatting formatting-hashtag hashtag-begin ' +
                        u.tokenTypeOverrides.hashtag)
                  }
                  break
                case 1:
                  let oe = !1
                  if (!/formatting/.test(N) && !/^\s*$/.test(ee)) {
                    I = ee.match(qn)
                    let V = ee.length - (I ? I[0].length : 0)
                    V > 0 && (g.backUp(V), (oe = !0))
                  }
                  ;(oe || (oe = g.eol()),
                    oe || (oe = !qn.test(g.peek())),
                    oe && ((N += ' hashtag-end'), (S.hmdHashtag = 0)))
                  break
                case 2:
                  ee === '#' &&
                    ((N = N.replace(/\sformatting-header(?:-\d+)?/g, '')),
                    (N += ' formatting formatting-hashtag hashtag-end'),
                    (S.hmdHashtag = 0))
                  break
              }
          }
          return N.trim() || null
        }))
      function x(g, S) {
        const _ = S.hmdInnerExitChecker(g, S),
          R = S.hmdInnerStyle
        let F = ((!_ || !_.skipInnerMode) && S.hmdInnerMode.token(g, S.hmdInnerState)) || ''
        return (
          R && (F += ' ' + R),
          _ &&
            (_.style && (F += ' ' + _.style),
            _.endPos && (g.pos = _.endPos),
            (S.hmdInnerExitChecker = null),
            (S.hmdInnerMode = null),
            (S.hmdInnerState = null),
            (S.hmdOverride = null)),
          F.trim() || null
        )
      }
      function b(g) {
        return {
          token(S) {
            var _ = S.string.indexOf(g, S.start)
            return (
              _ === -1
                ? S.skipToEnd()
                : _ === 0
                  ? (S.pos += g.length)
                  : ((S.pos = _), S.string.charAt(_ - 1) === '\\' && S.pos++),
              null
            )
          },
        }
      }
      function v(g, S) {
        return (
          S || (S = {}),
          function (_, R) {
            return _.string.substr(_.start, g.length) === g
              ? ((S.endPos = _.start + g.length), S)
              : null
          }
        )
      }
      function L(g, S, _, R) {
        if (
          (typeof _ == 'string' && (_ = ge.getMode(d, _)),
          (!_ || _.name === 'null') &&
            ('endTag' in R
              ? (_ = b(R.endTag))
              : (_ = typeof R.fallbackMode == 'function' && R.fallbackMode()),
            !_))
        )
          throw new Error('no mode')
        ;((S.hmdInnerExitChecker = 'endTag' in R ? v(R.endTag) : R.exitChecker),
          (S.hmdInnerStyle = R.style),
          (S.hmdInnerMode = _),
          (S.hmdOverride = x),
          (S.hmdInnerState = ge.startState(_)))
        var F = R.style || ''
        return (R.skipFirstToken || (F += ' ' + _.token(g, S.hmdInnerState)), F.trim())
      }
      return m
    },
    'hypermd',
  ),
    ge.defineMIME('text/x-hypermd', 'hypermd'))
  const Ju = Object.freeze(
    Object.defineProperty(
      { __proto__: null, HashtagType: ko, LinkType: Wr, NextMaybe: Lo, TableType: Pt },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
  class Vu {
    constructor(s) {
      Z(this, 'caches', new Array())
      ;((this.cm = s),
        s.on('change', (u, h) => {
          let p = h.from.line
          this.caches.length > p && this.caches.splice(p)
        }))
    }
    getTokenTypes(s, u) {
      let h = u ? u.state : {},
        p = s.state,
        m = ' ' + s.type + ' '
      return {
        em: p.em ? 1 : h.em ? 2 : 0,
        strikethrough: p.strikethrough ? 1 : h.strikethrough ? 2 : 0,
        strong: p.strong ? 1 : h.strong ? 2 : 0,
        code: p.code ? 1 : h.code ? 2 : 0,
        linkText: p.linkText
          ? p.hmdLinkType === Wr.NORMAL || p.hmdLinkType === Wr.BARELINK2
            ? 1
            : 0
          : h.linkText
            ? 2
            : 0,
        linkHref:
          p.linkHref && !p.linkText
            ? 1
            : !p.linkHref && !p.linkText && h.linkHref && !h.linkText
              ? 2
              : 0,
        task: m.indexOf(' formatting-task ') !== -1 ? 3 : 0,
        hashtag: p.hmdHashtag ? 1 : h.hmdHashtag ? 2 : 0,
      }
    }
    extract(s, u) {
      if (!u) {
        let v = this.caches[s]
        if (v) return v
      }
      const h = this.cm.getLineTokens(s),
        p = this.cm.getLine(s),
        m = p.length
      let x = [],
        b = {}
      for (let v = 0; v < h.length; v++) {
        const L = h[v],
          g = this.getTokenTypes(L, h[v - 1])
        for (let S in g) {
          let _ = b[S]
          ;(g[S] & 1 &&
            (_ ||
              ((_ = {
                type: S,
                begin: L.start,
                end: m,
                head: L,
                head_i: v,
                tail: h[h.length - 1],
                tail_i: h.length - 1,
                text: p.slice(L.start),
              }),
              x.push(_),
              (b[S] = _))),
            g[S] & 2 &&
              _ &&
              ((_.tail = L),
              (_.tail_i = v),
              (_.end = L.end),
              (_.text = _.text.slice(0, _.end - _.begin)),
              (b[S] = null)))
        }
      }
      return ((this.caches[s] = x), x)
    }
    findSpansAt(s) {
      let u = this.extract(s.line),
        h = s.ch,
        p = []
      for (let m = 0; m < u.length; m++) {
        let x = u[m]
        if (x.begin > h) break
        h >= x.begin && x.end >= h && p.push(x)
      }
      return p
    }
    findSpanWithTypeAt(s, u) {
      let h = this.extract(s.line),
        p = s.ch
      for (let m = 0; m < h.length; m++) {
        let x = h[m]
        if (x.begin > p) break
        if (p >= x.begin && x.end >= p && x.type === u) return x
      }
      return null
    }
  }
  const Pi = so('LineSpanExtractor')
  function Ii(d) {
    return Pi in d ? d[Pi] : (d[Pi] = new Vu(d))
  }
  class ef {
    constructor(s) {
      Z(this, 'cm')
    }
  }
  function Ve(d, s, u) {
    return function (h) {
      if ((h.hmd || (h.hmd = {}), !h.hmd[d])) {
        var p = new s(h)
        if (((h.hmd[d] = p), u)) for (var m in u) p[m] = u[m]
        return p
      }
      return h.hmd[d]
    }
  }
  const tf = Object.freeze(
    Object.defineProperty({ __proto__: null, Addon: ef, Getter: Ve }, Symbol.toStringTag, {
      value: 'Module',
    }),
  )
  function nf(d, s, u, h) {
    var p = new XMLHttpRequest(),
      m = new FormData()
    for (var x in s) m.append(x, s[x])
    ;((p.onreadystatechange = function () {
      if (this.readyState == 4) {
        var b = p.responseText
        try {
          b = JSON.parse(p.responseText)
        } catch {}
        ;/^20\d/.test(p.status + '') ? u(b, null) : u(null, b)
      }
    }),
      p.open(h || 'POST', d, !0),
      p.send(m))
  }
  const Un = { byDrop: !1, byPaste: !1, fileHandler: null },
    Co = { byPaste: !0, byDrop: !0 }
  ;((We.hmdInsertFile = Co),
    ge.defineOption('hmdInsertFile', Un, function (d, s) {
      if (!s || typeof s == 'boolean') {
        let p = !!s
        s = { byDrop: p, byPaste: p }
      } else typeof s == 'function' && (s = { byDrop: !0, byPaste: !0, fileHandler: s })
      var u = _o(d)
      for (var h in Un) u[h] = h in s ? s[h] : Un[h]
    }))
  class To {
    constructor(s) {
      Z(this, 'byPaste')
      Z(this, 'byDrop')
      Z(this, 'fileHandler')
      Z(this, 'pasteHandle', (s, u) => {
        this.doInsert(u.clipboardData || window.clipboardData, !0) && u.preventDefault()
      })
      Z(this, 'dropHandle', (p, u) => {
        var h = this,
          p = this.cm,
          m = !1
        ;(p.operation(function () {
          var x = p.coordsChar({ left: u.clientX, top: u.clientY }, 'window')
          ;(p.setCursor(x), (m = h.doInsert(u.dataTransfer, !1)))
        }),
          m && u.preventDefault())
      })
      ;((this.cm = s),
        new pt(
          () => this.cm.on('paste', this.pasteHandle),
          () => this.cm.off('paste', this.pasteHandle),
        ).bind(this, 'byPaste', !0),
        new pt(
          () => this.cm.on('drop', this.dropHandle),
          () => this.cm.off('drop', this.dropHandle),
        ).bind(this, 'byDrop', !0))
    }
    doInsert(s, u) {
      const h = this.cm
      if (
        (u && s.types && s.types.some((b) => b.slice(0, 5) === 'text/')) ||
        !s ||
        !s.files ||
        s.files.length === 0
      )
        return !1
      const p = s.files
      var m = this.fileHandler,
        x = !1
      return typeof m != 'function'
        ? !1
        : (h.operation(() => {
            h.replaceSelection('.')
            var b = h.getCursor(),
              v = { line: b.line, ch: b.ch - 1 },
              L = document.createElement('span'),
              g = h.markText(v, b, { replacedWith: L, clearOnEnter: !1, handleMouseEvents: !1 }),
              S = {
                marker: g,
                cm: h,
                finish: (_, R) =>
                  h.operation(() => {
                    var F = g.find(),
                      P = F.from,
                      D = F.to
                    ;(h.replaceRange(_, P, D),
                      g.clear(),
                      typeof R == 'number' && h.setCursor({ line: P.line, ch: P.ch + R }))
                  }),
                setPlaceholder: (_) => {
                  ;(L.childNodes.length > 0 && L.removeChild(L.firstChild),
                    L.appendChild(_),
                    g.changed())
                },
                resize() {
                  g.changed()
                },
              }
            ;((x = m(p, S)), x || g.clear())
          }),
          x)
    }
  }
  const _o = Ve('InsertFile', To, Un),
    rf = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          InsertFile: To,
          ajaxUpload: nf,
          defaultOption: Un,
          getAddon: _o,
          suggestedOption: Co,
        },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    )
  function vn(d) {
    d = d.trim()
    var s = d,
      u = '',
      h = d.match(/^(\S+)\s+("(?:[^"\\]+|\\.)+"|[^"\s].*)/)
    return (
      h &&
        ((s = h[1]),
        (u = h[2]),
        u.charAt(0) === '"' && (u = u.substr(1, u.length - 2).replace(/\\"/g, '"'))),
      { url: s, title: u }
    )
  }
  const Wi = {
    hmdReadLink(d, s) {
      return Br(this).read(d, s)
    },
    hmdResolveURL(d, s) {
      return Br(this).resolve(d, s)
    },
    hmdSplitLink: vn,
  }
  for (var Do in Wi) ge.defineExtension(Do, Wi[Do])
  const Kn = { baseURI: '' },
    Mo = { baseURI: '' }
  ;((We.hmdReadLink = Mo),
    ge.defineOption('hmdReadLink', Kn, function (d, s) {
      ;(!s || typeof s == 'string') && (s = { baseURI: s })
      var u = Br(d)
      for (var h in Kn) u[h] = h in s ? s[h] : Kn[h]
    }))
  class Oo {
    constructor(s) {
      Z(this, 'baseURI')
      Z(this, 'cache', {})
      ;((this.cm = s),
        s.on(
          'changes',
          pn(() => this.rescan(), 500),
        ),
        this.rescan())
    }
    read(s, u) {
      var h = this.cache[s.trim().toLowerCase()] || [],
        p
      typeof u != 'number' && (u = 1e9)
      for (var m = 0; m < h.length && ((p = h[m]), !(p.line > u)); m++);
      return p
    }
    rescan() {
      const s = this.cm
      var u = (this.cache = {})
      s.eachLine((h) => {
        var p = h.text,
          m = /^(?:>\s+)*>?\s{0,3}\[([^\]]+)\]:\s*(.+)$/.exec(p)
        if (m) {
          var x = m[1].trim().toLowerCase(),
            b = m[2]
          ;(u[x] || (u[x] = []), u[x].push({ line: h.lineNo(), content: b }))
        }
      })
    }
    resolve(s, u) {
      const h =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        p = /^(?:[\w-]+\:\/*|\/\/)[^\/]+/,
        m = /\/[^\/]+(?:\/+\.?)*$/
      if (!s) return s
      if (h.test(s)) return 'mailto:' + s
      var x,
        b = ''
      if (((u = u || this.baseURI), !u || p.test(s))) return s
      for (
        (x = u.match(p)) && ((b = x[0]), (u = u.slice(b.length)));
        (x = s.match(/^(\.{1,2})([\/\\]+)/));
      )
        ((s = s.slice(x[0].length)), x[1] == '..' && (u = u.replace(m, '')))
      return (
        s.charAt(0) === '/' && b ? (s = b + s) : (/\/$/.test(u) || (u += '/'), (s = b + u + s)),
        s
      )
    }
  }
  const Br = Ve('ReadLink', Oo, Kn),
    lf = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Extensions: Wi,
          ReadLink: Oo,
          defaultOption: Kn,
          getAddon: Br,
          splitLink: vn,
          suggestedOption: Mo,
        },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    )
  var of =
    typeof marked == 'function'
      ? marked
      : (d) => (
          (d = d.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/  /g, ' &nbsp;')),
          '<pre>' + d + '</pre>'
        )
  function Bi(d, s) {
    return s ? of(s) : null
  }
  const Xn = { enabled: !1, xOffset: 10, convertor: Bi },
    Ao = { enabled: !0 }
  ;((We.hmdHover = Ao),
    ge.defineOption('hmdHover', Xn, function (d, s) {
      !s || typeof s == 'boolean'
        ? (s = { enabled: !!s })
        : typeof s == 'function' && (s = { enabled: !0, convertor: s })
      var u = No(d)
      for (var h in Xn) u[h] = h in s ? s[h] : Xn[h]
    }))
  class Eo {
    constructor(s) {
      Z(this, 'xOffset')
      Z(this, 'convertor')
      Z(this, 'enabled')
      Z(this, 'lineDiv')
      Z(this, 'tooltipDiv')
      Z(this, 'tooltipContentDiv')
      Z(this, 'tooltipIndicator')
      ;((this.cm = s),
        new pt(
          () => {
            u.addEventListener('mouseenter', x, !0)
          },
          () => {
            ;(u.removeEventListener('mouseenter', x, !0), this.hideInfo())
          },
        ).bind(this, 'enabled', !0))
      var u = s.display.lineDiv
      this.lineDiv = u
      var h = document.createElement('div'),
        p = document.createElement('div'),
        m = document.createElement('div')
      ;(h.setAttribute('style', 'position:absolute;z-index:99'),
        h.setAttribute('class', 'HyperMD-hover'),
        h.setAttribute('cm-ignore-events', 'true'),
        p.setAttribute('class', 'HyperMD-hover-content'),
        h.appendChild(p),
        m.setAttribute('class', 'HyperMD-hover-indicator'),
        h.appendChild(m),
        (this.tooltipDiv = h),
        (this.tooltipContentDiv = p),
        (this.tooltipIndicator = m))
      const x = this.mouseenter.bind(this)
    }
    mouseenter(s) {
      var u = this.cm,
        h = s.target,
        p = h.className
      if (
        h == this.tooltipDiv ||
        (h.compareDocumentPosition && (h.compareDocumentPosition(this.tooltipDiv) & 8) == 8)
      )
        return
      var m
      if (
        h.nodeName !== 'SPAN' ||
        !(m = p.match(/(?:^|\s)cm-(hmd-barelink2?|hmd-footref2)(?:\s|$)/))
      ) {
        this.hideInfo()
        return
      }
      var x = u.coordsChar({ left: s.clientX, top: s.clientY }, 'window')
      let b = null
      var v = null
      const L = m[1]
      var g = Rt(u, x, L)
      g &&
        ((b = u.getRange(g.from, g.to)),
        (b = b.slice(1, -1)),
        b && (v = u.hmdReadLink(b, x.line) || null))
      var S = this.convertor || Bi,
        _ = S(b, (v && v.content) || null)
      if (!_) {
        this.hideInfo()
        return
      }
      this.showInfo(_, h)
    }
    showInfo(s, u) {
      const h = u.getBoundingClientRect(),
        p = this.lineDiv.getBoundingClientRect(),
        m = this.tooltipDiv
      var x = this.xOffset
      ;((this.tooltipContentDiv.innerHTML = s),
        (m.style.left = h.left - p.left - x + 'px'),
        this.lineDiv.appendChild(m))
      var b = m.getBoundingClientRect()
      ;(b.right > p.right && ((x = b.right - p.right), (m.style.left = h.left - p.left - x + 'px')),
        (m.style.top = h.top - p.top - b.height + 'px'),
        (this.tooltipIndicator.style.marginLeft = x + 'px'))
    }
    hideInfo() {
      this.tooltipDiv.parentElement == this.lineDiv && this.lineDiv.removeChild(this.tooltipDiv)
    }
  }
  const No = Ve('Hover', Eo, Xn),
    af = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Hover: Eo,
          defaultConvertor: Bi,
          defaultOption: Xn,
          getAddon: No,
          suggestedOption: Ao,
        },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    ),
    Fo = (d, s) => {
      var { text: u, type: h, url: p, pos: m } = d
      if (h === 'url' || h === 'link') {
        var x = u.match(/\[[^\[\]]+\](?:\[\])?$/)
        x && d.altKey
          ? ((u = x[0]), u.slice(-2) === '[]' && (u = u.slice(0, -2)), (h = 'footref'))
          : (d.ctrlKey || d.altKey) && p && window.open(p, '_blank')
      }
      if (h === 'todo') {
        let { from: b, to: v } = Rt(s, m, 'formatting-task'),
          L = s.getRange(b, v)
        ;((L = L === '[ ]' ? '[x]' : '[ ]'), s.replaceRange(L, b, v))
      }
      if (h === 'footref' && (d.ctrlKey || d.altKey)) {
        const b = u.slice(1, -1),
          v = s.hmdReadLink(b, m.line)
        v && (sf(s, v.line, m), s.setCursor({ line: v.line, ch: 0 }))
      }
    },
    sf = (function () {
      var d = null
      function s(h, p) {
        ;(d && (h.clearGutter('HyperMD-goback'), d.clear()), (d = h.setBookmark(p)))
      }
      function u(h) {
        var p = h.options.gutters.indexOf('HyperMD-goback') != -1
        if (!p) return null
        var m = document.createElement('div')
        ;((m.className = 'HyperMD-goback-button'),
          m.addEventListener('click', function () {
            ;(h.setCursor(d.find()), h.clearGutter('HyperMD-goback'), d.clear(), (d = null))
          }))
        var x = h.display.gutters.children
        return (
          (x = x[x.length - 1]),
          (x = x.offsetLeft + x.offsetWidth),
          (m.style.width = x + 'px'),
          (m.style.marginLeft = -x + 'px'),
          m
        )
      }
      return function (h, p, m) {
        var x = u(h)
        x && ((x.innerHTML = m.line + 1 + ''), s(h, m), h.setGutterMarker(p, 'HyperMD-goback', x))
      }
    })(),
    Yn = { enabled: !1, handler: null },
    Ho = { enabled: !0 }
  ;((We.hmdClick = Ho),
    ge.defineOption('hmdClick', Yn, function (d, s) {
      !s || typeof s == 'boolean'
        ? (s = { enabled: !!s })
        : typeof s == 'function' && (s = { enabled: !0, handler: s })
      var u = Po(d)
      for (var h in Yn) u[h] = h in s ? s[h] : Yn[h]
    }))
  class Ro {
    constructor(s) {
      Z(this, 'enabled')
      Z(this, 'handler')
      Z(this, 'el')
      Z(this, 'lineDiv')
      Z(this, '_KeyDetectorActive')
      Z(this, '_mouseMove_keyDetect', (s) => {
        var u = this.el,
          h = u.className,
          p = h
        const m = 'HyperMD-with-alt',
          x = 'HyperMD-with-ctrl'
        ;(!s.altKey && h.indexOf(m) >= 0 && (p = h.replace(m, '')),
          !s.ctrlKey && h.indexOf(x) >= 0 && (p = h.replace(x, '')),
          !s.altKey &&
            !s.ctrlKey &&
            ((this._KeyDetectorActive = !1),
            u.removeEventListener('mousemove', this._mouseMove_keyDetect, !1)),
          h != p && (u.className = p.trim()))
      })
      Z(this, '_keyDown', (s) => {
        var u = s.keyCode || s.which,
          h = ''
        ;(u == 17 && (h = 'HyperMD-with-ctrl'), u == 18 && (h = 'HyperMD-with-alt'))
        var p = this.el
        ;(h && p.className.indexOf(h) == -1 && (p.className += ' ' + h),
          this._KeyDetectorActive ||
            ((this._KeyDetectorActive = !0),
            this.el.addEventListener('mousemove', this._mouseMove_keyDetect, !1)))
      })
      Z(this, '_cinfo')
      Z(this, '_mouseUp', (s) => {
        const u = this._cinfo
        ;(this.lineDiv.removeEventListener('mouseup', this._mouseUp, !1),
          !(Math.abs(s.clientX - u.clientX) > 5 || Math.abs(s.clientY - u.clientY) > 5) &&
            ((typeof this.handler == 'function' && this.handler(u, this.cm) === !1) ||
              Fo(u, this.cm)))
      })
      Z(this, '_mouseDown', (s) => {
        var { button: u, clientX: h, clientY: p, ctrlKey: m, altKey: x, shiftKey: b } = s,
          v = this.cm
        if (s.target.tagName !== 'PRE') {
          var L = v.coordsChar({ left: h, top: p }, 'window'),
            g,
            S = v.getTokenAt(L),
            _ = S.state,
            R = ' ' + S.type + ' ',
            F,
            P = null,
            D,
            C
          if ((F = R.match(/\s(image|link|url)\s/))) {
            P = F[1]
            const O = /\shmd-barelink\s/.test(R)
            if (
              (_.linkText
                ? ((g = Rt(v, L, (I) => I.state.linkText || /(?:\s|^)link(?:\s|$)/.test(I.type))),
                  (P = 'link'))
                : (g = Rt(v, L, P)),
              /^(?:image|link)$/.test(P) && !O)
            ) {
              let I = Rt(v, { line: L.line, ch: g.to.ch + 1 }, 'url')
              I && (g.to = I.to)
            }
            D = v.getRange(g.from, g.to).trim()
            let N
            if (D.slice(-1) === ')' && (N = D.lastIndexOf('](')) !== -1)
              C = vn(D.slice(N + 2, -1)).url
            else if (
              (F = D.match(/[^\\]\]\s?\[([^\]]+)\]$/)) ||
              (F = D.match(/^\[(.+)\]\s?\[\]$/)) ||
              (F = D.match(/^\[(.+)\](?:\:\s*)?$/))
            ) {
              O && F[1].charAt(0) === '^' && (P = 'footref')
              let I = v.hmdReadLink(F[1], L.line)
              I ? (C = vn(I.content).url) : (C = null)
            } else
              ((F = D.match(/^\<(.+)\>$/)) || (F = D.match(/^\((.+)\)$/)) || (F = [null, D])) &&
                (C = F[1])
            C = v.hmdResolveURL(C)
          } else
            R.match(/\sformatting-task\s/)
              ? ((P = 'todo'),
                (g = Rt(v, L, 'formatting-task')),
                (g.to.ch = v.getLine(L.line).length),
                (D = v.getRange(g.from, g.to)),
                (C = null))
              : R.match(/\shashtag/) &&
                ((P = 'hashtag'),
                (g = Rt(v, L, 'hashtag')),
                (D = v.getRange(g.from, g.to)),
                (C = null))
          P !== null &&
            ((this._cinfo = {
              type: P,
              text: D,
              url: C,
              pos: L,
              button: u,
              clientX: h,
              clientY: p,
              ctrlKey: m,
              altKey: x,
              shiftKey: b,
            }),
            this.lineDiv.addEventListener('mouseup', this._mouseUp, !1))
        }
      })
      ;((this.cm = s), (this.lineDiv = s.display.lineDiv))
      var u = (this.el = s.getWrapperElement())
      new pt(
        () => {
          ;(this.lineDiv.addEventListener('mousedown', this._mouseDown, !1),
            u.addEventListener('keydown', this._keyDown, !1))
        },
        () => {
          ;(this.lineDiv.removeEventListener('mousedown', this._mouseDown, !1),
            u.removeEventListener('keydown', this._keyDown, !1))
        },
      ).bind(this, 'enabled', !0)
    }
  }
  const Po = Ve('Click', Ro, Yn),
    uf = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Click: Ro,
          defaultClickHandler: Fo,
          defaultOption: Yn,
          getAddon: Po,
          suggestedOption: Ho,
        },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    ),
    $n = { enabled: !1, convertor: null },
    Io = { enabled: !0 }
  ;((We.hmdPaste = Io),
    ge.defineOption('hmdPaste', $n, function (d, s) {
      !s || typeof s == 'boolean'
        ? (s = { enabled: !!s })
        : typeof s == 'function' && (s = { enabled: !0, convertor: s })
      var u = Bo(d)
      for (var h in $n) u[h] = h in s ? s[h] : $n[h]
    }))
  class Wo {
    constructor(s) {
      Z(this, 'enabled')
      Z(this, 'convertor')
      Z(this, 'pasteHandler', (s, u) => {
        var h = u.clipboardData || window.clipboardData,
          p = this.convertor
        if (!(!p || !h || h.types.indexOf('text/html') == -1)) {
          var m = p(h.getData('text/html'))
          m && (s.operation(s.replaceSelection.bind(s, m)), u.preventDefault())
        }
      })
      ;((this.cm = s),
        new pt(
          () => {
            s.on('paste', this.pasteHandler)
          },
          () => {
            s.off('paste', this.pasteHandler)
          },
        ).bind(this, 'enabled', !0))
    }
  }
  const Bo = Ve('Paste', Wo, $n),
    ff = Object.freeze(
      Object.defineProperty(
        { __proto__: null, Paste: Wo, defaultOption: $n, getAddon: Bo, suggestedOption: Io },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    ),
    hf = typeof Uint8Array > 'u' ? Array : Uint8Array
  var Dt = ((d) => ((d.OK = 'ok'), (d.CURSOR_INSIDE = 'ci'), (d.HAS_MARKERS = 'hm'), d))(Dt || {}),
    mn = {}
  function Qt(d, s, u, h) {
    var p = mn
    if (d in p && !h) throw new Error(`Folder ${d} already registered`)
    ;((zr[d] = !1), (jr[d] = !!u), (p[d] = s))
  }
  function Jt(d, s, u) {
    d.operation(function () {
      var h = s.find().from
      ;((h = { line: h.line, ch: h.ch + ~~u }), d.setCursor(h), d.focus(), s.clear())
    })
  }
  const zr = {},
    jr = {}
  ;((We.hmdFold = jr),
    (gn.hmdFold = !1),
    ge.defineOption('hmdFold', zr, function (d, s) {
      ;((!s || typeof s == 'boolean') && (s = s ? jr : zr),
        'customFolders' in s &&
          (console.error(
            '[HyperMD][Fold] `customFolders` is removed. To use custom folders, `registerFolder` first.',
          ),
          delete s.customFolders))
      var u = zi(d)
      for (const h in mn) u.setStatus(h, s[h])
    }))
  class zo extends jn {
    constructor(u) {
      super(u)
      Z(this, '_enabled', {})
      Z(this, 'folded', {})
      Z(this, 'startFold', pn(this.startFoldImmediately.bind(this), 100))
      Z(this, '_quickFoldHint', [])
      Z(this, '_lastCRange')
      ;((this.cm = u),
        u.on('changes', (h, p) => {
          var m = []
          for (const x of p) {
            let b = h.findMarks(x.from, x.to)
            for (const v of b) v._hmd_fold_type && m.push(v)
          }
          for (const x of m) x.clear()
          this.startFold()
        }),
        u.on('cursorActivity', (h) => {
          let p = {}
          function m(x) {
            const b = x.line
            if (b in p) p[b].ch.push(x.ch)
            else {
              let v = h.getLineHandle(x.line),
                L = v.markedSpans || [],
                g = []
              for (let S = 0; S < L.length; S++) {
                let _ = L[S].marker
                if ('_hmd_crange' in _) {
                  let R = _._hmd_crange[0].line < b ? 0 : _._hmd_crange[0].ch,
                    F = _._hmd_crange[1].line > b ? v.text.length : _._hmd_crange[1].ch
                  g.push([_, R, F])
                }
              }
              p[b] = { lineNo: b, ch: [x.ch], markers: g }
            }
          }
          h.listSelections().forEach((x) => {
            ;(m(x.anchor), m(x.head))
          })
          for (let x in p) {
            let b = p[x]
            if (b.markers.length)
              for (let v = 0; v < b.ch.length; v++) {
                const L = b.ch[v]
                for (let g = 0; g < b.markers.length; g++) {
                  let [S, _, R] = b.markers[g]
                  _ <= L && L <= R && (S.clear(), b.markers.splice(g, 1), g--)
                }
              }
          }
          this.startQuickFold()
        }))
    }
    setStatus(u, h) {
      u in mn &&
        !this._enabled[u] != !h &&
        ((this._enabled[u] = !!h), h ? this.startFold() : this.clear(u))
    }
    requestRange(u, h, p, m) {
      ;(m || (m = h), p || (p = u))
      const x = this.cm
      var b = x.findMarks(u, h)
      if (b.length !== 0) return 'hm'
      ;(this._quickFoldHint.push(u.line), (this._lastCRange = [p, m]))
      const v = x.listSelections()
      for (let L = 0; L < v.length; L++) {
        let g = Fi(v[L])
        if (Ir(this._lastCRange, g) || Ir([u, h], g)) return 'ci'
      }
      return (this._quickFoldHint.push(p.line), 'ok')
    }
    startFoldImmediately(u, h) {
      const p = this.cm
      ;((u = u || p.firstLine()),
        (h = (h || p.lastLine()) + 1),
        (this._quickFoldHint = []),
        this.setPos(u, 0, !0),
        p.operation(() =>
          p.eachLine(u, h, (m) => {
            var x = m.lineNo()
            if (x < this.lineNo) return
            x > this.lineNo && this.setPos(x, 0)
            var b = new hf(m.text.length)
            {
              let P = m.markedSpans
              if (P)
                for (let D = 0; D < P.length; ++D) {
                  let C = P[D],
                    O = C.from == null ? 0 : C.from,
                    N = C.to == null ? b.length : C.to
                  for (let I = O; I < N; I++) b[I] = 1
                }
            }
            const v = this.lineTokens
            for (; this.i_token < v.length; ) {
              var L = v[this.i_token],
                g,
                S = null,
                _ = !0
              for (let P = L.start; P < L.end; P++)
                if (b[P]) {
                  _ = !1
                  break
                }
              if (_) {
                for (g in mn) if (this._enabled[g] && (S = mn[g](this, L))) break
              }
              if (!S) this.i_token++
              else {
                var { from: R, to: F } = S.find()
                if (
                  ((this.folded[g] || (this.folded[g] = [])).push(S),
                  (S._hmd_fold_type = g),
                  (S._hmd_crange = this._lastCRange),
                  S.on('clear', (P, D) => {
                    var C = this.folded[g],
                      O
                    ;(C && (O = C.indexOf(S)) !== -1 && C.splice(O, 1),
                      this._quickFoldHint.push(P.line))
                  }),
                  R.line > x || R.ch > L.start)
                ) {
                  this.i_token++
                  let P = R.line === x ? R.ch : b.length,
                    D = F.line === x ? F.ch : b.length
                  for (let C = P; C < D; C++) b[C] = 1
                } else if (F.line !== x) {
                  this.setPos(F.line, F.ch)
                  return
                } else this.setPos(F.ch)
              }
            }
          }),
        ))
    }
    startQuickFold() {
      var u = this._quickFoldHint
      if (u.length !== 0) {
        var h = u[0],
          p = h
        for (const m of u) (h > m && (h = m), p < m && (p = m))
        ;(this.startFold.stop(), this.startFoldImmediately(h, p))
      }
    }
    clear(u) {
      this.startFold.stop()
      var h = this.folded[u]
      if (!(!h || !h.length)) for (var p; (p = h.pop()); ) p.clear()
    }
    clearAll() {
      this.startFold.stop()
      for (const p in this.folded) for (var u = this.folded[p], h; (h = u.pop()); ) h.clear()
    }
  }
  const zi = Ve('Fold', zo),
    cf = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          Fold: zo,
          RequestRangeResult: Dt,
          breakMark: Jt,
          defaultOption: zr,
          folderRegistry: mn,
          getAddon: zi,
          registerFolder: Qt,
          suggestedOption: jr,
        },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    ),
    jo = function (d, s) {
      const u = d.cm,
        h = /\bimage-marker\b/,
        p = /\bformatting-link-string\b/
      if (h.test(s.type) && s.string === '!') {
        var m = d.lineNo,
          x = d.findNext(p),
          b = d.findNext(p, x.i_token + 1)
        let _ = { line: m, ch: s.start },
          R = { line: m, ch: b.token.end }
        if (d.requestRange(_, R, _, _) === Dt.OK) {
          var v, L
          {
            let P = u.getRange({ line: m, ch: x.token.start + 1 }, { line: m, ch: b.token.start })
            if (b.token.string === ']') {
              let D = u.hmdReadLink(P, m)
              if (!D) return null
              P = D.content
            }
            ;((v = vn(P).url), (v = u.hmdResolveURL(v)))
          }
          L = u.getRange({ line: m, ch: _.ch + 2 }, { line: m, ch: x.token.start - 1 })
          var g = document.createElement('img'),
            S = u.markText(_, R, { clearOnEnter: !0, collapsed: !0, replacedWith: g })
          return (
            g.addEventListener(
              'load',
              () => {
                ;(g.classList.remove('hmd-image-loading'), S.changed())
              },
              !1,
            ),
            g.addEventListener(
              'error',
              () => {
                ;(g.classList.remove('hmd-image-loading'),
                  g.classList.add('hmd-image-error'),
                  S.changed())
              },
              !1,
            ),
            g.addEventListener('click', () => Jt(u, S), !1),
            (g.className = 'hmd-image hmd-image-loading'),
            (g.src = v),
            (g.title = L),
            S
          )
        }
      }
      return null
    }
  Qt('image', jo, !0)
  const df = Object.freeze(
      Object.defineProperty({ __proto__: null, ImageFolder: jo }, Symbol.toStringTag, {
        value: 'Module',
      }),
    ),
    qo = function (d, s) {
      const u = d.cm
      if (
        !(s.string === '[' && s.state.linkText && !s.state.linkTitle && !/\bimage\b/.test(s.type))
      )
        return null
      let h = Ii(u),
        p = h.findSpanWithTypeAt({ line: d.lineNo, ch: s.start }, 'linkText')
      if (!p) return null
      let m = h.findSpanWithTypeAt({ line: d.lineNo, ch: p.end + 1 }, 'linkHref')
      if (!m) return null
      const x = { line: d.lineNo, ch: m.begin },
        b = { line: d.lineNo, ch: m.end },
        v = { line: d.lineNo, ch: p.begin }
      if (d.requestRange(x, b, v, x) !== Dt.OK) return null
      var g = u.getRange(x, b),
        { url: S, title: _ } = vn(g.substr(1, g.length - 2)),
        R = document.createElement('span')
      ;(R.setAttribute('class', 'hmd-link-icon'),
        R.setAttribute(
          'title',
          S +
            `
` +
            _,
        ),
        R.setAttribute('data-url', S))
      var F = u.markText(x, b, { collapsed: !0, replacedWith: R })
      return (R.addEventListener('click', () => Jt(u, F), !1), F)
    }
  Qt('link', qo, !0)
  const pf = Object.freeze(
    Object.defineProperty({ __proto__: null, LinkFolder: qo }, Symbol.toStringTag, {
      value: 'Module',
    }),
  )
  var Zn = {}
  function gf(d, s) {
    if (!(!d || !d.name || !d.renderer)) {
      var u = d.name,
        h = d.pattern,
        p = Zn
      if (u in p && !s) throw new Error(`CodeRenderer ${u} already exists`)
      if (typeof h == 'string') {
        let x = h.toLowerCase()
        h = (b) => b.toLowerCase() === x
      } else h instanceof RegExp && (h = (x) => d.pattern.test(x))
      var m = { name: u, suggested: !!d.suggested, pattern: h, renderer: d.renderer }
      ;((p[u] = m), (Qn[u] = !1), (qr[u] = m.suggested))
    }
  }
  const Go = (d, s) =>
    s.start !== 0 ||
    !s.type ||
    s.type.indexOf('HyperMD-codeblock-begin') === -1 ||
    !/[-\w]+\s*$/.test(s.string)
      ? null
      : ji(d.cm).fold(d, s)
  Qt('code', Go, !0)
  const Qn = {},
    qr = {}
  ;((We.hmdFoldCode = qr),
    ge.defineOption('hmdFoldCode', Qn, function (d, s) {
      ;(!s || typeof s == 'boolean') && (s = s ? qr : Qn)
      var u = ji(d)
      for (const h in Zn) u.setStatus(h, s[h])
    }))
  class Uo {
    constructor(s) {
      Z(this, '_enabled', {})
      Z(this, 'folded', {})
      this.cm = s
    }
    setStatus(s, u) {
      s in Zn &&
        !this._enabled[s] != !u &&
        ((this._enabled[s] = !!u), u ? zi(this.cm).startFold() : this.clear(s))
    }
    clear(s) {
      var u = this.folded[s]
      if (!(!u || !u.length)) for (var h; (h = u.pop()); ) h.marker.clear()
    }
    fold(s, u) {
      if (u.start !== 0 || !u.type || u.type.indexOf('HyperMD-codeblock-begin') === -1) return null
      var h = /([-\w]+)\s*$/.exec(u.string),
        p = h && h[1].toLowerCase()
      if (!p) return null
      let m, x
      var b = this.cm,
        v = Zn,
        L = this._enabled
      for (const Y in v) {
        let ue = v[Y]
        if (L[Y] && ue.pattern(p)) {
          ;((x = Y), (m = ue.renderer))
          break
        }
      }
      if (!x) return null
      let g = { line: s.lineNo, ch: 0 },
        S = null,
        _ = b.lastLine(),
        R = s.lineNo + 1
      do {
        let Y = b.getTokenAt({ line: R, ch: 1 })
        if (Y && Y.type && Y.type.indexOf('HyperMD-codeblock-end') !== -1) {
          S = { line: R, ch: Y.end }
          break
        }
      } while (++R < _)
      if (!S || s.requestRange(g, S) !== Dt.OK) return null
      let P = b.getRange({ line: g.line + 1, ch: 0 }, { line: S.line, ch: 0 }),
        D = {
          editor: b,
          lang: p,
          marker: null,
          lineWidget: null,
          el: null,
          break: Xo,
          changed: Xo,
        },
        C = (D.el = m(P, D))
      if (!C) return (D.marker.clear(), null)
      let O = document.createElement('div')
      ;((O.className = vf + x), (O.style.minHeight = '1em'), O.appendChild(C))
      let N = (D.lineWidget = b.addLineWidget(S.line, O, {
          above: !1,
          coverGutter: !1,
          noHScroll: !1,
          showIfHidden: !1,
        })),
        I = document.createElement('span')
      ;((I.className = Ko + x), (I.textContent = '<CODE>'))
      let z = (D.marker = b.markText(g, S, { replacedWith: I })),
        ce = () => (I.className = mf + x),
        ee = () => (I.className = Ko + x)
      return (
        O.addEventListener('mouseenter', ce, !1),
        O.addEventListener('mouseleave', ee, !1),
        (D.changed = () => {
          N.changed()
        }),
        (D.break = () => {
          Jt(b, z)
        }),
        I.addEventListener('click', D.break, !1),
        z.on('clear', () => {
          var Y = this.folded[x],
            ue
          ;(Y && (ue = Y.indexOf(D)) !== -1 && Y.splice(ue, 1),
            typeof D.onRemove == 'function' && D.onRemove(D),
            N.clear())
        }),
        x in this.folded ? this.folded[x].push(D) : (this.folded[x] = [D]),
        z
      )
    }
  }
  const vf = 'hmd-fold-code-content hmd-fold-code-',
    Ko = 'hmd-fold-code-stub hmd-fold-code-',
    mf = 'hmd-fold-code-stub highlight hmd-fold-code-',
    Xo = () => {},
    ji = Ve('FoldCode', Uo, Qn),
    yf = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          CodeFolder: Go,
          FoldCode: Uo,
          defaultOption: Qn,
          getAddon: ji,
          registerRenderer: gf,
          rendererRegistry: Zn,
          suggestedOption: qr,
        },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    ),
    bf = !1,
    Yo = (d, s) => {
      const u = /formatting-math-begin\b/
      if (!u.test(s.type)) return null
      const h = d.cm,
        p = d.lineNo,
        m = /math-2\b/.test(s.type),
        x = m ? 2 : 1
      if (x == 2 && s.string.length == 1) {
        let O = d.lineTokens[d.i_token + 1]
        if (!O || !u.test(O.type)) return null
      }
      const b = d.findNext(/formatting-math-end\b/, m)
      var v = { line: p, ch: s.start },
        L,
        g = !1
      if (b) L = { line: b.lineNo, ch: b.token.start + x }
      else if (m) {
        let O = h.lastLine()
        ;((L = { line: O, ch: h.getLine(O).length }), (g = !0))
      } else return null
      var S = { line: v.line, ch: v.ch + x },
        _ = { line: L.line, ch: L.ch - (g ? 0 : x) },
        R = h.getRange(S, _).trim()
      const F = Gr(h),
        P = d.requestRange(v, L)
      if (P !== Dt.OK) return (P === Dt.CURSOR_INSIDE && (F.editingExpr = R), null)
      const D = x > 1 && v.ch == 0 && (g || L.ch >= h.getLine(L.line).length)
      var C = $o(h, v, L, R, x, D)
      return ((F.editingExpr = null), C)
    }
  function $o(d, s, u, h, p, m) {
    var x = document.createElement('span')
    ;(x.setAttribute('class', 'hmd-fold-math math-' + (m ? 2 : 1)), x.setAttribute('title', h))
    var b = document.createElement('span')
    ;(b.setAttribute('class', 'hmd-fold-math-placeholder'), (b.textContent = h), x.appendChild(b))
    var v = d.markText(s, u, { replacedWith: x })
    x.addEventListener('click', () => Jt(d, v, p), !1)
    var g = Gr(d).createRenderer(x, m ? 'display' : '')
    return (
      (g.onChanged = function () {
        ;(b && (x.removeChild(b), (b = null)), v.changed())
      }),
      v.on('clear', function () {
        g.clear()
      }),
      (v.mathRenderer = g),
      oo(
        () => (g.isReady() ? (g.startRender(h), !0) : !1),
        5,
        () => {
          v.clear()
        },
      ),
      v
    )
  }
  Qt('math', Yo, !0)
  class qi {
    constructor(s, u) {
      Z(this, 'img')
      Z(this, 'last_expr')
      Z(this, 'onChanged')
      this.container = s
      var h = document.createElement('img')
      ;(h.setAttribute('class', 'hmd-math-dumb'),
        h.addEventListener(
          'load',
          () => {
            this.onChanged && this.onChanged(this.last_expr)
          },
          !1,
        ),
        (this.img = h),
        s.appendChild(h))
    }
    startRender(s) {
      ;((this.last_expr = s),
        (this.img.src = 'https://latex.codecogs.com/gif.latex?' + encodeURIComponent(s)))
    }
    clear() {
      this.container.removeChild(this.img)
    }
    isReady() {
      return !0
    }
  }
  const Jn = { renderer: qi, onPreview: null, onPreviewEnd: null },
    Zo = {}
  ;((We.hmdFoldMath = Zo),
    ge.defineOption('hmdFoldMath', Jn, function (d, s) {
      s ? typeof s == 'function' && (s = { renderer: s }) : (s = {})
      var u = Gr(d)
      for (var h in Jn) u[h] = h in s ? s[h] : Jn[h]
    }))
  class Qo {
    constructor(s) {
      Z(this, 'renderer')
      Z(this, 'onPreview')
      Z(this, 'onPreviewEnd')
      Z(this, 'editingExpr')
      ;((this.cm = s),
        new pt(
          (u) => {
            this.onPreview && this.onPreview(u)
          },
          () => {
            this.onPreviewEnd && this.onPreviewEnd()
          },
          null,
        ).bind(this, 'editingExpr'))
    }
    createRenderer(s, u) {
      var h = this.renderer || qi
      return new h(s, u)
    }
  }
  const Gr = Ve('FoldMath', Qo, Jn),
    xf = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          DumbRenderer: qi,
          FoldMath: Qo,
          MathFolder: Yo,
          defaultOption: Jn,
          getAddon: Gr,
          insertMathMark: $o,
          suggestedOption: Zo,
        },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    ),
    Ur = {},
    Jo = (d) => d in Ur,
    Vo = (d) => {
      var s = document.createElement('span')
      return ((s.textContent = Ur[d]), (s.title = d), s)
    },
    ea = (d, s) => {
      if (!s.type || !/ formatting-emoji/.test(s.type)) return null
      const u = d.cm,
        h = { line: d.lineNo, ch: s.start },
        p = { line: d.lineNo, ch: s.end }
      var m = s.string,
        x = Gi(u)
      if (!x.isEmoji(m) || d.requestRange(h, p) !== Dt.OK) return null
      var v = x.foldEmoji(m, h, p)
      return v
    }
  Qt('emoji', ea, !0)
  const Vn = { myEmoji: {}, emojiRenderer: Vo, emojiChecker: Jo },
    ta = {}
  ;((We.hmdFoldEmoji = ta),
    ge.defineOption('hmdFoldEmoji', Vn, function (d, s) {
      s || (s = {})
      var u = Gi(d)
      for (var h in Vn) u[h] = h in s ? s[h] : Vn[h]
    }))
  class na {
    constructor(s) {
      Z(this, 'myEmoji')
      Z(this, 'emojiRenderer')
      Z(this, 'emojiChecker')
      this.cm = s
    }
    isEmoji(s) {
      return s in this.myEmoji || this.emojiChecker(s)
    }
    foldEmoji(s, u, h) {
      var p = this.cm,
        m = (s in this.myEmoji && this.myEmoji[s](s)) || this.emojiRenderer(s)
      if (!m || !m.tagName) return null
      m.className.indexOf('hmd-emoji') === -1 && (m.className += ' hmd-emoji')
      var x = p.markText(u, h, { replacedWith: m })
      return (
        m.addEventListener('click', Jt.bind(this, p, x, 1), !1),
        m.tagName.toLowerCase() === 'img' &&
          (m.addEventListener('load', () => x.changed(), !1),
          m.addEventListener('dragstart', (b) => b.preventDefault(), !1)),
        x
      )
    }
  }
  const Gi = Ve('FoldEmoji', na, Vn)
  ;(function (d) {
    const s = [
        'smile:😄;laughing:😆;blush:😊;smiley:😃;relaxed:☺️;smirk:😏;heart_eyes:😍;kissing_heart:😘;kissing_closed_eyes:😚;flushed:😳;relieved:😌;satisfied:😆;grin:😁;wink:😉;stuck_out_tongue_winking_eye:😜;stuck_out_tongue_closed_eyes:😝;grinning:😀;kissing:😗;kissing_smiling_eyes:😙;stuck_out_tongue:😛;sleeping:😴;worried:😟;frowning:😦;anguished:😧;open_mouth:😮;grimacing:😬;confused:😕;hushed:😯;expressionless:😑;unamused:😒;sweat_smile:😅;sweat:😓;disappointed_relieved:😥;weary:😩;pensive:😔;disappointed:😞;confounded:😖;fearful:😨;cold_sweat:😰;persevere:😣;cry:😢;sob:😭;joy:😂;astonished:😲;scream:😱;tired_face:😫;angry:😠;rage:😡;triumph:😤;sleepy:😪;yum:😋;mask:😷;sunglasses:😎;dizzy_face:😵;imp:👿;smiling_imp:😈;neutral_face:😐;no_mouth:😶;innocent:😇;alien:👽;yellow_heart:💛;blue_heart:💙;purple_heart:💜;heart:❤️;green_heart:💚;broken_heart:💔;heartbeat:💓;heartpulse:💗;two_hearts:💕;revolving_hearts:💞;cupid:💘;sparkling_heart:💖;sparkles:✨;star:⭐️;star2:🌟;dizzy:💫;boom:💥;collision:💥;anger:💢;exclamation:❗️;question:❓;grey_exclamation:❕;grey_question:❔;zzz:💤;dash:💨;sweat_drops:💦;notes:🎶;musical_note:🎵;fire:🔥;hankey:💩;poop:💩;shit:💩;',
        '+1:👍;thumbsup:👍;-1:👎;thumbsdown:👎;ok_hand:👌;punch:👊;facepunch:👊;fist:✊;v:✌️;wave:👋;hand:✋;raised_hand:✋;open_hands:👐;point_up:☝️;point_down:👇;point_left:👈;point_right:👉;raised_hands:🙌;pray:🙏;point_up_2:👆;clap:👏;muscle:💪;metal:🤘;fu:🖕;walking:🚶;runner:🏃;running:🏃;couple:👫;family:👪;two_men_holding_hands:👬;two_women_holding_hands:👭;dancer:💃;dancers:👯;ok_woman:🙆;no_good:🙅;information_desk_person:💁;raising_hand:🙋;bride_with_veil:👰;person_with_pouting_face:🙎;person_frowning:🙍;bow:🙇;couplekiss::couplekiss:;couple_with_heart:💑;massage:💆;haircut:💇;nail_care:💅;boy:👦;girl:👧;woman:👩;man:👨;baby:👶;older_woman:👵;older_man:👴;person_with_blond_hair:👱;man_with_gua_pi_mao:👲;man_with_turban:👳;construction_worker:👷;cop:👮;angel:👼;princess:👸;smiley_cat:😺;smile_cat:😸;heart_eyes_cat:😻;kissing_cat:😽;smirk_cat:😼;scream_cat:🙀;crying_cat_face:😿;joy_cat:😹;pouting_cat:😾;japanese_ogre:👹;japanese_goblin:👺;see_no_evil:🙈;hear_no_evil:🙉;speak_no_evil:🙊;guardsman:💂;skull:💀;feet:🐾;lips:👄;kiss:💋;droplet:💧;ear:👂;eyes:👀;nose:👃;tongue:👅;love_letter:💌;bust_in_silhouette:👤;busts_in_silhouette:👥;speech_balloon:💬;',
        'thought_balloon:💭;sunny:☀️;umbrella:☔️;cloud:☁️;snowflake:❄️;snowman:⛄️;zap:⚡️;cyclone:🌀;foggy:🌁;ocean:🌊;cat:🐱;dog:🐶;mouse:🐭;hamster:🐹;rabbit:🐰;wolf:🐺;frog:🐸;tiger:🐯;koala:🐨;bear:🐻;pig:🐷;pig_nose:🐽;cow:🐮;boar:🐗;monkey_face:🐵;monkey:🐒;horse:🐴;racehorse:🐎;camel:🐫;sheep:🐑;elephant:🐘;panda_face:🐼;snake:🐍;bird:🐦;baby_chick:🐤;hatched_chick:🐥;hatching_chick:🐣;chicken:🐔;penguin:🐧;turtle:🐢;bug:🐛;honeybee:🐝;ant:🐜;beetle:🐞;snail:🐌;octopus:🐙;tropical_fish:🐠;fish:🐟;whale:🐳;whale2:🐋;dolphin:🐬;cow2:🐄;ram:🐏;rat:🐀;water_buffalo:🐃;tiger2:🐅;rabbit2:🐇;dragon:🐉;goat:🐐;rooster:🐓;dog2:🐕;pig2:🐖;mouse2:🐁;ox:🐂;dragon_face:🐲;blowfish:🐡;crocodile:🐊;dromedary_camel:🐪;leopard:🐆;cat2:🐈;poodle:🐩;paw_prints:🐾;bouquet:💐;cherry_blossom:🌸;tulip:🌷;four_leaf_clover:🍀;rose:🌹;sunflower:🌻;hibiscus:🌺;maple_leaf:🍁;leaves:🍃;fallen_leaf:🍂;herb:🌿;mushroom:🍄;cactus:🌵;palm_tree:🌴;evergreen_tree:🌲;deciduous_tree:🌳;chestnut:🌰;seedling:🌱;blossom:🌼;ear_of_rice:🌾;shell:🐚;globe_with_meridians:🌐;sun_with_face:🌞;full_moon_with_face:🌝;new_moon_with_face:🌚;new_moon:🌑;waxing_crescent_moon:🌒;first_quarter_moon:🌓;waxing_gibbous_moon:🌔;full_moon:🌕;waning_gibbous_moon:🌖;last_quarter_moon:🌗;waning_crescent_moon:🌘;last_quarter_moon_with_face:🌜;',
        'first_quarter_moon_with_face:🌛;moon:🌔;earth_africa:🌍;earth_americas:🌎;earth_asia:🌏;volcano:🌋;milky_way:🌌;partly_sunny:⛅️;bamboo:🎍;gift_heart:💝;dolls:🎎;school_satchel:🎒;mortar_board:🎓;flags:🎏;fireworks:🎆;sparkler:🎇;wind_chime:🎐;rice_scene:🎑;jack_o_lantern:🎃;ghost:👻;santa:🎅;christmas_tree:🎄;gift:🎁;bell:🔔;no_bell:🔕;tanabata_tree:🎋;tada:🎉;confetti_ball:🎊;balloon:🎈;crystal_ball:🔮;cd:💿;dvd:📀;floppy_disk:💾;camera:📷;video_camera:📹;movie_camera:🎥;computer:💻;tv:📺;iphone:📱;phone:☎️;telephone:☎️;telephone_receiver:📞;pager:📟;fax:📠;minidisc:💽;vhs:📼;sound:🔉;speaker:🔈;mute:🔇;loudspeaker:📢;mega:📣;hourglass:⌛️;hourglass_flowing_sand:⏳;alarm_clock:⏰;watch:⌚️;radio:📻;satellite:📡;loop:➿;mag:🔍;mag_right:🔎;unlock:🔓;lock:🔒;lock_with_ink_pen:🔏;closed_lock_with_key:🔐;key:🔑;bulb:💡;flashlight:🔦;high_brightness:🔆;low_brightness:🔅;electric_plug:🔌;battery:🔋;calling:📲;email:✉️;mailbox:📫;postbox:📮;bath:🛀;bathtub:🛁;shower:🚿;toilet:🚽;wrench:🔧;nut_and_bolt:🔩;hammer:🔨;seat:💺;moneybag:💰;yen:💴;dollar:💵;pound:💷;euro:💶;',
        'credit_card:💳;money_with_wings:💸;e-mail:📧;inbox_tray:📥;outbox_tray:📤;envelope:✉️;incoming_envelope:📨;postal_horn:📯;mailbox_closed:📪;mailbox_with_mail:📬;mailbox_with_no_mail:📭;door:🚪;smoking:🚬;bomb:💣;gun:🔫;hocho:🔪;pill:💊;syringe:💉;page_facing_up:📄;page_with_curl:📃;bookmark_tabs:📑;bar_chart:📊;chart_with_upwards_trend:📈;chart_with_downwards_trend:📉;scroll:📜;clipboard:📋;calendar:📆;date:📅;card_index:📇;file_folder:📁;open_file_folder:📂;scissors:✂️;pushpin:📌;paperclip:📎;black_nib:✒️;pencil2:✏️;straight_ruler:📏;triangular_ruler:📐;closed_book:📕;green_book:📗;blue_book:📘;orange_book:📙;notebook:📓;notebook_with_decorative_cover:📔;ledger:📒;books:📚;bookmark:🔖;name_badge:📛;microscope:🔬;telescope:🔭;newspaper:📰;football:🏈;basketball:🏀;soccer:⚽️;baseball:⚾️;tennis:🎾;8ball:🎱;',
        'rugby_football:🏉;bowling:🎳;golf:⛳️;mountain_bicyclist:🚵;bicyclist:🚴;horse_racing:🏇;snowboarder:🏂;swimmer:🏊;surfer:🏄;ski:🎿;spades:♠️;hearts:♥️;clubs:♣️;diamonds:♦️;gem:💎;ring:💍;trophy:🏆;musical_score:🎼;musical_keyboard:🎹;violin:🎻;space_invader:👾;video_game:🎮;black_joker:🃏;flower_playing_cards:🎴;game_die:🎲;dart:🎯;mahjong:🀄️;clapper:🎬;memo:📝;pencil:📝;book:📖;art:🎨;microphone:🎤;headphones:🎧;trumpet:🎺;saxophone:🎷;guitar:🎸;shoe:👞;sandal:👡;high_heel:👠;lipstick:💄;boot:👢;shirt:👕;tshirt:👕;necktie:👔;womans_clothes:👚;dress:👗;running_shirt_with_sash:🎽;jeans:👖;kimono:👘;bikini:👙;ribbon:🎀;tophat:🎩;crown:👑;womans_hat:👒;mans_shoe:👞;closed_umbrella:🌂;briefcase:💼;handbag:👜;pouch:👝;purse:👛;eyeglasses:👓;fishing_pole_and_fish:🎣;coffee:☕️;tea:🍵;sake:🍶;baby_bottle:🍼;beer:🍺;beers:🍻;cocktail:🍸;tropical_drink:🍹;wine_glass:🍷;fork_and_knife:🍴;pizza:🍕;hamburger:🍔;fries:🍟;poultry_leg:🍗;meat_on_bone:🍖;spaghetti:🍝;curry:🍛;fried_shrimp:🍤;bento:🍱;sushi:🍣;fish_cake:🍥;rice_ball:🍙;rice_cracker:🍘;rice:🍚;',
        'ramen:🍜;stew:🍲;oden:🍢;dango:🍡;egg:🥚;bread:🍞;doughnut:🍩;custard:🍮;icecream:🍦;ice_cream:🍨;shaved_ice:🍧;birthday:🎂;cake:🍰;cookie:🍪;chocolate_bar:🍫;candy:🍬;lollipop:🍭;honey_pot:🍯;apple:🍎;green_apple:🍏;tangerine:🍊;lemon:🍋;cherries:🍒;grapes:🍇;watermelon:🍉;strawberry:🍓;peach:🍑;melon:🍈;banana:🍌;pear:🍐;pineapple:🍍;sweet_potato:🍠;eggplant:🍆;tomato:🍅;corn:🌽;house:🏠;house_with_garden:🏡;school:🏫;office:🏢;post_office:🏣;hospital:🏥;bank:🏦;convenience_store:🏪;love_hotel:🏩;hotel:🏨;wedding:💒;church:⛪️;department_store:🏬;european_post_office:🏤;city_sunrise:🌇;city_sunset:🌆;japanese_castle:🏯;european_castle:🏰;tent:⛺️;factory:🏭;tokyo_tower:🗼;japan:🗾;mount_fuji:🗻;sunrise_over_mountains:🌄;sunrise:🌅;stars:🌠;statue_of_liberty:🗽;bridge_at_night:🌉;carousel_horse:🎠;rainbow:🌈;ferris_wheel:🎡;fountain:⛲️;roller_coaster:🎢;ship:🚢;speedboat:🚤;boat:⛵️;sailboat:⛵️;rowboat:🚣;anchor:⚓️;rocket:🚀;airplane:✈️;helicopter:🚁;steam_locomotive:🚂;tram:🚊;mountain_railway:🚞;bike:🚲;aerial_tramway:🚡;suspension_railway:🚟;',
        'mountain_cableway:🚠;tractor:🚜;blue_car:🚙;oncoming_automobile:🚘;car:🚗;red_car:🚗;taxi:🚕;oncoming_taxi:🚖;articulated_lorry:🚛;bus:🚌;oncoming_bus:🚍;rotating_light:🚨;police_car:🚓;oncoming_police_car:🚔;fire_engine:🚒;ambulance:🚑;minibus:🚐;truck:🚚;train:🚋;station:🚉;train2:🚆;bullettrain_front:🚅;bullettrain_side:🚄;light_rail:🚈;monorail:🚝;railway_car:🚃;trolleybus:🚎;ticket:🎫;fuelpump:⛽️;vertical_traffic_light:🚦;traffic_light:🚥;warning:⚠️;construction:🚧;beginner:🔰;atm:🏧;slot_machine:🎰;busstop:🚏;barber:💈;hotsprings:♨️;checkered_flag:🏁;crossed_flags:🎌;izakaya_lantern:🏮;moyai:🗿;circus_tent:🎪;performing_arts:🎭;round_pushpin:📍;triangular_flag_on_post:🚩;jp:🇯🇵;kr:🇰🇷;cn:🇨🇳;us:🇺🇸;fr:🇫🇷;es:🇪🇸;it:🇮🇹;ru:🇷🇺;gb:🇬🇧;uk:🇬🇧;de:🇩🇪;one:1️⃣;two:2️⃣;three:3️⃣;four:4️⃣;five:5️⃣;six:6️⃣;seven:7️⃣;eight:8️⃣;nine:9️⃣;keycap_ten:🔟;',
        '1234:🔢;zero:0️⃣;hash:#️⃣;symbols:🔣;arrow_backward:◀️;arrow_down:⬇️;arrow_forward:▶️;arrow_left:⬅️;capital_abcd:🔠;abcd:🔡;abc:🔤;arrow_lower_left:↙️;arrow_lower_right:↘️;arrow_right:➡️;arrow_up:⬆️;arrow_upper_left:↖️;arrow_upper_right:↗️;arrow_double_down:⏬;arrow_double_up:⏫;arrow_down_small:🔽;arrow_heading_down:⤵️;arrow_heading_up:⤴️;leftwards_arrow_with_hook:↩️;arrow_right_hook:↪️;left_right_arrow:↔️;arrow_up_down:↕️;arrow_up_small:🔼;arrows_clockwise:🔃;arrows_counterclockwise:🔄;rewind:⏪;fast_forward:⏩;information_source:ℹ️;ok:🆗;twisted_rightwards_arrows:🔀;repeat:🔁;repeat_one:🔂;new:🆕;top:🔝;up:🆙;cool:🆒;free:🆓;ng:🆖;cinema:🎦;koko:🈁;signal_strength:📶;u5272:🈹;u5408:🈴;u55b6:🈺;u6307:🈯️;u6708:🈷️;u6709:🈶;u6e80:🈵;u7121:🈚️;u7533:🈸;u7a7a:🈳;u7981:🈲;sa:🈂️;restroom:🚻;mens:🚹;womens:🚺;baby_symbol:🚼;no_smoking:🚭;',
        'parking:🅿️;wheelchair:♿️;metro:🚇;baggage_claim:🛄;accept:🉑;wc:🚾;potable_water:🚰;put_litter_in_its_place:🚮;secret:㊙️;congratulations:㊗️;m:Ⓜ️;passport_control:🛂;left_luggage:🛅;customs:🛃;ideograph_advantage:🉐;cl:🆑;sos:🆘;id:🆔;no_entry_sign:🚫;underage:🔞;no_mobile_phones:📵;do_not_litter:🚯;non-potable_water:🚱;no_bicycles:🚳;no_pedestrians:🚷;children_crossing:🚸;no_entry:⛔️;eight_spoked_asterisk:✳️;eight_pointed_black_star:✴️;heart_decoration:💟;vs:🆚;vibration_mode:📳;mobile_phone_off:📴;chart:💹;currency_exchange:💱;aries:♈️;taurus:♉️;gemini:♊️;cancer:♋️;leo:♌️;virgo:♍️;libra:♎️;scorpius:♏️;',
        'sagittarius:♐️;capricorn:♑️;aquarius:♒️;pisces:♓️;ophiuchus:⛎;six_pointed_star:🔯;negative_squared_cross_mark:❎;a:🅰️;b:🅱️;ab:🆎;o2:🅾️;diamond_shape_with_a_dot_inside:💠;recycle:♻️;end:🔚;on:🔛;soon:🔜;clock1:🕐;clock130:🕜;clock10:🕙;clock1030:🕥;clock11:🕚;clock1130:🕦;clock12:🕛;clock1230:🕧;clock2:🕑;clock230:🕝;clock3:🕒;clock330:🕞;clock4:🕓;clock430:🕟;clock5:🕔;clock530:🕠;clock6:🕕;clock630:🕡;clock7:🕖;clock730:🕢;clock8:🕗;clock830:🕣;clock9:🕘;clock930:🕤;heavy_dollar_sign:💲;copyright:©️;registered:®️;tm:™️;x:❌;heavy_exclamation_mark:❗️;bangbang:‼️;interrobang:⁉️;o:⭕️;heavy_multiplication_x:✖️;',
        'heavy_plus_sign:➕;heavy_minus_sign:➖;heavy_division_sign:➗;white_flower:💮;100:💯;heavy_check_mark:✔️;ballot_box_with_check:☑️;radio_button:🔘;link:🔗;curly_loop:➰;wavy_dash:〰️;part_alternation_mark:〽️;trident:🔱;black_square::black_square:;white_square::white_square:;white_check_mark:✅;black_square_button:🔲;white_square_button:🔳;black_circle:⚫️;white_circle:⚪️;red_circle:🔴;large_blue_circle:🔵;large_blue_diamond:🔷;large_orange_diamond:🔶;small_blue_diamond:🔹;small_orange_diamond:🔸;small_red_triangle:🔺;small_red_triangle_down:🔻',
      ],
      u = /([-\w]+:)([^;]+);/g
    let h
    for (let p = 0; p < s.length; p++)
      for (u.lastIndex = 0; (h = u.exec(s[p])); ) d[':' + h[1]] = h[2]
  })(Ur)
  const kf = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        EmojiFolder: ea,
        FoldEmoji: na,
        defaultChecker: Jo,
        defaultDict: Ur,
        defaultOption: Vn,
        defaultRenderer: Vo,
        getAddon: Gi,
        suggestedOption: ta,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
  var ra = (d) =>
      !(
        /^<(?:br)/i.test(d) ||
        /<(?:script|style|link|meta)/i.test(d) ||
        /\son\w+\s*=/i.test(d) ||
        /src\s*=\s*["']?javascript:/i.test(d)
      ),
    ia = (d, s, u) => {
      var h = /^<(\w+)\s*/.exec(d)
      if (!h) return null
      for (
        var p = h[1],
          m = document.createElement(p),
          x = /([\w\:\-]+)(?:\s*=\s*((['"]).*?\3|\S+))?\s*/g,
          b = (x.lastIndex = h[0].length),
          v;
        (v = x.exec(d)) && !(v.index > b);
      ) {
        var L = v[1],
          g = v[2]
        ;(g && /^['"]/.test(g) && (g = g.slice(1, -1)), m.setAttribute(L, g), (b = x.lastIndex))
      }
      if ('innerHTML' in m) {
        var S = d.indexOf('>', b) + 1,
          _ = d.length
        ;(v = new RegExp(`</${p}\\s*>\\s*$`, 'i').exec(d)) && (_ = v.index)
        var R = d.slice(S, _)
        ;(R && (m.innerHTML = R),
          Ai([m], (F) => {
            const P = F.tagName.toLowerCase()
            P === 'a' && (F.getAttribute('target') || F.setAttribute('target', '_blank'))
            const D = { a: ['href'], img: ['src'], iframe: ['src'] }[P]
            if (D)
              for (let C = 0; C < D.length; C++) {
                const O = D[C],
                  N = F.getAttribute(O)
                N && F.setAttribute(O, u.hmdResolveURL(N))
              }
          }))
      }
      return m
    }
  const Ui = 'hmd-fold-html-stub',
    Sf = 'hmd-fold-html-stub omittable',
    wf = 'hmd-fold-html-stub highlight',
    la = (d, s) => {
      if (!s.type || !/ hmd-html-begin/.test(s.type)) return null
      const u = d.findNext(/ hmd-html-\w+/, !0)
      if (!u || !/ hmd-html-end/.test(u.token.type) || / hmd-html-unclosed/.test(u.token.type))
        return null
      const h = d.cm,
        p = { line: d.lineNo, ch: s.start },
        m = { line: u.lineNo, ch: u.token.end },
        x = p.ch != 0 || m.ch < h.getLine(m.line).length
      var b = Ki(h),
        v = h.getRange(p, m)
      if (!b.checker(v, p, h) || d.requestRange(p, m) !== Dt.OK) return null
      var g = b.renderAndInsert(v, p, m, x)
      return g
    }
  Qt('html', la, !1)
  const yn = {
      checker: ra,
      renderer: ia,
      stubText: '<HTML>',
      isolatedTagName: /^(?:div|pre|form|table|iframe|ul|ol|input|textarea|p|summary|a)$/i,
    },
    oa = {}
  ;((We.hmdFoldHTML = oa),
    ge.defineOption('hmdFoldHTML', yn, function (d, s) {
      s
        ? typeof s == 'function'
          ? (s = { checker: s })
          : typeof s != 'object' &&
            (console.warn('[HyperMD][FoldHTML] incorrect option value type'), (s = {}))
        : (s = {})
      var u = Ki(d)
      for (var h in yn) u[h] = h in s ? s[h] : yn[h]
      u.isolatedTagName &&
        !(u.isolatedTagName instanceof RegExp) &&
        (console.error('[HyperMD][FoldHTML] option isolatedTagName only accepts RegExp'),
        (u.isolatedTagName = yn.isolatedTagName))
    }))
  class aa {
    constructor(s) {
      Z(this, 'renderer')
      Z(this, 'isolatedTagName')
      Z(this, 'stubText')
      Z(this, 'checker')
      this.cm = s
    }
    renderAndInsert(s, u, h, p) {
      const m = this.cm
      var x = this.makeStub(),
        b = this.renderer(s, u, m),
        v = () => Jt(m, g)
      if (!b) return null
      ;(x.addEventListener('click', v, !1),
        b.tagName.match(this.isolatedTagName || /^$/) || b.addEventListener('click', v, !1))
      var L, g
      if (p) {
        let _ = document.createElement('span')
        ;(_.setAttribute('class', 'hmd-fold-html'),
          _.setAttribute('style', 'display: inline-block'),
          _.appendChild(x),
          _.appendChild(b),
          (L = _))
        var S = Ei(b, (R, F) => {
          const P = getComputedStyle(b),
            D = (O) => P.getPropertyValue(O)
          var C =
            R < 10 ||
            F < 10 ||
            !/^relative|static$/i.test(D('position')) ||
            !/^none$/i.test(D('float'))
          ;(C ? (x.className = Ui) : (x.className = Sf), g.changed())
        })
        ;(S.check(),
          setTimeout(() => {
            g.on('clear', () => {
              S.stop()
            })
          }, 0))
      } else {
        L = x
        let _ = m.addLineWidget(h.line, b, {
            above: !1,
            coverGutter: !1,
            noHScroll: !1,
            showIfHidden: !1,
          }),
          R = () => (x.className = wf),
          F = () => (x.className = Ui)
        ;(b.addEventListener('mouseenter', R, !1), b.addEventListener('mouseleave', F, !1))
        var S = Ei(b, () => _.changed())
        ;(S.check(),
          setTimeout(() => {
            g.on('clear', () => {
              ;(S.stop(),
                _.clear(),
                b.removeEventListener('mouseenter', R, !1),
                b.removeEventListener('mouseleave', F, !1))
            })
          }, 0))
      }
      return ((g = m.markText(u, h, { replacedWith: L })), g)
    }
    makeStub() {
      var s = document.createElement('span')
      return (s.setAttribute('class', Ui), (s.textContent = this.stubText || '<HTML>'), s)
    }
  }
  const Ki = Ve('FoldHTML', aa, yn),
    Lf = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          FoldHTML: aa,
          HTMLFolder: la,
          defaultChecker: ra,
          defaultOption: yn,
          defaultRenderer: ia,
          getAddon: Ki,
          suggestedOption: oa,
        },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    ),
    er = { enabled: !1 },
    sa = { enabled: !0 }
  ;((We.hmdTableAlign = sa),
    (gn.hmdTableAlign = !1),
    ge.defineOption('hmdTableAlign', er, function (d, s) {
      const u = !!s
      ;(!u || typeof s == 'boolean') && (s = { enabled: u })
      var h = fa(d)
      for (var p in er) h[p] = p in s ? s[p] : er[p]
    }))
  class ua {
    constructor(s) {
      Z(this, 'enabled')
      Z(this, 'styleEl', document.createElement('style'))
      Z(this, '_lastCSS')
      Z(
        this,
        'updateStyle',
        pn(() => {
          if (!this.enabled) return
          const s = this.cm,
            u = this.measure(),
            h = this.makeCSS(u)
          h !== this._lastCSS && ((this.styleEl.textContent = this._lastCSS = h), s.refresh())
        }, 100),
      )
      Z(this, '_procLine', (s, u, h) => {
        if (!h.querySelector('.cm-hmd-table-sep')) return
        const p = h.firstElementChild,
          m = Array.prototype.slice.call(p.childNodes, 0),
          x = s.getStateAfter(u.lineNo()),
          b = x.hmdTableColumns,
          v = x.hmdTableID
        var L = x.hmdTable === Pt.NORMAL ? -1 : 0,
          g = this.makeColumn(L, b[L] || 'dummy', v),
          S = g.firstElementChild
        for (const _ of m) {
          const R = (_.nodeType === Node.ELEMENT_NODE && _.className) || ''
          ;/cm-hmd-table-sep/.test(R)
            ? (L++,
              g.appendChild(S),
              p.appendChild(g),
              p.appendChild(_),
              (g = this.makeColumn(L, b[L] || 'dummy', v)),
              (S = g.firstElementChild))
            : S.appendChild(_)
        }
        ;(g.appendChild(S), p.appendChild(g))
      })
      ;((this.cm = s),
        new pt(
          () => {
            ;(s.on('renderLine', this._procLine),
              s.on('update', this.updateStyle),
              s.refresh(),
              document.head.appendChild(this.styleEl))
          },
          () => {
            ;(s.off('renderLine', this._procLine),
              s.off('update', this.updateStyle),
              document.head.removeChild(this.styleEl))
          },
        ).bind(this, 'enabled', !0))
    }
    makeColumn(s, u, h) {
      var p = document.createElement('span')
      ;((p.className = `hmd-table-column hmd-table-column-${s} hmd-table-column-${u}`),
        p.setAttribute('data-column', '' + s),
        p.setAttribute('data-table-id', h))
      var m = document.createElement('span')
      return (
        (m.className = 'hmd-table-column-content'),
        m.setAttribute('data-column', '' + s),
        p.appendChild(m),
        p
      )
    }
    measure() {
      const h = this.cm.display.lineDiv.querySelectorAll('.hmd-table-column-content')
      var p = {}
      for (let x = 0; x < h.length; x++) {
        const b = h[x],
          v = b.parentElement,
          L = v.getAttribute('data-table-id'),
          g = ~~v.getAttribute('data-column'),
          S = b.offsetWidth + 1
        L in p || (p[L] = [])
        for (var m = p[L]; m.length <= g; ) m.push(0)
        m[g] < S && (m[g] = S)
      }
      return p
    }
    makeCSS(s) {
      var u = []
      for (const h in s) {
        const p = s[h],
          m = `pre.HyperMD-table-row.HyperMD-table_${h} .hmd-table-column-`
        for (let x = 0; x < p.length; x++) {
          const b = p[x]
          u.push(`${m}${x} { min-width: ${b + 0.5}px }`)
        }
      }
      return u.join(`
`)
    }
  }
  const fa = Ve('TableAlign', ua, er),
    Cf = Object.freeze(
      Object.defineProperty(
        { __proto__: null, TableAlign: ua, defaultOption: er, getAddon: fa, suggestedOption: sa },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    )
  yo()
  const tr = { source: null },
    Xi = {
      source:
        typeof requirejs == 'function'
          ? '~codemirror/'
          : 'https://cdn.jsdelivr.net/npm/codemirror/',
    }
  ;((We.hmdModeLoader = Xi),
    ge.defineOption('hmdModeLoader', tr, function (d, s) {
      !s || typeof s == 'boolean'
        ? (s = { source: (s && Xi.source) || null })
        : (typeof s == 'string' || typeof s == 'function') && (s = { source: s })
      var u = ca(d)
      for (var h in tr) u[h] = h in s ? s[h] : tr[h]
    }))
  class ha {
    constructor(s) {
      Z(this, 'source')
      Z(this, '_loadingModes', {})
      Z(this, 'rlHandler', (s, u) => {
        var h = u.lineNo(),
          p = u.text || '',
          m = p.match(/^```\s*(\S+)/)
        if (m) {
          var x = m[1],
            b = ge.findModeByName(x),
            v = b && b.mode
          v && !(v in ge.modes) && this.startLoadMode(v, h)
        }
      })
      ;((this.cm = s),
        new pt()
          .bind(this, 'source')
          .ON(() => {
            s.on('renderLine', this.rlHandler)
          })
          .OFF(() => {
            s.off('renderLine', this.rlHandler)
          }))
    }
    touchLine(s) {
      var u = this.cm.getLineHandle(s),
        h = u.text.length
      this.cm.replaceRange(u.text.charAt(h - 1), { line: s, ch: h - 1 }, { line: s, ch: h })
    }
    startLoadMode(s, u) {
      var h = this._loadingModes,
        p = this
      if (u >= 0 && s in h) {
        h[s].push(u)
        return
      }
      u >= 0 && (h[s] = [u])
      var m = function () {
          console.log('[HyperMD] mode-loader loaded ' + s)
          const L = h[s]
          ;(p.cm.operation(() => {
            for (var g = 0; g < L.length; g++) p.touchLine(L[g])
          }),
            delete h[s])
        },
        x = function () {
          ;(console.warn('[HyperMD] mode-loader failed to load mode ' + s + ' from ', b),
            u !== -1 &&
              (console.log('[HyperMD] mode-loader will retry loading ' + s),
              setTimeout(function () {
                p.startLoadMode(s, u >= 0 ? -3 : u + 1)
              }, 1e3)))
        }
      if (typeof this.source == 'function') {
        this.source(s, m, x)
        return
      }
      var b = this.source + 'mode/' + s + '/' + s + '.js'
      if (typeof requirejs == 'function' && b.charAt(0) === '~') requirejs([b.slice(1, -3)], m)
      else {
        var v = document.createElement('script')
        ;((v.onload = m), (v.onerror = x), (v.src = b), document.head.appendChild(v))
      }
    }
  }
  const ca = Ve('ModeLoader', ha, tr),
    Tf = Object.freeze(
      Object.defineProperty(
        { __proto__: null, ModeLoader: ha, defaultOption: tr, getAddon: ca, suggestedOption: Xi },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    )
  function Yi(d, s) {
    let u = ' ' + d.className + ' ',
      h = ' ' + s + ' '
    return u.indexOf(h) === -1 ? !1 : ((d.className = u.replace(h, '').trim()), !0)
  }
  function $i(d, s) {
    let u = ' ' + d.className + ' ',
      h = ' ' + s + ' '
    return u.indexOf(h) !== -1 ? !1 : ((d.className = d.className + ' ' + s), !0)
  }
  const nr = {
      enabled: !1,
      line: !0,
      tokenTypes: 'em|strong|strikethrough|code|linkText|task'.split('|'),
    },
    da = { enabled: !0 }
  ;((We.hmdHideToken = da),
    (gn.hmdHideToken = !1),
    ge.defineOption('hmdHideToken', nr, function (d, s) {
      !s || typeof s == 'boolean'
        ? (s = { enabled: !!s })
        : typeof s == 'string'
          ? (s = { enabled: !0, tokenTypes: s.split('|') })
          : s instanceof Array && (s = { enabled: !0, tokenTypes: s })
      var u = va(d)
      for (var h in nr) u[h] = h in s ? s[h] : nr[h]
    }))
  const Kr = 'hmd-hidden-token',
    pa = 'hmd-inactive-line'
  class ga {
    constructor(s) {
      Z(this, 'tokenTypes')
      Z(this, 'line')
      Z(this, 'enabled')
      Z(this, 'renderLineHandler', (s, u, h) => {
        this.procLine(u, h)
      })
      Z(this, 'cursorActivityHandler', (s) => {
        this.update()
      })
      Z(
        this,
        'update',
        pn(() => this.updateImmediately(), 100),
      )
      Z(this, '_rangesInLine', {})
      ;((this.cm = s),
        new pt(
          () => {
            ;(s.on('cursorActivity', this.cursorActivityHandler),
              s.on('renderLine', this.renderLineHandler),
              s.on('update', this.update),
              this.update(),
              s.refresh())
          },
          () => {
            ;(s.off('cursorActivity', this.cursorActivityHandler),
              s.off('renderLine', this.renderLineHandler),
              s.off('update', this.update),
              this.update.stop(),
              s.refresh())
          },
        ).bind(this, 'enabled', !0))
    }
    procLine(s, u) {
      const h = this.cm,
        p = typeof s == 'number' ? s : s.lineNo()
      typeof s == 'number' && (s = h.getLineHandle(s))
      const m = this._rangesInLine[p] || [],
        x = ho(h, p)
      if (!x || x.hidden || !x.measure || (u || (u = x.text), !u)) return !1
      const v = co(x, s, p).map,
        L = v.length / 3
      let g = !1
      m.length === 0 ? $i(u, pa) && (g = !0) : Yi(u, pa) && (g = !0)
      function S(F, P, D) {
        let C = !1
        D = D || 0
        for (let O = D; O < L; O++) {
          const N = v[O * 3]
          v[O * 3 + 1]
          const I = v[O * 3 + 2]
          if (N === F.head.start) {
            if (/formatting-/.test(F.head.type) && I.nodeType === Node.TEXT_NODE) {
              const z = I.parentElement
              ;(P ? $i(z, Kr) : Yi(z, Kr)) && (C = !0)
            }
            if (F.tail && /formatting-/.test(F.tail.type))
              for (let z = O + 1; z < L; z++) {
                const ce = v[z * 3]
                v[z * 3 + 1]
                const ee = v[z * 3 + 2]
                if (ce == F.tail.start && ee.nodeType === Node.TEXT_NODE) {
                  const Y = ee.parentElement
                  ;(P ? $i(Y, Kr) : Yi(Y, Kr)) && (C = !0)
                }
                if (ce >= F.tail.end) break
              }
          }
          if (N >= F.begin) break
        }
        return C
      }
      const _ = Ii(h).extract(p)
      let R = 0
      for (let F = 0; F < _.length; F++) {
        const P = _[F]
        if (this.tokenTypes.indexOf(P.type) === -1) continue
        const D = [
            { line: p, ch: P.begin },
            { line: p, ch: P.end },
          ],
          C = P.begin
        for (; R < L && v[R * 3 + 1] < C; ) R++
        let O = !0
        for (let N = 0; N < m.length; N++) {
          const I = m[N]
          if (Ir(D, I)) {
            O = !1
            break
          }
        }
        S(P, O, R) && (g = !0)
      }
      return (g && (delete x.measure.heights, (x.measure.cache = {})), g)
    }
    updateImmediately() {
      this.update.stop()
      const s = this.cm,
        u = s.listSelections(),
        h = {}
      var p = {},
        m = this._rangesInLine
      for (const x of u) {
        let b = Fi(x),
          v = b[0].line,
          L = b[1].line
        h[v] = h[L] = !0
        for (let g = v; g <= L; g++) p[g] ? p[g].push(b) : (p[g] = [b])
      }
      ;((this._rangesInLine = p),
        s.operation(() => {
          for (const b in m) p[b] || this.procLine(~~b)
          let x = !1
          for (const b in p) this.procLine(~~b) && h[b] && (x = !0)
          x && s.refresh()
        }))
    }
  }
  const va = Ve('HideToken', ga, nr),
    _f = Object.freeze(
      Object.defineProperty(
        { __proto__: null, HideToken: ga, defaultOption: nr, getAddon: va, suggestedOption: da },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    ),
    Df = 100,
    ma = 5,
    rr = { enabled: !1 },
    ya = { enabled: !0 }
  ;((We.hmdCursorDebounce = ya),
    ge.defineOption('hmdCursorDebounce', rr, function (d, s) {
      ;(!s || typeof s == 'boolean') && (s = { enabled: !!s })
      var u = xa(d)
      for (var h in rr) u[h] = h in s ? s[h] : rr[h]
    }))
  class ba {
    constructor(s) {
      Z(this, 'enabled')
      Z(this, 'lastX')
      Z(this, 'lastY')
      Z(this, 'lastTimeout')
      Z(this, 'mouseDownHandler', (s, u) => {
        ;((this.lastX = u.clientX), (this.lastY = u.clientY))
        const h = this.mouseMoveSuppress
        ;(document.addEventListener('mousemove', h, !0),
          this.lastTimeout && clearTimeout(this.lastTimeout),
          (this.lastTimeout = setTimeout(() => {
            ;(document.removeEventListener('mousemove', h, !0), (this.lastTimeout = null))
          }, Df)))
      })
      Z(this, 'mouseMoveSuppress', (s) => {
        Math.abs(s.clientX - this.lastX) <= ma &&
          Math.abs(s.clientY - this.lastY) <= ma &&
          s.stopPropagation()
      })
      ;((this.cm = s),
        new pt(
          () => {
            s.on('mousedown', this.mouseDownHandler)
          },
          () => {
            s.off('mousedown', this.mouseDownHandler)
          },
        ).bind(this, 'enabled', !0))
    }
  }
  const xa = Ve('CursorDebounce', ba, rr),
    Mf = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          CursorDebounce: ba,
          defaultOption: rr,
          getAddon: xa,
          suggestedOption: ya,
        },
        Symbol.toStringTag,
        { value: 'Module' },
      ),
    ),
    ka = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
    Of = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
    Af = /[*+-]\s/,
    bn = /^(\s*)([*+-]\s|(\d+)([.)]))(\s*)/,
    Xr = (d) => /hmd-table-sep/.test(d.type) && !/hmd-table-sep-dummy/.test(d.type)
  function Sa(d) {
    if (d.getOption('disableInput')) return ge.Pass
    const s = d.listSelections()
    var u = []
    for (const v of s) {
      var h = v.head
      const L = v.empty(),
        g = d.getStateAfter(h.line),
        S = d.getLine(h.line)
      let _ = !1
      if (!_) {
        const R = g.list !== !1,
          F = g.quote
        let P = ka.exec(S),
          D = /^\s*$/.test(S.slice(0, h.ch))
        if (L && (R || F) && P && !D)
          if (((_ = !0), Of.test(S)))
            (/>\s*$/.test(S) ||
              d.replaceRange('', { line: h.line, ch: 0 }, { line: h.line, ch: h.ch + 1 }),
              u.push(`
`))
          else {
            var p = P[1],
              m = P[5],
              x = !(Af.test(P[2]) || P[2].indexOf('>') >= 0),
              b = x ? parseInt(P[3], 10) + 1 + P[4] : P[2].replace('x', ' ')
            ;(u.push(
              `
` +
                p +
                b +
                m,
            ),
              x && Nf(d, h))
          }
      }
      if (!_) {
        const R = L ? g.hmdTable : Pt.NONE
        if (R != Pt.NONE) {
          if (
            /^[\s\|]+$/.test(S) &&
            (h.line === d.lastLine() || d.getStateAfter(h.line + 1).hmdTable !== R)
          )
            (d.setCursor({ line: h.line, ch: 0 }),
              d.replaceRange(
                `
`,
                { line: h.line, ch: 0 },
                { line: h.line, ch: S.length },
              ))
          else {
            const F = g.hmdTableColumns
            let P = $t('  |  ', F.length - 1),
              D = `
`
            ;(R === Pt.NORMAL && ((D += '| '), (P += ' |')),
              g.hmdTableRow == 0
                ? d.setCursor({ line: h.line + 1, ch: d.getLine(h.line + 1).length })
                : d.setCursor({ line: h.line, ch: S.length }),
              d.replaceSelection(D),
              d.replaceSelection(P, 'start'))
          }
          _ = !0
          return
        } else if (L && h.ch >= S.length && !g.code && !g.hmdInnerMode && /^\|.+\|.+\|$/.test(S)) {
          let F = d.getLineTokens(h.line),
            P = '|',
            D = '|'
          for (let C = 1; C < F.length; C++) {
            let O = F[C]
            O.string === '|' &&
              (!O.type || !O.type.trim().length) &&
              ((P += ' ------- |'), (D += '   |'))
          }
          ;(d.setCursor({ line: h.line, ch: S.length }),
            d.replaceSelection(
              `
` +
                P +
                `
| `,
            ),
            d.replaceSelection(
              D.slice(1) +
                `
`,
              'start',
            ),
            (_ = !0))
          return
        }
      }
      if (
        (_ ||
          (L &&
            S.slice(h.ch - 2, h.ch) == '$$' &&
            /math-end/.test(d.getTokenTypeAt(h)) &&
            (u.push(`
`),
            (_ = !0))),
        !_)
      ) {
        d.execCommand('newlineAndIndent')
        return
      }
    }
    d.replaceSelections(u)
  }
  function wa(d) {
    if (d.getOption('disableInput')) return ge.Pass
    const s = d.listSelections()
    var u = ao(
      `
`,
      s.length,
    )
    for (let m = 0; m < s.length; m++) {
      var h = s[m],
        p = h.head
      const x = d.getStateAfter(p.line)
      x.list !== !1 && (u[m] += $t(' ', x.listStack.slice(-1)[0]))
    }
    d.replaceSelections(u)
  }
  function La(d, s, u) {
    if (!u || u < 0) return
    let h = /^ */.exec(d.getLine(s))[0].length
    ;(h < u && (u = h), u > 0 && d.replaceRange('', { line: s, ch: 0 }, { line: s, ch: u }))
  }
  function Ca(d) {
    var s = d.listSelections(),
      u = new jn(d)
    for (let _ = 0; _ < s.length; _++) {
      var h = s[_],
        p = h.head,
        m = h.anchor
      !h.empty() && Ae.cmpPos(p, m) > 0
        ? ([m, p] = [p, m])
        : m === p && (m = h.anchor = { ch: p.ch, line: p.line })
      const F = d.getStateAfter(p.line)
      if (F.hmdTable) {
        u.setPos(p.line, p.ch)
        const P = F.hmdTable === Pt.NORMAL
        var x = p.line,
          b = d.getLine(x),
          v = 0,
          L = 0,
          g = u.findPrev(Xr)
        if (g) {
          var S = u.findPrev(Xr, g.i_token - 1)
          ;((v = S ? S.token.end : 0),
            (L = g.token.start),
            v == 0 && P && (v += b.match(/^\s*\|/)[0].length))
        } else {
          if (F.hmdTableRow == 0) return
          ;(F.hmdTableRow == 2 && x--, x--, (b = d.getLine(x)), u.setPos(x, b.length))
          var S = u.findPrev(Xr)
          ;((v = S.token.end), (L = b.length), P && (L -= b.match(/\|\s*$/)[0].length))
        }
        ;(b.charAt(v) === ' ' && (v += 1),
          v > 0 && b.substr(v - 1, 2) === ' |' && v--,
          b.charAt(L - 1) === ' ' && (L -= 1),
          d.setSelection({ line: x, ch: v }, { line: x, ch: L }))
        return
      } else if (F.listStack.length > 0) {
        let P = p.line
        for (; !bn.test(d.getLine(P)); )
          if ((P--, !(d.getStateAfter(P).listStack.length > 0))) {
            P++
            break
          }
        let D = d.lastLine(),
          C
        for (; P <= m.line && (C = bn.exec(d.getLine(P))); P++) {
          let O = d.getStateAfter(P).listStack,
            N = O.length,
            I = 0
          for (
            N == 1 ? (I = C[1].length) : (I = O[N - 1] - (O[N - 2] || 0)), La(d, P, I);
            ++P <= D;
          ) {
            if (d.getStateAfter(P).listStack.length !== N) {
              P = 1 / 0
              break
            }
            if (bn.test(d.getLine(P))) {
              P--
              break
            }
            La(d, P, I)
          }
        }
        return
      }
    }
    d.execCommand('indentLess')
  }
  function Ta(d) {
    var s = d.listSelections(),
      u = [],
      h = [],
      p = [],
      m = {},
      x = new jn(d),
      b = !1,
      v = !1,
      L = !1,
      g = !0
    function S(O) {
      ;((u[F] = O), O && (v = !0))
    }
    function _(O) {
      ;((h[F] = O), O && (L = !0))
    }
    function R(O) {
      ;((p[F] = O), O && (g = !0))
    }
    for (var F = 0; F < s.length; F++) {
      u[F] = h[F] = p[F] = ''
      var P = s[F],
        D = P.head,
        C = P.anchor
      const O = P.empty()
      !O && Ae.cmpPos(D, C) > 0
        ? ([C, D] = [D, C])
        : C === D && (C = P.anchor = { ch: D.ch, line: D.line })
      const N = d.getStateAfter(D.line)
      let I = d.getLine(D.line)
      if (N.hmdTable) {
        b = !0
        const z = N.hmdTable === Pt.NORMAL,
          ce = N.hmdTableColumns
        x.setPos(D.line, D.ch)
        const ee = x.findNext(Xr, x.i_token)
        if (ee) {
          const Y = x.findNext(/hmd-table-sep/, ee.i_token + 1)
          ;((D.ch = ee.token.end),
            (C.ch = Y ? Y.token.start : I.length),
            C.ch > D.ch && I.charAt(D.ch) === ' ' && D.ch++,
            C.ch > D.ch && I.charAt(C.ch - 1) === ' ' && C.ch--,
            R(C.ch > D.ch ? d.getRange(D, C) : ''))
        } else {
          const Y = N.hmdTableRow === 0 ? 2 : 1
          if (D.line + Y > d.lastLine() || d.getStateAfter(D.line + Y).hmdTable != N.hmdTable) {
            D.ch = C.ch = I.length
            let ue = $t('  |  ', ce.length - 1)
            ;(N.hmdTableRow === 0 &&
              ((C.line = D.line += 1), (C.ch = D.ch = d.getLine(D.line).length)),
              z
                ? (S(`
| `),
                  _(ue + ' |'))
                : (S(`
`),
                  _(ue.trimRight())),
              R(''))
          } else {
            ;((C.line = D.line += Y), x.setPos(D.line, 0))
            const ue = x.line.text,
              xe = z && x.findNext(/hmd-table-sep-dummy/, 0),
              X = x.findNext(/hmd-table-sep/, xe ? xe.i_token + 1 : 1)
            ;((D.ch = xe ? xe.token.end : 0),
              (C.ch = X ? X.token.start : ue.length),
              C.ch > D.ch && ue.charAt(D.ch) === ' ' && D.ch++,
              C.ch > D.ch && ue.charAt(C.ch - 1) === ' ' && C.ch--,
              R(C.ch > D.ch ? d.getRange(D, C) : ''))
          }
        }
      } else if (N.listStack.length > 0) {
        let z = D.line,
          ce
        for (; !(ce = bn.exec(d.getLine(z))); )
          if ((z--, !(d.getStateAfter(z).listStack.length > 0))) {
            z++
            break
          }
        let ee = d.firstLine(),
          Y = d.lastLine()
        for (; z <= C.line && (ce = bn.exec(d.getLine(z))); z++) {
          let xe = d.getStateAfter(z).listStack,
            X = d.getStateAfter(z - 1).listStack,
            oe = xe.length,
            V = ''
          for (
            z > ee &&
              oe <= X.length &&
              (oe == X.length
                ? (V = $t(' ', X[oe - 1] - ce[1].length))
                : (V = $t(' ', X[oe] - ce[0].length))),
              m[z] = V;
            ++z <= Y;
          ) {
            if (d.getStateAfter(z).listStack.length !== oe) {
              z = 1 / 0
              break
            }
            if (bn.test(d.getLine(z))) {
              z--
              break
            }
            m[z] = V
          }
        }
        if (!O) {
          g = !1
          break
        }
      } else if (O) S('    ')
      else {
        R(d.getRange(D, C))
        for (let z = D.line; z <= C.line; z++) z in m || (m[z] = '    ')
      }
    }
    for (let O in m) m[O] && d.replaceRange(m[O], { line: ~~O, ch: 0 })
    ;(b && d.setSelections(s),
      v && d.replaceSelections(u),
      L && d.replaceSelections(h, 'start'),
      g && d.replaceSelections(p, 'around'))
  }
  function Ef(d, s, u) {
    if (d.getOption('disableInput')) return ge.Pass
    var h = d.listSelections(),
      p = new Array(h.length),
      m = new Array(h.length),
      x = !1,
      b = !1,
      v = !1
    u || (u = s)
    var L = s.length,
      g = u.length
    for (let C = 0; C < h.length; C++) {
      p[C] = m[C] = ''
      var S = h[C],
        _ = S.head,
        R = S.anchor,
        F = d.getLine(_.line)
      if (S.empty()) {
        _.ch >= L && F.substr(_.ch - L, L) === s ? ((v = !0), (_.ch -= L)) : ((b = !0), (m[C] = s))
        continue
      }
      x = !0
      var P = Ae.cmpPos(_, R) > 0
      P && ([R, _] = [_, R])
      var D = d.getRange(_, R)
      ;(_.ch >= L &&
        _.line === R.line &&
        F.substr(_.ch - L, L) === s &&
        F.substr(R.ch, g) === u &&
        ((v = !0), (R.ch += g), (_.ch -= L), (D = s + D + u)),
        D.slice(0, L) === s && D.slice(-g) === u ? (p[C] = D.slice(L, -g)) : (p[C] = s + D + u))
    }
    ;(v && d.setSelections(h), b && d.replaceSelections(m), x && d.replaceSelections(p, 'around'))
  }
  function Yr(d, s, u) {
    return function (h) {
      if (h.getOption('disableInput')) return ge.Pass
      var p = new jn(h),
        m = h.listSelections(),
        x = new Array(m.length)
      for (let S = 0; S < m.length; S++) {
        var b = m[S],
          v = b.head,
          L = b.anchor,
          g = h.getStateAfter(v.line)
        const _ = b.empty()
        Ae.cmpPos(v, L) > 0 && ([L, v] = [v, L])
        const R = (x[S] = _ ? '' : h.getRange(v, L))
        if (_ || d(h.getTokenAt(v).state)) {
          let C = v.line
          p.setPos(C, v.ch, !0)
          let O = p.lineTokens[p.i_token]
          ;(O && O.state, (!O || /^\s*$/.test(O.string)) && (O = p.lineTokens[--p.i_token]))
          let { from: N, to: I } = p.expandRange((z) => z && (d(z.state) || s(z)))
          if (I.i_token === N.i_token) {
            let z = u()
            if (O && !/^\s*$/.test(O.string)) {
              let ce = { line: C, ch: O.start },
                ee = { line: C, ch: O.end }
              ;((O = N.token),
                h.replaceRange(z + O.string + z, ce, ee),
                (ee.ch += z.length),
                h.setCursor(ee))
              return
            } else x[S] = z
          } else
            (s(I.token) &&
              h.replaceRange('', { line: C, ch: I.token.start }, { line: C, ch: I.token.end }),
              N.i_token !== I.i_token &&
                s(N.token) &&
                h.replaceRange('', { line: C, ch: N.token.start }, { line: C, ch: N.token.end }))
          continue
        }
        let F = h.getTokenAt(v),
          P = F ? F.state : g,
          D = u(P)
        x[S] = D + R + D
      }
      h.replaceSelections(x)
    }
  }
  function Nf(d, s) {
    const u = ka
    var h = s.line,
      p = 0,
      m = 0,
      x = u.exec(d.getLine(h)),
      b = x[1]
    do {
      p += 1
      var v = h + p,
        L = d.getLine(v),
        g = u.exec(L)
      if (g) {
        var S = g[1],
          _ = parseInt(x[3], 10) + p - m,
          R = parseInt(g[3], 10),
          F = R
        if (b === S && !isNaN(R))
          (_ === R && (F = R + 1),
            _ > R && (F = _ + 1),
            d.replaceRange(
              L.replace(u, S + F + g[4] + g[5]),
              { line: v, ch: 0 },
              { line: v, ch: L.length },
            ))
        else {
          if (b.length > S.length || (b.length < S.length && p === 1)) return
          m += 1
        }
      }
    } while (g)
  }
  Object.assign(ge.commands, {
    hmdNewlineAndContinue: Sa,
    hmdNewline: wa,
    hmdShiftTab: Ca,
    hmdTab: Ta,
  })
  const Zi = ge.keyMap.default === ge.keyMap.macDefault ? 'Cmd' : 'Ctrl'
  var $r = {
    'Shift-Tab': 'hmdShiftTab',
    Tab: 'hmdTab',
    Enter: 'hmdNewlineAndContinue',
    'Shift-Enter': 'hmdNewline',
    [`${Zi}-B`]: Yr(
      (d) => d.strong,
      (d) => / formatting-strong /.test(d.type),
      (d) => $t((d && d.strong) || '*', 2),
    ),
    [`${Zi}-I`]: Yr(
      (d) => d.em,
      (d) => / formatting-em /.test(d.type),
      (d) => (d && d.em) || '*',
    ),
    [`${Zi}-D`]: Yr(
      (d) => d.strikethrough,
      (d) => / formatting-strikethrough /.test(d.type),
      (d) => '~~',
    ),
    fallthrough: 'default',
  }
  ;(($r = ge.normalizeKeyMap($r)), (ge.keyMap.hypermd = $r), (We.keyMap = 'hypermd'))
  const Ff = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        createStyleToggler: Yr,
        get keyMap() {
          return $r
        },
        newline: wa,
        newlineAndContinue: Sa,
        shiftTab: Ca,
        tab: Ta,
        wrapTexts: Ef,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
  ;(Object.defineProperty(le, 'cmpPos', { enumerable: !0, get: () => Ae.cmpPos }),
    (le.Addon = tf),
    (le.Click = uf),
    (le.CursorDebounce = Mf),
    (le.FlipFlop = pt),
    (le.Fold = cf),
    (le.FoldCode = yf),
    (le.FoldEmoji = kf),
    (le.FoldHTML = Lf),
    (le.FoldImage = df),
    (le.FoldLink = pf),
    (le.FoldMath = xf),
    (le.HideToken = _f),
    (le.Hover = af),
    (le.InsertFile = rf),
    (le.KeyMap = Ff),
    (le.Mode = Ju),
    (le.ModeLoader = Tf),
    (le.Paste = ff),
    (le.ReadLink = lf),
    (le.TableAlign = Cf),
    (le.TokenSeeker = jn),
    (le.addClass = Fu),
    (le.cm_internal = qu),
    (le.contains = Ru),
    (le.debounce = pn),
    (le.expandRange = Rt),
    (le.fromTextArea = Bu),
    (le.getEveryCharToken = Gu),
    (le.getLineSpanExtractor = Ii),
    (le.makeSymbol = so),
    (le.normalVisualConfig = gn),
    (le.orderedRange = Fi),
    (le.rangesIntersect = Ir),
    (le.repeat = ao),
    (le.repeatStr = $t),
    (le.rmClass = Hu),
    (le.suggestedEditorConfig = We),
    (le.switchToHyperMD = ju),
    (le.switchToNormal = zu),
    (le.tryToRun = oo),
    (le.visitElements = Ai),
    (le.watchSize = Ei),
    Object.defineProperty(le, Symbol.toStringTag, { value: 'Module' }))
})
