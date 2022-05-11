<script lang="ts">
     
</script>

<article class="flex flex-col relative mt-14 max-w-2xl h-96 w-10/12 p-8">
    <img class="md:absolute bottom-4 left-0 h-full w-auto"
        src="./src/assets/images/absurd.design-Chapter1-32.png" />
    <a class="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs" href="https://absurd.design/" target="#" alt="absurd design">thanks to Absurd.design for the image</a>
    <section class="relative md:absolute md:top-12 right-0 md:whitespace-nowrap px-4 py-2 text-white font-title font-bold">
        <div class="relative z-20">
            <slot>
                <h5>We are still under construction...</h5>
                <h5>Come back soon to see the progress!</h5>
            </slot>
        </div>
        <div class="absolute top-0 bottom-0 right-0 left-0 skew-x-6 bg-accent-pink-dark drop-shadow-playful-primary"/>
    </section>
</article>