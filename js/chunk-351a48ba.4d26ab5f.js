(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-351a48ba"],{"168c":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"container-lg my-4 ao"},r=Object(a["createElementVNode"])("div",{class:"ao-title my-5"},[Object(a["createElementVNode"])("h5",{class:"ao-h5"},"後台產品訂單")],-1),o={class:"table-responsive mt-3 ao-table"},l={class:"table table-hover"},i=Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("th",null,"編號"),Object(a["createElementVNode"])("th",null,"購買時間"),Object(a["createElementVNode"])("th",null,"會員帳號"),Object(a["createElementVNode"])("th",null,"金額"),Object(a["createElementVNode"])("th",null,"付款狀態"),Object(a["createElementVNode"])("th",null,"刪除")])],-1),s={class:"text-secondary",style:{"font-size":"14px","letter-spacing":"0"}},d={key:0},u={key:1},b=Object(a["createElementVNode"])("td",null,[Object(a["createElementVNode"])("div",{class:"btn-group"},[Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ")])],-1);function p(e,t,n,p,g,O){var j=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[r,Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("table",l,[i,Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(g.orders,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",{key:e.id},[Object(a["createElementVNode"])("td",s,Object(a["toDisplayString"])(e.id),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(O.date(e.create_at)),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(e.user.email),1),Object(a["createElementVNode"])("td",null,Object(a["toDisplayString"])(e.total),1),Object(a["createElementVNode"])("td",null,[e.is_paid?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",d,"已付款")):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",u,"未付款"))]),b])})),128))])])]),Object(a["createVNode"])(j,{pages:g.pagination,onUpdatePage:O.getOrders},null,8,["pages","onUpdatePage"])])}n("99af");var g=n("1799"),O={data:function(){return{orders:[],pagination:{},currentPage:1}},components:{Pagination:g["a"]},methods:{date:function(e){var t=new Date(parseInt(1e3*e)),n=function(e){var t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();return t};return n(t)},getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var n="".concat("https://vue3-course-api.hexschool.io/","v2/api/").concat("llaurrrraa-hexschool","/admin/orders?page=").concat(t);this.$http.get(n).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination}))}},mounted:function(){this.getOrders()}},j=(n("611a"),n("6b0d")),m=n.n(j);const f=m()(O,[["render",p]]);t["default"]=f},1799:function(e,t,n){"use strict";var a=n("7a23"),c={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},o=Object(a["createElementVNode"])("span",{"aria-hidden":"true"},"«",-1),l=[o],i={key:0,class:"page-link"},s=["onClick"],d=Object(a["createElementVNode"])("span",{"aria-hidden":"true"},"»",-1),u=[d];function b(e,t,n,o,d,b){return Object(a["openBlock"])(),Object(a["createElementBlock"])("nav",c,[Object(a["createElementVNode"])("ul",r,[Object(a["createElementVNode"])("li",{class:Object(a["normalizeClass"])(["page-item",{disabled:!n.pages.has_pre}])},[Object(a["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(a["withModifiers"])((function(e){return b.updatePage(n.pages.current_page-1)}),["prevent"]))},l)],2),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.pages.total_pages,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:Object(a["normalizeClass"])(["page-item",{active:n.pages.current_page===e}]),key:t},[e===n.pages.current_page?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",i,Object(a["toDisplayString"])(e),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("a",{key:1,class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(t){return b.updatePage(e)}),["prevent"])},Object(a["toDisplayString"])(e),9,s))],2)})),128)),Object(a["createElementVNode"])("li",{class:Object(a["normalizeClass"])(["page-item",{disabled:!n.pages.has_next}])},[Object(a["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return b.updatePage(n.pages.current_page+1)}),["prevent"]))},u)],2)])])}var p={props:["pages"],methods:{updatePage:function(e){this.$emit("update-page",e)}}},g=n("6b0d"),O=n.n(g);const j=O()(p,[["render",b]]);t["a"]=j},"1dde":function(e,t,n){var a=n("d039"),c=n("b622"),r=n("2d00"),o=c("species");e.exports=function(e){return r>=51||!a((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"611a":function(e,t,n){"use strict";n("69c8")},"69c8":function(e,t,n){},8418:function(e,t,n){"use strict";var a=n("a04b"),c=n("9bf2"),r=n("5c6c");e.exports=function(e,t,n){var o=a(t);o in e?c.f(e,o,r(0,n)):e[o]=n}},"99af":function(e,t,n){"use strict";var a=n("23e7"),c=n("da84"),r=n("d039"),o=n("e8b5"),l=n("861d"),i=n("7b0b"),s=n("07fa"),d=n("8418"),u=n("65f0"),b=n("1dde"),p=n("b622"),g=n("2d00"),O=p("isConcatSpreadable"),j=9007199254740991,m="Maximum allowed index exceeded",f=c.TypeError,h=g>=51||!r((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),E=b("concat"),k=function(e){if(!l(e))return!1;var t=e[O];return void 0!==t?!!t:o(e)},v=!h||!E;a({target:"Array",proto:!0,forced:v},{concat:function(e){var t,n,a,c,r,o=i(this),l=u(o,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?o:arguments[t],k(r)){if(c=s(r),b+c>j)throw f(m);for(n=0;n<c;n++,b++)n in r&&d(l,b,r[n])}else{if(b>=j)throw f(m);d(l,b++,r)}return l.length=b,l}})}}]);
//# sourceMappingURL=chunk-351a48ba.4d26ab5f.js.map