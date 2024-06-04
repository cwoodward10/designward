<script lang="ts">
  import { onMount } from "svelte";

    export let href: string;
    export let title: string;

    const isExternal = href.includes('https');

    let element: HTMLAnchorElement;
    onMount(() => {
        if (!anchorObserver) {
            anchorObserver = new IntersectionObserver((entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
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

<a 
    bind:this={element} 
    class="initial"
    class:external={isExternal} 
    href={href} 
    title={title}
    target={isExternal ? '_blank' : '_self'}
>
    <slot/>
</a>

<style lang="scss">
    a.initial {
        --link-animation-duration: 300ms;
        --link-underline-animation-duration: 300ms;

        color: var(--color-text);
        translate: 0;
        font-weight: var(--font-weight);
    
        &::before, &::after {
            content: "";
            position: absolute;
            top: calc(100% + var(--link-underline-offset, 0px));
            left: 0;
            
            height: 2px;
            width: 0;
            background-color: color-mix(in srgb, var(--color-link-underline) 50%, var(--color-background) 70%);;
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

    @keyframes animate-link {
        from {
            translate: 0;
            color: var(--color-text);
        }
        to {
            translate: var(--link-base-translation, 0 0em);
            color: var(--color-link);
            font-weight: 500;
        }
    }

    @keyframes animate-link-underline {
        from {
            width: 0;
        }
        to {
            width: calc(50% + 1px);
        }
    }

    :global(html.reduce-motion) {
        a {
            --link-base-translation: 0 0;

            &.initial {
                font-weight: 500;
            }

            &::before {
                content: none;
            }
            &::after {
                animation: none;
                opacity: 1;
                width: 100% !important;
            }
        }
    }
    @media (prefers-reduced-motion: reduce) {
        a {
            --link-base-translation: 0 0;

            &.initial {
                font-weight: 500;
            }

            &::before {
                content: none;
            }
            &::after {
                animation: none;
                opacity: 1;
                width: 100% !important;
            }
        }
    }
</style>