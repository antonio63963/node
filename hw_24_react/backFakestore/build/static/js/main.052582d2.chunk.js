(this.webpackJsonpfakestore=this.webpackJsonpfakestore||[]).push([[0],{223:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),c=r(17),s=r.n(c),u=r(2),i=r(47),o=r(225),d=r(32),p=r.n(d),l=r(9),j=o.a.Meta;function b(t){var e=t.product,r=(e.id,e.title),n=void 0===r?"some title":r,c=e.price,s=void 0===c?1:c,i=e.image,d=e.description,b=void 0===d?"some description":d,f=Object(a.useState)(!1),O=Object(u.a)(f,2),x=O[0],h=O[1];return Object(l.jsxs)("div",{className:p.a.card,children:[Object(l.jsxs)(o.a,{onMouseOver:function(t){h(!0)},hoverable:!0,style:{width:240},cover:Object(l.jsx)("div",{className:p.a.imgWrapper,children:Object(l.jsx)("img",{alt:"example",className:p.a.imgCard,src:i})}),children:[Object(l.jsx)(j,{title:n}),"$",s]}),Object(l.jsxs)(o.a,{onMouseOut:function(){return h(!1)},className:x?p.a.focussedCard:p.a.dispNone,hoverable:!0,style:{width:240},cover:Object(l.jsx)("div",{className:p.a.imgWrapper,children:Object(l.jsx)("img",{alt:"example",className:p.a.imgCard,src:i})}),children:[Object(l.jsx)(j,{title:n}),"$",s,Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:b})]})]})}var f=r(14),O=r.n(f),x=r(31),h=r(77),v=r.n(h),m="PRODUCT_LOAD_IN_PROGRESS",_="PRODUCT_LOAD_FAIL",y="PRODUCT_ADD_BY_ID",g="GET_PRODUCTS_BY_LIMIT",C="LOADING",S=function(){var t=Object(x.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{type:m,payload:{id:e}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(x.a)(O.a.mark((function t(e){var r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/addProdID/".concat(e));case 2:if(200===(r=t.sent).status){t.next=5;break}return t.abrupt("return",{type:_,payload:{id:e}});case 5:return a={type:y,payload:{product:r.data.payload}},t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(x.a)(O.a.mark((function t(e,r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,S(e);case 3:return t.t1=t.sent,(0,t.t0)(t.t1),t.t2=r,t.next=8,w(e);case 8:t.t3=t.sent,(0,t.t2)(t.t3);case 10:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),N=function(){var t=Object(x.a)(O.a.mark((function t(){var e,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("/products");case 2:if(200===(e=t.sent).status){t.next=5;break}return t.abrupt("return",{type:_});case 5:return r={type:g,payload:{data:e.data.payload}},t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(x.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,N();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=(r(217),r(41)),P=r(19),T=r(227);function L(){return Object(l.jsx)("div",{className:"example",children:Object(l.jsx)(T.a,{})})}var $=function(){var t=Object(a.useState)(),e=Object(u.a)(t,2),r=e[0],n=e[1],c=Object(i.c)((function(t){return t})),s=Object(i.b)();Object(a.useEffect)((function(){D(s)}),[]);var o="SUCCESS"!==c.arrProductStatus;return Object(l.jsxs)("div",{children:[Object(l.jsx)(I.a,{gutter:16,children:o?Object(l.jsx)(L,{style:{position:"absolute",bottom:"50px"}}):c.products.map((function(t){return Object(l.jsx)(P.a,{children:Object(l.jsx)(b,{product:t})},t.id)}))}),Object(l.jsx)("input",{type:"number",onChange:function(t){return n(t.target.value)}}),Object(l.jsx)("button",{onClick:function(){k(r,s)},type:"button",children:"get products"}),Object(l.jsx)("button",{children:"click2"})]})},E=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,228)).then((function(e){var r=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,s=e.getTTFB;r(t),a(t),n(t),c(t),s(t)}))},W=r(116),B=r(4),M=r(40),R=r.n(M),U={products:[]},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0,r=function(e){return t.products.findIndex((function(t){return t.id==e}))};switch(e.type){case m:var a={id:Number(e.payload.id),status:"in_progress"};return R()(t,{products:{$push:[a]}});case _:var n=r(e.payload.id);return R()(t,{products:Object(B.a)({},n,{status:{$set:"fail"}})});case y:var c=r(e.payload.product.id),s=R()(t,{products:Object(B.a)({},c,{$set:e.payload.product})});return console.log("add : ",c,s),s;case C:return R()(t,{$set:{arrProductStatus:e.payload}});case g:return R()(t,{products:{$set:e.payload.data},arrProductStatus:{$set:"SUCCESS"}});default:return t}},F=Object(W.a)(A);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(i.a,{store:F,children:Object(l.jsx)($,{})})}),document.getElementById("root")),E()},32:function(t,e,r){t.exports={imgCard:"card_imgCard__2LBTY",imgWrapper:"card_imgWrapper__1BW7y",spinner:"card_spinner__3se7J",card:"card_card__3MpWW",focussedCard:"card_focussedCard__2GaIy",hidden:"card_hidden__3r5vE",dispNone:"card_dispNone__15zxg"}}},[[223,1,2]]]);
//# sourceMappingURL=main.052582d2.chunk.js.map