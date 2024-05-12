<script lang="ts">
import { handleClickOutsideElement } from "src/modules/SvelteActions";

export let color: string = "black";
export let thickness: number = 4;
export let width: number = 30;
export let height: number = 30;

const transitionDuration = 200;
$: transitionDelay = showMenu ? `0ms, ${transitionDuration - 50}ms` : `${transitionDuration - 50}ms, 0ms`;


$: cssVarStyles = `
    --ham-color:${color};
    --ham-thickness:${thickness}px;
    --ham-height:${height ? height + 'px' : 'var(--ham-default-height)'};
    --ham-width:${width ? width + 'px' : 'var(--ham-default-width)'};
    --ham-transition-delay:${transitionDelay};
    --ham-transition-duration:${transitionDuration}ms;
`;

let showMenu = false;

function handleClickOut(event: Event) {
    showMenu = false;
}
</script>

<button 
    id="hamburger" 
    class:open={showMenu}
    style="{cssVarStyles}" 
    use:handleClickOutsideElement
    on:click={() => showMenu = !showMenu}
    on:keypress={() => showMenu = !showMenu}
    on:outclick={handleClickOut}
>
    <div id="one" class="menu-bar" />
    <div id="two" class="menu-bar" />
    <div id="three" class="menu-bar" />
    <!-- pop up menu -->
    {#if showMenu}
    <menu id="menu">
        <slot></slot>
    </menu>
    {/if}
</button>

<style>
    #hamburger {
        --ham-default-height: 30px;
        --ham-default-width: 30px;

        position: relative;
        
        width: var(--ham-width);
        height: var(--ham-height);
        border-color: var(--ham-color);
        border-width: 2px;
        border-radius: 999px;
    }

    .menu-bar {
        height: var(--ham-thickness);
        width: 100%;
        background-color: var(--ham-color);
        border-radius: 2px;

        position: absolute;
        top: 50%;
        left: 50%;
    }
    #one {
        width: 20px;
        translate: -50% calc(-50% - 6px);
        rotate: 0deg;

        transition: translate, rotate;
        transition-duration: var(--ham-transition-duration);
        transition-delay: var(--ham-transition-delay);
    }
    #two {
        scale: 1 1;
        width: 20px;
        translate: -50% -50%;
        transition: scale;
        transition-duration: var(--ham-transition-duration);
        transition-delay: var(--ham-transition-delay);
    }
    #three {
        width: 20px;
        translate: -50% calc(-50% + 6px);
        rotate: 0deg;
        
        transition: translate, rotate;
        transition-duration: var(--ham-transition-duration);
        transition-delay: var(--ham-transition-delay);
    }
    @media screen and (min-width: 380px) {
        #hamburger {
            --ham-default-height: 40px;
            --ham-default-width: 40px;
        }
        .menu-bar {
            height: var(--ham-thickness);
        }
        #one {
            width: 24px;
            translate: -50% calc(-50% - 8px);
        }
        #two {
            width: 24px;
            translate: -50% -50%;
        }
        #three {
            width: 24px;
            translate: -50% calc(-50% + 8px);
        }
    }

    .open #one {
        rotate: 45deg;
        translate: -50% -50%;
    }
    .open #two {
        scale: 0 1;
    }
    .open #three {
        rotate: -45deg;
        translate: -50% -50%;
    }


    menu {
        z-index: 50;
        
        position: absolute;
        top: 100%;
        right: 0.5rem;
        width: 8rem;

        margin-top: 0.5rem;

        overflow: hidden;

        border-radius: 0.5rem;
        border: var(--color-primary) 2px solid;

        height: fit-content;
        display: flex;
        flex-direction: column;

        background-color: var(--color-offwhite);
    }
</style>