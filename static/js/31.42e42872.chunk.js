(this.webpackJsonpcov_gn=this.webpackJsonpcov_gn||[]).push([[31],{552:function(e,a,t){"use strict";var n=t(167),c=t(168),r=t(550),s=function(){function e(){Object(n.a)(this,e)}return Object(c.a)(e,null,[{key:"info",value:function(a,t){return r.a.info(a,Object.assign(e.options,{hideAfter:t}))}},{key:"error",value:function(a,t){return r.a.error(a,Object.assign(e.options,{hideAfter:t}))}},{key:"success",value:function(a,t){return r.a.success(a,Object.assign(e.options,{hideAfter:t}))}},{key:"loading",value:function(a,t){var n=t||1;return r.a.loading(a,Object.assign(e.options,{hideAfter:n}))}},{key:"warn",value:function(a,t){return r.a.warn(a,Object.assign(e.options,{hideAfter:t}))}}]),e}();s.options={position:"top-center",hideAfter:3};a.a=s},690:function(e,a,t){e.exports=t.p+"static/media/logo.f5010860.png"},691:function(e,a,t){e.exports=t.p+"static/media/sygnet.dba7f081.svg"},692:function(e,a,t){},798:function(e,a,t){"use strict";t.r(a);var n=t(557),c=t.n(n),r=t(558),s=t(167),l=t(168),i=t(170),o=t(169),m=t(1),u=t.n(m),p=t(174),f=t(796),v=t(794),E=t(803),g=t(837),N=t(838),d=t(804),h=t(795),k=t(600),b=t.n(k),j=t(693),w=t.n(j),x=t(171),y=t(651),O=t(690),A=t.n(O),L=t(691),P=t.n(L),_=(t(692),t(561)),C=t(552),U=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={imagePreviewUrl:""},n}return Object(l.a)(t,[{key:"logout",value:function(){var e=Object(r.a)(c.a.mark((function e(a,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(_.a.logout()),C.a.loading("",1).then((function(){t.push("/")}));case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"goHome",value:function(){alert("ok")}},{key:"updateImage",value:function(e){this.setState({imagePreviewUrl:e})}},{key:"componentDidMount",value:function(){var e=this.props.cov_user;e.cov_picture&&this.setState({imagePreviewUrl:e.cov_picture})}},{key:"render",value:function(){var e=this,a=this.props,t=a.logged,n=a.dispatch,c=a.currentPage,r=a.history,s=this.state.imagePreviewUrl;return u.a.createElement(u.a.Fragment,null,t?u.a.createElement(y.j,{className:"d-lg-none",display:"md",mobile:!0},u.a.createElement("span",{className:"line"}),u.a.createElement("span",{className:"line"}),u.a.createElement("span",{className:"line"})):"",u.a.createElement(f.a,null,u.a.createElement(y.c,{href:"#",full:{src:A.a,width:80,height:45,alt:"Cov Guin\xe9e"},minimized:{src:P.a,width:30,height:30,alt:"Cov Guin\xe9e"}})),t?"":u.a.createElement(f.a,{className:"sign-icon",navbar:!0},u.a.createElement(v.a,{className:"px-3"},u.a.createElement(p.NavLink,{to:"/login",className:"nav-link"},u.a.createElement("i",{className:"fa fa-user"})," "))),t&&c.startsWith("/profile")&&-1===c.indexOf("forgot")&&-1===c.indexOf("init")?u.a.createElement(y.j,{className:"d-md-down-none account-menu",display:"lg"},u.a.createElement("span",{className:"line"}),u.a.createElement("span",{className:"line"}),u.a.createElement("span",{className:"line"})):"",u.a.createElement(f.a,{className:"d-md-down-none",navbar:!0},u.a.createElement(v.a,{className:"px-3"},u.a.createElement(p.NavLink,{to:"/trip/search",className:"nav-link"}," ",u.a.createElement(b.a,null),"Rechercher")),u.a.createElement(v.a,{className:"px-3"},u.a.createElement(p.NavLink,{to:"/login/createTrip",className:"nav-link"}," ",u.a.createElement(w.a,null),"Proposer")),t?"":u.a.createElement(v.a,{className:"px-3"},u.a.createElement(p.NavLink,{to:"/register",className:"nav-link"},"Inscription")),t?"":u.a.createElement(v.a,{className:"px-3"},u.a.createElement(p.NavLink,{to:"/login",className:"nav-link"},"Connexion"))),t?u.a.createElement(f.a,{className:"ml-auto  logout-menu",navbar:!0},u.a.createElement(E.a,{nav:!0,direction:"down"},u.a.createElement(g.a,{nav:!0},u.a.createElement("img",{src:s,className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement(N.a,{right:!0},u.a.createElement(d.a,{className:"text-center"},u.a.createElement("a",{href:"/#/profile/infos"},"Mon compte")),u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-bell-o"})," Alertes",u.a.createElement(h.a,{color:"success"},"42")),u.a.createElement(d.a,{onClick:function(a){return e.logout(n,r)}},u.a.createElement("i",{className:"fa fa-lock"})," D\xe9connexion")))):"",t?"":u.a.createElement(f.a,{className:"ml-auto mobile-menu",navbar:!0},u.a.createElement(v.a,{className:"px-3"},u.a.createElement(p.NavLink,{to:"/login",className:"nav-link"},u.a.createElement("i",{className:"fa fa-car"}))),u.a.createElement(v.a,{className:"px-3"},u.a.createElement(p.NavLink,{to:"/login",className:"nav-link"},u.a.createElement("i",{className:"fa fa-search"})))))}}]),t}(m.Component);U.defaultProps={};a.default=Object(x.b)((function(e){return{cov_user:e.cov_user}}))(U)}}]);
//# sourceMappingURL=31.42e42872.chunk.js.map