"use strict";(self.webpackChunksdaem_by=self.webpackChunksdaem_by||[]).push([[93],{4289:function(e,s,a){a.d(s,{Z:function(){return t}});a(2791);var n=a(184),t=function(e){var s=e.itemsCount,a=e.pageSize,t=e.currentPage,r=e.onPageChange,i=Math.ceil(s/a);if(1===i)return null;var c=Array.from({length:i},(function(e,s){return s+1}));return(0,n.jsx)("ul",{className:"pagination",children:c.map((function(e){return(0,n.jsx)("li",{className:"pagination__item "+(e===t?"_active":""),children:(0,n.jsx)("span",{onClick:function(){return r(e)},children:e})},"page_"+e)}))})}},1266:function(e,s,a){a.d(s,{Z:function(){return o}});var n=a(2791),t=a(5110),r=a(7304),i=a(7284),c=a(184),l=function(e){var s=e.label,a=e.value,n=e.onChange,l=e.error;return(0,c.jsxs)("div",{className:"searchbar",children:[(0,c.jsx)(r.nv,{className:"searchbar__input",name:"search",onChange:n,value:a,placeholder:s,error:l}),(0,c.jsx)(t.Z,{className:"searchbar__btn",children:(0,c.jsx)(i.Z,{name:"search",svgClass:"searchbar__icon"})})]})},o=n.memo(l)},2914:function(e,s,a){a.d(s,{Z:function(){return t}});a(2791);var n=a(184),t=function(e){var s=e.children,a=e.className;return(0,n.jsx)("section",{className:a,children:(0,n.jsx)("div",{className:a+"__container _container",children:s})})}},3659:function(e,s,a){a(2791);var n=a(184);s.Z=function(){return(0,n.jsx)("div",{className:"shimmer-wrapper",children:(0,n.jsx)("div",{className:"shimmer"})})}},1282:function(e,s,a){a(2791);var n=a(184);s.Z=function(e){var s=e.type,a="skeleton ".concat(s);return(0,n.jsx)("div",{className:a})}},7093:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});a(2791);var n=a(9434),t=a(8254),r=a(5957),i=a(3884),c=a(4289),l=a(1266),o=a(2914),d=a(3659),u=a(1282),m=a(184),h=function(e){var s=e.theme||"light";return(0,m.jsxs)("div",{className:"skeleton-wrapper ".concat(s),children:[(0,m.jsxs)("div",{className:"skeleton-post",children:[(0,m.jsx)(u.Z,{type:"image"}),(0,m.jsxs)("div",{className:"skeleton-post__content",children:[(0,m.jsx)(u.Z,{type:"title"}),(0,m.jsx)(u.Z,{type:"text"}),(0,m.jsx)(u.Z,{type:"line"}),(0,m.jsxs)("div",{className:"skeleton-buttons",children:[(0,m.jsx)(u.Z,{type:"button"}),(0,m.jsx)(u.Z,{type:"button"})]})]})]}),(0,m.jsx)(d.Z,{})]})},x=function(e){var s=e.count,a=void 0===s?6:s;return(0,m.jsx)("div",{className:"skeleton-posts",children:(0,m.jsx)("ul",{className:"skeleton-posts__list",children:Array(a).fill("").map((function(e,s){return(0,m.jsx)("li",{className:"skeleton-posts__item",children:(0,m.jsx)(h,{})},a-s)}))})})},p=a(778),j=[{name:"6",value:6},{name:"12",value:12},{name:"18",value:18},{name:"24",value:24}],v=function(){var e=(0,n.v9)((0,r.Bu)()),s=(0,n.v9)((0,r.k2)()),a=(0,t.Rx)(e,{searchBy:"title"}),d=a.filteredData,u=a.searchTerm,h=a.handleChangeSearch,v=(0,t.ZO)(d||[],{path:"title",order:"desc"}).sortedItems,_=(0,t.ui)(v||[],j[0].value,1),f=_.itemsListCrop,N=_.limit,g=_.page,Z=_.handlePageChange;return(0,m.jsxs)(o.Z,{className:"posts",children:[(0,m.jsx)(i.ZP,{}),(0,m.jsxs)("div",{className:"posts__header posts-header",children:[(0,m.jsx)("h3",{className:"posts-header__title",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}),(0,m.jsx)("div",{className:"posts-header__form",children:(0,m.jsx)(l.Z,{value:u,onChange:h,label:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0442\u0430\u0442\u044c\u044f\u043c..."})})]}),(0,m.jsxs)("div",{className:"posts__content",children:[s?(0,m.jsx)(x,{}):(0,m.jsx)(p.E,{items:f}),v.length>N&&(0,m.jsx)(c.Z,{onPageChange:Z,itemsCount:v.length,currentPage:g,pageSize:N}),0===f.length&&(0,m.jsx)("h2",{className:"info-title",children:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043f\u043e\u0441\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."})]})]})}},778:function(e,s,a){a.d(s,{E:function(){return p}});var n=a(1413),t=a(4925),r=a(2791),i=a(1087),c=a(4282),l=a(8634),o=a(5110),d=a(184),u=["item"],m=function(e){var s=e.item,a=((0,t.Z)(e,u),(0,l.p)(s.previewText,219)),n=(0,c.q8)(s.createdAt);return(0,d.jsxs)("div",{className:"post-card",children:[(0,d.jsx)("div",{className:"post-card__image _ibg",children:(0,d.jsx)("img",{src:s.image,alt:""})}),(0,d.jsxs)("div",{className:"post-card__body",children:[(0,d.jsx)("h3",{className:"post-card__title",children:s.title}),(0,d.jsx)("div",{className:"post-card__text",children:a}),(0,d.jsxs)("div",{className:"post-card__info",children:[(0,d.jsx)(o.Z,{className:"post-card__date",children:n}),(0,d.jsx)(i.OL,{to:"/posts/".concat(s._id),children:(0,d.jsx)(o.Z,{className:"post-card__read",children:"\u0427\u0438\u0442\u0430\u0442\u044c"})})]})]})]})},h=r.memo(m),x=["items"],p=function(e){var s=e.items,a=(0,t.Z)(e,x);return(0,d.jsx)("ul",{className:"posts__list posts-list",children:s.map((function(e){return(0,d.jsx)("li",{className:"posts-list__item",children:(0,d.jsx)(h,(0,n.Z)({item:e},a))},e._id)}))})}}}]);
//# sourceMappingURL=93.e6c6e4e4.chunk.js.map