<script lang="ts">
  import { Router } from '@roxi/routify'
  import { onMount } from 'svelte';
  import routes from '../.routify/routes.default.js'

  onMount(() => {
    console.log(routes);
  })
</script>

<Router {routes} />