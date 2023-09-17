<script lang="ts">
    import svelteLogo from '$assets/logos/svelte.png';
    import tailwindLogo from '$assets/logos/tailwind.png';
    import routifyLogo from '$assets/logos/r3-logo.svg';
</script>

<footer class="bg-primary w-full flex flex-shrink-0 justify-center p-6">
    <div class="w-full max-w-page flex justify-between">
        <section class="flex flex-col gap-1.5">
            <h5 class="text-text-white">About this site:</h5>
            <div class="flex gap-1">
                <a class="my-auto" href="https://svelte.dev/" target="#">
                    <img class="h-6 w-auto" src={svelteLogo} alt="Svelte Logo"/>
                </a>
                <a class="my-auto" href="https://tailwindcss.com/" target="#">
                    <img class="h-6 w-auto" src={tailwindLogo} alt="Tailwind CSS Logo"/>
                </a>
                <a class="my-auto" href="https://v3.routify.dev/" target="#">
                    <img class="h-6 w-auto" src={routifyLogo} alt="Routify 3 Logo"/>
                </a>
            </div>
            <a class="my-auto flex a-white" href="https://github.com/cwoodward10/designward" target="#">
                See the repo
            </a>
        </section>
    
        <section class="flex flex-col gap-px m-0">
            <h5 class="text-text-white">Quick links:</h5>
            <a 
                class="a-white" 
                href="https://www.linkedin.com/in/chris-woodward-8789b532/" 
                target="#"
            >
                LinkedIn
            </a>
            <a 
                class="a-white" 
                href="https://drive.google.com/file/d/1FMfZ0RHwd1AGZXMIAXn4cPiG5mS5fMAR/view?usp=sharing" 
                target="#"
            >
                Resume
            </a>
        </section>
    </div>
</footer>