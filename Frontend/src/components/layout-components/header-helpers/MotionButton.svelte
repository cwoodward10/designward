<script lang="ts">
  import { onMount } from "svelte";

    const NO_MOTION_CLASS = 'reduce-motion';

    let reduceMotion = false;
    onMount(() => {
        reduceMotion = checkMotion();
    })

    const handleClick = (e: Event) => {
        reduceMotion = !reduceMotion;
        
        const htmlEl = document.querySelector('html');
        htmlEl?.classList.toggle(NO_MOTION_CLASS, reduceMotion);
        
        localStorage.setItem(NO_MOTION_CLASS, `${reduceMotion}`);
    }

    function checkMotion() {
        const htmlEl = document.querySelector(`html`);
        if (!htmlEl) {
            return true;
        }
        return htmlEl.classList.contains(NO_MOTION_CLASS);
    }
</script>

<button 
    class:none={reduceMotion}
    on:click={handleClick}
    aria-label="Toggle reduced motion"
>
    Move
</button>

<style>
    @media (prefers-reduced-motion) {
        button {
            display: none;
            content-visibility: hidden;
        }
    }
    button {
        height: 40px;
        width: 40px;
        border-radius: 100%;

        border: var(--color-text) 2px solid;

        color: var(--color-text);

        font-family: var(--font-heading);
        font-size: 10px;
        line-height: 100%;
        font-weight: 500;
        white-space: nowrap;
        text-transform: uppercase;

        position: relative;

        cursor: pointer;

        transition-property: color;
        transition-duration: 200ms;
        transition-timing-function: ease-out;

        &::after {
            content: "";

            width: 100%;
            position: absolute;
            top: 50%;
            left: 0;
            translate: 0 -1px;

            height: 2px;
            width: 100%;

            background-color: var(--color-text);
            
            opacity: 0;
            rotate: 45deg;

            transition-property: opacity, background-color;
            transition-duration: 200ms;
            transition-timing-function: ease-out;
        }

        &:hover {
            color: var(--color-secondary);
        }

        &.none {
            color: var(--color-secondary);
            
            &::after {
                opacity: 1;
            }
        }
    }
</style>