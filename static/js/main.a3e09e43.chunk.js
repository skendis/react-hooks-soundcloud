(window["webpackJsonpreact-soundcloud"]=window["webpackJsonpreact-soundcloud"]||[]).push([[0],{27:function(e,t,n){e.exports=n(57)},32:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c);n(32);var l=function(e){var t=e.result.url,n="https://w.soundcloud.com/player/?url=".concat(t,"&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");return t?a.a.createElement("div",null,a.a.createElement("iframe",{width:"100%",height:"300",scrolling:"no",title:"player",allow:"autoplay",src:n})):a.a.createElement("div",null)},i=n(2);var s=Object(i.b)(function(e){return{selectedResult:e.searchReducer.selectedResult}})(function(e){var t=e.selectedResult;return a.a.createElement("div",{className:"image-container flex justify-center align-center column"},a.a.createElement("img",{src:t.artwork,alt:""}),a.a.createElement(l,{result:t}))});var u=Object(i.b)(function(e){return{recentSearchTerms:e.searchReducer.recentSearchTerms}})(function(e){var t=e.recentSearchTerms.map(function(e,t){return a.a.createElement("li",{key:t},e)});return a.a.createElement("div",null,a.a.createElement("h1",null,"Recent Searches:"),a.a.createElement("ul",null,t.length?t:"none"))}),f=n(26),d={FETCH_SONGS:"FETCH_SONGS",SWITCH_TILE_VIEW:"SWITCH_TILE_VIEW",ADD_RECENT_SEARCH:"ADD_RECENT_SEARCH",SET_SELECTED_RESULT:"SET_SELECTED_RESULT"},p=n(6),h=n.n(p),E=n(11),m=n(22),v=n.n(m),w="ggX0UomnLs0VmW7qZnCzw",g="https://api.soundcloud.com",b=7,S={getSearchResults:function(e){return T.apply(this,arguments)}};function T(){return(T=Object(E.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("".concat(g,"/tracks?client_id=").concat(w,"&q=").concat(t,"&limit=").concat(b,"&linked_partitioning=1"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(e){return y.apply(this,arguments)}function y(){return(y=Object(E.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O=function(e){return{type:d.SET_SELECTED_RESULT,data:e}},R=function(e){return function(t){return S.getSearchResults(e).then(function(n){t({type:d.FETCH_SONGS,data:n}),t(function(e){return{type:d.ADD_RECENT_SEARCH,term:e}}(e))}).catch(function(e){throw e})}};var j=Object(i.b)()(function(e){var t=e.dispatch,n=Object(r.useState)(""),c=Object(f.a)(n,2),o=c[0],l=c[1];return a.a.createElement("div",{className:"search-bar"},a.a.createElement("input",{type:"text",className:"search-input",placeholder:"search",value:o,onChange:function(e){l(e.target.value)}}),a.a.createElement("button",{className:"primary-btn",onClick:function(){o&&t(R(o))}},"GO"))});var C=Object(i.b)(function(e){return{isTileView:e.searchReducer.isTileView}})(function(e){var t=e.result,n=e.isTileView,r=e.dispatch;return a.a.createElement("li",{className:"result-preview flex space-between",onClick:function(){r(O({url:t.uri,artwork:t.artwork_url}))}},a.a.createElement("p",null,t.title),n?a.a.createElement("img",{src:t.artwork_url,alt:""}):"")});var k=function(e){var t=e.results.map(function(e,t){return a.a.createElement(C,{result:e,key:t})});return a.a.createElement("ol",null,t.length?t:"none")};var D=Object(i.b)(function(e){return{searchResults:e.searchReducer.searchResults}})(function(e){var t=e.searchResults;return a.a.createElement("div",null,a.a.createElement(j,null),a.a.createElement(k,{results:t.collection?t.collection:[]}))});n(56);var N=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(D,null),a.a.createElement(s,null),a.a.createElement(u,null))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var W=n(4),H=n(25),I=n(23);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(I.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var V={recentSearchTerms:[],searchResults:{},isTileView:!0,selectedResult:{}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.FETCH_SONGS:return x({},e,{searchResults:t.data});case d.SWITCH_TILE_VIEW:return x({},e,{isTileView:t.value});case d.SET_SELECTED_RESULT:return x({},e,{selectedResult:t.data});case d.ADD_RECENT_SEARCH:return x({},e,{recentSearchTerms:[].concat(Object(H.a)(e.recentSearchTerms),[t.term])});default:return e}},G=Object(W.c)({searchReducer:U}),F=n(24),q=Object(W.d)(G,Object(W.a)(F.a));o.a.render(a.a.createElement(i.a,{store:q},a.a.createElement(N,null)),document.getElementById("root")),window.addEventListener("beforeinstallprompt",function(e){console.log("beforeinstallprompt event has fired"),e.prompt()}),function(e){if("serviceWorker"in navigator){if(new URL("/react-soundcloud-hooks-gpages",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-soundcloud-hooks-gpages","/service-worker.js");L?(!function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):A(t,e)})}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.a3e09e43.chunk.js.map