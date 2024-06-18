<script lang="ts">
  import ProductCard from "../components/ProductCard.svelte";
  import { products } from "../lib/items.ts";
</script>

<section id="products" class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-8">Nossos produtos</h2>
    <div class="flex justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {#each products as product}
          <ProductCard {product} />
        {/each}
      </div>
    </div>
  </div>
</section>
