<script lang="ts">
    import HamburgerMenu from "@components/base/menus/hamburger/HamburgerMenu.svelte";
    import MotionButton from "./header-helpers/MotionButton.svelte";
    import ModeButton from "./header-helpers/ModeButton.svelte";

    const HEIGHT_HERO = 20;

    const ROUTES: {name: string, route: string}[] = [
        {
            name: 'Home',
            route: '/'
        },
        {
            name: 'Portfolio',
            route: '/portfolio/'
        },
        {
            name: 'Garden',
            route: '/garden/'
        },
        {
            name: 'About',
            route: '/about/'
        }
    ]

    let showSticky = true;
    let prevY = 0;
    let scrollY: number;
    $: {
        if (scrollY < HEIGHT_HERO) {
            showSticky = true;
        } else {
            showSticky = true && (prevY > scrollY)
        }
        prevY = scrollY;
    }
</script>

<svelte:window bind:scrollY={scrollY} />
<header id="top-header" class:shadow={scrollY > 5} class:hide={!showSticky}>
    <div id="header-content" >
        <a class="logo-container" href="/">
            [
            <span><span class="logo-full">Designward</span><span class="logo-initials">DW</span></span>
            ]
        </a>
        <div class="settings-container">
            <MotionButton />
            <ModeButton />
        </div>
        <nav class="hamburger-container">
            <HamburgerMenu>
                {#each ROUTES as route}
                <li class="ham-route">
                    <a href={route.route}>{route.name}</a>
                </li>
                {/each}
            </HamburgerMenu>
        </nav>
        <nav class="link-menu-container">
            {#each ROUTES as route}
            <li class="nav-route">
                <a href={route.route}>{route.name}</a>
            </li>
            {/each}
        </nav>
    </div>
</header>

<style lang="scss">
    @import "../../assets/styles/sass/breakpoints.scss";

    :global(:root) {
        --header-height: 48px;
    }

    #top-header {
        position: sticky;
        top: 0;
        z-index: 100;
        
        display: flex;
        padding: 0.5rem var(--padding-edge);

        background-color: color-mix(in srgb, var(--color-background), transparent 10%);
        backdrop-filter: blur(4px);

        transition: transform 300ms ease-in;
    }
    #top-header.shadow {
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
    }
    #top-header.hide {
        transform: translateY(-100%);
    }

    #header-content {
        margin: 0 auto;
        height: fit-content;
        width: 100%;

        display: inline-flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (min-width: $breakpoint-sm) {
            align-self: flex-end;
        }
    }

    .logo-container {
        display: flex;
        align-items: center;
        gap: 0.1em;

        height: 2rem;
        color: var(--color-text);

        font-size: 24px;
        line-height: 100%;

        min-width: 51px;

        --transition-duration: 300ms;
        
        span {
            display: flex;
            font-size: 0.8em;
            font-family: var(--font-fun);
            font-weight: 600;
            line-height: 130%;
        }
        &>span {
            translate: 0 0.1em;
        }

        .logo-full, .logo-initials {
            overflow: hidden;
            color: var(--color-primary);

            transition-property: max-width;
            transition-duration: var(--transition-duration);
            transition-timing-function: ease-in-out;
        }
        .logo-full {
            transition-delay: 0ms;
            max-width: 0;
        }
        .logo-initials {
            transition-delay: calc(var(--transition-duration) * 1.2);
            max-width: 32px;
        }

        &::after {
            content: none;
        }

        &:hover {
            .logo-initials {
                max-width: 0;
                transition-delay: 0ms;
            }
            .logo-full {
                max-width: 100px;
                transition-delay: calc(var(--transition-duration) * 1.2);
            }
        }
    }

    .settings-container {
        margin-left: auto;
        margin-right: 1em;
        padding-right: 1em;
        border-right: var(--color-text) 1px solid;

        display: flex;
        align-items: center;
        gap: 1em;
    }

    .link-menu-container {
        display: none;
        content-visibility: hidden;
        align-items: center;
    }
    @media screen and (min-width: $breakpoint-sm) {
        .hamburger-container {
            display: none;
            content-visibility: hidden;
        }
        .link-menu-container {
            content-visibility: visible;
            display: inline-flex;
            gap: 1.5rem;
        }
        .link-menu-container .nav-route {
            position: relative;
            padding: 0 0.2em;
            a {
                color: var(--color-text);

                display: flex;
                transform-origin: 50% 100%;

                transition-property: scale, translate;
                transition-duration: var(--transition-duration-standard);
                transition-timing-function: var(--transition-easing-standard);
                &::after {
                    content: none;
                }
            }

            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                right: 0;
                
                height: 2px;
                width: 0%;
                background-color: var(--color-primary);

                transform-origin: 50% 100%;
                transition: width 200ms ease-in;
            }

            &:hover {
                a {
                    scale: 1.03;
                    translate: 0 -1px;
                }

                &::after {
                    left: 0;
                    width: 100%;
                }
            }
        }
    }

    li {
        list-style-type: none;
        margin: 0;
    }

    li::marker {
        content: none;
    }

    li.ham-route {
        font-size: var(--step-4);

        a {
            color: white;

            &:after {
                background-color: var(--color-primary);
            }
        }
    }
</style>