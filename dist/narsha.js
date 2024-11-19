var re = Object.defineProperty;
var ue = (e, t, o) => t in e ? re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var N = (e, t, o) => ue(e, typeof t != "symbol" ? t + "" : t, o);
function Z() {
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
function de(e) {
  return Object.keys(e).length === 0;
}
function Ut(e) {
  return e ?? "";
}
function c(e, t) {
  e.appendChild(t);
}
function gt(e, t, o) {
  const i = ce(e);
  if (!i.getElementById(t)) {
    const n = p("style");
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
  return c(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function I(e, t, o) {
  e.insertBefore(t, o || null);
}
function P(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function fe(e, t) {
  for (let o = 0; o < e.length; o += 1)
    e[o] && e[o].d(t);
}
function p(e) {
  return document.createElement(e);
}
function O(e) {
  return document.createTextNode(e);
}
function C() {
  return O(" ");
}
function pe() {
  return O("");
}
function E(e, t, o, i) {
  return e.addEventListener(t, o, i), () => e.removeEventListener(t, o, i);
}
function a(e, t, o) {
  o == null ? e.removeAttribute(t) : e.getAttribute(t) !== o && e.setAttribute(t, o);
}
function he(e) {
  return Array.from(e.childNodes);
}
function tt(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function it(e, t) {
  e.value = t ?? "";
}
function Yt(e, t, o, i) {
  e.style.setProperty(t, o, "");
}
function ge(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (o) => {
      t[o.slot || "default"] = !0;
    }
  ), t;
}
let Rt;
function pt(e) {
  Rt = e;
}
const st = [], T = [];
let lt = [];
const Lt = [], _e = /* @__PURE__ */ Promise.resolve();
let Bt = !1;
function be() {
  Bt || (Bt = !0, _e.then(j));
}
function Mt(e) {
  lt.push(e);
}
function R(e) {
  Lt.push(e);
}
const It = /* @__PURE__ */ new Set();
let nt = 0;
function j() {
  if (nt !== 0)
    return;
  const e = Rt;
  do {
    try {
      for (; nt < st.length; ) {
        const t = st[nt];
        nt++, pt(t), me(t.$$);
      }
    } catch (t) {
      throw st.length = 0, nt = 0, t;
    }
    for (pt(null), st.length = 0, nt = 0; T.length; ) T.pop()();
    for (let t = 0; t < lt.length; t += 1) {
      const o = lt[t];
      It.has(o) || (It.add(o), o());
    }
    lt.length = 0;
  } while (st.length);
  for (; Lt.length; )
    Lt.pop()();
  Bt = !1, It.clear(), pt(e);
}
function me(e) {
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
let Q;
function ve() {
  Q = {
    r: 0,
    c: [],
    p: Q
    // parent group
  };
}
function we() {
  Q.r || U(Q.c), Q = Q.p;
}
function F(e, t) {
  e && e.i && (kt.delete(e), e.i(t));
}
function K(e, t, o, i) {
  if (e && e.o) {
    if (kt.has(e)) return;
    kt.add(e), Q.c.push(() => {
      kt.delete(e), i && (o && e.d(1), i());
    }), e.o(t);
  } else i && i();
}
function qt(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function J(e, t, o) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = o, o(e.$$.ctx[i]));
}
function rt(e) {
  e && e.c();
}
function W(e, t, o) {
  const { fragment: i, after_update: n } = e.$$;
  i && i.m(t, o), Mt(() => {
    const s = e.$$.on_mount.map(Qt).filter(Wt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : U(s), e.$$.on_mount = [];
  }), n.forEach(Mt);
}
function X(e, t) {
  const o = e.$$;
  o.fragment !== null && ($e(o.after_update), U(o.on_destroy), o.fragment && o.fragment.d(t), o.on_destroy = o.fragment = null, o.ctx = []);
}
function Ce(e, t) {
  e.$$.dirty[0] === -1 && (st.push(e), be(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function _t(e, t, o, i, n, s, r = null, l = [-1]) {
  const u = Rt;
  pt(e);
  const d = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: Z,
    not_equal: n,
    bound: Vt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Vt(),
    dirty: l,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  r && r(d.root);
  let f = !1;
  if (d.ctx = o ? o(e, t.props || {}, (g, m, ...$) => {
    const k = $.length ? $[0] : m;
    return d.ctx && n(d.ctx[g], d.ctx[g] = k) && (!d.skip_bound && d.bound[g] && d.bound[g](k), f && Ce(e, g)), m;
  }) : [], d.update(), f = !0, U(d.before_update), d.fragment = i ? i(d.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = he(t.target);
      d.fragment && d.fragment.l(g), g.forEach(P);
    } else
      d.fragment && d.fragment.c();
    t.intro && F(e.$$.fragment), W(e, t.target, t.anchor), j();
  }
  pt(u);
}
let Xt;
typeof HTMLElement == "function" && (Xt = class extends HTMLElement {
  constructor(t, o, i) {
    super();
    /** The Svelte component constructor */
    N(this, "$$ctor");
    /** Slots */
    N(this, "$$s");
    /** The Svelte component instance */
    N(this, "$$c");
    /** Whether or not the custom element is connected */
    N(this, "$$cn", !1);
    /** Component props data */
    N(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    N(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    N(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    N(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    N(this, "$$l_u", /* @__PURE__ */ new Map());
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
          let r;
          return {
            c: function() {
              r = p("slot"), s !== "default" && a(r, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(d, f) {
              I(d, r, f);
            },
            d: function(d) {
              d && P(r);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const o = {}, i = ge(this);
      for (const s of this.$$s)
        s in i && (o[s] = [t(s)]);
      for (const s of this.attributes) {
        const r = this.$$g_p(s.name);
        r in this.$$d || (this.$$d[r] = xt(r, s.value, this.$$p_d, "toProp"));
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
            const r = xt(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            r == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, r);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(n), n();
      for (const s in this.$$l)
        for (const r of this.$$l[s]) {
          const l = this.$$c.$on(s, r);
          this.$$l_u.set(r, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, o, i) {
    var n;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = xt(t, i, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
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
function xt(e, t, o, i) {
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
function bt(e, t, o, i, n, s) {
  let r = class extends Xt {
    constructor() {
      super(e, o, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((l) => {
    Object.defineProperty(r.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var d;
        u = xt(l, u, t), this.$$d[l] = u, (d = this.$$c) == null || d.$set({ [l]: u });
      }
    });
  }), i.forEach((l) => {
    Object.defineProperty(r.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), e.element = /** @type {any} */
  r, r;
}
class mt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    N(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    N(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    X(this, 1), this.$destroy = Z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, o) {
    if (!Wt(o))
      return Z;
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
    this.$$set && !de(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ye = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ye);
function ke(e) {
  gt(e, "svelte-1m9rn1b", ".tag-unselected.svelte-1m9rn1b{padding:4px 6px;font-size:2rem;background-color:transparent;border-radius:4px}.tag-selected.svelte-1m9rn1b{padding:4px 6px;height:fit-content;width:fit-content;font-size:2rem;background-color:#6554AF;color:white;border-radius:4px}.radio-button.svelte-1m9rn1b{display:none}");
}
function xe(e) {
  let t, o, i, n, s, r, l;
  return {
    c() {
      t = p("label"), o = p("input"), i = C(), n = O(
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
    m(u, d) {
      I(u, t, d), c(t, o), c(t, i), c(t, n), r || (l = E(
        o,
        "click",
        /*tagToggle*/
        e[3]
      ), r = !0);
    },
    p(u, [d]) {
      d & /*todoTag*/
      2 && a(
        o,
        "name",
        /*todoTag*/
        u[1]
      ), d & /*tagPrint*/
      4 && a(
        o,
        "id",
        /*tagPrint*/
        u[2]
      ), d & /*tagPrint*/
      4 && tt(
        n,
        /*tagPrint*/
        u[2]
      ), d & /*tagPrint*/
      4 && a(
        t,
        "for",
        /*tagPrint*/
        u[2]
      ), d & /*tag, tagPrint*/
      5 && s !== (s = Ut(
        /*tag*/
        u[0] === /*tagPrint*/
        u[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b") && a(t, "class", s);
    },
    i: Z,
    o: Z,
    d(u) {
      u && P(t), r = !1, l();
    }
  };
}
function Te(e, t, o) {
  let { todoTag: i } = t, { tagPrint: n } = t, { tag: s } = t;
  const r = () => {
    o(0, s = n);
  };
  return e.$$set = (l) => {
    "todoTag" in l && o(1, i = l.todoTag), "tagPrint" in l && o(2, n = l.tagPrint), "tag" in l && o(0, s = l.tag);
  }, [s, i, n, r];
}
class Tt extends mt {
  constructor(t) {
    super(), _t(this, t, Te, xe, ht, { todoTag: 1, tagPrint: 2, tag: 0 }, ke);
  }
  get todoTag() {
    return this.$$.ctx[1];
  }
  set todoTag(t) {
    this.$$set({ todoTag: t }), j();
  }
  get tagPrint() {
    return this.$$.ctx[2];
  }
  set tagPrint(t) {
    this.$$set({ tagPrint: t }), j();
  }
  get tag() {
    return this.$$.ctx[0];
  }
  set tag(t) {
    this.$$set({ tag: t }), j();
  }
}
bt(Tt, { todoTag: {}, tagPrint: {}, tag: {} }, [], [], !0);
function ze(e) {
  gt(e, "svelte-1i5n05w", ".edit-input.svelte-1i5n05w{outline:none;background-color:#fff;color:rgb(85, 85, 85);background-color:white;border:none;border-radius:1px;font-size:2rem;padding:1px 0}.todo-print.svelte-1i5n05w{display:flex;flex-direction:column;justify-content:space-between;padding:6% 8%;font-size:2rem;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:12px}.todo-footer.svelte-1i5n05w{display:flex;flex-direction:column;align-items:start;gap:4px}.time.svelte-1i5n05w{font-size:1.6rem}.todo-control-button.svelte-1i5n05w{padding:2px 10px;background-color:white;color:black;border:none;border-radius:2px;font-size:14px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;white-space:nowrap}.todo-control-button.svelte-1i5n05w:hover{box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22);transition:0.2s linear;white-space:nowrap}");
}
function Ee(e) {
  let t, o = (
    /*todo*/
    e[0].title + ""
  ), i, n, s, r, l, u, d, f, g, m, $, k;
  function S(h, x) {
    return (
      /*todo*/
      h[0].time ? Pe : je
    );
  }
  let b = S(e), y = b(e);
  return {
    c() {
      t = p("div"), i = O(o), n = C(), s = p("div"), y.c(), r = C(), l = p("div"), u = p("button"), u.textContent = "수정", d = C(), f = p("button"), f.textContent = "완료", g = C(), m = p("button"), m.textContent = "삭제", a(u, "class", "todo-control-button svelte-1i5n05w"), a(f, "class", "todo-control-button svelte-1i5n05w"), a(m, "class", "todo-control-button svelte-1i5n05w"), a(l, "class", "todo-control"), a(s, "class", "todo-footer svelte-1i5n05w"), a(t, "class", "todo-print svelte-1i5n05w");
    },
    m(h, x) {
      I(h, t, x), c(t, i), c(t, n), c(t, s), y.m(s, null), c(s, r), c(s, l), c(l, u), c(l, d), c(l, f), c(l, g), c(l, m), $ || (k = [
        E(
          u,
          "click",
          /*onEdit*/
          e[3]
        ),
        E(
          f,
          "click",
          /*successTodo*/
          e[6]
        ),
        E(
          m,
          "click",
          /*deleteTodo*/
          e[7]
        )
      ], $ = !0);
    },
    p(h, x) {
      x & /*todo*/
      1 && o !== (o = /*todo*/
      h[0].title + "") && tt(i, o), b === (b = S(h)) && y ? y.p(h, x) : (y.d(1), y = b(h), y && (y.c(), y.m(s, r)));
    },
    d(h) {
      h && P(t), y.d(), $ = !1, U(k);
    }
  };
}
function Se(e) {
  let t, o, i, n, s, r, l, u, d;
  return {
    c() {
      t = p("div"), o = p("input"), i = C(), n = p("div"), s = p("button"), s.textContent = "수정 완료", r = C(), l = p("button"), l.textContent = "취소", a(o, "type", "text"), a(o, "class", "edit-input svelte-1i5n05w"), a(s, "class", "todo-control-button svelte-1i5n05w"), a(l, "class", "todo-control-button svelte-1i5n05w"), a(n, "class", "todo-control"), a(t, "class", "todo-print svelte-1i5n05w");
    },
    m(f, g) {
      I(f, t, g), c(t, o), it(
        o,
        /*title*/
        e[2]
      ), c(t, i), c(t, n), c(n, s), c(n, r), c(n, l), u || (d = [
        E(
          o,
          "input",
          /*input_input_handler*/
          e[11]
        ),
        E(
          o,
          "keydown",
          /*keydown_handler*/
          e[12]
        ),
        E(
          s,
          "click",
          /*updateTodo*/
          e[5]
        ),
        E(
          l,
          "click",
          /*offEdit*/
          e[4]
        )
      ], u = !0);
    },
    p(f, g) {
      g & /*title*/
      4 && o.value !== /*title*/
      f[2] && it(
        o,
        /*title*/
        f[2]
      );
    },
    d(f) {
      f && P(t), u = !1, U(d);
    }
  };
}
function je(e) {
  let t, o = (
    /*todo*/
    e[0].tag + ""
  ), i;
  return {
    c() {
      t = p("span"), i = O(o), a(t, "class", "time svelte-1i5n05w");
    },
    m(n, s) {
      I(n, t, s), c(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].tag + "") && tt(i, o);
    },
    d(n) {
      n && P(t);
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
      t = p("span"), i = O(o), a(t, "class", "time svelte-1i5n05w");
    },
    m(n, s) {
      I(n, t, s), c(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].time + "") && tt(i, o);
    },
    d(n) {
      n && P(t);
    }
  };
}
function Ae(e) {
  let t;
  function o(s, r) {
    return (
      /*isEdit*/
      s[1] ? Se : Ee
    );
  }
  let i = o(e), n = i(e);
  return {
    c() {
      n.c(), t = pe();
    },
    m(s, r) {
      n.m(s, r), I(s, t, r);
    },
    p(s, [r]) {
      i === (i = o(s)) && n ? n.p(s, r) : (n.d(1), n = i(s), n && (n.c(), n.m(t.parentNode, t)));
    },
    i: Z,
    o: Z,
    d(s) {
      s && P(t), n.d(s);
    }
  };
}
function Ne(e, t, o) {
  let { todos: i } = t, { todo: n } = t, { successTodoCount: s } = t, { todoCount: r } = t, l = !1, u = "";
  const d = () => {
    o(1, l = !0), o(2, u = n.title);
  }, f = () => {
    o(1, l = !1);
  }, g = () => {
    o(0, n.title = u, n), f();
  }, m = () => {
    localStorage.removeItem("success"), localStorage.setItem("success", `${Number(s) + 1}`), o(9, s = localStorage.getItem("success")), $();
  }, $ = () => {
    o(8, i = i.filter((b) => b.id != n.id)), console.log(i), o(8, i), localStorage.removeItem(`${n.id}`), o(10, r -= 1);
  };
  function k() {
    u = this.value, o(2, u);
  }
  const S = (b) => {
    b.key === "Enter" && g();
  };
  return e.$$set = (b) => {
    "todos" in b && o(8, i = b.todos), "todo" in b && o(0, n = b.todo), "successTodoCount" in b && o(9, s = b.successTodoCount), "todoCount" in b && o(10, r = b.todoCount);
  }, [
    n,
    l,
    u,
    d,
    f,
    g,
    m,
    $,
    i,
    s,
    r,
    k,
    S
  ];
}
class Zt extends mt {
  constructor(t) {
    super(), _t(
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
    this.$$set({ todos: t }), j();
  }
  get todo() {
    return this.$$.ctx[0];
  }
  set todo(t) {
    this.$$set({ todo: t }), j();
  }
  get successTodoCount() {
    return this.$$.ctx[9];
  }
  set successTodoCount(t) {
    this.$$set({ successTodoCount: t }), j();
  }
  get todoCount() {
    return this.$$.ctx[10];
  }
  set todoCount(t) {
    this.$$set({ todoCount: t }), j();
  }
}
bt(Zt, { todos: {}, todo: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Oe(e) {
  gt(e, "svelte-1dz26oo", '.todo-create-container.svelte-1dz26oo{display:flex;align-items:end;gap:16px}.todo-write.svelte-1dz26oo{display:flex;justify-content:center;width:50%;height:400px;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;color:black;outline:none;padding:1.6% 2%;font-size:2rem;resize:none}.todo-info.svelte-1dz26oo{width:50%;height:400px;display:flex;flex-direction:column;justify-content:space-between}.todo-info-selecter.svelte-1dz26oo{position:relative}.todo-date.svelte-1dz26oo{margin-top:12px}.todo-time-viewer.svelte-1dz26oo{position:absolute;font-size:2rem;top:58px;left:20px;z-index:0;color:#121212}input[type="date"].svelte-1dz26oo{position:relative;width:95%;height:48px;padding:10px;text-align:left;font-size:100%;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;background-color:transparent;color:transparent;border-radius:16px;z-index:0;user-select:none}input[type="date"].svelte-1dz26oo::-webkit-calendar-picker-indicator{position:absolute;left:-80px;top:0;width:100%;color:black;height:100%;cursor:pointer}.todo-tag-selecter.svelte-1dz26oo{display:flex;gap:12px}.todo-create-button.svelte-1dz26oo{width:100%;height:50px;font-size:2rem;background-color:#6554AF;color:white;border-radius:20px;border:none;cursor:pointer}.todo-create-button.svelte-1dz26oo:hover{background-color:#59499C}.todo-create-button.svelte-1dz26oo:active{background-color:#7566B7}');
}
function Ie(e) {
  let t, o, i, n, s, r, l, u, d, f, g, m, $, k, S, b, y, h, x, L, z, _, Y, q;
  function ut(v) {
    e[8](v);
  }
  let dt = { todoTag: "todoTag", tagPrint: "매일" };
  /*tag*/
  e[0] !== void 0 && (dt.tag = /*tag*/
  e[0]), l = new Tt({ props: dt }), T.push(() => J(l, "tag", ut));
  function $t(v) {
    e[9](v);
  }
  let D = { todoTag: "todoTag", tagPrint: "매주" };
  /*tag*/
  e[0] !== void 0 && (D.tag = /*tag*/
  e[0]), f = new Tt({ props: D }), T.push(() => J(f, "tag", $t));
  function et(v) {
    e[10](v);
  }
  let ct = { todoTag: "todoTag", tagPrint: "매달" };
  return (
    /*tag*/
    e[0] !== void 0 && (ct.tag = /*tag*/
    e[0]), $ = new Tt({ props: ct }), T.push(() => J($, "tag", et)), {
      c() {
        t = p("div"), o = p("textarea"), i = C(), n = p("div"), s = p("div"), r = p("div"), rt(l.$$.fragment), d = C(), rt(f.$$.fragment), m = C(), rt($.$$.fragment), S = C(), b = p("div"), y = O(
          /*time*/
          e[1]
        ), h = C(), x = p("input"), L = C(), z = p("button"), z.textContent = "작성 완료하기", a(o, "name", ""), a(o, "id", ""), a(o, "class", "todo-write svelte-1dz26oo"), a(o, "placeholder", "할 일 등록하기"), a(r, "class", "todo-tag-selecter svelte-1dz26oo"), a(b, "class", "todo-time-viewer svelte-1dz26oo"), a(x, "type", "date"), a(x, "class", "todo-date svelte-1dz26oo"), a(s, "class", "todo-info-selecter svelte-1dz26oo"), a(z, "class", "todo-create-button svelte-1dz26oo"), a(n, "class", "todo-info svelte-1dz26oo"), a(t, "class", "todo-create-container svelte-1dz26oo");
      },
      m(v, A) {
        I(v, t, A), c(t, o), it(
          o,
          /*title*/
          e[2]
        ), c(t, i), c(t, n), c(n, s), c(s, r), W(l, r, null), c(r, d), W(f, r, null), c(r, m), W($, r, null), c(s, S), c(s, b), c(b, y), c(s, h), c(s, x), it(
          x,
          /*time*/
          e[1]
        ), c(n, L), c(n, z), _ = !0, Y || (q = [
          E(
            o,
            "input",
            /*textarea_input_handler*/
            e[6]
          ),
          E(
            o,
            "keydown",
            /*keydown_handler*/
            e[7]
          ),
          E(
            x,
            "input",
            /*input_input_handler*/
            e[11]
          ),
          E(
            z,
            "click",
            /*createTodo*/
            e[3]
          )
        ], Y = !0);
      },
      p(v, [A]) {
        A & /*title*/
        4 && it(
          o,
          /*title*/
          v[2]
        );
        const at = {};
        !u && A & /*tag*/
        1 && (u = !0, at.tag = /*tag*/
        v[0], R(() => u = !1)), l.$set(at);
        const ft = {};
        !g && A & /*tag*/
        1 && (g = !0, ft.tag = /*tag*/
        v[0], R(() => g = !1)), f.$set(ft);
        const B = {};
        !k && A & /*tag*/
        1 && (k = !0, B.tag = /*tag*/
        v[0], R(() => k = !1)), $.$set(B), (!_ || A & /*time*/
        2) && tt(
          y,
          /*time*/
          v[1]
        ), A & /*time*/
        2 && it(
          x,
          /*time*/
          v[1]
        );
      },
      i(v) {
        _ || (F(l.$$.fragment, v), F(f.$$.fragment, v), F($.$$.fragment, v), _ = !0);
      },
      o(v) {
        K(l.$$.fragment, v), K(f.$$.fragment, v), K($.$$.fragment, v), _ = !1;
      },
      d(v) {
        v && P(t), X(l), X(f), X($), Y = !1, U(q);
      }
    }
  );
}
function Le(e, t, o) {
  let { todos: i } = t, { todoCount: n } = t, s = "", r = localStorage.length, l = "", u = "";
  const d = (h) => {
    o(0, l = "");
  }, f = (h) => {
    h == "" ? h = "" : o(1, u = "");
  }, g = () => {
    if (!s.trim()) {
      o(2, s = "");
      return;
    }
    !l && !u && o(0, l = "매일"), i.push({ id: r, title: s, tag: l, time: u }), localStorage.setItem(`${r}`, JSON.stringify({ id: r, title: s, tag: l, time: u })), o(5, n += 1), o(4, i), o(2, s = ""), o(0, l = ""), o(1, u = ""), r += 1, console.log(i);
  };
  function m() {
    s = this.value, o(2, s);
  }
  const $ = (h) => {
    h.key === "Enter" && h.isComposing == !1 && (h.preventDefault(), g());
  };
  function k(h) {
    l = h, o(0, l);
  }
  function S(h) {
    l = h, o(0, l);
  }
  function b(h) {
    l = h, o(0, l);
  }
  function y() {
    u = this.value, o(1, u);
  }
  return e.$$set = (h) => {
    "todos" in h && o(4, i = h.todos), "todoCount" in h && o(5, n = h.todoCount);
  }, e.$$.update = () => {
    e.$$.dirty & /*time*/
    2 && d(), e.$$.dirty & /*tag*/
    1 && f(l);
  }, [
    l,
    u,
    s,
    g,
    i,
    n,
    m,
    $,
    k,
    S,
    b,
    y
  ];
}
class te extends mt {
  constructor(t) {
    super(), _t(this, t, Le, Ie, ht, { todos: 4, todoCount: 5 }, Oe);
  }
  get todos() {
    return this.$$.ctx[4];
  }
  set todos(t) {
    this.$$set({ todos: t }), j();
  }
  get todoCount() {
    return this.$$.ctx[5];
  }
  set todoCount(t) {
    this.$$set({ todoCount: t }), j();
  }
}
bt(te, { todos: {}, todoCount: {} }, [], [], !0);
function Be(e) {
  gt(e, "svelte-1lsobs2", ".yet-task.svelte-1lsobs2{display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, auto));grid-auto-rows:minmax(240px, auto);gap:12px}");
}
function Gt(e, t, o) {
  const i = e.slice();
  return i[6] = t[o], i;
}
function Kt(e) {
  let t, o, i, n, s;
  function r(f) {
    e[3](f);
  }
  function l(f) {
    e[4](f);
  }
  function u(f) {
    e[5](f);
  }
  let d = { todo: (
    /*todo*/
    e[6]
  ) };
  return (
    /*todos*/
    e[0] !== void 0 && (d.todos = /*todos*/
    e[0]), /*successTodoCount*/
    e[1] !== void 0 && (d.successTodoCount = /*successTodoCount*/
    e[1]), /*todoCount*/
    e[2] !== void 0 && (d.todoCount = /*todoCount*/
    e[2]), t = new Zt({ props: d }), T.push(() => J(t, "todos", r)), T.push(() => J(t, "successTodoCount", l)), T.push(() => J(t, "todoCount", u)), {
      c() {
        rt(t.$$.fragment);
      },
      m(f, g) {
        W(t, f, g), s = !0;
      },
      p(f, g) {
        const m = {};
        g & /*todos*/
        1 && (m.todo = /*todo*/
        f[6]), !o && g & /*todos*/
        1 && (o = !0, m.todos = /*todos*/
        f[0], R(() => o = !1)), !i && g & /*successTodoCount*/
        2 && (i = !0, m.successTodoCount = /*successTodoCount*/
        f[1], R(() => i = !1)), !n && g & /*todoCount*/
        4 && (n = !0, m.todoCount = /*todoCount*/
        f[2], R(() => n = !1)), t.$set(m);
      },
      i(f) {
        s || (F(t.$$.fragment, f), s = !0);
      },
      o(f) {
        K(t.$$.fragment, f), s = !1;
      },
      d(f) {
        X(t, f);
      }
    }
  );
}
function Me(e) {
  let t, o, i = qt(
    /*todos*/
    e[0]
  ), n = [];
  for (let r = 0; r < i.length; r += 1)
    n[r] = Kt(Gt(e, i, r));
  const s = (r) => K(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      t = p("div");
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      a(t, "class", "yet-task svelte-1lsobs2");
    },
    m(r, l) {
      I(r, t, l);
      for (let u = 0; u < n.length; u += 1)
        n[u] && n[u].m(t, null);
      o = !0;
    },
    p(r, [l]) {
      if (l & /*todos, successTodoCount, todoCount*/
      7) {
        i = qt(
          /*todos*/
          r[0]
        );
        let u;
        for (u = 0; u < i.length; u += 1) {
          const d = Gt(r, i, u);
          n[u] ? (n[u].p(d, l), F(n[u], 1)) : (n[u] = Kt(d), n[u].c(), F(n[u], 1), n[u].m(t, null));
        }
        for (ve(), u = i.length; u < n.length; u += 1)
          s(u);
        we();
      }
    },
    i(r) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          F(n[l]);
        o = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let l = 0; l < n.length; l += 1)
        K(n[l]);
      o = !1;
    },
    d(r) {
      r && P(t), fe(n, r);
    }
  };
}
function Re(e, t, o) {
  let { todos: i } = t, { successTodoCount: n } = t, { todoCount: s } = t;
  function r(d) {
    i = d, o(0, i);
  }
  function l(d) {
    n = d, o(1, n);
  }
  function u(d) {
    s = d, o(2, s);
  }
  return e.$$set = (d) => {
    "todos" in d && o(0, i = d.todos), "successTodoCount" in d && o(1, n = d.successTodoCount), "todoCount" in d && o(2, s = d.todoCount);
  }, [
    i,
    n,
    s,
    r,
    l,
    u
  ];
}
class ee extends mt {
  constructor(t) {
    super(), _t(
      this,
      t,
      Re,
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
    this.$$set({ todos: t }), j();
  }
  get successTodoCount() {
    return this.$$.ctx[1];
  }
  set successTodoCount(t) {
    this.$$set({ successTodoCount: t }), j();
  }
  get todoCount() {
    return this.$$.ctx[2];
  }
  set todoCount(t) {
    this.$$set({ todoCount: t }), j();
  }
}
bt(ee, { todos: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Je(e) {
  gt(e, "svelte-1peupih", "header.svelte-1peupih{width:100vw;display:flex;align-items:center;position:fixed;z-index:1;height:80px;background-color:black;color:white}.header-project-name.svelte-1peupih{display:flex;align-items:center;margin:0 0 0 5%;padding-top:4px;font-size:4rem;font-weight:600}.header-project-introduce.svelte-1peupih{margin-left:2%;font-size:2rem;margin-bottom:1%;align-self:flex-end;font-weight:400}main.svelte-1peupih{display:flex;width:100vw;height:fit-content;background-color:none;top:80px}.contents.svelte-1peupih{width:80%;height:fit-content;justify-content:stretch;position:relative;top:80px;padding:3% 2% 0 2%;color:#121212;background-color:rgb(248, 250, 252)}.content.svelte-1peupih{display:flex;flex-direction:column;margin-bottom:10%;border-radius:12px}.content-header.svelte-1peupih{width:fit-content;display:flex;font-size:3rem;margin-bottom:12px;padding:1% 1%}aside.svelte-1peupih{display:flex;flex-direction:column;width:20%}.sidebar.svelte-1peupih{position:fixed;top:80px;display:flex;flex-direction:column;width:20%;height:100%;padding:1%;background-color:#ffffff}.nav.svelte-1peupih{display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem}.nav.svelte-1peupih:hover{cursor:pointer;display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;font-size:2rem;transition:0.2s linear;box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22)}.svelte-1peupih{box-sizing:border-box}.profile.svelte-1peupih{display:flex;padding:3% 4%;flex-direction:column;font-size:3rem;background-color:#ffffff;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;font-weight:600}.profile-task-info.svelte-1peupih{width:fit-content;display:flex;flex-direction:column;font-weight:400}.profile-task-head.svelte-1peupih{font-size:2rem;margin-top:0.5%;font-weight:400}.profile-task-count.svelte-1peupih{font-size:2rem;margin-top:0.5%;margin:0 12px;font-weight:400}");
}
function De(e) {
  let t, o, i, n, s, r, l, u, d, f, g, m, $, k, S, b, y, h, x, L, z, _, Y, q, ut, dt, $t, D, et, ct, v, A, at, ft, B, vt, Jt, V, zt, Et, Dt, G, wt, Ht, H, St, jt, Pt, ot, At, Ft;
  function oe(w) {
    e[11](w);
  }
  function ne(w) {
    e[12](w);
  }
  let Nt = {};
  /*todos*/
  e[3] !== void 0 && (Nt.todos = /*todos*/
  e[3]), /*todoCount*/
  e[4] !== void 0 && (Nt.todoCount = /*todoCount*/
  e[4]), V = new te({ props: Nt }), T.push(() => J(V, "todos", oe)), T.push(() => J(V, "todoCount", ne));
  function se(w) {
    e[14](w);
  }
  function ie(w) {
    e[15](w);
  }
  function le(w) {
    e[16](w);
  }
  let Ct = {};
  return (
    /*todos*/
    e[3] !== void 0 && (Ct.todos = /*todos*/
    e[3]), /*successTodoCount*/
    e[5] !== void 0 && (Ct.successTodoCount = /*successTodoCount*/
    e[5]), /*todoCount*/
    e[4] !== void 0 && (Ct.todoCount = /*todoCount*/
    e[4]), H = new ee({ props: Ct }), T.push(() => J(H, "todos", se)), T.push(() => J(H, "successTodoCount", ie)), T.push(() => J(H, "todoCount", le)), {
      c() {
        t = p("header"), t.innerHTML = '<span class="header-project-name svelte-1peupih">PlanA</span> <span class="header-project-introduce svelte-1peupih">To Prevent PlanB</span>', o = C(), i = p("main"), n = p("aside"), s = p("div"), r = p("button"), r.textContent = "프로필", l = C(), u = p("button"), u.textContent = "과제 등록하기", d = C(), f = p("button"), f.textContent = "미완료 과제", g = C(), m = p("div"), $ = p("div"), k = p("div"), k.textContent = "프로필", S = C(), b = p("div"), y = O("반가워요! 👋 "), h = p("br"), x = C(), L = p("div"), z = p("div"), _ = p("div"), _.textContent = "미완료 과제 :", Y = C(), q = p("div"), ut = O(
          /*todoCount*/
          e[4]
        ), dt = O("개"), $t = C(), D = p("div"), et = p("div"), et.textContent = "완료 과제 :", ct = C(), v = p("div"), A = O(
          /*successTodoCount*/
          e[5]
        ), at = O("개"), ft = C(), B = p("div"), vt = p("div"), vt.textContent = "과제 등록하기", Jt = C(), rt(V.$$.fragment), Dt = C(), G = p("div"), wt = p("div"), wt.textContent = "미완료 과제", Ht = C(), rt(H.$$.fragment), a(t, "class", "svelte-1peupih"), a(r, "class", "nav svelte-1peupih"), a(u, "class", "nav svelte-1peupih"), a(f, "class", "nav svelte-1peupih"), a(s, "class", "sidebar svelte-1peupih"), a(n, "class", "svelte-1peupih"), a(k, "class", "content-header svelte-1peupih"), a(h, "class", "svelte-1peupih"), a(_, "class", "profile-task-head svelte-1peupih"), a(q, "class", "profile-task-count svelte-1peupih"), Yt(z, "display", "flex"), a(z, "class", "svelte-1peupih"), a(et, "class", "profile-task-head svelte-1peupih"), a(v, "class", "profile-task-count svelte-1peupih"), Yt(D, "display", "flex"), a(D, "class", "svelte-1peupih"), a(L, "class", "profile-task-info svelte-1peupih"), a(b, "class", "profile svelte-1peupih"), a($, "class", "content svelte-1peupih"), a($, "id", "profile"), a(vt, "class", "content-header svelte-1peupih"), a(B, "class", "content svelte-1peupih"), a(B, "id", "taskInput"), a(wt, "class", "content-header svelte-1peupih"), a(G, "class", "content svelte-1peupih"), a(G, "id", "yetTask"), a(m, "class", "contents svelte-1peupih"), a(i, "class", "svelte-1peupih");
      },
      m(w, M) {
        I(w, t, M), I(w, o, M), I(w, i, M), c(i, n), c(n, s), c(s, r), c(s, l), c(s, u), c(s, d), c(s, f), c(i, g), c(i, m), c(m, $), c($, k), c($, S), c($, b), c(b, y), c(b, h), c(b, x), c(b, L), c(L, z), c(z, _), c(z, Y), c(z, q), c(q, ut), c(q, dt), c(L, $t), c(L, D), c(D, et), c(D, ct), c(D, v), c(v, A), c(v, at), e[10]($), c(m, ft), c(m, B), c(B, vt), c(B, Jt), W(V, B, null), e[13](B), c(m, Dt), c(m, G), c(G, wt), c(G, Ht), W(H, G, null), e[17](G), ot = !0, At || (Ft = [
          E(
            r,
            "click",
            /*click_handler*/
            e[7]
          ),
          E(
            u,
            "click",
            /*click_handler_1*/
            e[8]
          ),
          E(
            f,
            "click",
            /*click_handler_2*/
            e[9]
          )
        ], At = !0);
      },
      p(w, [M]) {
        (!ot || M & /*todoCount*/
        16) && tt(
          ut,
          /*todoCount*/
          w[4]
        ), (!ot || M & /*successTodoCount*/
        32) && tt(
          A,
          /*successTodoCount*/
          w[5]
        );
        const Ot = {};
        !zt && M & /*todos*/
        8 && (zt = !0, Ot.todos = /*todos*/
        w[3], R(() => zt = !1)), !Et && M & /*todoCount*/
        16 && (Et = !0, Ot.todoCount = /*todoCount*/
        w[4], R(() => Et = !1)), V.$set(Ot);
        const yt = {};
        !St && M & /*todos*/
        8 && (St = !0, yt.todos = /*todos*/
        w[3], R(() => St = !1)), !jt && M & /*successTodoCount*/
        32 && (jt = !0, yt.successTodoCount = /*successTodoCount*/
        w[5], R(() => jt = !1)), !Pt && M & /*todoCount*/
        16 && (Pt = !0, yt.todoCount = /*todoCount*/
        w[4], R(() => Pt = !1)), H.$set(yt);
      },
      i(w) {
        ot || (F(V.$$.fragment, w), F(H.$$.fragment, w), ot = !0);
      },
      o(w) {
        K(V.$$.fragment, w), K(H.$$.fragment, w), ot = !1;
      },
      d(w) {
        w && (P(t), P(o), P(i)), e[10](null), X(V), e[13](null), X(H), e[17](null), At = !1, U(Ft);
      }
    }
  );
}
function He(e, t, o) {
  let i, n, s;
  const r = (_) => {
    let Y = _.offsetTop;
    window.scrollTo({ top: Y - 50, behavior: "smooth" });
  };
  let l = [], u = localStorage.length, d = 0, f = "";
  u == 0 ? (localStorage.setItem("success", "0"), f = localStorage.getItem("success"), u = localStorage.length, d = u - 1) : (f = localStorage.getItem("success"), u = localStorage.length, d = u - 1);
  for (let _ = 0; _ < u; _++)
    ["success", "todoCount"].includes(localStorage.key(_)) || l.push(JSON.parse(localStorage.getItem(localStorage.key(_))));
  const g = () => r(i), m = () => r(n), $ = () => r(s);
  function k(_) {
    T[_ ? "unshift" : "push"](() => {
      i = _, o(0, i);
    });
  }
  function S(_) {
    l = _, o(3, l);
  }
  function b(_) {
    d = _, o(4, d);
  }
  function y(_) {
    T[_ ? "unshift" : "push"](() => {
      n = _, o(1, n);
    });
  }
  function h(_) {
    l = _, o(3, l);
  }
  function x(_) {
    f = _, o(5, f);
  }
  function L(_) {
    d = _, o(4, d);
  }
  function z(_) {
    T[_ ? "unshift" : "push"](() => {
      s = _, o(2, s);
    });
  }
  return [
    i,
    n,
    s,
    l,
    d,
    f,
    r,
    g,
    m,
    $,
    k,
    S,
    b,
    y,
    h,
    x,
    L,
    z
  ];
}
class Fe extends mt {
  constructor(t) {
    super(), _t(this, t, He, De, ht, {}, Je);
  }
}
customElements.define("my-component", bt(Fe, {}, [], [], !0));
export {
  Fe as SvelteApp
};
