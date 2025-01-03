<script lang="ts">
  import Title from './lib/components/Title.svelte';
</script>

<main>
  <Title />
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #fafafa;
    color: #333;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }

  main {
    width: 100%;
  }
</style>