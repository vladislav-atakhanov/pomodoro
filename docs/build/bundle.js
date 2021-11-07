var app=function(){"use strict";function t(){}function e(t){return t()}function s(){return Object.create(null)}function n(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(e,...s){if(null==e)return t;const n=e.subscribe(...s);return n.unsubscribe?()=>n.unsubscribe():n}function a(t,e){t.appendChild(e)}function u(t,e,s){t.insertBefore(e,s||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(){return t=" ",document.createTextNode(t);var t}function h(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function f(t,e,s,n){t.style.setProperty(e,s,n?"important":"")}let m;function g(t){m=t}function $(){const t=function(){if(!m)throw new Error("Function called outside component initialization");return m}();return(e,s)=>{const n=t.$$.callbacks[e];if(n){const i=function(t,e,s=!1){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,s,!1,e),n}(e,s);n.slice().forEach((e=>{e.call(t,i)}))}}}const v=[],_=[],b=[],k=[],y=Promise.resolve();let w=!1;function S(t){b.push(t)}let T=!1;const P=new Set;function N(){if(!T){T=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];g(e),x(e.$$)}for(g(null),v.length=0;_.length;)_.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];P.has(e)||(P.add(e),e())}b.length=0}while(v.length);for(;k.length;)k.pop()();w=!1,T=!1,P.clear()}}function x(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const E=new Set;function I(t,e){t&&t.i&&(E.delete(t),t.i(e))}function L(t,e,s,n){if(t&&t.o){if(E.has(t))return;E.add(t),undefined.c.push((()=>{E.delete(t),n&&(s&&t.d(1),n())})),t.o(e)}}function O(t){t&&t.c()}function M(t,s,r,o){const{fragment:a,on_mount:u,on_destroy:c,after_update:l}=t.$$;a&&a.m(s,r),o||S((()=>{const s=u.map(e).filter(i);c?c.push(...s):n(s),t.$$.on_mount=[]})),l.forEach(S)}function W(t,e){const s=t.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(v.push(t),w||(w=!0,y.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(e,i,r,o,a,u,l,d=[-1]){const p=m;g(e);const h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(p?p.$$.context:[])),callbacks:s(),dirty:d,skip_bound:!1,root:i.target||p.$$.root};l&&l(h.root);let f=!1;if(h.ctx=r?r(e,i.props||{},((t,s,...n)=>{const i=n.length?n[0]:s;return h.ctx&&a(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),f&&J(e,t)),s})):[],h.update(),f=!0,n(h.before_update),h.fragment=!!o&&o(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();i.intro&&I(e.$$.fragment),M(e,i.target,i.anchor,i.customElement),N()}g(p)}class D{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const q=[];function j(e,s=t){let n;const i=new Set;function o(t){if(r(e,t)&&(e=t,n)){const t=!q.length;for(const t of i)t[1](),q.push(t,e);if(t){for(let t=0;t<q.length;t+=2)q[t][0](q[t+1]);q.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(r,a=t){const u=[r,a];return i.add(u),1===i.size&&(n=s(o)||t),r(e),()=>{i.delete(u),0===i.size&&(n(),n=null)}}}}let C={opts:{},init(t={}){addEventListener("keyup",(e=>{this.opts&&this.opts.debug&&console.log(e.code),t[e.code]&&t[e.code]()}))}};const F={workend:{title:"Отдыхать"},end:{title:"Помидор закончился"},start:{title:"Проверка"}};let z={opts:{},_notify(t){const e=F[t];if(!e)return;const s=e.title,n=e.opts||{};this.opts.debug?console.log(s,n):new Notification(s,n)},_requestPermission(t){Notification.requestPermission((e=>{Notification.permission||(Notification.permission=e),"granted"===e&&this._notify(t)}))},init(){"granted"!==Notification.permission&&Notification.requestPermission((t=>{Notification.permission||(Notification.permission=t)}))},notify(t){"Notification"in window&&("granted"===Notification.permission?this._notify(t):this._requestPermission(t))}},B=new class{constructor(){this._store=j({isPaused:null,value:null,isWorking:null,leftTime:null,type:null}),this.subscribe=this._store.subscribe,this.update=this._store.update,this._eventListeners={}}init(t,e={}){return this.opts=e,this._time=t,this.update((t=>(t.isPaused=!1,t.type=e.type,t))),this.isStarted&&!this.isPaused&&this._startInterval(),this}onstart(){}onend(){}onpause(){}onunpause(){}onworkstart(){}onworkend(){}addEventListener(t,e){return this._eventListeners[t]||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),e}_dispatchEvent(t){this.opts.debug&&console.log("event "+t);const e={type:t,target:this};this._eventListeners[t]&&this._eventListeners[t].forEach((t=>t(e))),this["on"+t]&&this["on"+t](e)}set isStarted(t){localStorage.setItem("isStarted",JSON.stringify(t))}get isStarted(){return JSON.parse(localStorage.getItem("isStarted"))}set isPaused(t){localStorage.setItem("isPaused",JSON.stringify(t)),this.update((e=>(e.isPaused=t,e)))}get isPaused(){return JSON.parse(localStorage.getItem("isPaused"))}set startTime(t){localStorage.setItem("startTime",JSON.stringify(t))}get startTime(){return JSON.parse(localStorage.getItem("startTime"))}set endTime(t){localStorage.setItem("endTime",JSON.stringify(t))}get endTime(){return JSON.parse(localStorage.getItem("endTime"))}set pausedTime(t){localStorage.setItem("pausedTime",JSON.stringify(t))}get pausedTime(){return JSON.parse(localStorage.getItem("pausedTime"))}set value(t){let e;this.isWorking=t<this.opts.isWorking,this.update((s=>(e=s.isWorking,s.value=t,s.isWorking=this.isWorking,s.leftTime=this._time*(1-t),s))),e!=this.isWorking&&this._dispatchEvent(this.isWorking?"workstart":"workend")}get value(){const t=((this.isPaused?this.pausedTime:Date.now())-this.startTime)/(this.endTime-this.startTime);return t>=1?(this.value=1,void this.end()):(this.value=t,t)}_frame(){this.value<1&&(this._interval=requestAnimationFrame(this._frame.bind(this)))}_stopInterval(){cancelAnimationFrame(this._interval)}_startInterval(){this._frame()}start(){return this.isStarted=!0,this.startTime=Date.now(),this.endTime=this.startTime+this._time,this.value=0,this._startInterval(),this._dispatchEvent("start"),this}end(){return this.value=1,this.isStarted=!1,this._stopInterval(),this._dispatchEvent("end"),this}pause(){return this.isPaused=!0,this.pausedTime=Date.now(),this._stopInterval(),this._dispatchEvent("pause"),this}unpause(){return this.isPaused=!1,this.startTime=this.startTime+Date.now()-this.pausedTime,this.endTime=this.endTime+Date.now()-this.pausedTime,this.pausedTime=0,this._startInterval(),this._dispatchEvent("unpause"),this}change(){return this.isPaused?this.unpause():this.isStarted?this.isWorking&&this.pause():this.start(),this}},Y=new class{constructor(){this._store=j(this.value),this.subscribe=this._store.subscribe,this.update=this._store.update}get _id(){let t=new Date;return[t.getFullYear(),t.getMonth(),t.getDate()].join("-")}get stats(){return JSON.parse(localStorage.getItem("stats")||"{}")}set stats(t){localStorage.setItem("stats",JSON.stringify(t))}set value(t){const e=this.stats;this.update((()=>t)),e[this._id]=t,this.stats=e}get value(){return this.stats[this._id]||0}}(0);z.opts={debug:!0};const G=[1800,{isWorking:5/6,type:"working"}],H=[900,{isWorking:0,type:"break"}];z.init(),B.init(...G),B.onworkend=t=>{z.notify(t.type)};function K(t,e,s,n){const i=(n-90)*Math.PI/180;return{x:t+s*Math.cos(i),y:e+s*Math.sin(i)}}function Q(t,e,s,n,i){let r=K(t,e,s,i),o=K(t,e,s,n),a=i-n<=180?"0":"1";return[r.x,r.y,"A",s,s,0,a,0,o.x,o.y].join(" ")}function R(e){let s,n,i,r,o,l,p,m,g;return{c(){s=d("svg"),n=d("path"),i=d("path"),r=d("path"),l=d("path"),h(n,"d","M 15.4 62.9 A 95 95 0 1 0 105 11.1"),h(n,"fill","none"),h(n,"stroke-width","10"),h(n,"stroke","var(--working-color)"),h(n,"stroke-linecap","round"),h(i,"d","M 86 5.15 A 85 85 0 0 0 20 43.2"),h(i,"fill","none"),h(i,"stroke-width","10"),h(i,"stroke","var(--break-color)"),h(i,"stroke-linecap","round"),h(r,"d",o="M "+(e[1]||"0 0")+" L 100 106"),h(r,"fill","var(--working-color)"),h(l,"d",p="M "+(e[2]||"0 0")+" L 91 90"),h(l,"fill","var(--break-color)"),h(s,"viewBox","0 0 200 206"),f(s,"display","block"),h(s,"class",e[0])},m(t,o){var c,d,p,h;u(t,s,o),a(s,n),a(s,i),a(s,r),a(s,l),m||(c=s,d="click",p=e[5],c.addEventListener(d,p,h),g=()=>c.removeEventListener(d,p,h),m=!0)},p(t,[e]){2&e&&o!==(o="M "+(t[1]||"0 0")+" L 100 106")&&h(r,"d",o),4&e&&p!==(p="M "+(t[2]||"0 0")+" L 91 90")&&h(l,"d",p),1&e&&h(s,"class",t[0])},i:t,o:t,d(t){t&&c(s),m=!1,g()}}}function U(t,e,s){const n=$();let i,r,{class:o}=e,{progress:a=0}=e;return t.$$set=t=>{"class"in t&&s(0,o=t.class),"progress"in t&&s(4,a=t.progress)},t.$$.update=()=>{if(16&t.$$.dirty){let t=360*a;if(s(1,i=Q(100,106,95,0,t>300?300:t)),t>=300){const i=(t-(e=300))/(360-e)*(1-(n=0))+n;s(2,r=Q(91,90,85,-60,60*i-60))}else s(2,r=null)}var e,n},[o,i,r,n,a,()=>n("click")]}B.onend=t=>{4==++Y.value%5?B.init(...H).start():B.init(...G),z.notify(t.type)},C.init({Space:()=>B.change()});class V extends D{constructor(t){super(),A(this,t,U,R,r,{class:0,progress:4})}}function X(e){let s,n,i,r;return{c(){s=d("svg"),n=d("path"),i=d("path"),h(n,"d","M 99.8 10 A 90 90 0 1 0 100 10"),h(n,"stroke","var(--break-color)"),h(n,"fill","none"),h(n,"stroke-width","10"),h(n,"stroke-linecap","round"),h(i,"d",r="M "+(e[1]||"0 0")+" L 100 100"),h(i,"fill","var(--break-color)"),h(s,"viewBox","0 0 200 200"),f(s,"display","block"),h(s,"class",e[0])},m(t,e){u(t,s,e),a(s,n),a(s,i)},p(t,[e]){2&e&&r!==(r="M "+(t[1]||"0 0")+" L 100 100")&&h(i,"d",r),1&e&&h(s,"class",t[0])},i:t,o:t,d(t){t&&c(s)}}}function Z(t,e,s){let n,{class:i}=e,{progress:r=0}=e;return t.$$set=t=>{"class"in t&&s(0,i=t.class),"progress"in t&&s(2,r=t.progress)},t.$$.update=()=>{4&t.$$.dirty&&s(1,n=Q(100,100,90,0,359.9*r))},[i,n,r]}class tt extends D{constructor(t){super(),A(this,t,Z,X,r,{class:0,progress:2})}}function et(t){let e,s,n,i,r,o;return s=new tt({props:{progress:t[1].value,class:"pomodoro__circle pomodoro__circle--break"}}),i=new V({props:{progress:t[1].value,class:"pomodoro__circle pomodoro__circle--working"}}),i.$on("click",t[2]),{c(){e=l("div"),O(s.$$.fragment),n=p(),O(i.$$.fragment),h(e,"class",r="pomodoro pomodoro--"+t[1].type+" svelte-3m27v8")},m(t,r){u(t,e,r),M(s,e,null),a(e,n),M(i,e,null),o=!0},p(t,[n]){const a={};2&n&&(a.progress=t[1].value),s.$set(a);const u={};2&n&&(u.progress=t[1].value),i.$set(u),(!o||2&n&&r!==(r="pomodoro pomodoro--"+t[1].type+" svelte-3m27v8"))&&h(e,"class",r)},i(t){o||(I(s.$$.fragment,t),I(i.$$.fragment,t),o=!0)},o(t){L(s.$$.fragment,t),L(i.$$.fragment,t),o=!1},d(t){t&&c(e),W(s),W(i)}}}function st(e,s,n){let i,r=t,a=()=>(r(),r=o(u,(t=>n(1,i=t))),u);e.$$.on_destroy.push((()=>r()));let{timer:u}=s;return a(),e.$$set=t=>{"timer"in t&&a(n(0,u=t.timer))},[u,i,function(){u.change()}]}class nt extends D{constructor(t){super(),A(this,t,st,et,r,{timer:0})}}function it(e){let s,n,i;return{c(){s=l("div"),n=l("div"),h(n,"class","pause__icon svelte-w7obh4"),h(s,"class",i="pause "+(e[0]&&"pause--visible")+" svelte-w7obh4")},m(t,e){u(t,s,e),a(s,n)},p(t,[e]){1&e&&i!==(i="pause "+(t[0]&&"pause--visible")+" svelte-w7obh4")&&h(s,"class",i)},i:t,o:t,d(t){t&&c(s)}}}function rt(t,e,s){let{isPaused:n}=e;return t.$$set=t=>{"isPaused"in t&&s(0,n=t.isPaused)},[n]}class ot extends D{constructor(t){super(),A(this,t,rt,it,r,{isPaused:0})}}function at(t){let e,s,n,i,r,o;return s=new nt({props:{timer:B}}),i=new ot({props:{isPaused:t[0].isPaused}}),{c(){e=l("div"),O(s.$$.fragment),n=p(),O(i.$$.fragment),h(e,"class",r="app app--"+(t[0].isWorking?"working":"break")+" svelte-1ibxmd2")},m(t,r){u(t,e,r),M(s,e,null),a(e,n),M(i,e,null),o=!0},p(t,[s]){const n={};1&s&&(n.isPaused=t[0].isPaused),i.$set(n),(!o||1&s&&r!==(r="app app--"+(t[0].isWorking?"working":"break")+" svelte-1ibxmd2"))&&h(e,"class",r)},i(t){o||(I(s.$$.fragment,t),I(i.$$.fragment,t),o=!0)},o(t){L(s.$$.fragment,t),L(i.$$.fragment,t),o=!1},d(t){t&&c(e),W(s),W(i)}}}function ut(t,e,s){let n;var i,r;return i=B,r=t=>s(0,n=t),t.$$.on_destroy.push(o(i,r)),[n]}return new class extends D{constructor(t){super(),A(this,t,ut,at,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
