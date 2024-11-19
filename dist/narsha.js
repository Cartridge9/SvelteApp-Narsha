var le = Object.defineProperty;
var ue = (e, t, o) => t in e ? le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var P = (e, t, o) => ue(e, typeof t != "symbol" ? t + "" : t, o);
function X() {
}
function Qt(e) {
  return e();
}
function Ft() {
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
function de(e) {
  return Object.keys(e).length === 0;
}
function Vt(e) {
  return e ?? "";
}
function d(e, t) {
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
  return d(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function N(e, t, o) {
  e.insertBefore(t, o || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function fe(e, t) {
  for (let o = 0; o < e.length; o += 1)
    e[o] && e[o].d(t);
}
function h(e) {
  return document.createElement(e);
}
function A(e) {
  return document.createTextNode(e);
}
function w() {
  return A(" ");
}
function ge() {
  return A("");
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
const st = [], S = [];
let rt = [];
const It = [], _e = /* @__PURE__ */ Promise.resolve();
let Lt = !1;
function be() {
  Lt || (Lt = !0, _e.then(z));
}
function Bt(e) {
  rt.push(e);
}
function I(e) {
  It.push(e);
}
const Ot = /* @__PURE__ */ new Set();
let nt = 0;
function z() {
  if (nt !== 0)
    return;
  const e = Mt;
  do {
    try {
      for (; nt < st.length; ) {
        const t = st[nt];
        nt++, gt(t), me(t.$$);
      }
    } catch (t) {
      throw st.length = 0, nt = 0, t;
    }
    for (gt(null), st.length = 0, nt = 0; S.length; ) S.pop()();
    for (let t = 0; t < rt.length; t += 1) {
      const o = rt[t];
      Ot.has(o) || (Ot.add(o), o());
    }
    rt.length = 0;
  } while (st.length);
  for (; It.length; )
    It.pop()();
  Lt = !1, Ot.clear(), gt(e);
}
function me(e) {
  if (e.fragment !== null) {
    e.update(), V(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Bt);
  }
}
function $e(e) {
  const t = [], o = [];
  rt.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : o.push(i)), o.forEach((i) => i()), rt = t;
}
const xt = /* @__PURE__ */ new Set();
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
  K.r || V(K.c), K = K.p;
}
function D(e, t) {
  e && e.i && (xt.delete(e), e.i(t));
}
function Y(e, t, o, i) {
  if (e && e.o) {
    if (xt.has(e)) return;
    xt.add(e), K.c.push(() => {
      xt.delete(e), i && (o && e.d(1), i());
    }), e.o(t);
  } else i && i();
}
function Yt(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function L(e, t, o) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = o, o(e.$$.ctx[i]));
}
function lt(e) {
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
  e.$$.dirty[0] === -1 && (st.push(e), be(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function _t(e, t, o, i, n, s, r = null, l = [-1]) {
  const u = Mt;
  gt(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: X,
    not_equal: n,
    bound: Ft(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Ft(),
    dirty: l,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  r && r(c.root);
  let f = !1;
  if (c.ctx = o ? o(e, t.props || {}, (p, b, ...m) => {
    const y = m.length ? m[0] : b;
    return c.ctx && n(c.ctx[p], c.ctx[p] = y) && (!c.skip_bound && c.bound[p] && c.bound[p](y), f && Ce(e, p)), b;
  }) : [], c.update(), f = !0, V(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const p = he(t.target);
      c.fragment && c.fragment.l(p), p.forEach(E);
    } else
      c.fragment && c.fragment.c();
    t.intro && D(e.$$.fragment), Q(e, t.target, t.anchor), z();
  }
  gt(u);
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
          let r;
          return {
            c: function() {
              r = h("slot"), s !== "default" && a(r, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, f) {
              N(c, r, f);
            },
            d: function(c) {
              c && E(r);
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
        const r = this.$$g_p(s.name);
        r in this.$$d || (this.$$d[r] = kt(r, s.value, this.$$p_d, "toProp"));
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
            const r = kt(
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
        var c;
        u = kt(l, u, t), this.$$d[l] = u, (c = this.$$c) == null || c.$set({ [l]: u });
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
    this.$$set && !de(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ye = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ye);
function xe(e) {
  pt(e, "svelte-1m9rn1b", ".tag-unselected.svelte-1m9rn1b{padding:4px 6px;font-size:2rem;background-color:transparent;border-radius:4px}.tag-selected.svelte-1m9rn1b{padding:4px 6px;height:fit-content;width:fit-content;font-size:2rem;background-color:#6554AF;color:white;border-radius:4px}.radio-button.svelte-1m9rn1b{display:none}");
}
function ke(e) {
  let t, o, i, n, s, r, l;
  return {
    c() {
      t = h("label"), o = h("input"), i = w(), n = A(
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
    m(u, c) {
      N(u, t, c), d(t, o), d(t, i), d(t, n), r || (l = k(
        o,
        "click",
        /*tagToggle*/
        e[3]
      ), r = !0);
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
      5 && s !== (s = Vt(
        /*tag*/
        u[0] === /*tagPrint*/
        u[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1m9rn1b") && a(t, "class", s);
    },
    i: X,
    o: X,
    d(u) {
      u && E(t), r = !1, l();
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
    super(), _t(this, t, Te, ke, ht, { todoTag: 1, tagPrint: 2, tag: 0 }, xe);
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
  pt(e, "svelte-1juw7sa", ".edit-input.svelte-1juw7sa{outline:none;background-color:#fff;color:rgb(85, 85, 85);background-color:white;border:none;border-radius:1px;font-size:2rem;padding:1px 0}.todo-print.svelte-1juw7sa{display:flex;min-width:260px;flex-direction:column;justify-content:space-between;padding:6% 8%;font-size:2rem;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:12px}.todo-footer.svelte-1juw7sa{display:flex;justify-content:space-between;align-items:center}.time.svelte-1juw7sa{font-size:1.6rem}.todo-control-button.svelte-1juw7sa{padding:2px 10px;background-color:white;color:black;border:none;border-radius:2px;font-size:14px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;white-space:nowrap}.todo-control-button.svelte-1juw7sa:hover{box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22);transition:0.2s linear;white-space:nowrap}");
}
function je(e) {
  let t, o = (
    /*todo*/
    e[0].title + ""
  ), i, n, s, r, l, u, c, f, p, b, m, y;
  function T(_, x) {
    return (
      /*todo*/
      _[0].time ? qe : Ee
    );
  }
  let g = T(e), C = g(e);
  return {
    c() {
      t = h("div"), i = A(o), n = w(), s = h("div"), C.c(), r = w(), l = h("div"), u = h("button"), u.textContent = "수정", c = w(), f = h("button"), f.textContent = "완료", p = w(), b = h("button"), b.textContent = "삭제", a(u, "class", "todo-control-button svelte-1juw7sa"), a(f, "class", "todo-control-button svelte-1juw7sa"), a(b, "class", "todo-control-button svelte-1juw7sa"), a(l, "class", "todo-control"), a(s, "class", "todo-footer svelte-1juw7sa"), a(t, "class", "todo-print svelte-1juw7sa");
    },
    m(_, x) {
      N(_, t, x), d(t, i), d(t, n), d(t, s), C.m(s, null), d(s, r), d(s, l), d(l, u), d(l, c), d(l, f), d(l, p), d(l, b), m || (y = [
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
    p(_, x) {
      x & /*todo*/
      1 && o !== (o = /*todo*/
      _[0].title + "") && Z(i, o), g === (g = T(_)) && C ? C.p(_, x) : (C.d(1), C = g(_), C && (C.c(), C.m(s, r)));
    },
    d(_) {
      _ && E(t), C.d(), m = !1, V(y);
    }
  };
}
function Se(e) {
  let t, o, i, n, s, r, l, u, c;
  return {
    c() {
      t = h("div"), o = h("input"), i = w(), n = h("div"), s = h("button"), s.textContent = "수정 완료", r = w(), l = h("button"), l.textContent = "취소", a(o, "type", "text"), a(o, "class", "edit-input svelte-1juw7sa"), a(s, "class", "todo-control-button svelte-1juw7sa"), a(l, "class", "todo-control-button svelte-1juw7sa"), a(n, "class", "todo-control"), a(t, "class", "todo-print svelte-1juw7sa");
    },
    m(f, p) {
      N(f, t, p), d(t, o), it(
        o,
        /*title*/
        e[2]
      ), d(t, i), d(t, n), d(n, s), d(n, r), d(n, l), u || (c = [
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
          l,
          "click",
          /*offEdit*/
          e[4]
        )
      ], u = !0);
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
      f && E(t), u = !1, V(c);
    }
  };
}
function Ee(e) {
  let t, o = (
    /*todo*/
    e[0].tag + ""
  ), i;
  return {
    c() {
      t = h("span"), i = A(o), a(t, "class", "time svelte-1juw7sa");
    },
    m(n, s) {
      N(n, t, s), d(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].tag + "") && Z(i, o);
    },
    d(n) {
      n && E(t);
    }
  };
}
function qe(e) {
  let t, o = (
    /*todo*/
    e[0].time + ""
  ), i;
  return {
    c() {
      t = h("span"), i = A(o), a(t, "class", "time svelte-1juw7sa");
    },
    m(n, s) {
      N(n, t, s), d(t, i);
    },
    p(n, s) {
      s & /*todo*/
      1 && o !== (o = /*todo*/
      n[0].time + "") && Z(i, o);
    },
    d(n) {
      n && E(t);
    }
  };
}
function Pe(e) {
  let t;
  function o(s, r) {
    return (
      /*isEdit*/
      s[1] ? Se : je
    );
  }
  let i = o(e), n = i(e);
  return {
    c() {
      n.c(), t = ge();
    },
    m(s, r) {
      n.m(s, r), N(s, t, r);
    },
    p(s, [r]) {
      i === (i = o(s)) && n ? n.p(s, r) : (n.d(1), n = i(s), n && (n.c(), n.m(t.parentNode, t)));
    },
    i: X,
    o: X,
    d(s) {
      s && E(t), n.d(s);
    }
  };
}
function Ae(e, t, o) {
  let { todos: i } = t, { todo: n } = t, { successTodoCount: s } = t, { todoCount: r } = t, l = !1, u = "";
  const c = () => {
    o(1, l = !0), o(2, u = n.title);
  }, f = () => {
    o(1, l = !1);
  }, p = () => {
    o(0, n.title = u, n), f();
  }, b = () => {
    localStorage.removeItem("success"), localStorage.setItem("success", `${Number(s) + 1}`), o(9, s = localStorage.getItem("success")), m();
  }, m = () => {
    o(8, i = i.filter((g) => g.id != n.id)), console.log(i), o(8, i), localStorage.removeItem(`${n.id}`), o(10, r -= 1);
  };
  function y() {
    u = this.value, o(2, u);
  }
  const T = (g) => {
    g.key === "Enter" && p();
  };
  return e.$$set = (g) => {
    "todos" in g && o(8, i = g.todos), "todo" in g && o(0, n = g.todo), "successTodoCount" in g && o(9, s = g.successTodoCount), "todoCount" in g && o(10, r = g.todoCount);
  }, [
    n,
    l,
    u,
    c,
    f,
    p,
    b,
    m,
    i,
    s,
    r,
    y,
    T
  ];
}
class Zt extends mt {
  constructor(t) {
    super(), _t(
      this,
      t,
      Ae,
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
bt(Zt, { todos: {}, todo: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Ne(e) {
  pt(e, "svelte-1i20qfz", '.todo-create-container.svelte-1i20qfz{display:flex;align-items:end;gap:16px}.todo-write.svelte-1i20qfz{display:flex;justify-content:center;width:50%;height:400px;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;color:black;outline:none;padding:1.6% 2%;font-size:2rem;resize:none}.todo-info.svelte-1i20qfz{width:50%;height:400px;display:flex;flex-direction:column;justify-content:space-between}.todo-info-selecter.svelte-1i20qfz{position:relative}.todo-date.svelte-1i20qfz{margin-top:12px}.todo-time-viewer.svelte-1i20qfz{position:absolute;font-size:2rem;top:58px;left:20px;z-index:0;color:#121212}input[type="date"].svelte-1i20qfz{position:relative;width:100%;height:48px;padding:10px;text-align:left;font-size:100%;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;background-color:transparent;color:transparent;border-radius:16px;z-index:0;user-select:none}input[type="date"].svelte-1i20qfz::-webkit-calendar-picker-indicator{position:absolute;left:-80px;top:0;width:100%;color:black;height:100%;cursor:pointer}.todo-tag-selecter.svelte-1i20qfz{display:flex;gap:12px}.todo-create-button.svelte-1i20qfz{width:100%;height:50px;font-size:2rem;background-color:#6554AF;color:white;border-radius:20px;border:none;cursor:pointer}.todo-create-button.svelte-1i20qfz:hover{background-color:#59499C}.todo-create-button.svelte-1i20qfz:active{background-color:#7566B7}');
}
function Oe(e) {
  let t, o, i, n, s, r, l, u, c, f, p, b, m, y, T, g, C, _, x, H, j, B, tt, U;
  function ut($) {
    e[8]($);
  }
  let dt = { todoTag: "todoTag", tagPrint: "매일" };
  /*tag*/
  e[0] !== void 0 && (dt.tag = /*tag*/
  e[0]), l = new Tt({ props: dt }), S.push(() => L(l, "tag", ut));
  function $t($) {
    e[9]($);
  }
  let M = { todoTag: "todoTag", tagPrint: "매주" };
  /*tag*/
  e[0] !== void 0 && (M.tag = /*tag*/
  e[0]), f = new Tt({ props: M }), S.push(() => L(f, "tag", $t));
  function et($) {
    e[10]($);
  }
  let ct = { todoTag: "todoTag", tagPrint: "매달" };
  return (
    /*tag*/
    e[0] !== void 0 && (ct.tag = /*tag*/
    e[0]), m = new Tt({ props: ct }), S.push(() => L(m, "tag", et)), {
      c() {
        t = h("div"), o = h("textarea"), i = w(), n = h("div"), s = h("div"), r = h("div"), lt(l.$$.fragment), c = w(), lt(f.$$.fragment), b = w(), lt(m.$$.fragment), T = w(), g = h("div"), C = A(
          /*time*/
          e[1]
        ), _ = w(), x = h("input"), H = w(), j = h("button"), j.textContent = "작성 완료하기", a(o, "name", ""), a(o, "id", ""), a(o, "class", "todo-write svelte-1i20qfz"), a(o, "placeholder", "할 일 등록하기"), a(r, "class", "todo-tag-selecter svelte-1i20qfz"), a(g, "class", "todo-time-viewer svelte-1i20qfz"), a(x, "type", "date"), a(x, "class", "todo-date svelte-1i20qfz"), a(s, "class", "todo-info-selecter svelte-1i20qfz"), a(j, "class", "todo-create-button svelte-1i20qfz"), a(n, "class", "todo-info svelte-1i20qfz"), a(t, "class", "todo-create-container svelte-1i20qfz");
      },
      m($, q) {
        N($, t, q), d(t, o), it(
          o,
          /*title*/
          e[2]
        ), d(t, i), d(t, n), d(n, s), d(s, r), Q(l, r, null), d(r, c), Q(f, r, null), d(r, b), Q(m, r, null), d(s, T), d(s, g), d(g, C), d(s, _), d(s, x), it(
          x,
          /*time*/
          e[1]
        ), d(n, H), d(n, j), B = !0, tt || (U = [
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
            x,
            "input",
            /*input_input_handler*/
            e[11]
          ),
          k(
            j,
            "click",
            /*createTodo*/
            e[3]
          )
        ], tt = !0);
      },
      p($, [q]) {
        q & /*title*/
        4 && it(
          o,
          /*title*/
          $[2]
        );
        const at = {};
        !u && q & /*tag*/
        1 && (u = !0, at.tag = /*tag*/
        $[0], I(() => u = !1)), l.$set(at);
        const ft = {};
        !p && q & /*tag*/
        1 && (p = !0, ft.tag = /*tag*/
        $[0], I(() => p = !1)), f.$set(ft);
        const J = {};
        !y && q & /*tag*/
        1 && (y = !0, J.tag = /*tag*/
        $[0], I(() => y = !1)), m.$set(J), (!B || q & /*time*/
        2) && Z(
          C,
          /*time*/
          $[1]
        ), q & /*time*/
        2 && it(
          x,
          /*time*/
          $[1]
        );
      },
      i($) {
        B || (D(l.$$.fragment, $), D(f.$$.fragment, $), D(m.$$.fragment, $), B = !0);
      },
      o($) {
        Y(l.$$.fragment, $), Y(f.$$.fragment, $), Y(m.$$.fragment, $), B = !1;
      },
      d($) {
        $ && E(t), W(l), W(f), W(m), tt = !1, V(U);
      }
    }
  );
}
function Ie(e, t, o) {
  let { todos: i } = t, { todoCount: n } = t, s = "", r = localStorage.length, l = "", u = "";
  const c = (_) => {
    o(0, l = "");
  }, f = (_) => {
    _ == "" ? _ = "" : o(1, u = "");
  }, p = () => {
    if (!s.trim()) {
      o(2, s = "");
      return;
    }
    !l && !u && o(0, l = "매일"), i.push({ id: r, title: s, tag: l, time: u }), localStorage.setItem(`${r}`, JSON.stringify({ id: r, title: s, tag: l, time: u })), o(5, n += 1), o(4, i), o(2, s = ""), o(0, l = ""), o(1, u = ""), r += 1, console.log(i);
  };
  function b() {
    s = this.value, o(2, s);
  }
  const m = (_) => {
    _.key === "Enter" && _.isComposing == !1 && (_.preventDefault(), p());
  };
  function y(_) {
    l = _, o(0, l);
  }
  function T(_) {
    l = _, o(0, l);
  }
  function g(_) {
    l = _, o(0, l);
  }
  function C() {
    u = this.value, o(1, u);
  }
  return e.$$set = (_) => {
    "todos" in _ && o(4, i = _.todos), "todoCount" in _ && o(5, n = _.todoCount);
  }, e.$$.update = () => {
    e.$$.dirty & /*time*/
    2 && c(), e.$$.dirty & /*tag*/
    1 && f(l);
  }, [
    l,
    u,
    s,
    p,
    i,
    n,
    b,
    m,
    y,
    T,
    g,
    C
  ];
}
class te extends mt {
  constructor(t) {
    super(), _t(this, t, Ie, Oe, ht, { todos: 4, todoCount: 5 }, Ne);
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
function Le(e) {
  pt(e, "svelte-1lsobs2", ".yet-task.svelte-1lsobs2{display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, auto));grid-auto-rows:minmax(240px, auto);gap:12px}");
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
    e[2]), t = new Zt({ props: c }), S.push(() => L(t, "todos", r)), S.push(() => L(t, "successTodoCount", l)), S.push(() => L(t, "todoCount", u)), {
      c() {
        lt(t.$$.fragment);
      },
      m(f, p) {
        Q(t, f, p), s = !0;
      },
      p(f, p) {
        const b = {};
        p & /*todos*/
        1 && (b.todo = /*todo*/
        f[6]), !o && p & /*todos*/
        1 && (o = !0, b.todos = /*todos*/
        f[0], I(() => o = !1)), !i && p & /*successTodoCount*/
        2 && (i = !0, b.successTodoCount = /*successTodoCount*/
        f[1], I(() => i = !1)), !n && p & /*todoCount*/
        4 && (n = !0, b.todoCount = /*todoCount*/
        f[2], I(() => n = !1)), t.$set(b);
      },
      i(f) {
        s || (D(t.$$.fragment, f), s = !0);
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
function Be(e) {
  let t, o, i = Yt(
    /*todos*/
    e[0]
  ), n = [];
  for (let r = 0; r < i.length; r += 1)
    n[r] = Kt(Gt(e, i, r));
  const s = (r) => Y(n[r], 1, 1, () => {
    n[r] = null;
  });
  return {
    c() {
      t = h("div");
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      a(t, "class", "yet-task svelte-1lsobs2");
    },
    m(r, l) {
      N(r, t, l);
      for (let u = 0; u < n.length; u += 1)
        n[u] && n[u].m(t, null);
      o = !0;
    },
    p(r, [l]) {
      if (l & /*todos, successTodoCount, todoCount*/
      7) {
        i = Yt(
          /*todos*/
          r[0]
        );
        let u;
        for (u = 0; u < i.length; u += 1) {
          const c = Gt(r, i, u);
          n[u] ? (n[u].p(c, l), D(n[u], 1)) : (n[u] = Kt(c), n[u].c(), D(n[u], 1), n[u].m(t, null));
        }
        for (ve(), u = i.length; u < n.length; u += 1)
          s(u);
        we();
      }
    },
    i(r) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          D(n[l]);
        o = !0;
      }
    },
    o(r) {
      n = n.filter(Boolean);
      for (let l = 0; l < n.length; l += 1)
        Y(n[l]);
      o = !1;
    },
    d(r) {
      r && E(t), fe(n, r);
    }
  };
}
function Me(e, t, o) {
  let { todos: i } = t, { successTodoCount: n } = t, { todoCount: s } = t;
  function r(c) {
    i = c, o(0, i);
  }
  function l(c) {
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
bt(ee, { todos: {}, successTodoCount: {}, todoCount: {} }, [], [], !0);
function Je(e) {
  pt(e, "svelte-3einir", "header.svelte-3einir{width:100vw;display:flex;align-items:flex-end;position:fixed;z-index:1;height:80px;background-color:black}.header-project-name.svelte-3einir{display:flex;align-items:center;margin:0 0 0 5%;height:100%;font-size:4rem;font-weight:600}.header-project-introduce.svelte-3einir{margin-left:2%;font-size:2rem;margin-bottom:1%}main.svelte-3einir{display:flex;width:100vw;height:fit-content;background-color:none;top:80px}.contents.svelte-3einir{width:80%;height:fit-content;justify-content:stretch;position:relative;top:80px;padding:3% 2% 0 2%;color:#121212;background-color:rgb(248, 250, 252)}.content.svelte-3einir{display:flex;flex-direction:column;margin-bottom:10%;border-radius:12px}.content-header.svelte-3einir{width:fit-content;display:flex;font-size:3rem;margin-bottom:12px;padding:1% 1%}aside.svelte-3einir{display:flex;flex-direction:column;width:20%}.sidebar.svelte-3einir{position:fixed;top:80px;display:flex;flex-direction:column;width:20%;height:100%;padding:1%;background-color:#ffffff}.nav.svelte-3einir{display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem}.nav.svelte-3einir:hover{cursor:pointer;display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;font-size:2rem;transition:0.2s linear;box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22)}.svelte-3einir{box-sizing:border-box}.profile.svelte-3einir{display:flex;padding:3% 4%;flex-direction:column;font-size:3rem;background-color:#ffffff;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;font-weight:600}.profile-task-info.svelte-3einir{width:fit-content;display:flex;flex-direction:column;font-weight:400}.profile-task-head.svelte-3einir{font-size:2rem;margin-top:0.5%;font-weight:400}.profile-task-count.svelte-3einir{font-size:2rem;margin-top:0.5%;margin:0 12px;font-weight:400}");
}
function Re(e) {
  let t, o, i, n, s, r, l, u, c, f, p, b, m, y, T, g, C, _, x, H, j, B, tt, U, ut, dt, $t, M, et, ct, $, q, at, ft, J, vt, Jt, F, zt, jt, Rt, G, wt, Dt, R, St, Et, qt, ot, Pt, Ht;
  function oe(v) {
    e[7](v);
  }
  function ne(v) {
    e[8](v);
  }
  let At = {};
  /*todos*/
  e[0] !== void 0 && (At.todos = /*todos*/
  e[0]), /*todoCount*/
  e[1] !== void 0 && (At.todoCount = /*todoCount*/
  e[1]), F = new te({ props: At }), S.push(() => L(F, "todos", oe)), S.push(() => L(F, "todoCount", ne));
  function se(v) {
    e[9](v);
  }
  function ie(v) {
    e[10](v);
  }
  function re(v) {
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
    e[1]), R = new ee({ props: Ct }), S.push(() => L(R, "todos", se)), S.push(() => L(R, "successTodoCount", ie)), S.push(() => L(R, "todoCount", re)), {
      c() {
        t = h("header"), t.innerHTML = '<span class="header-project-name svelte-3einir">PlanA</span> <span class="header-project-introduce svelte-3einir">Prevent PlanB</span>', o = w(), i = h("main"), n = h("aside"), s = h("div"), r = h("button"), r.textContent = "프로필", l = w(), u = h("button"), u.textContent = "과제 등록하기", c = w(), f = h("button"), f.textContent = "미완료 과제", p = w(), b = h("div"), m = h("div"), y = h("div"), y.textContent = "프로필", T = w(), g = h("div"), C = A("반가워요! 👋 "), _ = h("br"), x = w(), H = h("div"), j = h("div"), B = h("div"), B.textContent = "미완료 과제 :", tt = w(), U = h("div"), ut = A(
          /*todoCount*/
          e[1]
        ), dt = A("개"), $t = w(), M = h("div"), et = h("div"), et.textContent = "완료 과제 :", ct = w(), $ = h("div"), q = A(
          /*successTodoCount*/
          e[2]
        ), at = A("개"), ft = w(), J = h("div"), vt = h("div"), vt.textContent = "과제 등록하기", Jt = w(), lt(F.$$.fragment), Rt = w(), G = h("div"), wt = h("div"), wt.textContent = "미완료 과제", Dt = w(), lt(R.$$.fragment), a(t, "class", "svelte-3einir"), a(r, "class", "nav svelte-3einir"), a(u, "class", "nav svelte-3einir"), a(f, "class", "nav svelte-3einir"), a(s, "class", "sidebar svelte-3einir"), a(n, "class", "svelte-3einir"), a(y, "class", "content-header svelte-3einir"), a(_, "class", "svelte-3einir"), a(B, "class", "profile-task-head svelte-3einir"), a(U, "class", "profile-task-count svelte-3einir"), Ut(j, "display", "flex"), a(j, "class", "svelte-3einir"), a(et, "class", "profile-task-head svelte-3einir"), a($, "class", "profile-task-count svelte-3einir"), Ut(M, "display", "flex"), a(M, "class", "svelte-3einir"), a(H, "class", "profile-task-info svelte-3einir"), a(g, "class", "profile svelte-3einir"), a(m, "class", "content svelte-3einir"), a(m, "id", "profile"), a(vt, "class", "content-header svelte-3einir"), a(J, "class", "content svelte-3einir"), a(J, "id", "taskInput"), a(wt, "class", "content-header svelte-3einir"), a(G, "class", "content svelte-3einir"), a(G, "id", "yetTask"), a(b, "class", "contents svelte-3einir"), a(i, "class", "svelte-3einir");
      },
      m(v, O) {
        N(v, t, O), N(v, o, O), N(v, i, O), d(i, n), d(n, s), d(s, r), d(s, l), d(s, u), d(s, c), d(s, f), d(i, p), d(i, b), d(b, m), d(m, y), d(m, T), d(m, g), d(g, C), d(g, _), d(g, x), d(g, H), d(H, j), d(j, B), d(j, tt), d(j, U), d(U, ut), d(U, dt), d(H, $t), d(H, M), d(M, et), d(M, ct), d(M, $), d($, q), d($, at), d(b, ft), d(b, J), d(J, vt), d(J, Jt), Q(F, J, null), d(b, Rt), d(b, G), d(G, wt), d(G, Dt), Q(R, G, null), ot = !0, Pt || (Ht = [
          k(
            r,
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
        ], Pt = !0);
      },
      p(v, [O]) {
        (!ot || O & /*todoCount*/
        2) && Z(
          ut,
          /*todoCount*/
          v[1]
        ), (!ot || O & /*successTodoCount*/
        4) && Z(
          q,
          /*successTodoCount*/
          v[2]
        );
        const Nt = {};
        !zt && O & /*todos*/
        1 && (zt = !0, Nt.todos = /*todos*/
        v[0], I(() => zt = !1)), !jt && O & /*todoCount*/
        2 && (jt = !0, Nt.todoCount = /*todoCount*/
        v[1], I(() => jt = !1)), F.$set(Nt);
        const yt = {};
        !St && O & /*todos*/
        1 && (St = !0, yt.todos = /*todos*/
        v[0], I(() => St = !1)), !Et && O & /*successTodoCount*/
        4 && (Et = !0, yt.successTodoCount = /*successTodoCount*/
        v[2], I(() => Et = !1)), !qt && O & /*todoCount*/
        2 && (qt = !0, yt.todoCount = /*todoCount*/
        v[1], I(() => qt = !1)), R.$set(yt);
      },
      i(v) {
        ot || (D(F.$$.fragment, v), D(R.$$.fragment, v), ot = !0);
      },
      o(v) {
        Y(F.$$.fragment, v), Y(R.$$.fragment, v), ot = !1;
      },
      d(v) {
        v && (E(t), E(o), E(i)), W(F), W(R), Pt = !1, V(Ht);
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
  let n = [], s = localStorage.length, r = 0, l = "";
  s == 0 ? (localStorage.setItem("success", "0"), l = localStorage.getItem("success"), s = localStorage.length, r = s - 1) : (l = localStorage.getItem("success"), s = localStorage.length, r = s - 1);
  for (let g = 0; g < s; g++)
    ["success", "todoCount"].includes(localStorage.key(g)) || n.push(JSON.parse(localStorage.getItem(localStorage.key(g))));
  const u = () => i("#profile"), c = () => i("#taskInput"), f = () => i("#yetTask");
  function p(g) {
    n = g, o(0, n);
  }
  function b(g) {
    r = g, o(1, r);
  }
  function m(g) {
    n = g, o(0, n);
  }
  function y(g) {
    l = g, o(2, l);
  }
  function T(g) {
    r = g, o(1, r);
  }
  return [
    n,
    r,
    l,
    i,
    u,
    c,
    f,
    p,
    b,
    m,
    y,
    T
  ];
}
class He extends mt {
  constructor(t) {
    super(), _t(this, t, De, Re, ht, {}, Je);
  }
}
customElements.define("my-component", bt(He, {}, [], [], !0));
export {
  He as SvelteApp
};
