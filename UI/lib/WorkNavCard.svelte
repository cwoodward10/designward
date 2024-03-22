<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fade, fly } from 'svelte/transition';
    import { GlobeIcon } from "@rgossiaux/svelte-heroicons/outline";

    export let color: string;
    $: cssVarStyles = `
        --card-color:${color};
    `;

    let clickDispatch = createEventDispatcher();
    function handleClick(event: MouseEvent) {
        clickDispatch('click')
    }
</script>

<article id="main"
        class="flex max-w-full w-60 h-60 md:w-52 md:h-52 rounded-md hover:drop-shadow-playful-primary-deep cursor-pointer transition-all"
        style="{cssVarStyles}"
        in:fly="{{ y: 200, duration: 200 }}"
        on:click="{handleClick}"> 
    <slot>
        <div class="flex flex-col m-auto">
            <h3 class="text-texton-primary text-center">H is for</h3>
            <GlobeIcon class="mx-auto w-3/5 text-white"/>
            <h3 class="text-texton-primary text-center">Hello World</h3>
        </div>
    </slot>
</article>

<style>
    #main {
        background-color: var(--card-color);
    }
</style>