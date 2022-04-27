<script lang="ts">
import { SetCurrentPath } from "$store/RoutingStore";


    export let context: FragmentContext;
</script>

<main id="main-container" class="mx-auto h-screen w-full flex flex-shrink overflow-hidden flex-grow">
    <article class="m-auto card-playful-primary-filled flex flex-col max-w-lg">
        <h1>Welcome to Design Ward</h1>
        <h5>
            Design Ward is a place for me to explore various 
            design related topics in ways that are interesting but may 
            not necessarily be viable professionally. Sometimes this 
            may be as simple as exploring new technology or forms of 
            representation. Other times, it may come down to pursing 
            social conversations that are uncomfortable in a business-centric environment.
        </h5>
        <div class="flex space-x-2 mt-2">
            <button class="btn-standard border-none bg-secondary-main">
                <h5 on:click="{() => SetCurrentPath("/Blogs")}">Explore Blogs</h5>
            </button>
            <button class="btn-standard border-none bg-secondary-dark">
                <h5 on:click="{() => SetCurrentPath("/About")}">About Me</h5> 
            </button>
        </div>
    </article>
</main>