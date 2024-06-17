<script>
    import "../app.css";
    import NavBar from "../components/NavBar.svelte";
    import Hero from "../components/Hero.svelte";
    import WhatsAppButton from "../components/WhatsAppButton.svelte";
    import ProductCard from "../components/ProductCard.svelte";
    import TopBar from "../components/TopBar.svelte";
    import Footer from "../components/Footer.svelte";

    const products = [
        {
            name: "Box 1",
            price: "$200",
            image: "logo.png",
        },
        {
            name: "Box 2",
            price: "$300",
            image: "logo.png",
        },
        {
            name: "Box 3",
            price: "$400",
            image: "logo.png",
        },
        {
            name: "Box 4",
            price: "$400",
            image: "logo.png",
        },
        {
            name: "Box 5",
            price: "$400",
            image: "logo.png",
        },
        {
            name: "Box 6",
            price: "$400",
            image: "logo.png",
        },
    ];
</script>

<TopBar />

<NavBar />

<Hero />

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

<Footer />

<WhatsAppButton />
