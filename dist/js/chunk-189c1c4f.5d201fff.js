(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-189c1c4f"],{6654:function(e,t,a){},"7b5d":function(e,t,a){"use strict";a("6654")},"969e":function(e,t,a){e.exports=a.p+"img/auntieTsai02-icon.c3bc40a1.png"},af20:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=a("969e"),o=a.n(c),l={class:"navbar navbar-expand-lg navbar-light bg-light"},r={class:"container-fluid"},i=Object(n["createElementVNode"])("img",{src:o.a,height:"60",class:"d-inline-block align-text-top"},null,-1),s=Object(n["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"navbar navbar-expand-lg"},b={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"d-flex bd-highlight me-5 navbar-nav"},p={class:"p-2 bd-highlight nav-item ms-3"},m=Object(n["createTextVNode"])("首頁"),g={class:"p-2 bd-highlight nav-item ms-3"},O=Object(n["createTextVNode"])("所有產品"),j={class:"p-2 bd-highlight nav-item ms-3"},v=Object(n["createTextVNode"])("運送須知"),f={class:"p-2 bd-highlight nav-item ms-3"},h=Object(n["createTextVNode"])("關於我們"),V={class:"p-2 bd-highlight nav-item ms-3"},N={class:"p-2 bd-highlight nav-item ms-3 position-relative"},E={class:"cart-link","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},x={class:"position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger"},k={ref:"offcanvasRef",tabindex:"-1",class:"offcanvas offcanvas-end",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},C=Object(n["createElementVNode"])("div",{class:"offcanvas-header"},[Object(n["createElementVNode"])("h5",{id:"offcanvasRightLabel"},"購物車清單"),Object(n["createElementVNode"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),y={class:"offcanvas-body"},w={class:"table align-middle table-borderless table-hover"},B=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th")])],-1),D=["src"],S={class:"td-title"},T={class:"td-price"},L={class:"input-group input-group-sm qtyBtn"},R=["onUpdate:modelValue"],_=Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{type:"btn",class:"btn btn-outline-dark"},"X")],-1),I={colspan:"4",class:"text-end"};function M(e,t,a,c,o,M){var U=Object(n["resolveComponent"])("router-link"),$=Object(n["resolveComponent"])("HeartIcon"),q=Object(n["resolveComponent"])("ShoppingBagIcon"),F=Object(n["resolveComponent"])("router-view"),H=Object(n["resolveComponent"])("loading");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("nav",l,[Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(U,{class:"navbar-brand",to:"/home"},{default:Object(n["withCtx"])((function(){return[i]})),_:1}),s,Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",p,[Object(n["createVNode"])(U,{to:"/home",class:"router-link nav-link"},{default:Object(n["withCtx"])((function(){return[m]})),_:1})]),Object(n["createElementVNode"])("div",g,[Object(n["createVNode"])(U,{to:"/products",class:"router-link nav-link"},{default:Object(n["withCtx"])((function(){return[O]})),_:1})]),Object(n["createElementVNode"])("div",j,[Object(n["createVNode"])(U,{to:"/shipping",class:"router-link nav-link"},{default:Object(n["withCtx"])((function(){return[v]})),_:1})]),Object(n["createElementVNode"])("div",f,[Object(n["createVNode"])(U,{to:"/about",class:"nav-link router-link"},{default:Object(n["withCtx"])((function(){return[h]})),_:1})]),Object(n["createElementVNode"])("div",V,[Object(n["createVNode"])($,{class:"heart-icon pb-1"})]),Object(n["createElementVNode"])("div",N,[Object(n["createElementVNode"])("a",E,[Object(n["createVNode"])(q,{class:"shopping-icon pb-1"})]),Object(n["createElementVNode"])("span",x,Object(n["toDisplayString"])(o.cartData.carts.length),1)])])])])])]),Object(n["createVNode"])(F),Object(n["createElementVNode"])("div",k,[C,Object(n["createElementVNode"])("div",y,[Object(n["createElementVNode"])("table",w,[B,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.cartData.carts,(function(a,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:c},[Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("img",{src:a.product.imageUrl,alt:"",class:"cart-img"},null,8,D)]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("ul",null,[Object(n["createElementVNode"])("li",S,[Object(n["createElementVNode"])("h4",null,Object(n["toDisplayString"])(a.product.title),1)]),Object(n["createElementVNode"])("li",T," 價格：$ "+Object(n["toDisplayString"])(a.product.price)+" / "+Object(n["toDisplayString"])(a.product.unit),1)])]),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",L,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-secondary",type:"button",id:"button-minus1",onClick:t[0]||(t[0]=function(t){return e.minusCart()})}," － "),Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",style:{"max-width":"50px","text-align":"center"},class:"form-control",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":function(e){return a.qty=e},readonly:""},null,8,R),[[n["vModelText"],a.qty]]),Object(n["createElementVNode"])("button",{class:"btn btn-outline-secondary",type:"button",id:"button-add1",onClick:t[1]||(t[1]=function(t){return e.addCart()})}," ＋ ")])]),_])})),128))]),Object(n["createElementVNode"])("tfoot",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("td",I," 總金額：$ "+Object(n["toDisplayString"])(o.cartData.final_total),1)])])]),Object(n["createElementVNode"])("a",{href:"#/cart",type:"btn",class:"btn btn-lg go-cart",onClick:t[2]||(t[2]=Object(n["withModifiers"])((function(){return M.goToCart&&M.goToCart.apply(M,arguments)}),["prevent"]))}," 前往結賬 〉 ")])],512),Object(n["createVNode"])(H,{active:o.isLoading,"onUpdate:active":t[3]||(t[3]=function(e){return o.isLoading=e})},null,8,["active"])],64)}a("99af");var U=a("9510");function $(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[Object(n["createVNode"])("path",{"fill-rule":"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd"})])}var q=a("d46a"),F={data:function(){return{isLoading:!1,cartData:{carts:[]}}},components:{HeartIcon:$,ShoppingBagIcon:U["a"]},mounted:function(){var e=this;this.getCart(),q["a"].on("getCart",(function(){e.getCart()}))},methods:{getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","/v2/api/").concat("llaurrrraa-hexschool","/cart")).then((function(t){e.cartData=t.data.data}))},goToCart:function(){this.$router.push("/cart")}}},H=(a("7b5d"),a("6b0d")),J=a.n(H);const z=J()(F,[["render",M]]);t["default"]=z},d46a:function(e,t,a){"use strict";var n=function(e){return{all:e=e||new Map,on:function(t,a){var n=e.get(t);n?n.push(a):e.set(t,[a])},off:function(t,a){var n=e.get(t);n&&(a?n.splice(n.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var n=e.get(t);n&&n.slice().map((function(e){e(a)})),(n=e.get("*"))&&n.slice().map((function(e){e(t,a)}))}}},c=n();t["a"]=c}}]);
//# sourceMappingURL=chunk-189c1c4f.5d201fff.js.map