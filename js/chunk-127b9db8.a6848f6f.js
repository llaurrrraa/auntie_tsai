(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-127b9db8"],{"027b":function(e,t,c){},2355:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"cart container d-flex flex-column"},o={class:"cart-title"},r={class:"col-3 actived"},l=Object(a["createElementVNode"])("span",{style:{backgroundColor:"#65ffbf"}},"1",-1),i=Object(a["createElementVNode"])("p",{style:{fontWeight:"700"}},"購物車",-1),s=Object(a["createStaticVNode"])('<li><div class="arrow"><span class="arrow-line"></span></div></li><li class="col-3"><span>2</span><p>填寫資料</p><div class="bar"></div></li><li><div class="arrow"><span class="arrow-line"></span></div></li><li class="col-3"><span>3</span><p>訂單確認</p><div class="bar"></div></li>',4),d={class:"cart-container row my-3 py-5"},u={class:"col-lg-8 cart-left"},b={class:"table-responsive"},p={class:"table align-center align-middle"},m=Object(a["createElementVNode"])("thead",{class:"text-secondary"},[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("th",{class:"text-center"}),Object(a["createElementVNode"])("th",{class:"text-center"}),Object(a["createElementVNode"])("th",{class:"text-center"}),Object(a["createElementVNode"])("th",{class:"text-end"},"單價"),Object(a["createElementVNode"])("th",{class:"text-center"},"總價"),Object(a["createElementVNode"])("th",{class:"text-center"},"刪除")])],-1),O={class:"text-center td-title"},j=["src"],h={class:"text-center"},v={class:"input-group"},g={class:"input-group input-group-sm qtyBtn"},V=["onClick"],f=["onUpdate:modelValue"],N=["onClick"],E={class:"unit"},y={class:"text-end"},C=Object(a["createElementVNode"])("br",null,null,-1),x=Object(a["createTextVNode"])("特價 "),k={class:"sale-price"},w={class:"text-center final-price"},B={class:"text-center"},L=["onClick"],q={key:1},$=Object(a["createElementVNode"])("td",{colspan:"6",class:"empty-txt text-center table-light"}," 購物車很空哦 ～ ",-1),D=[$],S={class:"col-lg-4 cart-right"},T=Object(a["createElementVNode"])("div",{class:"title"},null,-1),_={class:"card mx-auto",style:{width:"20rem"}},P={class:"card-body"},A=Object(a["createElementVNode"])("h6",null,"折扣碼",-1),F=Object(a["createElementVNode"])("hr",null,null,-1),I={class:"total_price"},U=Object(a["createElementVNode"])("p",{class:"card-text"},"總金額",-1),M={class:"input-group mb-3"},R={class:"plus-cart"},J=Object(a["createElementVNode"])("h6",{class:"plus-cart-title"},"加購產品",-1);function z(e,t,c,$,z,W){var X=Object(a["resolveComponent"])("ProductCard"),G=Object(a["resolveComponent"])("swiper-slide"),H=Object(a["resolveComponent"])("swiper"),K=Object(a["resolveComponent"])("Footer"),Q=Object(a["resolveComponent"])("Loading");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("ul",null,[Object(a["createElementVNode"])("li",r,[l,i,Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["bar",{active:!0}])})]),s])]),Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",u,[Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("table",p,[m,Object(a["createElementVNode"])("tbody",null,[z.cartData.carts.length>0?(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],{key:0},Object(a["renderList"])(z.cartData.carts,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:e.product_id},[Object(a["createElementVNode"])("td",O,Object(a["toDisplayString"])(e.product.title),1),Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("img",{src:e.product.imageUrl,alt:"product_img"},null,8,j)]),Object(a["createElementVNode"])("td",h,[Object(a["createElementVNode"])("div",v,[Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("button",{class:"btn btn-outline-secondary",type:"button",id:"button-minus1",onClick:function(t){return W.minusCart(e)}}," － ",8,V),Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",style:{"max-width":"50px","text-align":"center"},class:"form-control",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":function(t){return e.qty=t},readonly:""},null,8,f),[[a["vModelText"],e.qty]]),Object(a["createElementVNode"])("button",{class:"btn btn-outline-secondary",type:"button",id:"button-add1",onClick:function(t){return W.addCart(e)}}," ＋ ",8,N)]),Object(a["createElementVNode"])("span",E,Object(a["toDisplayString"])(e.product.unit),1)])]),Object(a["createElementVNode"])("td",y,[Object(a["createElementVNode"])("del",null,"原價 $"+Object(a["toDisplayString"])(e.product.origin_price),1),C,Object(a["createElementVNode"])("strong",null,[x,Object(a["createElementVNode"])("span",k,"$"+Object(a["toDisplayString"])(e.product.price),1)])]),Object(a["createElementVNode"])("td",w,[Object(a["createElementVNode"])("span",null,"$ "+Object(a["toDisplayString"])(Math.round(e.final_total)),1)]),Object(a["createElementVNode"])("td",B,[Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-liＦght",onClick:function(t){return W.deleteCart(e.id)}}," X ",8,L)])])})),128)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",q,D))])])])]),Object(a["createElementVNode"])("div",S,[T,Object(a["createElementVNode"])("div",_,[Object(a["createElementVNode"])("div",P,[A,F,Object(a["createElementVNode"])("div",I,[U,Object(a["createElementVNode"])("p",null,"$ "+Object(a["toDisplayString"])(Math.round(z.cartData.final_total)),1)]),Object(a["createElementVNode"])("div",M,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text",class:"form-control","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":t[0]||(t[0]=function(e){return z.coupon=e})},null,512),[[a["vModelText"],z.coupon]]),Object(a["createElementVNode"])("button",{class:"btn btn-outline-primary",type:"button",id:"button-addon2",onClick:t[1]||(t[1]=function(e){return W.useCoupons()})}," 優惠碼 ")]),Object(a["createElementVNode"])("button",{type:"button",class:"btn d-block w-100 btn-dark",onClick:t[2]||(t[2]=function(){return W.moveToOrder&&W.moveToOrder.apply(W,arguments)})}," 前往結帳 ")])])])]),Object(a["createElementVNode"])("div",R,[J,Object(a["createVNode"])(H,{class:"swiper-product",spaceBetween:30,loop:!0,modules:z.modules,navigation:"",breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:5,spaceBetween:50}}},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(z.addProducts,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(G,{key:e.id+1},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(X,{"card-product":[e],onAddToCart:W.addToCart},null,8,["card-product","onAddToCart"])]})),_:2},1024)})),128))]})),_:1},8,["modules"])])]),Object(a["createVNode"])(K),Object(a["createVNode"])(Q,{"is-loading":z.isLoading,"is-loading-item":z.isLoadingItem},null,8,["is-loading","is-loading-item"])],64)}c("99af"),c("d81d");var W=c("fd2d"),X=c("3a5e"),G=c("d46a"),H=c("e915"),K=c("8349"),Q=c("4da1"),Y=(c("5f67"),c("583f"),c("a1bf"),{data:function(){return{addProducts:[],isLoading:!1,cartData:{carts:""},isLoadingItem:"",active:!0,coupon:"",modules:[Q["a"],Q["c"]]}},components:{Footer:W["a"],Loading:X["a"],ProductCard:H["a"],Swiper:K["a"],SwiperSlide:K["b"]},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","v2/api/").concat("llaurrrraa-hexschool","/products");this.$http.get(t).then((function(t){e.addProducts=t.data.products.map((function(e){return e.qty=1,e}))}))},getCart:function(){var e=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","v2/api/").concat("llaurrrraa-hexschool","/cart")).then((function(t){e.isLoading=!1,e.cartData=t.data.data}))},addToCart:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a={product_id:e,qty:c};this.isLoading=!0;var n="".concat("https://vue3-course-api.hexschool.io/","/v2/api/").concat("llaurrrraa-hexschool","/cart");this.$http.post(n,{data:a}).then((function(){t.isLoading=!1,G["a"].emit("getCart"),t.$swal("成功加到購物車 !","詳情請至購物車查看","success"),t.getCart()}))},minusCart:function(e){var t=this;this.isLoading=!0,e.qty--;var c={product_id:e.id,qty:e.qty};this.$http.put("".concat("https://vue3-course-api.hexschool.io/","/v2/api/").concat("llaurrrraa-hexschool","/cart/").concat(e.id),{data:c}).then((function(){t.getCart()}))},addCart:function(e){var t=this;this.isLoading=!0,e.qty++;var c={product_id:e.id,qty:e.qty};this.$http.put("".concat("https://vue3-course-api.hexschool.io/","/v2/api/").concat("llaurrrraa-hexschool","/cart/").concat(e.id),{data:c}).then((function(){t.getCart()}))},deleteCart:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","/v2/api/").concat("llaurrrraa-hexschool","/cart/").concat(e);this.$http.delete(c).then((function(){t.isLoading=!1,t.getCart(),G["a"].emit("getCart")}))},deleteCartAll:function(e){var t=this;if(this.isLoading=!0,0===e.carts.length)this.isLoading=!1,this.$swal("購物車是空的呦～","還沒買菜嗎，很多在特價噎！","error");else{var c="".concat("https://vue3-course-api.hexschool.io/","/v2/api/").concat("llaurrrraa-hexschool","/carts");this.$http.delete(c).then((function(){t.isLoading=!1,t.getCart(),G["a"].emit("getCart"),t.$swal("已刪除購物車","詳情請至購物車查看","success")})),this.isLoading=!1}},moveToOrder:function(){this.$router.push("/order")},useCoupons:function(){var e=this,t={code:this.coupon},c="".concat("https://vue3-course-api.hexschool.io/","v2/api/").concat("llaurrrraa-hexschool","/coupon");this.$http.post(c,{data:t}).then((function(){e.getCart(),alert("成功套用優惠卷！")}))}},mounted:function(){this.getProducts(),this.getCart()}}),Z=(c("c433"),c("6b0d")),ee=c.n(Z);const te=ee()(Y,[["render",z]]);t["default"]=te},7177:function(e,t,c){"use strict";c("d756")},a986:function(e,t,c){},c433:function(e,t,c){"use strict";c("a986")},d073:function(e,t,c){"use strict";c("027b")},d756:function(e,t,c){},d81d:function(e,t,c){"use strict";var a=c("23e7"),n=c("b727").map,o=c("1dde"),r=o("map");a({target:"Array",proto:!0,forced:!r},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e915:function(e,t,c){"use strict";c("a4d3"),c("e01a");var a=c("7a23"),n={class:"cards row"},o={class:"card h-260"},r={class:"card-body"},l=["src","alt"],i={class:"first-line mt-3 mb-2"},s={class:"card-title"},d={class:"card-price"},u={class:"card-text"},b={class:"card-footer"},p=["onClick"],m=["value"],O=["onClick"],j=["onClick"];function h(e,t,c,h,v,g){var V=Object(a["resolveComponent"])("router-link"),f=Object(a["resolveComponent"])("ShoppingBagIcon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.cardProduct,(function(t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"col my-3",key:t.id},[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(V,{to:"/product/".concat(t.id),class:"router-link"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("img",{src:t.imageUrl,class:"card-img-top",alt:"".concat(t.title)+"Image"},null,8,l),Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("p",s,Object(a["toDisplayString"])(t.title),1),Object(a["createElementVNode"])("p",d,[Object(a["createTextVNode"])(" $ "+Object(a["toDisplayString"])(t.price)+" ",1),Object(a["createElementVNode"])("span",null,"/ "+Object(a["toDisplayString"])(t.unit),1)])]),Object(a["createElementVNode"])("p",u,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.description),1),Object(a["createElementVNode"])("del",null,"$ "+Object(a["toDisplayString"])(t.origin_price),1)])]})),_:2},1032,["to"])]),Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",{class:"wrapper",ref_for:!0,ref:"count"},[Object(a["createElementVNode"])("a",{class:"minus",onClick:function(e){return g.minus(t)}},"－",8,p),Object(a["createElementVNode"])("input",{type:"text",class:"num",min:"1",value:t.qty},null,8,m),Object(a["createElementVNode"])("a",{class:"plus",onClick:function(e){return g.add(t)}},"＋",8,O)],512),Object(a["createElementVNode"])("button",{class:"btn",type:"button",onClick:function(c){return e.$emit("addToCart",t.id,t.qty)}},[Object(a["createVNode"])(f,{class:"shoppingbag-icon h-5 w-5"})],8,j)])])])})),128))])}var v=c("9510"),g={name:"ProductCard",data:function(){return{}},props:["cardProduct"],emits:["addToCart"],components:{ShoppingBagIcon:v["a"]},methods:{minus:function(e){if(!(e.qty>1))return e.qty=1;e.qty=e.qty-1},add:function(e){if(!(e.qty<9))return e.qty=9;e.qty=e.qty+1}},mounted:function(){}},V=(c("7177"),c("6b0d")),f=c.n(V);const N=f()(g,[["render",h]]);t["a"]=N},fd2d:function(e,t,c){"use strict";var a=c("7a23"),n={class:"footer bg-dark mt-auto"},o={class:"admin"},r=Object(a["createTextVNode"])("| Admin Login |"),l=Object(a["createElementVNode"])("div",{class:"text"},[Object(a["createElementVNode"])("p",null,"© Auntie Tsai 2020 All Rights Reserved."),Object(a["createElementVNode"])("p",null,"圖片為練習使用，無商業用途。")],-1);function i(e,t){var c=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("footer",n,[Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(c,{to:"/login",class:"admin-link"},{default:Object(a["withCtx"])((function(){return[r]})),_:1})]),l])}c("d073");var s=c("6b0d"),d=c.n(s);const u={},b=d()(u,[["render",i]]);t["a"]=b}}]);
//# sourceMappingURL=chunk-127b9db8.a6848f6f.js.map