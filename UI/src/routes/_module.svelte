<script lang="ts">
import TheFooter from "$lib/layout/TheFooter.svelte";
import TheHeader from "$lib/layout/TheHeader.svelte";


export let context: FragmentContext;

</script>

<main class="w-full min-h-screen flex flex-col bg-offwhite overflow-x-hidden overflow-y-auto">
    <TheHeader router={context.route.router} />
    <div id="main-container" class="w-full h-full px-6 flex-shrink-0 flex-grow">
        <slot></slot> 
    </div>
    <TheFooter />
</main>