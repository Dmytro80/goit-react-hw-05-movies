"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[261],{6487:function(r,n,t){t.d(n,{Df:function(){return o},M1:function(){return f},TP:function(){return s},XT:function(){return i},tx:function(){return p}});var e=t(5861),a=t(7757),c=t.n(a),u=t(1044);u.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var r=(0,e.Z)(c().mark((function r(n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.ZP.get("trending/movie/day",{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:n.signal});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(c().mark((function r(n){var t,e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.userQuery,e=n.controller,r.next=3,u.ZP.get("search/movie?query=".concat(t),{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:e.signal});case 3:return a=r.sent,r.abrupt("return",a.data);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),s=function(){var r=(0,e.Z)(c().mark((function r(n){var t,e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.movieId,e=n.controller,r.next=3,u.ZP.get("/movie/".concat(t),{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:e.signal});case 3:return a=r.sent,r.abrupt("return",a.data);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(c().mark((function r(n){var t,e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.movieId,e=n.controller,r.next=3,u.ZP.get("/movie/".concat(t,"/credits"),{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:e.signal});case 3:return a=r.sent,r.abrupt("return",a.data);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(c().mark((function r(n){var t,e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.movieId,e=n.controller,r.next=3,u.ZP.get("/movie/".concat(t,"/reviews"),{params:{api_key:"6f46b11c91adf322aba101aff37aa78d"},signal:e.signal});case 3:return a=r.sent,r.abrupt("return",a.data);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},9261:function(r,n,t){t.r(n),t.d(n,{default:function(){return b}});var e,a,c,u=t(5861),o=t(885),i=t(7757),s=t.n(i),f=t(6487),p=t(7689),l=t(2791),d=t(168),m=t(6444),v=m.ZP.ul(e||(e=(0,d.Z)(["\n  margin-left: 30px;\n"]))),h=m.ZP.li(a||(a=(0,d.Z)(["\n  padding-top: 15px;\n  padding-bottom: 15px;\n"]))),g=m.ZP.p(c||(c=(0,d.Z)(["\n  margin-top: 15px;\n"]))),x=t(184),b=function(){var r=(0,p.UO)().movieId,n=(0,l.useState)(null),t=(0,o.Z)(n,2),e=t[0],a=t[1];return(0,l.useEffect)((function(){var n=new AbortController,t={movieId:r,controller:n};function e(){return(e=(0,u.Z)(s().mark((function n(){var e,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,r){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,f.M1)(t);case 5:e=n.sent,c=e.cast,a(c),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){n.abort()}}),[r]),e?(0,x.jsx)(v,{children:e.map((function(r){var n=r.profile_path,t=r.name,e=r.character,a=r.id;return(0,x.jsxs)(h,{children:[n?(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w185_and_h278_multi_faces".concat(n),alt:"profile of ".concat(t)}):(0,x.jsx)("img",{src:"https://via.placeholder.com/185x278/?text=Comming_soon",alt:"profile"}),(0,x.jsx)(g,{children:t}),(0,x.jsxs)(g,{children:["Character: ",e]})]},a)}))}):null}}}]);
//# sourceMappingURL=261.0ff55723.chunk.js.map