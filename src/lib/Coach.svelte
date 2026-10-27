<script lang="ts">
  import coach from '../assets/coach.webp'
  import Button from './Button.svelte'
  import { applyUrl, brand } from './content'
</script>

<section id="coach" class="px-5 pb-20 md:px-8 md:pb-32">
  <div class="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.85fr_1fr] md:gap-20">
    <img
      src={coach}
      alt="Founder of {brand} in a dark suit, leaning against a concrete wall"
      width="1080"
      height="1440"
      loading="lazy"
      class="aspect-[4/5] w-full rounded-3xl object-cover object-top"
    />

    <div>
      <h2 class="heading-lg">I trained for years and looked the same.</h2>
      <!-- PLACEHOLDER story: swap in the coach's real background -->
      <div class="mt-8 space-y-5 text-lg leading-relaxed">
        <p>
          For years I trained the way most people do: whatever workout I found that week, more sets when I felt
          motivated, and a body that barely changed.
        </p>
        <p>
          What finally worked was structure. Gym lifts for size, calisthenics for shape and control, and a plan that
          told me exactly what to do every session.
        </p>
        <p class="text-ink">
          Now I lay out that plan for other people, built around their body, their schedule and the physique they
          actually want.
        </p>
      </div>
      <p class="mt-8 text-sm text-muted">Founder, {brand}</p>
      <Button href={applyUrl} class="mt-10 w-full sm:w-auto">Apply for your spot</Button>
    </div>
  </div>
</section>
