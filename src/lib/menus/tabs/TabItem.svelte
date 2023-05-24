<script lang="ts">
import {
    scale
} from 'svelte/transition';
import {
    quintOut
} from 'svelte/easing';
import { createEventDispatcher } from 'svelte';

export let tabName: string;
export let tabIndex: number;
let hovered: boolean = false;

const clickDispatch = createEventDispatcher(); 
</script>

<div
    class="relative inline-flex"
    on:mouseenter="{() => hovered = true}"
    on:mouseleave="{() => hovered = false}"
    >
    <button 
        class="h-full w-full inline-flex items-center px-3 cursor-pointer"
        on:click="{() => clickDispatch('clicked', tabIndex)}"
    >
        <h4 class="text-center mt-auto m-auto mb-2 pb-0 z-50">{ tabName }</h4>
        {#if hovered}
        <span 
            class="absolute top-0 bottom-0 left-0 right-0 bg-secondary opacity-10 z-10"
            transition:scale="{{duration: 150, delay: 0, opacity: 0.15, start: 0.5, easing: quintOut}}"
        />
        {/if}
    </button>
</div>