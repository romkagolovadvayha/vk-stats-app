(this["webpackJsonpvk-stats-app"]=this["webpackJsonpvk-stats-app"]||[]).push([[0],{123:function(e,t,a){e.exports=a(158)},142:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(54),l=a.n(o),u=a(8),s=a(29),i=a(26),p=a(27),m=a(60),d=a(61),f=a(50),E={loadingUser:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_INFO_REQ":return Object(f.a)({},e,{loadingUser:!0});case"GET_USER_INFO_RES":return Object(f.a)({},e,{},t.payload,{loadingUser:!1});default:return e}},b=Object(p.c)({routing:s.routerReducer,user:h}),v=Object(m.createLogger)(),O=Object(s.routerMiddleware)(u.d),j=Object(p.a)(d.a,O,v)(p.d),g=a(19),y=a(30),S=a(21),k=a(20),C=a(22),_=(a(142),a(4)),w=a(41),I=a.n(w),U=a(67),x=a.n(U),N=a(68),q=a.n(N),R=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(S.a)(this,Object(k.a)(t).call(this,e))).state=void 0,a.onStoryChange=function(e){var t=e.currentTarget.dataset.story;a.setState({activeStory:t}),u.d.push("".concat(t))},a.render=function(){var e=a.state.activeStory;return c.a.createElement(_.n,null,c.a.createElement(_.o,{onClick:function(e){return a.onStoryChange(e)},selected:"/"===e,"data-story":"/",text:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f"},c.a.createElement(q.a,null)),c.a.createElement(_.o,{onClick:function(e){return a.onStoryChange(e)},selected:"/contacts"===e,"data-story":"/contacts",text:"\u041f\u043e\u0438\u0441\u043a"},c.a.createElement(I.a,null)),c.a.createElement(_.o,{onClick:function(e){return a.onStoryChange(e)},selected:"/contacts"===e,"data-story":"/contacts",label:"12",text:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},c.a.createElement(I.a,null)),c.a.createElement(_.o,{onClick:function(e){return a.onStoryChange(e)},selected:"/contacts"===e,"data-story":"/contacts",text:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d."},c.a.createElement(I.a,null)),c.a.createElement(_.o,{onClick:function(e){return a.onStoryChange(e)},selected:"/faq"===e,"data-story":"/faq",text:"\u041f\u043e\u043c\u043e\u0449\u044c"},c.a.createElement(x.a,null)))},a.state={activeStory:u.d.getCurrentLocation().pathname},a}return Object(C.a)(t,e),t}(c.a.Component),H=Object(i.b)((function(e){return{state:e,activeStory:e.activeStory}}),(function(e){return{dispatch:e}}))(R),F=function(e){return c.a.createElement(_.k,{separator:!1},e.children,c.a.createElement(H,null))},L=a(32),G=a.n(L),P=a(40),T=a(31),A=a.n(T),D=(a(150),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(S.a)(this,Object(k.a)(t).call(this,e))).getUser=Object(P.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.getUserInfo,e.next=3,t();case 3:case"end":return e.stop()}}),e)}))),a.render=function(){var e=a.props,t=e.loadingUser,n=e.user;return c.a.createElement("div",{className:"User"},t&&c.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),n.first_name&&c.a.createElement(_.l,{status:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",before:c.a.createElement(_.d,{size:36,src:n.photo_100}),aside:""},n.first_name," ",n.last_name))},a.props.user.first_name||a.getUser(),a}return Object(C.a)(t,e),t}(c.a.Component)),W=Object(i.b)((function(e){return{state:e,user:e.user,loadingUser:e.user.loadingUser}}),(function(e){return{dispatch:e,getUserInfo:function(){return e(function(){var e=Object(P.a)(G.a.mark((function e(t){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USER_INFO_REQ"}),e.prev=1,e.next=4,A.a.sendPromise("VKWebAppGetUserInfo");case 4:return a=e.sent,t({type:"GET_USER_INFO_RES",payload:a}),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),t({type:"GET_USER_INFO_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}}}))(D),z=(a(151),function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return c.a.createElement("div",{className:"Balance"},c.a.createElement("div",{className:"count"},"0 \u0440\u0443\u0431"),c.a.createElement("div",{className:"title"},"\u0411\u0430\u043b\u0430\u043d\u0441"))},a}return Object(C.a)(t,e),t}(c.a.Component)),B=a(69),J=a.n(B),Q=a(70),K=a.n(Q),M=a(71),V=a.n(M),X=function(e){function t(){return Object(g.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return c.a.createElement(F,null,c.a.createElement("div",{className:"profile"},c.a.createElement(W,null),c.a.createElement(z,null)),c.a.createElement(_.m,{wide:!0}),c.a.createElement(_.j,null,c.a.createElement(u.a,{to:"/groups"},c.a.createElement(_.e,{before:c.a.createElement(K.a,null)},"\u041e\u0431\u0449\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438")),c.a.createElement(_.m,{wide:!0}),c.a.createElement(u.a,{to:"/contacts"},c.a.createElement(_.e,{before:c.a.createElement(J.a,null)},"\u0423\u0437\u043d\u0430\u0442\u044c \u0441\u043a\u0440\u044b\u0442\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435")),c.a.createElement(_.m,{wide:!0}),c.a.createElement(u.a,{to:"/faq"},c.a.createElement(_.e,{before:c.a.createElement(V.a,null),indicator:c.a.createElement(_.g,null,"0")},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"))))}}]),t}(c.a.Component),Y=(a(152),a(153),function(){return c.a.createElement(F,null,c.a.createElement(_.h,{header:c.a.createElement(_.i,{mode:"secondary"},"Items")},c.a.createElement(_.e,null,"Hello"),c.a.createElement(_.e,null,"World")),"Contacts page...")}),Z=function(){return c.a.createElement(F,null,c.a.createElement(_.h,{header:c.a.createElement(_.i,{mode:"secondary"},"Faq")},c.a.createElement(_.e,null,"Hello"),c.a.createElement(_.e,null,"World")),"Contacts page...")},$=a(23),ee=a(72),te=a.n(ee),ae=a(73),ne=a.n(ae),re=(a(154),a(74)),ce=a.n(re),oe=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).render=function(){var e=a.props,t=e.id,n=e.photo,r=e.removeHandler;return c.a.createElement("div",{className:"groupItem"},c.a.createElement("div",{className:"photo"},c.a.createElement(_.d,{src:n})),c.a.createElement("div",{className:"remove",onClick:function(e){return r(t)}},c.a.createElement(_.d,{style:{background:"var(--destructive)"},size:24},c.a.createElement(ce.a,{fill:"var(--white)"}))))},a}return Object(C.a)(t,e),t}(c.a.Component),le=(a(155),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(S.a)(this,Object(k.a)(t).call(this,e))).state=void 0,a.render=function(){var e=a.state,t=e.popout,n=e.groups;return c.a.createElement(_.p,{popout:t,header:!1,activePanel:"groupsList"},c.a.createElement(_.k,{id:"groupsList",separator:!1},c.a.createElement(_.f,{onClick:a.openIcons,before:c.a.createElement(ne.a,null)},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),c.a.createElement(_.m,{wide:!0}),c.a.createElement("div",{className:"groupsList"},n.map((function(e){return c.a.createElement(oe,{key:e.id,photo:e.photo,id:e.id,removeHandler:a.removeHandler})})))))},a.state={popout:null,groups:[{id:1,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"},{id:2,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"},{id:3,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"},{id:4,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"},{id:5,photo:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"}]},a.closePopout=a.closePopout.bind(Object($.a)(a)),a.openIcons=a.openIcons.bind(Object($.a)(a)),a.openDestructive=a.openDestructive.bind(Object($.a)(a)),a.removeItem=a.removeItem.bind(Object($.a)(a)),a.removeHandler=a.removeHandler.bind(Object($.a)(a)),a}return Object(C.a)(t,e),Object(y.a)(t,[{key:"openIcons",value:function(){var e=this;this.setState({popout:c.a.createElement(_.a,{onClose:function(){return e.setState({popout:null})}},c.a.createElement(_.b,{key:"add",autoclose:!0,before:c.a.createElement(te.a,null)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e/\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),c.a.createElement(_.b,{key:"cancel",autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))})}},{key:"removeItem",value:function(e){var t=this.state.groups.filter((function(t){return t.id!==e}));this.setState({groups:t})}},{key:"closePopout",value:function(){this.setState({popout:null})}},{key:"removeHandler",value:function(e){this.openDestructive(e)}},{key:"openDestructive",value:function(e){var t=this;this.setState({popout:c.a.createElement(_.c,{actionsLayout:"vertical",actions:[{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",autoclose:!0,mode:"destructive",action:function(){return t.removeItem(e)}},{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"}],onClose:this.closePopout},c.a.createElement("h2",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c?"),c.a.createElement("p",null,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430?"))})}}]),t}(c.a.Component)),ue=Object(i.b)((function(e){return{state:e,activeStory:e.activeStory}}),(function(e){return{dispatch:e}}))(le),se=function(e){function t(){return Object(g.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return c.a.createElement(F,null,c.a.createElement(ue,null))}}]),t}(c.a.Component),ie=(a(156),function(){return c.a.createElement(F,null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430! ",c.a.createElement(u.a,{to:"/"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443..."))}),pe=(a(157),j(b,n)),me=Object(s.syncHistoryWithStore)(u.d,pe);l.a.render(c.a.createElement(i.a,{store:pe},c.a.createElement(u.c,{history:me},c.a.createElement(u.b,{exact:!0,path:"/",component:X}),c.a.createElement(u.b,{exact:!0,path:"/contacts",component:Y}),c.a.createElement(u.b,{exact:!0,path:"/faq",component:Z}),c.a.createElement(u.b,{exact:!0,path:"/groups",component:se}),c.a.createElement(u.b,{component:ie}))),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.209caf56.chunk.js.map