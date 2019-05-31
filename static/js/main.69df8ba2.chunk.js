(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(n,t,e){n.exports=e(80)},80:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(6),c=e.n(a),i=e(14),u=e(12),s=e(13),l=e(31),d=e.n(l),h=Object({NODE_ENV:"production",PUBLIC_URL:"/hacker-news-clone"}).URL||"http://localhost:3000/",f=2e4,p={"Content-Type":"application/json",Accept:"application/json"},S=new(function(){function n(t){var e=t.baseURL,r=void 0===e?h:e,o=t.timeout,a=void 0===o?f:o,c=t.headers,i=void 0===c?p:c,s=t.auth;Object(u.a)(this,n);var l=d.a.create({baseURL:r,timeout:a,headers:i,auth:s});l.interceptors.response.use(this.handleSuccess,this.handleError),this.client=l}return Object(s.a)(n,[{key:"handleSuccess",value:function(n){return n}},{key:"handleError",value:function(n){return Promise.reject(n)}},{key:"get",value:function(n){return this.client.get(n).then(function(n){return n.data})}},{key:"post",value:function(n,t){return this.client.post(n,t).then(function(n){return n.data})}},{key:"put",value:function(n,t){return this.client.put(n,t).then(function(n){return n.data})}},{key:"patch",value:function(n,t){return this.client.patch(n,t).then(function(n){return n.data})}},{key:"delete",value:function(n){return this.client.delete(n).then(function(n){return n.data})}}]),n}())({baseURL:"https://hacker-news.firebaseio.com/v0"}),E={};E.getTopStoryIds=function(){return S.get("/topstories".concat(".json?print=pretty"))},E.getStory=function(n){return S.get("/item/".concat(n).concat(".json?print=pretty"))},E.getStoriesByPage=function(n,t){var e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:t*n,end:(t+1)*n}}(20,t),r=function(n){var t=n.begin,e=n.end;return n.items.slice(t,e)}({begin:e.begin,end:e.end,items:n}).map(function(n){return E.getStory(n)});return Promise.all(r)};var m=E,g="@hnClone/story",b={FETCH_STORY_IDS_REQUEST:"".concat(g,"/FETCH_STORY_IDS_REQUEST"),FETCH_STORY_IDS_SUCCESS:"".concat(g,"/FETCH_STORY_IDS_SUCCESS"),FETCH_STORY_IDS_FAILURE:"".concat(g,"/FETCH_STORY_IDS_FAILURE"),FETCH_STORIES_REQUEST:"".concat(g,"/FETCH_STORIES_REQUEST"),FETCH_STORIES_SUCCESS:"".concat(g,"/FETCH_STORIES_SUCCESS"),FETCH_STORIES_FAILURE:"".concat(g,"/FETCH_STORIES_FAILURE")},v=function(n,t){return{type:n,payload:t}},y={fetchStoryIds:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return t(v(b.FETCH_STORY_IDS_REQUEST,n)),m.getTopStoryIds().then(function(n){return t(v(b.FETCH_STORY_IDS_SUCCESS,{storyIds:n})),t(y.fetchStories({storyIds:n,page:0})),n}).catch(function(n){return t(v(b.FETCH_STORY_IDS_FAILURE,n))})}},fetchStories:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){t(v(b.FETCH_STORIES_REQUEST,n));var e=n.storyIds,r=n.page;return m.getStoriesByPage(e,r).then(function(n){return t(v(b.FETCH_STORIES_SUCCESS,{stories:n}))}).catch(function(n){return t(v(b.FETCH_STORIES_FAILURE,n))})}}},T=y,_=e(32),O=Object(_.a)(function(n){return n.story.storyIds},function(n){return n.story.stories},function(n,t){return n.length>t.length}),I=e(41),C=e(33),R=e(42),w=e(34),j=e.n(w),x=e(1),F={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"},k=e(35),H=e(36),U=e.n(H),D=function(n){var t="";return n&&(n.includes("//")||(n="http://".concat(n,".hostname")),t=U.a.parse(n).hostname),t.includes("www.")&&(t=t.split("www.")[1]),t},L="https://news.ycombinator.com",Y="".concat(L,"/item?id="),A="".concat(L,"/user?id="),Q=function(n){var t=n.url,e=n.id,r="".concat(Y).concat(e);return t||r},M=e(2);function P(){var n=Object(M.a)(["\n  color: ",";\n  &:visited {\n    color: ",";\n  }\n"]);return P=function(){return n},n}function z(){var n=Object(M.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return z=function(){return n},n}function B(){var n=Object(M.a)(["\n  color: ",";\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"]);return B=function(){return n},n}function N(){var n=Object(M.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return N=function(){return n},n}function J(){var n=Object(M.a)(["\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n"]);return J=function(){return n},n}function W(){var n=Object(M.a)(["\n  border-bottom: 1px solid ",";\n  padding: 14px 24px;\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return W=function(){return n},n}var $=x.c.li(W(),function(n){return n.theme.border}),V=x.c.h3(J(),function(n){return n.theme.text}),q=x.c.span(N(),function(n){return n.theme.textSecondary}),G=x.c.a(B(),function(n){return n.theme.text}),K=x.c.div(z(),function(n){return n.theme.textSecondary}),X=x.c.a(P(),function(n){return n.theme.textSecondary},function(n){return n.theme.textSecondary}),Z="noopener noreferrer nofollow",nn=function(n){var t=n.by,e=n.kids,r=void 0===e?[]:e,a=n.score,c=n.url,i=n.title,u=n.id,s=(n.type,n.time),l=D(c)||"new.ycombinator.com",d=Q({url:c,id:u}),h="".concat(Y).concat(u),f="".concat(A).concat(t);return o.a.createElement($,null,o.a.createElement(G,{href:d},o.a.createElement(V,null,i),o.a.createElement(q,null,"(",l,")")),o.a.createElement(K,null,a," points by"," ",o.a.createElement(X,{href:f,rel:Z,target:"_blank"},t," "),Object(k.format)(new Date(1e3*s).toISOString())," "," | ",o.a.createElement(X,{href:h,rel:Z,target:"_blank"},r.length," Comments"," ")))};function tn(){var n=Object(M.a)(["\n  list-style: none;\n  background-color: ",";\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n"]);return tn=function(){return n},n}var en=x.c.ul(tn(),function(n){return n.theme.backgroundSecondary}),rn=function(n){var t=n.stories;return o.a.createElement(en,null,t.map(function(n){return o.a.createElement(nn,Object.assign({},n,{key:n.id}))}))};function on(){var n=Object(M.a)(["\n  text-align: center;\n\n  span {\n    color: $({theme}) => theme.textSecondary;\n    display: line-block;\n    margin-left: 4px;\n    font-size: 80px;\n    line-height: 0.1;\n    animation-name: ",";\n    animation-duration: 1s;\n    animation-iteration-count: infinate;\n    animation-fill-mode: both;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n\n  span:nth-child(3) {\n    animation-delay: 0.4s;\n  }\n"]);return on=function(){return n},n}function an(){var n=Object(M.a)(["\n0% {\n  opacity: .2;\n}\n20% {\n  opacity: 1;\n}\n100% {\n  opacity: .2;\n}\n"]);return an=function(){return n},n}var cn=Object(x.d)(an()),un=x.c.div(on(),cn),sn=function(){return o.a.createElement(un,null,o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))};function ln(){var n=Object(M.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 300;\n  margin-top: 24px;\n  margin-bottom: 26px;\n"]);return ln=function(){return n},n}function dn(){var n=Object(M.a)(["\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 200px;\n\n  "," {\n    width: 96%;\n  }\n"]);return dn=function(){return n},n}var hn=x.c.div(dn(),"@media only screen and (max-width: 768px)"),fn=x.c.h1(ln(),function(n){return n.theme.textSecondary}),pn=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(I.a)(this,(n=Object(C.a)(t)).call.apply(n,[this].concat(o)))).fetchStories=function(){var n=e.props,t=n.storyIds,r=n.page,o=n.fetchStories;n.isFetching||o({storyIds:t,page:r})},e}return Object(R.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStoriesFirstPage()}},{key:"render",value:function(){var n=this.props,t=n.stories,e=n.hasMoreStories;return o.a.createElement(x.a,{theme:F},o.a.createElement("div",null,o.a.createElement(hn,null,o.a.createElement(fn,null,"Hacker News Reader"),o.a.createElement(j.a,{dataLength:t.length,next:this.fetchStories,hasMore:e,loader:o.a.createElement(sn,null),style:{height:"100%",overflow:"visible"}},o.a.createElement(rn,{stories:t})))))}}]),t}(r.Component),Sn=Object(i.b)(function(n){return{stories:n.story.stories,page:n.story.page,storyIds:n.story.storyIds,isFetching:n.story.isFetching,hasMoreStories:O(n)}},function(n){return{fetchStoriesFirstPage:function(){return n(T.fetchStoryIds())},fetchStories:function(t){var e=t.storyIds,r=t.page;return n(T.fetchStories({storyIds:e,page:r}))}}})(pn);function En(){var n=Object(M.a)(["\n    * {\n      box-sizing: border-box;\n    }\n    html, body {\n      font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;\n      width: 100vw;\n      overflow-x: hidden;\n      margin: 0;\n      padding: 0;\n      min-height: 100vh;\n      background-color: ",";\n    }\n    ul {\n      list-style: none;\n      padding: 0;\n    }\n    a {\n      text-decoration: none;\n      &:visited {\n        color: inherit;\n      }\n    }\n  "]);return En=function(){return n},n}var mn=Object(x.b)(En(),F.background),gn=e(4),bn=e(8),vn={SET_THEME:"".concat("@hnClone/app","/SET_THEME")},yn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"dark"},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case vn.SET_THEME:return Object(bn.a)({},n,r);default:return n}},Tn=e(21),_n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case b.FETCH_STORY_IDS_REQUEST:case b.FETCH_STORIES_REQUEST:return Object(bn.a)({},n,{isFetching:!0});case b.FETCH_STORY_IDS_SUCCESS:return Object(bn.a)({},n,r);case b.FETCH_STORIES_SUCCESS:return Object(bn.a)({},n,{stories:[].concat(Object(Tn.a)(n.stories),Object(Tn.a)(r.stories)),page:n.page+1,isFetching:!1});default:return n}},On=Object(gn.c)({app:yn,story:_n}),In=e(39),Cn=(e(40),[]);Cn.push(In.a);var Rn=Object(gn.d)(gn.a.apply(void 0,Cn)),wn=function(n){return Object(gn.e)(On,n,Rn)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(){var n=wn({});n.dispatch({type:"@hnClone/@@INIT"}),c.a.render(o.a.createElement(i.a,{store:n},o.a.createElement(mn,null),o.a.createElement(Sn,null)),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.69df8ba2.chunk.js.map