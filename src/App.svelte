<script lang="ts">
  import { Router, url } from '@roxi/routify'
  import routes from '../.routify/routes.default.js'
</script>

<Router config={{useHash: true}} {routes} />