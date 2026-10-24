<script lang="ts">
  import { faqs } from './content'
</script>

<section id="faq" class="border-t border-line px-5 py-20 md:px-8 md:py-32">
  <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
    <div>
      <h2 class="heading-lg">Questions,<br />answered.</h2>
      <p class="mt-6 max-w-xs text-lg leading-relaxed">Anything else, ask on your call.</p>
    </div>

    <div class="divide-y divide-line border-y border-line">
      {#each faqs as faq}
        <details class="group">
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden"
          >
            {faq.q}
            <svg
              class="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
            </svg>
          </summary>
          <p class="-mt-1 max-w-2xl pb-7 leading-relaxed">{faq.a}</p>
        </details>
      {/each}
    </div>
  </div>
</section>
