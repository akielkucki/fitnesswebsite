<script lang="ts">
  import Button from './Button.svelte'
  import { applyUrl, brand } from './content'
</script>

<section id="apply" class="px-3 md:px-5">
  <div class="mx-auto max-w-[90rem] rounded-[2rem] bg-surface px-6 ring-1 ring-line py-24 text-center md:py-32">
    <h2 class="heading-lg text-white">
      Your body is the only gym<br />
      <em class="text-brand-light">you’ll ever need.</em>
    </h2>
    <p class="mx-auto mt-7 max-w-md text-lg leading-relaxed text-balance text-white/70">
      I take on a limited number of clients each month so everyone gets real attention. Applying takes two minutes.
    </p>
    <Button href={applyUrl} class="mt-10 w-full sm:w-auto">Apply for your spot</Button>
    <p class="mt-5 text-sm text-white/50">Free strategy call. No obligation.</p>
  </div>
</section>

<footer class="px-5 py-10 md:px-8">
  <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
    <p>© {new Date().getFullYear()} {brand}</p>
    <div class="flex gap-6">
      <a href="#top" class="transition-colors hover:text-ink">Instagram</a>
      <a href="#top" class="transition-colors hover:text-ink">YouTube</a>
      <a href="#top" class="transition-colors hover:text-ink">Privacy</a>
    </div>
  </div>
</footer>
