<script lang="ts">
  import { bodyweight, weights } from './content'
  import {onMount} from "svelte";
  let currentIndex = $state<number>(0)
  onMount(()=> {
    const runnable = setInterval(()=> {
      currentIndex = (currentIndex + 1) % Math.max(weights.length, )
    }, 2500)
    return () => {
      clearInterval(runnable)
    }
  })

</script>

<section id="why" class="px-5 py-20 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
      <h2 class="heading-lg">You don’t need a gym.<br />You never did.</h2>
      <p class="max-w-md text-lg leading-relaxed md:justify-self-end">
        Weights work until the cost, the commute and the aching joints catch up with you. Here’s what changes when
        your body becomes the equipment.
      </p>
    </div>

    <!-- Subgrid keeps each pain point level with the fix next to it -->
    <div class="mt-14 grid gap-4 md:grid-cols-2 md:grid-rows-[auto_repeat(6,auto)] md:gap-x-5 md:gap-y-0">
      <div class="flex flex-col rounded-3xl border border-line px-7 pt-8 pb-3 md:row-span-7 md:grid md:grid-rows-subgrid md:px-10 md:pt-10 md:pb-4">
        <h3 class="pb-5 text-lg font-semibold text-ink">Training with weights</h3>
        <ul class="contents" role="list">
          {#each weights as item,i}
            <li class="flex gap-4 border-t border-line py-4.5 text-muted transition-colors duration-300" class:text-red-500={i === currentIndex}>
              <svg class="mt-1 size-4 shrink-0 text-muted/70 transition-colors duration-300" class:text-red-500={i === currentIndex} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m4 4 8 8m0-8-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
              </svg>
              {item}

            </li>
          {/each}
        </ul>
      </div>

      <div class="flex flex-col rounded-3xl bg-brand/5 px-7 pt-8 pb-3 ring-1 ring-brand/25 md:row-span-7 md:grid md:grid-rows-subgrid md:px-10 md:pt-10 md:pb-4">
        <h3 class="pb-5 text-lg font-semibold text-ink">Training with your body, coached</h3>
        <ul class="contents" role="list">
          {#each bodyweight as item,i}
            <li class="flex gap-4 border-t border-brand/15 py-4.5  transition-colors duration-300" class:text-brand-light={i === currentIndex}>
              <svg class="mt-1 size-4 shrink-0 text-brand-light" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m3 8.5 3.2 3L13 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
