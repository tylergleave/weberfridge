<script>
  import './layout.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { langStore } from '$lib/stores/lang.svelte.js';

  let { children, data } = $props();

  // Initialise from server-detected language (cookie → Accept-Language → 'en').
  // Run inside $effect so the reference to data.lang is tracked reactively
  // (e.g. language can update on navigation) and the warning about capturing
  // only the initial value is suppressed.
  $effect(() => {
    langStore.set(data.lang);
  });
</script>

<svelte:head>
  <link rel="icon" href="/images/fridge_logo.png" />
  <meta name="description" content="Weber Fridge — Free Food, No Stigma. A community fridge serving Ogden, UT." />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Header />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
</div>
