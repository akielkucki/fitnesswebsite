<script lang="ts">
  import { caseStudies } from './content'
</script>

<section id="case-studies" class="px-5 py-20 md:px-8 md:py-32">
  <div class="mx-auto max-w-6xl">
    <div class="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
      <h2 class="heading-lg">Real clients.<br />Zero barbells.</h2>
      <p class="max-w-md text-lg leading-relaxed md:justify-self-end">
        Desk jobs, busy weeks and no gym. Here’s what a few months of coached bodyweight training did for them.
      </p>
    </div>

    <div class="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
      {#each caseStudies as study}
        <article class="flex flex-col rounded-3xl border border-line p-8 md:p-10">
          <p class="font-serif text-[3.5rem] leading-none text-ink">{study.metric}</p>
          <p class="mt-3 font-medium text-brand-light">{study.result}</p>
          <p class="mt-6 mb-8 leading-relaxed">{study.story}</p>
          <p class="mt-auto border-t border-line pt-6 text-sm text-muted">
            <span class="font-medium text-ink">{study.name}</span> · {study.detail}
          </p>
        </article>
      {/each}
    </div>
  </div>
</section>
