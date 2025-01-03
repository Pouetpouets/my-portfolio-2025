<script lang="ts">
  import { onMount } from 'svelte';
  import { animate, stagger, inView } from 'motion';

  let titleContainer: HTMLElement;
  let title = 'Innovation';
  let letters: string[] = title.split('');

  onMount(() => {
    // Initial state
    animate('.letter', { opacity: 0, y: 50 }, { duration: 0 });
    animate('.letter-subtitle', { opacity: 0 }, { duration: 0 });

    inView(titleContainer, () => {
      // animate('.letter', 
      //   { opacity: 1, y: 0 },
      //   { 
      //     delay: stagger(0.05),
      //     duration: 0.5,
      //     easing: [0.22, 1, 0.36, 1]
      //   }
      // );

      animate('.letter-subtitle',
        { opacity: 1 },
        { delay: 0.8 }
      );
    });
  });
</script>

<div bind:this={titleContainer} class="title-section">
  <h2 class="title">
    {#each letters as letter}
      <span class="letter">{letter}</span>
    {/each}
  </h2>
  <div class="letter-subtitle">Letter by Letter Animation</div>
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