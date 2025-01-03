<script lang="ts">
  import StaggerTitle from './titles/StaggerTitle.svelte';
  import LetterByLetterTitle from './titles/LetterByLetterTitle.svelte';
  import BlurTitle from './titles/BlurTitle.svelte';
  import WaveTitle from './titles/WaveTitle.svelte';
</script>

<div class="showcase">
  <StaggerTitle />
  <LetterByLetterTitle />
  <BlurTitle />
  <WaveTitle />
</div>

<style>
  .showcase {
    width: 100%;
  }
</style>