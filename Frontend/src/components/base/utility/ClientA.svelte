<script lang="ts">
  import { onMount } from "svelte";

    export let href: string;
    export let title: string;

    let element: HTMLAnchorElement;
    onMount(() => {
        if (!anchorObserver) {
            anchorObserver = new IntersectionObserver((entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        console.log(e)
                        e.target.classList.add('animate');

                        anchorObserver.unobserve(e.target);
                    }
                })
            })
        }
        
        element.addEventListener('animationend', (e) => {
            element.classList.remove('initial', 'animate');
        }, {once: true,})

        anchorObserver.observe(element);
    })
</script>

<script lang="ts" context="module">
    let anchorObserver: IntersectionObserver;
</script>

<a bind:this={element} class="initial" href={href} title={title}>
    <slot/>
</a>

<style>
    a.initial {
        --link-animation-duration: 300ms;
        --link-underline-animation-duration: 300ms;

        color: var(--color-text);
        translate: 0;
        font-weight: 400;
    
        &::before, &::after {
            content: "";
            position: absolute;
            top: calc(100% + var(--link-underline-offset, 0px));
            left: 0;
            
            height: 2px;
            width: 0;
            background-color: var(--color-primary);
        }
        &::after {
            left: unset;
            right: 0;
        }
    }
    a.initial:global(.animate) {
        animation-name: animate-link;
        animation-duration: var(--link-animation-duration);
        animation-timing-function: ease-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-delay: calc(var(--initial-animation-delay, 0) + 300ms);

        &::before, &::after {
            animation-name: animate-link-underline;
            animation-duration: var(--link-underline-animation-duration);
            animation-timing-function: ease-out;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
            animation-delay: calc(var(--initial-animation-delay, 0) + 250ms);
        }
    }
</style>