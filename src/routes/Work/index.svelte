<script lang="ts">
import WorkNavCard from "$lib/WorkNavCard.svelte";
import { GoToPath } from "$store/RoutingStore";
import { HomeIcon, CubeTransparentIcon, DesktopComputerIcon } from "@rgossiaux/svelte-heroicons/outline";
import svelteLogo from '$assets/logos/svelte.png';

export let context: FragmentContext;
</script>

<main id="main-container" class="mt-8 mx-auto pb-10 w-full flex justify-center overflow-hidden flex-grow">
    <div id="work-items" class="mx-auto flex flex-col md:flex-row md:flex-wrap space-y-8 md:space-y-0 md:space-x-8 lg:space-x-10">
        <WorkNavCard color="var(--color-secondary)"
                    on:click="{() => GoToPath('/Work/Helix')}">
            <div class="flex flex-col m-auto">
                <h3 class="text-texton-primary text-center">H is for</h3>
                <DesktopComputerIcon class="mx-auto w-3/5 text-white"/>
                <h3 class="text-texton-primary text-center">Helix</h3>
            </div>
        </WorkNavCard>
        <WorkNavCard color="var(--color-accent-green)"
                    on:click="{() => window.open('https://codepen.io/cwoodward10/', '_blank')}">
            <div class="flex flex-col m-auto">
                <h3 class="text-texton-primary text-center">C is for</h3>
                <CubeTransparentIcon class="mx-auto w-3/5 text-white"/>
                <h3 class="text-texton-primary text-center">CodePen</h3>
            </div>
        </WorkNavCard>
        <WorkNavCard color="var(--color-accent-yellow)"
                    on:click="{() => window.open('https://codepen.io/cwoodward10/', '_blank')}">
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
    </div>
</main>