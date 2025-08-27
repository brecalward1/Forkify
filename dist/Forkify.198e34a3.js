var e,t,r,n,i,o,a,s,c,l,u,d,p,h,f,v=globalThis,g={},m={},y=function(e){return e&&e.Math===Math&&e};m=y("object"==typeof globalThis&&globalThis)||y("object"==typeof window&&window)||y("object"==typeof self&&self)||y("object"==typeof v&&v)||y("object"==typeof m&&m)||function(){return this}()||Function("return this")();var w={},b={};w=!(b=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var _={},k={};k=!b(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var E=Function.prototype.call;_=k?E.bind(E):function(){return E.apply(E,arguments)};var S={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;r=x&&!S.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:S;var j={};j=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var L={},M={},O={},A=Function.prototype,$=A.call,P=k&&A.bind.bind($,$),H={},T=(O=k?P:function(e){return function(){return $.apply(e,arguments)}})({}.toString),C=O("".slice);H=function(e){return C(T(e),8,-1)};var D=Object,Z=O("".split);M=b(function(){return!D("z").propertyIsEnumerable(0)})?function(e){return"String"===H(e)?Z(e,""):D(e)}:D;var F={},N={};N=function(e){return null==e};var q=TypeError;F=function(e){if(N(e))throw new q("Can't call method on "+e);return e},L=function(e){return M(F(e))};var B={},I={},R={},W={},z="object"==typeof document&&document.all;W=void 0===z&&void 0!==z?function(e){return"function"==typeof e||e===z}:function(e){return"function"==typeof e},R=function(e){return"object"==typeof e?null!==e:W(e)};var U={},V={};V=function(e,t){var r;return arguments.length<2?(r=m[e],W(r)?r:void 0):m[e]&&m[e][t]};var G={};G=O({}.isPrototypeOf);var J={},Y={},Q={},K={},X=m.navigator,ee=X&&X.userAgent;K=ee?String(ee):"";var et=m.process,er=m.Deno,en=et&&et.versions||er&&er.version,ei=en&&en.v8;ei&&(i=(n=ei.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&K&&(!(n=K.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=K.match(/Chrome\/(\d+)/))&&(i=+n[1]),Q=i;var eo=m.String;J=(Y=!!Object.getOwnPropertySymbols&&!b(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Q&&Q<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ea=Object;U=J?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return W(t)&&G(t.prototype,ea(e))};var es={},ec={},el={},eu=String;el=function(e){try{return eu(e)}catch(e){return"Object"}};var ed=TypeError;ec=function(e){if(W(e))return e;throw new ed(el(e)+" is not a function")},es=function(e,t){var r=e[t];return N(r)?void 0:ec(r)};var ep={},eh=TypeError;ep=function(e,t){var r,n;if("string"===t&&W(r=e.toString)&&!R(n=_(r,e))||W(r=e.valueOf)&&!R(n=_(r,e))||"string"!==t&&W(r=e.toString)&&!R(n=_(r,e)))return n;throw new eh("Can't convert object to primitive value")};var ef={},ev={},eg={};eg=!1;var em={},ey=Object.defineProperty;em=function(e,t){try{ey(m,e,{value:t,configurable:!0,writable:!0})}catch(r){m[e]=t}return t};var ew="__core-js_shared__",eb=ev=m[ew]||em(ew,{});(eb.versions||(eb.versions=[])).push({version:"3.45.0",mode:eg?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.45.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ef=function(e,t){return ev[e]||(ev[e]=t||{})};var e_={},ek={},eE=Object;ek=function(e){return eE(F(e))};var eS=O({}.hasOwnProperty);e_=Object.hasOwn||function(e,t){return eS(ek(e),t)};var ex={},ej=0,eL=Math.random(),eM=O(1.1.toString);ex=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eM(++ej+eL,36)};var eO=m.Symbol,eA=ef("wks"),e$=J?eO.for||eO:eO&&eO.withoutSetter||ex,eP=TypeError,eH=function(e){return e_(eA,e)||(eA[e]=Y&&e_(eO,e)?eO[e]:e$("Symbol."+e)),eA[e]}("toPrimitive");I=function(e,t){if(!R(e)||U(e))return e;var r,n=es(e,eH);if(n){if(void 0===t&&(t="default"),r=_(n,e,t),!R(r)||U(r))return r;throw new eP("Can't convert object to primitive value")}return void 0===t&&(t="number"),ep(e,t)},B=function(e){var t=I(e,"string");return U(t)?t:t+""};var eT={},eC={},eD=m.document,eZ=R(eD)&&R(eD.createElement);eC=function(e){return eZ?eD.createElement(e):{}},eT=!w&&!b(function(){return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});var eF=Object.getOwnPropertyDescriptor;t=w?eF:function(e,t){if(e=L(e),t=B(t),eT)try{return eF(e,t)}catch(e){}if(e_(e,t))return j(!_(r,e,t),e[t])};var eN={},eq={};eq=w&&b(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eI=String,eR=TypeError;eB=function(e){if(R(e))return e;throw new eR(eI(e)+" is not an object")};var eW=TypeError,ez=Object.defineProperty,eU=Object.getOwnPropertyDescriptor,eV="enumerable",eG="configurable",eJ="writable";o=w?eq?function(e,t,r){if(eB(e),t=B(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eJ in r&&!r[eJ]){var n=eU(e,t);n&&n[eJ]&&(e[t]=r.value,r={configurable:eG in r?r[eG]:n[eG],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return ez(e,t,r)}:ez:function(e,t,r){if(eB(e),t=B(t),eB(r),eT)try{return ez(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eW("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eN=w?function(e,t,r){return o(e,t,j(1,r))}:function(e,t,r){return e[t]=r,e};var eY={},eQ={},eK=Function.prototype,eX=w&&Object.getOwnPropertyDescriptor,e0=e_(eK,"name"),e1=e0&&(!w||w&&eX(eK,"name").configurable),e2={},e3=O(Function.toString);W(ev.inspectSource)||(ev.inspectSource=function(e){return e3(e)}),e2=ev.inspectSource;var e8={},e5={},e6=m.WeakMap;e5=W(e6)&&/native code/.test(String(e6));var e7={},e4=ef("keys");e7=function(e){return e4[e]||(e4[e]=ex(e))};var e9={};e9={};var te="Object already initialized",tt=m.TypeError,tr=m.WeakMap;if(e5||ev.state){var tn=ev.state||(ev.state=new tr);tn.get=tn.get,tn.has=tn.has,tn.set=tn.set,a=function(e,t){if(tn.has(e))throw new tt(te);return t.facade=e,tn.set(e,t),t},s=function(e){return tn.get(e)||{}},c=function(e){return tn.has(e)}}else{var ti=e7("state");e9[ti]=!0,a=function(e,t){if(e_(e,ti))throw new tt(te);return t.facade=e,eN(e,ti,t),t},s=function(e){return e_(e,ti)?e[ti]:{}},c=function(e){return e_(e,ti)}}var to=(e8={set:a,get:s,has:c,enforce:function(e){return c(e)?s(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!R(t)||(r=s(t)).type!==e)throw new tt("Incompatible receiver, "+e+" required");return r}}}).enforce,ta=e8.get,ts=String,tc=Object.defineProperty,tl=O("".slice),tu=O("".replace),td=O([].join),tp=w&&!b(function(){return 8!==tc(function(){},"length",{value:8}).length}),th=String(String).split("String"),tf=eQ=function(e,t,r){"Symbol("===tl(ts(t),0,7)&&(t="["+tu(ts(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e_(e,"name")||e1&&e.name!==t)&&(w?tc(e,"name",{value:t,configurable:!0}):e.name=t),tp&&r&&e_(r,"arity")&&e.length!==r.arity&&tc(e,"length",{value:r.arity});try{r&&e_(r,"constructor")&&r.constructor?w&&tc(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=to(e);return e_(n,"source")||(n.source=td(th,"string"==typeof t?t:"")),e};Function.prototype.toString=tf(function(){return W(this)&&ta(this).source||e2(this)},"toString"),eY=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(W(r)&&eQ(r,a,n),n.global)i?e[t]=r:em(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tv={},tg={},tm={},ty={},tw={},tb={},t_=Math.ceil,tk=Math.floor;tb=Math.trunc||function(e){var t=+e;return(t>0?tk:t_)(t)},tw=function(e){var t=+e;return t!=t||0===t?0:tb(t)};var tE=Math.max,tS=Math.min;ty=function(e,t){var r=tw(e);return r<0?tE(r+t,0):tS(r,t)};var tx={},tj={},tL=Math.min;tj=function(e){var t=tw(e);return t>0?tL(t,0x1fffffffffffff):0},tx=function(e){return tj(e.length)};var tM=function(e){return function(t,r,n){var i,o=L(t),a=tx(o);if(0===a)return!e&&-1;var s=ty(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tO={includes:tM(!0),indexOf:tM(!1)}.indexOf,tA=O([].push);tm=function(e,t){var r,n=L(e),i=0,o=[];for(r in n)!e_(e9,r)&&e_(n,r)&&tA(o,r);for(;t.length>i;)e_(n,r=t[i++])&&(~tO(o,r)||tA(o,r));return o};var t$=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tm(e,t$)},u=Object.getOwnPropertySymbols;var tP=O([].concat);tg=V("Reflect","ownKeys")||function(e){var t=l(eB(e));return u?tP(t,u(e)):t},tv=function(e,r,n){for(var i=tg(r),a=0;a<i.length;a++){var s=i[a];e_(e,s)||n&&e_(n,s)||o(e,s,t(r,s))}};var tH={},tT=/#|\.prototype\./,tC=function(e,t){var r=tZ[tD(e)];return r===tN||r!==tF&&(W(t)?b(t):!!t)},tD=tC.normalize=function(e){return String(e).replace(tT,".").toLowerCase()},tZ=tC.data={},tF=tC.NATIVE="N",tN=tC.POLYFILL="P";tH=tC,g=function(e,r){var n,i,o,a,s,c=e.target,l=e.global,u=e.stat;if(n=l?m:u?m[c]||em(c,{}):m[c]&&m[c].prototype)for(i in r){if(a=r[i],o=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tH(l?i:c+(u?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tv(a,o)}(e.sham||o&&o.sham)&&eN(a,"sham",!0),eY(n,i,a,e)}};var tq={},tB={},tI=Function.prototype,tR=tI.apply,tW=tI.call;tB="object"==typeof Reflect&&Reflect.apply||(k?tW.bind(tR):function(){return tW.apply(tR,arguments)});var tz={},tU={},tV=(tU=function(e){if("Function"===H(e))return O(e)})(tU.bind);tz=function(e,t){return ec(e),void 0===t?e:k?tV(e,t):function(){return e.apply(t,arguments)}};var tG={};tG=V("document","documentElement");var tJ={};tJ=O([].slice);var tY={},tQ=TypeError;tY=function(e,t){if(e<t)throw new tQ("Not enough arguments");return e};var tK={};tK=/(?:ipad|iphone|ipod).*applewebkit/i.test(K);var tX={},t0={},t1=function(e){return K.slice(0,e.length)===e};tX="NODE"===(t0=t1("Bun/")?"BUN":t1("Cloudflare-Workers")?"CLOUDFLARE":t1("Deno/")?"DENO":t1("Node.js/")?"NODE":m.Bun&&"string"==typeof Bun.version?"BUN":m.Deno&&"object"==typeof Deno.version?"DENO":"process"===H(m.process)?"NODE":m.window&&m.document?"BROWSER":"REST");var t2=m.setImmediate,t3=m.clearImmediate,t8=m.process,t5=m.Dispatch,t6=m.Function,t7=m.MessageChannel,t4=m.String,t9=0,re={},rt="onreadystatechange";b(function(){d=m.location});var rr=function(e){if(e_(re,e)){var t=re[e];delete re[e],t()}},rn=function(e){return function(){rr(e)}},ri=function(e){rr(e.data)},ro=function(e){m.postMessage(t4(e),d.protocol+"//"+d.host)};t2&&t3||(t2=function(e){tY(arguments.length,1);var t=W(e)?e:t6(e),r=tJ(arguments,1);return re[++t9]=function(){tB(t,void 0,r)},p(t9),t9},t3=function(e){delete re[e]},tX?p=function(e){t8.nextTick(rn(e))}:t5&&t5.now?p=function(e){t5.now(rn(e))}:t7&&!tK?(f=(h=new t7).port2,h.port1.onmessage=ri,p=tz(f.postMessage,f)):m.addEventListener&&W(m.postMessage)&&!m.importScripts&&d&&"file:"!==d.protocol&&!b(ro)?(p=ro,m.addEventListener("message",ri,!1)):p=rt in eC("script")?function(e){tG.appendChild(eC("script"))[rt]=function(){tG.removeChild(this),rr(e)}}:function(e){setTimeout(rn(e),0)});var ra=(tq={set:t2,clear:t3}).clear;g({global:!0,bind:!0,enumerable:!0,forced:m.clearImmediate!==ra},{clearImmediate:ra});var rs=tq.set,rc={},rl=m.Function,ru=/MSIE .\./.test(K)||"BUN"===t0&&((e=m.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rc=function(e,t){var r=t?2:1;return ru?function(n,i){var o=tY(arguments.length,1)>r,a=W(n)?n:rl(n),s=o?tJ(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rd=m.setImmediate?rc(rs,!1):rs;g({global:!0,bind:!0,enumerable:!0,forced:m.setImmediate!==rd},{setImmediate:rd});var rp=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,o){var a,s,c,l,u=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(u,"_invoke",{value:(a=e,s=n,c=new L(o||[]),l=p,function(e,r){if(l===h)throw Error("Generator is already running");if(l===f){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?v:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(n,c);if(i){if(i===v)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(l===p)throw l=f,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);l=h;var o=d(a,s,c);if("normal"===o.type){if(l=c.done?f:"suspendedYield",o.arg===v)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(l=f,c.method="throw",c.arg=o.arg)}})}),u}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var p="suspendedStart",h="executing",f="completed",v={};function g(){}function m(){}function y(){}var w={};l(w,a,function(){return this});var b=Object.getPrototypeOf,_=b&&b(b(M([])));_&&_!==r&&n.call(_,a)&&(w=_);var k=y.prototype=g.prototype=Object.create(w);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(u).then(function(e){l.value=e,a(l)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function M(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),l(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),l(k,c,"Generator"),l(k,a,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=M,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(l){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rp}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rp:Function("r","regeneratorRuntime = r")(rp)}const rh="https://forkify-api.jonas.io/api/v2/recipes/",rf="85127e51-cae8-4768-b41c-6b06da2c38d7",rv=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw console.log(e),e}},rg={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rm=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}};async function ry(e){console.log("\uD83E\uDDEA loadRecipe called with ID:",e);try{let t=await rv(`${rh}${e}?key=${rf}`);rg.recipe=rm(t),console.log(rg.recipe),rg.bookmarks.some(t=>t.id===e)?rg.recipe.bookmarked=!0:rg.recipe.bookmarked=!1}catch(e){throw console.error(`${e}\u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}}const rw=async function(e){try{rg.search.query=e;let t=await rv(`${rh}?search=${e}&key=${rf}`);console.log(t),rg.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rg.search.page=1}catch(e){throw console.error(`${e}\u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rb=function(e=rg.search.page){rg.search.page=e;let t=(e-1)*rg.search.resultsPerPage;return rg.search.results.slice(t,10*e)},r_=function(e){rg.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rg.recipe.servings}),rg.recipe.servings=e},rk=function(){localStorage.setItem("bookmarks",JSON.stringify(rg.bookmarks))},rE=function(e){rg.bookmarks.push(e),e.id===rg.recipe.id&&(rg.recipe.bookmarked=!0),rk()},rS=function(e){let t=rg.bookmarks.findIndex(t=>t.id===e);rg.bookmarks.splice(t,1),e===rg.recipe.id&&(rg.recipe.bookmarked=!1),rk()},rx=localStorage.getItem("bookmarks");rx&&(rg.bookmarks=JSON.parse(rx));const rj=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);let n=await rv(`${rh}?key=${rf}`,r);rg.recipe=rm(n),rE(rg.recipe)}catch(e){throw e}};class rL{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path></svg>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
          <p>${e}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
          <div>
            <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                        />
                      </svg>
          </div>
          <p>${e}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rM extends rL{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
            <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
            <h1 class="recipe__title">
              <span>${this._data.title}</span>
            </h1>
          </figure>

          <div class="recipe__details">
            <div class="recipe__info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>

              <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
              <span class="recipe__info-text">servings</span>

              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </button>
                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                  </button>
                </div>
              </div>

              <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                  <path
                    d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                  ></path>
                </svg>
              </div>
        
              <button class="btn--round btn--bookmark">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z${this._data.bookmarked?"":"m0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"}"></path></svg>
                
              </button>
            </div>
          </div>

          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}

          
            </ul>
          </div>

          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${this._data.publisher}</span>. Please
              check out directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${this._data.sourceUrl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
    `}_generateMarkupIngredient(e){return`
                  <li class="recipe__ingredient">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="recipe__icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>
                      <div class="recipe__description">
                        <span class="recipe__unit">${e.unit}</span>
                        ${e.description}
                      </div>
                  </li>
                `}}var rO=new rM,rA=new class extends rL{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
          <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  >
                  <path
                  d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                  ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `}};class r$ extends rL{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again;)";_message="";_generateMarkup(){return console.log(this._data),this._data.map(e=>rA.render(e,!1)).join("")}}var rP=new r$;class rH extends rL{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");console.log(r),r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(t),1===e&&t>1)?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
      <span>Page ${e-1}</span>
      </button>
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
      </button>
        `:""}}var rT=new rH;class rC{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rD=new rC;class rZ extends rL{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks et. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map(e=>rA.render(e,!1)).join("")}}var rF=new rZ;class rN extends rL{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rq=new rN;const rB=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rO.renderSpinner(),rP.update(rb()),rF.update(rg.bookmarks),await ry(e),rO.render(rg.recipe)}catch(e){rO.renderError()}},rI=async function(){try{rP.renderSpinner();let e=rD.getQuery();if(!e)return;await rw(e),rP._clear(),rP.render(rb(1)),rT.render(rg.search)}catch(e){console.log(e)}},rR=async function(e){try{rq.renderSpinner(),await rj(e),console.log(rg.recipe),rO.render(rg.recipe),rq.renderMessage(),rF.render(rg.bookmarks),window.history.pushState(null,"",`#${rg.recipe.id}`),setTimeout(function(){rq.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5\uD83D\uDCA5\uD83D\uDCA5",e),rq.renderError(e.message)}};rF.addHandlerRender(function(){rF.render(rg.bookmarks)}),rO.addHandlerRender(rB),rO.addHandlerUpdateServings(function(e){r_(e),rO.update(rg.recipe)}),rO.addHandlerAddBookmark(function(){rg.recipe.bookmarked?rS(rg.recipe.id):rE(rg.recipe),rO.update(rg.recipe),rF.render(rg.bookmarks)}),rD.addHandlerSearch(rI),rT.addHandlerClick(function(e){rP.render(rb(e)),rT.render(rg.search)}),rq.addHandlerUpload(rR);
//# sourceMappingURL=Forkify.198e34a3.js.map
