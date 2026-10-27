<script lang="ts">
  import before from '../assets/before.webp'
  import after from '../assets/after.webp'

  // Divider position as a % of the frame width: the before photo shows left of it, the after photo right of it
  let position = $state(50)
  let frame: HTMLDivElement

  const keySteps: Record<string, number> = { ArrowLeft: -5, ArrowRight: 5, Home: -100, End: 100 }

  const clamp = (value: number) => Math.min(100, Math.max(0, value))

  function slideTo(clientX: number) {
    const { left, width } = frame.getBoundingClientRect()
    position = clamp(((clientX - left) / width) * 100)
  }

  // Capturing the pointer keeps the drag going even when it leaves the frame
  function startDrag(event: PointerEvent) {
    frame.setPointerCapture(event.pointerId)
    slideTo(event.clientX)
  }

  function drag(event: PointerEvent) {
    if (frame.hasPointerCapture(event.pointerId)) slideTo(event.clientX)
  }

  function nudge(event: KeyboardEvent) {
    if (!(event.key in keySteps)) return
    event.preventDefault()
    position = clamp(position + keySteps[event.key])
  }
</script>

<section id="case-studies" class="px-5 py-20 md:px-8 md:py-32">
  <div class="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_0.85fr] md:gap-20">
    <div>
      <h2 class="heading-lg">Same person.<br />New body.</h2>
      <p class="mt-8 max-w-md text-lg leading-relaxed">
        Before and after following the plan: gym and calisthenics, laid out week by week. Drag the slider to compare.
      </p>
    </div>

    <!-- touch-pan-y lets the page still scroll vertically on phones while horizontal drags move the divider -->
    <div
      bind:this={frame}
      role="slider"
      tabindex="0"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      onpointerdown={startDrag}
      onpointermove={drag}
      onkeydown={nudge}
      class="relative aspect-[4/5] cursor-ew-resize touch-pan-y overflow-hidden rounded-3xl select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      <img src={before} alt="Before: slim, untrained build" draggable="false" loading="lazy" class="absolute inset-0 size-full object-cover" />
      <img
        src={after}
        alt="After: broader shoulders and visibly bigger arms"
        draggable="false"
        loading="lazy"
        class="absolute inset-0 size-full object-cover"
        style:clip-path="inset(0 0 0 {position}%)"
      />

      <span class="absolute top-4 left-4 rounded-full bg-canvas/70 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-ink uppercase backdrop-blur transition-opacity" class:opacity-0={position < 25}>Before</span>
      <span class="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold tracking-[0.14em] text-canvas uppercase transition-opacity" class:opacity-0={position > 75}>After</span>

      <div class="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ink" style:left="{position}%">
        <span class="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-canvas shadow-lg">
          <svg class="size-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="m7 5-5 5 5 5m6-10 5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</section>
