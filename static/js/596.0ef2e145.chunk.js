"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[596],{1812:function(e,t,c){c.d(t,{Bg:function(){return i},vN:function(){return o},Ct:function(){return a},zb:function(){return d},Uk:function(){return l},Xp:function(){return n}});function s(e){var t,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("https://fe-may23-syncwave-product-catalog.onrender.com/"+e,s)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var r={get:function(e){return s(e)},post:function(e,t){return s(e,"POST",t)},delete:function(e){return s(e,"DELETE")}},n=function(e){return r.get(e)},i=function(e){return r.get(e)},a=function(){return r.get("home/hightPrice")},o=function(){return r.get("home/bestDiscount")},d=function(){return r.get("home/newest")};function l(e){var t=e;return r.get(t)}},2615:function(e,t,c){c.d(t,{a:function(){return d},w:function(){return u}});var s=c(4942),r=c(1694),n=c.n(r),i=c(3863),a=c(2791),o=c(184),d=function(e){var t,c=e.product,r=e.styles,d=(0,a.useContext)(i.A9),l=d.saveToCart,u=d.cart,p=(0,a.useContext)(i.Tr),m=p.darkTheme,h=p.notifyCart,f=u.some((function(e){return e.itemId===c.itemId}));return(0,o.jsx)("div",{className:"cart-button",children:(0,o.jsx)("button",{type:"button",className:n()(r[0],(t={},(0,s.Z)(t,r[1],f),(0,s.Z)(t,"product__add--dark",m&&f),t)),onClick:function(){l(c),h()},disabled:f,children:f?"Added to cart":"Add to cart"})})},l=c(9075),u=function(e){var t,c=e.product,r=e.styles,i=a.useContext(l.T),d=i.favProducts,u=i.handleLike,p=i.darkTheme,m=i.notifyFavs,h=i.notifyFavsDelete,f=d.find((function(e){return e.productId===c.productId})),_=void 0!==f;return(0,o.jsx)("div",{className:"favourites-button",children:(0,o.jsx)("button",{type:"button",className:n()(r[0],r[2],(t={},(0,s.Z)(t,r[1],f),(0,s.Z)(t,"product__favourites-dark",p),t)),onClick:function(){u(c),_?h():m()},children:(0,o.jsx)("p",{hidden:!0,children:"add to favourites"})})})}},6994:function(e,t,c){c.d(t,{I:function(){return d}});c(2791),c(9386);var s=c(1087),r=c(3963),n=c(6591),i=c(6910),a=c(2615),o=c(184),d=function(e){var t=e.product,c=(0,i.M)(t.itemId),d=[["Screen",t.screen],["Capacity",(0,r.O)(t.capacity_id||0,n.rW)],["RAM",t.ram]],l=[["Color",(0,r.O)(t.color_id||0,n.NV)],["Made in","USA"]];return(0,o.jsx)("li",{className:"product",children:(0,o.jsxs)("div",{className:"product__container",children:[(0,o.jsxs)(s.rU,{to:"/".concat((0,r.O)(t.category_id,n.cr),"/").concat(t.itemId),relative:"path",className:"product__link",children:[(0,o.jsx)("div",{className:"product__image-block",children:(0,o.jsx)("img",{src:"".concat("https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/","/").concat(t.image),alt:t.name,className:"product__image"})}),(0,o.jsx)("h2",{className:"product__title",children:"".concat(t.name," (").concat(c,")")})]}),(0,o.jsxs)("div",{className:"product__prices",children:[(0,o.jsx)("p",{className:"product__price",children:t.discountPrice?"$".concat(t.discountPrice):"$".concat(t.fullPrice)}),t.discountPrice&&(0,o.jsx)("p",{className:"product__price-full",children:"$".concat(t.fullPrice)})]}),(0,o.jsx)("div",{className:"product__techspecs",children:1===t.category_id||2===t.category_id?d.map((function(e){return(0,o.jsxs)("div",{className:"product__techspecs-block",children:[(0,o.jsx)("p",{className:"product__techspecs-title",children:e[0]}),(0,o.jsx)("p",{className:"product__techspecs-data",children:e[1]})]},e[0])})):l.map((function(e){return(0,o.jsxs)("div",{className:"product__techspecs-block",children:[(0,o.jsx)("p",{className:"product__techspecs-title",children:e[0]}),(0,o.jsx)("p",{className:"product__techspecs-data",children:e[1]})]},e[0])}))}),(0,o.jsxs)("div",{className:"product__buttons",children:[(0,o.jsx)(a.a,{product:t,styles:["product__add","product__add--active"]}),(0,o.jsx)(a.w,{product:t,styles:["product__favourites","product__favourites--active"]})]})]})})}},9967:function(e,t,c){c.d(t,{Z:function(){return a}});c(2791);var s=c(9705),r=c(5986),n=(c(6242),c(6994)),i=c(184),a=function(e){return(0,i.jsxs)("div",{className:"products-slider",children:[(0,i.jsx)("div",{className:"products-slider__container",children:(0,i.jsx)("h2",{className:"products-slider__title",children:e.title})}),(0,i.jsx)("div",{className:"slider-items",children:(0,i.jsx)(s.tq,{modules:[r.s5,r.W_,r.tl],slidesPerView:1,spaceBetween:18,breakpoints:{320:{slidesPerView:1.5,spaceBetween:18},640:{slidesPerView:2.3,spaceBetween:70},730:{slidesPerView:2.5,spaceBetween:18},1050:{slidesPerView:3.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},navigation:!0,children:e.phones.map((function(e){return(0,i.jsx)(s.o5,{children:(0,i.jsx)(n.I,{product:e})},e.id)}))})})]})}},9713:function(e,t,c){c.r(t),c.d(t,{HomePage:function(){return v}});var s=c(9439),r=c(2791),n=(c(6242),c(5986)),i=c(9705),a=c.p+"static/media/banner-phones.b4eeda8bd82b712057a2.png",o=c.p+"static/media/banner-tablets.a962057c1043a08f7737.png",d=c.p+"static/media/banner-accessories.bdd2e0fca0159e52f41c.png",l=c(184),u=function(){return(0,l.jsx)("div",{className:"fullWidth",children:(0,l.jsx)("div",{className:"main-banner",children:(0,l.jsxs)(i.tq,{modules:[n.pt,n.tl,n.W_,n.xW,n.s5],className:"swiper-container",autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,pagination:{clickable:!0},navigation:!0,effect:"fade",slidesPerView:1,spaceBetween:0,children:[(0,l.jsx)(i.o5,{children:(0,l.jsx)("img",{className:"carousel-img",src:a,alt:"Phones now available in our store!"})}),(0,l.jsx)(i.o5,{children:(0,l.jsx)("img",{className:"carousel-img",src:o,alt:"Tablets now available in our store!"})}),(0,l.jsx)(i.o5,{children:(0,l.jsx)("img",{className:"carousel-img",src:d,alt:"Accessories now available in our store!"})})]})})})},p=c(9967),m=c(1087),h=c.p+"static/media/category-phones.af93d992917380dfe206.png",f=c.p+"static/media/category-tablets.51782e18205a1ca01ce8.png",_=c.p+"static/media/category-accessories.e47d6d6df68a6548e82b.png",g=function(){return(0,l.jsxs)("div",{className:"product-categories",children:[(0,l.jsx)("h2",{className:"product-categories__title",children:"Shop by category"}),(0,l.jsxs)("div",{className:"product-categories__list",children:[(0,l.jsxs)(m.rU,{to:"/phones",className:"product-categories__item",children:[(0,l.jsx)("div",{className:"product-categories__image-wrapper",children:(0,l.jsx)("img",{src:h,alt:"phones",className:"product-categories__image"})}),(0,l.jsx)("h3",{className:"product-categories__subtitle",children:"Phones"}),(0,l.jsx)("p",{className:"product-categories__description",children:"95 models"})]}),(0,l.jsxs)(m.rU,{to:"/tablets",className:"product-categories__item",children:[(0,l.jsx)("div",{className:"product-categories__image-wrapper",children:(0,l.jsx)("img",{src:f,alt:"tablets",className:"product-categories__image"})}),(0,l.jsx)("h3",{className:"product-categories__subtitle",children:"Tablets"}),(0,l.jsx)("p",{className:"product-categories__description",children:"24 models"})]}),(0,l.jsxs)(m.rU,{to:"/accessories",className:"product-categories__item",children:[(0,l.jsx)("div",{className:"product-categories__image-wrapper",children:(0,l.jsx)("img",{src:_,alt:"accessories",className:"product-categories__image"})}),(0,l.jsx)("h3",{className:"product-categories__subtitle",children:"Accessories"}),(0,l.jsx)("p",{className:"product-categories__description",children:"100 models"})]})]})]})},x=c(1812),j=c(3920),v=function(){var e=(0,r.useState)([]),t=(0,s.Z)(e,2),c=t[0],n=t[1],i=(0,r.useState)([]),a=(0,s.Z)(i,2),o=a[0],d=a[1],m=(0,r.useState)(!0),h=(0,s.Z)(m,2),f=(h[0],h[1]),_=(0,j._)("productsData",[]),v=(0,s.Z)(_,2);v[0],v[1];return(0,r.useEffect)((function(){(0,x.Ct)().then((function(e){var t=e.hightPrice;d(t)})).catch((function(){f(!1)})),(0,x.vN)().then((function(e){var t=e.bestDiscount;n(t)})).catch((function(){f(!1)}))}),[]),(0,r.useEffect)((function(){o.length>0&&c.length>0&&f(!1)}),[o,c]),(0,l.jsxs)("div",{className:"home-page",children:[(0,l.jsx)("h1",{className:"home-page__title",children:"Welcome to Nice Gadgets store!"}),(0,l.jsx)(u,{}),(0,l.jsx)(p.Z,{title:"Brand new models",phones:o}),(0,l.jsx)(g,{}),(0,l.jsx)(p.Z,{title:"Hot prices",phones:c})]})}},6591:function(e,t,c){c.d(t,{NV:function(){return n},cr:function(){return r},rW:function(){return s}});var s={1:"32GB",2:"64GB",3:"128GB",4:"256GB",5:"512GB"},r={1:"phones",2:"tablets",3:"accessories"},n={1:"black",2:"gold",3:"yellow",4:"green",5:"silver",6:"spacegray",7:"red",8:"white",9:"purple",10:"midnightgreen",11:"coral",12:"rosegold",13:"gray",14:"blue",15:"pink"}},6910:function(e,t,c){function s(e){return e.split("-").map((function(e){return e[0].toUpperCase()})).join("")}c.d(t,{M:function(){return s}})},3963:function(e,t,c){function s(e,t){return t[e]}c.d(t,{O:function(){return s}})},9386:function(){}}]);
//# sourceMappingURL=596.0ef2e145.chunk.js.map