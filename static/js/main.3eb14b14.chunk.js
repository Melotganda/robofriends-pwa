(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2),i=t.n(o),c=t(8),s=t(5),a=t(13),l=t(12),h=(t(25),t(3)),u=t(4),d=t(7),b=t(6),f="CHANGE_SEARCHFIELD",j="REQUEST_ROBOTS_PENDING",p="REQUEST_ROBOTS_SUCCESS",g="REQUEST_ROBOTS_FAILED",v=function(){return function(e){var n;e({type:j}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:p,payload:n})})).catch((function(n){return e({type:g,payload:n})}))}},O=t(1),w=function(e){var n=e.name,t=e.email,r=e.id;return Object(O.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(O.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:n}),Object(O.jsx)("p",{children:t})]})]})},m=function(e){var n=e.robots;return Object(O.jsx)("div",{children:n.map((function(e,t){return Object(O.jsx)(w,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},y=function(e){e.searchfield;var n=e.searchChange;return Object(O.jsx)("div",{className:"pa2",children:Object(O.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},x=function(e){return Object(O.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},k=function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(e){var r;return Object(h.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(u.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(O.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(r.Component),E=(t(27),function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,r=e.onSearchChange,o=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(O.jsxs)("div",{className:"tc",children:[Object(O.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(O.jsx)(y,{searchChange:r}),Object(O.jsx)(x,{children:o?Object(O.jsx)("h1",{children:"Loading"}):Object(O.jsx)(k,{children:Object(O.jsx)(m,{robots:i})})})]})}}]),t}(r.Component)),R=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:f,payload:t}));var t},onRequestRobots:function(){return e(v())}}}))(E),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N={searchField:""},P={robots:[],isPending:!0},F=(t(28),Object(l.createLogger)()),L=Object(c.b)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case j:return Object.assign({},e,{isPending:!0});case p:return Object.assign({},e,{robots:n.payload,isPending:!1});case g:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type===f?Object.assign({},e,{searchField:n.payload}):e}}),T=Object(c.c)(L,Object(c.a)(a.a,F));i.a.render(Object(O.jsx)(s.a,{store:T,children:Object(O.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends-pwa","/service-worker.js");S?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):C(n,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.3eb14b14.chunk.js.map