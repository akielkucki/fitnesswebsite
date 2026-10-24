<script lang="ts">
  let { src, poster, title }: { src: string; poster: string; title: string } = $props()

  let video: HTMLVideoElement
  let playing = $state(false)

  function play() {
    playing = true
    video.play()
  }
</script>

<div class="relative aspect-video overflow-hidden rounded-xl bg-surface ring-1 ring-line ">
  <video bind:this={video} {src} controls={playing} playsinline preload="none" class="size-full object-cover">
    <!-- Add the real VSL's captions file here -->
    <track kind="captions" />
  </video>

  {#if !playing}
    <button type="button" onclick={play} class="group absolute inset-0 cursor-pointer" aria-label="Play video: {title}">
      <img src={poster} alt="" class="absolute inset-0 size-full object-cover object-[50%_22%]" />
      <span class="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/25"></span>
      <span
        class="absolute top-1/2 left-1/2 flex size-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 ease-out group-hover:scale-105 md:size-22"
      >
        <svg class="ml-1 size-6 md:size-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 4.8v14.4a1 1 0 0 0 1.53.85l11.2-7.2a1 1 0 0 0 0-1.7L8.53 3.95A1 1 0 0 0 7 4.8Z" />
        </svg>
      </span>
      <span class="absolute bottom-5 left-5 text-left text-sm font-medium text-white md:bottom-7 md:left-8 md:text-base">
        {title}
      </span>
    </button>
  {/if}
</div>
