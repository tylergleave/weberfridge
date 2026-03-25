<script>
  const logo = '/images/fridge_logo.png';
</script>

<footer class="bg-[#2D2A3E] text-white mt-20">
  <div class="max-w-5xl mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

      <!-- Brand column -->
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <img src={logo} alt="Weber Fridge logo" class="h-12 w-auto" />
          <div class="leading-tight">
            <span class="block font-display text-2xl font-black text-[#E8538A]">Weber</span>
            <span class="block font-display text-2xl font-black text-[#7DC242]">Fridge</span>
          </div>
        </div>
        <p class="text-sm text-gray-300 italic font-display">Free Food. No Stigma.</p>
        <p class="text-sm text-gray-400 mt-1">A community fridge in Ogden, UT — because everyone deserves to eat.</p>
      </div>

      <!-- Links column -->
      <div>
        <h4 class="font-display text-lg font-bold text-[#E8538A] mb-4">Navigate</h4>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="/" class="hover:text-[#E8538A] transition-colors">Home</a></li>
          <li><a href="/about" class="hover:text-[#E8538A] transition-colors">About Us</a></li>
          <li><a href="/events" class="hover:text-[#E8538A] transition-colors">Events</a></li>
          <li><a href="/get-involved" class="hover:text-[#E8538A] transition-colors">Get Involved</a></li>
          <li><a href="/supporters" class="hover:text-[#E8538A] transition-colors">Supporters</a></li>
          <li><a href="/contact" class="hover:text-[#E8538A] transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Contact column -->
      <div>
        <h4 class="font-display text-lg font-bold text-[#7DC242] mb-4">Find Us</h4>
        <address class="not-italic text-sm text-gray-300 space-y-2">
          <p>301 E 28th Street</p>
          <p>Ogden, UT 84414</p>
        </address>
        <div class="mt-4 flex gap-3">
          <a
            href="https://www.instagram.com/weberfridge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="p-2 rounded-full bg-white/10 hover:bg-[#E8538A] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/weberfridge/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="p-2 rounded-full bg-white/10 hover:bg-[#1877F2] transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://github.com/tylergleave/weberfridge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://linktr.ee/weberfridge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linktree"
            class="p-2 rounded-full bg-white/10 hover:bg-[#7DC242] transition-colors text-xs font-bold flex items-center px-3"
          >
            Link Tree
          </a>
        </div>
      </div>
    </div>

    <div class="mt-10 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
      <p>Weber Fridge — Ogden, UT &nbsp;·&nbsp; With support from <a href="https://urbanprairieag.com/" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300 transition-colors">Urban Prairie Agriculture</a>, <a href="https://losttexanbbq.com/" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300 transition-colors">Lost Texan BBQ</a> &amp; <a href="https://www.utahrecovers.org/locations/ogden/" target="_blank" rel="noopener noreferrer" class="hover:text-gray-300 transition-colors">USARA Ogden</a></p>
    </div>
  </div>
</footer>
