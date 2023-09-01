/*! For license information please see 158.bfdea2de.chunk.js.LICENSE.txt */
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[158],{2420:function(e,a,n){"use strict";n.d(a,{b:function(){return p}});n(2791);var r=n(1694),i=n.n(r),c=n(7689),l=n(1087);var s=n.p+"static/media/arrow_right.a374b573155c92815583d44daaae0b60.svg";var t=n.p+"static/media/home.f28213b9be758981c8705a9683373e55.svg",o=n(184),p=function(){var e=(0,c.TH)().pathname.split("/").filter((function(e){return""!==e}));return(0,o.jsx)("nav",{className:"breadcrumbs",children:(0,o.jsxs)("ul",{className:"breadcrumbs__list",children:[(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(l.rU,{to:"/",className:"breadcrumbs__home-link",children:(0,o.jsx)("img",{src:t,alt:"home",className:"breadcrumbs__image"})})}),e.map((function(a,n){var r=a.split("-").join(" ");return(0,o.jsxs)("li",{className:"breadcrumbs__item",children:[(0,o.jsx)("img",{src:s,alt:"arrow",className:"breadcrumbs__image"}),(0,o.jsx)(l.rU,{to:"/".concat(a),className:i()("breadcrumbs__link",{"breadcrumbs__link--disabled":n===e.length-1}),children:r})]},a)}))]})})}},2615:function(e,a,n){"use strict";n.d(a,{a:function(){return s},w:function(){return p}});var r=n(4942),i=n(1694),c=n.n(i),l=n(184),s=function(e){var a=e.product,n=e.styles;return console.log(a),(0,l.jsx)("div",{className:"cart-button",children:(0,l.jsx)("button",{type:"button",className:c()(n[0],(0,r.Z)({},n[1],false)),children:"Add to cart"})})},t=n(5790),o=n(2791),p=function(e){var a,n=e.product,i=e.styles,s=o.useContext(t.T),p=s.products,d=s.handleLike,u=s.darkTheme,h=p.find((function(e){return e.phoneId===n.phoneId}));return(0,l.jsx)("div",{className:"favourites-button",children:(0,l.jsx)("button",{type:"button",className:c()(i[0],i[2],(a={},(0,r.Z)(a,i[1],h),(0,r.Z)(a,"product__favourites-dark",u),a)),onClick:function(){return d(n)},children:(0,l.jsx)("p",{hidden:!0,children:"add to favourites"})})})}},6994:function(e,a,n){"use strict";n.d(a,{I:function(){return l}});n(2791),n(9386);var r=n(1087),i=n(2615),c=n(184),l=function(e){var a=e.product;return(0,c.jsxs)("li",{className:"product",children:[(0,c.jsxs)(r.rU,{to:a.phoneId,className:"product__link",children:[(0,c.jsx)("div",{className:"product__image-block",children:(0,c.jsx)("img",{src:"".concat("https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/","/").concat(a.image),alt:a.name,className:"product__image"})}),(0,c.jsx)("h2",{className:"product__title",children:"".concat(a.name," (XXXXX)")})]}),(0,c.jsxs)("div",{className:"product__prices",children:[(0,c.jsx)("p",{className:"product__price",children:"$".concat(a.price)}),(0,c.jsx)("p",{className:"product__price-full",children:"$".concat(a.fullPrice)})]}),(0,c.jsxs)("div",{className:"product__info",children:[(0,c.jsxs)("div",{className:"product__info-block",children:[(0,c.jsx)("p",{className:"product__info-title",children:"Screen"}),(0,c.jsx)("p",{className:"product__info-data",children:a.screen})]}),(0,c.jsxs)("div",{className:"product__info-block",children:[(0,c.jsx)("p",{className:"product__info-title",children:"Capacity"}),(0,c.jsx)("p",{className:"product__info-data",children:a.capacity})]}),(0,c.jsxs)("div",{className:"product__info-block",children:[(0,c.jsx)("p",{className:"product__info-title",children:"RAM"}),(0,c.jsx)("p",{className:"product__info-data",children:a.ram})]})]}),(0,c.jsxs)("div",{className:"product__buttons",children:[(0,c.jsx)(i.a,{product:a,styles:["product__add","product__add--active"]}),(0,c.jsx)(i.w,{product:a,styles:["product__favourites","product__favourites--active"]})]})]})}},6158:function(e,a,n){"use strict";n.r(a),n.d(a,{CatalogPage:function(){return v}});var r=n(9439),i=n(2791),c=n(6909),l=n(1694),s=n.n(l),t=n(1087);function o(e,a){var n=new URLSearchParams(e.toString());return Object.entries(a).forEach((function(e){var a=(0,r.Z)(e,2),i=a[0],c=a[1];null===c?n.delete(i):Array.isArray(c)?(n.delete(i),c.forEach((function(e){n.append(i,e)}))):n.set(i,c)})),n.toString()}var p=n(184),d=function(e){var a=e.currentPage,n=e.totalPages,i=e.onPageChange,c=(0,t.lr)(),l=(0,r.Z)(c,1)[0];return(0,p.jsxs)("ul",{className:"pagination",children:[(0,p.jsx)("li",{className:s()("page__item page__item__arrow",{page__item__disabled:1===a}),children:(0,p.jsx)(t.rU,{to:{search:o(l,{page:String(a-1)})},className:"page__link","aria-disabled":1!==a?"false":"true",onClick:function(){return 1!==a&&i(a-1)},children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.4712 3.52851C10.2109 3.26816 9.78878 3.26816 9.52843 3.52851L5.52843 7.52851C5.26808 7.78886 5.26808 8.21097 5.52843 8.47132L9.52843 12.4713C9.78878 12.7317 10.2109 12.7317 10.4712 12.4713C10.7316 12.211 10.7316 11.7889 10.4712 11.5285L6.94265 7.99992L10.4712 4.47132C10.7316 4.21097 10.7316 3.78886 10.4712 3.52851Z",fill:1!==a?"#313237":"#e2e6e9"})})})}),n.map((function(e){return(0,p.jsx)("li",{className:s()("page__item",{page__item__active:a===e}),children:(0,p.jsx)(t.rU,{to:{search:o(l,{page:String(e)})},className:"page__link",onClick:function(){return i(e)},children:e})},e)})),(0,p.jsx)("li",{className:s()("page__item page__item__arrow",{page__item__disabled:a===n.length}),children:(0,p.jsx)(t.rU,{to:{search:o(l,{page:String(a+1)})},className:"page__link","aria-disabled":a!==n.length?"false":"true",onClick:function(){return a!==n.length&&i(a+1)},children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.52876 3.52851C5.78911 3.26816 6.21122 3.26816 6.47157 3.52851L10.4716 7.52851C10.7319 7.78886 10.7319 8.21097 10.4716 8.47132L6.47157 12.4713C6.21122 12.7317 5.78911 12.7317 5.52876 12.4713C5.26841 12.211 5.26841 11.7889 5.52876 11.5285L9.05735 7.99992L5.52876 4.47132C5.26841 4.21097 5.26841 3.78886 5.52876 3.52851Z",fill:a!==n.length?"#313237":"#e2e6e9"})})})})]})};var u=n(2420),h="Dropdowns_Dropdowns__QMYXJ",m="Dropdowns_Dropdowns__dropdown__tIYbD",g="Dropdowns_Dropdowns__description__QZTwk",_="Dropdowns_Dropdowns__selector__sort__irsQ0",f="Dropdowns_Dropdowns__selector__items__5TAuC",j=function(){return(0,p.jsxs)("div",{className:h,children:[(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)("p",{className:g,children:"Sort By"}),(0,p.jsx)("div",{className:"select is-normal",children:(0,p.jsxs)("select",{className:_,children:[(0,p.jsx)("option",{value:"Newest",children:"Newest"}),(0,p.jsx)("option",{value:"Alphabetically",children:"Alphabetically"}),(0,p.jsx)("option",{value:"Cheapest",children:"Cheapest"})]})})]}),(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)("p",{className:g,children:"Items on page"}),(0,p.jsx)("div",{className:"select is-normal",children:(0,p.jsxs)("select",{className:f,children:[(0,p.jsx)("option",{value:"4",children:"4"}),(0,p.jsx)("option",{value:"8",children:"8"}),(0,p.jsx)("option",{value:"16",children:"16"}),(0,p.jsx)("option",{value:"All",children:"All"})]})})]})]})},b=[{id:"1",category:"phones",phoneId:"apple-iphone-7-32gb-black",itemId:"apple-iphone-7-32gb-black",name:"Apple iPhone 7 32GB Black",fullPrice:400,price:375,screen:"4.7' IPS",capacity:"32GB",color:"black",ram:"2GB",year:2016,image:"img/phones/apple-iphone-7/black/00.jpg"},{id:"2",category:"phones",phoneId:"apple-iphone-7-plus-32gb-black",itemId:"apple-iphone-7-plus-32gb-black",name:"Apple iPhone 7 Plus 32GB Black",fullPrice:540,price:500,screen:"5.5' IPS",capacity:"32GB",color:"black",ram:"3GB",year:2016,image:"img/phones/apple-iphone-7-plus/black/00.jpg"},{id:"3",category:"phones",phoneId:"apple-iphone-8-64gb-gold",itemId:"apple-iphone-8-64gb-gold",name:"Apple iPhone 8 64GB Gold",fullPrice:600,price:550,screen:"4.7' IPS",capacity:"64GB",color:"gold",ram:"2GB",year:2017,image:"img/phones/apple-iphone-8/gold/00.jpg"},{id:"4",category:"phones",phoneId:"apple-iphone-11-64gb-black",itemId:"apple-iphone-11-64gb-black",name:"Apple iPhone 11 64GB Black",fullPrice:932,price:880,screen:"6.1' IPS",capacity:"64GB",color:"black",ram:"4GB",year:2019,image:"img/phones/apple-iphone-11/black/00.jpg"},{id:"5",category:"phones",phoneId:"apple-iphone-11-128gb-yellow",itemId:"apple-iphone-11-128gb-yellow",name:"Apple iPhone 11 128GB Yellow",fullPrice:1100,price:1050,screen:"6.1' IPS",capacity:"128GB",color:"yellow",ram:"4GB",year:2019,image:"img/phones/apple-iphone-11/yellow/00.jpg"},{id:"6",category:"phones",phoneId:"apple-iphone-11-256gb-green",itemId:"apple-iphone-11-256gb-green",name:"Apple iPhone 11 256GB Green",fullPrice:1172,price:1115,screen:"6.1' IPS",capacity:"256GB",color:"green",ram:"4GB",year:2019,image:"img/phones/apple-iphone-11/green/00.jpg"},{id:"7",category:"phones",phoneId:"apple-iphone-11-pro-64gb-gold",itemId:"apple-iphone-11-pro-64gb-gold",name:"Apple iPhone 11 Pro 64GB Gold",fullPrice:1312,price:1270,screen:"5.8' OLED",capacity:"64GB",color:"gold",ram:"4GB",year:2019,image:"img/phones/apple-iphone-11-pro/gold/00.jpg"},{id:"8",category:"phones",phoneId:"apple-iphone-11-pro-256gb-midnightgreen",itemId:"apple-iphone-11-pro-256gb-midnightgreen",name:"Apple iPhone 11 Pro 256GB Midnight green",fullPrice:1640,price:1570,screen:"5.8' OLED",capacity:"256GB",color:"midnightgreen",ram:"4GB",year:2019,image:"img/phones/apple-iphone-11-pro/midnightgreen/00.jpg"},{id:"9",category:"phones",phoneId:"apple-iphone-11-pro-512gb-silver",itemId:"apple-iphone-11-pro-512gb-silver",name:"Apple iPhone 11 Pro 512GB Silver",fullPrice:1880,price:1780,screen:"5.8' OLED",capacity:"512GB",color:"silver",ram:"4GB",year:2019,image:"img/phones/apple-iphone-11-pro/silver/00.jpg"}],v=function(e){var a,n=e.title,l=(0,i.useState)(!1),s=(0,r.Z)(l,1)[0],t=(0,i.useState)(8),o=(0,r.Z)(t,1)[0],h=(0,i.useState)(1),m=(0,r.Z)(h,2),g=m[0],_=m[1],f=(0,i.useState)(1),v=(0,r.Z)(f,2),x=v[0],y=v[1],N=(0,i.useState)(o),w=(0,r.Z)(N,2),P=w[0],k=w[1],B=b.length,I=(a=o,function(e,a){for(var n=[],r=e;r<=a;r+=1)n.push(r);return n}(1,Math.ceil(B/a))),G=b.slice(x-1,P);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.b,{}),(0,p.jsxs)("div",{className:"catalog__page",children:[(0,p.jsx)("h1",{className:"catalog__title",children:n}),!s&&(0,p.jsx)("p",{className:"catalog__subtitle",children:"".concat(b.length," models")}),s&&(0,p.jsx)("h2",{className:"catalog__title",children:"There is some problems"}),b.length>0&&!s&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j,{}),(0,p.jsx)(c.R,{products:G}),I.length>1&&(0,p.jsx)(d,{currentPage:g,totalPages:I,onPageChange:function(e){return function(e){_(e),y(e*o-o+1),k(e*o)}(e)}})]})]})]})}},6909:function(e,a,n){"use strict";n.d(a,{R:function(){return c}});n(2791);var r=n(6994),i=n(184),c=function(e){var a=e.products;return(0,i.jsx)("section",{className:"products",children:a.map((function(e){return(0,i.jsx)(r.I,{product:e},e.id)}))})}},1694:function(e,a){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var l=i.apply(null,n);l&&e.push(l)}}else if("object"===c){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(a,[]))||(e.exports=n)}()},9386:function(){},4942:function(e,a,n){"use strict";n.d(a,{Z:function(){return i}});var r=n(9142);function i(e,a,n){return(a=(0,r.Z)(a))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}}}]);
//# sourceMappingURL=158.bfdea2de.chunk.js.map