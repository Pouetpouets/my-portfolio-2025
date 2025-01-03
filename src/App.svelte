<script lang="ts">
  import TitleShowcase from './lib/components/TitleShowcase.svelte';
</script>

<main>
  <TitleShowcase />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #fff;
    color: #333;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    overflow-x: hidden;
  }

  main {
    width: 100%;
  }
</style>