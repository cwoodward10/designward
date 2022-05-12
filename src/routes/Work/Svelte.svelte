<script lang="ts">
export let context: FragmentContext;


function goToUrl(url: string) {
    window.open(url, '_blank');
}
</script>

<main id="main-container" class="mt-8 mx-auto w-full flex justify-center overflow-auto flex-grow">
    <div class="mx-auto mb-10 flex flex-col space-y-8 w-11/12 max-w-4xl">
        <article class="mx-auto card-playful-primary-filled flex flex-col max-w-3xl">
            <h1 class="mb-2 text-texton-primary">Svelte Repl Components</h1>
            <h6 class="mb-4 text-accent-yellow">Please be aware: This site is under construction.</h6>
            <p class="text-texton-primary">
                In building this website, I built out a couple of generic components that I wanted to put 
                out into the world for all to see, and use, if they so chose. Because the Svelte REPL does not 
                have a nice landing page like CodePen does, I have iframe'd them into this page for viewing. 
                Clicking the title will also lead you to the Svelte page to see them in their natural environment.
            </p>
        </article>
        <div class="flex flex-col space-y-8 mx-auto w-full max-w-5xl">
            <div class="flex flex-col flex-shrink-0">
                <a href="https://svelte.dev/repl/176874027bf3458dbaa8bf4f114ebd94?version=3.48.0" target="#" alt="svelte repl Tab Menu">
                    <h2>Tab Menu Component</h2>
                </a>
                <iframe src="https://svelte.dev/repl/176874027bf3458dbaa8bf4f114ebd94?version=3.48.0"
                    title="Tab Menu Component"
                    class="h-108 min-w-full flex border border-solid border-gray-400 hover:drop-shadow-playful-secondary-deep transition"></iframe>
            </div>
            <div class="flex flex-col flex-shrink-0">
                <a href="https://svelte.dev/repl/8e44a792eb3f4067bee2f78727cd982b?version=3.48.0" target="#" alt="svelte repl Ripple Button">
                    <h2>Ripple Button Component</h2>
                </a>
                <iframe src="https://svelte.dev/repl/8e44a792eb3f4067bee2f78727cd982b?version=3.48.0"
                    title="Ripple Button Component"
                    class="h-108 min-w-full flex border border-solid border-gray-400 hover:drop-shadow-playful-secondary-deep transition"></iframe>
            </div>
        </div>
    </div>
</main>

<style>
    iframe {
        width: 768px;
    }
</style>