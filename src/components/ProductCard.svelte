<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  interface Product {
    name: string;
    image: string;
  }

  export let product: Product;

  let isZoomed = false;

  function toggleZoom() {
    isZoomed = !isZoomed;

    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  onDestroy(() => {
    isZoomed = false;
  });
</script>

<div
  aria-hidden="true"
  class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 zoom-padding"
  style="display: {isZoomed ? 'flex' : 'none'};"
  on:click={toggleZoom}
>
  <img
    class="max-w-full max-h-full"
    src={product.image}
    alt={product.name}
    style="transform: scale({isZoomed ? 1.05 : 1});"
  />
</div>

<div class="max-w-xs bg-white shadow rounded overflow-hidden w-80">
  <div
    aria-hidden="true"
    class="relative overflow-hidden"
    style="cursor: pointer;"
    on:click={toggleZoom}
  >
    <img
      class="w-full h-60 object-cover transition-transform duration-300"
      src={product.image}
      alt={product.name}
      style="
        transform: scale({isZoomed ? 1.05 : 1});
      "
    />
  </div>
  <div class="p-4">
    <h3 class="text-gray-900">{product.name}</h3>
  </div>
</div>

<style>
  .zoom-padding {
    padding: 48px;
  }
</style>
