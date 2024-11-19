var re = Object.defineProperty;
var de = (e, t, o) => t in e ? re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var A = (e, t, o) => de(e, typeof t != "symbol" ? t + "" : t, o);
function X() {
}
function Qt(e) {
  return e();
}
function Vt() {
  return /* @__PURE__ */ Object.create(null);
}
function U(e) {
  e.forEach(Qt);
}
function Wt(e) {
  return typeof e == "function";
}
function ht(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ue(e) {
  return Object.keys(e).length === 0;
}
function Ut(e) {
  return e ?? "";
}
function u(e, t) {
  e.appendChild(t);
}
function pt(e, t, o) {
  const i = ce(e);
  if (!i.getElementById(t)) {
    const n = h("style");
    n.id = t, n.textContent = o, ae(i, n);
  }
}
function ce(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function ae(e, t) {
  return u(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function O(e, t, o) {
  e.insertBefore(t, o || null);
}
function S(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function fe(e, t) {
  for (let o = 0; o < e.length; o += 1)
    e[o] && e[o].d(t);
}
function h(e) {
  return document.createElement(e);
}
function N(e) {
  return document.createTextNode(e);
}
function x() {
  return N(" ");
}
function ge() {
  return N("");
}
function w(e, t, o, i) {
  return e.addEventListener(t, o, i), () => e.removeEventListener(t, o, i);
}
function a(e, t, o) {
  o == null ? e.removeAttribute(t) : e.getAttribute(t) !== o && e.setAttribute(t, o);
}
function he(e) {
  return Array.from(e.childNodes);
}
function Z(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function it(e, t) {
  e.value = t ?? "";
}
function Yt(e, t, o, i) {
  e.style.setProperty(t, o, "");
}
function pe(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (o) => {
      t[o.slot || "default"] = !0;
    }
  ), t;
}
let Jt;
function gt(e) {
  Jt = e;
}
const st = [], E = [];
let lt = [];
const Lt = [], me = /* @__PURE__ */ Promise.resolve();
let Bt = !1;
function _e() {
  Bt || (Bt = !0, me.then(z));
}
function Mt(e) {
  lt.push(e);
}
function L(e) {
  Lt.push(e);
}
const It = /* @__PURE__ */ new Set();
let nt = 0;
function z() {
  if (nt !== 0)
    return;
  const e = Jt;
  do {
    try {
      for (; nt < st.length; ) {
        const t = st[nt];
        nt++, gt(t), be(t.$$);
      }
    } catch (t) {
      throw st.length = 0, nt = 0, t;
    }
    for (gt(null), st.length = 0, nt = 0; E.length; ) E.pop()();
    for (let t = 0; t < lt.length; t += 1) {
      const o = lt[t];
      It.has(o) || (It.add(o), o());
    }
    lt.length = 0;
  } while (st.length);
  for (; Lt.length; )
    Lt.pop()();
  Bt = !1, It.clear(), gt(e);
}
function be(e) {
  if (e.fragment !== null) {
    e.update(), U(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Mt);
  }
}
function $e(e) {
  const t = [], o = [];
  lt.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : o.push(i)), o.forEach((i) => i()), lt = t;
}
const kt = /* @__PURE__ */ new Set();
let K;
function ve() {
  K = {
    r: 0,
    c: [],
    p: K
    // parent group
  };
}
function xe() {
  K.r || U(K.c), K = K.p;
}
function H(e, t) {
  e && e.i && (kt.delete(e), e.i(t));
}
function q(e, t, o, i) {
  if (e && e.o) {
    if (kt.has(e)) return;
    kt.add(e), K.c.push(() => {
      kt.delete(e), i && (o && e.d(1), i());
    }), e.o(t);
  } else i && i();
}
function qt(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function B(e, t, o) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = o, o(e.$$.ctx[i]));
}
function rt(e) {
  e && e.c();
}
function Q(e, t, o) {
  const { fragment: i, after_update: n } = e.$$;
  i && i.m(t, o), Mt(() => {
    const s = e.$$.on_mount.map(Qt).filter(Wt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : U(s), e.$$.on_mount = [];
  }), n.forEach(Mt);
}
function W(e, t) {
  const o = e.$$;
  o.fragment !== null && ($e(o.after_update), U(o.on_destroy), o.fragment && o.fragment.d(t), o.on_destroy = o.fragment = null, o.ctx = []);
}
function Ce(e, t) {
  e.$$.dirty[0] === -1 && (st.push(e), _e(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function mt(e, t, o, i, n, s, l = null, r = [-1]) {
  const d = Jt;
  gt(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: X,
    not_equal: n,
    bound: Vt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: Vt(),
    dirty: r,
    skip_bound: !1,
    root: t.target || d.$$.root
  };
  l && l(c.root);
  let f = !1;
  if (c.ctx = o ? o(e, t.props || {}, (p, _, ...b) => {
    const y = b.length ? b[0] : _;
    return c.ctx && n(c.ctx[p], c.ctx[p] = y) && (!c.skip_bound && c.bound[p] && c.bound[p](y), f && Ce(e, p)), _;
  }) : [], c.update(), f = !0, U(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const p = he(t.target);
      c.fragment && c.fragment.l(p), p.forEach(S);
    } else
      c.fragment && c.fragment.c();
    t.intro && H(e.$$.fragment), Q(e, t.target, t.anchor), z();
  }
  gt(d);
}
let Xt;
typeof HTMLElement == "function" && (Xt = class extends HTMLElement {
  constructor(t, o, i) {
    super();
    /** The Svelte component constructor */
    A(this, "$$ctor");
    /** Slots */
    A(this, "$$s");
    /** The Svelte component instance */
    A(this, "$$c");
    /** Whether or not the custom element is connected */
    A(this, "$$cn", !1);
    /** Component props data */
    A(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    A(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    A(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    A(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    A(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = o, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, o, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(o), this.$$c) {
      const n = this.$$c.$on(t, o);
      this.$$l_u.set(o, n);
    }
    super.addEventListener(t, o, i);
  }
  removeEventListener(t, o, i) {
    if (super.removeEventListener(t, o, i), this.$$c) {
      const n = this.$$l_u.get(o);
      n && (n(), this.$$l_u.delete(o));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let l;
          return {
            c: function() {
              l = h("slot"), s !== "default" && a(l, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, f) {
              O(c, l, f);
            },
            d: function(c) {
              c && S(l);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, i = pe(this);
      for (const s of this.$$s)
        s in i && (o[s] = [t(s)]);
      for (const s of this.attributes) {
        const l = this.$$g_p(s.name);
        l in this.$$d || (this.$$d[l] = wt(l, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$scope: {
            ctx: []
          }
        }
      });
      const n = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const l = wt(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, l);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(n), n();
      for (const s in this.$$l)
        for (const l of this.$$l[s]) {
          const r = this.$$c.$on(s, l);
          this.$$l_u.set(l, r);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, o, i) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = wt(t, i, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (o) => this.$$p_d[o].attribute === t || !this.$$p_d[o].attribute && o.toLowerCase() === t
    ) || t;
  }
});
function wt(e, t, o, i) {
  var s;
  const n = (s = o[e]) == null ? void 0 : s.type;
  if (t = n === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !o[e])
    return t;
  if (i === "toAttribute")
    switch (n) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (n) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function _t(e, t, o, i, n, s) {
  let l = class extends Xt {
    constructor() {
      super(e, o, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (r) => (t[r].attribute || r).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((r) => {
    Object.defineProperty(l.prototype, r, {
      get() {
        return this.$$c && r in this.$$c ? this.$$c[r] : this.$$d[r];
      },
      set(d) {
        var c;
        d = wt(r, d, t), this.$$d[r] = d, (c = this.$$c) == null || c.$set({ [r]: d });
      }
    });
  }), i.forEach((r) => {
    Object.defineProperty(l.prototype, r, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[r];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
class bt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    A(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    A(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    W(this, 1), this.$destroy = X;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, o) {
    if (!Wt(o))
      return X;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(o), () => {
      const n = i.indexOf(o);
      n !== -1 && i.splice(n, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !ue(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ye = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ye);
function ke(e) {
  pt(e, "svelte-1m9rn1b", ".tag-unselected.svelte-1m9rn1b{padding:4px 6px;font-size:2rem;background-color:transparent;border-radius:4px}.tag-selected.svelte-1m9rn1b{padding:4px 6px;height:fit-content;width:fit-content;font-size:2rem;background-color:#6554AF;color:white;border-radius:4px}.radio-button.svelte-1m9rn1b{display:none}");
}
function we(e) {
  let t, o, i, n, s, l, r;
  return {
    c() {
      t = h("label"), o = h("input"), i = x(), n = N(
        /*tagPrint*/
        e[2]
      ), a(o, "type", "radio"), a(
        o,
        "name",
        /*todoTag*/
        e[1]
      ), a(o, "class", "radio-button svelte-1m9rn1b"), a(
        o,
        "id",
        /*tagPrint*/
        e[2]
      ), a(
        t,
        "for",
        /*tagPrint*/
        e[2]
      ), a(t, "class", s = Ut(
        /*tag*/
        e[0] === /*tagPrint*/
        e[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b");
    },
    m(d, c) {
      O(d, t, c), u(t, o), u(t, i), u(t, n), l || (r = w(
        o,
        "click",
        /*tagToggle*/
        e[3]
      ), l = !0);
    },
    p(d, [c]) {
      c & /*todoTag*/
      2 && a(
        o,
        "name",
        /*todoTag*/
        d[1]
      ), c & /*tagPrint*/
      4 && a(
        o,
        "id",
        /*tagPrint*/
        d[2]
      ), c & /*tagPrint*/
      4 && Z(
        n,
        /*tagPrint*/
        d[2]
      ), c & /*tagPrint*/
      4 && a(
        t,
        "for",
        /*tagPrint*/
        d[2]
      ), c & /*tag, tagPrint*/
      5 && s !== (s = Ut(
        /*tag*/
        d[0] === /*tagPrint*/
        d[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b") && a(t, "class", s);
    },
    i: X,
    o: X,
    d(d) {
      d && S(t), l = !1, r();
    }
  };
}
function Te(e, t, o) {
  let { todoTag: i } = t, { tagPrint: n } = t, { tag: s } = t;
  const l = () => {
    o(0, s = n);
  };
  return e.$$set = (r) => {
    "todoTag" in r && o(1, i = r.todoTag), "tagPrint" in r && o(2, n = r.tagPrint), "tag" in r && o(0, s = r.tag);
  }, [s, i, n, l];
}
class Tt extends bt {
  constructor(t) {
    super(), mt(this, t, Te, we, ht, { todoTag: 1, tagPrint: 2, tag: 0 }, ke);
  }
  get todoTag() {
    return this.$$.ctx[1];
  }
  set todoTag(t) {
    this.$$set({ todoTag: t }), z();
  }
  get tagPrint() {
    return this.$$.ctx[2];
  }
  set tagPrint(t) {
    this.$$set({ tagPrint: t }), z();
  }
  get tag() {
    return this.$$.ctx[0];
  }
  set tag(t) {
    this.$$set({ tag: t }), z();
  }
}
_t(Tt, { todoTag: {}, tagPrint: {}, tag: {} }, [], [], !0);
function ze(e) {
  pt(e, "svelte-1emeaji", ".edit-input.svelte-1emeaji{outline:none;background-color:#fff;color:rgb(85, 85, 85);background-color:white;border:none;border-radius:1px;font-size:2rem;padding:1px 0}.todo-print.svelte-1emeaji{display:flex;flex-direction:column;justify-content:space-between;padding:6% 8%;font-size:2rem;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:12px}.todo-footer.svelte-1emeaji{display:flex;justify-content:space-between;align-items:center}.time.svelte-1emeaji{font-size:1.6rem}.todo-control-button.svelte-1emeaji{padding:2px 10px;background-color:white;color:black;border:none;border-radius:2px;font-size:14px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;white-space:nowrap}.todo-control-button.svelte-1emeaji:hover{box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22);transition:0.2s linear;white-space:nowrap}");
}
function je(e) {
  let t, o = (
    /*todo*/
    e[0].title + ""
  ), i, n, s, l, r, d, c, f, p, _, b, y;
  function T(m, k) {
    return (
      /*todo*/
      m[0].time ? Pe : Se
    );
  }
  let g = T(e), C = g(e);
  return {
    c() {
      t = h("div"), i = N(o), n = x(), s = h("div"), C.c(), l = x(), r = h("div"), d = h("button"), d.textContent = "수정", c = x(), f = h("button"), f.textContent = "완료", p = x(), _ = h("button"), _.textContent = "삭제", a(d, "class", "todo-control-button svelte-1emeaji"), a(f, "class", "todo-control-button svelte-1emeaji"), a(_, "class", "todo-control-button svelte-1emeaji"), a(r, "class", "todo-control"), a(s, "class", "todo-footer svelte-1emeaji"), a(t, "class", "todo-print svelte-1emeaji");
    },
    m(m, k) {
      O(m, t, k), u(t, i), u(t, n), u(t, s), C.m(s, null), u(s, l), u(s, r), u(r, d), u(r, c), u(r, f), u(r, p), u(r, _), b || (y = [
        w(
          d,
          "click",
          /*onEdit*/
          e[3]
        ),
        w(
          f,
          "click",
          /*successTodo*/
          e[6]
        ),
        w(
          _,
          "click",
          /*deleteTodo*/
          e[7]
        )
      ], b = !0);
    },
    p(m, k) {
      k & /*todo*/
      1 && o !== (o = /*todo*/
      m[0].title + "") && Z(i, o), g === (g = T(m)) && C ? C.p(m, k) : (C.d(1), C = g(m), C && (C.c(), C.m(s, l)));
    },
    d(m) {
      m && S(t), C.d(), b = !1, U(y);
    }
  };
}
function Ee(e) {
  let t, o, i, n, s, l, r, d, c;
  return {
    c() {
      t = h("div"), o = h("input"), i = x(), n = h("div"), s = h("button"), s.textContent = "수정 완료", l = x(), r = h("button"), r.textContent = "취소", a(o, "type", "text"), a(o, "class", "edit-input svelte-1emeaji"), a(s, "class", "todo-control-button svelte-1emeaji"), a(r, "class", "todo-control-button svelte-1emeaji"), a(n, "class", "todo-control"), a(t, "class", "todo-print svelte-1emeaji");
    },
    m(f, p) {
      O(f, t, p), u(t, o), it(
        o,
        /*title*/
        e[2]
      ), u(t, i), u(t, n), u(n, s), u(n, l), u(n, r), d || (c = [
        w(
          o,
          "input",
          /*input_input_handler*/
          e[11]
        ),
        w(
          o,
          "keydown",
          /*keydown_handler*/
          e[12]
        ),
        w(
          s,
          "click",
          /*updateTodo*/
          e[5]
        ),
        w(
          r,
          "click",
          /*offEdit*/
          e[4]
        )
      ], d = !0);
    },
    p(f, p) {
      p & /*title*/
      4 && o.value !== /*title*/
      f[2] && it(
        o,
        /*title*/
        f[2]
      );
    },
    d(f) {
      f && S(t), d = !1, U(c);
    }
  };
}
function Se(e) {
  let t, o = (
    /*todo*/
    e[0].tag + ""
  ), i;
  return {
    c() {
      t = h("span"), i = N(o), a(t, "class", "time svelte-1emeaji");
    },
    m(n, s) {
      O(n, t, s), u(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].tag + "") && Z(i, o);
    },
    d(n) {
      n && S(t);
    }
  };
}
function Pe(e) {
  let t, o = (
    /*todo*/
    e[0].time + ""
  ), i;
  return {
    c() {
      t = h("span"), i = N(o), a(t, "class", "time svelte-1emeaji");
    },
    m(n, s) {
      O(n, t, s), u(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].time + "") && Z(i, o);
    },
    d(n) {
      n && S(t);
    }
  };
}
function Ae(e) {
  let t;
  function o(s, l) {
    return (
      /*isEdit*/
      s[1] ? Ee : je
    );
  }
  let i = o(e), n = i(e);
  return {
    c() {
      n.c(), t = ge();
    },
    m(s, l) {
      n.m(s, l), O(s, t, l);
    },
    p(s, [l]) {
      i === (i = o(s)) && n ? n.p(s, l) : (n.d(1), n = i(s), n && (n.c(), n.m(t.parentNode, t)));
    },
    i: X,
    o: X,
    d(s) {
      s && S(t), n.d(s);
    }
  };
}
function Ne(e, t, o) {
  let { todos: i } = t, { todo: n } = t, { successTodoCount: s } = t, { todoCount: l } = t, r = !1, d = "";
  const c = () => {
    o(1, r = !0), o(2, d = n.title);
  }, f = () => {
    o(1, r = !1);
  }, p = () => {
    o(0, n.title = d, n), f();
  }, _ = () => {
    localStorage.removeItem("success"), localStorage.setItem("success", `${Number(s) + 1}`), o(9, s = localStorage.getItem("success")), b();
  }, b = () => {
    o(8, i = i.filter((g) => g.id != n.id)), console.log(i), o(8, i), localStorage.removeItem(`${n.id}`), o(10, l -= 1);
  };
  function y() {
    d = this.value, o(2, d);
  }
  const T = (g) => {
    g.key === "Enter" && p();
  };
  return e.$$set = (g) => {
    "todos" in g && o(8, i = g.todos), "todo" in g && o(0, n = g.todo), "successTodoCount" in g && o(9, s = g.successTodoCount), "todoCount" in g && o(10, l = g.todoCount);
  }, [
    n,
    r,
    d,
    c,
    f,
    p,
    _,
    b,
    i,
    s,
    l,
    y,
    T
  ];
}
class Zt extends bt {
  constructor(t) {
    super(), mt(
      this,
      t,
      Ne,
      Ae,
      ht,
      {
        todos: 8,
        todo: 0,
        successTodoCount: 9,
        todoCount: 10
      },
      ze
    );
  }
  get todos() {
    return this.$$.ctx[8];
  }
  set todos(t) {
    this.$$set({ todos: t }), z();
  }
  get todo() {
    return this.$$.ctx[0];
  }
  set todo(t) {
    this.$$set({ todo: t }), z();
  }
  get successTodoCount() {
    return this.$$.ctx[9];
  }
  set successTodoCount(t) {
    this.$$set({ successTodoCount: t }), z();
  }
  get todoCount() {
    return this.$$.ctx[10];
  }
  set todoCount(t) {
    this.$$set({ todoCount: t }), z();
  }
}
_t(Zt, { todos: {}, todo: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Oe(e) {
  pt(e, "svelte-1dz26oo", '.todo-create-container.svelte-1dz26oo{display:flex;align-items:end;gap:16px}.todo-write.svelte-1dz26oo{display:flex;justify-content:center;width:50%;height:400px;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;color:black;outline:none;padding:1.6% 2%;font-size:2rem;resize:none}.todo-info.svelte-1dz26oo{width:50%;height:400px;display:flex;flex-direction:column;justify-content:space-between}.todo-info-selecter.svelte-1dz26oo{position:relative}.todo-date.svelte-1dz26oo{margin-top:12px}.todo-time-viewer.svelte-1dz26oo{position:absolute;font-size:2rem;top:58px;left:20px;z-index:0;color:#121212}input[type="date"].svelte-1dz26oo{position:relative;width:95%;height:48px;padding:10px;text-align:left;font-size:100%;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;background-color:transparent;color:transparent;border-radius:16px;z-index:0;user-select:none}input[type="date"].svelte-1dz26oo::-webkit-calendar-picker-indicator{position:absolute;left:-80px;top:0;width:100%;color:black;height:100%;cursor:pointer}.todo-tag-selecter.svelte-1dz26oo{display:flex;gap:12px}.todo-create-button.svelte-1dz26oo{width:100%;height:50px;font-size:2rem;background-color:#6554AF;color:white;border-radius:20px;border:none;cursor:pointer}.todo-create-button.svelte-1dz26oo:hover{background-color:#59499C}.todo-create-button.svelte-1dz26oo:active{background-color:#7566B7}');
}
function Ie(e) {
  let t, o, i, n, s, l, r, d, c, f, p, _, b, y, T, g, C, m, k, F, j, M, tt, Y;
  function dt($) {
    e[8]($);
  }
  let ut = { todoTag: "todoTag", tagPrint: "매일" };
  /*tag*/
  e[0] !== void 0 && (ut.tag = /*tag*/
  e[0]), r = new Tt({ props: ut }), E.push(() => B(r, "tag", dt));
  function $t($) {
    e[9]($);
  }
  let J = { todoTag: "todoTag", tagPrint: "매주" };
  /*tag*/
  e[0] !== void 0 && (J.tag = /*tag*/
  e[0]), f = new Tt({ props: J }), E.push(() => B(f, "tag", $t));
  function et($) {
    e[10]($);
  }
  let ct = { todoTag: "todoTag", tagPrint: "매달" };
  return (
    /*tag*/
    e[0] !== void 0 && (ct.tag = /*tag*/
    e[0]), b = new Tt({ props: ct }), E.push(() => B(b, "tag", et)), {
      c() {
        t = h("div"), o = h("textarea"), i = x(), n = h("div"), s = h("div"), l = h("div"), rt(r.$$.fragment), c = x(), rt(f.$$.fragment), _ = x(), rt(b.$$.fragment), T = x(), g = h("div"), C = N(
          /*time*/
          e[1]
        ), m = x(), k = h("input"), F = x(), j = h("button"), j.textContent = "작성 완료하기", a(o, "name", ""), a(o, "id", ""), a(o, "class", "todo-write svelte-1dz26oo"), a(o, "placeholder", "할 일 등록하기"), a(l, "class", "todo-tag-selecter svelte-1dz26oo"), a(g, "class", "todo-time-viewer svelte-1dz26oo"), a(k, "type", "date"), a(k, "class", "todo-date svelte-1dz26oo"), a(s, "class", "todo-info-selecter svelte-1dz26oo"), a(j, "class", "todo-create-button svelte-1dz26oo"), a(n, "class", "todo-info svelte-1dz26oo"), a(t, "class", "todo-create-container svelte-1dz26oo");
      },
      m($, P) {
        O($, t, P), u(t, o), it(
          o,
          /*title*/
          e[2]
        ), u(t, i), u(t, n), u(n, s), u(s, l), Q(r, l, null), u(l, c), Q(f, l, null), u(l, _), Q(b, l, null), u(s, T), u(s, g), u(g, C), u(s, m), u(s, k), it(
          k,
          /*time*/
          e[1]
        ), u(n, F), u(n, j), M = !0, tt || (Y = [
          w(
            o,
            "input",
            /*textarea_input_handler*/
            e[6]
          ),
          w(
            o,
            "keydown",
            /*keydown_handler*/
            e[7]
          ),
          w(
            k,
            "input",
            /*input_input_handler*/
            e[11]
          ),
          w(
            j,
            "click",
            /*createTodo*/
            e[3]
          )
        ], tt = !0);
      },
      p($, [P]) {
        P & /*title*/
        4 && it(
          o,
          /*title*/
          $[2]
        );
        const at = {};
        !d && P & /*tag*/
        1 && (d = !0, at.tag = /*tag*/
        $[0], L(() => d = !1)), r.$set(at);
        const ft = {};
        !p && P & /*tag*/
        1 && (p = !0, ft.tag = /*tag*/
        $[0], L(() => p = !1)), f.$set(ft);
        const R = {};
        !y && P & /*tag*/
        1 && (y = !0, R.tag = /*tag*/
        $[0], L(() => y = !1)), b.$set(R), (!M || P & /*time*/
        2) && Z(
          C,
          /*time*/
          $[1]
        ), P & /*time*/
        2 && it(
          k,
          /*time*/
          $[1]
        );
      },
      i($) {
        M || (H(r.$$.fragment, $), H(f.$$.fragment, $), H(b.$$.fragment, $), M = !0);
      },
      o($) {
        q(r.$$.fragment, $), q(f.$$.fragment, $), q(b.$$.fragment, $), M = !1;
      },
      d($) {
        $ && S(t), W(r), W(f), W(b), tt = !1, U(Y);
      }
    }
  );
}
function Le(e, t, o) {
  let { todos: i } = t, { todoCount: n } = t, s = "", l = localStorage.length, r = "", d = "";
  const c = (m) => {
    o(0, r = "");
  }, f = (m) => {
    m == "" ? m = "" : o(1, d = "");
  }, p = () => {
    if (!s.trim()) {
      o(2, s = "");
      return;
    }
    !r && !d && o(0, r = "매일"), i.push({ id: l, title: s, tag: r, time: d }), localStorage.setItem(`${l}`, JSON.stringify({ id: l, title: s, tag: r, time: d })), o(5, n += 1), o(4, i), o(2, s = ""), o(0, r = ""), o(1, d = ""), l += 1, console.log(i);
  };
  function _() {
    s = this.value, o(2, s);
  }
  const b = (m) => {
    m.key === "Enter" && m.isComposing == !1 && (m.preventDefault(), p());
  };
  function y(m) {
    r = m, o(0, r);
  }
  function T(m) {
    r = m, o(0, r);
  }
  function g(m) {
    r = m, o(0, r);
  }
  function C() {
    d = this.value, o(1, d);
  }
  return e.$$set = (m) => {
    "todos" in m && o(4, i = m.todos), "todoCount" in m && o(5, n = m.todoCount);
  }, e.$$.update = () => {
    e.$$.dirty & /*time*/
    2 && c(), e.$$.dirty & /*tag*/
    1 && f(r);
  }, [
    r,
    d,
    s,
    p,
    i,
    n,
    _,
    b,
    y,
    T,
    g,
    C
  ];
}
class te extends bt {
  constructor(t) {
    super(), mt(this, t, Le, Ie, ht, { todos: 4, todoCount: 5 }, Oe);
  }
  get todos() {
    return this.$$.ctx[4];
  }
  set todos(t) {
    this.$$set({ todos: t }), z();
  }
  get todoCount() {
    return this.$$.ctx[5];
  }
  set todoCount(t) {
    this.$$set({ todoCount: t }), z();
  }
}
_t(te, { todos: {}, todoCount: {} }, [], [], !0);
function Be(e) {
  pt(e, "svelte-1lsobs2", ".yet-task.svelte-1lsobs2{display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, auto));grid-auto-rows:minmax(240px, auto);gap:12px}");
}
function Gt(e, t, o) {
  const i = e.slice();
  return i[6] = t[o], i;
}
function Kt(e) {
  let t, o, i, n, s;
  function l(f) {
    e[3](f);
  }
  function r(f) {
    e[4](f);
  }
  function d(f) {
    e[5](f);
  }
  let c = { todo: (
    /*todo*/
    e[6]
  ) };
  return (
    /*todos*/
    e[0] !== void 0 && (c.todos = /*todos*/
    e[0]), /*successTodoCount*/
    e[1] !== void 0 && (c.successTodoCount = /*successTodoCount*/
    e[1]), /*todoCount*/
    e[2] !== void 0 && (c.todoCount = /*todoCount*/
    e[2]), t = new Zt({ props: c }), E.push(() => B(t, "todos", l)), E.push(() => B(t, "successTodoCount", r)), E.push(() => B(t, "todoCount", d)), {
      c() {
        rt(t.$$.fragment);
      },
      m(f, p) {
        Q(t, f, p), s = !0;
      },
      p(f, p) {
        const _ = {};
        p & /*todos*/
        1 && (_.todo = /*todo*/
        f[6]), !o && p & /*todos*/
        1 && (o = !0, _.todos = /*todos*/
        f[0], L(() => o = !1)), !i && p & /*successTodoCount*/
        2 && (i = !0, _.successTodoCount = /*successTodoCount*/
        f[1], L(() => i = !1)), !n && p & /*todoCount*/
        4 && (n = !0, _.todoCount = /*todoCount*/
        f[2], L(() => n = !1)), t.$set(_);
      },
      i(f) {
        s || (H(t.$$.fragment, f), s = !0);
      },
      o(f) {
        q(t.$$.fragment, f), s = !1;
      },
      d(f) {
        W(t, f);
      }
    }
  );
}
function Me(e) {
  let t, o, i = qt(
    /*todos*/
    e[0]
  ), n = [];
  for (let l = 0; l < i.length; l += 1)
    n[l] = Kt(Gt(e, i, l));
  const s = (l) => q(n[l], 1, 1, () => {
    n[l] = null;
  });
  return {
    c() {
      t = h("div");
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      a(t, "class", "yet-task svelte-1lsobs2");
    },
    m(l, r) {
      O(l, t, r);
      for (let d = 0; d < n.length; d += 1)
        n[d] && n[d].m(t, null);
      o = !0;
    },
    p(l, [r]) {
      if (r & /*todos, successTodoCount, todoCount*/
      7) {
        i = qt(
          /*todos*/
          l[0]
        );
        let d;
        for (d = 0; d < i.length; d += 1) {
          const c = Gt(l, i, d);
          n[d] ? (n[d].p(c, r), H(n[d], 1)) : (n[d] = Kt(c), n[d].c(), H(n[d], 1), n[d].m(t, null));
        }
        for (ve(), d = i.length; d < n.length; d += 1)
          s(d);
        xe();
      }
    },
    i(l) {
      if (!o) {
        for (let r = 0; r < i.length; r += 1)
          H(n[r]);
        o = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let r = 0; r < n.length; r += 1)
        q(n[r]);
      o = !1;
    },
    d(l) {
      l && S(t), fe(n, l);
    }
  };
}
function Je(e, t, o) {
  let { todos: i } = t, { successTodoCount: n } = t, { todoCount: s } = t;
  function l(c) {
    i = c, o(0, i);
  }
  function r(c) {
    n = c, o(1, n);
  }
  function d(c) {
    s = c, o(2, s);
  }
  return e.$$set = (c) => {
    "todos" in c && o(0, i = c.todos), "successTodoCount" in c && o(1, n = c.successTodoCount), "todoCount" in c && o(2, s = c.todoCount);
  }, [
    i,
    n,
    s,
    l,
    r,
    d
  ];
}
class ee extends bt {
  constructor(t) {
    super(), mt(
      this,
      t,
      Je,
      Me,
      ht,
      {
        todos: 0,
        successTodoCount: 1,
        todoCount: 2
      },
      Be
    );
  }
  get todos() {
    return this.$$.ctx[0];
  }
  set todos(t) {
    this.$$set({ todos: t }), z();
  }
  get successTodoCount() {
    return this.$$.ctx[1];
  }
  set successTodoCount(t) {
    this.$$set({ successTodoCount: t }), z();
  }
  get todoCount() {
    return this.$$.ctx[2];
  }
  set todoCount(t) {
    this.$$set({ todoCount: t }), z();
  }
}
_t(ee, { todos: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Re(e) {
  pt(e, "svelte-1i1xt2o", "header.svelte-1i1xt2o{width:100vw;display:flex;align-items:center;position:fixed;z-index:1;height:80px;background-color:black;color:white}.header-project-name.svelte-1i1xt2o{display:flex;align-items:center;margin:0 0 0 5%;padding-top:4px;font-size:4rem;font-weight:600}.header-project-introduce.svelte-1i1xt2o{margin-left:2%;font-size:2rem;margin-bottom:1%;align-self:flex-end}main.svelte-1i1xt2o{display:flex;width:100vw;height:fit-content;background-color:none;top:80px}.contents.svelte-1i1xt2o{width:80%;height:fit-content;justify-content:stretch;position:relative;top:80px;padding:3% 2% 0 2%;color:#121212;background-color:rgb(248, 250, 252)}.content.svelte-1i1xt2o{display:flex;flex-direction:column;margin-bottom:10%;border-radius:12px}.content-header.svelte-1i1xt2o{width:fit-content;display:flex;font-size:3rem;margin-bottom:12px;padding:1% 1%}aside.svelte-1i1xt2o{display:flex;flex-direction:column;width:20%}.sidebar.svelte-1i1xt2o{position:fixed;top:80px;display:flex;flex-direction:column;width:20%;height:100%;padding:1%;background-color:#ffffff}.nav.svelte-1i1xt2o{display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem}.nav.svelte-1i1xt2o:hover{cursor:pointer;display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;font-size:2rem;transition:0.2s linear;box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22)}.svelte-1i1xt2o{box-sizing:border-box}.profile.svelte-1i1xt2o{display:flex;padding:3% 4%;flex-direction:column;font-size:3rem;background-color:#ffffff;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;font-weight:600}.profile-task-info.svelte-1i1xt2o{width:fit-content;display:flex;flex-direction:column;font-weight:400}.profile-task-head.svelte-1i1xt2o{font-size:2rem;margin-top:0.5%;font-weight:400}.profile-task-count.svelte-1i1xt2o{font-size:2rem;margin-top:0.5%;margin:0 12px;font-weight:400}");
}
function De(e) {
  let t, o, i, n, s, l, r, d, c, f, p, _, b, y, T, g, C, m, k, F, j, M, tt, Y, dt, ut, $t, J, et, ct, $, P, at, ft, R, vt, Rt, V, zt, jt, Dt, G, xt, Ht, D, Et, St, Pt, ot, At, Ft;
  function oe(v) {
    e[7](v);
  }
  function ne(v) {
    e[8](v);
  }
  let Nt = {};
  /*todos*/
  e[0] !== void 0 && (Nt.todos = /*todos*/
  e[0]), /*todoCount*/
  e[1] !== void 0 && (Nt.todoCount = /*todoCount*/
  e[1]), V = new te({ props: Nt }), E.push(() => B(V, "todos", oe)), E.push(() => B(V, "todoCount", ne));
  function se(v) {
    e[9](v);
  }
  function ie(v) {
    e[10](v);
  }
  function le(v) {
    e[11](v);
  }
  let Ct = {};
  return (
    /*todos*/
    e[0] !== void 0 && (Ct.todos = /*todos*/
    e[0]), /*successTodoCount*/
    e[2] !== void 0 && (Ct.successTodoCount = /*successTodoCount*/
    e[2]), /*todoCount*/
    e[1] !== void 0 && (Ct.todoCount = /*todoCount*/
    e[1]), D = new ee({ props: Ct }), E.push(() => B(D, "todos", se)), E.push(() => B(D, "successTodoCount", ie)), E.push(() => B(D, "todoCount", le)), {
      c() {
        t = h("header"), t.innerHTML = '<span class="header-project-name svelte-1i1xt2o">PlanA</span> <span class="header-project-introduce svelte-1i1xt2o">Prevent PlanB</span>', o = x(), i = h("main"), n = h("aside"), s = h("div"), l = h("button"), l.textContent = "프로필", r = x(), d = h("button"), d.textContent = "과제 등록하기", c = x(), f = h("button"), f.textContent = "미완료 과제", p = x(), _ = h("div"), b = h("div"), y = h("div"), y.textContent = "프로필", T = x(), g = h("div"), C = N("반가워요! 👋 "), m = h("br"), k = x(), F = h("div"), j = h("div"), M = h("div"), M.textContent = "미완료 과제 :", tt = x(), Y = h("div"), dt = N(
          /*todoCount*/
          e[1]
        ), ut = N("개"), $t = x(), J = h("div"), et = h("div"), et.textContent = "완료 과제 :", ct = x(), $ = h("div"), P = N(
          /*successTodoCount*/
          e[2]
        ), at = N("개"), ft = x(), R = h("div"), vt = h("div"), vt.textContent = "과제 등록하기", Rt = x(), rt(V.$$.fragment), Dt = x(), G = h("div"), xt = h("div"), xt.textContent = "미완료 과제", Ht = x(), rt(D.$$.fragment), a(t, "class", "svelte-1i1xt2o"), a(l, "class", "nav svelte-1i1xt2o"), a(d, "class", "nav svelte-1i1xt2o"), a(f, "class", "nav svelte-1i1xt2o"), a(s, "class", "sidebar svelte-1i1xt2o"), a(n, "class", "svelte-1i1xt2o"), a(y, "class", "content-header svelte-1i1xt2o"), a(m, "class", "svelte-1i1xt2o"), a(M, "class", "profile-task-head svelte-1i1xt2o"), a(Y, "class", "profile-task-count svelte-1i1xt2o"), Yt(j, "display", "flex"), a(j, "class", "svelte-1i1xt2o"), a(et, "class", "profile-task-head svelte-1i1xt2o"), a($, "class", "profile-task-count svelte-1i1xt2o"), Yt(J, "display", "flex"), a(J, "class", "svelte-1i1xt2o"), a(F, "class", "profile-task-info svelte-1i1xt2o"), a(g, "class", "profile svelte-1i1xt2o"), a(b, "class", "content svelte-1i1xt2o"), a(b, "id", "profile"), a(vt, "class", "content-header svelte-1i1xt2o"), a(R, "class", "content svelte-1i1xt2o"), a(R, "id", "taskInput"), a(xt, "class", "content-header svelte-1i1xt2o"), a(G, "class", "content svelte-1i1xt2o"), a(G, "id", "yetTask"), a(_, "class", "contents svelte-1i1xt2o"), a(i, "class", "svelte-1i1xt2o");
      },
      m(v, I) {
        O(v, t, I), O(v, o, I), O(v, i, I), u(i, n), u(n, s), u(s, l), u(s, r), u(s, d), u(s, c), u(s, f), u(i, p), u(i, _), u(_, b), u(b, y), u(b, T), u(b, g), u(g, C), u(g, m), u(g, k), u(g, F), u(F, j), u(j, M), u(j, tt), u(j, Y), u(Y, dt), u(Y, ut), u(F, $t), u(F, J), u(J, et), u(J, ct), u(J, $), u($, P), u($, at), u(_, ft), u(_, R), u(R, vt), u(R, Rt), Q(V, R, null), u(_, Dt), u(_, G), u(G, xt), u(G, Ht), Q(D, G, null), ot = !0, At || (Ft = [
          w(
            l,
            "click",
            /*click_handler*/
            e[4]
          ),
          w(
            d,
            "click",
            /*click_handler_1*/
            e[5]
          ),
          w(
            f,
            "click",
            /*click_handler_2*/
            e[6]
          )
        ], At = !0);
      },
      p(v, [I]) {
        (!ot || I & /*todoCount*/
        2) && Z(
          dt,
          /*todoCount*/
          v[1]
        ), (!ot || I & /*successTodoCount*/
        4) && Z(
          P,
          /*successTodoCount*/
          v[2]
        );
        const Ot = {};
        !zt && I & /*todos*/
        1 && (zt = !0, Ot.todos = /*todos*/
        v[0], L(() => zt = !1)), !jt && I & /*todoCount*/
        2 && (jt = !0, Ot.todoCount = /*todoCount*/
        v[1], L(() => jt = !1)), V.$set(Ot);
        const yt = {};
        !Et && I & /*todos*/
        1 && (Et = !0, yt.todos = /*todos*/
        v[0], L(() => Et = !1)), !St && I & /*successTodoCount*/
        4 && (St = !0, yt.successTodoCount = /*successTodoCount*/
        v[2], L(() => St = !1)), !Pt && I & /*todoCount*/
        2 && (Pt = !0, yt.todoCount = /*todoCount*/
        v[1], L(() => Pt = !1)), D.$set(yt);
      },
      i(v) {
        ot || (H(V.$$.fragment, v), H(D.$$.fragment, v), ot = !0);
      },
      o(v) {
        q(V.$$.fragment, v), q(D.$$.fragment, v), ot = !1;
      },
      d(v) {
        v && (S(t), S(o), S(i)), W(V), W(D), At = !1, U(Ft);
      }
    }
  );
}
function He(e, t, o) {
  const i = (g) => {
    console.log("scroll");
    let C = document.getElementById(g).offsetTop;
    window.scrollTo({ top: C - 50, behavior: "smooth" });
  };
  let n = [], s = localStorage.length, l = 0, r = "";
  s == 0 ? (localStorage.setItem("success", "0"), r = localStorage.getItem("success"), s = localStorage.length, l = s - 1) : (r = localStorage.getItem("success"), s = localStorage.length, l = s - 1);
  for (let g = 0; g < s; g++)
    ["success", "todoCount"].includes(localStorage.key(g)) || n.push(JSON.parse(localStorage.getItem(localStorage.key(g))));
  const d = () => i("profile"), c = () => i("taskInput"), f = () => i("yetTask");
  function p(g) {
    n = g, o(0, n);
  }
  function _(g) {
    l = g, o(1, l);
  }
  function b(g) {
    n = g, o(0, n);
  }
  function y(g) {
    r = g, o(2, r);
  }
  function T(g) {
    l = g, o(1, l);
  }
  return [
    n,
    l,
    r,
    i,
    d,
    c,
    f,
    p,
    _,
    b,
    y,
    T
  ];
}
class Fe extends bt {
  constructor(t) {
    super(), mt(this, t, He, De, ht, {}, Re);
  }
}
customElements.define("my-component", _t(Fe, {}, [], [], !0));
export {
  Fe as SvelteApp
};
