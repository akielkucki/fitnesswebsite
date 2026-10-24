<script lang="ts">
  import { included, phases } from './content'
</script>

<section id="program" class="bg-surface px-5 py-20 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
      <h2 class="heading-lg">What your first<br />12 weeks look like.</h2>
      <p class="max-w-md text-lg leading-relaxed md:justify-self-end">
        No generic PDF and no guesswork. A plan built around your body, adjusted every week by someone who’s
        actually watching your form.
      </p>
    </div>

    <ol class="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
      {#each phases as phase}
        <li class="rounded-3xl bg-canvas p-8 ring-1 ring-line md:p-10">
          <p class="text-sm font-medium text-brand-light">{phase.weeks}</p>
          <h3 class="mt-10 font-serif text-[2.25rem] leading-none text-ink">{phase.title}</h3>
          <p class="mt-4 leading-relaxed">{phase.text}</p>
        </li>
      {/each}
    </ol>

    <ul class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10" role="list">
      {#each included as item}
        <li class="flex gap-3.5">
          <span class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand">
            <svg class="size-3.5 text-canvas" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="m3 8.5 3.2 3L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <div>
            <p class="font-semibold text-ink">{item.title}</p>
            <p class="mt-1 text-[15px] leading-relaxed">{item.text}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>
