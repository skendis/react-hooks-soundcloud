(window["webpackJsonpreact-soundcloud"]=window["webpackJsonpreact-soundcloud"]||[]).push([[0],{27:function(e,t,r){e.exports=r(57)},32:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(7),l=r.n(c);r(32);var u=function(e){var t=e.result.url,r="https://w.soundcloud.com/player/?url=".concat(t,"&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true");return t?a.a.createElement("div",{className:"hide-below"},a.a.createElement("iframe",{width:"100%",height:"300",scrolling:"no",title:"player",allow:"autoplay",src:r})):a.a.createElement("div",null)},s=r(2);var o=Object(s.b)(function(e){return{selectedResult:e.searchReducer.selectedResult}})(function(e){var t=e.selectedResult;return a.a.createElement("div",{className:"image-container flex justify-center align-center column"},a.a.createElement("div",{className:"art-work"},a.a.createElement("img",{src:t.artwork,alt:""}),a.a.createElement(u,{result:t})))});var i=Object(s.b)(function(e){return{recentSearchTerms:e.searchReducer.recentSearchTerms}})(function(e){var t=e.recentSearchTerms.map(function(e,t){return a.a.createElement("li",{key:t},e)});return a.a.createElement("div",{className:"recent-container"},a.a.createElement("h1",null,"Recent Searches:"),a.a.createElement("ul",{className:"clean-list"},t.length?t:"none"))}),E=r(26),m={FETCH_SONGS:"FETCH_SONGS",SWITCH_TILE_VIEW:"SWITCH_TILE_VIEW",ADD_RECENT_SEARCH:"ADD_RECENT_SEARCH",SET_SELECTED_RESULT:"SET_SELECTED_RESULT"},p=r(6),h=r.n(p),f=r(11),d=r(22),v=r.n(d),w="ggX0UomnLs0VmW7qZnCzw",b="https://api.soundcloud.com",S=7,T={getSearchResults:function(e){return _.apply(this,arguments)}};function _(){return(_=Object(f.a)(h.a.mark(function e(t){var r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(b,"/tracks?client_id=").concat(w,"&q=").concat(t,"&limit=").concat(S,"&linked_partitioning=1"));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(h.a.mark(function e(t){var r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var y=function(e){return{type:m.SET_SELECTED_RESULT,data:e}},R=function(e){return function(t){return T.getSearchResults(e).then(function(r){t({type:m.FETCH_SONGS,data:r}),t(function(e){return{type:m.ADD_RECENT_SEARCH,term:e}}(e))}).catch(function(e){throw e})}};var j=Object(s.b)()(function(e){var t=e.dispatch,r=Object(n.useState)(""),c=Object(E.a)(r,2),l=c[0],u=c[1];return a.a.createElement("div",{className:"search-bar"},a.a.createElement("input",{type:"text",className:"search-input",placeholder:"search",value:l,onChange:function(e){u(e.target.value)}}),a.a.createElement("button",{className:"primary-btn",onClick:function(){l&&t(R(l))}},"GO"))});var C=Object(s.b)(function(e){return{isTileView:e.searchReducer.isTileView}})(function(e){var t=e.result,r=e.isTileView,n=e.dispatch;return a.a.createElement("li",{className:"result-preview flex space-between align-center",onClick:function(){n(y({url:t.uri,artwork:t.artwork_url}))}},a.a.createElement("p",null,t.title),r?a.a.createElement("img",{src:t.artwork_url,alt:""}):"")});var k=function(e){var t=e.results.map(function(e,t){return a.a.createElement(C,{result:e,key:t})});return a.a.createElement("ul",null,t.length?t:"")};var N=Object(s.b)(function(e){return{searchResults:e.searchReducer.searchResults}})(function(e){var t=e.searchResults;return a.a.createElement("div",null,a.a.createElement(j,null),a.a.createElement(k,{results:t.collection?t.collection:[]}))});r(56);var D=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(N,null),a.a.createElement(o,null),a.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=r(4),H=r(25),I=r(23);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach(function(t){Object(I.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var W={recentSearchTerms:[],searchResults:{},isTileView:!0,selectedResult:{}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.FETCH_SONGS:return V({},e,{searchResults:t.data});case m.SWITCH_TILE_VIEW:return V({},e,{isTileView:t.value});case m.SET_SELECTED_RESULT:return V({},e,{selectedResult:t.data});case m.ADD_RECENT_SEARCH:return V({},e,{recentSearchTerms:[].concat(Object(H.a)(e.recentSearchTerms),[t.term])});default:return e}},P=Object(L.c)({searchReducer:x}),G=r(24),U=Object(L.d)(P,Object(L.a)(G.a));l.a.render(a.a.createElement(s.a,{store:U},a.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.4eaa71e4.chunk.js.map