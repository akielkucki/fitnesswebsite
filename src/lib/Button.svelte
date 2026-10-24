<script lang="ts">
  import type { Snippet } from 'svelte'

  let {
    href,
    variant = 'primary',
    class: className = '',
    children,
  }: {
    href: string
    variant?: 'primary' | 'secondary'
    class?: string
    children: Snippet
  } = $props()
</script>

<a
  {href}
  class={[
    'group inline-flex h-13 items-center justify-center gap-2 px-7 text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
    variant === 'primary'
      ? 'bg-brand text-black hover:bg-brand-light'
      : 'border border-line text-ink hover:border-ink/25 hover:bg-surface',
    className,
  ]}
>
  {@render children()}
  {#if variant === 'primary'}
    <svg
      class="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 8h10m0 0L8.5 3.5M13 8l-4.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  {/if}
</a>
