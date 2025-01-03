<script lang="ts">
  import { onMount } from 'svelte';
  import { animate, stagger, inView } from 'motion';

  let titleContainer: HTMLElement;
  
  onMount(() => {
    // Initial state - hide all elements
    animate('.word', { opacity: 0, y: 100 }, { duration: 0 });
    animate('.creative-dev', { opacity: 0, x: -100 }, { duration: 0 });
    animate('.location', { opacity: 0, scale: 0.5 }, { duration: 0 });

    // Trigger animations when in view
    inView(titleContainer, () => {
      // Animate main title words with stagger
      animate('.word', 
        { opacity: 1, y: 0 },
        { 
          delay: stagger(0.2),
          duration: 1,
          easing: [.22, .03, .28, 1]
        }
      );

      // Animate subtitle with slide
      animate('.creative-dev',
        { opacity: 1, x: 0 },
        { 
          delay: 0.8,
          duration: 0.7,
          easing: 'ease-out'
        }
      );

      // Animate location with scale
      animate('.location',
        { 
          opacity: 1, 
          scale: 1,
        },
        { 
          delay: 1.2,
          duration: 0.5,
          easing: [.12, .23, .28, 1.1] // Slight bounce
        }
      );
    });
  });
</script>

<div bind:this={titleContainer} class="title-container">
  <h1 class="main-title">
    <span class="word">Digital</span>
    <span class="word">Dreams</span>
    <span class="word">Builder</span>
  </h1>
  
  <div class="creative-dev">
    Creative Developer & Designer
  </div>
  
  <div class="location">
    Based in Paris, France
  </div>
</div>

<style>
  .title-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .main-title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .word {
    display: inline-block;
    will-change: transform;
  }

  .creative-dev {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #666;
    will-change: transform;
  }

  .location {
    font-size: 1rem;
    color: #888;
    will-change: transform;
  }

  @media (max-width: 768px) {
    .main-title {
      font-size: 2.5rem;
    }

    .creative-dev {
      font-size: 1.2rem;
    }
  }
</style>