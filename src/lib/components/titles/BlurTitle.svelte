<script lang="ts">
  import { onMount } from 'svelte';
  import { scroll, animate } from 'motion';

  let titleContainer: HTMLElement;

  onMount(() => {
    // Initial state
    animate('.blur-title', { 
      opacity: 0,
      filter: 'blur(12px)'
    }, { duration: 0 });
    
    animate('.blur-subtitle', { 
      opacity: 0,
      filter: 'blur(8px)'
    }, { duration: 0 });

    scroll(
      animate('.blur-title',
        { 
          opacity: [0, 1],
          filter: ['blur(12px)', 'blur(0px)']
        },
        { 
          easing: [0.16, 1, 0.3, 1]
        }
      ),
      {
        target: titleContainer,
        offset: ['start end', 'center center']
      }
    );

    scroll(
      animate('.blur-subtitle',
        { 
          opacity: [0, 1],
          filter: ['blur(8px)', 'blur(0px)']
        },
        { delay: 0.2 }
      ),
      {
        target: titleContainer,
        offset: ['start end', 'center center']
      }
    );
  });
</script>

<div bind:this={titleContainer} class="title-section">
  <h2 class="blur-title">Welcome to the Future</h2>
  <div class="blur-subtitle">Scroll to Focus</div>
</div>

<style>
  .title-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e9ecef;
  }

  .blur-title {
    font-size: 4rem;
    margin: 0;
    text-align: center;
    will-change: filter;
  }

  .blur-subtitle {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #666;
    will-change: filter;
  }
</style>