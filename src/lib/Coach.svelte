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
      <h2 class="heading-lg">I quit the gym and got stronger.</h2>
      <div class="mt-8 space-y-5 text-lg leading-relaxed">
        <p>
          For years I trained the way everyone does: barbells, machines and a membership I resented paying. My
          numbers went up, and my shoulders paid for it.
        </p>
        <p>
          When I switched to calisthenics I got stronger, leaner and more capable than I’d ever been under a bar,
          and I haven’t paid for a gym since.
        </p>
        <p class="text-ink">
          Now I coach people to do the same: build real, usable strength with nothing but their own body, on a plan
          made for them.
        </p>
      </div>
      <p class="mt-8 text-sm text-muted">Founder, {brand}</p>
      <Button href={applyUrl} class="mt-10 w-full sm:w-auto">Apply for your spot</Button>
    </div>
  </div>
</section>
