(this.webpackJsonpcov_gn=this.webpackJsonpcov_gn||[]).push([[26],{554:function(e,a,t){"use strict";var n=t(13),s=t(32),o=t(1),r=t.n(o),c=t(63),l=t.n(c),i=t(540),u=t.n(i),d=t(541),p=l.a.oneOfType([l.a.number,l.a.string]),f={tag:d.m,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,i=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var n=e[a];if(delete p[a],n){var s=!t;f.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var m=Object(d.i)(u()(a,o?"no-gutters":null,l?"form-row":"row",f),t);return r.a.createElement(c,Object(n.a)({},p,{className:m}))};b.propTypes=f,b.defaultProps=m,a.a=b},555:function(e,a,t){"use strict";var n=t(13),s=t(32),o=t(1),r=t.n(o),c=t(63),l=t.n(c),i=t(540),u=t.n(i),d=t(541),p=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),m={tag:d.m,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,o=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(a,n){var s=e[a];if(delete l[a],s||""===s){var o=!n;if(Object(d.g)(s)){var r,c=o?"-":"-"+a+"-",p=g(o,a,s.size);i.push(Object(d.i)(u()(((r={})[p]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),t))}else{var f=g(o,a,s);i.push(f)}}})),i.length||i.push("col");var p=Object(d.i)(u()(a,i),t);return r.a.createElement(c,Object(n.a)({},l,{className:p}))};h.propTypes=m,h.defaultProps=b,a.a=h},556:function(e,a,t){"use strict";var n=t(13),s=t(32),o=t(543),r=t(34),c=t(1),l=t.n(c),i=t(63),u=t.n(i),d=t(540),p=t.n(d),f=t(541),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,r=e.className,c=e.close,i=e.cssModule,u=e.color,d=e.outline,m=e.size,b=e.tag,g=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,j=Object(f.i)(p()(r,{close:c},c||"btn",c||v,!!m&&"btn-"+m,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===b&&(b="a");var O=c?"Close":null;return l.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:j,ref:g,onClick:this.onClick,"aria-label":t||O}))},a}(l.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},a.a=b},564:function(e,a,t){"use strict";var n=t(13),s=t(32),o=t(1),r=t.n(o),c=t(63),l=t.n(c),i=t(540),u=t.n(i),d=t(541),p={tag:d.m,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.i)(u()(a,"input-group-text"),t);return r.a.createElement(o,Object(n.a)({},c,{className:l}))};f.propTypes=p,f.defaultProps={tag:"span"},a.a=f},566:function(e,a,t){"use strict";var n=t(13),s=t(32),o=t(543),r=t(34),c=t(1),l=t.n(c),i=t(63),u=t.n(i),d=t(540),p=t.n(d),f=t(541),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,r=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,b=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),j=u||("select"===o||"textarea"===o?o:"input"),O="form-control";m?(O+="-plaintext",j=u||"input"):"file"===o?O+="-file":h&&(O=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(f.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var y=Object(f.i)(p()(a,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,O),t);return("input"===j||u&&"function"===typeof u)&&(g.type=o),g.children&&!m&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(f.n)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(j,Object(n.a)({},g,{ref:b,className:y}))},a}(l.a.Component);b.propTypes=m,b.defaultProps={type:"text"},a.a=b},583:function(e,a,t){"use strict";var n=t(13),s=t(32),o=t(1),r=t.n(o),c=t(63),l=t.n(c),i=t(540),u=t.n(i),d=t(541),p={tag:d.m,size:l.a.string,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=e.size,l=Object(s.a)(e,["className","cssModule","tag","size"]),i=Object(d.i)(u()(a,"input-group",c?"input-group-"+c:null),t);return r.a.createElement(o,Object(n.a)({},l,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},584:function(e,a,t){"use strict";var n=t(13),s=t(32),o=t(1),r=t.n(o),c=t(63),l=t.n(c),i=t(540),u=t.n(i),d=t(541),p=t(564),f={tag:d.m,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=e.addonType,l=e.children,i=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),f=Object(d.i)(u()(a,"input-group-"+c),t);return"string"===typeof l?r.a.createElement(o,Object(n.a)({},i,{className:f}),r.a.createElement(p.a,{children:l})):r.a.createElement(o,Object(n.a)({},i,{className:f,children:l}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},810:function(e,a,t){"use strict";t.r(a);var n=t(167),s=t(168),o=t(170),r=t(169),c=t(1),l=t.n(c),i=t(797),u=t(554),d=t(555),p=t(583),f=t(584),m=t(564),b=t(566),g=t(556),h=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(i.a,null,l.a.createElement(u.a,{className:"justify-content-center"},l.a.createElement(d.a,{md:"6"},l.a.createElement("div",{className:"clearfix"},l.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),l.a.createElement("h4",{className:"pt-3"},"Oops! You're lost."),l.a.createElement("p",{className:"text-muted float-left"},"The page you are looking for was not found.")),l.a.createElement(p.a,{className:"input-prepend"},l.a.createElement(f.a,{addonType:"prepend"},l.a.createElement(m.a,null,l.a.createElement("i",{className:"fa fa-search"}))),l.a.createElement(b.a,{size:"16",type:"text",placeholder:"What are you looking for?"}),l.a.createElement(f.a,{addonType:"append"},l.a.createElement(g.a,{color:"info"},"Search")))))))}}]),t}(c.Component);a.default=h}}]);
//# sourceMappingURL=26.45f49b16.chunk.js.map