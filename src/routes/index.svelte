<script lang="ts">
import Button from "$lib/Button.svelte";
import { GoToPath } from "$store/RoutingStore";


    export let context: FragmentContext;
</script>

<main id="main-container" class="mx-auto h-screen w-full flex flex-shrink overflow-hidden flex-grow">
    <article class="m-auto mt-36 card-playful-primary-filled flex flex-col max-w-lg">
        <h1 class="mb-2 text-texton-primary">Welcome to Design Ward</h1>
        <h6 class="mb-4 text-accent-yellow">Please be aware: This site is under construction.</h6>
        <p class="text-texton-primary">
            Design Ward is currently a place for me to display my work. 
            You can find that under the Work tab. I would eventually like to 
            include my writing - as well as do much more writing - here. 
            One step at a time though I suppose. For now, check out my work 
            and enjoy this simple web app that I built using Svelte and Tailwind.
        </p>
        <div class="flex space-x-2 mt-6">
            <Button 
                color="{'var(--color-secondary)'}"
                on:click="{() => GoToPath("/Work")}"
            >
                <h5>Explore Work</h5>
            </Button>
            <Button 
                color="{'var(--color-secondary-dark)'}"
                on:click="{() => GoToPath("/About")}"
            >
                <h5>About Me</h5> 
            </Button>
        </div>
    </article>
</main>