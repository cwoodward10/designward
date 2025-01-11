<script lang="ts">
    import { onMount } from "svelte";
    
    export let color: string = 'var(--color-primary, black)';
    
    const width: number | null = null;
    const height: number | null = null;
    const thickness: number = 2;
    
    let showMenu = false;
    
    const transitionDuration = 300;
    $: transitionDelay = showMenu ? `0ms, ${transitionDuration - 50}ms` : `${transitionDuration - 50}ms, 0ms`;
    
    $: cssVarStyles = `
        --ham-color:${color};
        --ham-thickness:${thickness}px;
        --ham-height:${height ? height + 'px' : 'var(--ham-default-height)'};
        --ham-width:${width ? width + 'px' : 'var(--ham-default-width)'};
        --ham-transition-delay:${transitionDelay};
        --ham-transition-duration:${transitionDuration}ms;
    `;
    
    function handleClickOut(event: Event) {
        showMenu = false;
    }
    
    onMount(() => {
        const menuListItems = document.querySelectorAll('#menu-container li');
    
        if (menuListItems.length > 0) {
            menuListItems.forEach((li: any, i) => {
                li.style.cssText = `--li-animation-order: ${i}`;
                li.classList.add('ham-item');
            })
        }
    })
    </script>
    
    <button 
        id="hamburger" 
        aria-label="menu"
        style="{cssVarStyles}"
        class:open={showMenu}
        on:click={() => showMenu = !showMenu}
    >
        <div id="one" class="menu-bar" ></div>
        <div id="two" class="menu-bar" ></div>
        <div id="three" class="menu-bar" ></div>
    </button>
    
    <!-- pop up menu -->
    <div 
        id="menu-container"
        class:show-menu={showMenu}
        style="{cssVarStyles}" 
    >
        <menu>
            <ol>
                <slot>
                    <li>
                        <p>Item 1</p>
                    </li>
                    <li>
                        <p>Item 2</p>
                    </li>
                    <li>
                        <p>Item 3</p>
                    </li>
                </slot>
            </ol>
        </menu>
    </div>
    
    <style>
        :global(html:has(#menu-container.show-menu) body) {
            overflow: hidden;
        }

        :global(html:has(#menu-container.show-menu) main) {
            pointer-events: none;
            overflow: hidden;
        }

        #hamburger {
            --ham-default-height: 30px;
            --ham-default-width: 30px;
    
            width: var(--ham-width);
            height: var(--ham-height);
            border-color: var(--ham-color);
            border-width: 2px;
            border-radius: 999px;

            z-index: 50;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;

            padding: 0.5em;

            height: var(--ham-default-height, 32px);
            width: var(--ham-default-width, 32px);

            border: transparent 2px solid;
            transition: border-color 300ms ease-out;
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
            width: 60%;
            translate: -50% calc(-50% - 6px);
            rotate: 0deg;
    
            transition: translate, rotate;
            transition-duration: var(--ham-transition-duration);
            transition-delay: var(--ham-transition-delay);
        }
        #two {
            scale: 1 1;
            width: 95;
            translate: -50% -50%;
            transition: scale;
            transition-duration: var(--ham-transition-duration);
            transition-delay: var(--ham-transition-delay);
        }
        #three {
            width:60%;
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
                translate: -50% calc(-50% - 13px);
            }
            #two {
                translate: -50% -50%;
            }
            #three {
                translate: -50% calc(-50% + 13px);
            }
        }

        #hamburger.open {
            border-color: var(--color-primary);
        }
        #hamburger.open #one {
            rotate: 45deg;
            translate: -50% -50%;
        }
        #hamburger.open #two {
            scale: 0 1;
        }
        #hamburger.open #three {
            rotate: -45deg;
            translate: -50% -50%;
        }
    
        #menu-container {
            content-visibility: auto;

            z-index: 40;
            position: fixed;
            top: 0;
            right: 0;

            width: 0;
            height: 0;

            overflow: hidden;

            display: flex;
            flex-grow: 0;

            border-bottom-left-radius: 100%;

            background-color: color-mix(in srgb, transparent 5%, var(--color-accent-blue-off) 85%);
            backdrop-filter: blur(10px);

            transition-property: height, width, border-radius;
            transition-duration: var(--ham-transition-duration);
            transition-timing-function: ease-in-out;
        }

        #menu-container menu {
            width: 100%;
            height: 100%;
            
            padding: 3em 0.5em;

            display: flex;
            flex-direction: column;
            backdrop-filter: blur(4px);
        }

        #menu-container ol {
            margin: 0 auto;
            width: 1200px;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1em;
        }

        #menu-container.show-menu {
            width: 100%;
            height: 100vh;
            border-radius: 0px;
        }
        
        #menu-container.show-menu menu {
            display: flex;
        }

        #menu-container :global(li) {
            opacity: 0;
            transition: opacity 400ms ease-out;
        }

        #menu-container.show-menu :global(li) {
            opacity: 0%;
    
            animation-name: li-in;
            animation-fill-mode: forwards;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: cubic-bezier(.88,-0.03,.49,1.73);
            animation-duration: 500ms;
            animation-delay: calc((var(--ham-transition-duration) / 2) + (var(--li-animation-order) * 80ms));
        }
    
        @keyframes li-in {
            from {
                translate: 0 1em;
                opacity: 0%;
            }
    
            to {
                translate: 0px 0px;
                opacity: 100%;
            }
        }

        :global(html.reduce-motion) #menu-container {
            border-bottom-left-radius: 0;
            opacity: 0;

            transition-property: opacity;
        }
        :global(html.reduce-motion) #menu-container.show-menu {
            opacity: 1;
        }
        :global(html.reduce-motion) #menu-container.show-menu :global(li) {
            animation: none;
            opacity: 1;
        }
        @media (prefers-reduced-motion) {
            #menu-container {
                width: 100%;
                height: 100%;
                border-bottom-left-radius: 0;
                opacity: 0;

                transition-property: opacity;
            }
            #menu-container.show-menu {
                opacity: 1;
            }
            #menu-container.show-menu :global(li) {
                animation: none;
            }
        }
    </style>