var re = Object.defineProperty;
var de = (e, t, o) => t in e ? re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var P = (e, t, o) => de(e, typeof t != "symbol" ? t + "" : t, o);
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
function A(e, t, o) {
  e.insertBefore(t, o || null);
}
function q(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function fe(e, t) {
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
const yt = /* @__PURE__ */ new Set();
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
  e && e.i && (yt.delete(e), e.i(t));
}
function U(e, t, o, i) {
  if (e && e.o) {
    if (yt.has(e)) return;
    yt.add(e), G.c.push(() => {
      yt.delete(e), i && (o && e.d(1), i());
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
function rt(e) {
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
function _t(e, t, o, i, n, s, l = null, r = [-1]) {
  const d = Mt;
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
    context: new Map(t.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: Ht(),
    dirty: r,
    skip_bound: !1,
    root: t.target || d.$$.root
  };
  l && l(c.root);
  let f = !1;
  if (c.ctx = o ? o(e, t.props || {}, (p, m, ...b) => {
    const k = b.length ? b[0] : m;
    return c.ctx && n(c.ctx[p], c.ctx[p] = k) && (!c.skip_bound && c.bound[p] && c.bound[p](k), f && Ce(e, p)), m;
  }) : [], c.update(), f = !0, V(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const p = he(t.target);
      c.fragment && c.fragment.l(p), p.forEach(q);
    } else
      c.fragment && c.fragment.c();
    t.intro && D(e.$$.fragment), Q(e, t.target, t.anchor), z();
  }
  gt(d);
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
              l = h("slot"), s !== "default" && a(l, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, f) {
              A(c, l, f);
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
        d = xt(r, d, t), this.$$d[r] = d, (c = this.$$c) == null || c.$set({ [r]: d });
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
const ke = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ke);
function ye(e) {
  pt(e, "svelte-1m9rn1b", ".tag-unselected.svelte-1m9rn1b{padding:4px 6px;font-size:2rem;background-color:transparent;border-radius:4px}.tag-selected.svelte-1m9rn1b{padding:4px 6px;height:fit-content;width:fit-content;font-size:2rem;background-color:#6554AF;color:white;border-radius:4px}.radio-button.svelte-1m9rn1b{display:none}");
}
function xe(e) {
  let t, o, i, n, s, l, r;
  return {
    c() {
      t = h("label"), o = h("input"), i = w(), n = O(
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
      ), a(t, "class", s = Vt(
        /*tag*/
        e[0] === /*tagPrint*/
        e[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b");
    },
    m(d, c) {
      A(d, t, c), u(t, o), u(t, i), u(t, n), l || (r = x(
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
      5 && s !== (s = Vt(
        /*tag*/
        d[0] === /*tagPrint*/
        d[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b") && a(t, "class", s);
    },
    i: X,
    o: X,
    d(d) {
      d && q(t), l = !1, r();
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
    super(), _t(this, t, Te, xe, ht, { todoTag: 1, tagPrint: 2, tag: 0 }, ye);
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
  pt(e, "svelte-1k84la9", ".edit-input.svelte-1k84la9{outline:none;background-color:#fff;color:rgb(85, 85, 85);background-color:white;border:none;border-radius:1px;font-size:2rem;padding:1px 0}.todo-print.svelte-1k84la9{display:flex;width:calc(100%)-50px;min-width:260px;height:calc(100%)-35px;flex-direction:column;justify-content:space-between;padding:6% 8%;font-size:2rem;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:12px}.todo-footer.svelte-1k84la9{display:flex;justify-content:space-between;align-items:center}.time.svelte-1k84la9{font-size:1.6rem}");
}
function Se(e) {
  let t, o = (
    /*todo*/
    e[0].title + ""
  ), i, n, s, l, r, d, c, f, p, m, b, k;
  function T(_, y) {
    return (
      /*todo*/
      _[0].time ? je : qe
    );
  }
  let g = T(e), C = g(e);
  return {
    c() {
      t = h("div"), i = O(o), n = w(), s = h("div"), C.c(), l = w(), r = h("div"), d = h("button"), d.textContent = "수정", c = w(), f = h("button"), f.textContent = "완료", p = w(), m = h("button"), m.textContent = "삭제", a(r, "class", "todo-control"), a(s, "class", "todo-footer svelte-1k84la9"), a(t, "class", "todo-print svelte-1k84la9");
    },
    m(_, y) {
      A(_, t, y), u(t, i), u(t, n), u(t, s), C.m(s, null), u(s, l), u(s, r), u(r, d), u(r, c), u(r, f), u(r, p), u(r, m), b || (k = [
        x(
          d,
          "click",
          /*onEdit*/
          e[3]
        ),
        x(
          f,
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
    p(_, y) {
      y & /*todo*/
      1 && o !== (o = /*todo*/
      _[0].title + "") && Z(i, o), g === (g = T(_)) && C ? C.p(_, y) : (C.d(1), C = g(_), C && (C.c(), C.m(s, l)));
    },
    d(_) {
      _ && q(t), C.d(), b = !1, V(k);
    }
  };
}
function Ee(e) {
  let t, o, i, n, s, l, r, d, c;
  return {
    c() {
      t = h("div"), o = h("input"), i = w(), n = h("div"), s = h("button"), s.textContent = "OK", l = w(), r = h("button"), r.textContent = "Cancel", a(o, "type", "text"), a(o, "class", "edit-input svelte-1k84la9"), a(n, "class", "todo-control"), a(t, "class", "todo-print svelte-1k84la9");
    },
    m(f, p) {
      A(f, t, p), u(t, o), it(
        o,
        /*title*/
        e[2]
      ), u(t, i), u(t, n), u(n, s), u(n, l), u(n, r), d || (c = [
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
      f && q(t), d = !1, V(c);
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
      t = h("span"), i = O(o), a(t, "class", "time svelte-1k84la9");
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
      t = h("span"), i = O(o), a(t, "class", "time svelte-1k84la9");
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
  let { todos: i } = t, { todo: n } = t, { successTodoCount: s } = t, { todoCount: l } = t, r = !1, d = "";
  const c = () => {
    o(1, r = !0), o(2, d = n.title);
  }, f = () => {
    o(1, r = !1);
  }, p = () => {
    o(0, n.title = d, n), f();
  }, m = () => {
    localStorage.removeItem("success"), localStorage.setItem("success", `${Number(s) + 1}`), o(9, s = localStorage.getItem("success")), b();
  }, b = () => {
    o(8, i = i.filter((g) => g.id != n.id)), console.log(i), o(8, i), localStorage.removeItem(`${n.id}`), o(10, l -= 1);
  };
  function k() {
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
    m,
    b,
    i,
    s,
    l,
    k,
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
  let t, o, i, n, s, l, r, d, c, f, p, m, b, k, T, g, C, _, y, F, S, B, tt, K;
  function dt($) {
    e[8]($);
  }
  let ut = { todoTag: "todoTag", tagPrint: "매일" };
  /*tag*/
  e[0] !== void 0 && (ut.tag = /*tag*/
  e[0]), r = new Tt({ props: ut }), E.push(() => L(r, "tag", dt));
  function $t($) {
    e[9]($);
  }
  let M = { todoTag: "todoTag", tagPrint: "매주" };
  /*tag*/
  e[0] !== void 0 && (M.tag = /*tag*/
  e[0]), f = new Tt({ props: M }), E.push(() => L(f, "tag", $t));
  function et($) {
    e[10]($);
  }
  let ct = { todoTag: "todoTag", tagPrint: "매달" };
  return (
    /*tag*/
    e[0] !== void 0 && (ct.tag = /*tag*/
    e[0]), b = new Tt({ props: ct }), E.push(() => L(b, "tag", et)), {
      c() {
        t = h("div"), o = h("textarea"), i = w(), n = h("div"), s = h("div"), l = h("div"), rt(r.$$.fragment), c = w(), rt(f.$$.fragment), m = w(), rt(b.$$.fragment), T = w(), g = h("div"), C = O(
          /*time*/
          e[1]
        ), _ = w(), y = h("input"), F = w(), S = h("button"), S.textContent = "작성 완료하기", a(o, "name", ""), a(o, "id", ""), a(o, "class", "todo-write svelte-1i20qfz"), a(o, "placeholder", "할 일 등록하기"), a(l, "class", "todo-tag-selecter svelte-1i20qfz"), a(g, "class", "todo-time-viewer svelte-1i20qfz"), a(y, "type", "date"), a(y, "class", "todo-date svelte-1i20qfz"), a(s, "class", "todo-info-selecter svelte-1i20qfz"), a(S, "class", "todo-create-button svelte-1i20qfz"), a(n, "class", "todo-info svelte-1i20qfz"), a(t, "class", "todo-create-container svelte-1i20qfz");
      },
      m($, j) {
        A($, t, j), u(t, o), it(
          o,
          /*title*/
          e[2]
        ), u(t, i), u(t, n), u(n, s), u(s, l), Q(r, l, null), u(l, c), Q(f, l, null), u(l, m), Q(b, l, null), u(s, T), u(s, g), u(g, C), u(s, _), u(s, y), it(
          y,
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
            y,
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
        const at = {};
        !d && j & /*tag*/
        1 && (d = !0, at.tag = /*tag*/
        $[0], I(() => d = !1)), r.$set(at);
        const ft = {};
        !p && j & /*tag*/
        1 && (p = !0, ft.tag = /*tag*/
        $[0], I(() => p = !1)), f.$set(ft);
        const J = {};
        !k && j & /*tag*/
        1 && (k = !0, J.tag = /*tag*/
        $[0], I(() => k = !1)), b.$set(J), (!B || j & /*time*/
        2) && Z(
          C,
          /*time*/
          $[1]
        ), j & /*time*/
        2 && it(
          y,
          /*time*/
          $[1]
        );
      },
      i($) {
        B || (D(r.$$.fragment, $), D(f.$$.fragment, $), D(b.$$.fragment, $), B = !0);
      },
      o($) {
        U(r.$$.fragment, $), U(f.$$.fragment, $), U(b.$$.fragment, $), B = !1;
      },
      d($) {
        $ && q(t), W(r), W(f), W(b), tt = !1, V(K);
      }
    }
  );
}
function Ie(e, t, o) {
  let { todos: i } = t, { todoCount: n } = t, s = "", l = localStorage.length, r = "", d = "";
  const c = (_) => {
    o(0, r = "");
  }, f = (_) => {
    _ == "" ? _ = "" : o(1, d = "");
  }, p = () => {
    if (!s.trim()) {
      o(2, s = "");
      return;
    }
    !r && !d && o(0, r = "매일"), i.push({ id: l, title: s, tag: r, time: d }), localStorage.setItem(`${l}`, JSON.stringify({ id: l, title: s, tag: r, time: d })), o(5, n += 1), o(4, i), o(2, s = ""), o(0, r = ""), o(1, d = ""), l += 1, console.log(i);
  };
  function m() {
    s = this.value, o(2, s);
  }
  const b = (_) => {
    _.key === "Enter" && _.isComposing == !1 && (_.preventDefault(), p());
  };
  function k(_) {
    r = _, o(0, r);
  }
  function T(_) {
    r = _, o(0, r);
  }
  function g(_) {
    r = _, o(0, r);
  }
  function C() {
    d = this.value, o(1, d);
  }
  return e.$$set = (_) => {
    "todos" in _ && o(4, i = _.todos), "todoCount" in _ && o(5, n = _.todoCount);
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
    m,
    b,
    k,
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
    e[2]), t = new Zt({ props: c }), E.push(() => L(t, "todos", l)), E.push(() => L(t, "successTodoCount", r)), E.push(() => L(t, "todoCount", d)), {
      c() {
        rt(t.$$.fragment);
      },
      m(f, p) {
        Q(t, f, p), s = !0;
      },
      p(f, p) {
        const m = {};
        p & /*todos*/
        1 && (m.todo = /*todo*/
        f[6]), !o && p & /*todos*/
        1 && (o = !0, m.todos = /*todos*/
        f[0], I(() => o = !1)), !i && p & /*successTodoCount*/
        2 && (i = !0, m.successTodoCount = /*successTodoCount*/
        f[1], I(() => i = !1)), !n && p & /*todoCount*/
        4 && (n = !0, m.todoCount = /*todoCount*/
        f[2], I(() => n = !1)), t.$set(m);
      },
      i(f) {
        s || (D(t.$$.fragment, f), s = !0);
      },
      o(f) {
        U(t.$$.fragment, f), s = !1;
      },
      d(f) {
        W(t, f);
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
      a(t, "class", "yet-task svelte-1lsobs2");
    },
    m(l, r) {
      A(l, t, r);
      for (let d = 0; d < n.length; d += 1)
        n[d] && n[d].m(t, null);
      o = !0;
    },
    p(l, [r]) {
      if (r & /*todos, successTodoCount, todoCount*/
      7) {
        i = Ut(
          /*todos*/
          l[0]
        );
        let d;
        for (d = 0; d < i.length; d += 1) {
          const c = Yt(l, i, d);
          n[d] ? (n[d].p(c, r), D(n[d], 1)) : (n[d] = Gt(c), n[d].c(), D(n[d], 1), n[d].m(t, null));
        }
        for (ve(), d = i.length; d < n.length; d += 1)
          s(d);
        we();
      }
    },
    i(l) {
      if (!o) {
        for (let r = 0; r < i.length; r += 1)
          D(n[r]);
        o = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let r = 0; r < n.length; r += 1)
        U(n[r]);
      o = !1;
    },
    d(l) {
      l && q(t), fe(n, l);
    }
  };
}
function Me(e, t, o) {
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
  let t, o, i, n, s, l, r, d, c, f, p, m, b, k, T, g, C, _, y, F, S, B, tt, K, dt, ut, $t, M, et, ct, $, j, at, ft, J, vt, Jt, H, zt, St, Rt, Y, wt, Dt, R, Et, qt, jt, ot, Pt, Ft;
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
        t = h("header"), o = w(), i = h("main"), n = h("aside"), s = h("div"), l = h("button"), l.textContent = "프로필", r = w(), d = h("button"), d.textContent = "과제 등록하기", c = w(), f = h("button"), f.textContent = "미완료 과제", p = w(), m = h("div"), b = h("div"), k = h("div"), k.textContent = "프로필", T = w(), g = h("div"), C = O("반가워요! 👋 "), _ = h("br"), y = w(), F = h("div"), S = h("div"), B = h("div"), B.textContent = "미완료 과제 :", tt = w(), K = h("div"), dt = O(
          /*todoCount*/
          e[1]
        ), ut = O("개"), $t = w(), M = h("div"), et = h("div"), et.textContent = "완료 과제 :", ct = w(), $ = h("div"), j = O(
          /*successTodoCount*/
          e[2]
        ), at = O("개"), ft = w(), J = h("div"), vt = h("div"), vt.textContent = "과제 등록하기", Jt = w(), rt(H.$$.fragment), Rt = w(), Y = h("div"), wt = h("div"), wt.textContent = "미완료 과제", Dt = w(), rt(R.$$.fragment), a(t, "class", "svelte-1wl5wdv"), a(l, "class", "nav svelte-1wl5wdv"), a(d, "class", "nav svelte-1wl5wdv"), a(f, "class", "nav svelte-1wl5wdv"), a(s, "class", "sidebar svelte-1wl5wdv"), a(n, "class", "svelte-1wl5wdv"), a(k, "class", "content-header svelte-1wl5wdv"), a(_, "class", "svelte-1wl5wdv"), a(B, "class", "profile-task-head svelte-1wl5wdv"), a(K, "class", "profile-task-count svelte-1wl5wdv"), Kt(S, "display", "flex"), a(S, "class", "svelte-1wl5wdv"), a(et, "class", "profile-task-head svelte-1wl5wdv"), a($, "class", "profile-task-count svelte-1wl5wdv"), Kt(M, "display", "flex"), a(M, "class", "svelte-1wl5wdv"), a(F, "class", "profile-task-info svelte-1wl5wdv"), a(g, "class", "profile svelte-1wl5wdv"), a(b, "class", "content svelte-1wl5wdv"), a(b, "id", "profile"), a(vt, "class", "content-header svelte-1wl5wdv"), a(J, "class", "content svelte-1wl5wdv"), a(J, "id", "taskInput"), a(wt, "class", "content-header svelte-1wl5wdv"), a(Y, "class", "content svelte-1wl5wdv"), a(Y, "id", "yetTask"), a(m, "class", "contents svelte-1wl5wdv"), a(i, "class", "svelte-1wl5wdv");
      },
      m(v, N) {
        A(v, t, N), A(v, o, N), A(v, i, N), u(i, n), u(n, s), u(s, l), u(s, r), u(s, d), u(s, c), u(s, f), u(i, p), u(i, m), u(m, b), u(b, k), u(b, T), u(b, g), u(g, C), u(g, _), u(g, y), u(g, F), u(F, S), u(S, B), u(S, tt), u(S, K), u(K, dt), u(K, ut), u(F, $t), u(F, M), u(M, et), u(M, ct), u(M, $), u($, j), u($, at), u(m, ft), u(m, J), u(J, vt), u(J, Jt), Q(H, J, null), u(m, Rt), u(m, Y), u(Y, wt), u(Y, Dt), Q(R, Y, null), ot = !0, Pt || (Ft = [
          x(
            l,
            "click",
            /*click_handler*/
            e[4]
          ),
          x(
            d,
            "click",
            /*click_handler_1*/
            e[5]
          ),
          x(
            f,
            "click",
            /*click_handler_2*/
            e[6]
          )
        ], Pt = !0);
      },
      p(v, [N]) {
        (!ot || N & /*todoCount*/
        2) && Z(
          dt,
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
        const kt = {};
        !Et && N & /*todos*/
        1 && (Et = !0, kt.todos = /*todos*/
        v[0], I(() => Et = !1)), !qt && N & /*successTodoCount*/
        4 && (qt = !0, kt.successTodoCount = /*successTodoCount*/
        v[2], I(() => qt = !1)), !jt && N & /*todoCount*/
        2 && (jt = !0, kt.todoCount = /*todoCount*/
        v[1], I(() => jt = !1)), R.$set(kt);
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
    let C = document.querySelector(`#${g}`).offsetTop;
    window.scrollTo({ top: C - 50, behavior: "smooth" });
  };
  let n = [], s = localStorage.length, l = 0, r = "";
  s == 0 ? (localStorage.setItem("success", "0"), r = localStorage.getItem("success"), s = localStorage.length, l = s - 1) : (r = localStorage.getItem("success"), s = localStorage.length, l = s - 1);
  for (let g = 0; g < s; g++)
    ["success", "todoCount"].includes(localStorage.key(g)) || n.push(JSON.parse(localStorage.getItem(localStorage.key(g))));
  const d = () => i("#profile"), c = () => i("#taskInput"), f = () => i("#yetTask");
  function p(g) {
    n = g, o(0, n);
  }
  function m(g) {
    l = g, o(1, l);
  }
  function b(g) {
    n = g, o(0, n);
  }
  function k(g) {
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
    m,
    b,
    k,
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
