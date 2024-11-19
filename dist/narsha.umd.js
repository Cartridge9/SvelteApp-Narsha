(function(q,y){typeof exports=="object"&&typeof module<"u"?y(exports):typeof define=="function"&&define.amd?define(["exports"],y):(q=typeof globalThis<"u"?globalThis:q||self,y(q.narsha={}))})(this,function(q){"use strict";var He=Object.defineProperty;var Fe=(q,y,Q)=>y in q?He(q,y,{enumerable:!0,configurable:!0,writable:!0,value:Q}):q[y]=Q;var I=(q,y,Q)=>Fe(q,typeof y!="symbol"?y+"":y,Q);function y(){}function Q(e){return e()}function Dt(){return Object.create(null)}function V(e){e.forEach(Q)}function Ht(e){return typeof e=="function"}function ct(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function se(e){return Object.keys(e).length===0}function Ft(e){return e??""}function u(e,t){e.appendChild(t)}function at(e,t,o){const i=ie(e);if(!i.getElementById(t)){const n=g("style");n.id=t,n.textContent=o,le(i,n)}}function ie(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function le(e,t){return u(e.head||e,t),t.sheet}function A(e,t,o){e.insertBefore(t,o||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function re(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function g(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function x(){return O(" ")}function de(){return O("")}function T(e,t,o,i){return e.addEventListener(t,o,i),()=>e.removeEventListener(t,o,i)}function a(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function ue(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}function ot(e,t){e.value=t??""}function Vt(e,t,o,i){e.style.setProperty(t,o,"")}function ce(e){const t={};return e.childNodes.forEach(o=>{t[o.slot||"default"]=!0}),t}let St;function ft(e){St=e}const nt=[],E=[];let st=[];const Et=[],ae=Promise.resolve();let Pt=!1;function fe(){Pt||(Pt=!0,ae.then(j))}function qt(e){st.push(e)}function L(e){Et.push(e)}const At=new Set;let it=0;function j(){if(it!==0)return;const e=St;do{try{for(;it<nt.length;){const t=nt[it];it++,ft(t),ge(t.$$)}}catch(t){throw nt.length=0,it=0,t}for(ft(null),nt.length=0,it=0;E.length;)E.pop()();for(let t=0;t<st.length;t+=1){const o=st[t];At.has(o)||(At.add(o),o())}st.length=0}while(nt.length);for(;Et.length;)Et.pop()();Pt=!1,At.clear(),ft(e)}function ge(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(qt)}}function he(e){const t=[],o=[];st.forEach(i=>e.indexOf(i)===-1?t.push(i):o.push(i)),o.forEach(i=>i()),st=t}const xt=new Set;let X;function pe(){X={r:0,c:[],p:X}}function _e(){X.r||V(X.c),X=X.p}function J(e,t){e&&e.i&&(xt.delete(e),e.i(t))}function G(e,t,o,i){if(e&&e.o){if(xt.has(e))return;xt.add(e),X.c.push(()=>{xt.delete(e),i&&(o&&e.d(1),i())}),e.o(t)}else i&&i()}function Ut(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function B(e,t,o){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=o,o(e.$$.ctx[i]))}function lt(e){e&&e.c()}function Z(e,t,o){const{fragment:i,after_update:n}=e.$$;i&&i.m(t,o),qt(()=>{const s=e.$$.on_mount.map(Q).filter(Ht);e.$$.on_destroy?e.$$.on_destroy.push(...s):V(s),e.$$.on_mount=[]}),n.forEach(qt)}function tt(e,t){const o=e.$$;o.fragment!==null&&(he(o.after_update),V(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function be(e,t){e.$$.dirty[0]===-1&&(nt.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function gt(e,t,o,i,n,s,l=null,r=[-1]){const d=St;ft(e);const c=e.$$={fragment:null,ctx:[],props:s,update:y,not_equal:n,bound:Dt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:Dt(),dirty:r,skip_bound:!1,root:t.target||d.$$.root};l&&l(c.root);let f=!1;if(c.ctx=o?o(e,t.props||{},(p,b,...m)=>{const C=m.length?m[0]:b;return c.ctx&&n(c.ctx[p],c.ctx[p]=C)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](C),f&&be(e,p)),b}):[],c.update(),f=!0,V(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const p=ue(t.target);c.fragment&&c.fragment.l(p),p.forEach(S)}else c.fragment&&c.fragment.c();t.intro&&J(e.$$.fragment),Z(e,t.target,t.anchor),j()}ft(d)}let Yt;typeof HTMLElement=="function"&&(Yt=class extends HTMLElement{constructor(t,o,i){super();I(this,"$$ctor");I(this,"$$s");I(this,"$$c");I(this,"$$cn",!1);I(this,"$$d",{});I(this,"$$r",!1);I(this,"$$p_d",{});I(this,"$$l",{});I(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=o,i&&this.attachShadow({mode:"open"})}addEventListener(t,o,i){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(o),this.$$c){const n=this.$$c.$on(t,o);this.$$l_u.set(o,n)}super.addEventListener(t,o,i)}removeEventListener(t,o,i){if(super.removeEventListener(t,o,i),this.$$c){const n=this.$$l_u.get(o);n&&(n(),this.$$l_u.delete(o))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let l;return{c:function(){l=g("slot"),s!=="default"&&a(l,"name",s)},m:function(c,f){A(c,l,f)},d:function(c){c&&S(l)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const o={},i=ce(this);for(const s of this.$$s)s in i&&(o[s]=[t(s)]);for(const s of this.attributes){const l=this.$$g_p(s.name);l in this.$$d||(this.$$d[l]=wt(l,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:o,$$scope:{ctx:[]}}});const n=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const l=wt(s,this.$$d[s],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,l)}this.$$r=!1};this.$$c.$$.after_update.push(n),n();for(const s in this.$$l)for(const l of this.$$l[s]){const r=this.$$c.$on(s,l);this.$$l_u.set(l,r)}this.$$l={}}}attributeChangedCallback(t,o,i){var n;this.$$r||(t=this.$$g_p(t),this.$$d[t]=wt(t,i,this.$$p_d,"toProp"),(n=this.$$c)==null||n.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(o=>this.$$p_d[o].attribute===t||!this.$$p_d[o].attribute&&o.toLowerCase()===t)||t}});function wt(e,t,o,i){var s;const n=(s=o[e])==null?void 0:s.type;if(t=n==="Boolean"&&typeof t!="boolean"?t!=null:t,!i||!o[e])return t;if(i==="toAttribute")switch(n){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(n){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function ht(e,t,o,i,n,s){let l=class extends Yt{constructor(){super(e,o,n),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(r=>(t[r].attribute||r).toLowerCase())}};return Object.keys(t).forEach(r=>{Object.defineProperty(l.prototype,r,{get(){return this.$$c&&r in this.$$c?this.$$c[r]:this.$$d[r]},set(d){var c;d=wt(r,d,t),this.$$d[r]=d,(c=this.$$c)==null||c.$set({[r]:d})}})}),i.forEach(r=>{Object.defineProperty(l.prototype,r,{get(){var d;return(d=this.$$c)==null?void 0:d[r]}})}),e.element=l,l}class pt{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){tt(this,1),this.$destroy=y}$on(t,o){if(!Ht(o))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(o),()=>{const n=i.indexOf(o);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const me="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(me);function $e(e){at(e,"svelte-1m9rn1b",".tag-unselected.svelte-1m9rn1b{padding:4px 6px;font-size:2rem;background-color:transparent;border-radius:4px}.tag-selected.svelte-1m9rn1b{padding:4px 6px;height:fit-content;width:fit-content;font-size:2rem;background-color:#6554AF;color:white;border-radius:4px}.radio-button.svelte-1m9rn1b{display:none}")}function ve(e){let t,o,i,n,s,l,r;return{c(){t=g("label"),o=g("input"),i=x(),n=O(e[2]),a(o,"type","radio"),a(o,"name",e[1]),a(o,"class","radio-button svelte-1m9rn1b"),a(o,"id",e[2]),a(t,"for",e[2]),a(t,"class",s=Ft(e[0]===e[2]?"tag-selected":"tag-unselected")+" svelte-1m9rn1b")},m(d,c){A(d,t,c),u(t,o),u(t,i),u(t,n),l||(r=T(o,"click",e[3]),l=!0)},p(d,[c]){c&2&&a(o,"name",d[1]),c&4&&a(o,"id",d[2]),c&4&&W(n,d[2]),c&4&&a(t,"for",d[2]),c&5&&s!==(s=Ft(d[0]===d[2]?"tag-selected":"tag-unselected")+" svelte-1m9rn1b")&&a(t,"class",s)},i:y,o:y,d(d){d&&S(t),l=!1,r()}}}function xe(e,t,o){let{todoTag:i}=t,{tagPrint:n}=t,{tag:s}=t;const l=()=>{o(0,s=n)};return e.$$set=r=>{"todoTag"in r&&o(1,i=r.todoTag),"tagPrint"in r&&o(2,n=r.tagPrint),"tag"in r&&o(0,s=r.tag)},[s,i,n,l]}class Ct extends pt{constructor(t){super(),gt(this,t,xe,ve,ct,{todoTag:1,tagPrint:2,tag:0},$e)}get todoTag(){return this.$$.ctx[1]}set todoTag(t){this.$$set({todoTag:t}),j()}get tagPrint(){return this.$$.ctx[2]}set tagPrint(t){this.$$set({tagPrint:t}),j()}get tag(){return this.$$.ctx[0]}set tag(t){this.$$set({tag:t}),j()}}ht(Ct,{todoTag:{},tagPrint:{},tag:{}},[],[],!0);function we(e){at(e,"svelte-1juw7sa",".edit-input.svelte-1juw7sa{outline:none;background-color:#fff;color:rgb(85, 85, 85);background-color:white;border:none;border-radius:1px;font-size:2rem;padding:1px 0}.todo-print.svelte-1juw7sa{display:flex;min-width:260px;flex-direction:column;justify-content:space-between;padding:6% 8%;font-size:2rem;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:12px}.todo-footer.svelte-1juw7sa{display:flex;justify-content:space-between;align-items:center}.time.svelte-1juw7sa{font-size:1.6rem}.todo-control-button.svelte-1juw7sa{padding:2px 10px;background-color:white;color:black;border:none;border-radius:2px;font-size:14px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;white-space:nowrap}.todo-control-button.svelte-1juw7sa:hover{box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22);transition:0.2s linear;white-space:nowrap}")}function Ce(e){let t,o=e[0].title+"",i,n,s,l,r,d,c,f,p,b,m,C;function z(_,k){return _[0].time?Te:ke}let h=z(e),w=h(e);return{c(){t=g("div"),i=O(o),n=x(),s=g("div"),w.c(),l=x(),r=g("div"),d=g("button"),d.textContent="수정",c=x(),f=g("button"),f.textContent="완료",p=x(),b=g("button"),b.textContent="삭제",a(d,"class","todo-control-button svelte-1juw7sa"),a(f,"class","todo-control-button svelte-1juw7sa"),a(b,"class","todo-control-button svelte-1juw7sa"),a(r,"class","todo-control"),a(s,"class","todo-footer svelte-1juw7sa"),a(t,"class","todo-print svelte-1juw7sa")},m(_,k){A(_,t,k),u(t,i),u(t,n),u(t,s),w.m(s,null),u(s,l),u(s,r),u(r,d),u(r,c),u(r,f),u(r,p),u(r,b),m||(C=[T(d,"click",e[3]),T(f,"click",e[6]),T(b,"click",e[7])],m=!0)},p(_,k){k&1&&o!==(o=_[0].title+"")&&W(i,o),h===(h=z(_))&&w?w.p(_,k):(w.d(1),w=h(_),w&&(w.c(),w.m(s,l)))},d(_){_&&S(t),w.d(),m=!1,V(C)}}}function ye(e){let t,o,i,n,s,l,r,d,c;return{c(){t=g("div"),o=g("input"),i=x(),n=g("div"),s=g("button"),s.textContent="수정 완료",l=x(),r=g("button"),r.textContent="취소",a(o,"type","text"),a(o,"class","edit-input svelte-1juw7sa"),a(s,"class","todo-control-button svelte-1juw7sa"),a(r,"class","todo-control-button svelte-1juw7sa"),a(n,"class","todo-control"),a(t,"class","todo-print svelte-1juw7sa")},m(f,p){A(f,t,p),u(t,o),ot(o,e[2]),u(t,i),u(t,n),u(n,s),u(n,l),u(n,r),d||(c=[T(o,"input",e[11]),T(o,"keydown",e[12]),T(s,"click",e[5]),T(r,"click",e[4])],d=!0)},p(f,p){p&4&&o.value!==f[2]&&ot(o,f[2])},d(f){f&&S(t),d=!1,V(c)}}}function ke(e){let t,o=e[0].tag+"",i;return{c(){t=g("span"),i=O(o),a(t,"class","time svelte-1juw7sa")},m(n,s){A(n,t,s),u(t,i)},p(n,s){s&1&&o!==(o=n[0].tag+"")&&W(i,o)},d(n){n&&S(t)}}}function Te(e){let t,o=e[0].time+"",i;return{c(){t=g("span"),i=O(o),a(t,"class","time svelte-1juw7sa")},m(n,s){A(n,t,s),u(t,i)},p(n,s){s&1&&o!==(o=n[0].time+"")&&W(i,o)},d(n){n&&S(t)}}}function je(e){let t;function o(s,l){return s[1]?ye:Ce}let i=o(e),n=i(e);return{c(){n.c(),t=de()},m(s,l){n.m(s,l),A(s,t,l)},p(s,[l]){i===(i=o(s))&&n?n.p(s,l):(n.d(1),n=i(s),n&&(n.c(),n.m(t.parentNode,t)))},i:y,o:y,d(s){s&&S(t),n.d(s)}}}function ze(e,t,o){let{todos:i}=t,{todo:n}=t,{successTodoCount:s}=t,{todoCount:l}=t,r=!1,d="";const c=()=>{o(1,r=!0),o(2,d=n.title)},f=()=>{o(1,r=!1)},p=()=>{o(0,n.title=d,n),f()},b=()=>{localStorage.removeItem("success"),localStorage.setItem("success",`${Number(s)+1}`),o(9,s=localStorage.getItem("success")),m()},m=()=>{o(8,i=i.filter(h=>h.id!=n.id)),console.log(i),o(8,i),localStorage.removeItem(`${n.id}`),o(10,l-=1)};function C(){d=this.value,o(2,d)}const z=h=>{h.key==="Enter"&&p()};return e.$$set=h=>{"todos"in h&&o(8,i=h.todos),"todo"in h&&o(0,n=h.todo),"successTodoCount"in h&&o(9,s=h.successTodoCount),"todoCount"in h&&o(10,l=h.todoCount)},[n,r,d,c,f,p,b,m,i,s,l,C,z]}class Gt extends pt{constructor(t){super(),gt(this,t,ze,je,ct,{todos:8,todo:0,successTodoCount:9,todoCount:10},we)}get todos(){return this.$$.ctx[8]}set todos(t){this.$$set({todos:t}),j()}get todo(){return this.$$.ctx[0]}set todo(t){this.$$set({todo:t}),j()}get successTodoCount(){return this.$$.ctx[9]}set successTodoCount(t){this.$$set({successTodoCount:t}),j()}get todoCount(){return this.$$.ctx[10]}set todoCount(t){this.$$set({todoCount:t}),j()}}ht(Gt,{todos:{},todo:{},successTodoCount:{},todoCount:{}},[],[],!0);function Se(e){at(e,"svelte-1i20qfz",'.todo-create-container.svelte-1i20qfz{display:flex;align-items:end;gap:16px}.todo-write.svelte-1i20qfz{display:flex;justify-content:center;width:50%;height:400px;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;color:black;outline:none;padding:1.6% 2%;font-size:2rem;resize:none}.todo-info.svelte-1i20qfz{width:50%;height:400px;display:flex;flex-direction:column;justify-content:space-between}.todo-info-selecter.svelte-1i20qfz{position:relative}.todo-date.svelte-1i20qfz{margin-top:12px}.todo-time-viewer.svelte-1i20qfz{position:absolute;font-size:2rem;top:58px;left:20px;z-index:0;color:#121212}input[type="date"].svelte-1i20qfz{position:relative;width:100%;height:48px;padding:10px;text-align:left;font-size:100%;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;background-color:transparent;color:transparent;border-radius:16px;z-index:0;user-select:none}input[type="date"].svelte-1i20qfz::-webkit-calendar-picker-indicator{position:absolute;left:-80px;top:0;width:100%;color:black;height:100%;cursor:pointer}.todo-tag-selecter.svelte-1i20qfz{display:flex;gap:12px}.todo-create-button.svelte-1i20qfz{width:100%;height:50px;font-size:2rem;background-color:#6554AF;color:white;border-radius:20px;border:none;cursor:pointer}.todo-create-button.svelte-1i20qfz:hover{background-color:#59499C}.todo-create-button.svelte-1i20qfz:active{background-color:#7566B7}')}function Ee(e){let t,o,i,n,s,l,r,d,c,f,p,b,m,C,z,h,w,_,k,U,P,R,rt,K;function _t($){e[8]($)}let bt={todoTag:"todoTag",tagPrint:"매일"};e[0]!==void 0&&(bt.tag=e[0]),r=new Ct({props:bt}),E.push(()=>B(r,"tag",_t));function yt($){e[9]($)}let D={todoTag:"todoTag",tagPrint:"매주"};e[0]!==void 0&&(D.tag=e[0]),f=new Ct({props:D}),E.push(()=>B(f,"tag",yt));function dt($){e[10]($)}let mt={todoTag:"todoTag",tagPrint:"매달"};return e[0]!==void 0&&(mt.tag=e[0]),m=new Ct({props:mt}),E.push(()=>B(m,"tag",dt)),{c(){t=g("div"),o=g("textarea"),i=x(),n=g("div"),s=g("div"),l=g("div"),lt(r.$$.fragment),c=x(),lt(f.$$.fragment),b=x(),lt(m.$$.fragment),z=x(),h=g("div"),w=O(e[1]),_=x(),k=g("input"),U=x(),P=g("button"),P.textContent="작성 완료하기",a(o,"name",""),a(o,"id",""),a(o,"class","todo-write svelte-1i20qfz"),a(o,"placeholder","할 일 등록하기"),a(l,"class","todo-tag-selecter svelte-1i20qfz"),a(h,"class","todo-time-viewer svelte-1i20qfz"),a(k,"type","date"),a(k,"class","todo-date svelte-1i20qfz"),a(s,"class","todo-info-selecter svelte-1i20qfz"),a(P,"class","todo-create-button svelte-1i20qfz"),a(n,"class","todo-info svelte-1i20qfz"),a(t,"class","todo-create-container svelte-1i20qfz")},m($,N){A($,t,N),u(t,o),ot(o,e[2]),u(t,i),u(t,n),u(n,s),u(s,l),Z(r,l,null),u(l,c),Z(f,l,null),u(l,b),Z(m,l,null),u(s,z),u(s,h),u(h,w),u(s,_),u(s,k),ot(k,e[1]),u(n,U),u(n,P),R=!0,rt||(K=[T(o,"input",e[6]),T(o,"keydown",e[7]),T(k,"input",e[11]),T(P,"click",e[3])],rt=!0)},p($,[N]){N&4&&ot(o,$[2]);const $t={};!d&&N&1&&(d=!0,$t.tag=$[0],L(()=>d=!1)),r.$set($t);const vt={};!p&&N&1&&(p=!0,vt.tag=$[0],L(()=>p=!1)),f.$set(vt);const H={};!C&&N&1&&(C=!0,H.tag=$[0],L(()=>C=!1)),m.$set(H),(!R||N&2)&&W(w,$[1]),N&2&&ot(k,$[1])},i($){R||(J(r.$$.fragment,$),J(f.$$.fragment,$),J(m.$$.fragment,$),R=!0)},o($){G(r.$$.fragment,$),G(f.$$.fragment,$),G(m.$$.fragment,$),R=!1},d($){$&&S(t),tt(r),tt(f),tt(m),rt=!1,V(K)}}}function Pe(e,t,o){let{todos:i}=t,{todoCount:n}=t,s="",l=localStorage.length,r="",d="";const c=_=>{o(0,r="")},f=_=>{_==""?_="":o(1,d="")},p=()=>{if(!s.trim()){o(2,s="");return}!r&&!d&&o(0,r="매일"),i.push({id:l,title:s,tag:r,time:d}),localStorage.setItem(`${l}`,JSON.stringify({id:l,title:s,tag:r,time:d})),o(5,n+=1),o(4,i),o(2,s=""),o(0,r=""),o(1,d=""),l+=1,console.log(i)};function b(){s=this.value,o(2,s)}const m=_=>{_.key==="Enter"&&_.isComposing==!1&&(_.preventDefault(),p())};function C(_){r=_,o(0,r)}function z(_){r=_,o(0,r)}function h(_){r=_,o(0,r)}function w(){d=this.value,o(1,d)}return e.$$set=_=>{"todos"in _&&o(4,i=_.todos),"todoCount"in _&&o(5,n=_.todoCount)},e.$$.update=()=>{e.$$.dirty&2&&c(),e.$$.dirty&1&&f(r)},[r,d,s,p,i,n,b,m,C,z,h,w]}class Kt extends pt{constructor(t){super(),gt(this,t,Pe,Ee,ct,{todos:4,todoCount:5},Se)}get todos(){return this.$$.ctx[4]}set todos(t){this.$$set({todos:t}),j()}get todoCount(){return this.$$.ctx[5]}set todoCount(t){this.$$set({todoCount:t}),j()}}ht(Kt,{todos:{},todoCount:{}},[],[],!0);function qe(e){at(e,"svelte-1lsobs2",".yet-task.svelte-1lsobs2{display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, auto));grid-auto-rows:minmax(240px, auto);gap:12px}")}function Qt(e,t,o){const i=e.slice();return i[6]=t[o],i}function Wt(e){let t,o,i,n,s;function l(f){e[3](f)}function r(f){e[4](f)}function d(f){e[5](f)}let c={todo:e[6]};return e[0]!==void 0&&(c.todos=e[0]),e[1]!==void 0&&(c.successTodoCount=e[1]),e[2]!==void 0&&(c.todoCount=e[2]),t=new Gt({props:c}),E.push(()=>B(t,"todos",l)),E.push(()=>B(t,"successTodoCount",r)),E.push(()=>B(t,"todoCount",d)),{c(){lt(t.$$.fragment)},m(f,p){Z(t,f,p),s=!0},p(f,p){const b={};p&1&&(b.todo=f[6]),!o&&p&1&&(o=!0,b.todos=f[0],L(()=>o=!1)),!i&&p&2&&(i=!0,b.successTodoCount=f[1],L(()=>i=!1)),!n&&p&4&&(n=!0,b.todoCount=f[2],L(()=>n=!1)),t.$set(b)},i(f){s||(J(t.$$.fragment,f),s=!0)},o(f){G(t.$$.fragment,f),s=!1},d(f){tt(t,f)}}}function Ae(e){let t,o,i=Ut(e[0]),n=[];for(let l=0;l<i.length;l+=1)n[l]=Wt(Qt(e,i,l));const s=l=>G(n[l],1,1,()=>{n[l]=null});return{c(){t=g("div");for(let l=0;l<n.length;l+=1)n[l].c();a(t,"class","yet-task svelte-1lsobs2")},m(l,r){A(l,t,r);for(let d=0;d<n.length;d+=1)n[d]&&n[d].m(t,null);o=!0},p(l,[r]){if(r&7){i=Ut(l[0]);let d;for(d=0;d<i.length;d+=1){const c=Qt(l,i,d);n[d]?(n[d].p(c,r),J(n[d],1)):(n[d]=Wt(c),n[d].c(),J(n[d],1),n[d].m(t,null))}for(pe(),d=i.length;d<n.length;d+=1)s(d);_e()}},i(l){if(!o){for(let r=0;r<i.length;r+=1)J(n[r]);o=!0}},o(l){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)G(n[r]);o=!1},d(l){l&&S(t),re(n,l)}}}function Oe(e,t,o){let{todos:i}=t,{successTodoCount:n}=t,{todoCount:s}=t;function l(c){i=c,o(0,i)}function r(c){n=c,o(1,n)}function d(c){s=c,o(2,s)}return e.$$set=c=>{"todos"in c&&o(0,i=c.todos),"successTodoCount"in c&&o(1,n=c.successTodoCount),"todoCount"in c&&o(2,s=c.todoCount)},[i,n,s,l,r,d]}class Xt extends pt{constructor(t){super(),gt(this,t,Oe,Ae,ct,{todos:0,successTodoCount:1,todoCount:2},qe)}get todos(){return this.$$.ctx[0]}set todos(t){this.$$set({todos:t}),j()}get successTodoCount(){return this.$$.ctx[1]}set successTodoCount(t){this.$$set({successTodoCount:t}),j()}get todoCount(){return this.$$.ctx[2]}set todoCount(t){this.$$set({todoCount:t}),j()}}ht(Xt,{todos:{},successTodoCount:{},todoCount:{}},[],[],!0);function Ne(e){at(e,"svelte-1i1xt2o","header.svelte-1i1xt2o{width:100vw;display:flex;align-items:center;position:fixed;z-index:1;height:80px;background-color:black;color:white}.header-project-name.svelte-1i1xt2o{display:flex;align-items:center;margin:0 0 0 5%;padding-top:4px;font-size:4rem;font-weight:600}.header-project-introduce.svelte-1i1xt2o{margin-left:2%;font-size:2rem;margin-bottom:1%;align-self:flex-end}main.svelte-1i1xt2o{display:flex;width:100vw;height:fit-content;background-color:none;top:80px}.contents.svelte-1i1xt2o{width:80%;height:fit-content;justify-content:stretch;position:relative;top:80px;padding:3% 2% 0 2%;color:#121212;background-color:rgb(248, 250, 252)}.content.svelte-1i1xt2o{display:flex;flex-direction:column;margin-bottom:10%;border-radius:12px}.content-header.svelte-1i1xt2o{width:fit-content;display:flex;font-size:3rem;margin-bottom:12px;padding:1% 1%}aside.svelte-1i1xt2o{display:flex;flex-direction:column;width:20%}.sidebar.svelte-1i1xt2o{position:fixed;top:80px;display:flex;flex-direction:column;width:20%;height:100%;padding:1%;background-color:#ffffff}.nav.svelte-1i1xt2o{display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem}.nav.svelte-1i1xt2o:hover{cursor:pointer;display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;font-size:2rem;transition:0.2s linear;box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22)}.svelte-1i1xt2o{box-sizing:border-box}.profile.svelte-1i1xt2o{display:flex;padding:3% 4%;flex-direction:column;font-size:3rem;background-color:#ffffff;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;font-weight:600}.profile-task-info.svelte-1i1xt2o{width:fit-content;display:flex;flex-direction:column;font-weight:400}.profile-task-head.svelte-1i1xt2o{font-size:2rem;margin-top:0.5%;font-weight:400}.profile-task-count.svelte-1i1xt2o{font-size:2rem;margin-top:0.5%;margin:0 12px;font-weight:400}")}function Ie(e){let t,o,i,n,s,l,r,d,c,f,p,b,m,C,z,h,w,_,k,U,P,R,rt,K,_t,bt,yt,D,dt,mt,$,N,$t,vt,H,kt,te,Y,Ot,Nt,ee,et,Tt,oe,F,It,Lt,Bt,ut,Mt,ne;function Be(v){e[7](v)}function Me(v){e[8](v)}let Jt={};e[0]!==void 0&&(Jt.todos=e[0]),e[1]!==void 0&&(Jt.todoCount=e[1]),Y=new Kt({props:Jt}),E.push(()=>B(Y,"todos",Be)),E.push(()=>B(Y,"todoCount",Me));function Je(v){e[9](v)}function Re(v){e[10](v)}function De(v){e[11](v)}let jt={};return e[0]!==void 0&&(jt.todos=e[0]),e[2]!==void 0&&(jt.successTodoCount=e[2]),e[1]!==void 0&&(jt.todoCount=e[1]),F=new Xt({props:jt}),E.push(()=>B(F,"todos",Je)),E.push(()=>B(F,"successTodoCount",Re)),E.push(()=>B(F,"todoCount",De)),{c(){t=g("header"),t.innerHTML='<span class="header-project-name svelte-1i1xt2o">PlanA</span> <span class="header-project-introduce svelte-1i1xt2o">Prevent PlanB</span>',o=x(),i=g("main"),n=g("aside"),s=g("div"),l=g("button"),l.textContent="프로필",r=x(),d=g("button"),d.textContent="과제 등록하기",c=x(),f=g("button"),f.textContent="미완료 과제",p=x(),b=g("div"),m=g("div"),C=g("div"),C.textContent="프로필",z=x(),h=g("div"),w=O("반가워요! 👋 "),_=g("br"),k=x(),U=g("div"),P=g("div"),R=g("div"),R.textContent="미완료 과제 :",rt=x(),K=g("div"),_t=O(e[1]),bt=O("개"),yt=x(),D=g("div"),dt=g("div"),dt.textContent="완료 과제 :",mt=x(),$=g("div"),N=O(e[2]),$t=O("개"),vt=x(),H=g("div"),kt=g("div"),kt.textContent="과제 등록하기",te=x(),lt(Y.$$.fragment),ee=x(),et=g("div"),Tt=g("div"),Tt.textContent="미완료 과제",oe=x(),lt(F.$$.fragment),a(t,"class","svelte-1i1xt2o"),a(l,"class","nav svelte-1i1xt2o"),a(d,"class","nav svelte-1i1xt2o"),a(f,"class","nav svelte-1i1xt2o"),a(s,"class","sidebar svelte-1i1xt2o"),a(n,"class","svelte-1i1xt2o"),a(C,"class","content-header svelte-1i1xt2o"),a(_,"class","svelte-1i1xt2o"),a(R,"class","profile-task-head svelte-1i1xt2o"),a(K,"class","profile-task-count svelte-1i1xt2o"),Vt(P,"display","flex"),a(P,"class","svelte-1i1xt2o"),a(dt,"class","profile-task-head svelte-1i1xt2o"),a($,"class","profile-task-count svelte-1i1xt2o"),Vt(D,"display","flex"),a(D,"class","svelte-1i1xt2o"),a(U,"class","profile-task-info svelte-1i1xt2o"),a(h,"class","profile svelte-1i1xt2o"),a(m,"class","content svelte-1i1xt2o"),a(m,"id","profile"),a(kt,"class","content-header svelte-1i1xt2o"),a(H,"class","content svelte-1i1xt2o"),a(H,"id","taskInput"),a(Tt,"class","content-header svelte-1i1xt2o"),a(et,"class","content svelte-1i1xt2o"),a(et,"id","yetTask"),a(b,"class","contents svelte-1i1xt2o"),a(i,"class","svelte-1i1xt2o")},m(v,M){A(v,t,M),A(v,o,M),A(v,i,M),u(i,n),u(n,s),u(s,l),u(s,r),u(s,d),u(s,c),u(s,f),u(i,p),u(i,b),u(b,m),u(m,C),u(m,z),u(m,h),u(h,w),u(h,_),u(h,k),u(h,U),u(U,P),u(P,R),u(P,rt),u(P,K),u(K,_t),u(K,bt),u(U,yt),u(U,D),u(D,dt),u(D,mt),u(D,$),u($,N),u($,$t),u(b,vt),u(b,H),u(H,kt),u(H,te),Z(Y,H,null),u(b,ee),u(b,et),u(et,Tt),u(et,oe),Z(F,et,null),ut=!0,Mt||(ne=[T(l,"click",e[4]),T(d,"click",e[5]),T(f,"click",e[6])],Mt=!0)},p(v,[M]){(!ut||M&2)&&W(_t,v[1]),(!ut||M&4)&&W(N,v[2]);const Rt={};!Ot&&M&1&&(Ot=!0,Rt.todos=v[0],L(()=>Ot=!1)),!Nt&&M&2&&(Nt=!0,Rt.todoCount=v[1],L(()=>Nt=!1)),Y.$set(Rt);const zt={};!It&&M&1&&(It=!0,zt.todos=v[0],L(()=>It=!1)),!Lt&&M&4&&(Lt=!0,zt.successTodoCount=v[2],L(()=>Lt=!1)),!Bt&&M&2&&(Bt=!0,zt.todoCount=v[1],L(()=>Bt=!1)),F.$set(zt)},i(v){ut||(J(Y.$$.fragment,v),J(F.$$.fragment,v),ut=!0)},o(v){G(Y.$$.fragment,v),G(F.$$.fragment,v),ut=!1},d(v){v&&(S(t),S(o),S(i)),tt(Y),tt(F),Mt=!1,V(ne)}}}function Le(e,t,o){const i=h=>{console.log("scroll");let w=document.querySelector(`#${h}`).offsetTop;window.scrollTo({top:w-50,behavior:"smooth"})};let n=[],s=localStorage.length,l=0,r="";s==0?(localStorage.setItem("success","0"),r=localStorage.getItem("success"),s=localStorage.length,l=s-1):(r=localStorage.getItem("success"),s=localStorage.length,l=s-1);for(let h=0;h<s;h++)["success","todoCount"].includes(localStorage.key(h))||n.push(JSON.parse(localStorage.getItem(localStorage.key(h))));const d=()=>i("#profile"),c=()=>i("#taskInput"),f=()=>i("#yetTask");function p(h){n=h,o(0,n)}function b(h){l=h,o(1,l)}function m(h){n=h,o(0,n)}function C(h){r=h,o(2,r)}function z(h){l=h,o(1,l)}return[n,l,r,i,d,c,f,p,b,m,C,z]}class Zt extends pt{constructor(t){super(),gt(this,t,Le,Ie,ct,{},Ne)}}customElements.define("my-component",ht(Zt,{},[],[],!0)),q.SvelteApp=Zt,Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});
