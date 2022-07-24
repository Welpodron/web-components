"use strict";(self.webpackChunkweb_components_docs=self.webpackChunkweb_components_docs||[]).push([[708],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=l,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const r={title:"\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c",sidebar_position:100,pagination_prev:null,pagination_next:null},o="welpodron.carousel",i={unversionedId:"javascript/javascript-components/welpodron-carousel",id:"javascript/javascript-components/welpodron-carousel",title:"\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c",description:"\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c",source:"@site/docs/javascript/javascript-components/welpodron-carousel.mdx",sourceDirName:"javascript/javascript-components",slug:"/javascript/javascript-components/welpodron-carousel",permalink:"/web-components/javascript/javascript-components/welpodron-carousel",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c",sidebar_position:100,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},u={},c=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 / \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430--\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 HTML",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0447\u0435\u0440\u0435\u0437-html",level:3},{value:"HTML \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b",id:"html-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b",level:2},{value:"carousel",id:"carousel",level:3},{value:"carousel.item",id:"carouselitem",level:3},{value:"carousel.control",id:"carouselcontrol",level:3}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"welpodroncarousel"},"welpodron.carousel"),(0,l.kt)("p",null,"\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c"),(0,l.kt)("div",{className:"container shadow--lw padding-vert--sm"},(0,l.kt)("button",{"data-action":"slide","data-carousel-id":"carousel_example","data-args":"0",type:"button",className:"button button--block button--secondary margin--sm"},(0,l.kt)("b",null,"(carousel.control)")," ",(0,l.kt)("b",null,"(slide)")," ",(0,l.kt)("b",null,"(0)")," \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 0"),(0,l.kt)("button",{"data-action":"slide","data-carousel-id":"carousel_example","data-args":"1",type:"button",className:"button button--block button--secondary margin--sm"},(0,l.kt)("b",null,"(carousel.control)")," ",(0,l.kt)("b",null,"(slide)")," ",(0,l.kt)("b",null,"(1)")," \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 1"),(0,l.kt)("button",{"data-action":"slide","data-carousel-id":"carousel_example","data-args":"2",type:"button",className:"button button--block button--secondary margin--sm"},(0,l.kt)("b",null,"(carousel.control)")," ",(0,l.kt)("b",null,"(slide)")," ",(0,l.kt)("b",null,"(2)")," \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 2"),(0,l.kt)("div",{id:"carousel_example","data-carousel":!0},(0,l.kt)("div",{"data-active":!0,"data-carousel-item":!0},(0,l.kt)("p",null,(0,l.kt)("b",null,"(carousel.item)"),". \u0414\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440: ",(0,l.kt)("b",null,"0"),". \u042d\u0442\u043e \u043d\u0435\u043a\u0438\u0439 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,l.kt)("b",null,"(carousel)"),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0441\u043a\u0440\u044b\u0442. \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0435\u043c\u0443 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,l.kt)("b",null,"(data-active)")," \u0442\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 ",(0,l.kt)("b",null,"(data-action)")," \u0443"," ",(0,l.kt)("b",null,"(carousel.control)"),": ",(0,l.kt)("b",null,"(slide)")," \u0441 ",(0,l.kt)("b",null,"(args)")," \u0440\u0430\u0432\u043d\u044b\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438.")),(0,l.kt)("div",{"data-carousel-item":!0},(0,l.kt)("p",null,(0,l.kt)("b",null,"(carousel.item)"),". \u0414\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440: ",(0,l.kt)("b",null,"1"),". \u042d\u0442\u043e \u043d\u0435\u043a\u0438\u0439 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,l.kt)("b",null,"(carousel)"),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0441\u043a\u0440\u044b\u0442. \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0435\u043c\u0443 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,l.kt)("b",null,"(data-active)")," \u0442\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 ",(0,l.kt)("b",null,"(data-action)")," \u0443"," ",(0,l.kt)("b",null,"(carousel.control)"),": ",(0,l.kt)("b",null,"(slide)")," \u0441 ",(0,l.kt)("b",null,"(args)")," \u0440\u0430\u0432\u043d\u044b\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438.")),(0,l.kt)("div",{"data-carousel-item":!0},(0,l.kt)("p",null,(0,l.kt)("b",null,"(carousel.item)"),". \u0414\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440: ",(0,l.kt)("b",null,"2"),". \u042d\u0442\u043e \u043d\u0435\u043a\u0438\u0439 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,l.kt)("b",null,"(carousel)"),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0441\u043a\u0440\u044b\u0442. \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0435\u043c\u0443 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,l.kt)("b",null,"(data-active)")," \u0442\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 ",(0,l.kt)("b",null,"(data-action)")," \u0443"," ",(0,l.kt)("b",null,"(carousel.control)"),": ",(0,l.kt)("b",null,"(slide)")," \u0441 ",(0,l.kt)("b",null,"(args)")," \u0440\u0430\u0432\u043d\u044b\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438."))),(0,l.kt)("button",{"data-action":"slide","data-carousel-id":"carousel_example","data-args":"prev",type:"button",className:"button button--block button--secondary margin--sm"},(0,l.kt)("b",null,"(carousel.control)")," ",(0,l.kt)("b",null,"(slide)")," ",(0,l.kt)("b",null,"(prev)")," \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 (\u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d\u043e)"),(0,l.kt)("button",{"data-action":"slide","data-carousel-id":"carousel_example","data-args":"next",type:"button",className:"button button--block button--secondary margin--sm"},(0,l.kt)("b",null,"(carousel.control)")," ",(0,l.kt)("b",null,"(slide)")," ",(0,l.kt)("b",null,"(next)")," \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 (\u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d\u043e)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<button\n  data-action="slide"\n  data-carousel-id="carousel_example"\n  data-args="0"\n  type="button"\n>\n  <b>(carousel.control)</b> <b>(slide)</b> <b>(0)</b> \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 0\n</button>\n<button\n  data-action="slide"\n  data-carousel-id="carousel_example"\n  data-args="1"\n  type="button"\n>\n  <b>(carousel.control)</b> <b>(slide)</b> <b>(1)</b> \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 1\n</button>\n<button\n  data-action="slide"\n  data-carousel-id="carousel_example"\n  data-args="2"\n  type="button"\n>\n  <b>(carousel.control)</b> <b>(slide)</b> <b>(2)</b> \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 2\n</button>\n<div id="carousel_example" data-carousel>\n  <div data-active data-carousel-item>\n    <p>\n      <b>(carousel.item)</b>. \u0414\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440: <b>0</b>.\n      \u042d\u0442\u043e \u043d\u0435\u043a\u0438\u0439 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u0433\u043e\n      \u0432\u043d\u0443\u0442\u0440\u0438 <b>(carousel)</b>. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0441\u043a\u0440\u044b\u0442. \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0435\u043c\u0443 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c\n      \u0430\u0442\u0440\u0438\u0431\u0443\u0442 <b>(data-active)</b> \u0442\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\n      \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 <b>(data-action)</b> \u0443\n      <b>(carousel.control)</b>: <b>(slide)</b> \u0441 <b>(args)</b> \u0440\u0430\u0432\u043d\u044b\u043c\n      \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438.\n    </p>\n  </div>\n  <div data-carousel-item>\n    <p>\n      <b>(carousel.item)</b>. \u0414\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440: <b>1</b>.\n      \u042d\u0442\u043e \u043d\u0435\u043a\u0438\u0439 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u0433\u043e\n      \u0432\u043d\u0443\u0442\u0440\u0438 <b>(carousel)</b>. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0441\u043a\u0440\u044b\u0442. \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0435\u043c\u0443 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c\n      \u0430\u0442\u0440\u0438\u0431\u0443\u0442 <b>(data-active)</b> \u0442\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\n      \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 <b>(data-action)</b> \u0443\n      <b>(carousel.control)</b>: <b>(slide)</b> \u0441 <b>(args)</b> \u0440\u0430\u0432\u043d\u044b\u043c\n      \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438.\n    </p>\n  </div>\n  <div data-carousel-item>\n    <p>\n      <b>(carousel.item)</b>. \u0414\u0430\u043d\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440: <b>2</b>.\n      \u042d\u0442\u043e \u043d\u0435\u043a\u0438\u0439 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u0433\u043e\n      \u0432\u043d\u0443\u0442\u0440\u0438 <b>(carousel)</b>. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u043d \u0441\u043a\u0440\u044b\u0442. \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0435\u043c\u0443 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c\n      \u0430\u0442\u0440\u0438\u0431\u0443\u0442 <b>(data-active)</b> \u0442\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\n      \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 <b>(data-action)</b> \u0443\n      <b>(carousel.control)</b>: <b>(slide)</b> \u0441 <b>(args)</b> \u0440\u0430\u0432\u043d\u044b\u043c\n      \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438.\n    </p>\n  </div>\n</div>\n<button\n  data-action="slide"\n  data-carousel-id="carousel_example"\n  data-args="prev"\n  type="button"\n>\n  <b>(carousel.control)</b> <b>(slide)</b> <b>(prev)</b> \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439\n  \u044d\u043b\u0435\u043c\u0435\u043d\u0442 (\u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d\u043e)\n</button>\n<button\n  data-action="slide"\n  data-carousel-id="carousel_example"\n  data-args="next"\n  type="button"\n>\n  <b>(carousel.control)</b> <b>(slide)</b> <b>(next)</b> \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439\n  \u044d\u043b\u0435\u043c\u0435\u043d\u0442 (\u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d\u043e)\n</button>\n')),(0,l.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430--\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 / \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,l.kt)("p",null,"\u0421\u043f\u0438\u0441\u043e\u043a PHP \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"welpodron.core")),(0,l.kt)("p",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"/javascript/javascript-modules/welpodron-animation"},"welpodron.animation"))),(0,l.kt)("admonition",{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u041f\u0435\u0440\u0435\u0434 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0434\u043b\u044f \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u044b!")),(0,l.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 ",(0,l.kt)("a",{href:"/javascript/intro#\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439")),(0,l.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0447\u0435\u0440\u0435\u0437-html"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 HTML"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="html"',title:'"html"'},'<div id="carousel_example" data-carousel>\n  \u042d\u0442\u043e carousel ...\n  <div [data-active] data-carousel-item>\u042d\u0442\u043e 0 carousel.item ...</div>\n  <div [data-active] data-carousel-item>\u042d\u0442\u043e 1 carousel.item ...</div>\n  ...\n  <div [data-active] data-carousel-item>\u042d\u0442\u043e {N} carousel.item ...</div>\n  ...\n</div>\n...\n<div\n  data-carousel-id="carousel_example"\n  data-action="slide"\n  data-args="[prev] [next] [0-{N}]"\n>\n  \u042d\u0442\u043e carousel.control \u0434\u043b\u044f carousel.item \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0432 data-args ...\n</div>\n...\n')),(0,l.kt)("h2",{id:"html-\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b"},"HTML \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b"),(0,l.kt)("h3",{id:"carousel"},"carousel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",(0,l.kt)("inlineCode",{parentName:"li"},"id"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439")," \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430")),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d: ",(0,l.kt)("strong",{parentName:"li"},"\u0414\u0430")))),(0,l.kt)("li",{parentName:"ul"},"\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",(0,l.kt)("inlineCode",{parentName:"li"},"data-carousel"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",(0,l.kt)("em",{parentName:"li"},"\u0423\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430")),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d: ",(0,l.kt)("strong",{parentName:"li"},"\u0414\u0430"))))),(0,l.kt)("h3",{id:"carouselitem"},"carousel.item"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0420\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"strong"},"carousel"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",(0,l.kt)("inlineCode",{parentName:"li"},"data-carousel-item"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",(0,l.kt)("em",{parentName:"li"},"\u0423\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u043a \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 ",(0,l.kt)("inlineCode",{parentName:"em"},"carousel"))),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d: ",(0,l.kt)("strong",{parentName:"li"},"\u0414\u0430","*"))))),(0,l.kt)("p",null,"*"," - \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"data-carousel-item")," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d, \u0442\u0435\u0433, \u043b\u0435\u0436\u0430\u0449\u0438\u0439 \u0432\u043d\u0443\u0442\u0440\u0438 \u0442\u0435\u0433\u0430 \u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"carousel"),", \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"carousel")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",(0,l.kt)("inlineCode",{parentName:"li"},"data-active"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",(0,l.kt)("em",{parentName:"li"},"\u0423\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430")),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d: \u041d\u0435\u0442","*","*")))),(0,l.kt)("p",null,"*","*"," - \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"data-active")," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d \u043d\u0438 \u043e\u0434\u043d\u043e\u043c\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"data-carousel-item")," - \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u0441\u0442\u0430\u043d\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"data-carousel-item"),", \u043b\u0435\u0436\u0430\u0449\u0438\u0439 \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"carousel")),(0,l.kt)("h3",{id:"carouselcontrol"},"carousel.control"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",(0,l.kt)("inlineCode",{parentName:"li"},"data-carousel-id"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",(0,l.kt)("em",{parentName:"li"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 carousel")),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d: ",(0,l.kt)("strong",{parentName:"li"},"\u0414\u0430")),(0,l.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," \u0443 ",(0,l.kt)("inlineCode",{parentName:"li"},"carousel")))),(0,l.kt)("li",{parentName:"ul"},"\u0410\u0442\u0440\u0438\u0431\u0443\u0442: ",(0,l.kt)("inlineCode",{parentName:"li"},"data-action"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",(0,l.kt)("em",{parentName:"li"},"\u042d\u043a\u0448\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430")),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d: ",(0,l.kt)("strong",{parentName:"li"},"\u0414\u0430")),(0,l.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"slide"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",(0,l.kt)("em",{parentName:"li"},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u044e\u0449\u0438\u0439 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0432 ",(0,l.kt)("inlineCode",{parentName:"em"},"data-args"))),(0,l.kt)("li",{parentName:"ul"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"data-args"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prev")," - \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 ",(0,l.kt)("inlineCode",{parentName:"li"},"carousel.item")," \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c\u0443 ",(0,l.kt)("inlineCode",{parentName:"li"},"carousel.item")," (\u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d \u043e\u0442 \u043a\u043e\u043d\u0446\u0430 \u043a \u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u0430 \u043a \u043a\u043e\u043d\u0446\u0443)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"next")," - \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 ",(0,l.kt)("inlineCode",{parentName:"li"},"carousel.item")," \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c\u0443 ",(0,l.kt)("inlineCode",{parentName:"li"},"carousel.item")," (\u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0437\u0430\u0446\u0438\u043a\u043b\u0435\u043d \u043e\u0442 \u043a\u043e\u043d\u0446\u0430 \u043a \u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u0430 \u043a \u043a\u043e\u043d\u0446\u0443)"),(0,l.kt)("li",{parentName:"ul"},"\u041b\u044e\u0431\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0442 ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u0434\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"{N}"),", \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u044e\u0449\u0435\u0435 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"carousel.item")," (\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),")")))))))))))}d.isMDXComponent=!0}}]);