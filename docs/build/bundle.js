var app=function(){"use strict";function t(){}function e(t){return t()}function s(){return Object.create(null)}function n(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,...s){if(null==e)return t;const n=e.subscribe(...s);return n.unsubscribe?()=>n.unsubscribe():n}function a(t,e){t.appendChild(e)}function u(t,e,s){t.insertBefore(e,s||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function f(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,s,n){t.style.setProperty(e,s,n?"important":"")}let v;function $(t){v=t}function _(){const t=function(){if(!v)throw new Error("Function called outside component initialization");return v}();return(e,s)=>{const n=t.$$.callbacks[e];if(n){const i=function(t,e,s=!1){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,s,!1,e),n}(e,s);n.slice().forEach((e=>{e.call(t,i)}))}}}const b=[],k=[],y=[],w=[],S=Promise.resolve();let T=!1;function x(t){y.push(t)}let P=!1;const N=new Set;function E(){if(!P){P=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];$(e),I(e.$$)}for($(null),b.length=0;k.length;)k.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];N.has(e)||(N.add(e),e())}y.length=0}while(b.length);for(;w.length;)w.pop()();T=!1,P=!1,N.clear()}}function I(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const L=new Set;function M(t,e){t&&t.i&&(L.delete(t),t.i(e))}function O(t,e,s,n){if(t&&t.o){if(L.has(t))return;L.add(t),undefined.c.push((()=>{L.delete(t),n&&(s&&t.d(1),n())})),t.o(e)}}function j(t){t&&t.c()}function J(t,s,o,r){const{fragment:a,on_mount:u,on_destroy:c,after_update:l}=t.$$;a&&a.m(s,o),r||x((()=>{const s=u.map(e).filter(i);c?c.push(...s):n(s),t.$$.on_mount=[]})),l.forEach(x)}function A(t,e){const s=t.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function C(t,e){-1===t.$$.dirty[0]&&(b.push(t),T||(T=!0,S.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,i,o,r,a,u,l,d=[-1]){const h=v;$(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:s(),dirty:d,skip_bound:!1,root:i.target||h.$$.root};l&&l(p.root);let f=!1;if(p.ctx=o?o(e,i.props||{},((t,s,...n)=>{const i=n.length?n[0]:s;return p.ctx&&a(p.ctx[t],p.ctx[t]=i)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](i),f&&C(e,t)),s})):[],p.update(),f=!0,n(p.before_update),p.fragment=!!r&&r(p.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);p.fragment&&p.fragment.l(t),t.forEach(c)}else p.fragment&&p.fragment.c();i.intro&&M(e.$$.fragment),J(e,i.target,i.anchor,i.customElement),E()}$(h)}class D{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=[];function F(e,s=t){let n;const i=new Set;function r(t){if(o(e,t)&&(e=t,n)){const t=!q.length;for(const t of i)t[1](),q.push(t,e);if(t){for(let t=0;t<q.length;t+=2)q[t][0](q[t+1]);q.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(o,a=t){const u=[o,a];return i.add(u),1===i.size&&(n=s(r)||t),o(e),()=>{i.delete(u),0===i.size&&(n(),n=null)}}}}let B={opts:{},init(t={}){addEventListener("keyup",(e=>{this.opts&&this.opts.debug&&console.log(e.code),t[e.code]&&t[e.code]()}))}};const z={workend:{title:"Отдыхать"},end:{title:"Помидор закончился"},start:{title:"Проверка"}};let Y={opts:{},_notify(t){const e=z[t];if(!e)return;const s=e.title,n=e.opts||{};this.opts.debug?console.log(s,n):new Notification(s,n)},_requestPermission(t){Notification.requestPermission((e=>{Notification.permission||(Notification.permission=e),"granted"===e&&this._notify(t)}))},init(){"granted"!==Notification.permission&&Notification.requestPermission((t=>{Notification.permission||(Notification.permission=t)}))},notify(t){"Notification"in window&&("granted"===Notification.permission?this._notify(t):this._requestPermission(t))}},Z=new class{constructor(){this._store=F({isPaused:null,value:null,leftTime:null,type:null}),this.subscribe=this._store.subscribe,this.update=this._store.update,this.set=this._store.set,this._eventListeners={}}init(t,e={}){return this.opts=e,this._time=t,this.update((t=>(t.isPaused=!1,t.time=this._time,t.isWorkingCondition=e.isWorking,t.type=e.type,t))),this.isStarted&&!this.isPaused&&this._startInterval(),this}onstart(){}onend(){}onpause(){}onunpause(){}onworkstart(){}onworkend(){}addEventListener(t,e){return this._eventListeners[t]||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),e}_dispatchEvent(t){this.opts.debug&&console.log("event "+t);const e={type:t,target:this};this._eventListeners[t]&&this._eventListeners[t].forEach((t=>t(e))),this["on"+t]&&this["on"+t](e)}set isStarted(t){localStorage.setItem("isStarted",JSON.stringify(t))}get isStarted(){return JSON.parse(localStorage.getItem("isStarted"))}set isPaused(t){localStorage.setItem("isPaused",JSON.stringify(t)),this.update((e=>(e.isPaused=t,e)))}get isPaused(){return JSON.parse(localStorage.getItem("isPaused"))}set startTime(t){localStorage.setItem("startTime",JSON.stringify(t))}get startTime(){return JSON.parse(localStorage.getItem("startTime"))}set endTime(t){localStorage.setItem("endTime",JSON.stringify(t))}get endTime(){return JSON.parse(localStorage.getItem("endTime"))}set pausedTime(t){localStorage.setItem("pausedTime",JSON.stringify(t))}get pausedTime(){return JSON.parse(localStorage.getItem("pausedTime"))}set value(t){this.update((e=>(e.value=t,e.leftTime=this._time*(1-t),e)))}get value(){const t=((this.isPaused?this.pausedTime:Date.now())-this.startTime)/(this.endTime-this.startTime);return t>=1?(this.value=1,void this.end()):(this.value=t,t)}_frame(){this.value<1&&(this._interval=requestAnimationFrame(this._frame.bind(this)))}_stopInterval(){cancelAnimationFrame(this._interval)}_startInterval(){this._frame()}start(){return this.isStarted=!0,this.startTime=Date.now(),this.endTime=this.startTime+this._time,this.value=0,this._startInterval(),this._dispatchEvent("start"),this}end(){return this.value=1,this.isStarted=!1,this._stopInterval(),this._dispatchEvent("end"),this}pause(){return this.isPaused=!0,this.pausedTime=Date.now(),this._stopInterval(),this._dispatchEvent("pause"),this}unpause(){return this.isPaused=!1,this.startTime=this.startTime+Date.now()-this.pausedTime,this.endTime=this.endTime+Date.now()-this.pausedTime,this.pausedTime=0,this._startInterval(),this._dispatchEvent("unpause"),this}change(){return this.isPaused?this.unpause():this.isStarted?this.isWorking&&this.pause():this.start(),this}},G=new class{constructor(){this._store=F(this.value),this.subscribe=this._store.subscribe,this.update=this._store.update}get _id(){let t=new Date;return[t.getFullYear(),t.getMonth(),t.getDate()].join("-")}get stats(){return JSON.parse(localStorage.getItem("stats")||"{}")}set stats(t){localStorage.setItem("stats",JSON.stringify(t))}set value(t){const e=this.stats;this.update((()=>t)),e[this._id]=t,this.stats=e}get value(){return this.stats[this._id]||0}}(0);const H=[18e5,{isWorking:5/6,type:"working"}],K=[9e5,{isWorking:0,type:"break"}];Y.init(),Z.init(...H),Z.onworkend=t=>{Y.notify(t.type)};function Q(t,e,s,n){const i=(n-90)*Math.PI/180;return{x:t+s*Math.cos(i),y:e+s*Math.sin(i)}}function R(t,e,s,n,i){let o=Q(t,e,s,i),r=Q(t,e,s,n),a=i-n<=180?"0":"1";return[o.x,o.y,"A",s,s,0,a,0,r.x,r.y].join(" ")}function U(t,e=!1){let s=(t%6e4/1e3).toFixed(0),n=Math.floor(t/6e4);return s>=60&&(s-=60,n++),e&&(n=n<10?"0"+n:n,s=s<10?"0"+s:s),{minutes:n,seconds:s}}function V(e){let s,n,i,o,r,l,h,p,m;return{c(){s=d("svg"),n=d("path"),i=d("path"),o=d("path"),l=d("path"),f(n,"d","M 15.4 62.9 A 95 95 0 1 0 105 11.1"),f(n,"fill","none"),f(n,"stroke-width","10"),f(n,"stroke","var(--working-color)"),f(n,"stroke-linecap","round"),f(i,"d","M 86 5.15 A 85 85 0 0 0 20 43.2"),f(i,"fill","none"),f(i,"stroke-width","10"),f(i,"stroke","var(--break-color)"),f(i,"stroke-linecap","round"),f(o,"d",r="M "+(e[1]||"0 0")+" L 100 106"),f(o,"fill","var(--working-color)"),f(l,"d",h="M "+(e[2]||"0 0")+" L 91 90"),f(l,"fill","var(--break-color)"),f(s,"viewBox","0 0 200 206"),g(s,"display","block"),f(s,"class",e[0])},m(t,r){var c,d,h,f;u(t,s,r),a(s,n),a(s,i),a(s,o),a(s,l),p||(c=s,d="click",h=e[5],c.addEventListener(d,h,f),m=()=>c.removeEventListener(d,h,f),p=!0)},p(t,[e]){2&e&&r!==(r="M "+(t[1]||"0 0")+" L 100 106")&&f(o,"d",r),4&e&&h!==(h="M "+(t[2]||"0 0")+" L 91 90")&&f(l,"d",h),1&e&&f(s,"class",t[0])},i:t,o:t,d(t){t&&c(s),p=!1,m()}}}function X(t,e,s){const n=_();let i,o,{class:r}=e,{progress:a=0}=e;return t.$$set=t=>{"class"in t&&s(0,r=t.class),"progress"in t&&s(4,a=t.progress)},t.$$.update=()=>{if(16&t.$$.dirty){let t=360*a;if(s(1,i=R(100,106,95,0,t>300?300:t)),t>=300){const i=(t-(e=300))/(360-e)*(1-(n=0))+n;s(2,o=R(91,90,85,-60,60*i-60))}else s(2,o=null)}var e,n},[r,i,o,n,a,()=>n("click")]}Z.onend=t=>{4==++G.value%5?Z.init(...K).start():Z.init(...H),Y.notify(t.type)},B.init({Space:()=>Z.change()});class tt extends D{constructor(t){super(),W(this,t,X,V,o,{class:0,progress:4})}}function et(e){let s,n,i,o;return{c(){s=d("svg"),n=d("path"),i=d("path"),f(n,"d","M 99.8 10 A 90 90 0 1 0 100 10"),f(n,"stroke","var(--break-color)"),f(n,"fill","none"),f(n,"stroke-width","10"),f(n,"stroke-linecap","round"),f(i,"d",o="M "+(e[1]||"0 0")+" L 100 100"),f(i,"fill","var(--break-color)"),f(s,"viewBox","0 0 200 200"),g(s,"display","block"),f(s,"class",e[0])},m(t,e){u(t,s,e),a(s,n),a(s,i)},p(t,[e]){2&e&&o!==(o="M "+(t[1]||"0 0")+" L 100 100")&&f(i,"d",o),1&e&&f(s,"class",t[0])},i:t,o:t,d(t){t&&c(s)}}}function st(t,e,s){let n,{class:i}=e,{progress:o=0}=e;return t.$$set=t=>{"class"in t&&s(0,i=t.class),"progress"in t&&s(2,o=t.progress)},t.$$.update=()=>{4&t.$$.dirty&&s(1,n=R(100,100,90,0,359.9*o))},[i,n,o]}class nt extends D{constructor(t){super(),W(this,t,st,et,o,{class:0,progress:2})}}function it(t){let e,s,n,i,o,r,g,v,$,_,b,k,y,w,S,T,x,P,N,E,I,L=t[2].minutes+"",C=t[2].seconds+"",W=t[3].minutes+"",D=t[3].seconds+"";return s=new nt({props:{progress:t[1].value,class:"pomodoro__circle pomodoro__circle--break"}}),i=new tt({props:{progress:t[1].value,class:"pomodoro__circle pomodoro__circle--working"}}),i.$on("click",t[5]),{c(){e=l("div"),j(s.$$.fragment),n=p(),j(i.$$.fragment),o=p(),r=l("div"),g=l("div"),v=d("svg"),$=d("path"),_=p(),b=l("p"),k=h(L),y=h(":"),w=h(C),S=p(),T=l("p"),x=h(W),P=h(":"),N=h(D),f($,"d","M11.792 5.24532C13.179 6.00397 13.179 7.99603 11.792 8.75468L3.70974 13.1754C2.37694 13.9044 .75 12.9398 .75 11.4207L.75 2.57932C.75 1.06017 2.37694 .0956483 3.70974 .824643L11.792 5.24532Z"),f(v,"viewBox","0 0 13 14"),f(v,"class","left-time__marker svelte-19josbh"),f(v,"fill","currentColor"),f(b,"class","left-time__value left-time__value--working svelte-19josbh"),f(T,"class","left-time__value left-time__value--break svelte-19josbh"),f(g,"class","left-time svelte-19josbh"),f(r,"class","left-time__wrapper svelte-19josbh"),f(e,"class",E="pomodoro pomodoro--"+t[1].type+" pomodoro--working-"+t[4]+" svelte-19josbh")},m(t,c){u(t,e,c),J(s,e,null),a(e,n),J(i,e,null),a(e,o),a(e,r),a(r,g),a(g,v),a(v,$),a(g,_),a(g,b),a(b,k),a(b,y),a(b,w),a(g,S),a(g,T),a(T,x),a(T,P),a(T,N),I=!0},p(t,[n]){const o={};2&n&&(o.progress=t[1].value),s.$set(o);const r={};2&n&&(r.progress=t[1].value),i.$set(r),(!I||4&n)&&L!==(L=t[2].minutes+"")&&m(k,L),(!I||4&n)&&C!==(C=t[2].seconds+"")&&m(w,C),(!I||8&n)&&W!==(W=t[3].minutes+"")&&m(x,W),(!I||8&n)&&D!==(D=t[3].seconds+"")&&m(N,D),(!I||18&n&&E!==(E="pomodoro pomodoro--"+t[1].type+" pomodoro--working-"+t[4]+" svelte-19josbh"))&&f(e,"class",E)},i(t){I||(M(s.$$.fragment,t),M(i.$$.fragment,t),I=!0)},o(t){O(s.$$.fragment,t),O(i.$$.fragment,t),I=!1},d(t){t&&c(e),A(s),A(i)}}}function ot(e,s,n){let i,o=t,a=()=>(o(),o=r(d,(t=>n(1,i=t))),d);e.$$.on_destroy.push((()=>o()));let u,c,l,{timer:d}=s;return a(),e.$$set=t=>{"timer"in t&&a(n(0,d=t.timer))},e.$$.update=()=>{if(2&e.$$.dirty){let e=i.time*(1-i.isWorkingCondition),r=Math.max(i.leftTime-e,0);n(2,u=U(r,!0));let a=Math.min(i.leftTime,e);n(3,c=U(a,!0)),n(4,(t=d,s=i.isWorking=i.leftTime>e,o=i,t.set(o),l=s))}var t,s,o},[d,i,u,c,l,function(){d.change()}]}class rt extends D{constructor(t){super(),W(this,t,ot,it,o,{timer:0})}}function at(e){let s,n,i;return{c(){s=l("div"),n=l("div"),f(n,"class","pause__icon svelte-w7obh4"),f(s,"class",i="pause "+(e[0]&&"pause--visible")+" svelte-w7obh4")},m(t,e){u(t,s,e),a(s,n)},p(t,[e]){1&e&&i!==(i="pause "+(t[0]&&"pause--visible")+" svelte-w7obh4")&&f(s,"class",i)},i:t,o:t,d(t){t&&c(s)}}}function ut(t,e,s){let{isPaused:n}=e;return t.$$set=t=>{"isPaused"in t&&s(0,n=t.isPaused)},[n]}class ct extends D{constructor(t){super(),W(this,t,ut,at,o,{isPaused:0})}}function lt(t){let e,s,n,i,o,r;return s=new rt({props:{timer:Z}}),i=new ct({props:{isPaused:t[0].isPaused}}),{c(){e=l("div"),j(s.$$.fragment),n=p(),j(i.$$.fragment),f(e,"class",o="app app--"+(t[0].isWorking?"working":"break")+" svelte-1ibxmd2")},m(t,o){u(t,e,o),J(s,e,null),a(e,n),J(i,e,null),r=!0},p(t,[s]){const n={};1&s&&(n.isPaused=t[0].isPaused),i.$set(n),(!r||1&s&&o!==(o="app app--"+(t[0].isWorking?"working":"break")+" svelte-1ibxmd2"))&&f(e,"class",o)},i(t){r||(M(s.$$.fragment,t),M(i.$$.fragment,t),r=!0)},o(t){O(s.$$.fragment,t),O(i.$$.fragment,t),r=!1},d(t){t&&c(e),A(s),A(i)}}}function dt(t,e,s){let n;var i,o;return i=Z,o=t=>s(0,n=t),t.$$.on_destroy.push(r(i,o)),[n]}return new class extends D{constructor(t){super(),W(this,t,dt,lt,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
