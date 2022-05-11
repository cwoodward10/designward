<script lang="ts">
import UnderConstruction from "$lib/special/UnderConstruction.svelte";

    export let context: FragmentContext;
</script>

<main id="main-container" class="mt-14 mx-auto h-screen w-full flex justify-center overflow-hidden flex-grow">
    <UnderConstruction>
        <article class="m-auto flex flex-col text-white font-title font-bold">
            <h4>
                The Work page is currently under construction...
            </h4>
            <h4>
                but in the future there will be blogs!
            </h4>
        </article>
    </UnderConstruction>
</main>