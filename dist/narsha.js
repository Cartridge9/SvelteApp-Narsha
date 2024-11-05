var Rt = Object.defineProperty;
var It = (e, t, n) => t in e ? Rt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var x = (e, t, n) => It(e, typeof t != "symbol" ? t + "" : t, n);
function P() {
}
function Pt(e) {
  return e();
}
function Tt() {
  return /* @__PURE__ */ Object.create(null);
}
function z(e) {
  e.forEach(Pt);
}
function zt(e) {
  return typeof e == "function";
}
function st(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Ft(e) {
  return Object.keys(e).length === 0;
}
function Et(e) {
  return e ?? "";
}
function a(e, t) {
  e.appendChild(t);
}
function it(e, t, n) {
  const o = Jt(e);
  if (!o.getElementById(t)) {
    const r = g("style");
    r.id = t, r.textContent = n, Vt(o, r);
  }
}
function Jt(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Vt(e, t) {
  return a(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function A(e, t, n) {
  e.insertBefore(t, n || null);
}
function T(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Kt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function g(e) {
  return document.createElement(e);
}
function Y(e) {
  return document.createTextNode(e);
}
function w() {
  return Y(" ");
}
function Ot() {
  return Y("");
}
function E(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function u(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ut(e) {
  return Array.from(e.childNodes);
}
function gt(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function I(e, t) {
  e.value = t ?? "";
}
function qt(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let $t;
function W(e) {
  $t = e;
}
const R = [], F = [];
let J = [];
const ut = [], Gt = /* @__PURE__ */ Promise.resolve();
let ht = !1;
function Qt() {
  ht || (ht = !0, Gt.then(B));
}
function pt(e) {
  J.push(e);
}
function Z(e) {
  ut.push(e);
}
const at = /* @__PURE__ */ new Set();
let H = 0;
function B() {
  if (H !== 0)
    return;
  const e = $t;
  do {
    try {
      for (; H < R.length; ) {
        const t = R[H];
        H++, W(t), Wt(t.$$);
      }
    } catch (t) {
      throw R.length = 0, H = 0, t;
    }
    for (W(null), R.length = 0, H = 0; F.length; ) F.pop()();
    for (let t = 0; t < J.length; t += 1) {
      const n = J[t];
      at.has(n) || (at.add(n), n());
    }
    J.length = 0;
  } while (R.length);
  for (; ut.length; )
    ut.pop()();
  ht = !1, at.clear(), W(e);
}
function Wt(e) {
  if (e.fragment !== null) {
    e.update(), z(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(pt);
  }
}
function Xt(e) {
  const t = [], n = [];
  J.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), J = t;
}
const tt = /* @__PURE__ */ new Set();
let S;
function Yt() {
  S = {
    r: 0,
    c: [],
    p: S
    // parent group
  };
}
function Zt() {
  S.r || z(S.c), S = S.p;
}
function C(e, t) {
  e && e.i && (tt.delete(e), e.i(t));
}
function D(e, t, n, o) {
  if (e && e.o) {
    if (tt.has(e)) return;
    tt.add(e), S.c.push(() => {
      tt.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else o && o();
}
function At(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function et(e, t, n) {
  const o = e.$$.props[t];
  o !== void 0 && (e.$$.bound[o] = n, n(e.$$.ctx[o]));
}
function X(e) {
  e && e.c();
}
function V(e, t, n) {
  const { fragment: o, after_update: r } = e.$$;
  o && o.m(t, n), pt(() => {
    const s = e.$$.on_mount.map(Pt).filter(zt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : z(s), e.$$.on_mount = [];
  }), r.forEach(pt);
}
function K(e, t) {
  const n = e.$$;
  n.fragment !== null && (Xt(n.after_update), z(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function te(e, t) {
  e.$$.dirty[0] === -1 && (R.push(e), Qt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function rt(e, t, n, o, r, s, i = null, l = [-1]) {
  const c = $t;
  W(e);
  const d = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: P,
    not_equal: r,
    bound: Tt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Tt(),
    dirty: l,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  i && i(d.root);
  let h = !1;
  if (d.ctx = n ? n(e, t.props || {}, (p, _, ...$) => {
    const y = $.length ? $[0] : _;
    return d.ctx && r(d.ctx[p], d.ctx[p] = y) && (!d.skip_bound && d.bound[p] && d.bound[p](y), h && te(e, p)), _;
  }) : [], d.update(), h = !0, z(d.before_update), d.fragment = o ? o(d.ctx) : !1, t.target) {
    if (t.hydrate) {
      const p = Ut(t.target);
      d.fragment && d.fragment.l(p), p.forEach(T);
    } else
      d.fragment && d.fragment.c();
    t.intro && C(e.$$.fragment), V(e, t.target, t.anchor), B();
  }
  W(c);
}
let Nt;
typeof HTMLElement == "function" && (Nt = class extends HTMLElement {
  constructor(t, n, o) {
    super();
    /** The Svelte component constructor */
    x(this, "$$ctor");
    /** Slots */
    x(this, "$$s");
    /** The Svelte component instance */
    x(this, "$$c");
    /** Whether or not the custom element is connected */
    x(this, "$$cn", !1);
    /** Component props data */
    x(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    x(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    x(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    x(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    x(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, o && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, o) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, o);
  }
  removeEventListener(t, n, o) {
    if (super.removeEventListener(t, n, o), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let i;
          return {
            c: function() {
              i = g("slot"), s !== "default" && u(i, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(d, h) {
              A(d, i, h);
            },
            d: function(d) {
              d && T(i);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, o = qt(this);
      for (const s of this.$$s)
        s in o && (n[s] = [t(s)]);
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = nt(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const r = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const i = nt(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, i);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const l = this.$$c.$on(s, i);
          this.$$l_u.set(i, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, o) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = nt(t, o, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function nt(e, t, n, o) {
  var s;
  const r = (s = n[e]) == null ? void 0 : s.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !n[e])
    return t;
  if (o === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function lt(e, t, n, o, r, s) {
  let i = class extends Nt {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((l) => {
    Object.defineProperty(i.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(c) {
        var d;
        c = nt(l, c, t), this.$$d[l] = c, (d = this.$$c) == null || d.$set({ [l]: c });
      }
    });
  }), o.forEach((l) => {
    Object.defineProperty(i.prototype, l, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[l];
      }
    });
  }), e.element = /** @type {any} */
  i, i;
}
class dt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    x(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    x(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    K(this, 1), this.$destroy = P;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!zt(n))
      return P;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const r = o.indexOf(n);
      r !== -1 && o.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Ft(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ee = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ee);
function ne(e) {
  it(e, "svelte-199dss0", ".edit-input.svelte-199dss0{outline:none;background-color:#fff;color:black;background-color:white;border:2px solid #dadada;border-radius:1px}.todo-print.svelte-199dss0{display:flex;width:fit-content;min-width:100px;flex-direction:column;background-color:white;border:2px solid #dadada}");
}
function oe(e) {
  let t, n = (
    /*todo*/
    e[0].title + ""
  ), o, r, s, i, l, c, d, h;
  return {
    c() {
      t = g("div"), o = Y(n), r = w(), s = g("div"), i = g("button"), i.textContent = "Edit", l = w(), c = g("button"), c.textContent = "Delete", u(s, "class", "todo-control"), u(t, "class", "todo-print svelte-199dss0");
    },
    m(p, _) {
      A(p, t, _), a(t, o), a(t, r), a(t, s), a(s, i), a(s, l), a(s, c), d || (h = [
        E(
          i,
          "click",
          /*onEdit*/
          e[3]
        ),
        E(
          c,
          "click",
          /*deleteTodo*/
          e[6]
        )
      ], d = !0);
    },
    p(p, _) {
      _ & /*todo*/
      1 && n !== (n = /*todo*/
      p[0].title + "") && gt(o, n);
    },
    d(p) {
      p && T(t), d = !1, z(h);
    }
  };
}
function se(e) {
  let t, n, o, r, s, i, l, c, d;
  return {
    c() {
      t = g("div"), n = g("input"), o = w(), r = g("div"), s = g("button"), s.textContent = "OK", i = w(), l = g("button"), l.textContent = "Cancel", u(n, "type", "text"), u(n, "class", "edit-input svelte-199dss0"), u(r, "class", "todo-control");
    },
    m(h, p) {
      A(h, t, p), a(t, n), I(
        n,
        /*title*/
        e[2]
      ), a(t, o), a(t, r), a(r, s), a(r, i), a(r, l), c || (d = [
        E(
          n,
          "input",
          /*input_input_handler*/
          e[8]
        ),
        E(
          n,
          "keydown",
          /*keydown_handler*/
          e[9]
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
      ], c = !0);
    },
    p(h, p) {
      p & /*title*/
      4 && n.value !== /*title*/
      h[2] && I(
        n,
        /*title*/
        h[2]
      );
    },
    d(h) {
      h && T(t), c = !1, z(d);
    }
  };
}
function ie(e) {
  let t;
  function n(s, i) {
    return (
      /*isEdit*/
      s[1] ? se : oe
    );
  }
  let o = n(e), r = o(e);
  return {
    c() {
      r.c(), t = Ot();
    },
    m(s, i) {
      r.m(s, i), A(s, t, i);
    },
    p(s, [i]) {
      o === (o = n(s)) && r ? r.p(s, i) : (r.d(1), r = o(s), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: P,
    o: P,
    d(s) {
      s && T(t), r.d(s);
    }
  };
}
function re(e, t, n) {
  let { todos: o } = t, { todo: r } = t, s = !1, i = "";
  const l = () => {
    n(1, s = !0), n(2, i = r.title);
  }, c = () => {
    n(1, s = !1);
  }, d = () => {
    n(0, r.title = i, r), c();
  }, h = () => {
    n(7, o = o.filter(($) => $.id != r.id)), console.log(o), n(7, o);
  };
  function p() {
    i = this.value, n(2, i);
  }
  const _ = ($) => {
    $.key === "Enter" && d();
  };
  return e.$$set = ($) => {
    "todos" in $ && n(7, o = $.todos), "todo" in $ && n(0, r = $.todo);
  }, [
    r,
    s,
    i,
    l,
    c,
    d,
    h,
    o,
    p,
    _
  ];
}
class Lt extends dt {
  constructor(t) {
    super(), rt(this, t, re, ie, st, { todos: 7, todo: 0 }, ne);
  }
  get todos() {
    return this.$$.ctx[7];
  }
  set todos(t) {
    this.$$set({ todos: t }), B();
  }
  get todo() {
    return this.$$.ctx[0];
  }
  set todo(t) {
    this.$$set({ todo: t }), B();
  }
}
lt(Lt, { todos: {}, todo: {} }, [], [], !0);
function le(e) {
  it(e, "svelte-1okpxi7", ".tag-unselected.svelte-1okpxi7{padding:4px 6px;font-size:2rem;background-color:white;border-radius:4px}.tag-selected.svelte-1okpxi7{padding:4px 6px;font-size:2rem;background-color:#6554AF;color:white;border-radius:4px}.radio-button.svelte-1okpxi7{display:none}");
}
function de(e) {
  let t, n, o, r, s, i, l;
  return {
    c() {
      t = g("label"), n = g("input"), o = w(), r = Y(
        /*tagPrint*/
        e[2]
      ), u(n, "type", "radio"), u(
        n,
        "name",
        /*todoTag*/
        e[1]
      ), u(n, "class", "radio-button svelte-1okpxi7"), u(
        n,
        "id",
        /*tagPrint*/
        e[2]
      ), u(
        t,
        "for",
        /*tagPrint*/
        e[2]
      ), u(t, "class", s = Et(
        /*tag*/
        e[0] === /*tagPrint*/
        e[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1okpxi7");
    },
    m(c, d) {
      A(c, t, d), a(t, n), a(t, o), a(t, r), i || (l = E(
        n,
        "click",
        /*tagToggle*/
        e[3]
      ), i = !0);
    },
    p(c, [d]) {
      d & /*todoTag*/
      2 && u(
        n,
        "name",
        /*todoTag*/
        c[1]
      ), d & /*tagPrint*/
      4 && u(
        n,
        "id",
        /*tagPrint*/
        c[2]
      ), d & /*tagPrint*/
      4 && gt(
        r,
        /*tagPrint*/
        c[2]
      ), d & /*tagPrint*/
      4 && u(
        t,
        "for",
        /*tagPrint*/
        c[2]
      ), d & /*tag, tagPrint*/
      5 && s !== (s = Et(
        /*tag*/
        c[0] === /*tagPrint*/
        c[2] ? "tag-selected" : "tag-unselected"
      ) + " svelte-1okpxi7") && u(t, "class", s);
    },
    i: P,
    o: P,
    d(c) {
      c && T(t), i = !1, l();
    }
  };
}
function ce(e, t, n) {
  let { todoTag: o } = t, { tagPrint: r } = t, { tag: s } = t;
  const i = () => {
    n(0, s = r);
  };
  return e.$$set = (l) => {
    "todoTag" in l && n(1, o = l.todoTag), "tagPrint" in l && n(2, r = l.tagPrint), "tag" in l && n(0, s = l.tag);
  }, [s, o, r, i];
}
class ot extends dt {
  constructor(t) {
    super(), rt(this, t, ce, de, st, { todoTag: 1, tagPrint: 2, tag: 0 }, le);
  }
  get todoTag() {
    return this.$$.ctx[1];
  }
  set todoTag(t) {
    this.$$set({ todoTag: t }), B();
  }
  get tagPrint() {
    return this.$$.ctx[2];
  }
  set tagPrint(t) {
    this.$$set({ tagPrint: t }), B();
  }
  get tag() {
    return this.$$.ctx[0];
  }
  set tag(t) {
    this.$$set({ tag: t }), B();
  }
}
lt(ot, { todoTag: {}, tagPrint: {}, tag: {} }, [], [], !0);
function fe(e) {
  it(e, "svelte-15mbfwt", '.todo-create-container.svelte-15mbfwt{display:flex;align-items:end;gap:16px}.todo-write.svelte-15mbfwt{display:flex;justify-content:center;width:50%;height:400px;background-color:white;border:2px solid #dadada;border-radius:20px;color:black;outline:none;padding:1% 1.4%;font-size:2rem;resize:none}.todo-info.svelte-15mbfwt{width:50%;height:400px;display:flex;flex-direction:column;justify-content:space-between}.todo-info-selecter.svelte-15mbfwt{position:relative}.todo-date.svelte-15mbfwt{margin-top:12px}.todo-time-viewer.svelte-15mbfwt{position:absolute;font-size:2rem;top:58px;left:20px;z-index:0;color:#121212}input[type="date"].svelte-15mbfwt{position:relative;width:100%;height:48px;padding:10px;text-align:left;font-size:100%;border:2px solid #dadada;background-color:transparent;color:transparent;border-radius:16px;z-index:0;user-select:none}input[type="date"].svelte-15mbfwt::-webkit-calendar-picker-indicator{position:absolute;left:-80px;top:0;width:100%;color:black;height:100%;cursor:pointer}.todo-tag-selecter.svelte-15mbfwt{display:flex;gap:12px}.todo-create-button.svelte-15mbfwt{width:100%;height:50px;font-size:2rem;background-color:#6554AF;border-radius:20px;border:none;cursor:pointer}.todo-create-button.svelte-15mbfwt:hover{background-color:#59499C}.todo-create-button.svelte-15mbfwt:active{background-color:#7566B7}');
}
function Ct(e, t, n) {
  const o = e.slice();
  return o[15] = t[n], o;
}
function jt(e) {
  let t, n, o;
  function r(i) {
    e[11](i);
  }
  let s = { todo: (
    /*todo*/
    e[15]
  ) };
  return (
    /*todos*/
    e[3] !== void 0 && (s.todos = /*todos*/
    e[3]), t = new Lt({ props: s }), F.push(() => et(t, "todos", r)), {
      c() {
        X(t.$$.fragment);
      },
      m(i, l) {
        V(t, i, l), o = !0;
      },
      p(i, l) {
        const c = {};
        l & /*todos*/
        8 && (c.todo = /*todo*/
        i[15]), !n && l & /*todos*/
        8 && (n = !0, c.todos = /*todos*/
        i[3], Z(() => n = !1)), t.$set(c);
      },
      i(i) {
        o || (C(t.$$.fragment, i), o = !0);
      },
      o(i) {
        D(t.$$.fragment, i), o = !1;
      },
      d(i) {
        K(t, i);
      }
    }
  );
}
function ae(e) {
  let t, n, o, r, s, i, l, c, d, h, p, _, $, y, j, M, U, v, O, bt, q, ct, G, Q, ft, mt;
  function St(f) {
    e[7](f);
  }
  let _t = { todoTag: "todoTag", tagPrint: "매일" };
  /*tag*/
  e[0] !== void 0 && (_t.tag = /*tag*/
  e[0]), l = new ot({ props: _t }), F.push(() => et(l, "tag", St));
  function Bt(f) {
    e[8](f);
  }
  let yt = { todoTag: "todoTag", tagPrint: "매주" };
  /*tag*/
  e[0] !== void 0 && (yt.tag = /*tag*/
  e[0]), h = new ot({ props: yt }), F.push(() => et(h, "tag", Bt));
  function Mt(f) {
    e[9](f);
  }
  let vt = { todoTag: "todoTag", tagPrint: "매달" };
  /*tag*/
  e[0] !== void 0 && (vt.tag = /*tag*/
  e[0]), $ = new ot({ props: vt }), F.push(() => et($, "tag", Mt));
  let N = At(
    /*todos*/
    e[3]
  ), b = [];
  for (let f = 0; f < N.length; f += 1)
    b[f] = jt(Ct(e, N, f));
  const Ht = (f) => D(b[f], 1, 1, () => {
    b[f] = null;
  });
  return {
    c() {
      t = g("div"), n = g("textarea"), o = w(), r = g("div"), s = g("div"), i = g("div"), X(l.$$.fragment), d = w(), X(h.$$.fragment), _ = w(), X($.$$.fragment), j = w(), M = g("div"), U = Y(
        /*time*/
        e[1]
      ), v = w(), O = g("input"), bt = w(), q = g("button"), q.textContent = "작성 완료하기", ct = w();
      for (let f = 0; f < b.length; f += 1)
        b[f].c();
      G = Ot(), u(n, "name", ""), u(n, "id", ""), u(n, "class", "todo-write svelte-15mbfwt"), u(n, "placeholder", "할 일 등록하기"), u(i, "class", "todo-tag-selecter svelte-15mbfwt"), u(M, "class", "todo-time-viewer svelte-15mbfwt"), u(O, "type", "date"), u(O, "class", "todo-date svelte-15mbfwt"), u(s, "class", "todo-info-selecter svelte-15mbfwt"), u(q, "class", "todo-create-button svelte-15mbfwt"), u(r, "class", "todo-info svelte-15mbfwt"), u(t, "class", "todo-create-container svelte-15mbfwt");
    },
    m(f, m) {
      A(f, t, m), a(t, n), I(
        n,
        /*title*/
        e[2]
      ), a(t, o), a(t, r), a(r, s), a(s, i), V(l, i, null), a(i, d), V(h, i, null), a(i, _), V($, i, null), a(s, j), a(s, M), a(M, U), a(s, v), a(s, O), I(
        O,
        /*time*/
        e[1]
      ), a(r, bt), a(r, q), A(f, ct, m);
      for (let L = 0; L < b.length; L += 1)
        b[L] && b[L].m(f, m);
      A(f, G, m), Q = !0, ft || (mt = [
        E(
          n,
          "input",
          /*textarea_input_handler*/
          e[5]
        ),
        E(
          n,
          "keydown",
          /*keydown_handler*/
          e[6]
        ),
        E(
          O,
          "input",
          /*input_input_handler*/
          e[10]
        ),
        E(
          q,
          "click",
          /*createTodo*/
          e[4]
        )
      ], ft = !0);
    },
    p(f, [m]) {
      m & /*title*/
      4 && I(
        n,
        /*title*/
        f[2]
      );
      const L = {};
      !c && m & /*tag*/
      1 && (c = !0, L.tag = /*tag*/
      f[0], Z(() => c = !1)), l.$set(L);
      const wt = {};
      !p && m & /*tag*/
      1 && (p = !0, wt.tag = /*tag*/
      f[0], Z(() => p = !1)), h.$set(wt);
      const kt = {};
      if (!y && m & /*tag*/
      1 && (y = !0, kt.tag = /*tag*/
      f[0], Z(() => y = !1)), $.$set(kt), (!Q || m & /*time*/
      2) && gt(
        U,
        /*time*/
        f[1]
      ), m & /*time*/
      2 && I(
        O,
        /*time*/
        f[1]
      ), m & /*todos*/
      8) {
        N = At(
          /*todos*/
          f[3]
        );
        let k;
        for (k = 0; k < N.length; k += 1) {
          const xt = Ct(f, N, k);
          b[k] ? (b[k].p(xt, m), C(b[k], 1)) : (b[k] = jt(xt), b[k].c(), C(b[k], 1), b[k].m(G.parentNode, G));
        }
        for (Yt(), k = N.length; k < b.length; k += 1)
          Ht(k);
        Zt();
      }
    },
    i(f) {
      if (!Q) {
        C(l.$$.fragment, f), C(h.$$.fragment, f), C($.$$.fragment, f);
        for (let m = 0; m < N.length; m += 1)
          C(b[m]);
        Q = !0;
      }
    },
    o(f) {
      D(l.$$.fragment, f), D(h.$$.fragment, f), D($.$$.fragment, f), b = b.filter(Boolean);
      for (let m = 0; m < b.length; m += 1)
        D(b[m]);
      Q = !1;
    },
    d(f) {
      f && (T(t), T(ct), T(G)), K(l), K(h), K($), Kt(b, f), ft = !1, z(mt);
    }
  };
}
function ue(e, t, n) {
  let o = "", r = [], s = 0, i = "", l = "";
  const c = (v) => {
    n(0, i = "");
  }, d = (v) => {
    v == "" ? v = "" : n(1, l = "");
  }, h = () => {
    if (!o.trim()) {
      n(2, o = "");
      return;
    }
    r.push({ id: s, title: o }), n(3, r), n(2, o = ""), s += 1;
  };
  function p() {
    o = this.value, n(2, o);
  }
  const _ = (v) => {
    v.key === "Enter" && v.isComposing == !1 && (v.preventDefault(), h());
  };
  function $(v) {
    i = v, n(0, i);
  }
  function y(v) {
    i = v, n(0, i);
  }
  function j(v) {
    i = v, n(0, i);
  }
  function M() {
    l = this.value, n(1, l);
  }
  function U(v) {
    r = v, n(3, r);
  }
  return e.$$.update = () => {
    e.$$.dirty & /*time*/
    2 && c(), e.$$.dirty & /*tag*/
    1 && d(i);
  }, [
    i,
    l,
    o,
    r,
    h,
    p,
    _,
    $,
    y,
    j,
    M,
    U
  ];
}
class Dt extends dt {
  constructor(t) {
    super(), rt(this, t, ue, ae, st, {}, fe);
  }
}
lt(Dt, {}, [], [], !0);
function he(e) {
  it(e, "svelte-kyd7wy", "header.svelte-kyd7wy{width:100vw;display:flex;position:fixed;z-index:1;height:80px;background-color:black}main.svelte-kyd7wy{display:flex;width:100vw;height:fit-content;background-color:none;top:80px}.contents.svelte-kyd7wy{width:80%;height:fit-content;justify-content:stretch;position:relative;top:80px;padding:3% 2%;color:#121212}.content.svelte-kyd7wy{display:flex;flex-direction:column;margin-bottom:10%;border-radius:12px}.content-header.svelte-kyd7wy{width:fit-content;display:flex;font-size:3rem;margin-bottom:12px;padding:1% 2.2%}aside.svelte-kyd7wy{display:flex;flex-direction:column;width:20%}.sidebar.svelte-kyd7wy{position:fixed;top:80px;display:flex;flex-direction:column;border-right:1.6px solid #DADADA;width:20%;height:100%;padding:1%;background-color:#ffffff}.nav.svelte-kyd7wy{display:flex;justify-content:start;margin-bottom:12px;padding:8% 4%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem}.nav.svelte-kyd7wy:hover{cursor:pointer;display:flex;justify-content:start;margin-bottom:12px;padding:8% 4%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem;box-shadow:0 1.8px 2.8px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0,0.22)}.svelte-kyd7wy{box-sizing:border-box}.profile.svelte-kyd7wy{display:flex;padding:3% 4%;flex-direction:column;font-size:3rem;background-color:#ffffff;border:2px solid #DADADA;border-radius:20px;font-weight:600}.profile-task-info.svelte-kyd7wy{width:fit-content;display:flex;flex-direction:column;padding:0 12px}.profile-task-head.svelte-kyd7wy{font-size:2rem;margin-top:0.5%;font-weight:400}.profile-task-count.svelte-kyd7wy{font-size:2rem;margin-top:0.5%;margin:0 12px;font-weight:400}");
}
function pe(e) {
  let t, n, o, r, s, i, l, c, d, h, p, _, $;
  return _ = new Dt({}), {
    c() {
      t = g("header"), n = w(), o = g("main"), r = g("aside"), r.innerHTML = '<div class="sidebar svelte-kyd7wy"><button class="nav svelte-kyd7wy">프로필</button> <button class="nav svelte-kyd7wy">과제 등록하기</button> <button class="nav svelte-kyd7wy">미완료 과제</button> <button class="nav svelte-kyd7wy">리워드</button></div>', s = w(), i = g("div"), l = g("div"), l.innerHTML = '<div class="content-header svelte-kyd7wy">프로필</div> <div class="profile svelte-kyd7wy">박재민 님 <br class="svelte-kyd7wy"/> <div class="profile-task-info svelte-kyd7wy"><div style="display: flex;" class="svelte-kyd7wy"><div class="profile-task-head svelte-kyd7wy">미완료 과제 :</div> <div class="profile-task-count svelte-kyd7wy">100개</div></div> <div style="display: flex;" class="svelte-kyd7wy"><div class="profile-task-head svelte-kyd7wy">완료 과제 :</div> <div class="profile-task-count svelte-kyd7wy">50개</div></div></div></div>', c = w(), d = g("div"), h = g("div"), h.textContent = "과제 등록하기", p = w(), X(_.$$.fragment), u(t, "class", "svelte-kyd7wy"), u(r, "class", "svelte-kyd7wy"), u(l, "class", "content svelte-kyd7wy"), u(h, "class", "content-header svelte-kyd7wy"), u(d, "class", "content svelte-kyd7wy"), u(i, "class", "contents svelte-kyd7wy"), u(o, "class", "svelte-kyd7wy");
    },
    m(y, j) {
      A(y, t, j), A(y, n, j), A(y, o, j), a(o, r), a(o, s), a(o, i), a(i, l), a(i, c), a(i, d), a(d, h), a(d, p), V(_, d, null), $ = !0;
    },
    p: P,
    i(y) {
      $ || (C(_.$$.fragment, y), $ = !0);
    },
    o(y) {
      D(_.$$.fragment, y), $ = !1;
    },
    d(y) {
      y && (T(t), T(n), T(o)), K(_);
    }
  };
}
class ge extends dt {
  constructor(t) {
    super(), rt(this, t, null, pe, st, {}, he);
  }
}
customElements.define("my-component", lt(ge, {}, [], [], !0));
export {
  ge as SvelteApp
};
