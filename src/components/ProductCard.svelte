<script lang="ts">
  interface Product {
    name: string;
    image: string;
  }

  export let product: Product;
</script>

<div class="max-w-xs bg-white shadow-md rounded-lg overflow-hidden w-80">
  <img
    class="w-full h-48 object-cover"
    src={product.image}
    alt={product.name}
  />
  <div class="p-4">
    <h3 class="font-bold text-xl">{product.name}</h3>
  </div>
</div>
