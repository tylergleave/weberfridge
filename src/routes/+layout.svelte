<script>
  import './layout.css';
  import watermelon from '$lib/assets/watermelon.svg';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={watermelon} />
  <meta name="description" content="Weber Fridge — Free Food, No Stigma. A community fridge serving Ogden, UT." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
</div>
