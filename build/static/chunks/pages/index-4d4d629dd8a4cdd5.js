(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8566:function(e,t,n){"use strict";var r=n(1682),i=n(3848),o=n(3115);t.default=function(e){var t,n=e.src,o=e.sizes,u=e.unoptimized,d=void 0!==u&&u,f=e.priority,g=void 0!==f&&f,b=e.loading,v=e.lazyBoundary,x=void 0===v?"200px":v,w=e.className,j=e.quality,O=e.width,A=e.height,P=e.objectFit,M=e.objectPosition,E=e.onLoadingComplete,N=e.loader,C=void 0===N?_:N,z=e.placeholder,I=void 0===z?"empty":z,D=e.blurDataURL,R=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),q=o?"responsive":"intrinsic";"layout"in R&&(R.layout&&(q=R.layout),delete R.layout);var L="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(n)){var H=y(n)?n.default:n;if(!H.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(D=D||H.blurDataURL,L=H.src,(!q||"fill"!==q)&&(A=A||H.height,O=O||H.width,!H.height||!H.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)))}n="string"===typeof n?n:L;var W=k(O),B=k(A),T=k(j),U=!g&&("lazy"===b||"undefined"===typeof b);(n.startsWith("data:")||n.startsWith("blob:"))&&(d=!0,U=!1);h.has(n)&&(U=!1);0;var F,J=l.useIntersection({rootMargin:x,disabled:!U}),V=i(J,2),Q=V[0],X=V[1],$=!U||X,G={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K=!1,Y={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:M},ee="blur"===I?{filter:"blur(20px)",backgroundSize:P||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:M||"0% 0%"}:{};if("fill"===q)G.display="block",G.position="absolute",G.top=0,G.left=0,G.bottom=0,G.right=0;else if("undefined"!==typeof W&&"undefined"!==typeof B){var te=B/W,ne=isNaN(te)?"100%":"".concat(100*te,"%");"responsive"===q?(G.display="block",G.position="relative",K=!0,Z.paddingTop=ne):"intrinsic"===q?(G.display="inline-block",G.position="relative",G.maxWidth="100%",K=!0,Z.maxWidth="100%",F='<svg width="'.concat(W,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===q&&(G.display="inline-block",G.position="relative",G.width=W,G.height=B)}else 0;var re={src:m,srcSet:void 0,sizes:void 0};$&&(re=S({src:n,unoptimized:d,layout:q,width:W,quality:T,sizes:o,loader:C}));var ie=n;0;0;var oe=(r(t={},"imagesrcset",re.srcSet),r(t,"imagesizes",re.sizes),t);return a.default.createElement("span",{style:G},K?a.default.createElement("span",{style:Z},F?a.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(F))}):null):null,a.default.createElement("img",Object.assign({},R,re,{decoding:"async","data-nimg":q,className:w,ref:function(e){Q(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src!==m&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),h.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,ie,0,I,E)},style:p({},Y,ee)})),a.default.createElement("noscript",null,a.default.createElement("img",Object.assign({},R,S({src:n,unoptimized:d,layout:q,width:W,quality:T,sizes:o,loader:C}),{decoding:"async","data-nimg":q,style:Y,className:w,loading:b||"lazy"}))),g?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+re.src+re.srcSet+re.sizes,rel:"preload",as:"image",href:re.srcSet?void 0:re.src},oe))):null)};var a=f(n(7294)),s=f(n(2717)),c=n(3389),u=n(5809),l=n(639);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}var h=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(A(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(A(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(A(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,v=b.deviceSizes,x=b.imageSizes,w=b.loader,j=b.path,O=(b.domains,[].concat(o(v),o(x)));function S(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,s=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var s=.01*Math.min.apply(Math,a);return{widths:O.filter((function(e){return e>=v[0]*s})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return O.find((function(t){return t>=e}))||O[O.length-1]})))),kind:"x"}}(i,r,s),l=u.widths,d=u.kind,f=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((function(e,n){return"".concat(c({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({src:t,quality:a,width:l[f]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t=g.get(w);if(t)return t(p({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(w))}function A(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),O.sort((function(e,t){return e-t}))},639:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=i.useRef(),u=i.useState(!1),l=r(u,2),d=l[0],f=l[1],p=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return i.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[p,d]};var i=n(7294),o=n(6286),a="undefined"!==typeof IntersectionObserver;var s=new Map},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},o=n(8e3);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,a=void 0!==o&&o;return n||i&&a}},2717:function(e,t,n){"use strict";var r=n(1682);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(o=n(1585))&&o.__esModule?o:{default:o},c=n(8e3),u=n(5850),l=n(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var l=p[c];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=i.props[l],f=r[l]||new Set;"name"===l&&a||!f.has(d)?(f.add(d),r[l]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,n=a.useContext(c.AmpStateContext),r=a.useContext(u.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=m},1585:function(e,t,n){"use strict";var r=n(3115),i=n(2553),o=n(2012),a=(n(450),n(9807)),s=n(7690),c=n(9828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){a(n,e);var t=u(n);function n(e){var o;return i(this,n),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},3389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},7419:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});n(7294);var r=n(5893),i=function(){return(0,r.jsx)("div",{className:"text-center bg-gray-800",children:(0,r.jsx)(a,{})})},o=n(5675),a=function(){return(0,r.jsx)(o.default,{src:"/icons/nextjs-icon.svg",alt:"nextjs",width:"96",height:"58"})},s=function(){return(0,r.jsx)("div",{className:"text-center font-light py-5 bg-gray-700",children:(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)("h1",{className:"text-white text-8xl mb-2",children:"superplate"}),(0,r.jsx)("p",{className:"text-lg text-white mb-3",children:"The frontend boilerplate with superpowers!"}),(0,r.jsx)(p,{type:"button",children:(0,r.jsx)("a",{href:"https://pankod.github.io/superplate/",target:"_blank",children:"Docs"})})]})})},c=n(2809);function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=["className","children"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.className,n=void 0===t?"":t,i=e.children,o=u(e,l);return(0,r.jsx)("button",f(f({className:"py-2 px-4 rounded bg-green-500 hover:bg-green-600 focus:outline-none ring-opacity-75 ring-green-400 focus:ring text-white text-lg ".concat(n)},o),{},{children:i}))},h=JSON.parse('{"name":"nextjs","plugins":[{"name":"TailwindCSS","description":"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.","url":"https://tailwindcss.com/docs"},{"name":"SASS/SCSS","description":"Sass is a stylesheet language that\u2019s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax.","url":"https://sass-lang.com/documentation"},{"name":"next-i18next","description":"next-i18next is a plugin for Next.js projects that allows you to get translations up and running quickly and easily, while fully supporting SSR, multiple namespaces with codesplitting, etc.","url":"https://github.com/isaachinman/next-i18next"}]}'),m=function(){var e;return(0,r.jsx)("div",{className:"flex-1 container my-8 max-w-screen-lg mx-auto p-5",children:(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:(null!==(e=null===h||void 0===h?void 0:h.plugins)&&void 0!==e?e:[]).map((function(e){return(0,r.jsxs)("div",{className:"col-span-1 rounded-md border border-gray-300 p-5",children:[(0,r.jsx)("h2",{className:"text-xl font-semibold mb-2",children:e.name}),(0,r.jsx)("p",{className:"m-0",children:e.description})]},e.name)}))})})},g=function(){return(0,r.jsxs)("div",{className:"text-center py-5 bg-gray-800",children:[(0,r.jsx)("a",{href:"https://github.com/pankod",target:"_blank",className:"block mb-3",children:(0,r.jsx)(o.default,{src:"/icons/pankod-icon.svg",alt:"pankod",width:"140",height:"28"})}),(0,r.jsxs)("ul",{className:"flex justify-center list-none p-0 m-0",children:[(0,r.jsx)("li",{className:"mx-3",children:(0,r.jsx)(o.default,{src:"/icons/github-icon.svg",alt:"github",width:"28",height:"29"})}),(0,r.jsx)("li",{className:"mx-3",children:(0,r.jsx)(o.default,{src:"/icons/twitter-icon.svg",alt:"nextjs",width:"28",height:"28"})}),(0,r.jsx)("li",{className:"mx-3",children:(0,r.jsx)(o.default,{src:"/icons/youtube-icon.svg",alt:"youtube",width:"28",height:"29"})}),(0,r.jsx)("li",{className:"mx-3",children:(0,r.jsx)(o.default,{src:"/icons/linkedin-icon.svg",alt:"linkedin",width:"28",height:"32"})})]})]})},y=function(e){var t=e.children;return(0,r.jsx)("div",{className:"min-h-screen flex flex-col",children:t})},b=function(){return(0,r.jsxs)(y,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(s,{}),(0,r.jsx)(m,{}),(0,r.jsx)(g,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7419)}])},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,n){e.exports=n(8566)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3115:function(e,t,n){var r=n(8164),i=n(7381),o=n(3585),a=n(5725);e.exports=function(e){return r(e)||i(e)||o(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);