<script lang="ts">
  import { onMount } from 'svelte';
  import { animate, stagger, inView } from 'motion';

  let titleContainer: HTMLElement;
  
  onMount(() => {
    // Initial state
    animate('.stagger-word', { opacity: 0, y: 100 }, { duration: 0 });
    animate('.stagger-subtitle', { opacity: 0, x: -100 }, { duration: 0 });

    inView(titleContainer, () => {
      animate('.stagger-word', 
        { opacity: 1, y: 0 },
        { 
          delay: stagger(0.2),
          duration: 1,
          easing: [.22, .03, .28, 1]
        }
      );

      animate('.stagger-subtitle',
        { opacity: 1, x: 0 },
        { 
          delay: 0.8,
          duration: 0.7,
          easing: 'ease-out'
        }
      );
    });
  });
</script>

<div bind:this={titleContainer} class="title-section">
  <h2 class="title">
    <span class="stagger-word">Crafting</span>
    <span class="stagger-word">Digital</span>
    <span class="stagger-word">Experiences</span>
  </h2>
  <div class="stagger-subtitle">Stagger Animation</div>
</div>

<style>
  .title-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
  }

  .title {
    font-size: 3.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
  }

  .stagger-word {
    display: inline-block;
  }

  .stagger-subtitle {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #666;
  }
</style>