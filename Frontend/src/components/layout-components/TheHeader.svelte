<script lang="ts">
    import HamburgerMenu from "@components/base/menus/hamburger/HamburgerMenu.svelte";

    const HEIGHT_HERO = 500;

    const ROUTES: {name: string, route: string}[] = [
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
<header id="top-header" class:hide={!showSticky}>
    <div id="header-content" >
        <a class="logo-container" href="/">
            [
            <span><span class="logo-full">Designward</span><span class="logo-initials">DW</span></span>
            ]
        </a>
        <nav class="hamburger-container">
            <HamburgerMenu 
                thickness={3}
                height={20}
                width={24}
                color={'var(--color-primary)'}
            >
                {#each ROUTES as route}
                <li>
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

        transition: transform 300ms ease-in;
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
        align-items: flex-end;
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
            line-height: 100%;
        }
        &>span {
            translate: 0 0.08em;
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

    .link-menu-container {
        display: none;
        content-visibility: hidden;
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
                color: var(--color-offwhite);

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

    li::marker {
        content: none;
    }
</style>