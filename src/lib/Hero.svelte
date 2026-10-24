<script lang="ts">
  import coach from '../assets/coach.webp'
  import Button from './Button.svelte'
  import VideoPlayer from './VideoPlayer.svelte'

  import {applyUrl, heroQuote, videoUrl} from './content'
  import {onMount} from "svelte";

  const heroText = "/b1:1 calisthenics coaching that builds real /bstrength and /bmuscle with nothing but your /bbodyweight. /bNo /bgym /bmembership, /bno /bbarbells, /bno /bwasted /bhours."
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };
  let intersectingQuote = $state(false)

  onMount(() => {
    const element = document.querySelector<HTMLElement>('[data-quote]');
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      intersectingQuote = entry.isIntersecting;
      console.log(intersectingQuote);
      intersectingQuote &&
        observer.unobserve(entry.target);
    }, options);

    observer.observe(element);
    if (intersectingQuote) {
      element.querySelector('blockquote')?.classList.toggle('animate-wipe-right');
    }
    return () => observer?.disconnect() ?? void(0);
  });

</script>

<section id="top" class="px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-32">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="text-balance">
      <span class="heading-2xl block animate-wipe-left py-2" style="--i: 0">Get seriously strong.</span>
      <span class="heading-xl block text-brand animate-wipe-right py-2" style="--i: 1">Never touch a weight.</span>
    </h1>
    <!-- Fades in once the headline has finished wiping in -->
    <p
      class="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-balance text-ink-soft animate-fade-up md:max-w-3xl md:text-xl md:leading-relaxed"
      style="--delay: 0.9s"
    >
      {#each heroText.split(' ') as word}{#if word.startsWith('/b')}<b class="font-semibold text-ink">{word.slice(2)}</b>{:else}{word}{/if}{' '}{/each}
    </p>
  </div>

  <div class="mx-auto mt-12 max-w-5xl md:mt-16">
    <VideoPlayer src={videoUrl} poster={coach} title="Why you don’t need a gym to get strong" />
  </div>

  <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
    <Button href={applyUrl} class="w-full sm:w-auto">Apply for your spot</Button>
    <Button href="#case-studies" variant="secondary" class="w-full sm:w-auto">See case studies</Button>
  </div>

  <figure class="mx-auto mt-16 max-w-2xl text-center " data-quote>
    <blockquote class="font-serif text-2xl leading-snug text-balance text-ink md:text-[1.85rem] " class:animate-wipe-right={intersectingQuote} class:opacity-0={!intersectingQuote} >
      “{heroQuote.text}”
    </blockquote>
    <figcaption class="mt-5 text-sm text-muted " class:animate-wipe-left={intersectingQuote} class:opacity-0={!intersectingQuote}>
      <span class="font-medium text-ink">{heroQuote.name}</span> · {heroQuote.detail}
    </figcaption>
  </figure>
</section>
