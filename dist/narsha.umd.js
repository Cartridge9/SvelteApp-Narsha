(function(O,x){typeof exports=="object"&&typeof module<"u"?x(exports):typeof define=="function"&&define.amd?define(["exports"],x):(O=typeof globalThis<"u"?globalThis:O||self,x(O.narsha={}))})(this,function(O){"use strict";var Fe=Object.defineProperty;var Ve=(O,x,X)=>x in O?Fe(O,x,{enumerable:!0,configurable:!0,writable:!0,value:X}):O[x]=X;var B=(O,x,X)=>Ve(O,typeof x!="symbol"?x+"":x,X);function x(){}function X(e){return e()}function Ht(){return Object.create(null)}function Y(e){e.forEach(X)}function Ft(e){return typeof e=="function"}function ct(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function se(e){return Object.keys(e).length===0}function Vt(e){return e??""}function c(e,t){e.appendChild(t)}function at(e,t,o){const i=ie(e);if(!i.getElementById(t)){const n=p("style");n.id=t,n.textContent=o,le(i,n)}}function ie(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function le(e,t){return c(e.head||e,t),t.sheet}function N(e,t,o){e.insertBefore(t,o||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function re(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function p(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function C(){return I(" ")}function ue(){return I("")}function S(e,t,o,i){return e.addEventListener(t,o,i),()=>e.removeEventListener(t,o,i)}function a(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function de(e){return Array.from(e.childNodes)}function Z(e,t){t=""+t,e.data!==t&&(e.data=t)}function nt(e,t){e.value=t??""}function Ut(e,t,o,i){e.style.setProperty(t,o,"")}function ce(e){const t={};return e.childNodes.forEach(o=>{t[o.slot||"default"]=!0}),t}let Et;function ft(e){Et=e}const st=[],z=[];let it=[];const jt=[],ae=Promise.resolve();let Pt=!1;function fe(){Pt||(Pt=!0,ae.then(j))}function At(e){it.push(e)}function M(e){jt.push(e)}const Ot=new Set;let lt=0;function j(){if(lt!==0)return;const e=Et;do{try{for(;lt<st.length;){const t=st[lt];lt++,ft(t),pe(t.$$)}}catch(t){throw st.length=0,lt=0,t}for(ft(null),st.length=0,lt=0;z.length;)z.pop()();for(let t=0;t<it.length;t+=1){const o=it[t];Ot.has(o)||(Ot.add(o),o())}it.length=0}while(st.length);for(;jt.length;)jt.pop()();Pt=!1,Ot.clear(),ft(e)}function pe(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(At)}}function he(e){const t=[],o=[];it.forEach(i=>e.indexOf(i)===-1?t.push(i):o.push(i)),o.forEach(i=>i()),it=t}const wt=new Set;let tt;function ge(){tt={r:0,c:[],p:tt}}function _e(){tt.r||Y(tt.c),tt=tt.p}function F(e,t){e&&e.i&&(wt.delete(e),e.i(t))}function G(e,t,o,i){if(e&&e.o){if(wt.has(e))return;wt.add(e),tt.c.push(()=>{wt.delete(e),i&&(o&&e.d(1),i())}),e.o(t)}else i&&i()}function Yt(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function R(e,t,o){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=o,o(e.$$.ctx[i]))}function rt(e){e&&e.c()}function et(e,t,o){const{fragment:i,after_update:n}=e.$$;i&&i.m(t,o),At(()=>{const s=e.$$.on_mount.map(X).filter(Ft);e.$$.on_destroy?e.$$.on_destroy.push(...s):Y(s),e.$$.on_mount=[]}),n.forEach(At)}function ot(e,t){const o=e.$$;o.fragment!==null&&(he(o.after_update),Y(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function be(e,t){e.$$.dirty[0]===-1&&(st.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pt(e,t,o,i,n,s,r=null,l=[-1]){const u=Et;ft(e);const d=e.$$={fragment:null,ctx:[],props:s,update:x,not_equal:n,bound:Ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Ht(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};r&&r(d.root);let f=!1;if(d.ctx=o?o(e,t.props||{},(g,m,...$)=>{const k=$.length?$[0]:m;return d.ctx&&n(d.ctx[g],d.ctx[g]=k)&&(!d.skip_bound&&d.bound[g]&&d.bound[g](k),f&&be(e,g)),m}):[],d.update(),f=!0,Y(d.before_update),d.fragment=i?i(d.ctx):!1,t.target){if(t.hydrate){const g=de(t.target);d.fragment&&d.fragment.l(g),g.forEach(A)}else d.fragment&&d.fragment.c();t.intro&&F(e.$$.fragment),et(e,t.target,t.anchor),j()}ft(u)}let qt;typeof HTMLElement=="function"&&(qt=class extends HTMLElement{constructor(t,o,i){super();B(this,"$$ctor");B(this,"$$s");B(this,"$$c");B(this,"$$cn",!1);B(this,"$$d",{});B(this,"$$r",!1);B(this,"$$p_d",{});B(this,"$$l",{});B(this,"$$l_u",new Map);this.$$ctor=t,this.$$s=o,i&&this.attachShadow({mode:"open"})}addEventListener(t,o,i){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(o),this.$$c){const n=this.$$c.$on(t,o);this.$$l_u.set(o,n)}super.addEventListener(t,o,i)}removeEventListener(t,o,i){if(super.removeEventListener(t,o,i),this.$$c){const n=this.$$l_u.get(o);n&&(n(),this.$$l_u.delete(o))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let r;return{c:function(){r=p("slot"),s!=="default"&&a(r,"name",s)},m:function(d,f){N(d,r,f)},d:function(d){d&&A(r)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const o={},i=ce(this);for(const s of this.$$s)s in i&&(o[s]=[t(s)]);for(const s of this.attributes){const r=this.$$g_p(s.name);r in this.$$d||(this.$$d[r]=Ct(r,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:o,$$scope:{ctx:[]}}});const n=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const r=Ct(s,this.$$d[s],this.$$p_d,"toAttribute");r==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,r)}this.$$r=!1};this.$$c.$$.after_update.push(n),n();for(const s in this.$$l)for(const r of this.$$l[s]){const l=this.$$c.$on(s,r);this.$$l_u.set(r,l)}this.$$l={}}}attributeChangedCallback(t,o,i){var n;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Ct(t,i,this.$$p_d,"toProp"),(n=this.$$c)==null||n.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(o=>this.$$p_d[o].attribute===t||!this.$$p_d[o].attribute&&o.toLowerCase()===t)||t}});function Ct(e,t,o,i){var s;const n=(s=o[e])==null?void 0:s.type;if(t=n==="Boolean"&&typeof t!="boolean"?t!=null:t,!i||!o[e])return t;if(i==="toAttribute")switch(n){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(n){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function ht(e,t,o,i,n,s){let r=class extends qt{constructor(){super(e,o,n),this.$$p_d=t}static get observedAttributes(){return Object.keys(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Object.keys(t).forEach(l=>{Object.defineProperty(r.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(u){var d;u=Ct(l,u,t),this.$$d[l]=u,(d=this.$$c)==null||d.$set({[l]:u})}})}),i.forEach(l=>{Object.defineProperty(r.prototype,l,{get(){var u;return(u=this.$$c)==null?void 0:u[l]}})}),e.element=r,r}class gt{constructor(){B(this,"$$");B(this,"$$set")}$destroy(){ot(this,1),this.$destroy=x}$on(t,o){if(!Ft(o))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(o),()=>{const n=i.indexOf(o);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const me="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(me);function $e(e){at(e,"svelte-1m9rn1b",".tag-unselected.svelte-1m9rn1b{padding:4px 6px;font-size:2rem;background-color:transparent;border-radius:4px}.tag-selected.svelte-1m9rn1b{padding:4px 6px;height:fit-content;width:fit-content;font-size:2rem;background-color:#6554AF;color:white;border-radius:4px}.radio-button.svelte-1m9rn1b{display:none}")}function ve(e){let t,o,i,n,s,r,l;return{c(){t=p("label"),o=p("input"),i=C(),n=I(e[2]),a(o,"type","radio"),a(o,"name",e[1]),a(o,"class","radio-button svelte-1m9rn1b"),a(o,"id",e[2]),a(t,"for",e[2]),a(t,"class",s=Vt(e[0]===e[2]?"tag-selected":"tag-unselected")+" svelte-1m9rn1b")},m(u,d){N(u,t,d),c(t,o),c(t,i),c(t,n),r||(l=S(o,"click",e[3]),r=!0)},p(u,[d]){d&2&&a(o,"name",u[1]),d&4&&a(o,"id",u[2]),d&4&&Z(n,u[2]),d&4&&a(t,"for",u[2]),d&5&&s!==(s=Vt(u[0]===u[2]?"tag-selected":"tag-unselected")+" svelte-1m9rn1b")&&a(t,"class",s)},i:x,o:x,d(u){u&&A(t),r=!1,l()}}}function we(e,t,o){let{todoTag:i}=t,{tagPrint:n}=t,{tag:s}=t;const r=()=>{o(0,s=n)};return e.$$set=l=>{"todoTag"in l&&o(1,i=l.todoTag),"tagPrint"in l&&o(2,n=l.tagPrint),"tag"in l&&o(0,s=l.tag)},[s,i,n,r]}class yt extends gt{constructor(t){super(),pt(this,t,we,ve,ct,{todoTag:1,tagPrint:2,tag:0},$e)}get todoTag(){return this.$$.ctx[1]}set todoTag(t){this.$$set({todoTag:t}),j()}get tagPrint(){return this.$$.ctx[2]}set tagPrint(t){this.$$set({tagPrint:t}),j()}get tag(){return this.$$.ctx[0]}set tag(t){this.$$set({tag:t}),j()}}ht(yt,{todoTag:{},tagPrint:{},tag:{}},[],[],!0);function Ce(e){at(e,"svelte-1i5n05w",".edit-input.svelte-1i5n05w{outline:none;background-color:#fff;color:rgb(85, 85, 85);background-color:white;border:none;border-radius:1px;font-size:2rem;padding:1px 0}.todo-print.svelte-1i5n05w{display:flex;flex-direction:column;justify-content:space-between;padding:6% 8%;font-size:2rem;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:12px}.todo-footer.svelte-1i5n05w{display:flex;flex-direction:column;align-items:start;gap:4px}.time.svelte-1i5n05w{font-size:1.6rem}.todo-control-button.svelte-1i5n05w{padding:2px 10px;background-color:white;color:black;border:none;border-radius:2px;font-size:14px;box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;white-space:nowrap}.todo-control-button.svelte-1i5n05w:hover{box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22);transition:0.2s linear;white-space:nowrap}")}function ye(e){let t,o=e[0].title+"",i,n,s,r,l,u,d,f,g,m,$,k;function P(h,T){return h[0].time?Te:xe}let b=P(e),y=b(e);return{c(){t=p("div"),i=I(o),n=C(),s=p("div"),y.c(),r=C(),l=p("div"),u=p("button"),u.textContent="수정",d=C(),f=p("button"),f.textContent="완료",g=C(),m=p("button"),m.textContent="삭제",a(u,"class","todo-control-button svelte-1i5n05w"),a(f,"class","todo-control-button svelte-1i5n05w"),a(m,"class","todo-control-button svelte-1i5n05w"),a(l,"class","todo-control"),a(s,"class","todo-footer svelte-1i5n05w"),a(t,"class","todo-print svelte-1i5n05w")},m(h,T){N(h,t,T),c(t,i),c(t,n),c(t,s),y.m(s,null),c(s,r),c(s,l),c(l,u),c(l,d),c(l,f),c(l,g),c(l,m),$||(k=[S(u,"click",e[3]),S(f,"click",e[6]),S(m,"click",e[7])],$=!0)},p(h,T){T&1&&o!==(o=h[0].title+"")&&Z(i,o),b===(b=P(h))&&y?y.p(h,T):(y.d(1),y=b(h),y&&(y.c(),y.m(s,r)))},d(h){h&&A(t),y.d(),$=!1,Y(k)}}}function ke(e){let t,o,i,n,s,r,l,u,d;return{c(){t=p("div"),o=p("input"),i=C(),n=p("div"),s=p("button"),s.textContent="수정 완료",r=C(),l=p("button"),l.textContent="취소",a(o,"type","text"),a(o,"class","edit-input svelte-1i5n05w"),a(s,"class","todo-control-button svelte-1i5n05w"),a(l,"class","todo-control-button svelte-1i5n05w"),a(n,"class","todo-control"),a(t,"class","todo-print svelte-1i5n05w")},m(f,g){N(f,t,g),c(t,o),nt(o,e[2]),c(t,i),c(t,n),c(n,s),c(n,r),c(n,l),u||(d=[S(o,"input",e[11]),S(o,"keydown",e[12]),S(s,"click",e[5]),S(l,"click",e[4])],u=!0)},p(f,g){g&4&&o.value!==f[2]&&nt(o,f[2])},d(f){f&&A(t),u=!1,Y(d)}}}function xe(e){let t,o=e[0].tag+"",i;return{c(){t=p("span"),i=I(o),a(t,"class","time svelte-1i5n05w")},m(n,s){N(n,t,s),c(t,i)},p(n,s){s&1&&o!==(o=n[0].tag+"")&&Z(i,o)},d(n){n&&A(t)}}}function Te(e){let t,o=e[0].time+"",i;return{c(){t=p("span"),i=I(o),a(t,"class","time svelte-1i5n05w")},m(n,s){N(n,t,s),c(t,i)},p(n,s){s&1&&o!==(o=n[0].time+"")&&Z(i,o)},d(n){n&&A(t)}}}function ze(e){let t;function o(s,r){return s[1]?ke:ye}let i=o(e),n=i(e);return{c(){n.c(),t=ue()},m(s,r){n.m(s,r),N(s,t,r)},p(s,[r]){i===(i=o(s))&&n?n.p(s,r):(n.d(1),n=i(s),n&&(n.c(),n.m(t.parentNode,t)))},i:x,o:x,d(s){s&&A(t),n.d(s)}}}function Se(e,t,o){let{todos:i}=t,{todo:n}=t,{successTodoCount:s}=t,{todoCount:r}=t,l=!1,u="";const d=()=>{o(1,l=!0),o(2,u=n.title)},f=()=>{o(1,l=!1)},g=()=>{o(0,n.title=u,n),f()},m=()=>{localStorage.removeItem("success"),localStorage.setItem("success",`${Number(s)+1}`),o(9,s=localStorage.getItem("success")),$()},$=()=>{o(8,i=i.filter(b=>b.id!=n.id)),console.log(i),o(8,i),localStorage.removeItem(`${n.id}`),o(10,r-=1)};function k(){u=this.value,o(2,u)}const P=b=>{b.key==="Enter"&&g()};return e.$$set=b=>{"todos"in b&&o(8,i=b.todos),"todo"in b&&o(0,n=b.todo),"successTodoCount"in b&&o(9,s=b.successTodoCount),"todoCount"in b&&o(10,r=b.todoCount)},[n,l,u,d,f,g,m,$,i,s,r,k,P]}class Gt extends gt{constructor(t){super(),pt(this,t,Se,ze,ct,{todos:8,todo:0,successTodoCount:9,todoCount:10},Ce)}get todos(){return this.$$.ctx[8]}set todos(t){this.$$set({todos:t}),j()}get todo(){return this.$$.ctx[0]}set todo(t){this.$$set({todo:t}),j()}get successTodoCount(){return this.$$.ctx[9]}set successTodoCount(t){this.$$set({successTodoCount:t}),j()}get todoCount(){return this.$$.ctx[10]}set todoCount(t){this.$$set({todoCount:t}),j()}}ht(Gt,{todos:{},todo:{},successTodoCount:{},todoCount:{}},[],[],!0);function Ee(e){at(e,"svelte-1dz26oo",'.todo-create-container.svelte-1dz26oo{display:flex;align-items:end;gap:16px}.todo-write.svelte-1dz26oo{display:flex;justify-content:center;width:50%;height:400px;background-color:white;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;color:black;outline:none;padding:1.6% 2%;font-size:2rem;resize:none}.todo-info.svelte-1dz26oo{width:50%;height:400px;display:flex;flex-direction:column;justify-content:space-between}.todo-info-selecter.svelte-1dz26oo{position:relative}.todo-date.svelte-1dz26oo{margin-top:12px}.todo-time-viewer.svelte-1dz26oo{position:absolute;font-size:2rem;top:58px;left:20px;z-index:0;color:#121212}input[type="date"].svelte-1dz26oo{position:relative;width:95%;height:48px;padding:10px;text-align:left;font-size:100%;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;background-color:transparent;color:transparent;border-radius:16px;z-index:0;user-select:none}input[type="date"].svelte-1dz26oo::-webkit-calendar-picker-indicator{position:absolute;left:-80px;top:0;width:100%;color:black;height:100%;cursor:pointer}.todo-tag-selecter.svelte-1dz26oo{display:flex;gap:12px}.todo-create-button.svelte-1dz26oo{width:100%;height:50px;font-size:2rem;background-color:#6554AF;color:white;border-radius:20px;border:none;cursor:pointer}.todo-create-button.svelte-1dz26oo:hover{background-color:#59499C}.todo-create-button.svelte-1dz26oo:active{background-color:#7566B7}')}function je(e){let t,o,i,n,s,r,l,u,d,f,g,m,$,k,P,b,y,h,T,J,E,_,K,Q;function _t(v){e[8](v)}let bt={todoTag:"todoTag",tagPrint:"매일"};e[0]!==void 0&&(bt.tag=e[0]),l=new yt({props:bt}),z.push(()=>R(l,"tag",_t));function kt(v){e[9](v)}let V={todoTag:"todoTag",tagPrint:"매주"};e[0]!==void 0&&(V.tag=e[0]),f=new yt({props:V}),z.push(()=>R(f,"tag",kt));function ut(v){e[10](v)}let mt={todoTag:"todoTag",tagPrint:"매달"};return e[0]!==void 0&&(mt.tag=e[0]),$=new yt({props:mt}),z.push(()=>R($,"tag",ut)),{c(){t=p("div"),o=p("textarea"),i=C(),n=p("div"),s=p("div"),r=p("div"),rt(l.$$.fragment),d=C(),rt(f.$$.fragment),m=C(),rt($.$$.fragment),P=C(),b=p("div"),y=I(e[1]),h=C(),T=p("input"),J=C(),E=p("button"),E.textContent="작성 완료하기",a(o,"name",""),a(o,"id",""),a(o,"class","todo-write svelte-1dz26oo"),a(o,"placeholder","할 일 등록하기"),a(r,"class","todo-tag-selecter svelte-1dz26oo"),a(b,"class","todo-time-viewer svelte-1dz26oo"),a(T,"type","date"),a(T,"class","todo-date svelte-1dz26oo"),a(s,"class","todo-info-selecter svelte-1dz26oo"),a(E,"class","todo-create-button svelte-1dz26oo"),a(n,"class","todo-info svelte-1dz26oo"),a(t,"class","todo-create-container svelte-1dz26oo")},m(v,L){N(v,t,L),c(t,o),nt(o,e[2]),c(t,i),c(t,n),c(n,s),c(s,r),et(l,r,null),c(r,d),et(f,r,null),c(r,m),et($,r,null),c(s,P),c(s,b),c(b,y),c(s,h),c(s,T),nt(T,e[1]),c(n,J),c(n,E),_=!0,K||(Q=[S(o,"input",e[6]),S(o,"keydown",e[7]),S(T,"input",e[11]),S(E,"click",e[3])],K=!0)},p(v,[L]){L&4&&nt(o,v[2]);const $t={};!u&&L&1&&(u=!0,$t.tag=v[0],M(()=>u=!1)),l.$set($t);const vt={};!g&&L&1&&(g=!0,vt.tag=v[0],M(()=>g=!1)),f.$set(vt);const D={};!k&&L&1&&(k=!0,D.tag=v[0],M(()=>k=!1)),$.$set(D),(!_||L&2)&&Z(y,v[1]),L&2&&nt(T,v[1])},i(v){_||(F(l.$$.fragment,v),F(f.$$.fragment,v),F($.$$.fragment,v),_=!0)},o(v){G(l.$$.fragment,v),G(f.$$.fragment,v),G($.$$.fragment,v),_=!1},d(v){v&&A(t),ot(l),ot(f),ot($),K=!1,Y(Q)}}}function Pe(e,t,o){let{todos:i}=t,{todoCount:n}=t,s="",r=localStorage.length,l="",u="";const d=h=>{o(0,l="")},f=h=>{h==""?h="":o(1,u="")},g=()=>{if(!s.trim()){o(2,s="");return}!l&&!u&&o(0,l="매일"),i.push({id:r,title:s,tag:l,time:u}),localStorage.setItem(`${r}`,JSON.stringify({id:r,title:s,tag:l,time:u})),o(5,n+=1),o(4,i),o(2,s=""),o(0,l=""),o(1,u=""),r+=1,console.log(i)};function m(){s=this.value,o(2,s)}const $=h=>{h.key==="Enter"&&h.isComposing==!1&&(h.preventDefault(),g())};function k(h){l=h,o(0,l)}function P(h){l=h,o(0,l)}function b(h){l=h,o(0,l)}function y(){u=this.value,o(1,u)}return e.$$set=h=>{"todos"in h&&o(4,i=h.todos),"todoCount"in h&&o(5,n=h.todoCount)},e.$$.update=()=>{e.$$.dirty&2&&d(),e.$$.dirty&1&&f(l)},[l,u,s,g,i,n,m,$,k,P,b,y]}class Kt extends gt{constructor(t){super(),pt(this,t,Pe,je,ct,{todos:4,todoCount:5},Ee)}get todos(){return this.$$.ctx[4]}set todos(t){this.$$set({todos:t}),j()}get todoCount(){return this.$$.ctx[5]}set todoCount(t){this.$$set({todoCount:t}),j()}}ht(Kt,{todos:{},todoCount:{}},[],[],!0);function Ae(e){at(e,"svelte-1lsobs2",".yet-task.svelte-1lsobs2{display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, auto));grid-auto-rows:minmax(240px, auto);gap:12px}")}function Qt(e,t,o){const i=e.slice();return i[6]=t[o],i}function Wt(e){let t,o,i,n,s;function r(f){e[3](f)}function l(f){e[4](f)}function u(f){e[5](f)}let d={todo:e[6]};return e[0]!==void 0&&(d.todos=e[0]),e[1]!==void 0&&(d.successTodoCount=e[1]),e[2]!==void 0&&(d.todoCount=e[2]),t=new Gt({props:d}),z.push(()=>R(t,"todos",r)),z.push(()=>R(t,"successTodoCount",l)),z.push(()=>R(t,"todoCount",u)),{c(){rt(t.$$.fragment)},m(f,g){et(t,f,g),s=!0},p(f,g){const m={};g&1&&(m.todo=f[6]),!o&&g&1&&(o=!0,m.todos=f[0],M(()=>o=!1)),!i&&g&2&&(i=!0,m.successTodoCount=f[1],M(()=>i=!1)),!n&&g&4&&(n=!0,m.todoCount=f[2],M(()=>n=!1)),t.$set(m)},i(f){s||(F(t.$$.fragment,f),s=!0)},o(f){G(t.$$.fragment,f),s=!1},d(f){ot(t,f)}}}function Oe(e){let t,o,i=Yt(e[0]),n=[];for(let r=0;r<i.length;r+=1)n[r]=Wt(Qt(e,i,r));const s=r=>G(n[r],1,1,()=>{n[r]=null});return{c(){t=p("div");for(let r=0;r<n.length;r+=1)n[r].c();a(t,"class","yet-task svelte-1lsobs2")},m(r,l){N(r,t,l);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(t,null);o=!0},p(r,[l]){if(l&7){i=Yt(r[0]);let u;for(u=0;u<i.length;u+=1){const d=Qt(r,i,u);n[u]?(n[u].p(d,l),F(n[u],1)):(n[u]=Wt(d),n[u].c(),F(n[u],1),n[u].m(t,null))}for(ge(),u=i.length;u<n.length;u+=1)s(u);_e()}},i(r){if(!o){for(let l=0;l<i.length;l+=1)F(n[l]);o=!0}},o(r){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)G(n[l]);o=!1},d(r){r&&A(t),re(n,r)}}}function Ne(e,t,o){let{todos:i}=t,{successTodoCount:n}=t,{todoCount:s}=t;function r(d){i=d,o(0,i)}function l(d){n=d,o(1,n)}function u(d){s=d,o(2,s)}return e.$$set=d=>{"todos"in d&&o(0,i=d.todos),"successTodoCount"in d&&o(1,n=d.successTodoCount),"todoCount"in d&&o(2,s=d.todoCount)},[i,n,s,r,l,u]}class Xt extends gt{constructor(t){super(),pt(this,t,Ne,Oe,ct,{todos:0,successTodoCount:1,todoCount:2},Ae)}get todos(){return this.$$.ctx[0]}set todos(t){this.$$set({todos:t}),j()}get successTodoCount(){return this.$$.ctx[1]}set successTodoCount(t){this.$$set({successTodoCount:t}),j()}get todoCount(){return this.$$.ctx[2]}set todoCount(t){this.$$set({todoCount:t}),j()}}ht(Xt,{todos:{},successTodoCount:{},todoCount:{}},[],[],!0);function Ie(e){at(e,"svelte-1peupih","header.svelte-1peupih{width:100vw;display:flex;align-items:center;position:fixed;z-index:1;height:80px;background-color:black;color:white}.header-project-name.svelte-1peupih{display:flex;align-items:center;margin:0 0 0 5%;padding-top:4px;font-size:4rem;font-weight:600}.header-project-introduce.svelte-1peupih{margin-left:2%;font-size:2rem;margin-bottom:1%;align-self:flex-end;font-weight:400}main.svelte-1peupih{display:flex;width:100vw;height:fit-content;background-color:none;top:80px}.contents.svelte-1peupih{width:80%;height:fit-content;justify-content:stretch;position:relative;top:80px;padding:3% 2% 0 2%;color:#121212;background-color:rgb(248, 250, 252)}.content.svelte-1peupih{display:flex;flex-direction:column;margin-bottom:10%;border-radius:12px}.content-header.svelte-1peupih{width:fit-content;display:flex;font-size:3rem;margin-bottom:12px;padding:1% 1%}aside.svelte-1peupih{display:flex;flex-direction:column;width:20%}.sidebar.svelte-1peupih{position:fixed;top:80px;display:flex;flex-direction:column;width:20%;height:100%;padding:1%;background-color:#ffffff}.nav.svelte-1peupih{display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;transition:0.2s linear;font-size:2rem}.nav.svelte-1peupih:hover{cursor:pointer;display:flex;justify-content:start;margin-bottom:12px;padding:8% 5%;border:none;border-radius:8px;background-color:#ffffff;color:#121212;font-size:2rem;transition:0.2s linear;box-shadow:0 0 3.2px rgba(129, 28, 201, 0.25), 0 0 10px rgba(129, 28, 201, 0.22)}.svelte-1peupih{box-sizing:border-box}.profile.svelte-1peupih{display:flex;padding:3% 4%;flex-direction:column;font-size:3rem;background-color:#ffffff;border:1px solid rgb(226, 232, 240);box-shadow:rgba(0, 0, 0, 0.1) 0px 1px 3px;border-radius:20px;font-weight:600}.profile-task-info.svelte-1peupih{width:fit-content;display:flex;flex-direction:column;font-weight:400}.profile-task-head.svelte-1peupih{font-size:2rem;margin-top:0.5%;font-weight:400}.profile-task-count.svelte-1peupih{font-size:2rem;margin-top:0.5%;margin:0 12px;font-weight:400}")}function Le(e){let t,o,i,n,s,r,l,u,d,f,g,m,$,k,P,b,y,h,T,J,E,_,K,Q,_t,bt,kt,V,ut,mt,v,L,$t,vt,D,xt,te,q,Nt,It,ee,W,Tt,oe,U,Lt,Bt,Mt,dt,Rt,ne;function Me(w){e[11](w)}function Re(w){e[12](w)}let Jt={};e[3]!==void 0&&(Jt.todos=e[3]),e[4]!==void 0&&(Jt.todoCount=e[4]),q=new Kt({props:Jt}),z.push(()=>R(q,"todos",Me)),z.push(()=>R(q,"todoCount",Re));function Je(w){e[14](w)}function De(w){e[15](w)}function He(w){e[16](w)}let zt={};return e[3]!==void 0&&(zt.todos=e[3]),e[5]!==void 0&&(zt.successTodoCount=e[5]),e[4]!==void 0&&(zt.todoCount=e[4]),U=new Xt({props:zt}),z.push(()=>R(U,"todos",Je)),z.push(()=>R(U,"successTodoCount",De)),z.push(()=>R(U,"todoCount",He)),{c(){t=p("header"),t.innerHTML='<span class="header-project-name svelte-1peupih">PlanA</span> <span class="header-project-introduce svelte-1peupih">To Prevent PlanB</span>',o=C(),i=p("main"),n=p("aside"),s=p("div"),r=p("button"),r.textContent="프로필",l=C(),u=p("button"),u.textContent="과제 등록하기",d=C(),f=p("button"),f.textContent="미완료 과제",g=C(),m=p("div"),$=p("div"),k=p("div"),k.textContent="프로필",P=C(),b=p("div"),y=I("반가워요! 👋 "),h=p("br"),T=C(),J=p("div"),E=p("div"),_=p("div"),_.textContent="미완료 과제 :",K=C(),Q=p("div"),_t=I(e[4]),bt=I("개"),kt=C(),V=p("div"),ut=p("div"),ut.textContent="완료 과제 :",mt=C(),v=p("div"),L=I(e[5]),$t=I("개"),vt=C(),D=p("div"),xt=p("div"),xt.textContent="과제 등록하기",te=C(),rt(q.$$.fragment),ee=C(),W=p("div"),Tt=p("div"),Tt.textContent="미완료 과제",oe=C(),rt(U.$$.fragment),a(t,"class","svelte-1peupih"),a(r,"class","nav svelte-1peupih"),a(u,"class","nav svelte-1peupih"),a(f,"class","nav svelte-1peupih"),a(s,"class","sidebar svelte-1peupih"),a(n,"class","svelte-1peupih"),a(k,"class","content-header svelte-1peupih"),a(h,"class","svelte-1peupih"),a(_,"class","profile-task-head svelte-1peupih"),a(Q,"class","profile-task-count svelte-1peupih"),Ut(E,"display","flex"),a(E,"class","svelte-1peupih"),a(ut,"class","profile-task-head svelte-1peupih"),a(v,"class","profile-task-count svelte-1peupih"),Ut(V,"display","flex"),a(V,"class","svelte-1peupih"),a(J,"class","profile-task-info svelte-1peupih"),a(b,"class","profile svelte-1peupih"),a($,"class","content svelte-1peupih"),a($,"id","profile"),a(xt,"class","content-header svelte-1peupih"),a(D,"class","content svelte-1peupih"),a(D,"id","taskInput"),a(Tt,"class","content-header svelte-1peupih"),a(W,"class","content svelte-1peupih"),a(W,"id","yetTask"),a(m,"class","contents svelte-1peupih"),a(i,"class","svelte-1peupih")},m(w,H){N(w,t,H),N(w,o,H),N(w,i,H),c(i,n),c(n,s),c(s,r),c(s,l),c(s,u),c(s,d),c(s,f),c(i,g),c(i,m),c(m,$),c($,k),c($,P),c($,b),c(b,y),c(b,h),c(b,T),c(b,J),c(J,E),c(E,_),c(E,K),c(E,Q),c(Q,_t),c(Q,bt),c(J,kt),c(J,V),c(V,ut),c(V,mt),c(V,v),c(v,L),c(v,$t),e[10]($),c(m,vt),c(m,D),c(D,xt),c(D,te),et(q,D,null),e[13](D),c(m,ee),c(m,W),c(W,Tt),c(W,oe),et(U,W,null),e[17](W),dt=!0,Rt||(ne=[S(r,"click",e[7]),S(u,"click",e[8]),S(f,"click",e[9])],Rt=!0)},p(w,[H]){(!dt||H&16)&&Z(_t,w[4]),(!dt||H&32)&&Z(L,w[5]);const Dt={};!Nt&&H&8&&(Nt=!0,Dt.todos=w[3],M(()=>Nt=!1)),!It&&H&16&&(It=!0,Dt.todoCount=w[4],M(()=>It=!1)),q.$set(Dt);const St={};!Lt&&H&8&&(Lt=!0,St.todos=w[3],M(()=>Lt=!1)),!Bt&&H&32&&(Bt=!0,St.successTodoCount=w[5],M(()=>Bt=!1)),!Mt&&H&16&&(Mt=!0,St.todoCount=w[4],M(()=>Mt=!1)),U.$set(St)},i(w){dt||(F(q.$$.fragment,w),F(U.$$.fragment,w),dt=!0)},o(w){G(q.$$.fragment,w),G(U.$$.fragment,w),dt=!1},d(w){w&&(A(t),A(o),A(i)),e[10](null),ot(q),e[13](null),ot(U),e[17](null),Rt=!1,Y(ne)}}}function Be(e,t,o){let i,n,s;const r=_=>{let K=_.offsetTop;window.scrollTo({top:K-50,behavior:"smooth"})};let l=[],u=localStorage.length,d=0,f="";u==0?(localStorage.setItem("success","0"),f=localStorage.getItem("success"),u=localStorage.length,d=u-1):(f=localStorage.getItem("success"),u=localStorage.length,d=u-1);for(let _=0;_<u;_++)["success","todoCount"].includes(localStorage.key(_))||l.push(JSON.parse(localStorage.getItem(localStorage.key(_))));const g=()=>r(i),m=()=>r(n),$=()=>r(s);function k(_){z[_?"unshift":"push"](()=>{i=_,o(0,i)})}function P(_){l=_,o(3,l)}function b(_){d=_,o(4,d)}function y(_){z[_?"unshift":"push"](()=>{n=_,o(1,n)})}function h(_){l=_,o(3,l)}function T(_){f=_,o(5,f)}function J(_){d=_,o(4,d)}function E(_){z[_?"unshift":"push"](()=>{s=_,o(2,s)})}return[i,n,s,l,d,f,r,g,m,$,k,P,b,y,h,T,J,E]}class Zt extends gt{constructor(t){super(),pt(this,t,Be,Le,ct,{},Ie)}}customElements.define("my-component",ht(Zt,{},[],[],!0)),O.SvelteApp=Zt,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});
