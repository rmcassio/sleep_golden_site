import{s as A,x as y,n as I}from"../chunks/scheduler.W2pu3yam.js";import{S as N,i as j,e as v,s as L,b as U,c as $,d as w,g as h,h as z,f as F,o,j as B,k as m,y as J,l as K,u as H,v as S,w as M,t as V,n as Q,a as D,x as T,z as R,q as X}from"../chunks/index.CV5QbAHm.js";/* empty css                    */function O(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Y(n){let e,a,t,i,f,g,p,x,_,c,u;return{c(){e=v("nav"),a=v("div"),t=v("div"),i=v("div"),f=v("img"),p=L(),x=v("ul"),_=v("li"),c=v("a"),u=U("WhatsApp"),this.h()},l(E){e=$(E,"NAV",{class:!0});var b=w(e);a=$(b,"DIV",{class:!0});var r=w(a);t=$(r,"DIV",{class:!0});var C=w(t);i=$(C,"DIV",{});var s=w(i);f=$(s,"IMG",{src:!0,alt:!0,class:!0}),s.forEach(h),p=z(C),x=$(C,"UL",{class:!0});var d=w(x);_=$(d,"LI",{class:!0});var l=w(_);c=$(l,"A",{href:!0,target:!0,rel:!0});var q=w(c);u=F(q,"WhatsApp"),q.forEach(h),l.forEach(h),d.forEach(h),C.forEach(h),r.forEach(h),b.forEach(h),this.h()},h(){y(f.src,g=n[0])||o(f,"src",g),o(f,"alt","Sleep Golden"),o(f,"class","h-10"),o(c,"href",n[1]),o(c,"target","_blank"),o(c,"rel","noopener noreferrer"),o(_,"class","text-green-500 hover:text-green-700"),o(x,"class","flex space-x-4"),o(t,"class","flex items-center justify-between"),o(a,"class","container mx-auto px-6 py-3"),o(e,"class","bg-white shadow-md")},m(E,b){B(E,e,b),m(e,a),m(a,t),m(t,i),m(i,f),m(t,p),m(t,x),m(x,_),m(_,c),m(c,u)},p:I,i:I,o:I,d(E){E&&h(e)}}}function Z(n,e,a){return["logo_sem_fundo.png","https://wa.me/+5551994055464?text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais"]}class ee extends N{constructor(e){super(),j(this,e,Z,Y,A,{logo:0,whatsLink:1})}get logo(){return this.$$.ctx[0]}get whatsLink(){return this.$$.ctx[1]}}function te(n){let e,a='<div class="absolute inset-0 bg-cover bg-center bg-hero-image svelte-ai0zlq"></div> <div class="absolute inset-0 bg-black opacity-50"></div> <div class="container relative mx-auto px-6 text-white"><h1 class="text-4xl font-bold mb-4 gradient-text svelte-ai0zlq">Camas e colchões</h1> <p class="text-lg mb-6 gradient-text svelte-ai0zlq">Ache o que você precisa aqui em nossa loja!</p></div>';return{c(){e=v("section"),e.innerHTML=a,this.h()},l(t){e=$(t,"SECTION",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-ont6sz"&&(e.innerHTML=a),this.h()},h(){o(e,"class","relative hero py-20 text-center svelte-ai0zlq")},m(t,i){B(t,e,i)},p:I,i:I,o:I,d(t){t&&h(e)}}}class se extends N{constructor(e){super(),j(this,e,null,te,A,{})}}function ae(n){let e,a,t,i,f,g,p,x=n[0].name+"",_;return{c(){e=v("div"),a=v("img"),f=L(),g=v("div"),p=v("h3"),_=U(x),this.h()},l(c){e=$(c,"DIV",{class:!0});var u=w(e);a=$(u,"IMG",{class:!0,src:!0,alt:!0}),f=z(u),g=$(u,"DIV",{class:!0});var E=w(g);p=$(E,"H3",{class:!0});var b=w(p);_=F(b,x),b.forEach(h),E.forEach(h),u.forEach(h),this.h()},h(){o(a,"class","w-full h-48 object-cover"),y(a.src,t=n[0].image)||o(a,"src",t),o(a,"alt",i=n[0].name),o(p,"class","font-bold text-xl"),o(g,"class","p-4"),o(e,"class","max-w-xs bg-white shadow-md rounded-lg overflow-hidden w-80")},m(c,u){B(c,e,u),m(e,a),m(e,f),m(e,g),m(g,p),m(p,_)},p(c,[u]){u&1&&!y(a.src,t=c[0].image)&&o(a,"src",t),u&1&&i!==(i=c[0].name)&&o(a,"alt",i),u&1&&x!==(x=c[0].name+"")&&K(_,x)},i:I,o:I,d(c){c&&h(e)}}}function ne(n,e,a){let{product:t={name:"Product Name",price:"$100",image:"https://via.placeholder.com/150"}}=e;return n.$$set=i=>{"product"in i&&a(0,t=i.product)},[t]}class le extends N{constructor(e){super(),j(this,e,ne,ae,A,{product:0})}}function P(n,e,a){const t=n.slice();return t[1]=e[a],t}function W(n){let e,a;return e=new le({props:{product:n[1]}}),{c(){H(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,i){M(e,t,i),a=!0},p:I,i(t){a||(V(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){T(e,t)}}}function re(n){let e,a,t,i,f,g,p,x="Nossos produtos",_,c,u,E;e=new ee({}),t=new se({});let b=O(n[0]),r=[];for(let s=0;s<b.length;s+=1)r[s]=W(P(n,b,s));const C=s=>D(r[s],1,1,()=>{r[s]=null});return{c(){H(e.$$.fragment),a=L(),H(t.$$.fragment),i=L(),f=v("section"),g=v("div"),p=v("h2"),p.textContent=x,_=L(),c=v("div"),u=v("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){S(e.$$.fragment,s),a=z(s),S(t.$$.fragment,s),i=z(s),f=$(s,"SECTION",{id:!0,class:!0});var d=w(f);g=$(d,"DIV",{class:!0});var l=w(g);p=$(l,"H2",{class:!0,"data-svelte-h":!0}),J(p)!=="svelte-1fr0afz"&&(p.textContent=x),_=z(l),c=$(l,"DIV",{class:!0});var q=w(c);u=$(q,"DIV",{class:!0});var G=w(u);for(let k=0;k<r.length;k+=1)r[k].l(G);G.forEach(h),q.forEach(h),l.forEach(h),d.forEach(h),this.h()},h(){o(p,"class","text-3xl font-bold text-center mb-8"),o(u,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"),o(c,"class","flex justify-center"),o(g,"class","container mx-auto px-6"),o(f,"id","products"),o(f,"class","py-20 bg-gray-50")},m(s,d){M(e,s,d),B(s,a,d),M(t,s,d),B(s,i,d),B(s,f,d),m(f,g),m(g,p),m(g,_),m(g,c),m(c,u);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(u,null);E=!0},p(s,[d]){if(d&1){b=O(s[0]);let l;for(l=0;l<b.length;l+=1){const q=P(s,b,l);r[l]?(r[l].p(q,d),V(r[l],1)):(r[l]=W(q),r[l].c(),V(r[l],1),r[l].m(u,null))}for(X(),l=b.length;l<r.length;l+=1)C(l);Q()}},i(s){if(!E){V(e.$$.fragment,s),V(t.$$.fragment,s);for(let d=0;d<b.length;d+=1)V(r[d]);E=!0}},o(s){D(e.$$.fragment,s),D(t.$$.fragment,s),r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)D(r[d]);E=!1},d(s){s&&(h(a),h(i),h(f)),T(e,s),T(t,s),R(r,s)}}}function oe(n){return[[{name:"Box 1",price:"$200",image:"logo.png"},{name:"Box 2",price:"$300",image:"logo.png"},{name:"Box 3",price:"$400",image:"logo.png"},{name:"Box 4",price:"$400",image:"logo.png"},{name:"Box 5",price:"$400",image:"logo.png"},{name:"Box 6",price:"$400",image:"logo.png"}]]}class de extends N{constructor(e){super(),j(this,e,oe,re,A,{})}}export{de as component};
