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
    class="relative flex px-3 py-2 cursor-pointer"
    on:mouseenter="{() => hovered = true}"
    on:mouseleave="{() => hovered = false}"
    on:click="{() => clickDispatch('clicked', tabIndex)}"
    >
    <h4 class="text-center m-auto pb-0 z-50">{ tabName }</h4>
    {#if hovered}
    <span 
        class="absolute top-0 bottom-0 left-0 right-0 bg-primary-light opacity-10 z-10"
        transition:scale="{{duration: 150, delay: 0, opacity: 0.15, start: 0.5, easing: quintOut}}"
    />
    {/if}
</div>