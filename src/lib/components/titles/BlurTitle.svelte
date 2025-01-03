<script lang="ts">
  import { onMount } from 'svelte';
  import { animate, inView } from 'motion';

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

    inView(titleContainer, () => {
    //   animate('.blur-title',
    //     { 
    //       opacity: 1,
    //       filter: 'blur(0px)'
    //     },
    //     { 
    //       duration: 1.2,
    //       easing: [0.16, 1, 0.3, 1]
    //     }
    //   );

      animate('.blur-subtitle',
        { 
          opacity: 1,
          filter: 'blur(0px)'
        },
        { 
          delay: 0.4,
          duration: 0.8
        }
      );
    });
  });
</script>

<div bind:this={titleContainer} class="title-section">
  <h2 class="blur-title">Welcome to the Future</h2>
  <div class="blur-subtitle">Blur Reveal Animation</div>
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
  }

  .blur-subtitle {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #666;
  }
</style>