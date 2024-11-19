var de = Object.defineProperty;
var re = (e, t, o) => t in e ? de(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var P = (e, t, o) => re(e, typeof t != "symbol" ? t + "" : t, o);
function X() {
}
function Qt(e) {
  return e();
}
function Ht() {
  return /* @__PURE__ */ Object.create(null);
}
function V(e) {
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
function Vt(e) {
  return e ?? "";
}
function u(e, t) {
  e.appendChild(t);
}
function pt(e, t, o) {
  const i = ce(e);
  if (!i.getElementById(t)) {
    const n = h("style");
    n.id = t, n.textContent = o, fe(i, n);
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
function fe(e, t) {
  return u(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function A(e, t, o) {
  e.insertBefore(t, o || null);
}
function q(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ae(e, t) {
  for (let o = 0; o < e.length; o += 1)
    e[o] && e[o].d(t);
}
function h(e) {
  return document.createElement(e);
}
function O(e) {
  return document.createTextNode(e);
}
function w() {
  return O(" ");
}
function ge() {
  return O("");
}
function x(e, t, o, i) {
  return e.addEventListener(t, o, i), () => e.removeEventListener(t, o, i);
}
function f(e, t, o) {
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
function Kt(e, t, o, i) {
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
let Mt;
function gt(e) {
  Mt = e;
}
const st = [], E = [];
let lt = [];
const It = [], _e = /* @__PURE__ */ Promise.resolve();
let Lt = !1;
function me() {
  Lt || (Lt = !0, _e.then(z));
}
function Bt(e) {
  lt.push(e);
}
function I(e) {
  It.push(e);
}
const Nt = /* @__PURE__ */ new Set();
let nt = 0;
function z() {
  if (nt !== 0)
    return;
  const e = Mt;
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
      Nt.has(o) || (Nt.add(o), o());
    }
    lt.length = 0;
  } while (st.length);
  for (; It.length; )
    It.pop()();
  Lt = !1, Nt.clear(), gt(e);
}
function be(e) {
  if (e.fragment !== null) {
    e.update(), V(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Bt);
  }
}
function $e(e) {
  const t = [], o = [];
  lt.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : o.push(i)), o.forEach((i) => i()), lt = t;
}
const kt = /* @__PURE__ */ new Set();
let G;
function ve() {
  G = {
    r: 0,
    c: [],
    p: G
    // parent group
  };
}
function we() {
  G.r || V(G.c), G = G.p;
}
function D(e, t) {
  e && e.i && (kt.delete(e), e.i(t));
}
function U(e, t, o, i) {
  if (e && e.o) {
    if (kt.has(e)) return;
    kt.add(e), G.c.push(() => {
      kt.delete(e), i && (o && e.d(1), i());
    }), e.o(t);
  } else i && i();
}
function Ut(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function L(e, t, o) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = o, o(e.$$.ctx[i]));
}
function dt(e) {
  e && e.c();
}
function Q(e, t, o) {
  const { fragment: i, after_update: n } = e.$$;
  i && i.m(t, o), Bt(() => {
    const s = e.$$.on_mount.map(Qt).filter(Wt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : V(s), e.$$.on_mount = [];
  }), n.forEach(Bt);
}
function W(e, t) {
  const o = e.$$;
  o.fragment !== null && ($e(o.after_update), V(o.on_destroy), o.fragment && o.fragment.d(t), o.on_destroy = o.fragment = null, o.ctx = []);
}
function Ce(e, t) {
  e.$$.dirty[0] === -1 && (st.push(e), me(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function _t(e, t, o, i, n, s, l = null, d = [-1]) {
  const r = Mt;
  gt(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: X,
    not_equal: n,
    bound: Ht(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (r ? r.$$.context : [])),
    // everything else
    callbacks: Ht(),
    dirty: d,
    skip_bound: !1,
    root: t.target || r.$$.root
  };
  l && l(c.root);
  let a = !1;
  if (c.ctx = o ? o(e, t.props || {}, (p, m, ...b) => {
    const y = b.length ? b[0] : m;
    return c.ctx && n(c.ctx[p], c.ctx[p] = y) && (!c.skip_bound && c.bound[p] && c.bound[p](y), a && Ce(e, p)), m;
  }) : [], c.update(), a = !0, V(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const p = he(t.target);
      c.fragment && c.fragment.l(p), p.forEach(q);
    } else
      c.fragment && c.fragment.c();
    t.intro && D(e.$$.fragment), Q(e, t.target, t.anchor), z();
  }
  gt(r);
}
let Xt;
typeof HTMLElement == "function" && (Xt = class extends HTMLElement {
  constructor(t, o, i) {
    super();
    /** The Svelte component constructor */
    P(this, "$$ctor");
    /** Slots */
    P(this, "$$s");
    /** The Svelte component instance */
    P(this, "$$c");
    /** Whether or not the custom element is connected */
    P(this, "$$cn", !1);
    /** Component props data */
    P(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    P(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    P(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    P(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    P(this, "$$l_u", /* @__PURE__ */ new Map());
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
              l = h("slot"), s !== "default" && f(l, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, a) {
              A(c, l, a);
            },
            d: function(c) {
              c && q(l);
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
        l in this.$$d || (this.$$d[l] = xt(l, s.value, this.$$p_d, "toProp"));
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
            const l = xt(
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
          const d = this.$$c.$on(s, l);
          this.$$l_u.set(l, d);
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
function mt(e, t, o, i, n, s) {
  let l = class extends Xt {
    constructor() {
      super(e, o, n), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (d) => (t[d].attribute || d).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((d) => {
    Object.defineProperty(l.prototype, d, {
      get() {
        return this.$$c && d in this.$$c ? this.$$c[d] : this.$$d[d];
      },
      set(r) {
        var c;
        r = xt(d, r, t), this.$$d[d] = r, (c = this.$$c) == null || c.$set({ [d]: r });
      }
    });
  }), i.forEach((d) => {
    Object.defineProperty(l.prototype, d, {
      get() {
        var r;
        return (r = this.$$c) == null ? void 0 : r[d];
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
    P(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    P(this, "$$set");
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
function xe(e) {
  let t, o, i, n, s, l, d;
  return {
    c() {
      t = h("label"), o = h("input"), i = w(), n = O(
        /*tagPrint*/
        e[2]
      ), f(o, "type", "radio"), f(
        o,
        "name",
        /*todoTag*/
        e[1]
      ), f(o, "class", "radio-button svelte-1m9rn1b"), f(
        o,
        "id",
        /*tagPrint*/
        e[2]
      ), f(
        t,
        "for",
        /*tagPrint*/
        e[2]
      ), f(t, "class", s = Vt(
        /*tag*/
        e[0] === /*tagPrint*/
        e[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b");
    },
    m(r, c) {
      A(r, t, c), u(t, o), u(t, i), u(t, n), l || (d = x(
        o,
        "click",
        /*tagToggle*/
        e[3]
      ), l = !0);
    },
    p(r, [c]) {
      c & /*todoTag*/
      2 && f(
        o,
        "name",
        /*todoTag*/
        r[1]
      ), c & /*tagPrint*/
      4 && f(
        o,
        "id",
        /*tagPrint*/
        r[2]
      ), c & /*tagPrint*/
      4 && Z(
        n,
        /*tagPrint*/
        r[2]
      ), c & /*tagPrint*/
      4 && f(
        t,
        "for",
        /*tagPrint*/
        r[2]
      ), c & /*tag, tagPrint*/
      5 && s !== (s = Vt(
        /*tag*/
        r[0] === /*tagPrint*/
        r[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b") && f(t, "class", s);
    },
    i: X,
    o: X,
    d(r) {
      r && q(t), l = !1, d();
    }
  };
}
function Te(e, t, o) {
  let { todoTag: i } = t, { tagPrint: n } = t, { tag: s } = t;
  const l = () => {
    o(0, s = n);
  };
  return e.$$set = (d) => {
    "todoTag" in d && o(1, i = d.todoTag), "tagPrint" in d && o(2, n = d.tagPrint), "tag" in d && o(0, s = d.tag);
  }, [s, i, n, l];
}
class Tt extends bt {
  constructor(t) {
    super(), _t(this, t, Te, xe, ht, { todoTag: 1, tagPrint: 2, tag: 0 }, ke);
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
mt(Tt, { todoTag: {}, tagPrint: {}, tag: {} }, [], [], !0);
function ze(e) {
  pt(e, "svelte-1dw5imi", ".edit-input.svelte-1dw5imi{outline:none;background-color:#fff;color:rgb(85, 85, 85);background-color:white;border:none;border-radius:1px;font-size:2rem;padding:1px 0}.todo-print.svelte-1dw5imi{display:flex;width:100%;min-width:260px;height:100%;flex-direction:column;justify-content:space-between;padding:6% 8%;font-size:2rem;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:12px}.todo-footer.svelte-1dw5imi{display:flex;justify-content:space-between;align-items:center}.time.svelte-1dw5imi{font-size:1.6rem}");
}
function Se(e) {
  let t, o = (
    /*todo*/
    e[0].title + ""
  ), i, n, s, l, d, r, c, a, p, m, b, y;
  function T(_, k) {
    return (
      /*todo*/
      _[0].time ? je : qe
    );
  }
  let g = T(e), C = g(e);
  return {
    c() {
      t = h("div"), i = O(o), n = w(), s = h("div"), C.c(), l = w(), d = h("div"), r = h("button"), r.textContent = "수정", c = w(), a = h("button"), a.textContent = "완료", p = w(), m = h("button"), m.textContent = "삭제", f(d, "class", "todo-control"), f(s, "class", "todo-footer svelte-1dw5imi"), f(t, "class", "todo-print svelte-1dw5imi");
    },
    m(_, k) {
      A(_, t, k), u(t, i), u(t, n), u(t, s), C.m(s, null), u(s, l), u(s, d), u(d, r), u(d, c), u(d, a), u(d, p), u(d, m), b || (y = [
        x(
          r,
          "click",
          /*onEdit*/
          e[3]
        ),
        x(
          a,
          "click",
          /*successTodo*/
          e[6]
        ),
        x(
          m,
          "click",
          /*deleteTodo*/
          e[7]
        )
      ], b = !0);
    },
    p(_, k) {
      k & /*todo*/
      1 && o !== (o = /*todo*/
      _[0].title + "") && Z(i, o), g === (g = T(_)) && C ? C.p(_, k) : (C.d(1), C = g(_), C && (C.c(), C.m(s, l)));
    },
    d(_) {
      _ && q(t), C.d(), b = !1, V(y);
    }
  };
}
function Ee(e) {
  let t, o, i, n, s, l, d, r, c;
  return {
    c() {
      t = h("div"), o = h("input"), i = w(), n = h("div"), s = h("button"), s.textContent = "OK", l = w(), d = h("button"), d.textContent = "Cancel", f(o, "type", "text"), f(o, "class", "edit-input svelte-1dw5imi"), f(n, "class", "todo-control"), f(t, "class", "todo-print svelte-1dw5imi");
    },
    m(a, p) {
      A(a, t, p), u(t, o), it(
        o,
        /*title*/
        e[2]
      ), u(t, i), u(t, n), u(n, s), u(n, l), u(n, d), r || (c = [
        x(
          o,
          "input",
          /*input_input_handler*/
          e[11]
        ),
        x(
          o,
          "keydown",
          /*keydown_handler*/
          e[12]
        ),
        x(
          s,
          "click",
          /*updateTodo*/
          e[5]
        ),
        x(
          d,
          "click",
          /*offEdit*/
          e[4]
        )
      ], r = !0);
    },
    p(a, p) {
      p & /*title*/
      4 && o.value !== /*title*/
      a[2] && it(
        o,
        /*title*/
        a[2]
      );
    },
    d(a) {
      a && q(t), r = !1, V(c);
    }
  };
}
function qe(e) {
  let t, o = (
    /*todo*/
    e[0].tag + ""
  ), i;
  return {
    c() {
      t = h("span"), i = O(o), f(t, "class", "time svelte-1dw5imi");
    },
    m(n, s) {
      A(n, t, s), u(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].tag + "") && Z(i, o);
    },
    d(n) {
      n && q(t);
    }
  };
}
function je(e) {
  let t, o = (
    /*todo*/
    e[0].time + ""
  ), i;
  return {
    c() {
      t = h("span"), i = O(o), f(t, "class", "time svelte-1dw5imi");
    },
    m(n, s) {
      A(n, t, s), u(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].time + "") && Z(i, o);
    },
    d(n) {
      n && q(t);
    }
  };
}
function Pe(e) {
  let t;
  function o(s, l) {
    return (
      /*isEdit*/
      s[1] ? Ee : Se
    );
  }
  let i = o(e), n = i(e);
  return {
    c() {
      n.c(), t = ge();
    },
    m(s, l) {
      n.m(s, l), A(s, t, l);
    },
    p(s, [l]) {
      i === (i = o(s)) && n ? n.p(s, l) : (n.d(1), n = i(s), n && (n.c(), n.m(t.parentNode, t)));
    },
    i: X,
    o: X,
    d(s) {
      s && q(t), n.d(s);
    }
  };
}
function Oe(e, t, o) {
  let { todos: i } = t, { todo: n } = t, { successTodoCount: s } = t, { todoCount: l } = t, d = !1, r = "";
  const c = () => {
    o(1, d = !0), o(2, r = n.title);
  }, a = () => {
    o(1, d = !1);
  }, p = () => {
    o(0, n.title = r, n), a();
  }, m = () => {
    localStorage.removeItem("success"), localStorage.setItem("success", `${Number(s) + 1}`), o(9, s = localStorage.getItem("success")), b();
  }, b = () => {
    o(8, i = i.filter((g) => g.id != n.id)), console.log(i), o(8, i), localStorage.removeItem(`${n.id}`), o(10, l -= 1);
  };
  function y() {
    r = this.value, o(2, r);
  }
  const T = (g) => {
    g.key === "Enter" && p();
  };
  return e.$$set = (g) => {
    "todos" in g && o(8, i = g.todos), "todo" in g && o(0, n = g.todo), "successTodoCount" in g && o(9, s = g.successTodoCount), "todoCount" in g && o(10, l = g.todoCount);
  }, [
    n,
    d,
    r,
    c,
    a,
    p,
    m,
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
    super(), _t(
      this,
      t,
      Oe,
      Pe,
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
mt(Zt, { todos: {}, todo: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Ae(e) {
  pt(e, "svelte-1i20qfz", '.todo-create-container.svelte-1i20qfz{display:flex;align-items:end;gap:16px}.todo-write.svelte-1i20qfz{display:flex;justify-content:center;width:50%;height:400px;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;color:black;outline:none;padding:1.6% 2%;font-size:2rem;resize:none}.todo-info.svelte-1i20qfz{width:50%;height:400px;display:flex;flex-direction:column;justify-content:space-between}.todo-info-selecter.svelte-1i20qfz{position:relative}.todo-date.svelte-1i20qfz{margin-top:12px}.todo-time-viewer.svelte-1i20qfz{position:absolute;font-size:2rem;top:58px;left:20px;z-index:0;color:#121212}input[type="date"].svelte-1i20qfz{position:relative;width:100%;height:48px;padding:10px;text-align:left;font-size:100%;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;background-color:transparent;color:transparent;border-radius:16px;z-index:0;user-select:none}input[type="date"].svelte-1i20qfz::-webkit-calendar-picker-indicator{position:absolute;left:-80px;top:0;width:100%;color:black;height:100%;cursor:pointer}.todo-tag-selecter.svelte-1i20qfz{display:flex;gap:12px}.todo-create-button.svelte-1i20qfz{width:100%;height:50px;font-size:2rem;background-color:#6554AF;color:white;border-radius:20px;border:none;cursor:pointer}.todo-create-button.svelte-1i20qfz:hover{background-color:#59499C}.todo-create-button.svelte-1i20qfz:active{background-color:#7566B7}');
}
function Ne(e) {
  let t, o, i, n, s, l, d, r, c, a, p, m, b, y, T, g, C, _, k, F, S, B, tt, K;
  function rt($) {
    e[8]($);
  }
  let ut = { todoTag: "todoTag", tagPrint: "매일" };
  /*tag*/
  e[0] !== void 0 && (ut.tag = /*tag*/
  e[0]), d = new Tt({ props: ut }), E.push(() => L(d, "tag", rt));
  function $t($) {
    e[9]($);
  }
  let M = { todoTag: "todoTag", tagPrint: "매주" };
  /*tag*/
  e[0] !== void 0 && (M.tag = /*tag*/
  e[0]), a = new Tt({ props: M }), E.push(() => L(a, "tag", $t));
  function et($) {
    e[10]($);
  }
  let ct = { todoTag: "todoTag", tagPrint: "매달" };
  return (
    /*tag*/
    e[0] !== void 0 && (ct.tag = /*tag*/
    e[0]), b = new Tt({ props: ct }), E.push(() => L(b, "tag", et)), {
      c() {
        t = h("div"), o = h("textarea"), i = w(), n = h("div"), s = h("div"), l = h("div"), dt(d.$$.fragment), c = w(), dt(a.$$.fragment), m = w(), dt(b.$$.fragment), T = w(), g = h("div"), C = O(
          /*time*/
          e[1]
        ), _ = w(), k = h("input"), F = w(), S = h("button"), S.textContent = "작성 완료하기", f(o, "name", ""), f(o, "id", ""), f(o, "class", "todo-write svelte-1i20qfz"), f(o, "placeholder", "할 일 등록하기"), f(l, "class", "todo-tag-selecter svelte-1i20qfz"), f(g, "class", "todo-time-viewer svelte-1i20qfz"), f(k, "type", "date"), f(k, "class", "todo-date svelte-1i20qfz"), f(s, "class", "todo-info-selecter svelte-1i20qfz"), f(S, "class", "todo-create-button svelte-1i20qfz"), f(n, "class", "todo-info svelte-1i20qfz"), f(t, "class", "todo-create-container svelte-1i20qfz");
      },
      m($, j) {
        A($, t, j), u(t, o), it(
          o,
          /*title*/
          e[2]
        ), u(t, i), u(t, n), u(n, s), u(s, l), Q(d, l, null), u(l, c), Q(a, l, null), u(l, m), Q(b, l, null), u(s, T), u(s, g), u(g, C), u(s, _), u(s, k), it(
          k,
          /*time*/
          e[1]
        ), u(n, F), u(n, S), B = !0, tt || (K = [
          x(
            o,
            "input",
            /*textarea_input_handler*/
            e[6]
          ),
          x(
            o,
            "keydown",
            /*keydown_handler*/
            e[7]
          ),
          x(
            k,
            "input",
            /*input_input_handler*/
            e[11]
          ),
          x(
            S,
            "click",
            /*createTodo*/
            e[3]
          )
        ], tt = !0);
      },
      p($, [j]) {
        j & /*title*/
        4 && it(
          o,
          /*title*/
          $[2]
        );
        const ft = {};
        !r && j & /*tag*/
        1 && (r = !0, ft.tag = /*tag*/
        $[0], I(() => r = !1)), d.$set(ft);
        const at = {};
        !p && j & /*tag*/
        1 && (p = !0, at.tag = /*tag*/
        $[0], I(() => p = !1)), a.$set(at);
        const J = {};
        !y && j & /*tag*/
        1 && (y = !0, J.tag = /*tag*/
        $[0], I(() => y = !1)), b.$set(J), (!B || j & /*time*/
        2) && Z(
          C,
          /*time*/
          $[1]
        ), j & /*time*/
        2 && it(
          k,
          /*time*/
          $[1]
        );
      },
      i($) {
        B || (D(d.$$.fragment, $), D(a.$$.fragment, $), D(b.$$.fragment, $), B = !0);
      },
      o($) {
        U(d.$$.fragment, $), U(a.$$.fragment, $), U(b.$$.fragment, $), B = !1;
      },
      d($) {
        $ && q(t), W(d), W(a), W(b), tt = !1, V(K);
      }
    }
  );
}
function Ie(e, t, o) {
  let { todos: i } = t, { todoCount: n } = t, s = "", l = localStorage.length, d = "", r = "";
  const c = (_) => {
    o(0, d = "");
  }, a = (_) => {
    _ == "" ? _ = "" : o(1, r = "");
  }, p = () => {
    if (!s.trim()) {
      o(2, s = "");
      return;
    }
    !d && !r && o(0, d = "매일"), i.push({ id: l, title: s, tag: d, time: r }), localStorage.setItem(`${l}`, JSON.stringify({ id: l, title: s, tag: d, time: r })), o(5, n += 1), o(4, i), o(2, s = ""), o(0, d = ""), o(1, r = ""), l += 1, console.log(i);
  };
  function m() {
    s = this.value, o(2, s);
  }
  const b = (_) => {
    _.key === "Enter" && _.isComposing == !1 && (_.preventDefault(), p());
  };
  function y(_) {
    d = _, o(0, d);
  }
  function T(_) {
    d = _, o(0, d);
  }
  function g(_) {
    d = _, o(0, d);
  }
  function C() {
    r = this.value, o(1, r);
  }
  return e.$$set = (_) => {
    "todos" in _ && o(4, i = _.todos), "todoCount" in _ && o(5, n = _.todoCount);
  }, e.$$.update = () => {
    e.$$.dirty & /*time*/
    2 && c(), e.$$.dirty & /*tag*/
    1 && a(d);
  }, [
    d,
    r,
    s,
    p,
    i,
    n,
    m,
    b,
    y,
    T,
    g,
    C
  ];
}
class te extends bt {
  constructor(t) {
    super(), _t(this, t, Ie, Ne, ht, { todos: 4, todoCount: 5 }, Ae);
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
mt(te, { todos: {}, todoCount: {} }, [], [], !0);
function Le(e) {
  pt(e, "svelte-1lsobs2", ".yet-task.svelte-1lsobs2{display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, auto));grid-auto-rows:minmax(240px, auto);gap:12px}");
}
function Yt(e, t, o) {
  const i = e.slice();
  return i[6] = t[o], i;
}
function Gt(e) {
  let t, o, i, n, s;
  function l(a) {
    e[3](a);
  }
  function d(a) {
    e[4](a);
  }
  function r(a) {
    e[5](a);
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
    e[2]), t = new Zt({ props: c }), E.push(() => L(t, "todos", l)), E.push(() => L(t, "successTodoCount", d)), E.push(() => L(t, "todoCount", r)), {
      c() {
        dt(t.$$.fragment);
      },
      m(a, p) {
        Q(t, a, p), s = !0;
      },
      p(a, p) {
        const m = {};
        p & /*todos*/
        1 && (m.todo = /*todo*/
        a[6]), !o && p & /*todos*/
        1 && (o = !0, m.todos = /*todos*/
        a[0], I(() => o = !1)), !i && p & /*successTodoCount*/
        2 && (i = !0, m.successTodoCount = /*successTodoCount*/
        a[1], I(() => i = !1)), !n && p & /*todoCount*/
        4 && (n = !0, m.todoCount = /*todoCount*/
        a[2], I(() => n = !1)), t.$set(m);
      },
      i(a) {
        s || (D(t.$$.fragment, a), s = !0);
      },
      o(a) {
        U(t.$$.fragment, a), s = !1;
      },
      d(a) {
        W(t, a);
      }
    }
  );
}
function Be(e) {
  let t, o, i = Ut(
    /*todos*/
    e[0]
  ), n = [];
  for (let l = 0; l < i.length; l += 1)
    n[l] = Gt(Yt(e, i, l));
  const s = (l) => U(n[l], 1, 1, () => {
    n[l] = null;
  });
  return {
    c() {
      t = h("div");
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      f(t, "class", "yet-task svelte-1lsobs2");
    },
    m(l, d) {
      A(l, t, d);
      for (let r = 0; r < n.length; r += 1)
        n[r] && n[r].m(t, null);
      o = !0;
    },
    p(l, [d]) {
      if (d & /*todos, successTodoCount, todoCount*/
      7) {
        i = Ut(
          /*todos*/
          l[0]
        );
        let r;
        for (r = 0; r < i.length; r += 1) {
          const c = Yt(l, i, r);
          n[r] ? (n[r].p(c, d), D(n[r], 1)) : (n[r] = Gt(c), n[r].c(), D(n[r], 1), n[r].m(t, null));
        }
        for (ve(), r = i.length; r < n.length; r += 1)
          s(r);
        we();
      }
    },
    i(l) {
      if (!o) {
        for (let d = 0; d < i.length; d += 1)
          D(n[d]);
        o = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let d = 0; d < n.length; d += 1)
        U(n[d]);
      o = !1;
    },
    d(l) {
      l && q(t), ae(n, l);
    }
  };
}
function Me(e, t, o) {
  let { todos: i } = t, { successTodoCount: n } = t, { todoCount: s } = t;
  function l(c) {
    i = c, o(0, i);
  }
  function d(c) {
    n = c, o(1, n);
  }
  function r(c) {
    s = c, o(2, s);
  }
  return e.$$set = (c) => {
    "todos" in c && o(0, i = c.todos), "successTodoCount" in c && o(1, n = c.successTodoCount), "todoCount" in c && o(2, s = c.todoCount);
  }, [
    i,
    n,
    s,
    l,
    d,
    r
  ];
}
class ee extends bt {
  constructor(t) {
    super(), _t(
      this,
      t,
      Me,
      Be,
      ht,
      {
        todos: 0,
        successTodoCount: 1,
        todoCount: 2
      },
      Le
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
mt(ee, { todos: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Je(e) {
  pt(e, "svelte-1wl5wdv", "header.svelte-1wl5wdv{width:100vw;display:flex;position:fixed;z-index:1;height:80px;background-color:black}main.svelte-1wl5wdv{display:flex;width:100vw;height:fit-content;background-color:none;top:80px}.contents.svelte-1wl5wdv{width:80%;height:fit-content;justify-content:stretch;position:relative;top:80px;padding:3% 2% 0 2%;color:#121212;background-color:rgb(248, 250, 252)}.content.svelte-1wl5wdv{display:flex;flex-direction:column;margin-bottom:10%;border-radius:12px}.content-header.svelte-1wl5wdv{width:fit-content;display:flex;font-size:3rem;margin-bottom:12px;padding:1% 1%}aside.svelte-1wl5wdv{display:flex;flex-direction:column;width:20%}.sidebar.svelte-1wl5wdv{position:fixed;top:80px;display:flex;flex-direction:column;width:20%;height:100%;padding:1%;background-color:#ffffff}.nav.svelte-1wl5wdv{display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem}.nav.svelte-1wl5wdv:hover{cursor:pointer;display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem;box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22)}.svelte-1wl5wdv{box-sizing:border-box}.profile.svelte-1wl5wdv{display:flex;padding:3% 4%;flex-direction:column;font-size:3rem;background-color:#ffffff;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;font-weight:600}.profile-task-info.svelte-1wl5wdv{width:fit-content;display:flex;flex-direction:column;padding:0 12px}.profile-task-head.svelte-1wl5wdv{font-size:2rem;margin-top:0.5%;font-weight:400}.profile-task-count.svelte-1wl5wdv{font-size:2rem;margin-top:0.5%;margin:0 12px;font-weight:400}");
}
function Re(e) {
  let t, o, i, n, s, l, d, r, c, a, p, m, b, y, T, g, C, _, k, F, S, B, tt, K, rt, ut, $t, M, et, ct, $, j, ft, at, J, vt, Jt, H, zt, St, Rt, Y, wt, Dt, R, Et, qt, jt, ot, Pt, Ft;
  function oe(v) {
    e[7](v);
  }
  function ne(v) {
    e[8](v);
  }
  let Ot = {};
  /*todos*/
  e[0] !== void 0 && (Ot.todos = /*todos*/
  e[0]), /*todoCount*/
  e[1] !== void 0 && (Ot.todoCount = /*todoCount*/
  e[1]), H = new te({ props: Ot }), E.push(() => L(H, "todos", oe)), E.push(() => L(H, "todoCount", ne));
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
    e[1]), R = new ee({ props: Ct }), E.push(() => L(R, "todos", se)), E.push(() => L(R, "successTodoCount", ie)), E.push(() => L(R, "todoCount", le)), {
      c() {
        t = h("header"), o = w(), i = h("main"), n = h("aside"), s = h("div"), l = h("button"), l.textContent = "프로필", d = w(), r = h("button"), r.textContent = "과제 등록하기", c = w(), a = h("button"), a.textContent = "미완료 과제", p = w(), m = h("div"), b = h("div"), y = h("div"), y.textContent = "프로필", T = w(), g = h("div"), C = O("반가워요! 👋 "), _ = h("br"), k = w(), F = h("div"), S = h("div"), B = h("div"), B.textContent = "미완료 과제 :", tt = w(), K = h("div"), rt = O(
          /*todoCount*/
          e[1]
        ), ut = O("개"), $t = w(), M = h("div"), et = h("div"), et.textContent = "완료 과제 :", ct = w(), $ = h("div"), j = O(
          /*successTodoCount*/
          e[2]
        ), ft = O("개"), at = w(), J = h("div"), vt = h("div"), vt.textContent = "과제 등록하기", Jt = w(), dt(H.$$.fragment), Rt = w(), Y = h("div"), wt = h("div"), wt.textContent = "미완료 과제", Dt = w(), dt(R.$$.fragment), f(t, "class", "svelte-1wl5wdv"), f(l, "class", "nav svelte-1wl5wdv"), f(r, "class", "nav svelte-1wl5wdv"), f(a, "class", "nav svelte-1wl5wdv"), f(s, "class", "sidebar svelte-1wl5wdv"), f(n, "class", "svelte-1wl5wdv"), f(y, "class", "content-header svelte-1wl5wdv"), f(_, "class", "svelte-1wl5wdv"), f(B, "class", "profile-task-head svelte-1wl5wdv"), f(K, "class", "profile-task-count svelte-1wl5wdv"), Kt(S, "display", "flex"), f(S, "class", "svelte-1wl5wdv"), f(et, "class", "profile-task-head svelte-1wl5wdv"), f($, "class", "profile-task-count svelte-1wl5wdv"), Kt(M, "display", "flex"), f(M, "class", "svelte-1wl5wdv"), f(F, "class", "profile-task-info svelte-1wl5wdv"), f(g, "class", "profile svelte-1wl5wdv"), f(b, "class", "content svelte-1wl5wdv"), f(b, "id", "profile"), f(vt, "class", "content-header svelte-1wl5wdv"), f(J, "class", "content svelte-1wl5wdv"), f(J, "id", "taskInput"), f(wt, "class", "content-header svelte-1wl5wdv"), f(Y, "class", "content svelte-1wl5wdv"), f(Y, "id", "yetTask"), f(m, "class", "contents svelte-1wl5wdv"), f(i, "class", "svelte-1wl5wdv");
      },
      m(v, N) {
        A(v, t, N), A(v, o, N), A(v, i, N), u(i, n), u(n, s), u(s, l), u(s, d), u(s, r), u(s, c), u(s, a), u(i, p), u(i, m), u(m, b), u(b, y), u(b, T), u(b, g), u(g, C), u(g, _), u(g, k), u(g, F), u(F, S), u(S, B), u(S, tt), u(S, K), u(K, rt), u(K, ut), u(F, $t), u(F, M), u(M, et), u(M, ct), u(M, $), u($, j), u($, ft), u(m, at), u(m, J), u(J, vt), u(J, Jt), Q(H, J, null), u(m, Rt), u(m, Y), u(Y, wt), u(Y, Dt), Q(R, Y, null), ot = !0, Pt || (Ft = [
          x(
            l,
            "click",
            /*click_handler*/
            e[4]
          ),
          x(
            r,
            "click",
            /*click_handler_1*/
            e[5]
          ),
          x(
            a,
            "click",
            /*click_handler_2*/
            e[6]
          )
        ], Pt = !0);
      },
      p(v, [N]) {
        (!ot || N & /*todoCount*/
        2) && Z(
          rt,
          /*todoCount*/
          v[1]
        ), (!ot || N & /*successTodoCount*/
        4) && Z(
          j,
          /*successTodoCount*/
          v[2]
        );
        const At = {};
        !zt && N & /*todos*/
        1 && (zt = !0, At.todos = /*todos*/
        v[0], I(() => zt = !1)), !St && N & /*todoCount*/
        2 && (St = !0, At.todoCount = /*todoCount*/
        v[1], I(() => St = !1)), H.$set(At);
        const yt = {};
        !Et && N & /*todos*/
        1 && (Et = !0, yt.todos = /*todos*/
        v[0], I(() => Et = !1)), !qt && N & /*successTodoCount*/
        4 && (qt = !0, yt.successTodoCount = /*successTodoCount*/
        v[2], I(() => qt = !1)), !jt && N & /*todoCount*/
        2 && (jt = !0, yt.todoCount = /*todoCount*/
        v[1], I(() => jt = !1)), R.$set(yt);
      },
      i(v) {
        ot || (D(H.$$.fragment, v), D(R.$$.fragment, v), ot = !0);
      },
      o(v) {
        U(H.$$.fragment, v), U(R.$$.fragment, v), ot = !1;
      },
      d(v) {
        v && (q(t), q(o), q(i)), W(H), W(R), Pt = !1, V(Ft);
      }
    }
  );
}
function De(e, t, o) {
  const i = (g) => {
    console.log("scroll");
    let C = document.querySelector(g).offsetTop;
    window.scrollTo({ top: C - 50, behavior: "smooth" });
  };
  let n = [], s = localStorage.length, l = 0, d = "";
  s == 0 ? (localStorage.setItem("success", "0"), d = localStorage.getItem("success"), s = localStorage.length, l = s - 1) : (d = localStorage.getItem("success"), s = localStorage.length, l = s - 1);
  for (let g = 0; g < s; g++)
    ["success", "todoCount"].includes(localStorage.key(g)) || n.push(JSON.parse(localStorage.getItem(localStorage.key(g))));
  const r = () => i("#profile"), c = () => i("#taskInput"), a = () => i("#yetTask");
  function p(g) {
    n = g, o(0, n);
  }
  function m(g) {
    l = g, o(1, l);
  }
  function b(g) {
    n = g, o(0, n);
  }
  function y(g) {
    d = g, o(2, d);
  }
  function T(g) {
    l = g, o(1, l);
  }
  return [
    n,
    l,
    d,
    i,
    r,
    c,
    a,
    p,
    m,
    b,
    y,
    T
  ];
}
class Fe extends bt {
  constructor(t) {
    super(), _t(this, t, De, Re, ht, {}, Je);
  }
}
customElements.define("my-component", mt(Fe, {}, [], [], !0));
export {
  Fe as SvelteApp
};
