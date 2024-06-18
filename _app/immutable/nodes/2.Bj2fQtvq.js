import{s as Z,x as Q,n as L}from"../chunks/scheduler.W2pu3yam.js";import{S as F,i as P,e as h,g as d,j as _,d as i,p as a,a as H,l as n,z as Y,A as $e,s as D,f as R,c as M,k as K,m as _e,B as ae,C as re,v as y,w as G,x as O,t as T,b as N,y as q,o as xe,D as we,r as be}from"../chunks/index.DUv3Y7Js.js";/* empty css                    */function ue(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function Ee(o){let e,s,t,l,v,p;return{c(){e=h("nav"),s=h("div"),t=h("div"),l=h("div"),v=h("img"),this.h()},l(f){e=d(f,"NAV",{class:!0});var $=_(e);s=d($,"DIV",{class:!0});var b=_(s);t=d(b,"DIV",{class:!0});var x=_(t);l=d(x,"DIV",{});var m=_(l);v=d(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(i),x.forEach(i),b.forEach(i),$.forEach(i),this.h()},h(){Q(v.src,p=o[0])||a(v,"src",p),a(v,"alt","Sleep Golden"),a(v,"class","h-16"),a(t,"class","flex items-center justify-center"),a(s,"class","container mx-auto py-5"),a(e,"class","bg-white shadow-md")},m(f,$){H(f,e,$),n(e,s),n(s,t),n(t,l),n(l,v)},p:L,i:L,o:L,d(f){f&&i(e)}}}function Ie(o,e,s){return["logo_sem_fundo.png","https://wa.me/+5551994055464?text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais"]}class Ce extends F{constructor(e){super(),P(this,e,Ie,Ee,Z,{logo:0,whatsLink:1})}get logo(){return this.$$.ctx[0]}get whatsLink(){return this.$$.ctx[1]}}function Le(o){let e,s='<div class="absolute inset-0 bg-cover bg-center bg-hero-image svelte-exz5sn"></div> <div class="absolute inset-0 bg-black opacity-50"></div> <div class="container relative mx-auto px-6 text-white"><h1 class="text-4xl font-bold mb-4 gradient-text svelte-exz5sn">Camas e colchões</h1> <p class="text-lg mb-6 gradient-text svelte-exz5sn">Ache o que você precisa aqui em nossa loja!</p></div>';return{c(){e=h("section"),e.innerHTML=s,this.h()},l(t){e=d(t,"SECTION",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-ont6sz"&&(e.innerHTML=s),this.h()},h(){a(e,"class","relative hero py-20 text-center svelte-exz5sn")},m(t,l){H(t,e,l)},p:L,i:L,o:L,d(t){t&&i(e)}}}class Ve extends F{constructor(e){super(),P(this,e,null,Le,Z,{})}}function De(o){let e,s='<img src="whats_app_logo.png" alt="WhatsApp" class="whatsapp-icon svelte-1l4hzb8"/>',t,l;return{c(){e=h("button"),e.innerHTML=s,this.h()},l(v){e=d(v,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-4m00r4"&&(e.innerHTML=s),this.h()},h(){a(e,"class","fab svelte-1l4hzb8")},m(v,p){H(v,e,p),t||(l=$e(e,"click",o[1]),t=!0)},p:L,i:L,o:L,d(v){v&&i(e),t=!1,l()}}}function Me(o,e,s){const t="https://wa.me/+5551996162444?text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais";return[t,()=>window.open(t)]}class Be extends F{constructor(e){super(),P(this,e,Me,De,Z,{whatsLink:0})}get whatsLink(){return this.$$.ctx[0]}}function ke(o){let e,s,t,l,v,p,f,$=o[0].name+"",b;return{c(){e=h("div"),s=h("img"),v=D(),p=h("div"),f=h("h3"),b=R($),this.h()},l(x){e=d(x,"DIV",{class:!0});var m=_(e);s=d(m,"IMG",{class:!0,src:!0,alt:!0}),v=M(m),p=d(m,"DIV",{class:!0});var I=_(p);f=d(I,"H3",{class:!0});var V=_(f);b=K(V,$),V.forEach(i),I.forEach(i),m.forEach(i),this.h()},h(){a(s,"class","w-full h-48 object-cover"),Q(s.src,t=o[0].image)||a(s,"src",t),a(s,"alt",l=o[0].name),a(f,"class","font-bold text-xl"),a(p,"class","p-4"),a(e,"class","max-w-xs bg-white shadow-md rounded-lg overflow-hidden w-80")},m(x,m){H(x,e,m),n(e,s),n(e,v),n(e,p),n(p,f),n(f,b)},p(x,[m]){m&1&&!Q(s.src,t=x[0].image)&&a(s,"src",t),m&1&&l!==(l=x[0].name)&&a(s,"alt",l),m&1&&$!==($=x[0].name+"")&&_e(b,$)},i:L,o:L,d(x){x&&i(e)}}}function Ae(o,e,s){let{product:t}=e;return o.$$set=l=>{"product"in l&&s(0,t=l.product)},[t]}class He extends F{constructor(e){super(),P(this,e,Ae,ke,Z,{product:0})}}function ze(o){let e,s;return{c(){e=ae("svg"),s=ae("path"),this.h()},l(t){e=re(t,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var l=_(e);s=re(l,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),_(s).forEach(i),l.forEach(i),this.h()},h(){a(s,"fill-rule","evenodd"),a(s,"clip-rule","evenodd"),a(s,"d","M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.5725 9.385C16.829 9.5425 16.9955 9.826 16.9955 10.15L17 14.65C17 15.145 16.595 15.55 16.1 15.55H8.9C8.405 15.55 8 15.145 8 14.65V10.15C8 9.826 8.171 9.5425 8.4275 9.385L12.5 7L16.5725 9.385ZM16.0955 10.1545V10.15L12.5 8.04401L8.89999 10.15L12.5 12.4L16.0955 10.1545ZM8.89999 14.65V11.203L12.5 13.462L16.0955 11.2165L16.1 14.65H8.89999Z"),a(s,"fill","#000000"),a(e,"width","30px"),a(e,"height","30px"),a(e,"viewBox","0 0 24 24"),a(e,"fill","none"),a(e,"xmlns","http://www.w3.org/2000/svg")},m(t,l){H(t,e,l),n(e,s)},p:L,i:L,o:L,d(t){t&&i(e)}}}class ge extends F{constructor(e){super(),P(this,e,null,ze,Z,{})}}function Te(o){let e,s;return{c(){e=ae("svg"),s=ae("path"),this.h()},l(t){e=re(t,"svg",{fill:!0,width:!0,height:!0,viewBox:!0,xmlns:!0,class:!0});var l=_(e);s=re(l,"path",{d:!0}),_(s).forEach(i),l.forEach(i),this.h()},h(){a(s,"d","M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-4.778-4.845a.803.803 0 0 0-.8-.8H6.077a.803.803 0 0 0-.8.8v9.692a.802.802 0 0 0 .8.8h4.845a.802.802 0 0 0 .8-.8zM6.077 5.912h4.845v7.266H6.077zm1.103-.99a.4.4 0 0 1 .4-.4h1.84a.4.4 0 0 1 0 .8H7.58a.4.4 0 0 1-.4-.4zm1.715 9.24a.394.394 0 1 1-.394-.394.394.394 0 0 1 .394.394z"),a(e,"fill","#000000"),a(e,"width","30px"),a(e,"height","30px"),a(e,"viewBox","-1 0 19 19"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"class","cf-icon-svg")},m(t,l){H(t,e,l),n(e,s)},p:L,i:L,o:L,d(t){t&&i(e)}}}class pe extends F{constructor(e){super(),P(this,e,null,Te,Z,{})}}function je(o){let e,s,t,l,v,p,f,$,b,x,m,I,V='<img src="fb.png" alt="Facebook" class="svelte-1dw0exp"/>',j,w,C,A,z;return l=new pe({}),$=new ge({}),{c(){e=h("div"),s=h("div"),t=h("a"),y(l.$$.fragment),v=R(le),p=D(),f=h("a"),y($.$$.fragment),b=R(ne),x=D(),m=h("div"),I=h("a"),I.innerHTML=V,j=D(),w=h("a"),C=h("img"),this.h()},l(E){e=d(E,"DIV",{class:!0});var c=_(e);s=d(c,"DIV",{class:!0});var k=_(s);t=d(k,"A",{href:!0,class:!0});var r=_(t);G(l.$$.fragment,r),v=K(r,le),r.forEach(i),p=M(k),f=d(k,"A",{href:!0,class:!0});var g=_(f);G($.$$.fragment,g),b=K(g,ne),g.forEach(i),k.forEach(i),x=M(c),m=d(c,"DIV",{class:!0});var u=_(m);I=d(u,"A",{href:!0,target:!0,"data-svelte-h":!0}),Y(I)!=="svelte-19zkaot"&&(I.innerHTML=V),j=M(u),w=d(u,"A",{href:!0,target:!0});var B=_(w);C=d(B,"IMG",{src:!0,alt:!0,class:!0}),B.forEach(i),u.forEach(i),c.forEach(i),this.h()},h(){a(t,"href","tel:"+le),a(t,"class","contact-info px-2 svelte-1dw0exp"),a(f,"href","mailto:"+ne),a(f,"class","contact-info px-2 svelte-1dw0exp"),a(s,"class","contact-info svelte-1dw0exp"),a(I,"href",""),a(I,"target","_blank"),Q(C.src,A="insta.png")||a(C,"src",A),a(C,"alt","Instagram"),a(C,"class","svelte-1dw0exp"),a(w,"href",Ne),a(w,"target","_blank"),a(m,"class","social-icons svelte-1dw0exp"),a(e,"class","top-bar svelte-1dw0exp")},m(E,c){H(E,e,c),n(e,s),n(s,t),O(l,t,null),n(t,v),n(s,p),n(s,f),O($,f,null),n(f,b),n(e,x),n(e,m),n(m,I),n(m,j),n(m,w),n(w,C),z=!0},p:L,i(E){z||(T(l.$$.fragment,E),T($.$$.fragment,E),z=!0)},o(E){N(l.$$.fragment,E),N($.$$.fragment,E),z=!1},d(E){E&&i(e),q(l),q($)}}}let le="51 996162444",ne="sleepgoldencamas@gmail.com",Ne="https://www.instagram.com/sleepgoldencamas";class Se extends F{constructor(e){super(),P(this,e,null,je,Z,{})}}function ye(o){let e,s,t,l,v,p,f,$,b,x,m,I,V,j,w,C,A,z,E,c,k,r='<img class="flex h-15 w-16" src="fb.png" alt="Facebook"/>',g,u,B,X,U;return m=new pe({}),C=new ge({}),{c(){e=h("div"),s=h("div"),t=h("img"),v=D(),p=h("div"),f=h("div"),$=R(fe),b=D(),x=h("div"),y(m.$$.fragment),I=D(),V=R(he),j=D(),w=h("div"),y(C.$$.fragment),A=D(),z=R(de),E=D(),c=h("div"),k=h("a"),k.innerHTML=r,g=D(),u=h("a"),B=h("img"),this.h()},l(S){e=d(S,"DIV",{class:!0});var W=_(e);s=d(W,"DIV",{class:!0});var ie=_(s);t=d(ie,"IMG",{src:!0,alt:!0,class:!0}),ie.forEach(i),v=M(W),p=d(W,"DIV",{class:!0});var J=_(p);f=d(J,"DIV",{class:!0});var oe=_(f);$=K(oe,fe),oe.forEach(i),b=M(J),x=d(J,"DIV",{class:!0});var ee=_(x);G(m.$$.fragment,ee),I=M(ee),V=K(ee,he),ee.forEach(i),j=M(J),w=d(J,"DIV",{class:!0});var te=_(w);G(C.$$.fragment,te),A=M(te),z=K(te,de),te.forEach(i),J.forEach(i),E=M(W),c=d(W,"DIV",{class:!0});var se=_(c);k=d(se,"A",{href:!0,target:!0,"data-svelte-h":!0}),Y(k)!=="svelte-1oubbpf"&&(k.innerHTML=r),g=M(se),u=d(se,"A",{href:!0,target:!0});var ce=_(u);B=d(ce,"IMG",{class:!0,src:!0,alt:!0}),ce.forEach(i),se.forEach(i),W.forEach(i),this.h()},h(){Q(t.src,l=o[0])||a(t,"src",l),a(t,"alt","Sleep Golden"),a(t,"class",""),a(s,"class","logo svelte-18env10"),a(f,"class","svelte-18env10"),a(x,"class","svelte-18env10"),a(w,"class","svelte-18env10"),a(p,"class","contact-info svelte-18env10"),a(k,"href",""),a(k,"target","_blank"),a(B,"class","flex h-15 w-16"),Q(B.src,X="insta.png")||a(B,"src",X),a(B,"alt","Instagram"),a(u,"href",Ge),a(u,"target","_blank"),a(c,"class","social-icons svelte-18env10"),a(e,"class","footer svelte-18env10")},m(S,W){H(S,e,W),n(e,s),n(s,t),n(e,v),n(e,p),n(p,f),n(f,$),n(p,b),n(p,x),O(m,x,null),n(x,I),n(x,V),n(p,j),n(p,w),O(C,w,null),n(w,A),n(w,z),n(e,E),n(e,c),n(c,k),n(c,g),n(c,u),n(u,B),U=!0},p:L,i(S){U||(T(m.$$.fragment,S),T(C.$$.fragment,S),U=!0)},o(S){N(m.$$.fragment,S),N(C.$$.fragment,S),U=!1},d(S){S&&i(e),q(m),q(C)}}}let fe="Av José Antônio de Oliveira Neto, Araricá, RS",he="51 996162444",de="sleepgoldencamas@gmail.com",Ge="https://www.instagram.com/sleepgoldencamas";function Oe(o,e,s){return["logo_sem_fundo.png"]}class qe extends F{constructor(e){super(),P(this,e,Oe,ye,Z,{logo:0})}get logo(){return this.$$.ctx[0]}}function me(o,e,s){const t=o.slice();return t[1]=e[s],t}function ve(o){let e,s;return e=new He({props:{product:o[1]}}),{c(){y(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,l){O(e,t,l),s=!0},p:L,i(t){s||(T(e.$$.fragment,t),s=!0)},o(t){N(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function Ze(o){let e,s,t,l,v,p,f,$,b,x="Nossos produtos",m,I,V,j,w,C,A,z;e=new Se({}),t=new Ce({}),v=new Ve({});let E=ue(o[0]),c=[];for(let r=0;r<E.length;r+=1)c[r]=ve(me(o,E,r));const k=r=>N(c[r],1,1,()=>{c[r]=null});return w=new qe({}),A=new Be({}),{c(){y(e.$$.fragment),s=D(),y(t.$$.fragment),l=D(),y(v.$$.fragment),p=D(),f=h("section"),$=h("div"),b=h("h2"),b.textContent=x,m=D(),I=h("div"),V=h("div");for(let r=0;r<c.length;r+=1)c[r].c();j=D(),y(w.$$.fragment),C=D(),y(A.$$.fragment),this.h()},l(r){G(e.$$.fragment,r),s=M(r),G(t.$$.fragment,r),l=M(r),G(v.$$.fragment,r),p=M(r),f=d(r,"SECTION",{id:!0,class:!0});var g=_(f);$=d(g,"DIV",{class:!0});var u=_($);b=d(u,"H2",{class:!0,"data-svelte-h":!0}),Y(b)!=="svelte-1fr0afz"&&(b.textContent=x),m=M(u),I=d(u,"DIV",{class:!0});var B=_(I);V=d(B,"DIV",{class:!0});var X=_(V);for(let U=0;U<c.length;U+=1)c[U].l(X);X.forEach(i),B.forEach(i),u.forEach(i),g.forEach(i),j=M(r),G(w.$$.fragment,r),C=M(r),G(A.$$.fragment,r),this.h()},h(){a(b,"class","text-3xl font-bold text-center mb-8"),a(V,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"),a(I,"class","flex justify-center"),a($,"class","container mx-auto px-6"),a(f,"id","products"),a(f,"class","py-20 bg-gray-50")},m(r,g){O(e,r,g),H(r,s,g),O(t,r,g),H(r,l,g),O(v,r,g),H(r,p,g),H(r,f,g),n(f,$),n($,b),n($,m),n($,I),n(I,V);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(V,null);H(r,j,g),O(w,r,g),H(r,C,g),O(A,r,g),z=!0},p(r,[g]){if(g&1){E=ue(r[0]);let u;for(u=0;u<E.length;u+=1){const B=me(r,E,u);c[u]?(c[u].p(B,g),T(c[u],1)):(c[u]=ve(B),c[u].c(),T(c[u],1),c[u].m(V,null))}for(be(),u=E.length;u<c.length;u+=1)k(u);xe()}},i(r){if(!z){T(e.$$.fragment,r),T(t.$$.fragment,r),T(v.$$.fragment,r);for(let g=0;g<E.length;g+=1)T(c[g]);T(w.$$.fragment,r),T(A.$$.fragment,r),z=!0}},o(r){N(e.$$.fragment,r),N(t.$$.fragment,r),N(v.$$.fragment,r),c=c.filter(Boolean);for(let g=0;g<c.length;g+=1)N(c[g]);N(w.$$.fragment,r),N(A.$$.fragment,r),z=!1},d(r){r&&(i(s),i(l),i(p),i(f),i(j),i(C)),q(e,r),q(t,r),q(v,r),we(c,r),q(w,r),q(A,r)}}}function Fe(o){return[[{name:"Box Baú Bipartido",image:"box_bau_bipart.jpeg"},{name:"Box Baú Casal",image:"box_bau_casal.jpeg"},{name:"Box Baú Solteiro",image:"box_bau_solteiro.jpeg"},{name:"Box Casal",image:"box_casal.jpeg"},{name:"Colchão Coimbra",image:"colchao_coimbra.jpeg"},{name:"Colchão Livorno",image:"colchao_livorno.jpeg"},{name:"Colchão Troya",image:"colchao_troya.jpeg"}]]}class Je extends F{constructor(e){super(),P(this,e,Fe,Ze,Z,{})}}export{Je as component};
