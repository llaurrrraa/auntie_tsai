(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eee679c"],{"027b":function(e,t,o){},"1dde":function(e,t,o){var c=o("d039"),r=o("b622"),n=o("2d00"),a=r("species");e.exports=function(e){return n>=51||!c((function(){var t=[],o=t.constructor={};return o[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"368d":function(e,t,o){},"59c9":function(e,t,o){"use strict";o("368d")},8418:function(e,t,o){"use strict";var c=o("a04b"),r=o("9bf2"),n=o("5c6c");e.exports=function(e,t,o){var a=c(t);a in e?r.f(e,a,n(0,o)):e[a]=o}},"99af":function(e,t,o){"use strict";var c=o("23e7"),r=o("da84"),n=o("d039"),a=o("e8b5"),l=o("861d"),d=o("7b0b"),s=o("07fa"),i=o("8418"),u=o("65f0"),f=o("1dde"),m=o("b622"),b=o("2d00"),p=m("isConcatSpreadable"),v=9007199254740991,O="Maximum allowed index exceeded",j=r.TypeError,h=b>=51||!n((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),V=f("concat"),E=function(e){if(!l(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},N=!h||!V;c({target:"Array",proto:!0,forced:N},{concat:function(e){var t,o,c,r,n,a=d(this),l=u(a,0),f=0;for(t=-1,c=arguments.length;t<c;t++)if(n=-1===t?a:arguments[t],E(n)){if(r=s(n),f+r>v)throw j(O);for(o=0;o<r;o++,f++)o in n&&i(l,f,n[o])}else{if(f>=v)throw j(O);i(l,f++,n)}return l.length=f,l}})},b0c0:function(e,t,o){var c=o("83ab"),r=o("5e77").EXISTS,n=o("e330"),a=o("9bf2").f,l=Function.prototype,d=n(l.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,i=n(s.exec),u="name";c&&!r&&a(l,u,{configurable:!0,get:function(){try{return i(s,d(this))[1]}catch(e){return""}}})},cf2a:function(e,t,o){"use strict";o.r(t);o("b0c0");var c=o("7a23"),r={class:"container d-flex flex-column order"},n={class:"row mt-5"},a={class:"col-lg-8 cart-left"},l=Object(c["createElementVNode"])("div",{class:"title mb-5"},[Object(c["createElementVNode"])("h6",null,"填寫訂單")],-1),d={class:"form row"},s={class:"col form-floating mb-3"},i=Object(c["createElementVNode"])("label",{for:"floatingInput",class:"ms-3"},"訂購人姓名",-1),u={class:"col form-floating"},f=Object(c["createElementVNode"])("label",{for:"floatingPassword",class:"ms-3"},"訂購人手機",-1),m={class:"col-12 form-floating mb-3"},b=Object(c["createElementVNode"])("label",{for:"floatingPassword",class:"ms-3"},"email",-1),p={class:"col-12 form-floating mb-3"},v=Object(c["createElementVNode"])("label",{for:"floatingPassword",class:"ms-3"},"地址",-1),O={class:"form-floating"},j=Object(c["createElementVNode"])("label",{for:"floatingTextarea2",class:"ms-3"},"想對阿姨說 ..",-1),h=Object(c["createElementVNode"])("a",{href:"#/cart"},"〈 返回購物車",-1),V={class:"col-lg-4 cart-right"},E=Object(c["createElementVNode"])("div",{class:"title mb-5"},[Object(c["createElementVNode"])("h6",null,"訂單資訊")],-1),N={class:"card mx-auto",style:{width:"20rem"}},g={class:"card-body"},x=Object(c["createStaticVNode"])('<div class="total_price"><p class="card-text">總金額</p><p></p></div><div class="input-group mb-3"><input type="text" class="form-control" aria-label="Recipient&#39;s username" aria-describedby="button-addon2"><button class="btn btn-outline-secondary" type="button" id="button-addon2"> 優惠碼 </button></div>',2);function w(e,t,o,w,y,k){var T=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",n,[Object(c["createElementVNode"])("div",a,[l,Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("div",s,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"floatingInput",placeholder:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return y.form.user.name=e})},null,512),[[c["vModelText"],y.form.user.name]]),i]),Object(c["createElementVNode"])("div",u,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"floatingPassword",placeholder:"phone","onUpdate:modelValue":t[1]||(t[1]=function(e){return y.form.user.tel=e})},null,512),[[c["vModelText"],y.form.user.tel]]),f]),Object(c["createElementVNode"])("div",m,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"floatingPassword",placeholder:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return y.form.user.email=e})},null,512),[[c["vModelText"],y.form.user.email]]),b]),Object(c["createElementVNode"])("div",p,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"form-control",id:"floatingPassword",placeholder:"address","onUpdate:modelValue":t[3]||(t[3]=function(e){return y.form.user.address=e})},null,512),[[c["vModelText"],y.form.user.address]]),v]),Object(c["createElementVNode"])("div",O,[Object(c["withDirectives"])(Object(c["createElementVNode"])("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"100px"},"onUpdate:modelValue":t[4]||(t[4]=function(e){return y.form.message=e})},null,512),[[c["vModelText"],y.form.message]]),j])]),h]),Object(c["createElementVNode"])("div",V,[E,Object(c["createElementVNode"])("div",N,[Object(c["createElementVNode"])("div",g,[x,Object(c["createElementVNode"])("button",{class:"btn d-block w-100 btn-dark",onClick:t[5]||(t[5]=function(){return k.addOrder&&k.addOrder.apply(k,arguments)})}," 送出訂單 ")])])])])]),Object(c["createVNode"])(T)],64)}o("99af");var y=o("fd2d"),k={data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{Footer:y["a"]},methods:{addOrder:function(){var e="".concat("https://vue3-course-api.hexschool.io/","v2/api/").concat("llaurrrraa-hexschool","/order"),t=this.form;this.$http.post(e,{data:t}).then((function(e){console.log(e)})).catch((function(e){console.dir(e)}))}}},T=(o("59c9"),o("6b0d")),M=o.n(T);const P=M()(k,[["render",w]]);t["default"]=P},d073:function(e,t,o){"use strict";o("027b")},fd2d:function(e,t,o){"use strict";var c=o("7a23"),r={class:"footer bg-dark mt-auto"},n={class:"admin"},a=Object(c["createTextVNode"])("| Admin Login |"),l=Object(c["createElementVNode"])("div",{class:"text"},[Object(c["createElementVNode"])("p",null,"© Auntie Tsai 2020 All Rights Reserved."),Object(c["createElementVNode"])("p",null,"圖片為練習使用，無商業用途。")],-1);function d(e,t){var o=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("footer",r,[Object(c["createElementVNode"])("div",n,[Object(c["createVNode"])(o,{to:"/login",class:"admin-link"},{default:Object(c["withCtx"])((function(){return[a]})),_:1})]),l])}o("d073");var s=o("6b0d"),i=o.n(s);const u={},f=i()(u,[["render",d]]);t["a"]=f}}]);
//# sourceMappingURL=chunk-6eee679c.cc9ccbaf.js.map