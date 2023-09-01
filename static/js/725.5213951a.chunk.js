"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[725],{2615:function(e,s,c){c.d(s,{a:function(){return r},w:function(){return d}});var a=c(4942),n=c(1694),i=c.n(n),t=c(184),r=function(e){var s=e.product,c=e.styles;return console.log(s),(0,t.jsx)("div",{className:"cart-button",children:(0,t.jsx)("button",{type:"button",className:i()(c[0],(0,a.Z)({},c[1],false)),children:"Add to cart"})})},o=c(5790),l=c(2791),d=function(e){var s,c=e.product,n=e.styles,r=l.useContext(o.T),d=r.products,p=r.handleLike,u=r.darkTheme,m=d.find((function(e){return e.phoneId===c.phoneId}));return(0,t.jsx)("div",{className:"favourites-button",children:(0,t.jsx)("button",{type:"button",className:i()(n[0],n[2],(s={},(0,a.Z)(s,n[1],m),(0,a.Z)(s,"product__favourites-dark",u),s)),onClick:function(){return p(c)},children:(0,t.jsx)("p",{hidden:!0,children:"add to favourites"})})})}},6994:function(e,s,c){c.d(s,{I:function(){return t}});c(2791),c(9386);var a=c(1087),n=c(2615),i=c(184),t=function(e){var s=e.product;return(0,i.jsxs)("li",{className:"product",children:[(0,i.jsxs)(a.rU,{to:s.phoneId,className:"product__link",children:[(0,i.jsx)("div",{className:"product__image-block",children:(0,i.jsx)("img",{src:"".concat("https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/","/").concat(s.image),alt:s.name,className:"product__image"})}),(0,i.jsx)("h2",{className:"product__title",children:"".concat(s.name," (XXXXX)")})]}),(0,i.jsxs)("div",{className:"product__prices",children:[(0,i.jsx)("p",{className:"product__price",children:"$".concat(s.price)}),(0,i.jsx)("p",{className:"product__price-full",children:"$".concat(s.fullPrice)})]}),(0,i.jsxs)("div",{className:"product__info",children:[(0,i.jsxs)("div",{className:"product__info-block",children:[(0,i.jsx)("p",{className:"product__info-title",children:"Screen"}),(0,i.jsx)("p",{className:"product__info-data",children:s.screen})]}),(0,i.jsxs)("div",{className:"product__info-block",children:[(0,i.jsx)("p",{className:"product__info-title",children:"Capacity"}),(0,i.jsx)("p",{className:"product__info-data",children:s.capacity})]}),(0,i.jsxs)("div",{className:"product__info-block",children:[(0,i.jsx)("p",{className:"product__info-title",children:"RAM"}),(0,i.jsx)("p",{className:"product__info-data",children:s.ram})]})]}),(0,i.jsxs)("div",{className:"product__buttons",children:[(0,i.jsx)(n.a,{product:s,styles:["product__add","product__add--active"]}),(0,i.jsx)(n.w,{product:s,styles:["product__favourites","product__favourites--active"]})]})]})}},9967:function(e,s,c){c.d(s,{Z:function(){return r}});c(2791);var a=c(4750),n=c(5986),i=(c(6242),c(6994)),t=c(184),r=function(e){return(0,t.jsxs)("div",{className:"products-slider",children:[(0,t.jsx)("div",{className:"products-slider__container",children:(0,t.jsx)("h2",{className:"products-slider__title",children:e.title})}),(0,t.jsx)("div",{className:"slider-items",children:(0,t.jsx)(a.tq,{modules:[n.s5,n.W_,n.tl],slidesPerView:1,spaceBetween:18,breakpoints:{320:{slidesPerView:1.5,spaceBetween:18},640:{slidesPerView:2.3,spaceBetween:70},730:{slidesPerView:2.5,spaceBetween:18},1050:{slidesPerView:3.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},navigation:!0,children:e.phones.map((function(e){return(0,t.jsx)(a.o5,{children:(0,t.jsx)(i.I,{product:e})},e.id)}))})})]})}},6252:function(e,s,c){c.r(s),c.d(s,{HomePage:function(){return m}});var a=c(1413),n=(c(2791),c(6242),c(5986)),i=c(4750),t=c.p+"static/media/banner-phones.b4eeda8bd82b712057a2.png",r=c.p+"static/media/banner-tablets.a962057c1043a08f7737.png",o=c.p+"static/media/banner-accessories.bdd2e0fca0159e52f41c.png",l=c(184),d=function(){return(0,l.jsx)("div",{className:"fullWidth",children:(0,l.jsx)("div",{className:"main-banner",children:(0,l.jsxs)(i.tq,{modules:[n.pt,n.tl,n.W_,n.xW,n.s5],className:"swiper-container",autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,pagination:{clickable:!0},navigation:!0,effect:"fade",slidesPerView:1,spaceBetween:0,children:[(0,l.jsx)(i.o5,{children:(0,l.jsx)("img",{className:"carousel-img",src:t,alt:"Phones now available in our store!"})}),(0,l.jsx)(i.o5,{children:(0,l.jsx)("img",{className:"carousel-img",src:r,alt:"Tablets now available in our store!"})}),(0,l.jsx)(i.o5,{children:(0,l.jsx)("img",{className:"carousel-img",src:o,alt:"Accessories now available in our store!"})})]})})})},p=c(9967),u=Array(9).fill({id:"6",category:"phones",phoneId:"apple-iphone-11-256gb-green",itemId:"apple-iphone-11-256gb-green",name:"Apple iPhone 11 256GB Green",fullPrice:1172,price:1115,screen:"6.1' IPS",capacity:"256GB",color:"green",ram:"4GB",year:2019,image:"img/phones/apple-iphone-11/green/00.jpg"}).map((function(e,s){return(0,a.Z)((0,a.Z)({},e),{},{id:(parseInt(e.id,10)+s).toString(),name:"".concat(e.name," (").concat(s+1,")")})})),m=function(){return(0,l.jsxs)("div",{className:"home-page",children:[(0,l.jsx)("h1",{className:"home-page__title",children:"Welcome to Nice Gadgets store!"}),(0,l.jsx)(d,{}),u.length>0&&(0,l.jsx)(p.Z,{phones:u,title:"Brand new models"}),(0,l.jsx)("h2",{className:"home-page__categories",children:"Shop by category(your advertising could be here)"}),u.length>0&&(0,l.jsx)(p.Z,{phones:u,title:"Hot prices"})]})}},9386:function(){}}]);
//# sourceMappingURL=725.5213951a.chunk.js.map