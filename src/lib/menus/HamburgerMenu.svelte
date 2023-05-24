<script lang="ts">
import { handleClickOutsideElement } from "$modules/SvelteActions";
import { createEventDispatcher } from "svelte";

export let color: string = "black";
export let thickness: number = 4;
export let width: number = 24;
export let height: number = 24;
export let menuItems: string[] = ['item1', 'item2', 'item3'];

$: cssVarStyles = `
    --ham-color:${color};
    --ham-thickness:${thickness}px;
    --ham-height:${height}px;
    --ham-width:${width}px;
`;

let showMenu = false;

const menuClickDispatch = createEventDispatcher();
function handleClickOut(event: Event) {
    showMenu = false;
}
function handleMenuClick(index: number) {
    menuClickDispatch('menuClick', index)
}
</script>

<div id="hamburger" 
    class="relative flex flex-col justify-between" 
    style="{cssVarStyles}" 
    use:handleClickOutsideElement
    on:click={() => showMenu = !showMenu}
    on:keypress={() => showMenu = !showMenu}
    on:outclick="{handleClickOut}">
    <div id="one" class="menu-bar" class:open={showMenu} />
    <div id="two" class="menu-bar" class:open={showMenu} />
    <div id="three" class="menu-bar" class:open={showMenu} />
    <!-- pop up menu -->
    {#if showMenu}
    <menu id="menu" 
         class="z-50 absolute top-full right-2 w-36 mt-2 overflow-hidden rounded-sm border-2 border-solid border-primary-dark drop-shadow-playful-secondary-short bg-white divide-y divide-solid divide-primary-dark">
        {#each menuItems as menuItem, index}
        <h5 
            class="w-full py-2 text-center text-primary-dark hover:bg-secondary-main"
            on:click={() => handleMenuClick(index)}
            on:keypress={() => handleMenuClick(index)}
        >
            { menuItem }
        </h5>
        {/each}
    </menu>
    {/if}
</div>

<style>
    #hamburger {
        width: var(--ham-width);
        height: var(--ham-height);
    }
    .menu-bar {
        height: var(--ham-thickness);
        width: 100%;
        background-color: var(--ham-color);
        border-radius: 2px;
        transition: all 250ms;
    }
    #one {
        transform-origin: 0% 50%;;
    }
    #three {
        transform-origin: 0% 50%;
    }
    #one.open {
        transform: rotate(45deg);
    }
    #two.open {
        opacity: 0%;
    }
    #three.open {
        transform: rotate(-45deg);
    }
</style>