<script lang="ts">
  import { onMount } from 'svelte';
  import { scroll, animate, stagger } from 'motion';

  let titleContainer: HTMLElement;
  let title = 'Creative Wave';
  let letters: string[] = title.split('');

  onMount(() => {
    // Initial state
    animate('.wave-letter', { y: 50, opacity: 0 }, { duration: 0 });
    animate('.wave-subtitle', { opacity: 0 }, { duration: 0 });

    scroll(
      animate('.wave-letter', 
        { y: [50, 0], opacity: [0, 1] },
        { 
          delay: stagger(0.1, { from: 'center' }),
          easing: [0.22, 1, 0.36, 1]
        }
      ),
      {
        target: titleContainer,
        offset: ['start end', 'center center']
      }
    );

    scroll(
      animate('.wave-subtitle',
        { opacity: [0, 1] },
        { delay: 0.5 }
      ),
      {
        target: titleContainer,
        offset: ['start end', 'center center']
      }
    );
  });
</script>

<div bind:this={titleContainer} class="title-section">
  <h2 class="title">
    {#each letters as letter}
      <span class="wave-letter">{letter}</span>
    {/each}
  </h2>
  <div class="wave-subtitle">Wave on Scroll</div>
</div>

<style>
  .title-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #dee2e6;
  }

  .title {
    font-size: 4rem;
    margin: 0;
  }

  .wave-letter {
    display: inline-block;
    margin: 0 -0.05em;
    will-change: transform, opacity;
  }

  .wave-subtitle {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #666;
  }
</style>