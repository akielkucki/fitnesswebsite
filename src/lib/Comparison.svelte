<script lang="ts">
  import {withPlan, withoutPlan} from './content'
  import {onMount} from "svelte";

  let currentIndex = $state<number>(0);
  let isIntersecting = $state<boolean>(false);

  function start():number {
    return setInterval(()=> {
      if (currentIndex >= withoutPlan.length) {
        return
      }
      console.log("100% visible")
      currentIndex+=1;

    }, 250);
  }
  onMount(()=> {
    const element = document.querySelector<HTMLElement>('[data-chart]');
    const isMobile = window.innerWidth < 768;
    if (!element) return;
    // The mobile table is taller than the middle half of the screen, so start once its top is in view
    const options = isMobile ? {
      root: null,
      rootMargin: '0px 0px -40% 0px',
      threshold: 0
    } : {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    let runnable: number | null = null;
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;

      if (isIntersecting) {
        runnable = start()
      } else {
        if (runnable) clearInterval(runnable);
      }


      isIntersecting &&
      observer.unobserve(entry.target);
    }, options);
    observer.observe(element);
    console.log("isIntersecting", isIntersecting)

    return () => {
      if (runnable) clearInterval(runnable);
    }
  })

</script>

<section id="why" class="px-5 py-20 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
      <h2 class="heading-lg">You don’t need more effort.<br />You need a plan.</h2>
      <p class="max-w-md text-lg leading-relaxed md:justify-self-end">
        Most people in the gym work hard and still look the same year after year. Here’s what changes when every
        session follows a plan built for the physique you want.
      </p>
    </div>

    <!-- Subgrid keeps each pain point level with the fix next to it: one two-column table card on mobile, two cards from md up -->
    <div class="mt-14 grid grid-cols-2 grid-rows-[auto_repeat(6,auto)] overflow-hidden rounded-3xl border border-line md:gap-x-5 md:overflow-visible md:rounded-none md:border-0" data-chart>
      <div class="row-span-7 grid grid-rows-subgrid border-r border-line pb-1.5 md:rounded-3xl md:border md:px-10 md:pt-10 md:pb-4">
        <h3 class="px-3.5 pt-5 pb-4 text-ink md:px-0 md:pt-0 md:pb-5 md:text-lg md:font-semibold">
          <span class="hidden md:inline">Training on guesswork</span>
          <span class="block md:hidden">
            <span class="grid size-7 place-items-center rounded-full bg-red-500/10 text-red-500">
              <svg class="size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m4 4 8 8m0-8-8 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              </svg>
            </span>
            <span class="mt-4 block text-[0.6875rem] font-semibold tracking-[0.14em] text-muted uppercase">Training on</span>
            <span class="mt-1 block font-serif text-2xl leading-none">Guesswork</span>
          </span>
        </h3>
        <ul class="contents" role="list">
          {#each withoutPlan as item,i}
            <li class="flex gap-4 border-t border-line px-3.5 py-3.5 text-sm leading-snug text-muted transition-all duration-300 md:px-0 md:py-4.5 md:text-base md:leading-normal" class:text-red-500={i <= currentIndex} class:opacity-50={i > currentIndex}>
              <svg class="mt-1 hidden size-4 shrink-0 text-muted/70 transition-all duration-300 md:block" class:text-red-500={i <= currentIndex} class:opacity-50={i > currentIndex} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m4 4 8 8m0-8-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
              </svg>
              {item}

            </li>
          {/each}
        </ul>
      </div>

      <div class="row-span-7 grid grid-rows-subgrid bg-brand/5 pb-1.5 md:rounded-3xl md:px-10 md:pt-10 md:pb-4 md:ring-1 md:ring-brand/25">
        <h3 class="bg-linear-to-b from-brand/10 to-transparent px-3.5 pt-5 pb-4 text-ink md:bg-none md:px-0 md:pt-0 md:pb-5 md:text-lg md:font-semibold">
          <span class="hidden md:inline">Training on a plan, coached</span>
          <span class="block md:hidden">
            <span class="flex items-center gap-2">
              <span class="grid size-7 place-items-center rounded-full bg-brand/15 text-brand-light">
                <svg class="size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="m3 8.5 3.2 3L13 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span class="rounded-full bg-brand px-2 py-0.5 text-[0.625rem] font-semibold tracking-[0.12em] text-canvas uppercase">Coached</span>
            </span>
            <span class="mt-4 block text-[0.6875rem] font-semibold tracking-[0.14em] text-brand-light/70 uppercase">Training on</span>
            <span class="mt-1 block font-serif text-2xl leading-none">A plan</span>
          </span>
        </h3>
        <ul class="contents" role="list">
          {#each withPlan as item,i}
            <li class="flex gap-4 border-t border-brand/15 px-3.5 py-3.5 text-sm leading-snug transition-all duration-300 md:px-0 md:py-4.5 md:text-base md:leading-normal" class:text-brand-light={i <= currentIndex} class:opacity-50={i > currentIndex}>
              <svg class="mt-1 hidden size-4 shrink-0 text-brand-light md:block" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
