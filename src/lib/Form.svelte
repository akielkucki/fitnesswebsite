<script lang="ts">
  import { tick } from 'svelte'
  import { cubicOut } from 'svelte/easing'
  import { prefersReducedMotion } from 'svelte/motion'
  import { fade, fly } from 'svelte/transition'
  import coach from '../assets/coach.webp'
  import { applyUrl, discoveryEndpoint, goals, painPoints, readiness, triedBefore } from './content'

  // Capped so step two stays short and people pick what actually bothers them most
  const MAX_CONCERNS = 3

  const steps = [
    {
      label: 'What’s in the way',
      title: ['What’s holding', 'you back?'],
      intro: 'Tell me what’s getting in the way. I read every answer myself and bring a plan for it to your call.',
      cta: 'Continue',
    },
    {
      label: 'Where you are',
      title: ['You’re not', 'the problem.'],
      intro: 'What you picked is common, and it’s fixable. A few quick questions so I know where you’re starting from.',
      cta: 'Continue',
    },
    {
      label: 'What you want',
      title: ['Picture', 'week twelve.'],
      intro: 'Forget what’s in the way for a minute. If the next 12 weeks went right, what would be different?',
      cta: 'See my call plan',
    },
    {
      label: 'Your call',
      title: ['Here’s your', 'call plan.'],
      intro: 'Built from your answers. The call is free, we map out your first 12 weeks together, and there’s no hard sell.',
      cta: 'Send my answers',
    },
  ]

  let step = $state(0)
  let selected = $state<string[]>([])
  let answers = $state<Record<string, string>>({})
  let tried = $state<string[]>([])
  let goal = $state('')
  let why = $state('')
  let ready = $state('')
  let name = $state('')
  let email = $state('')
  let attempted = $state(false)
  let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle')

  let section: HTMLElement
  let heading: HTMLElement

  const chosen = $derived(painPoints.filter((p) => selected.includes(p.label)))
  const chosenGoal = $derived(goals.find((g) => g.label === goal))
  const firstName = $derived(name.trim().split(/\s+/)[0])
  const isLast = $derived(step === steps.length - 1)
  const complete = $derived([
    selected.length > 0,
    chosen.every((p) => answers[p.label]),
    Boolean(goal),
    Boolean(ready),
  ])
  // What the call will cover, built from everything they've told us so far
  const agenda = $derived([
    ...chosen.map((p) => p.agenda),
    ...(tried.length ? ['Why what you’ve tried so far hasn’t stuck'] : []),
    ...(chosenGoal ? [`A 12-week plan toward ${chosenGoal.agenda}`] : []),
  ])
  const view = $derived(
    status === 'sent'
      ? {
          title: ['Got it,', `${firstName}.`],
          intro: 'I’ll read every answer before we talk, so the call goes on your plan instead of the basics.',
        }
      : steps[step],
  )

  const ms = (duration: number) => (prefersReducedMotion.current ? 0 : duration)
  const pad = (n: number) => String(n).padStart(2, '0')

  // Moves focus to the new heading and brings the top of the section back into view
  async function settle() {
    await tick()
    heading.focus({ preventScroll: true })
    if (section.getBoundingClientRect().top < 0) {
      section.scrollIntoView({ behavior: prefersReducedMotion.current ? 'auto' : 'smooth' })
    }
  }

  function goTo(next: number) {
    step = next
    attempted = false
    settle()
  }

  async function submitStep(e: Event) {
    e.preventDefault()
    attempted = true
    if (!complete[step]) return
    if (!isLast) return goTo(step + 1)

    status = 'sending'
    try {
      if (discoveryEndpoint) {
        const res = await fetch(discoveryEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name,
            email,
            painPoints: selected,
            answers: Object.fromEntries(chosen.map((p) => [p.question, answers[p.label]])),
            tried,
            goal,
            why,
            readiness: ready,
          }),
        })
        if (!res.ok) throw new Error(`Discovery form failed: ${res.status}`)
      }
      status = 'sent'
      settle()
    } catch {
      status = 'error'
    }
  }

  const input =
    'w-full rounded-xl border border-line bg-canvas px-4 text-ink transition-[border-color,box-shadow] duration-200 placeholder:text-muted focus:border-ink focus:ring-4 focus:ring-brand/25 focus:outline-none'
  const chip =
    'inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2.5 text-[15px] text-ink-soft transition-colors duration-200 select-none hover:border-ink/30 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-canvas peer-disabled:cursor-not-allowed peer-disabled:opacity-45 peer-disabled:hover:border-line peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink'
  const primary =
    'group inline-flex h-13 cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-8 text-[15px] font-semibold text-canvas transition-colors duration-200 hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-wait disabled:opacity-60'
  const hint = 'font-normal text-black/60'
  const error = 'mt-3 text-sm font-medium text-red-800'
</script>

<section id="discovery" bind:this={section} class="px-3 md:px-5 md:pt-24 md:pb-32 pb-16">
  <div
    class="theme-light mx-auto grid max-w-[90rem] gap-10 rounded-[2rem] bg-brand-light px-6 py-16 md:px-12 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-20"
  >
    <div class="lg:sticky lg:top-24 lg:self-start">
      {#if status !== 'sent'}
        <div class="mb-8 flex items-center gap-4 lg:hidden">
          <div class="flex flex-1 gap-1.5" aria-hidden="true">
            {#each steps as s, i (s.label)}
              <span class={['h-1 flex-1 rounded-full transition-colors duration-300', i <= step ? 'bg-ink' : 'bg-black/15']}></span>
            {/each}
          </div>
          <p class="text-sm font-medium text-ink">Step {step + 1} of {steps.length}</p>
        </div>
      {/if}

      <h2 bind:this={heading} tabindex="-1" class="heading-lg focus:outline-none">
        {#key view}
          <span class="block" in:fade={{ duration: ms(250) }}>{view.title[0]}<br />{view.title[1]}</span>
        {/key}
      </h2>
      {#key view}
        <p class="mt-6 max-w-sm text-lg leading-relaxed" in:fade={{ duration: ms(250) }}>{view.intro}</p>
      {/key}
      {#if step === 0 && status !== 'sent'}
        <p class="mt-6 text-sm text-black/60">Takes under two minutes.</p>
      {/if}

      {#if status !== 'sent'}
        <ol class="mt-12 hidden border-t border-black/10 lg:block">
          {#each steps as s, i (s.label)}
            <li class="border-b border-black/10">
              {#if i < step}
                <button
                  type="button"
                  onclick={() => goTo(i)}
                  class="group flex w-full cursor-pointer items-center gap-4 py-3.5 text-left text-ink-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <span class="w-7 font-serif text-xl leading-none">{pad(i + 1)}</span>
                  {s.label}
                  <span class="ml-auto text-sm text-black/60 transition-colors group-hover:text-ink">Edit</span>
                </button>
              {:else}
                <div
                  class={['flex items-center gap-4 py-3.5', i === step ? 'font-semibold text-ink' : 'text-black/60']}
                  aria-current={i === step ? 'step' : undefined}
                >
                  <span class="w-7 font-serif text-xl leading-none font-normal">{pad(i + 1)}</span>
                  {s.label}
                </div>
              {/if}
            </li>
          {/each}
        </ol>
      {/if}
    </div>

    {#if status === 'sent'}
      <div class="flex flex-col justify-center" role="status">
        <p class="max-w-lg text-lg leading-relaxed text-ink">
          One more step: apply for your spot. If it’s a fit, you’ll pick a time and we’ll go through this together.
        </p>
        <div class="mt-6">{@render callPlan()}</div>
        <a href={applyUrl} class="{primary} mt-8 w-full sm:w-auto sm:self-start">Apply for your spot {@render arrow()}</a>
      </div>
    {:else}
      <form onsubmit={submitStep} class="space-y-10">
        {#key step}
          <div class="space-y-10" in:fly={{ y: 12, duration: ms(350), easing: cubicOut }}>
            {#if step === 0}
              <fieldset>
                <legend class="font-medium text-ink">
                  What’s getting in your way? <span class={hint}>Pick up to three.</span>
                </legend>
                <div class="mt-4 flex flex-wrap gap-2.5">
                  {#each painPoints as point (point.label)}
                    {@const checked = selected.includes(point.label)}
                    <label class="cursor-pointer">
                      <input
                        type="checkbox"
                        value={point.label}
                        bind:group={selected}
                        disabled={!checked && selected.length >= MAX_CONCERNS}
                        class="peer sr-only"
                      />
                      <span class={chip}>
                        {@render mark(checked)}
                        {point.label}
                      </span>
                    </label>
                  {/each}
                </div>
                {#if attempted && !complete[0]}
                  <p class={error} role="alert">Pick at least one so I know where to start.</p>
                {:else if selected.length === MAX_CONCERNS}
                  <p class="mt-3 text-sm text-black/60">That’s three. Unpick one to swap it.</p>
                {/if}
              </fieldset>
            {:else if step === 1}
              {#each chosen as point, i (point.label)}
                <div class={[i > 0 && 'border-t border-black/10 pt-10']}>
                  <p class="text-sm font-medium text-black/60">You said</p>
                  <h3 class="mt-1.5 font-serif text-[1.75rem] leading-none text-ink md:text-[2rem]">{point.label}</h3>
                  <div class="mt-4 flex gap-3.5">
                    <img src={coach} alt="" width="40" height="40" class="size-10 shrink-0 rounded-full object-cover object-top" />
                    <p class="max-w-xl text-lg leading-relaxed text-ink">{point.reply}</p>
                  </div>
                  <fieldset class="mt-6">
                    <legend class="font-medium text-ink">{point.question}</legend>
                    <div class="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {#each point.options as option (option)}
                        <label class="cursor-pointer">
                          <input type="radio" name="answer-{i}" value={option} bind:group={answers[point.label]} class="peer sr-only" />
                          {@render tile(option, answers[point.label] === option)}
                        </label>
                      {/each}
                    </div>
                    {#if attempted && !answers[point.label]}
                      <p class={error} role="alert">Pick whichever is closest.</p>
                    {/if}
                  </fieldset>
                </div>
              {/each}

              <div class="border-t border-black/10 pt-10">
                <fieldset>
                  <legend class="font-medium text-ink">
                    What have you already tried? <span class={hint}>Optional. Pick any.</span>
                  </legend>
                  <div class="mt-4 flex flex-wrap gap-2.5">
                    {#each triedBefore as option (option)}
                      <label class="cursor-pointer">
                        <input type="checkbox" value={option} bind:group={tried} class="peer sr-only" />
                        <span class={chip}>
                          {@render mark(tried.includes(option))}
                          {option}
                        </span>
                      </label>
                    {/each}
                  </div>
                </fieldset>
              </div>
            {:else if step === 2}
              <fieldset>
                <legend class="font-medium text-ink">Twelve weeks from now, what would make this worth it?</legend>
                <div class="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {#each goals as g (g.label)}
                    <label class="cursor-pointer">
                      <input type="radio" name="goal" value={g.label} bind:group={goal} class="peer sr-only" />
                      {@render tile(g.label, goal === g.label)}
                    </label>
                  {/each}
                </div>
                {#if attempted && !complete[2]}
                  <p class={error} role="alert">Pick the one that matters most.</p>
                {/if}
              </fieldset>

              <label class="block">
                <span class="font-medium text-ink">
                  What would getting there change for you? <span class={hint}>Optional, but it helps.</span>
                </span>
                <textarea
                  bind:value={why}
                  rows="4"
                  placeholder="e.g. I’d stop paying for a gym I barely use, and my shoulder would finally stop flaring up."
                  class="{input} mt-3 resize-none py-3 leading-relaxed"
                ></textarea>
              </label>
            {:else}
              {@render callPlan()}

              <fieldset>
                <legend class="font-medium text-ink">
                  Coaching is paid and 1:1. If the plan makes sense, how ready are you to start?
                </legend>
                <div class="mt-4 grid gap-2.5">
                  {#each readiness as option (option)}
                    <label class="cursor-pointer">
                      <input type="radio" name="readiness" value={option} bind:group={ready} class="peer sr-only" />
                      {@render tile(option, ready === option)}
                    </label>
                  {/each}
                </div>
                {#if attempted && !complete[3]}
                  <p class={error} role="alert">Pick one. There’s no wrong answer.</p>
                {/if}
              </fieldset>

              <div class="grid gap-5 sm:grid-cols-2">
                <label class="block">
                  <span class="font-medium text-ink">Name</span>
                  <input bind:value={name} type="text" autocomplete="name" required class="{input} mt-3 h-12" />
                </label>
                <label class="block">
                  <span class="font-medium text-ink">Email</span>
                  <input bind:value={email} type="email" autocomplete="email" required class="{input} mt-3 h-12" />
                </label>
              </div>
            {/if}
          </div>
        {/key}

        <div class="flex flex-col gap-3 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:gap-6">
          <button type="submit" disabled={status === 'sending'} class={primary}>
            {#if status === 'sending'}
              Sending…
            {:else}
              {steps[step].cta}
              {@render arrow()}
            {/if}
          </button>
          {#if step > 0}
            <button
              type="button"
              onclick={() => goTo(step - 1)}
              disabled={status === 'sending'}
              class="inline-flex h-13 cursor-pointer items-center justify-center px-3 text-[15px] font-semibold text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-60"
            >
              Back
            </button>
          {/if}
          {#if isLast}
            <p class="text-center text-sm text-black/60 sm:ml-auto sm:text-left">No spam. Your answers only go to me.</p>
          {/if}
        </div>

        {#if status === 'error'}
          <p class={error} role="alert">Something went wrong sending that. Please try again in a moment.</p>
        {/if}
      </form>
    {/if}
  </div>
</section>

{#snippet callPlan()}
  <div class="rounded-2xl bg-canvas p-6 md:p-8">
    <p class="text-sm font-medium text-ink-soft">On your call</p>
    <ol class="mt-5">
      {#each agenda as item, i (item)}
        <li class="flex items-baseline gap-4 border-t border-line py-3.5 first:border-t-0 first:pt-0 last:pb-0">
          <span class="w-7 shrink-0 font-serif text-xl leading-none text-ink-soft">{pad(i + 1)}</span>
          <span class="text-ink">{item}</span>
        </li>
      {/each}
    </ol>
    {#if why.trim()}
      <figure class="mt-6 border-t border-line pt-5">
        <figcaption class="text-sm font-medium text-ink-soft">Why it matters to you</figcaption>
        <blockquote class="mt-2 leading-relaxed text-ink">“{why.trim()}”</blockquote>
      </figure>
    {/if}
  </div>
{/snippet}

{#snippet tile(label: string, checked: boolean)}
  <span
    class={[
      'flex h-full items-center gap-3 rounded-xl border bg-canvas px-4 py-3.5 text-[15px] leading-snug transition-colors duration-200 select-none peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink',
      checked ? 'border-ink text-ink ring-1 ring-ink' : 'border-line text-ink-soft hover:border-ink/30',
    ]}
  >
    <span
      class={[
        'flex size-4.5 shrink-0 items-center justify-center rounded-full border transition-colors duration-200',
        checked ? 'border-ink bg-ink' : 'border-ink/30',
      ]}
    >
      {#if checked}<span class="size-1.5 rounded-full bg-canvas"></span>{/if}
    </span>
    {label}
  </span>
{/snippet}

<!-- Plus turns into a check at the same width, so chips don't reflow when picked -->
{#snippet mark(checked: boolean)}
  <svg class="-ml-1 size-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    {#if checked}
      <path d="m3 8.5 3.2 3L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    {:else}
      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
    {/if}
  </svg>
{/snippet}

{#snippet arrow()}
  <svg class="size-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
{/snippet}
