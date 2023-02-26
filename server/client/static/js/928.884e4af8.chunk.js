"use strict";(self.webpackChunksdaem_by=self.webpackChunksdaem_by||[]).push([[928],{2297:function(e,s,n){n.d(s,{Z:function(){return r}});n(2791);var a=n(6829),t=n(7284),i=n(184),r=function(e){var s=e.label,n=e.status,r=e.onToggle;return(0,i.jsxs)(a.Z,{type:"button",onClick:r,className:"favourite-btn"+(n?" _active":""),"data-tooltip-id":"my-tooltip","data-tooltip-content":n?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",children:[s&&(0,i.jsx)("h3",{className:"favourite-btn__title",children:s}),n?(0,i.jsx)(t.Z,{name:"heart-active"}):(0,i.jsx)(t.Z,{name:"heart"})]})}},4289:function(e,s,n){n.d(s,{Z:function(){return t}});n(2791);var a=n(184),t=function(e){var s=e.itemsCount,n=e.pageSize,t=e.currentPage,i=e.onPageChange,r=Math.ceil(s/n);if(1===r)return null;var c=Array.from({length:r},(function(e,s){return s+1}));return(0,a.jsx)("ul",{className:"pagination",children:c.map((function(e){return(0,a.jsx)("li",{className:"pagination__item "+(e===t?"_active":""),children:(0,a.jsx)("span",{onClick:function(){return i(e)},children:e})},"page_"+e)}))})}},2501:function(e,s,n){n.d(s,{tv:function(){return g},ZP:function(){return N}});n(2791);var a=n(8254),t=n(5957),i=n(7162),r=n(7738),c=n(5381),o=n(184),l=function(e){var s=e._id,n=e.price,l=(0,t.Js)((0,t.rc)()),d=(0,t.Js)((0,i.fc)({_id:l})),m=(0,a.Rh)(),_=m.open,u=m.handleClickOpen,h=m.handleClose;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Fu,{id:s,price:n,onOpenDialog:u}),_&&d&&(0,o.jsx)(c.ZP,{currentBooking:d,open:_,onClose:h})]})},d=n(4289),m=n(5110),_=n(7689),u=n(57),h=n(7033),x=n(4282),j=function(e){var s=e.item,n=e.role,r=void 0===n?"USER":n,l=(0,t.TL)(),d=(0,t.Js)((0,u.GA)(s.userId)),j=(0,t.Js)((0,h.hF)(s.estateId)),g=(0,a.Rh)(),N=g.open,f=g.handleClickOpen,v=g.handleClose,p=(0,_.s0)(),k="ADMIN"===r||(null===d||void 0===d?void 0:d._id)===s.userId;return j&&d?(0,o.jsxs)("div",{className:"booking__card",children:[(0,o.jsx)("div",{className:"booking-header",children:(0,o.jsxs)("ul",{className:"booking-header__list",children:[(0,o.jsxs)("li",{className:"booking-header__item",children:[(0,o.jsx)("h3",{className:"booking-header__title",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u043e\u0432\u0430\u0440\u0430:"}),(0,o.jsx)("p",{className:"booking-header__text",children:s._id})]}),(0,o.jsxs)("li",{className:"booking-header__item",children:[(0,o.jsx)("h3",{className:"booking-header__title",children:"\u0422\u043e\u0432\u0430\u0440:"}),(0,o.jsx)("p",{className:"booking-header__text",children:j.title})]})]})}),(0,o.jsxs)("div",{className:"booking__date date-booking",children:[(0,o.jsxs)("p",{className:"date-booking__text",children:[(0,o.jsx)("span",{className:"date-booking__title",children:"\u0417\u0430\u0435\u0437\u0434:"})," ",(0,o.jsxs)("span",{className:"date-booking__description",children:[(0,x.q8)(s.entry)," \u0432 13:00"]})]}),(0,o.jsxs)("p",{className:"date-booking__text",children:[(0,o.jsx)("span",{className:"date-booking__title",children:"\u0412\u044b\u0435\u0437\u0434:"})," ",(0,o.jsxs)("span",{className:"date-booking__description",children:[(0,x.q8)(s.departure)," \u0432 13:00"]})]})]}),(0,o.jsxs)("div",{className:"booking-buttons",children:[(0,o.jsx)(m.Z,{onClick:function(){return p("/estates/".concat(j._id))},className:"booking-buttons__item",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0442\u043e\u0432\u0430\u0440\u0430"}),(0,o.jsx)(m.Z,{onClick:f,className:"booking-buttons__item outlined",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0447\u0435\u043a"}),k&&(0,o.jsx)(m.Z,{onClick:function(){return e=s,void l((0,i.Lu)(e._id));var e},className:"booking-buttons__item cancel",children:"\u0421\u043d\u044f\u0442\u044c \u0431\u0440\u043e\u043d\u044c"})]}),(0,o.jsx)(c.yg,{booking:s,open:N,onClose:v})]}):null},g=function(e){var s=e.role,n=e.currentUserId,r=void 0===n?"":n,c=(0,t.Js)((0,i.Ju)(r)),l=(0,t.Js)((0,i.P9)()),m=(0,a.ui)("ADMIN"===s?l:c,3,1),_=m.page,u=m.itemsListCrop,h=m.limit,x=m.handlePageChange;return(0,o.jsx)(o.Fragment,{children:u.length>0?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("ul",{className:"booking__list",children:u.map((function(e){return(0,o.jsx)("li",{className:"booking__item",children:(0,o.jsx)(j,{role:s,item:e})},e._id)}))}),(0,o.jsx)(d.Z,{currentPage:_,itemsCount:(null===c||void 0===c?void 0:c.length)||l.length,onPageChange:x,pageSize:h})]}):(0,o.jsx)("p",{className:"booking__error-message",children:"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0439"})})},N=l},2089:function(e,s,n){n.d(s,{Z:function(){return u}});var a=n(9439),t=n(2791),i=n(7689),r=n(5957),c=n(2455),o=n(4282),l=n(5110),d=n(7284),m=n(693),_=n(184),u=function(e){var s,n=e.comment,u=e.onAnswer,h=(0,t.useState)(!1),x=(0,a.Z)(h,2),j=x[0],g=x[1],N=(0,r.Js)((0,r.M7)()),f=(0,r.Js)((0,r.Ts)()),v=(0,r.Js)((0,r.GA)(n.userId)),p=(0,r.Js)((0,r.GA)(n.answerOn)),k=(0,r.TL)(),b=(0,i.s0)();return v?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:"estate-comments__user",children:[(0,_.jsxs)("div",{className:"estate-comments__header comment-header",children:[(0,_.jsxs)("div",{className:"comment-header__info",children:[(0,_.jsx)("div",{className:"comment-header__avatar avatar",children:(0,_.jsx)("img",{src:v.avatarImage,alt:"Avatar"})}),(0,_.jsx)("span",{className:"comment-header__name",onClick:function(){return b("/users/".concat(v._id))},children:v.name}),N&&(null===f||void 0===f?void 0:f._id)!==v._id&&(0,_.jsx)("span",{className:"comment-header__answer-text",onClick:function(){return u(v._id||"")},children:"\u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"})]}),(0,_.jsxs)("div",{className:"comment-header__description",children:[p&&(0,_.jsxs)("p",{className:"comment-header__answer-user",children:["\u041e\u0442\u0432\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e: ",p.name]}),(0,_.jsx)(m.Z,{name:"rating",labelText:"\u041e\u0446\u0435\u043d\u043a\u0430:",readOnly:!0,defaultState:n.rating})]})]}),(0,_.jsxs)("div",{className:"estate-comments__main comment-main",children:[(0,_.jsx)("span",{className:"comment-main__created",children:(0,o.Po)(n.createdAt)}),f&&f._id===v._id&&(0,_.jsx)(l.Z,{onClick:function(){return e=n._id||"",void k((0,c.PN)(e));var e},className:"comment-main__remove",children:(0,_.jsx)(d.Z,{name:"delete"})})]})]}),(0,_.jsx)("div",{className:"estate-comments__content comments-content",children:(0,_.jsxs)("p",{className:"comments-content__description",children:[(s=n.content,s.length>=80?j?s:s.slice(0,80):s)," ",n.content.length>80&&(0,_.jsx)("span",{className:"comments-content__text",onClick:function(){g((function(e){return!e}))},children:j?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e"})]})})]}):null}},5928:function(e,s,n){n.d(s,{is:function(){return u},V9:function(){return D},LM:function(){return R},AN:function(){return E},ZV:function(){return S},s6:function(){return y},FG:function(){return o}});var a=n(2791),t=n(7689),i=n(5957),r=n(3884),c=n(184),o=function(){(0,i.TL)(),(0,t.TH)();return(0,c.jsx)("div",{className:"header-estates",children:(0,c.jsxs)("div",{className:"_container",children:[(0,c.jsx)(r.ZP,{}),(0,c.jsx)("h3",{className:"header-estates__title",children:"\u0410\u0440\u0435\u043d\u0434\u0430 \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"})]})})},l=n(1413),d=n(1087),m=n(7033),_=n(2501),u=function(){var e=(0,i.Js)((0,i.M7)()),s=(0,t.UO)().estateId,n=(0,i.Js)((0,m.hF)(s));return n?(0,c.jsxs)("section",{className:"estates-booking",children:[(0,c.jsx)("h2",{className:"estates-booking__title",children:"\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),(0,c.jsx)("div",{className:"estates-booking__block",children:e?(0,c.jsx)(_.ZP,(0,l.Z)({},n)):(0,c.jsxs)("p",{className:"estate-booking__error",children:["\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e"," ",(0,c.jsx)(d.OL,{to:"/login/signin",className:"estate-booking__error _link",children:"\u0432\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]})})]}):null},h=n(8254),x=n(8955),j=n(8807),g=n(8634),N=n(2297),f=n(7284),v=n(693),p=n(8640),k=n(1071),b=function(e){var s=e.ownerId,n=(0,a.useRef)(null),t=(0,h.XF)(n),i=t.isOpen,r=t.handleOpen;return(0,c.jsxs)("div",{className:"owner-wrapper",children:[(0,c.jsxs)("button",{type:"button",ref:n,className:"show-owner",onClick:r,children:[(0,c.jsx)(f.Z,{name:"phone"}),"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"]}),(0,c.jsx)("div",{className:"owner"+(i?" _active":""),children:(0,c.jsx)(k.Z,{ownerId:s})})]})},Z=a.memo(b),C=function(e){var s=e.estate,n=(0,h.lZ)(s._id),a=n.isFavourite,t=n.handleSelectFavorite,r=(0,i.Js)((0,i.rc)()),o=(0,i.Js)((0,x.h3)(s.cityId)),l=(0,g.p)(s.description||"",219),_=(0,i.Js)((0,m.Pq)(s._id));return(0,c.jsxs)("div",{className:"estates-products__card estate-card",children:[(0,c.jsx)("div",{className:"estate-card__functions",children:r===s.info.ownerId&&(0,c.jsx)(d.OL,{to:"/estates/".concat(s._id,"/edit"),className:"estate-card__edit",children:(0,c.jsx)(f.Z,{name:"edit"})})}),(0,c.jsx)("div",{className:"estate-card__images",children:(0,c.jsx)(p.Z,{items:s.images,pagination:{clickable:!0},grabCursor:!0,className:"estate-card__img"})}),(0,c.jsxs)("div",{className:"estate-card__content",children:[(0,c.jsxs)("div",{className:"estate-card__header",children:[(0,c.jsxs)("div",{className:"estate-card__price",children:[(0,c.jsxs)("span",{children:[s.price," RUB"]}),"\u0437\u0430 \u0441\u0443\u0442\u043a\u0438"]}),_&&(0,c.jsx)(v.Z,{name:"rating",readOnly:!0,defaultState:(0,j._)(_)})]}),(0,c.jsx)("div",{className:"estate-card__title",children:s.title}),(0,c.jsxs)("div",{className:"estate-card__location",children:[(0,c.jsx)(f.Z,{name:"mark"}),o&&o.name]}),(0,c.jsx)("div",{className:"estate-card__description",children:l}),(0,c.jsxs)("div",{className:"estate-card__contacts",children:[(0,c.jsx)(N.Z,{status:a||!1,onToggle:t}),(0,c.jsx)(Z,{ownerId:s.info.ownerId}),(0,c.jsx)(d.OL,{to:"/estates/".concat(s._id),className:"estate-card__more",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})]})]})},w=function(e){var s=e.estates;return 0===s.length?(0,c.jsx)("p",{className:"main-estates__title",children:"\u041a \u0441\u043e\u0436\u0435\u043b\u0435\u043d\u0438\u044e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):(0,c.jsx)(c.Fragment,{children:s.map((function(e){return(0,c.jsx)(C,{estate:e},e._id)}))})},y=w,J=n(3240),P=n(1718),I=n(7162),F=n(4282),O=n(7738),A={entry:(0,F.tl)(1),departure:(0,F.tl)(2),city:"",brand:"",type:"",priceMax:"",priceMin:""},S=function(e){var s=e.onReset,n=e.onFilter,t=(0,i.Js)((0,m.f8)()),r=(0,i.Js)((0,I.PD)()),o=P.ZP.fromSessionStorage(J.up),l=(0,h.cI)(o||A,!1,{}),d=l.data,_=l.handleChange,u=l.setData;(0,a.useEffect)((function(){!t&&!r&&n(d,[])}),[d,t,r]);return(0,c.jsx)("div",{className:"estates-filters",children:(0,c.jsx)("div",{className:"estates-filters__container _container",children:(0,c.jsx)(O.vl,{data:d,onChange:_,handleReset:function(){s(),u(A)}})})})},L=(n(2089),n(718)),T=n(7304),q=[{name:"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e",value:{path:"title",order:"desc"}},{name:"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e",value:{path:"title",order:"asc"}},{name:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u0435\u0448\u0451\u0432\u044b\u0435",value:{path:"price",order:"asc"}},{name:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0434\u043e\u0440\u043e\u0433\u0438\u0435",value:{path:"price",order:"desc"}}],R=function(e){var s=e.sortBy,n=e.onSort,a=e.limit,t=e.handleLimitChange;return(0,c.jsxs)("div",{className:"estate-sort",children:[(0,c.jsx)(T.fw,{icon:"down-sort",name:"estateSort",label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:",defaultValue:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...",onChange:n,value:JSON.stringify(s),options:q}),(0,c.jsx)(T.fw,{icon:"options",name:"limit",defaultValue:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...",label:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043f\u043e",onChange:t,value:a,options:L.QW})]})},M=n(5110),D=function(e){var s=e.setDirectionList,n=e.setDirectionTiels;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(M.Z,{onClick:s,className:"estates-view__item",children:[(0,c.jsx)(f.Z,{name:"tile"}),"\u0421\u043f\u0438\u0441\u043e\u043a"]}),(0,c.jsxs)(M.Z,{onClick:n,className:"estates-view__item",children:[(0,c.jsx)(f.Z,{name:"grid"}),"\u041f\u043b\u0438\u0442\u043a\u0438"]})]})},G=n(9439),B=n(9230),E=function(e){var s=e.data,n=(0,B.$G)().t,a=function e(s){return"object"===typeof s?Array.isArray(s)?(0,c.jsx)("ul",{children:s.map((function(s,n){return(0,c.jsx)("li",{children:e(s)},n)}))}):(0,c.jsx)("table",{className:"estates-features__list",children:(0,c.jsx)("tbody",{children:Object.entries(s).map((function(s){var a=(0,G.Z)(s,2),t=a[0],i=a[1];return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:n("info."+t)}),(0,c.jsx)("td",{children:e(i)})]},t)}))})}):s};return(0,c.jsx)("div",{className:"estates-features",children:(0,c.jsx)("table",{className:"estates-features__list",children:(0,c.jsx)("tbody",{children:Object.entries(s).map((function(e){var s=(0,G.Z)(e,2),t=s[0],i=s[1];return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:n("info."+t)}),(0,c.jsx)("td",{children:a(i)})]},t)}))})})})}},5381:function(e,s,n){n.d(s,{yg:function(){return h},dY:function(){return j},ZP:function(){return g}});var a=n(1413),t=n(4925),i=(n(2791),n(5110)),r=n(7689),c=n(5957),o=n(7033),l=n(4282),d=n(184),m=["currentBooking","open","onClose"],_=function(e){var s=e.currentBooking,n=e.open,_=e.onClose,u=(0,t.Z)(e,m),h=(0,r.s0)(),x=(0,c.Js)((0,o.hF)(s.estateId)),j=(0,c.Js)((0,c.rc)());return(0,d.jsx)("div",(0,a.Z)((0,a.Z)({className:"modal"+(n?" _open":"")},u),{},{onClick:_,children:(0,d.jsxs)("div",{className:"estate-booking__modal",onClick:function(e){return e.stopPropagation()},children:[(0,d.jsx)("div",{className:"estate-booking__modal-success_block",children:(0,d.jsx)("h3",{className:"estate-booking__modal-title",children:"\u0422\u043e\u0432\u0430\u0440 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d"})}),(0,d.jsxs)("ul",{className:"estate-booking__modal-list",children:[(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u0422\u043e\u0432\u0430\u0440: ",x.title]})}),(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441:"," ",(0,l.q8)(s.entry)," (13:00)"]})}),(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u0414\u043e: ",(0,l.q8)(s.departure),"(13:00)"]})}),(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u041d\u043e\u043c\u0435\u0440 \u0431\u0440\u043e\u043d\u0438: ",s._id]})})]}),(0,d.jsx)("div",{className:"divider"}),(0,d.jsxs)("h3",{className:"estate-booking__modal-price",children:["\u0418\u0442\u043e\u0433\u043e: ",s.totalPrice," \u0440\u0443\u0431\u043b\u0435\u0439"]}),(0,d.jsx)(i.Z,{className:"estate-booking__button",onClick:function(){return h("/users/".concat(j,"/booking"))},children:"\u041c\u043e\u0438 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"})]})}))},u=n(925),h=function(e){var s=e.booking,n=e.open,a=e.onClose,t=(0,c.Js)((0,o.hF)(s.estateId));return(0,d.jsx)("div",{className:"modal"+(n?" _open":""),onClick:a,children:(0,d.jsxs)("div",{className:"estate-booking__modal",children:[(0,d.jsxs)("div",{onClick:function(e){return e.stopPropagation()},children:[(0,d.jsx)("div",{className:"estate-booking__modal-success_block",children:(0,d.jsx)(u.Z,{value:"\u041d\u043e\u043c\u0435\u0440 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f "+s._id,size:180})}),(0,d.jsxs)("ul",{className:"estate-booking__modal-list",children:[(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u0422\u043e\u0432\u0430\u0440: ",t.title]})}),(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441: ",(0,l.q8)(s.entry)," ","(13:00)"]})}),(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u0414\u043e: ",(0,l.q8)(s.departure),"(13:00)"]})}),(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u041d\u043e\u043c\u0435\u0440 \u0431\u0440\u043e\u043d\u0438: ",s._id]})})]}),(0,d.jsx)("div",{className:"divider"}),(0,d.jsxs)("h3",{className:"estate-booking__modal-price",children:["\u0418\u0442\u043e\u0433\u043e: ",s.totalPrice," \u0440\u0443\u0431\u043b\u0435\u0439"]})]}),(0,d.jsx)(i.Z,{className:"estate-booking__button",onClick:a,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})},x=["ticket","onRemoveTicket","open","onClose"],j=function(e){var s=e.ticket,n=e.onRemoveTicket,r=e.open,c=e.onClose,o=(0,t.Z)(e,x);return(0,d.jsx)("div",(0,a.Z)((0,a.Z)({className:"modal"+(r?" _open":"")},o),{},{onClick:c,children:(0,d.jsxs)("div",{className:"estate-booking__modal",onClick:function(e){return e.stopPropagation()},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"estate-booking__modal-success_block",children:(0,d.jsxs)("span",{className:"admin__ticket-id",children:["\u2116",s._id]})}),(0,d.jsxs)("ul",{className:"estate-booking__modal-list",children:[(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u0418\u043c\u044f: ",s.name]})}),(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u0422\u0438\u043f: ",function(e){switch(e){case"errors":return"\u0411\u0430\u0433\u0438";case"offer":return"\u0412\u043e\u043f\u0440\u043e\u0441";case"other":return"\u041f\u0440\u043e\u0447\u0435\u0435";default:return e}}(s.cause)]})}),(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["Email: ",s.email]})}),(0,d.jsx)("li",{className:"estate-booking__modal-item",children:(0,d.jsxs)("span",{className:"estate-booking__modal-info",children:["\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: ",s.message]})})]})]}),(0,d.jsx)(i.Z,{className:"estate-booking__button",onClick:function(){return n(s._id)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0422\u0438\u043a\u0435\u0442"})]})}))},g=_},1071:function(e,s,n){n.d(s,{Z:function(){return o}});n(2791);var a=n(1087),t=n(5957),i=n(4282),r=n(7284),c=n(184),o=function(e){var s=e.ownerId,n=(0,t.Js)((0,t.GA)(s));if(n){var o=(0,i.q8)(n.birthYear),l=(0,i.q8)(n.createdAt);return(0,c.jsxs)("div",{className:"owner__body",children:[(0,c.jsx)("div",{className:"owner__image",children:(0,c.jsx)("img",{src:n.avatarImage,alt:"Avatat"})}),(0,c.jsxs)("div",{className:"owner__content",children:[(0,c.jsx)("p",{className:"owner__title",children:"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446"}),(0,c.jsx)("h3",{className:"owner__name",children:n.name}),(0,c.jsxs)("ul",{className:"owner__list",children:[(0,c.jsxs)("li",{className:"owner__item",children:["\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",(0,c.jsx)("span",{children:o})]}),(0,c.jsxs)("li",{className:"owner__item",children:["\u041d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441 - ",(0,c.jsx)("span",{children:l})]})]}),(0,c.jsx)("div",{className:"owner-contacts",children:(0,c.jsxs)(a.OL,{className:"owner-contacts__item",target:"_blank",to:"https://"+n.email,children:[(0,c.jsx)("div",{className:"owner-contacts__icon",children:(0,c.jsx)(r.Z,{name:"email"})}),(0,c.jsx)("p",{children:n.email})]})})]})]})}return(0,c.jsx)("h1",{children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"})}},718:function(e,s,n){n.d(s,{QW:function(){return a}});var a=[{value:3,name:"3"},{value:6,name:"6"},{value:12,name:"12"},{value:18,name:"18"}]},3240:function(e,s,n){n.d(s,{Zm:function(){return t},up:function(){return a}});var a="user-filters-data",t="admin-filters-data"},8807:function(e,s,n){function a(e){var s=0;return e.forEach((function(e){s+=Number(e)})),(s/e.length).toFixed(0).toString()}n.d(s,{_:function(){return a}})}}]);
//# sourceMappingURL=928.884e4af8.chunk.js.map