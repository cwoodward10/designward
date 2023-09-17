<script lang="ts">
    import { scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { createEventDispatcher } from 'svelte';

    export let tabName: string;
    export let tabIndex: number;
    export let selected: boolean;
    export let style: 'pill' | 'tabs' = 'tabs';

    let hovered: boolean = false;

    const clickDispatch = createEventDispatcher(); 
</script>

<div
    class="relative inline-flex flex-grow-0 flex-shrink-0 overflow-hidden"
    on:mouseenter={() => hovered = true}
    on:mouseleave={() => hovered = false}
    >
    <button 
        class="h-full w-full inline-flex items-center cursor-pointer"
        class:px-3={style === 'tabs'}
        on:click={() => clickDispatch('clicked', tabIndex)}
    >
        <h6 
            class="m-auto text-center mt-auto mb-2 pb-0 z-50 md:text-lg"
            class:text-text-white={style === 'pill' && selected}
            class:mb-auto={style === 'pill'}
        >
            { tabName }
        </h6>
        {#if hovered}
        <span 
            class="absolute top-0 bottom-0 left-0 right-0 bg-secondary opacity-10 z-10"
            transition:scale={{duration: 150, delay: 0, opacity: 0.15, start: 0.5, easing: quintOut}}
        />
        {/if}
    </button>
</div>