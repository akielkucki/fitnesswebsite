<script lang="ts">
  import { applyUrl, brand } from './content'
</script>

<header class="sticky top-0 z-50 border-b border-line/70 bg-canvas/80 backdrop-blur-md">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
    <a href="#top" class="font-serif text-[1.65rem] leading-none text-ink">{brand}</a>
    <nav class="flex items-center gap-7">
      <a href="#program" class="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink md:block">Program</a>
      <a href="#case-studies" class="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink md:block">Case studies</a>
      <a href="#faq" class="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink md:block">FAQ</a>
      <a
        href={applyUrl}
        class="rounded-full bg-ink px-4.5 py-2.25 text-sm font-medium text-canvas transition-colors hover:bg-ink/85"
      >
        Apply now
      </a>
    </nav>
  </div>
</header>
