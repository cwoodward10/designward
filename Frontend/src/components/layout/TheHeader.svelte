<script lang="ts">
    import AnimatedLogo from "@components/brand/LogoAnimated.svelte";
    import HamburgerMenu from "@components/base/menus/hamburger/HamburgerMenu.svelte";

    const HEIGHT_HERO = 500;

    export let currentPath: string;
    const ROUTES: {name: string, route: string}[] = [
        {
            name: 'Portfolio',
            route: '/portfolio/'
        },
        {
            name: 'Garden',
            route: '/garden/'
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
            <AnimatedLogo />
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

    #top-header {
        position: sticky;
        top: 0;
        z-index: 100;
        
        display: flex;
        background-color: var(--color-background);
        padding: 0.5rem var(--padding-edge);

        filter: var(--shadow-header);

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
        height: 2rem;
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
            transform-origin: 50% 100%;
            transition: scale 200ms ease-in;

            a {
                color: var(--color-primary);
                &::after {
                    content: none;
                }
            }

            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                
                height: 2px;
                width: 0%;
                background-color: var(--color-primary);

                transition: width 200ms ease-in;
            }

            &:hover {
                scale: 1.05;

                &::after {
                    width: 100%;
                }
            }
        }
    }
</style>