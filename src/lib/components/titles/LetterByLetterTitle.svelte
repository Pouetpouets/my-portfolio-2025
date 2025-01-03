<script lang="ts">
  import { onMount } from 'svelte';
  import { scroll, animate, stagger } from 'motion';

  let titleContainer: HTMLElement;
  let title = 'Innovation';
  let letters: string[] = title.split('');

  onMount(() => {
    // Initial state
    animate('.letter', { opacity: 0, y: 50 }, { duration: 0 });
    animate('.letter-subtitle', { opacity: 0 }, { duration: 0 });

    scroll(
      animate('.letter', 
        { opacity: [0, 1], y: [50, 0] },
        { 
          delay: stagger(0.05),
          easing: [0.22, 1, 0.36, 1]
        }
      ),
      {
        target: titleContainer,
        offset: ['start end', 'center center']
      }
    );

    scroll(
      animate('.letter-subtitle',
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
      <span class="letter">{letter}</span>
    {/each}
  </h2>
  <div class="letter-subtitle">Scroll Animation</div>
</div>

<style>
  .title-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f1f3f5;
  }

  .title {
    font-size: 4rem;
    margin: 0;
  }

  .letter {
    display: inline-block;
    margin: 0 -0.05em;
  }

  .letter-subtitle {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #666;
  }
</style>