<script>
  import './layout.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { langStore } from '$lib/stores/lang.svelte.js';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';

  let { children, data } = $props();

  // Send a GA4 page_view on initial load and every client-side navigation
  // (page_view is disabled in the gtag config in app.html). gtag() is global.
  afterNavigate(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: page.url.pathname + page.url.search,
        page_location: page.url.href,
        page_title: document.title,
      });
    }
  });

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
