"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[687],{6487:function(n,r,t){t.d(r,{Df:function(){return i},M1:function(){return f},TP:function(){return o},XT:function(){return s},tx:function(){return p}});var e=t(5861),a=t(7757),u=t.n(a),c=t(1044);c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("trending/movie/day",{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:r.signal});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.userQuery,e=r.controller,n.next=3,c.ZP.get("search/movie?query=".concat(t),{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.movieId,e=r.controller,n.next=3,c.ZP.get("/movie/".concat(t),{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.movieId,e=r.controller,n.next=3,c.ZP.get("/movie/".concat(t,"/credits"),{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.movieId,e=r.controller,n.next=3,c.ZP.get("/movie/".concat(t,"/reviews"),{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},8058:function(n,r,t){t.d(r,{Z:function(){return o}});var e,a=t(1087),u=t(7689),c=t(168),i=t(6444).ZP.li(e||(e=(0,c.Z)(["\n  padding: 4px 0;\n"]))),s=t(184),o=function(n){var r=n.movies,t=(0,u.TH)();return(0,s.jsx)("ul",{children:r.map((function(n){return(0,s.jsx)(i,{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.original_title})},n.id)}))})}},3687:function(n,r,t){t.r(r),t.d(r,{default:function(){return p}});var e=t(5861),a=t(885),u=t(7757),c=t.n(u),i=t(2791),s=t(6487),o=t(8058),f=t(184),p=function(){var n=(0,i.useState)([]),r=(0,a.Z)(n,2),t=r[0],u=r[1];return(0,i.useEffect)((function(){var n=new AbortController;function r(){return(r=(0,e.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Df)(n);case 3:t=r.sent,0!==(e=t.results).length&&u(e),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){n.abort()}}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),0!==t.length&&(0,f.jsx)(o.Z,{movies:t})]})}}}]);
//# sourceMappingURL=687.65704e22.chunk.js.map