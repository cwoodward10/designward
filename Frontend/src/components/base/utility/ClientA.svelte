<script lang="ts">
  import { onMount } from "svelte";

    export let href: string;

    let element: HTMLAnchorElement;
    onMount(() => {
        element.addEventListener('animationend', (e) => {
            element.classList.remove('initial');
        })
    })
</script>

<a bind:this={element} class="initial" href={href}>
    <slot/>
</a>

<style>
    a.initial {
        --link-animation-duration: 300ms;
        --link-underline-animation-duration: 300ms;

        color: var(--color-text);
        translate: 0;
        font-weight: 400;

        animation-name: animate-link;
        animation-duration: var(--link-animation-duration);
        animation-timing-function: ease-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-delay: calc(var(--initial-animation-delay, 0) + 300ms);
    
        &::before, &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 0;
            
            height: 2px;
            width: 0;
            background-color: var(--color-primary);

            animation-name: animate-link-underline;
            animation-duration: var(--link-underline-animation-duration);
            animation-timing-function: ease-out;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-delay: calc(var(--initial-animation-delay, 0) + 250ms);
        }
        &::after {
            left: unset;
            right: 0;
        }
    }
</style>