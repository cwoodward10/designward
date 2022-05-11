<script lang="ts">
import WorkNavCard from "$lib/WorkNavCard.svelte";
import { GoToPath } from "$store/RoutingStore";
import { HomeIcon, CubeTransparentIcon, DesktopComputerIcon, CubeIcon } from "@rgossiaux/svelte-heroicons/outline";
import svelteLogo from '$assets/logos/svelte.png';

export let context: FragmentContext;
</script>

<main id="main-container" class="mt-8 mx-auto pb-10 w-full flex flex-col justify-center overflow-hidden flex-grow">
    <div id="work-items" class="mx-auto flex flex-col md:flex-row md:flex-wrap space-y-8 md:space-y-0 md:space-x-8 lg:space-x-10">
        <WorkNavCard color="var(--color-secondary)"
                    on:click="{() => GoToPath('/Work/Helix')}">
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
                    on:click="{() => GoToPath('/Work/Svelte')}">
            <div class="flex flex-col m-auto">
                <h3 class="text-texton-secondary text-center">S is for</h3>
                <img src={svelteLogo} alt="Svelte Logo" class="mx-auto w-3/5 text-white grayscale"/>
                <h3 class="text-texton-secondary text-center">Svelte Repl</h3>
            </div>
        </WorkNavCard>
        <WorkNavCard color="var(--color-primary-light)"
                        on:click="{() => GoToPath('/Work/Architecture')}">
            <div class="flex flex-col m-auto">
                <h3 class="text-texton-primary text-center">A is for</h3>
                <HomeIcon class="mx-auto w-3/5 text-white"/>
                <h3 class="text-texton-primary text-center">Architecture</h3>
            </div>
        </WorkNavCard>
        <WorkNavCard color="var(--color-accent-pink-light)"
                        on:click="{() => window.open('https://www.cmwoodward.com/work', '_blank')}">
            <div class="flex flex-col m-auto">
                <h3 class="text-texton-primary text-center">S is also for</h3>
                <img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/squarespace_logo_icon_181252.png" 
                    alt="squarespace logo" 
                    class="mx-auto w-3/5 text-white invert"/>
                <h3 class="text-texton-primary text-center">SquareSpace</h3>
            </div>
        </WorkNavCard>
    </div>
    <footer class="flex flex-col mx-auto mt-6">
        <h6 class="text-primary-main text-xs">*I'm including Squarespace as a reference as this site is still under construction</h6>
        <h6 class="text-primary-main text-xs">check back later as I continue migrating over from there.</h6>
    </footer>
</main>