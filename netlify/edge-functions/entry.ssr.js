import{j as o,a as te,b as se,F as E,s as re,c as M,i as J,u as oe,d as ie,e as j,f as Q,R as ae,S as ce,Q as le}from"./assets/@qwik-city-plan-b3930cc8.js";/**
 * @license
 * @builder.io/qwik/server 0.18.1
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */if(typeof global>"u"){const e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{};e.global=e}var de=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function k(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function U(e){let n=e.base;return typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}function ue(e,n){const t=n==null?void 0:n.mapper,r=e.symbolMapper?e.symbolMapper:i=>{if(t){const a=B(i),c=t[a];return c||console.error("Cannot resolve symbol",i,"in",t),c}};return{isServer:!0,async importSymbol(i,a,c){let d=String(a);d.endsWith(".js")||(d+=".js");const v=de(d);if(!(c in v))throw new Error(`Q-ERROR: missing symbol '${c}' in module '${d}'.`);return v[c]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return r(i,t)}}}async function me(e,n){const t=ue(e,n);re(t)}var B=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e},pe='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},a=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===a(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const r="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===r));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const d=a(t,r);if(d){const o=t.closest("[q\\\\:container]"),s=new URL(a(o,"q:base"),e.baseURI);for(const r of d.split("\\n")){const a=new URL(r,s),c=a.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),d=import(a.href.split("#")[0]);l(o);const p=b(await d,c),w=e[n];if(t.isConnected)try{e[n]=[t,i,a],u("qsymbol",{symbol:c,element:t,reqTime:f}),await p(i,t)}finally{e[n]=w}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,d(e.type))},q=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,u("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>u("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},v=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)i.has(n)||(v(e,n,p,!0),v(o,n,w),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},v(e,"readystatechange",q),q()}})(document);',fe=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = findSymbol(await module, symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,ye='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},a=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===a(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const r="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===r));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const d=a(t,r);if(d){const o=t.closest("[q\\\\:container]"),s=new URL(a(o,"q:base"),e.baseURI);for(const r of d.split("\\n")){const a=new URL(r,s),c=a.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),d=import(a.href.split("#")[0]);l(o);const p=b(await d,c),w=e[n];if(t.isConnected)try{e[n]=[t,i,a],u("qsymbol",{symbol:c,element:t,reqTime:f}),await p(i,t)}finally{e[n]=w}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,d(e.type))},q=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,u("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>u("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},v=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)i.has(n)||(v(e,n,p,!0),v(o,n,w),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},v(e,"readystatechange",q),q()}})(document);',be=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = findSymbol(await module, symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function ve(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?be:ye).replace("window.qEvents",JSON.stringify(e.events)):e.debug?fe:pe}function he(e,n,t){if(!t)return[];const r=n.prefetchStrategy,s=U(n);if(r!==null){if(!r||!r.symbolsToPrefetch||r.symbolsToPrefetch==="auto")return _e(e,t,s);if(typeof r.symbolsToPrefetch=="function")try{return r.symbolsToPrefetch({manifest:t.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function _e(e,n,t){const r=[],s=e==null?void 0:e.qrls,{mapper:i,manifest:a}=n,c=new Set;if(Array.isArray(s))for(const d of s){const v=d.getHash(),m=i[v];m&&V(a,c,r,t,m[1])}return r}function V(e,n,t,r,s){const i=r+s;if(!n.has(i)){n.add(i);const a=e.bundles[s];if(a){const c={url:i,imports:[]};if(t.push(c),Array.isArray(a.imports))for(const d of a.imports)V(e,n,c.imports,r,d)}}}var q=globalThis.qDev===!0,G={};q&&(Object.freeze(G),Error.stackTraceLimit=9999);["click","dblclick","contextmenu","auxclick","pointerdown","pointerup","pointermove","pointerover","pointerenter","pointerleave","pointerout","pointercancel","gotpointercapture","lostpointercapture","touchstart","touchend","touchmove","touchcancel","mousedown","mouseup","mousemove","mouseenter","mouseleave","mouseover","mouseout","wheel","gesturestart","gesturechange","gestureend","keydown","keyup","keypress","input","change","search","invalid","beforeinput","select","focusin","focusout","focus","blur","submit","reset","scroll"].map(e=>`on${e.toLowerCase()}$`);["useTask$","useBrowserVisibleTask$","useEffect$","component$","useStyles$","useStylesScoped$"].map(e=>e.toLowerCase());function qe(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function I(){let s=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return s+="w.postMessage(u.map(u=>new URL(u,origin)+''));",s+="w.onmessage=()=>{w.terminate()};",s}function ge(e){const n={bundles:g(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function g(e){const n=[],t=r=>{if(Array.isArray(r))for(const s of r)n.includes(s.url)||(n.push(s.url),t(s.imports))};return t(e),n}function we(e,n){const t=Ee(e==null?void 0:e.implementation),r=[];return t.prefetchEvent==="always"&&xe(r,n),t.linkInsert==="html-append"&&je(r,n,t),t.linkInsert==="js-append"?ke(r,n,t):t.workerFetchInsert==="always"&&Ie(r,n),r.length>0?o(E,{children:r}):null}function xe(e,n){e.push(o("script",{type:"module",dangerouslySetInnerHTML:ge(n)}))}function je(e,n,t){const r=g(n),s=t.linkRel||"prefetch";for(const i of r){const a={};a.href=i,a.rel=s,(s==="prefetch"||s==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(o("link",a,void 0))}}function ke(e,n,t){const r=t.linkRel||"prefetch";let s="";t.workerFetchInsert==="no-link-support"&&(s+="let supportsLinkRel = true;"),s+=`const u=${JSON.stringify(g(n))};`,s+="u.map((u,i)=>{",s+="const l=document.createElement('link');",s+='l.setAttribute("href",u);',s+=`l.setAttribute("rel","${r}");`,t.workerFetchInsert==="no-link-support"&&(s+="if(i===0){",s+="try{",s+=`supportsLinkRel=l.relList.supports("${r}");`,s+="}catch(e){}",s+="}"),s+="document.body.appendChild(l);",s+="});",t.workerFetchInsert==="no-link-support"&&(s+="if(!supportsLinkRel){",s+=I(),s+="}"),t.workerFetchInsert==="always"&&(s+=I()),e.push(o("script",{type:"module",dangerouslySetInnerHTML:s}))}function Ie(e,n){let t=`const u=${JSON.stringify(g(n))};`;t+=I(),e.push(o("script",{type:"module",dangerouslySetInnerHTML:t}))}function Ee(e){if(typeof e=="string"){switch(e){case"link-prefetch-html":return b(e,"linkInsert"),{linkInsert:"html-append",linkRel:"prefetch",workerFetchInsert:null,prefetchEvent:null};case"link-prefetch":return b(e,"linkInsert"),{linkInsert:"js-append",linkRel:"prefetch",workerFetchInsert:"no-link-support",prefetchEvent:null};case"link-preload-html":return b(e,"linkInsert"),{linkInsert:"html-append",linkRel:"preload",workerFetchInsert:null,prefetchEvent:null};case"link-preload":return b(e,"linkInsert"),{linkInsert:"js-append",linkRel:"preload",workerFetchInsert:"no-link-support",prefetchEvent:null};case"link-modulepreload-html":return b(e,"linkInsert"),{linkInsert:"html-append",linkRel:"modulepreload",workerFetchInsert:null,prefetchEvent:null};case"link-modulepreload":return b(e,"linkInsert"),{linkInsert:"js-append",linkRel:"modulepreload",workerFetchInsert:"no-link-support",prefetchEvent:null}}return b(e,"workerFetchInsert"),{linkInsert:null,linkRel:null,workerFetchInsert:"always",prefetchEvent:null}}return e&&typeof e=="object"?e:Ne}var Ne={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"};function b(e,n){console.warn(`The Prefetch Strategy Implementation "${e}" has been deprecated and will be removed in an upcoming release. Please update to use the "prefetchStrategy.implementation.${n}" interface.`)}var Se=e=>e&&typeof e.nodeType=="number",Ce=e=>e.nodeType===1,Le=q?"background: #564CE0; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;":"",Te=(e,...n)=>{const t=e instanceof Error?e:ze(e),r=t.stack||t.message;return console.error("%cQWIK ERROR",Le,r,...Re(n)),t},ze=e=>new Error(e),Ae=(e,...n)=>{const t=Te(e,...n);debugger;return t},Fe=e=>e._qc_,Re=e=>q?e.map(n=>Se(n)&&Ce(n)?$e(n):n):e,$e=e=>{var r;const n=Fe(e),t=(()=>typeof process<"u"&&!!process.versions&&!!process.versions.node)();return{tagName:e.tagName,renderQRL:(r=n==null?void 0:n.$componentQrl$)==null?void 0:r.getSymbol(),element:t?void 0:e,ctx:t?void 0:n}};function Oe(e,n,...t){if(q){if(e!=null)return;throw Ae(n,...t)}}var Ye="<!DOCTYPE html>";async function Pe(e,n){var R;n=Me(n);let t=n.stream,r=0,s=0,i=0,a=0;const c=((R=n.streaming)==null?void 0:R.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},d=n.containerTagName??"html",v=n.containerAttributes??{};let m="";const N=t,W=k();function S(){m&&(N.write(m),m="",r=0,i++,i===1&&(a=W()))}function C(l){r+=l.length,s+=l.length,m+=l}switch(c.strategy){case"disabled":t={write:C};break;case"direct":t=N;break;case"auto":let l=0,y=!1;const w=c.maximunChunk??0,x=c.maximunInitialChunk??0;t={write(h){h==="<!--qkssr-f-->"?y||(y=!0):h==="<!--qkssr-pu-->"?l++:h==="<!--qkssr-po-->"?l--:C(h),l===0&&(y||r>=(i===0?x:w))&&(y=!1,S())}};break}d==="html"?t.write(Ye):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build.");const H=U(n),p=De(n.manifest);await me(n,p);let f;const L=p==null?void 0:p.manifest.injections,X=L?L.map(l=>o(l.tag,l.attributes??G)):void 0,Z=k(),T=[];let z=0,A=0,F=!1;await te(e,{stream:t,containerTagName:d,containerAttributes:v,serverData:n.serverData??n.envData,base:H,beforeContent:X,beforeClose:async(l,y,w)=>{var P,D;z=Z();const x=k();F=w,f=await se(l,y);const h=JSON.stringify(f.state,void 0,q?"  ":void 0),_=[o("script",{type:"qwik/json",dangerouslySetInnerHTML:Ke(h)})];if(n.prefetchStrategy!==null){const u=he(f,n,p);if(u.length>0){const K=we(n.prefetchStrategy,u);K&&_.push(K)}}const ne=!f||f.mode!=="static",$=((P=n.qwikLoader)==null?void 0:P.include)??"auto",O=$==="always"||$==="auto"&&ne;if(O){const u=ve({events:(D=n.qwikLoader)==null?void 0:D.events,debug:n.debug});_.push(o("script",{id:"qwikloader",dangerouslySetInnerHTML:u}))}const Y=Array.from(y.$events$,u=>JSON.stringify(u));if(Y.length>0){let u=`window.qwikevents.push(${Y.join(", ")})`;O||(u=`window.qwikevents||=[];${u}`),_.push(o("script",{dangerouslySetInnerHTML:u}))}return Qe(T,l),A=x(),o(E,{children:_})}}),d!=="html"&&t.write("<!--/cq-->"),S(),Oe(f,"snapshotResult must be defined");const ee=F||f.resources.some(l=>l._cache!==1/0);return{prefetchResources:void 0,snapshotResult:f,flushes:i,manifest:p==null?void 0:p.manifest,size:s,isStatic:!ee,timing:{render:z,snapshot:A,firstFlush:a},_symbols:T}}function De(e){if(e){if("mapper"in e)return e;if(e=qe(e),e){const n={};return Object.entries(e.mapping).forEach(([t,r])=>{n[B(t)]=[t,r]}),{mapper:n,manifest:e}}}}var Ke=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Qe(e,n){var t;for(const r of n){const s=(t=r.$componentQrl$)==null?void 0:t.getSymbol();s&&!e.includes(s)&&e.push(s)}}function Me(e){const n={...e};return e&&typeof e.base=="function"&&(n.base=e.base(n)),n}const Je={symbols:{s_kzjavhDI3L0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onClick",canonicalFilename:"s_kzjavhdi3l0",hash:"kzjavhDI3L0",ctxKind:"event",ctxName:"onClick$",captures:!0,parent:"s_8gdLBszqbaM"},s_oQOS6GJhGvI:{origin:"components/footer/footer.tsx",displayName:"footer_component_footer_div_button_onClick",canonicalFilename:"s_oqos6gjhgvi",hash:"oQOS6GJhGvI",ctxKind:"event",ctxName:"onClick$",captures:!0,parent:"s_3lb9EjxI5sA"},s_vweLumYmz1M:{origin:"routes/about/index.tsx",displayName:"about_component_div_div_div_p_button_onClick",canonicalFilename:"s_vwelumymz1m",hash:"vweLumYmz1M",ctxKind:"event",ctxName:"onClick$",captures:!0,parent:"s_9IgPNJsxq0g"},s_yiXwCC0m3jY:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onMouseOver",canonicalFilename:"s_yixwcc0m3jy",hash:"yiXwCC0m3jY",ctxKind:"event",ctxName:"onMouseOver$",captures:!1,parent:"s_8gdLBszqbaM"},s_dznIGAlrcag:{origin:"routes/flower/index.tsx",displayName:"flower_component__Fragment_input_onInput",canonicalFilename:"s_dznigalrcag",hash:"dznIGAlrcag",ctxKind:"event",ctxName:"onInput$",captures:!0,parent:"s_OW4nu0I1yZ8"},s_PrXIxv2vNXY:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onFocus",canonicalFilename:"s_prxixv2vnxy",hash:"PrXIxv2vNXY",ctxKind:"event",ctxName:"onFocus$",captures:!1,parent:"s_8gdLBszqbaM"},s_EpaZ5qQ4Lg4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_a_onQVisible",canonicalFilename:"s_epaz5qq4lg4",hash:"EpaZ5qQ4Lg4",ctxKind:"event",ctxName:"onQVisible$",captures:!1,parent:"s_8gdLBszqbaM"},s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag"},s_09lNIH0zjIQ:{origin:"routes/articles/[title]/index.tsx",displayName:"_title__component",canonicalFilename:"s_09lnih0zjiq",hash:"09lNIH0zjIQ",ctxKind:"function",ctxName:"component$",captures:!1},s_3lb9EjxI5sA:{origin:"components/footer/footer.tsx",displayName:"footer_component",canonicalFilename:"s_3lb9ejxi5sa",hash:"3lb9EjxI5sA",ctxKind:"function",ctxName:"component$",captures:!1},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1},s_6STeQ80R2KQ:{origin:"routes/store/index.tsx",displayName:"store_component",canonicalFilename:"s_6steq80r2kq",hash:"6STeQ80R2KQ",ctxKind:"function",ctxName:"component$",captures:!1},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1},s_9IgPNJsxq0g:{origin:"routes/about/index.tsx",displayName:"about_component",canonicalFilename:"s_9igpnjsxq0g",hash:"9IgPNJsxq0g",ctxKind:"function",ctxName:"component$",captures:!1},s_AKetNByE5TM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_aketnbye5tm",hash:"AKetNByE5TM",ctxKind:"function",ctxName:"component$",captures:!1},s_GiJ02h11k2o:{origin:"routes/articles/index.tsx",displayName:"articles_component",canonicalFilename:"s_gij02h11k2o",hash:"GiJ02h11k2o",ctxKind:"function",ctxName:"component$",captures:!1},s_OW4nu0I1yZ8:{origin:"routes/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_ow4nu0i1yz8",hash:"OW4nu0I1yZ8",ctxKind:"function",ctxName:"component$",captures:!1},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1},s_ceU05TscGYE:{origin:"components/header/header.tsx",displayName:"header_component",canonicalFilename:"s_ceu05tscgye",hash:"ceU05TscGYE",ctxKind:"function",ctxName:"component$",captures:!1},s_tsVulGJuuSY:{origin:"routes/projects/index.tsx",displayName:"projects_component",canonicalFilename:"s_tsvulgjuusy",hash:"tsVulGJuuSY",ctxKind:"function",ctxName:"component$",captures:!1},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1},s_BaeWcGitn20:{origin:"components/footer/footer.tsx",displayName:"footer_component_useStylesScoped",canonicalFilename:"s_baewcgitn20",hash:"BaeWcGitn20",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_3lb9EjxI5sA"},s_N39ca0w8E8Y:{origin:"components/header/header.tsx",displayName:"header_component_useStylesScoped",canonicalFilename:"s_n39ca0w8e8y",hash:"N39ca0w8E8Y",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_ceU05TscGYE"},s_gIYpv0JPs1w:{origin:"routes/about/index.tsx",displayName:"about_component_useStylesScoped",canonicalFilename:"s_giypv0jps1w",hash:"gIYpv0JPs1w",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_9IgPNJsxq0g"},s_p4UiTwsJc7c:{origin:"routes/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_p4uitwsjc7c",hash:"p4UiTwsJc7c",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_OW4nu0I1yZ8"},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI"},s_V0Y6u0VD1eY:{origin:"routes/flower/index.tsx",displayName:"flower_component_useClientEffect",canonicalFilename:"s_v0y6u0vd1ey",hash:"V0Y6u0VD1eY",ctxKind:"function",ctxName:"useClientEffect$",captures:!0,parent:"s_OW4nu0I1yZ8"},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag"},s_u0YVoxt2aTY:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_useOnDocument",canonicalFilename:"s_u0yvoxt2aty",hash:"u0YVoxt2aTY",ctxKind:"function",ctxName:"useOnDocument",captures:!1,parent:"s_8gdLBszqbaM"}},mapping:{s_kzjavhDI3L0:"q-0fce02ce.js",s_oQOS6GJhGvI:"q-98a849f2.js",s_vweLumYmz1M:"q-4100a033.js",s_yiXwCC0m3jY:"q-0fce02ce.js",s_dznIGAlrcag:"q-40266e35.js",s_PrXIxv2vNXY:"q-0fce02ce.js",s_EpaZ5qQ4Lg4:"q-0fce02ce.js",s_02wMImzEAbk:"q-edada80a.js",s_09lNIH0zjIQ:"q-0483e2d9.js",s_3lb9EjxI5sA:"q-98a849f2.js",s_3sccYCDd1Z0:"q-cb4315c2.js",s_6STeQ80R2KQ:"q-341dfba6.js",s_8gdLBszqbaM:"q-0fce02ce.js",s_9IgPNJsxq0g:"q-4100a033.js",s_AKetNByE5TM:"q-abfcc476.js",s_GiJ02h11k2o:"q-8aaaafbc.js",s_OW4nu0I1yZ8:"q-40266e35.js",s_TxCFOy819ag:"q-edada80a.js",s_VkLNXphUh5s:"q-71caaab0.js",s_WmYC5H00wtI:"q-afd0b05c.js",s_ceU05TscGYE:"q-c5ccdefc.js",s_tsVulGJuuSY:"q-b127309b.js",s_xYL1qOwPyDI:"q-850ef693.js",s_zrbrqoaqXSY:"q-4ded717d.js",s_BaeWcGitn20:"q-98a849f2.js",s_N39ca0w8E8Y:"q-c5ccdefc.js",s_gIYpv0JPs1w:"q-4100a033.js",s_p4UiTwsJc7c:"q-40266e35.js",s_BUbtvTyvVRE:"q-afd0b05c.js",s_V0Y6u0VD1eY:"q-40266e35.js",s_fX0bDjeJa0E:"q-edada80a.js",s_u0YVoxt2aTY:"q-0fce02ce.js"},bundles:{"q-045e19e3.js":{size:236,imports:["q-8b30ed31.js"],dynamicImports:["q-b127309b.js"],origins:["src/routes/projects/index.tsx"]},"q-0483e2d9.js":{size:294,imports:["q-8b30ed31.js","q-cb4315c2.js"],origins:["src/entry__title_.js","src/s_09lnih0zjiq.js"],symbols:["s_09lNIH0zjIQ"]},"q-0841a919.js":{size:236,imports:["q-8b30ed31.js"],dynamicImports:["q-4100a033.js"],origins:["src/routes/about/index.tsx"]},"q-0fce02ce.js":{size:1242,imports:["q-8b30ed31.js","q-cb4315c2.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_epaz5qq4lg4.js","src/s_kzjavhdi3l0.js","src/s_prxixv2vnxy.js","src/s_u0yvoxt2aty.js","src/s_yixwcc0m3jy.js"],symbols:["s_8gdLBszqbaM","s_EpaZ5qQ4Lg4","s_kzjavhDI3L0","s_PrXIxv2vNXY","s_u0YVoxt2aTY","s_yiXwCC0m3jY"]},"q-1b9d4af1.js":{size:207,imports:["q-8b30ed31.js"],dynamicImports:["q-0483e2d9.js"],origins:["src/routes/articles/[title]/index.tsx"]},"q-32555845.js":{size:58,imports:["q-8b30ed31.js"]},"q-341dfba6.js":{size:114,imports:["q-8b30ed31.js"],origins:["src/entry_store.js","src/s_6steq80r2kq.js"],symbols:["s_6STeQ80R2KQ"]},"q-40266e35.js":{size:2405,imports:["q-8b30ed31.js","q-cb4315c2.js"],origins:["src/entry_flower.js","src/routes/flower/flower.css?used&inline","src/s_dznigalrcag.js","src/s_ow4nu0i1yz8.js","src/s_p4uitwsjc7c.js","src/s_v0y6u0vd1ey.js"],symbols:["s_dznIGAlrcag","s_OW4nu0I1yZ8","s_p4UiTwsJc7c","s_V0Y6u0VD1eY"]},"q-4100a033.js":{size:3091,imports:["q-8b30ed31.js"],origins:["src/entry_about.js","src/routes/about/about.css?used&inline","src/s_9igpnjsxq0g.js","src/s_giypv0jps1w.js","src/s_vwelumymz1m.js"],symbols:["s_9IgPNJsxq0g","s_gIYpv0JPs1w","s_vweLumYmz1M"]},"q-4ded717d.js":{size:1075,imports:["q-8b30ed31.js","q-cb4315c2.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-5db2207a.js":{size:207,imports:["q-8b30ed31.js"],dynamicImports:["q-8aaaafbc.js"],origins:["src/routes/articles/index.tsx"]},"q-71caaab0.js":{size:537,imports:["q-8b30ed31.js"],dynamicImports:["q-98a849f2.js","q-c5ccdefc.js"],origins:["src/components/footer/footer.tsx","src/components/header/header.tsx","src/entry_layout.js","src/s_vklnxphuh5s.js"],symbols:["s_VkLNXphUh5s"]},"q-7a845742.js":{size:225,imports:["q-8b30ed31.js"],dynamicImports:["q-850ef693.js"],origins:["src/routes/index.tsx"]},"q-850ef693.js":{size:5724,imports:["q-8b30ed31.js"],origins:["src/components/icons/github.tsx","src/components/icons/gitlab.tsx","src/components/icons/instagram.tsx","src/components/icons/linkedin.tsx","src/components/icons/twitter.tsx","src/entry_routes.js","src/s_xyl1qowpydi.js"],symbols:["s_xYL1qOwPyDI"]},"q-8aaaafbc.js":{size:360,imports:["q-8b30ed31.js","q-cb4315c2.js"],origins:["src/entry_articles.js","src/s_gij02h11k2o.js"],symbols:["s_GiJ02h11k2o"]},"q-8b30ed31.js":{size:45829,dynamicImports:["q-cb4315c2.js"],origins:["\0vite/preload-helper","node_modules/@builder.io/qwik/core.min.mjs","src/global.css","src/root.tsx"]},"q-98a849f2.js":{size:4041,imports:["q-8b30ed31.js","q-cb4315c2.js"],origins:["src/components/footer/footer.css?used&inline","src/components/icons/qwik.tsx","src/entry_footer.js","src/s_3lb9ejxi5sa.js","src/s_baewcgitn20.js","src/s_oqos6gjhgvi.js"],symbols:["s_3lb9EjxI5sA","s_BaeWcGitn20","s_oQOS6GJhGvI"]},"q-9d466d35.js":{size:241,imports:["q-8b30ed31.js"],dynamicImports:["q-40266e35.js"],origins:["src/routes/flower/index.tsx"]},"q-a759497e.js":{size:185,imports:["q-8b30ed31.js"],dynamicImports:["q-71caaab0.js"],origins:["src/routes/layout.tsx"]},"q-abfcc476.js":{size:308,imports:["q-8b30ed31.js","q-cb4315c2.js"],origins:["src/entry_RouterOutlet.js","src/s_aketnbye5tm.js"],symbols:["s_AKetNByE5TM"]},"q-afd0b05c.js":{size:728,imports:["q-8b30ed31.js","q-cb4315c2.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-b127309b.js":{size:426,imports:["q-8b30ed31.js"],origins:["src/entry_projects.js","src/s_tsvulgjuusy.js"],symbols:["s_tsVulGJuuSY"]},"q-c5ccdefc.js":{size:1509,imports:["q-8b30ed31.js","q-cb4315c2.js"],origins:["src/components/header/header.css?used&inline","src/entry_header.js","src/s_ceu05tscgye.js","src/s_n39ca0w8e8y.js"],symbols:["s_ceU05TscGYE","s_N39ca0w8E8Y"]},"q-cb4315c2.js":{size:5764,imports:["q-8b30ed31.js"],dynamicImports:["q-0fce02ce.js","q-4ded717d.js","q-abfcc476.js","q-afd0b05c.js","q-edada80a.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs","src/components/router-head/router-head.tsx","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-edada80a.js":{size:3053,imports:["q-8b30ed31.js","q-cb4315c2.js"],dynamicImports:["q-045e19e3.js","q-0841a919.js","q-1b9d4af1.js","q-5db2207a.js","q-7a845742.js","q-9d466d35.js","q-a759497e.js","q-f66f5086.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_TxCFOy819ag"]},"q-f66f5086.js":{size:225,imports:["q-8b30ed31.js"],dynamicImports:["q-341dfba6.js"],origins:["src/routes/store/index.tsx"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-90ff4157.css",dangerouslySetInnerHTML:`:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2;--qwik-light-background: #edf1f8;--qwik-dark-background: #08070b}*{box-sizing:border-box}html{height:100%;max-width:1200px;margin:0 auto}body{background-color:var(--qwik-light-background);font-family:Poppins,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;margin:0;padding:0}.dark-mode{background-color:var(--qwik-dark-background);color:#8f9ba8}.wrapper{display:grid;min-height:100vh;grid-template-rows:1fr auto}main{padding:0 .5em}.wrapper2{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.container2{max-width:500px;margin-top:20vh;margin-bottom:20vh}.container2 .section-1{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:20px}.container2 .section-1 .avatar img{width:125px;border-radius:50%;border:.5px solid #e2e2e2;box-shadow:0 0 5px #00000026}.container2 .section-1 .text{margin-top:10px;text-align:center}.container2 .section-1 .text .name{line-height:1;font-size:22px;margin-bottom:10px}.container2 .section-1 .text .description{color:#999}.container2 .section-2{position:relative;padding-top:17px}.container2 .section-2 .links{display:flex;justify-content:center}.container2 .section-2 .links>:not(:last-child){margin-right:15px}.container2 .section-2:before{content:" ";width:calc(100% + 30px);height:0;left:-15px;top:0;position:absolute;border-top:1px solid #ccc}header a{text-decoration:none}header nav li{border-radius:10px}header nav a{color:#555;padding:0 .5em;text-decoration:none;text-transform:uppercase;transition:all .5s ease}header nav a:hover{background-color:#ddd}header nav li a.active span{color:#000;border-bottom:1px solid #000}
`}}],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"0.18.1",vite:"",rollup:"3.17.1",env:"node",os:"linux",node:"18.14.1"}},Ue=M(J(()=>{const e=oe(),n=ie();return o(E,{children:[o("title",{children:j(e,"title")}),o("link",{rel:"canonical",get href(){return n.href},[Q]:{href:j(n,"href")}}),o("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),o("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),o("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),o("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),o("link",{href:"https://fonts.googleapis.com/css2?family=Epilogue:wght@900&family=Poppins&display=swap",rel:"stylesheet"}),o("meta",{property:"og:site_name",content:"Qwik"}),o("meta",{name:"twitter:site",content:"@QwikDev"}),o("meta",{name:"twitter:title",content:"Qwik"}),e.meta.map(t=>o("meta",{...t},"OA_0")),e.links.map(t=>o("link",{...t},"OA_1")),e.styles.map(t=>o("style",{...t.props,get dangerouslySetInnerHTML(){return t.style},[Q]:{dangerouslySetInnerHTML:j(t,"style")}},"OA_2"))]},"OA_3")},"s_zrbrqoaqXSY"));const Be=M(J(()=>o(le,{children:[o("head",{children:[o("meta",{charSet:"utf-8"}),o(Ue,{},"35_0")]}),o("body",{lang:"en",class:"",children:[o(ae,{},"35_1"),o(ce,{},"35_2")]})]},"35_3"),"s_3sccYCDd1Z0"));function We(e){return Pe(o(Be,{},"pY_0"),{manifest:Je,...e,prefetchStrategy:{implementation:{linkInsert:null,workerFetchInsert:null,prefetchEvent:"always"}}})}export{We as default};
