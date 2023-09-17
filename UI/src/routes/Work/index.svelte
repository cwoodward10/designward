<script lang="ts">
import WorkNavCard from "$lib/WorkNavCard.svelte";
import { GoToPath } from "$store/RoutingStore";
import { HomeIcon, CubeTransparentIcon, DesktopComputerIcon, CubeIcon } from "@rgossiaux/svelte-heroicons/outline";
import svelteLogo from '$assets/logos/svelte.png';

export let context: FragmentContext;
let router = context.route.router;

</script>

<main id="main-container" 
    class="mt-8 mx-auto pb-10 w-full flex flex-col justify-center overflow-hidden flex-grow">
    <div id="work-items" 
        class="mx-auto px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-10">
        <WorkNavCard color="var(--color-secondary)"
                    on:click="{() => GoToPath(router, '/Work/Helix')}">
            <div class="flex flex-col m-auto">
                <h3 class="text-texton-primary text-center">H is for</h3>
                <img src="https://static.wixstatic.com/media/6a22c4_bad0cf046e824f229b942b512fb99c50~mv2.png/v1/fill/w_668,h_668,al_c/Helix%20Main%20Image_340.png"
                    alt="Helix Logo"
                    class="mx-auto w-3/5 text-white grayscale brightness-200"/>
                <h3 class="text-texton-primary text-center">Helix</h3>
            </div>
        </WorkNavCard>
        <WorkNavCard color="var(--color-accent-green)"
                    on:click="{() => window.open('https://codepen.io/cwoodward10/', '_blank')}">
            <div class="flex flex-col m-auto">
                <h3 class="text-texton-primary text-center">C is for</h3>
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111501.png" alt="CodePen Logo" class="mx-auto w-3/5 text-white invert"/>
                <h3 class="text-texton-primary text-center">CodePen</h3>
            </div>
        </WorkNavCard>
        <WorkNavCard color="var(--color-accent-yellow)"
                    on:click="{() => GoToPath(router, '/Work/Svelte')}">
            <div class="flex flex-col m-auto">
                <h3 class="text-texton-secondary text-center">S is for</h3>
                <img src={svelteLogo} alt="Svelte Logo" class="mx-auto w-3/5 text-white grayscale"/>
                <h3 class="text-texton-secondary text-center">Svelte Repl</h3>
            </div>
        </WorkNavCard>
        <WorkNavCard color="var(--color-primary-light)"
                        on:click="{() => GoToPath(router, '/Work/Architecture')}">
            <div class="flex flex-col m-auto">
                <h3 class="text-texton-primary text-center">A is for</h3>
                <HomeIcon class="mx-auto w-3/5 text-white"/>
                <h3 class="text-texton-primary text-center">Architecture</h3>
            </div>
        </WorkNavCard>
        <WorkNavCard color="var(--color-accent-pink-light)"
                        on:click="{() => window.open('https://www.cmwoodward.com/work', '_blank')}">
            <div class="flex flex-col h-full py-2 m-auto justify-between">
                <h3 class="text-texton-primary text-center">S is also for</h3>
                <svg class="mx-auto w-3/5 h-auto fill-white" 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 90 72">
                    <title>Squarespace Logo</title>
                    <g data-name="Logo">
                        <path d="M18.49 38.15L46.67 10A10.16 10.16 0 0 1 61 10l2.19 2.19 4.39-4.39-2.19-2.2a16.38 16.38 0 0 0-23.14 0L14.09 33.76z"></path><path d="M56.11 19.27l-4.39-4.39-28.19 28.19A10.15 10.15 0 0 1 9.18 28.71L33.5 4.39 29.11 0 4.79 24.32a16.36 16.36 0 1 0 23.13 23.14zM84.17 24.32a16.39 16.39 0 0 0-23.14 0L32.84 52.51l4.39 4.39 28.19-28.19a10.15 10.15 0 0 1 17.32 7.18 10 10 0 0 1-3 7.18L55.45 67.39l4.4 4.39 24.32-24.32a16.38 16.38 0 0 0 0-23.14z"></path>
                        <path d="M70.47 33.63L42.28 61.81a10.17 10.17 0 0 1-14.36 0l-2.19-2.2L21.34 64l2.19 2.2a16.39 16.39 0 0 0 23.14 0L74.86 38z"></path>
                    </g>
                </svg>
                <h3 class="text-texton-primary text-center">SquareSpace</h3>
            </div>
        </WorkNavCard>
    </div>
    <footer class="flex flex-col mx-auto mt-6 px-8">
        <h6 class="text-primary-main text-xs">*I'm including Squarespace as a reference as this site is still under construction</h6>
        <h6 class="text-primary-main text-xs">check back later as I continue migrating over from there.</h6>
    </footer>
</main>