(this["webpackJsonpvk-stats-app"]=this["webpackJsonpvk-stats-app"]||[]).push([[0],{124:function(e,t,n){e.exports=n(159)},143:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(29),l=n.n(o),u=n(14),s=n(27),i=n.n(s),p=n(31),m=n(23),d=n(28),E=n(59),f=n(60),h=n(34),b={loadingUser:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_INFO_REQ":return Object(h.a)({},e,{loadingUser:!0});case"GET_USER_INFO_RES":return Object(h.a)({},e,{},t.payload,{loadingUser:!1});default:return e}},O={popout:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POPOUT":return Object(h.a)({},e);case"SET_POPOUT":return Object(h.a)({},e,{popout:t.block});default:return e}},j=Object(d.c)({routing:p.routerReducer,user:v,popoutApp:g}),y=Object(E.createLogger)(),k=Object(p.routerMiddleware)(u.d),_=Object(d.a)(f.a,k,y)(d.d),C=n(19),S=n(32),I=n(21),U=n(20),w=n(22),P=(n(143),n(4)),N=n(70),x=n.n(N),T=n(71),q=n.n(T),A=n(72),R=n.n(A),G=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(I.a)(this,Object(U.a)(t).call(this,e))).state=void 0,n.onStoryChange=function(e){var t=e.currentTarget.dataset.story;n.setState({activeStory:t}),u.d.push("".concat(t))},n.render=function(){var e=n.state.activeStory;return c.a.createElement(P.s,null,c.a.createElement(P.t,{onClick:function(e){return n.onStoryChange(e)},selected:"/"===e,"data-story":"/",text:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f"},c.a.createElement(R.a,null)),c.a.createElement(P.t,{onClick:function(e){return n.onStoryChange(e)},selected:"/contacts"===e,"data-story":"/contacts",text:"\u041f\u043e\u0438\u0441\u043a"},c.a.createElement(x.a,null)),c.a.createElement(P.t,{onClick:function(e){return n.onStoryChange(e)},selected:"/faq"===e,"data-story":"/faq",text:"\u041f\u043e\u043c\u043e\u0449\u044c"},c.a.createElement(q.a,null)))},n.state={activeStory:u.d.getCurrentLocation().pathname},n}return Object(w.a)(t,e),t}(c.a.Component),H=Object(m.b)((function(e){return{state:e,activeStory:e.activeStory}}),(function(e){return{dispatch:e}}))(G),F=function(e){var t=e.popout;return c.a.createElement(P.u,{popout:t,activePanel:e.id},c.a.createElement(P.n,{id:e.id},e.children,c.a.createElement(H,null)))},L=Object(m.b)((function(e){return{popout:e.popoutApp.popout}}))(F),z=n(33),D=n.n(z),W=n(42),B=(n(151),function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(I.a)(this,Object(U.a)(t).call(this,e))).getUser=Object(W.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.getUserInfo,e.next=3,t();case 3:case"end":return e.stop()}}),e)}))),n.render=function(){var e=n.props,t=e.loadingUser,a=e.user;return c.a.createElement("div",{className:"User"},t&&c.a.createElement(P.r,{size:"medium"}),a.first_name&&c.a.createElement(P.p,{status:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",before:c.a.createElement(P.d,{size:36,src:a.photo_100}),aside:""},a.first_name," ",a.last_name))},n.props.user.first_name||n.getUser(),n}return Object(w.a)(t,e),t}(c.a.Component)),J=Object(m.b)((function(e){return{state:e,user:e.user,loadingUser:e.user.loadingUser}}),(function(e){return{dispatch:e,getUserInfo:function(){return e(function(){var e=Object(W.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USER_INFO_REQ"}),e.prev=1,e.next=4,i.a.sendPromise("VKWebAppGetUserInfo");case 4:return n=e.sent,t({type:"GET_USER_INFO_RES",payload:n}),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),t({type:"GET_USER_INFO_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}}}))(B),K=(n(152),function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(I.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return c.a.createElement("div",{className:"Balance"},c.a.createElement("div",{className:"count"},"0 \u0440\u0443\u0431"),c.a.createElement("div",{className:"title"},"\u0411\u0430\u043b\u0430\u043d\u0441"))},n}return Object(w.a)(t,e),t}(c.a.Component)),Q=n(73),V=n.n(Q),M=n(74),X=n.n(M),Y=function(e){function t(){return Object(C.a)(this,t),Object(I.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return c.a.createElement(L,{id:"home"},c.a.createElement(P.o,null,"\u0410\u043d\u0430\u043b\u0438\u0437 \u0432\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"),c.a.createElement(P.i,{className:"profile"},c.a.createElement(J,null),c.a.createElement(K,null)),c.a.createElement(P.k,{header:!1},c.a.createElement(P.j,{slideWidth:"90%",style:{height:150},bullets:"dark"},c.a.createElement("div",{style:{backgroundColor:"var(--destructive)"}}),c.a.createElement("div",{style:{backgroundColor:"var(--button_commerce_background)"}}),c.a.createElement("div",{style:{backgroundColor:"var(--accent)"}}))),c.a.createElement(P.m,{className:"navigationList"},c.a.createElement(u.a,{to:"/groups"},c.a.createElement(P.g,{before:c.a.createElement(X.a,null)},"\u041e\u0431\u0449\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438")),c.a.createElement(P.q,{wide:!0}),c.a.createElement(u.a,{to:"/contacts"},c.a.createElement(P.g,{before:c.a.createElement(V.a,null)},"\u0423\u0437\u043d\u0430\u0442\u044c \u0441\u043a\u0440\u044b\u0442\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"))))}}]),t}(c.a.Component),Z=(n(153),n(154),function(){return c.a.createElement(L,{id:"contacts"},c.a.createElement(P.o,null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),c.a.createElement(P.i,null,"Contacts page..."))}),$=function(){return c.a.createElement(L,{id:"faq"},c.a.createElement(P.o,null,"\u041f\u043e\u043c\u043e\u0449\u044c"),c.a.createElement(P.k,{separator:"hide",header:c.a.createElement(P.l,{mode:"secondary"},"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u0442\u043d\u043e\u0435?")},c.a.createElement(P.f,null,c.a.createElement(P.e,{size:"l"},c.a.createElement(P.i,null,"\u0423 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043d\u043e \u0432 \u0431\u043e\u043b\u044c\u0448\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u0435\u0442 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b.")))),c.a.createElement(P.k,{separator:"hide",header:c.a.createElement(P.l,{mode:"secondary"},"\u0418\u0434\u0435\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f")},c.a.createElement(P.f,null,c.a.createElement(P.e,{size:"l"},c.a.createElement(P.i,null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u043d\u0430\u043c \u0441\u0432\u043e\u044e \u0438\u0434\u0435\u044e, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438.")))))},ee=n(24),te=n(75),ne=n.n(te),ae=n(76),re=n.n(ae),ce=(n(155),n(77)),oe=n.n(ce),le=function(e){var t=e.id,n=e.photo,a=e.removeHandler;return c.a.createElement("div",{className:"groupItem"},c.a.createElement("div",{className:"photo"},c.a.createElement(P.d,{src:n})),c.a.createElement("div",{className:"remove",onClick:function(e){return a(t)}},c.a.createElement(P.d,{style:{background:"var(--destructive)"},size:24},c.a.createElement(oe.a,{fill:"var(--white)"}))))},ue=(n(156),function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(I.a)(this,Object(U.a)(t).call(this,e))).state=void 0,n.render=function(){var e=n.state.groups;return c.a.createElement("div",null,c.a.createElement(P.h,{onClick:n.openIcons,before:c.a.createElement(re.a,null)},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),c.a.createElement(P.q,{wide:!0}),c.a.createElement("div",{className:"groupsList"},e.map((function(e){return c.a.createElement(le,{key:e.id,photo:e.photo,id:e.id,removeHandler:n.removeHandler})}))))},n.state={groups:[{id:1,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"},{id:2,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"},{id:3,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"},{id:4,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"},{id:5,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"}]},n.closePopout=n.closePopout.bind(Object(ee.a)(n)),n.openIcons=n.openIcons.bind(Object(ee.a)(n)),n.openDestructive=n.openDestructive.bind(Object(ee.a)(n)),n.removeItem=n.removeItem.bind(Object(ee.a)(n)),n.removeHandler=n.removeHandler.bind(Object(ee.a)(n)),n}return Object(w.a)(t,e),Object(S.a)(t,[{key:"openIcons",value:function(){var e=this;(0,this.props.setPopoutApp)(c.a.createElement(P.a,{onClose:function(){return e.closePopout()}},c.a.createElement(P.b,{key:"add",autoclose:!0,before:c.a.createElement(ne.a,null)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e/\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),c.a.createElement(P.b,{key:"cancel",autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c")))}},{key:"removeItem",value:function(e){var t=this.state.groups.filter((function(t){return t.id!==e}));this.setState({groups:t})}},{key:"closePopout",value:function(){console.log("closePopout"),(0,this.props.setPopoutApp)(!1)}},{key:"removeHandler",value:function(e){this.openDestructive(e)}},{key:"openDestructive",value:function(e){var t=this;(0,this.props.setPopoutApp)(c.a.createElement(P.c,{actionsLayout:"vertical",actions:[{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",autoclose:!0,mode:"destructive",action:function(){return t.removeItem(e)}},{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"}],onClose:this.closePopout},c.a.createElement("h2",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c?"),c.a.createElement("p",null,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430?")))}}]),t}(c.a.Component)),se=Object(m.b)((function(e){return{state:e,popout:e.popoutApp.popout}}),(function(e){return{dispatch:e,setPopoutApp:function(t){return e(function(e){return function(t){t({type:"SET_POPOUT",block:e})}}(t))}}}))(ue),ie=function(e){function t(){return Object(C.a)(this,t),Object(I.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return c.a.createElement(L,{id:"groups"},c.a.createElement(P.o,null,"\u041e\u0431\u0449\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438"),c.a.createElement(se,null))}}]),t}(c.a.Component),pe=(n(157),function(){return c.a.createElement(L,{id:"layout"},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430! ",c.a.createElement(u.a,{to:"/"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443..."))}),me=(n(158),_(j,a)),de=Object(p.syncHistoryWithStore)(u.d,me);i.a.send("VKWebAppInit",{}),l.a.render(c.a.createElement(m.a,{store:me},c.a.createElement(u.c,{history:de},c.a.createElement(u.b,{exact:!0,path:"/",component:Y}),c.a.createElement(u.b,{exact:!0,path:"/contacts",component:Z}),c.a.createElement(u.b,{exact:!0,path:"/faq",component:$}),c.a.createElement(u.b,{exact:!0,path:"/groups",component:ie}),c.a.createElement(u.b,{component:pe}))),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.3157a367.chunk.js.map