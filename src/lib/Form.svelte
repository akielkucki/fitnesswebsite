<script lang="ts">
  import Button from './Button.svelte'
  import { applyUrl, discoveryEndpoint, painPoints } from './content'

  let selected = $state<string[]>([])
  let details = $state('')
  let name = $state('')
  let email = $state('')
  let attempted = $state(false)
  let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const missingPainPoint = $derived(attempted && selected.length === 0)
  const firstName = $derived(name.trim().split(/\s+/)[0])

  async function submitForm(e: Event) {
    e.preventDefault()
    attempted = true
    if (selected.length === 0) return

    status = 'sending'
    try {
      if (discoveryEndpoint) {
        const res = await fetch(discoveryEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, painPoints: selected, details }),
        })
        if (!res.ok) throw new Error(`Discovery form failed: ${res.status}`)
      }
      status = 'sent'
    } catch {
      status = 'error'
    }
  }

  const input =
    'w-full rounded-xl border border-line bg-canvas px-4 text-ink transition-[border-color,box-shadow] duration-200 placeholder:text-muted focus:border-ink focus:ring-4 focus:ring-brand/25 focus:outline-none'
</script>

<section id="discovery" class="px-3 md:px-5">
  <div
    class="theme-light mx-auto grid max-w-[90rem] gap-10 rounded-[2rem] bg-brand-mist px-6 py-16 md:px-12 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-20"
  >
    <div>
      <h2 class="heading-lg">What’s holding<br />you back?</h2>
      <p class="mt-6 max-w-sm text-lg leading-relaxed">
        Tell me what’s getting in the way. I read every answer myself and bring a plan for it to your call.
      </p>
      <p class="mt-6 text-sm text-muted">Takes under two minutes.</p>
    </div>

    {#if status === 'sent'}
      <div class="flex flex-col items-start justify-center" role="status">
        <span class="flex size-12 items-center justify-center rounded-full bg-brand">
          <svg class="size-5 text-black" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m3 8.5 3.2 3L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <h3 class="heading-lg mt-6">Got it, {firstName}.</h3>
        <p class="mt-4 max-w-md text-lg leading-relaxed">
          I’ll read this before we talk. Next step is a free call where we map out your first 12 weeks.
        </p>
        <Button href={applyUrl} class="mt-8 w-full sm:w-auto">Apply for your spot</Button>
      </div>
    {:else}
      <form onsubmit={submitForm} class="space-y-8">
        <fieldset>
          <legend class="font-medium text-ink">
            What’s getting in your way? <span class="font-normal text-muted">Pick all that apply.</span>
          </legend>
          <div class="mt-4 flex flex-wrap gap-2.5">
            {#each painPoints as point}
              <label class="cursor-pointer">
                <input type="checkbox" value={point} bind:group={selected} class="peer sr-only" />
                <span
                  class="inline-flex rounded-full border border-line bg-canvas px-4 py-2.5 text-[15px] text-ink-soft transition-colors duration-200 select-none hover:border-ink/30 peer-checked:border-brand peer-checked:bg-brand peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink"
                >
                  {point}
                </span>
              </label>
            {/each}
          </div>
          {#if missingPainPoint}
            <p class="mt-3 text-sm text-red-700" role="alert">Pick at least one so I know where to start.</p>
          {/if}
        </fieldset>

        <label class="block">
          <span class="font-medium text-ink">Anything else I should know? <span class="font-normal text-muted">Optional.</span></span>
          <textarea
            bind:value={details}
            rows="4"
            placeholder="e.g. I’ve tried a few programs, but my shoulder flares up every time I bench."
            class="{input} mt-3 resize-none py-3 leading-relaxed"
          ></textarea>
        </label>

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

        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <button
            type="submit"
            disabled={status === 'sending'}
            class="inline-flex h-13 cursor-pointer items-center justify-center rounded-full bg-ink px-8 text-[15px] font-semibold text-canvas transition-colors duration-200 hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-wait disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send my answers'}
          </button>
          <p class="text-sm text-muted">No spam. Your answers only go to me.</p>
        </div>

        {#if status === 'error'}
          <p class="text-sm text-red-700" role="alert">Something went wrong sending that. Please try again in a moment.</p>
        {/if}
      </form>
    {/if}
  </div>
</section>
