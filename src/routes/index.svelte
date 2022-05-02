<script lang="ts">
import Button from "$lib/Button.svelte";
import { GoToPath } from "$store/RoutingStore";


    export let context: FragmentContext;
</script>

<main id="main-container" class="mx-auto h-screen w-full flex flex-shrink overflow-hidden flex-grow">
    <article class="m-auto card-playful-primary-filled flex flex-col max-w-lg">
        <h1 class="mb-4">Welcome to Design Ward</h1>
        <h5>
            Design Ward is a place for me to explore various 
            design related topics in ways that are interesting but may 
            not necessarily be viable professionally. Sometimes this 
            may be as simple as exploring new technology or forms of 
            representation. Other times, it may come down to pursing 
            social conversations that are uncomfortable in a business-centric environment.
        </h5>
        <div class="flex space-x-2 mt-6">
            <Button 
                color="{'var(--color-secondary)'}"
                on:click="{() => GoToPath("/Blogs")}"
            >
                <h5>Explore Blogs</h5>
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