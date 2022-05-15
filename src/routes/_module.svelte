<script lang="ts">
import TheFooter from "$lib/TheFooter.svelte";
import TheHeader from "$lib/TheHeader.svelte";


export let context: FragmentContext;
</script>

<TheHeader router={context.route.router}/>
<slot></slot>
<TheFooter />