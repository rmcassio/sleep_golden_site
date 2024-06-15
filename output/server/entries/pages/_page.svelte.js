import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
/* empty css               */
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const logo = "src/assets/images/logo_sem_fundo.png";
  const whatsLink = "https://wa.me/+5551994055464?text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais";
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0) $$bindings.logo(logo);
  if ($$props.whatsLink === void 0 && $$bindings.whatsLink && whatsLink !== void 0) $$bindings.whatsLink(whatsLink);
  return `<nav class="bg-white shadow-md"><div class="container mx-auto px-6 py-3"><div class="flex items-center justify-between"><div><img${add_attribute("src", logo, 0)} alt="Sleep Golden" class="h-10"></div> <ul class="flex space-x-4"><li class="text-green-500 hover:text-green-700"><a${add_attribute("href", whatsLink, 0)} target="_blank" rel="noopener noreferrer">WhatsApp</a></li></ul></div></div></nav>`;
});
const css = {
  code: '.hero.svelte-37pw7s{position:relative}.bg-hero-image.svelte-37pw7s{background-image:url("src/assets/images/bg.jpeg");filter:blur(1px)}.gradient-text.svelte-37pw7s{background:linear-gradient(to right, #ffffff, #fefdfa);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}',
  map: '{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<section class=\\"relative hero py-20 text-center\\">\\n    <div class=\\"absolute inset-0 bg-cover bg-center bg-hero-image\\"></div>\\n    <div class=\\"absolute inset-0 bg-black opacity-50\\"></div>\\n    <div class=\\"container relative mx-auto px-6 text-white\\">\\n        <h1 class=\\"text-4xl font-bold mb-4 gradient-text\\">Camas e colchões</h1>\\n        <p class=\\"text-lg mb-6 gradient-text\\">\\n            Ache o que você precisa aqui em nossa loja!\\n        </p>\\n    </div>\\n</section>\\n\\n<style>\\n    .hero {\\n        position: relative;\\n    }\\n    .bg-hero-image {\\n        background-image: url(\\"src/assets/images/bg.jpeg\\");\\n        filter: blur(1px);\\n    }\\n    .gradient-text {\\n        background: linear-gradient(to right, #ffffff, #fefdfa);\\n        -webkit-background-clip: text;\\n        background-clip: text;\\n        -webkit-text-fill-color: transparent;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAYI,mBAAM,CACF,QAAQ,CAAE,QACd,CACA,4BAAe,CACX,gBAAgB,CAAE,gCAAgC,CAClD,MAAM,CAAE,KAAK,GAAG,CACpB,CACA,4BAAe,CACX,UAAU,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CACvD,uBAAuB,CAAE,IAAI,CAC7B,eAAe,CAAE,IAAI,CACrB,uBAAuB,CAAE,WAC7B"}'
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="relative hero py-20 text-center svelte-37pw7s" data-svelte-h="svelte-ont6sz"><div class="absolute inset-0 bg-cover bg-center bg-hero-image svelte-37pw7s"></div> <div class="absolute inset-0 bg-black opacity-50"></div> <div class="container relative mx-auto px-6 text-white"><h1 class="text-4xl font-bold mb-4 gradient-text svelte-37pw7s">Camas e colchões</h1> <p class="text-lg mb-6 gradient-text svelte-37pw7s">Ache o que você precisa aqui em nossa loja!</p></div> </section>`;
});
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product = {
    name: "Product Name",
    price: "$100",
    image: "https://via.placeholder.com/150"
  } } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0) $$bindings.product(product);
  return `<div class="max-w-xs bg-white shadow-md rounded-lg overflow-hidden w-80"><img class="w-full h-48 object-cover"${add_attribute("src", product.image, 0)}${add_attribute("alt", product.name, 0)}> <div class="p-4"><h3 class="font-bold text-xl">${escape(product.name)}</h3></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const products = [
    {
      name: "Box 1",
      price: "$200",
      image: "src/assets/images/logo.png"
    },
    {
      name: "Box 2",
      price: "$300",
      image: "src/assets/images/logo.png"
    },
    {
      name: "Box 3",
      price: "$400",
      image: "src/assets/images/logo.png"
    },
    {
      name: "Box 4",
      price: "$400",
      image: "src/assets/images/logo.png"
    },
    {
      name: "Box 5",
      price: "$400",
      image: "src/assets/images/logo.png"
    },
    {
      name: "Box 6",
      price: "$400",
      image: "src/assets/images/logo.png"
    }
  ];
  return `${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} <section id="products" class="py-20 bg-gray-50"><div class="container mx-auto px-6"><h2 class="text-3xl font-bold text-center mb-8" data-svelte-h="svelte-1fr0afz">Nossos produtos</h2> <div class="flex justify-center"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">${each(products, (product) => {
    return `${validate_component(ProductCard, "ProductCard").$$render($$result, { product }, {}, {})}`;
  })}</div></div></div></section>`;
});
export {
  Page as default
};
