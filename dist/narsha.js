var re = Object.defineProperty;
var ue = (e, t, o) => t in e ? re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var A = (e, t, o) => ue(e, typeof t != "symbol" ? t + "" : t, o);
function X() {
}
function Qt(e) {
  return e();
}
function Vt() {
  return /* @__PURE__ */ Object.create(null);
}
function q(e) {
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
function qt(e) {
  return e ?? "";
}
function d(e, t) {
  e.appendChild(t);
}
function gt(e, t, o) {
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
  return d(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function O(e, t, o) {
  e.insertBefore(t, o || null);
}
function j(e) {
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
function w() {
  return N(" ");
}
function pe() {
  return N("");
}
function k(e, t, o, i) {
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
function Ut(e, t, o, i) {
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
let Jt;
function pt(e) {
  Jt = e;
}
const st = [], E = [];
let lt = [];
const Lt = [], _e = /* @__PURE__ */ Promise.resolve();
let Bt = !1;
function be() {
  Bt || (Bt = !0, _e.then(z));
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
        nt++, pt(t), me(t.$$);
      }
    } catch (t) {
      throw st.length = 0, nt = 0, t;
    }
    for (pt(null), st.length = 0, nt = 0; E.length; ) E.pop()();
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
    e.update(), q(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Mt);
  }
}
function $e(e) {
  const t = [], o = [];
  lt.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : o.push(i)), o.forEach((i) => i()), lt = t;
}
const yt = /* @__PURE__ */ new Set();
let K;
function ve() {
  K = {
    r: 0,
    c: [],
    p: K
    // parent group
  };
}
function we() {
  K.r || q(K.c), K = K.p;
}
function H(e, t) {
  e && e.i && (yt.delete(e), e.i(t));
}
function Y(e, t, o, i) {
  if (e && e.o) {
    if (yt.has(e)) return;
    yt.add(e), K.c.push(() => {
      yt.delete(e), i && (o && e.d(1), i());
    }), e.o(t);
  } else i && i();
}
function Yt(e) {
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
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : q(s), e.$$.on_mount = [];
  }), n.forEach(Mt);
}
function W(e, t) {
  const o = e.$$;
  o.fragment !== null && ($e(o.after_update), q(o.on_destroy), o.fragment && o.fragment.d(t), o.on_destroy = o.fragment = null, o.ctx = []);
}
function Ce(e, t) {
  e.$$.dirty[0] === -1 && (st.push(e), be(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function _t(e, t, o, i, n, s, l = null, r = [-1]) {
  const u = Jt;
  pt(e);
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
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Vt(),
    dirty: r,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  l && l(c.root);
  let f = !1;
  if (c.ctx = o ? o(e, t.props || {}, (g, b, ...m) => {
    const x = m.length ? m[0] : b;
    return c.ctx && n(c.ctx[g], c.ctx[g] = x) && (!c.skip_bound && c.bound[g] && c.bound[g](x), f && Ce(e, g)), b;
  }) : [], c.update(), f = !0, q(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = he(t.target);
      c.fragment && c.fragment.l(g), g.forEach(j);
    } else
      c.fragment && c.fragment.c();
    t.intro && H(e.$$.fragment), Q(e, t.target, t.anchor), z();
  }
  pt(u);
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
              c && j(l);
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
        const l = this.$$g_p(s.name);
        l in this.$$d || (this.$$d[l] = kt(l, s.value, this.$$p_d, "toProp"));
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
            const l = kt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = kt(t, i, this.$$p_d, "toProp"), (n = this.$$c) == null || n.$set({ [t]: this.$$d[t] }));
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
function kt(e, t, o, i) {
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
      set(u) {
        var c;
        u = kt(r, u, t), this.$$d[r] = u, (c = this.$$c) == null || c.$set({ [r]: u });
      }
    });
  }), i.forEach((r) => {
    Object.defineProperty(l.prototype, r, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[r];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
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
    this.$$set && !de(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const xe = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xe);
function ye(e) {
  gt(e, "svelte-1m9rn1b", ".tag-unselected.svelte-1m9rn1b{padding:4px 6px;font-size:2rem;background-color:transparent;border-radius:4px}.tag-selected.svelte-1m9rn1b{padding:4px 6px;height:fit-content;width:fit-content;font-size:2rem;background-color:#6554AF;color:white;border-radius:4px}.radio-button.svelte-1m9rn1b{display:none}");
}
function ke(e) {
  let t, o, i, n, s, l, r;
  return {
    c() {
      t = h("label"), o = h("input"), i = w(), n = N(
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
      ), a(t, "class", s = qt(
        /*tag*/
        e[0] === /*tagPrint*/
        e[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b");
    },
    m(u, c) {
      O(u, t, c), d(t, o), d(t, i), d(t, n), l || (r = k(
        o,
        "click",
        /*tagToggle*/
        e[3]
      ), l = !0);
    },
    p(u, [c]) {
      c & /*todoTag*/
      2 && a(
        o,
        "name",
        /*todoTag*/
        u[1]
      ), c & /*tagPrint*/
      4 && a(
        o,
        "id",
        /*tagPrint*/
        u[2]
      ), c & /*tagPrint*/
      4 && Z(
        n,
        /*tagPrint*/
        u[2]
      ), c & /*tagPrint*/
      4 && a(
        t,
        "for",
        /*tagPrint*/
        u[2]
      ), c & /*tag, tagPrint*/
      5 && s !== (s = qt(
        /*tag*/
        u[0] === /*tagPrint*/
        u[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b") && a(t, "class", s);
    },
    i: X,
    o: X,
    d(u) {
      u && j(t), l = !1, r();
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
class Tt extends mt {
  constructor(t) {
    super(), _t(this, t, Te, ke, ht, { todoTag: 1, tagPrint: 2, tag: 0 }, ye);
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
bt(Tt, { todoTag: {}, tagPrint: {}, tag: {} }, [], [], !0);
function ze(e) {
  gt(e, "svelte-1i5n05w", ".edit-input.svelte-1i5n05w{outline:none;background-color:#fff;color:rgb(85, 85, 85);background-color:white;border:none;border-radius:1px;font-size:2rem;padding:1px 0}.todo-print.svelte-1i5n05w{display:flex;flex-direction:column;justify-content:space-between;padding:6% 8%;font-size:2rem;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:12px}.todo-footer.svelte-1i5n05w{display:flex;flex-direction:column;align-items:start;gap:4px}.time.svelte-1i5n05w{font-size:1.6rem}.todo-control-button.svelte-1i5n05w{padding:2px 10px;background-color:white;color:black;border:none;border-radius:2px;font-size:14px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;white-space:nowrap}.todo-control-button.svelte-1i5n05w:hover{box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22);transition:0.2s linear;white-space:nowrap}");
}
function Se(e) {
  let t, o = (
    /*todo*/
    e[0].title + ""
  ), i, n, s, l, r, u, c, f, g, b, m, x;
  function T(_, y) {
    return (
      /*todo*/
      _[0].time ? Pe : je
    );
  }
  let p = T(e), C = p(e);
  return {
    c() {
      t = h("div"), i = N(o), n = w(), s = h("div"), C.c(), l = w(), r = h("div"), u = h("button"), u.textContent = "수정", c = w(), f = h("button"), f.textContent = "완료", g = w(), b = h("button"), b.textContent = "삭제", a(u, "class", "todo-control-button svelte-1i5n05w"), a(f, "class", "todo-control-button svelte-1i5n05w"), a(b, "class", "todo-control-button svelte-1i5n05w"), a(r, "class", "todo-control"), a(s, "class", "todo-footer svelte-1i5n05w"), a(t, "class", "todo-print svelte-1i5n05w");
    },
    m(_, y) {
      O(_, t, y), d(t, i), d(t, n), d(t, s), C.m(s, null), d(s, l), d(s, r), d(r, u), d(r, c), d(r, f), d(r, g), d(r, b), m || (x = [
        k(
          u,
          "click",
          /*onEdit*/
          e[3]
        ),
        k(
          f,
          "click",
          /*successTodo*/
          e[6]
        ),
        k(
          b,
          "click",
          /*deleteTodo*/
          e[7]
        )
      ], m = !0);
    },
    p(_, y) {
      y & /*todo*/
      1 && o !== (o = /*todo*/
      _[0].title + "") && Z(i, o), p === (p = T(_)) && C ? C.p(_, y) : (C.d(1), C = p(_), C && (C.c(), C.m(s, l)));
    },
    d(_) {
      _ && j(t), C.d(), m = !1, q(x);
    }
  };
}
function Ee(e) {
  let t, o, i, n, s, l, r, u, c;
  return {
    c() {
      t = h("div"), o = h("input"), i = w(), n = h("div"), s = h("button"), s.textContent = "수정 완료", l = w(), r = h("button"), r.textContent = "취소", a(o, "type", "text"), a(o, "class", "edit-input svelte-1i5n05w"), a(s, "class", "todo-control-button svelte-1i5n05w"), a(r, "class", "todo-control-button svelte-1i5n05w"), a(n, "class", "todo-control"), a(t, "class", "todo-print svelte-1i5n05w");
    },
    m(f, g) {
      O(f, t, g), d(t, o), it(
        o,
        /*title*/
        e[2]
      ), d(t, i), d(t, n), d(n, s), d(n, l), d(n, r), u || (c = [
        k(
          o,
          "input",
          /*input_input_handler*/
          e[11]
        ),
        k(
          o,
          "keydown",
          /*keydown_handler*/
          e[12]
        ),
        k(
          s,
          "click",
          /*updateTodo*/
          e[5]
        ),
        k(
          r,
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
      f && j(t), u = !1, q(c);
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
      t = h("span"), i = N(o), a(t, "class", "time svelte-1i5n05w");
    },
    m(n, s) {
      O(n, t, s), d(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].tag + "") && Z(i, o);
    },
    d(n) {
      n && j(t);
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
      t = h("span"), i = N(o), a(t, "class", "time svelte-1i5n05w");
    },
    m(n, s) {
      O(n, t, s), d(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].time + "") && Z(i, o);
    },
    d(n) {
      n && j(t);
    }
  };
}
function Ae(e) {
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
      n.c(), t = pe();
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
      s && j(t), n.d(s);
    }
  };
}
function Ne(e, t, o) {
  let { todos: i } = t, { todo: n } = t, { successTodoCount: s } = t, { todoCount: l } = t, r = !1, u = "";
  const c = () => {
    o(1, r = !0), o(2, u = n.title);
  }, f = () => {
    o(1, r = !1);
  }, g = () => {
    o(0, n.title = u, n), f();
  }, b = () => {
    localStorage.removeItem("success"), localStorage.setItem("success", `${Number(s) + 1}`), o(9, s = localStorage.getItem("success")), m();
  }, m = () => {
    o(8, i = i.filter((p) => p.id != n.id)), console.log(i), o(8, i), localStorage.removeItem(`${n.id}`), o(10, l -= 1);
  };
  function x() {
    u = this.value, o(2, u);
  }
  const T = (p) => {
    p.key === "Enter" && g();
  };
  return e.$$set = (p) => {
    "todos" in p && o(8, i = p.todos), "todo" in p && o(0, n = p.todo), "successTodoCount" in p && o(9, s = p.successTodoCount), "todoCount" in p && o(10, l = p.todoCount);
  }, [
    n,
    r,
    u,
    c,
    f,
    g,
    b,
    m,
    i,
    s,
    l,
    x,
    T
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
bt(Zt, { todos: {}, todo: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Oe(e) {
  gt(e, "svelte-1dz26oo", '.todo-create-container.svelte-1dz26oo{display:flex;align-items:end;gap:16px}.todo-write.svelte-1dz26oo{display:flex;justify-content:center;width:50%;height:400px;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;color:black;outline:none;padding:1.6% 2%;font-size:2rem;resize:none}.todo-info.svelte-1dz26oo{width:50%;height:400px;display:flex;flex-direction:column;justify-content:space-between}.todo-info-selecter.svelte-1dz26oo{position:relative}.todo-date.svelte-1dz26oo{margin-top:12px}.todo-time-viewer.svelte-1dz26oo{position:absolute;font-size:2rem;top:58px;left:20px;z-index:0;color:#121212}input[type="date"].svelte-1dz26oo{position:relative;width:95%;height:48px;padding:10px;text-align:left;font-size:100%;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;background-color:transparent;color:transparent;border-radius:16px;z-index:0;user-select:none}input[type="date"].svelte-1dz26oo::-webkit-calendar-picker-indicator{position:absolute;left:-80px;top:0;width:100%;color:black;height:100%;cursor:pointer}.todo-tag-selecter.svelte-1dz26oo{display:flex;gap:12px}.todo-create-button.svelte-1dz26oo{width:100%;height:50px;font-size:2rem;background-color:#6554AF;color:white;border-radius:20px;border:none;cursor:pointer}.todo-create-button.svelte-1dz26oo:hover{background-color:#59499C}.todo-create-button.svelte-1dz26oo:active{background-color:#7566B7}');
}
function Ie(e) {
  let t, o, i, n, s, l, r, u, c, f, g, b, m, x, T, p, C, _, y, F, S, M, tt, U;
  function ut($) {
    e[8]($);
  }
  let dt = { todoTag: "todoTag", tagPrint: "매일" };
  /*tag*/
  e[0] !== void 0 && (dt.tag = /*tag*/
  e[0]), r = new Tt({ props: dt }), E.push(() => B(r, "tag", ut));
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
    e[0]), m = new Tt({ props: ct }), E.push(() => B(m, "tag", et)), {
      c() {
        t = h("div"), o = h("textarea"), i = w(), n = h("div"), s = h("div"), l = h("div"), rt(r.$$.fragment), c = w(), rt(f.$$.fragment), b = w(), rt(m.$$.fragment), T = w(), p = h("div"), C = N(
          /*time*/
          e[1]
        ), _ = w(), y = h("input"), F = w(), S = h("button"), S.textContent = "작성 완료하기", a(o, "name", ""), a(o, "id", ""), a(o, "class", "todo-write svelte-1dz26oo"), a(o, "placeholder", "할 일 등록하기"), a(l, "class", "todo-tag-selecter svelte-1dz26oo"), a(p, "class", "todo-time-viewer svelte-1dz26oo"), a(y, "type", "date"), a(y, "class", "todo-date svelte-1dz26oo"), a(s, "class", "todo-info-selecter svelte-1dz26oo"), a(S, "class", "todo-create-button svelte-1dz26oo"), a(n, "class", "todo-info svelte-1dz26oo"), a(t, "class", "todo-create-container svelte-1dz26oo");
      },
      m($, P) {
        O($, t, P), d(t, o), it(
          o,
          /*title*/
          e[2]
        ), d(t, i), d(t, n), d(n, s), d(s, l), Q(r, l, null), d(l, c), Q(f, l, null), d(l, b), Q(m, l, null), d(s, T), d(s, p), d(p, C), d(s, _), d(s, y), it(
          y,
          /*time*/
          e[1]
        ), d(n, F), d(n, S), M = !0, tt || (U = [
          k(
            o,
            "input",
            /*textarea_input_handler*/
            e[6]
          ),
          k(
            o,
            "keydown",
            /*keydown_handler*/
            e[7]
          ),
          k(
            y,
            "input",
            /*input_input_handler*/
            e[11]
          ),
          k(
            S,
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
        !u && P & /*tag*/
        1 && (u = !0, at.tag = /*tag*/
        $[0], L(() => u = !1)), r.$set(at);
        const ft = {};
        !g && P & /*tag*/
        1 && (g = !0, ft.tag = /*tag*/
        $[0], L(() => g = !1)), f.$set(ft);
        const R = {};
        !x && P & /*tag*/
        1 && (x = !0, R.tag = /*tag*/
        $[0], L(() => x = !1)), m.$set(R), (!M || P & /*time*/
        2) && Z(
          C,
          /*time*/
          $[1]
        ), P & /*time*/
        2 && it(
          y,
          /*time*/
          $[1]
        );
      },
      i($) {
        M || (H(r.$$.fragment, $), H(f.$$.fragment, $), H(m.$$.fragment, $), M = !0);
      },
      o($) {
        Y(r.$$.fragment, $), Y(f.$$.fragment, $), Y(m.$$.fragment, $), M = !1;
      },
      d($) {
        $ && j(t), W(r), W(f), W(m), tt = !1, q(U);
      }
    }
  );
}
function Le(e, t, o) {
  let { todos: i } = t, { todoCount: n } = t, s = "", l = localStorage.length, r = "", u = "";
  const c = (_) => {
    o(0, r = "");
  }, f = (_) => {
    _ == "" ? _ = "" : o(1, u = "");
  }, g = () => {
    if (!s.trim()) {
      o(2, s = "");
      return;
    }
    !r && !u && o(0, r = "매일"), i.push({ id: l, title: s, tag: r, time: u }), localStorage.setItem(`${l}`, JSON.stringify({ id: l, title: s, tag: r, time: u })), o(5, n += 1), o(4, i), o(2, s = ""), o(0, r = ""), o(1, u = ""), l += 1, console.log(i);
  };
  function b() {
    s = this.value, o(2, s);
  }
  const m = (_) => {
    _.key === "Enter" && _.isComposing == !1 && (_.preventDefault(), g());
  };
  function x(_) {
    r = _, o(0, r);
  }
  function T(_) {
    r = _, o(0, r);
  }
  function p(_) {
    r = _, o(0, r);
  }
  function C() {
    u = this.value, o(1, u);
  }
  return e.$$set = (_) => {
    "todos" in _ && o(4, i = _.todos), "todoCount" in _ && o(5, n = _.todoCount);
  }, e.$$.update = () => {
    e.$$.dirty & /*time*/
    2 && c(), e.$$.dirty & /*tag*/
    1 && f(r);
  }, [
    r,
    u,
    s,
    g,
    i,
    n,
    b,
    m,
    x,
    T,
    p,
    C
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
    this.$$set({ todos: t }), z();
  }
  get todoCount() {
    return this.$$.ctx[5];
  }
  set todoCount(t) {
    this.$$set({ todoCount: t }), z();
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
  function l(f) {
    e[3](f);
  }
  function r(f) {
    e[4](f);
  }
  function u(f) {
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
    e[2]), t = new Zt({ props: c }), E.push(() => B(t, "todos", l)), E.push(() => B(t, "successTodoCount", r)), E.push(() => B(t, "todoCount", u)), {
      c() {
        rt(t.$$.fragment);
      },
      m(f, g) {
        Q(t, f, g), s = !0;
      },
      p(f, g) {
        const b = {};
        g & /*todos*/
        1 && (b.todo = /*todo*/
        f[6]), !o && g & /*todos*/
        1 && (o = !0, b.todos = /*todos*/
        f[0], L(() => o = !1)), !i && g & /*successTodoCount*/
        2 && (i = !0, b.successTodoCount = /*successTodoCount*/
        f[1], L(() => i = !1)), !n && g & /*todoCount*/
        4 && (n = !0, b.todoCount = /*todoCount*/
        f[2], L(() => n = !1)), t.$set(b);
      },
      i(f) {
        s || (H(t.$$.fragment, f), s = !0);
      },
      o(f) {
        Y(t.$$.fragment, f), s = !1;
      },
      d(f) {
        W(t, f);
      }
    }
  );
}
function Me(e) {
  let t, o, i = Yt(
    /*todos*/
    e[0]
  ), n = [];
  for (let l = 0; l < i.length; l += 1)
    n[l] = Kt(Gt(e, i, l));
  const s = (l) => Y(n[l], 1, 1, () => {
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
      for (let u = 0; u < n.length; u += 1)
        n[u] && n[u].m(t, null);
      o = !0;
    },
    p(l, [r]) {
      if (r & /*todos, successTodoCount, todoCount*/
      7) {
        i = Yt(
          /*todos*/
          l[0]
        );
        let u;
        for (u = 0; u < i.length; u += 1) {
          const c = Gt(l, i, u);
          n[u] ? (n[u].p(c, r), H(n[u], 1)) : (n[u] = Kt(c), n[u].c(), H(n[u], 1), n[u].m(t, null));
        }
        for (ve(), u = i.length; u < n.length; u += 1)
          s(u);
        we();
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
        Y(n[r]);
      o = !1;
    },
    d(l) {
      l && j(t), fe(n, l);
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
  function u(c) {
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
    u
  ];
}
class ee extends mt {
  constructor(t) {
    super(), _t(
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
bt(ee, { todos: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Re(e) {
  gt(e, "svelte-1peupih", "header.svelte-1peupih{width:100vw;display:flex;align-items:center;position:fixed;z-index:1;height:80px;background-color:black;color:white}.header-project-name.svelte-1peupih{display:flex;align-items:center;margin:0 0 0 5%;padding-top:4px;font-size:4rem;font-weight:600}.header-project-introduce.svelte-1peupih{margin-left:2%;font-size:2rem;margin-bottom:1%;align-self:flex-end;font-weight:400}main.svelte-1peupih{display:flex;width:100vw;height:fit-content;background-color:none;top:80px}.contents.svelte-1peupih{width:80%;height:fit-content;justify-content:stretch;position:relative;top:80px;padding:3% 2% 0 2%;color:#121212;background-color:rgb(248, 250, 252)}.content.svelte-1peupih{display:flex;flex-direction:column;margin-bottom:10%;border-radius:12px}.content-header.svelte-1peupih{width:fit-content;display:flex;font-size:3rem;margin-bottom:12px;padding:1% 1%}aside.svelte-1peupih{display:flex;flex-direction:column;width:20%}.sidebar.svelte-1peupih{position:fixed;top:80px;display:flex;flex-direction:column;width:20%;height:100%;padding:1%;background-color:#ffffff}.nav.svelte-1peupih{display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem}.nav.svelte-1peupih:hover{cursor:pointer;display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;font-size:2rem;transition:0.2s linear;box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22)}.svelte-1peupih{box-sizing:border-box}.profile.svelte-1peupih{display:flex;padding:3% 4%;flex-direction:column;font-size:3rem;background-color:#ffffff;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;font-weight:600}.profile-task-info.svelte-1peupih{width:fit-content;display:flex;flex-direction:column;font-weight:400}.profile-task-head.svelte-1peupih{font-size:2rem;margin-top:0.5%;font-weight:400}.profile-task-count.svelte-1peupih{font-size:2rem;margin-top:0.5%;margin:0 12px;font-weight:400}");
}
function De(e) {
  let t, o, i, n, s, l, r, u, c, f, g, b, m, x, T, p, C, _, y, F, S, M, tt, U, ut, dt, $t, J, et, ct, $, P, at, ft, R, vt, Rt, V, zt, St, Dt, G, wt, Ht, D, Et, jt, Pt, ot, At, Ft;
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
        t = h("header"), t.innerHTML = '<span class="header-project-name svelte-1peupih">PlanA</span> <span class="header-project-introduce svelte-1peupih">To Prevent PlanB</span>', o = w(), i = h("main"), n = h("aside"), s = h("div"), l = h("button"), l.textContent = "프로필", r = w(), u = h("button"), u.textContent = "과제 등록하기", c = w(), f = h("button"), f.textContent = "미완료 과제", g = w(), b = h("div"), m = h("div"), x = h("div"), x.textContent = "프로필", T = w(), p = h("div"), C = N("반가워요! 👋 "), _ = h("br"), y = w(), F = h("div"), S = h("div"), M = h("div"), M.textContent = "미완료 과제 :", tt = w(), U = h("div"), ut = N(
          /*todoCount*/
          e[1]
        ), dt = N("개"), $t = w(), J = h("div"), et = h("div"), et.textContent = "완료 과제 :", ct = w(), $ = h("div"), P = N(
          /*successTodoCount*/
          e[2]
        ), at = N("개"), ft = w(), R = h("div"), vt = h("div"), vt.textContent = "과제 등록하기", Rt = w(), rt(V.$$.fragment), Dt = w(), G = h("div"), wt = h("div"), wt.textContent = "미완료 과제", Ht = w(), rt(D.$$.fragment), a(t, "class", "svelte-1peupih"), a(l, "class", "nav svelte-1peupih"), a(u, "class", "nav svelte-1peupih"), a(f, "class", "nav svelte-1peupih"), a(s, "class", "sidebar svelte-1peupih"), a(n, "class", "svelte-1peupih"), a(x, "class", "content-header svelte-1peupih"), a(_, "class", "svelte-1peupih"), a(M, "class", "profile-task-head svelte-1peupih"), a(U, "class", "profile-task-count svelte-1peupih"), Ut(S, "display", "flex"), a(S, "class", "svelte-1peupih"), a(et, "class", "profile-task-head svelte-1peupih"), a($, "class", "profile-task-count svelte-1peupih"), Ut(J, "display", "flex"), a(J, "class", "svelte-1peupih"), a(F, "class", "profile-task-info svelte-1peupih"), a(p, "class", "profile svelte-1peupih"), a(m, "class", "content svelte-1peupih"), a(m, "id", "profile"), a(vt, "class", "content-header svelte-1peupih"), a(R, "class", "content svelte-1peupih"), a(R, "id", "taskInput"), a(wt, "class", "content-header svelte-1peupih"), a(G, "class", "content svelte-1peupih"), a(G, "id", "yetTask"), a(b, "class", "contents svelte-1peupih"), a(i, "class", "svelte-1peupih");
      },
      m(v, I) {
        O(v, t, I), O(v, o, I), O(v, i, I), d(i, n), d(n, s), d(s, l), d(s, r), d(s, u), d(s, c), d(s, f), d(i, g), d(i, b), d(b, m), d(m, x), d(m, T), d(m, p), d(p, C), d(p, _), d(p, y), d(p, F), d(F, S), d(S, M), d(S, tt), d(S, U), d(U, ut), d(U, dt), d(F, $t), d(F, J), d(J, et), d(J, ct), d(J, $), d($, P), d($, at), d(b, ft), d(b, R), d(R, vt), d(R, Rt), Q(V, R, null), d(b, Dt), d(b, G), d(G, wt), d(G, Ht), Q(D, G, null), ot = !0, At || (Ft = [
          k(
            l,
            "click",
            /*click_handler*/
            e[4]
          ),
          k(
            u,
            "click",
            /*click_handler_1*/
            e[5]
          ),
          k(
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
          ut,
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
        v[0], L(() => zt = !1)), !St && I & /*todoCount*/
        2 && (St = !0, Ot.todoCount = /*todoCount*/
        v[1], L(() => St = !1)), V.$set(Ot);
        const xt = {};
        !Et && I & /*todos*/
        1 && (Et = !0, xt.todos = /*todos*/
        v[0], L(() => Et = !1)), !jt && I & /*successTodoCount*/
        4 && (jt = !0, xt.successTodoCount = /*successTodoCount*/
        v[2], L(() => jt = !1)), !Pt && I & /*todoCount*/
        2 && (Pt = !0, xt.todoCount = /*todoCount*/
        v[1], L(() => Pt = !1)), D.$set(xt);
      },
      i(v) {
        ot || (H(V.$$.fragment, v), H(D.$$.fragment, v), ot = !0);
      },
      o(v) {
        Y(V.$$.fragment, v), Y(D.$$.fragment, v), ot = !1;
      },
      d(v) {
        v && (j(t), j(o), j(i)), W(V), W(D), At = !1, q(Ft);
      }
    }
  );
}
function He(e, t, o) {
  const i = (p) => {
    console.log("scroll");
    let C = document.querySelectorAll(p)[0].offsetTop;
    window.scrollTo({ top: C - 50, behavior: "smooth" });
  };
  let n = [], s = localStorage.length, l = 0, r = "";
  s == 0 ? (localStorage.setItem("success", "0"), r = localStorage.getItem("success"), s = localStorage.length, l = s - 1) : (r = localStorage.getItem("success"), s = localStorage.length, l = s - 1);
  for (let p = 0; p < s; p++)
    ["success", "todoCount"].includes(localStorage.key(p)) || n.push(JSON.parse(localStorage.getItem(localStorage.key(p))));
  const u = () => i("#profile"), c = () => i("#taskInput"), f = () => i("#yetTask");
  function g(p) {
    n = p, o(0, n);
  }
  function b(p) {
    l = p, o(1, l);
  }
  function m(p) {
    n = p, o(0, n);
  }
  function x(p) {
    r = p, o(2, r);
  }
  function T(p) {
    l = p, o(1, l);
  }
  return [
    n,
    l,
    r,
    i,
    u,
    c,
    f,
    g,
    b,
    m,
    x,
    T
  ];
}
class Fe extends mt {
  constructor(t) {
    super(), _t(this, t, He, De, ht, {}, Re);
  }
}
customElements.define("my-component", bt(Fe, {}, [], [], !0));
export {
  Fe as SvelteApp
};
