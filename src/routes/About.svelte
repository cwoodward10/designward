<script lang="ts">
    import headshot from '$assets/images/headshot_md2.jpg';
    export let context: FragmentContext;

    const aboutMeText: string = `
    Design Ward came about as a play on my last name - Woodward - and how it relates to words such as onward, forward, backward, toward, and even “word”. 
    I like it because it implies directionality without implying which way that direction is pointing. As someone who has followed a rather circuitous route 
    to my current position - someone at the edge of design and engineer, digital and physical - that ambiguity towards a defined future felt reflective 
    of my journey.
    
    DesignWard will eventually be a place for me to host my thoughts via a blog. For now, it will also double as a portfolio page for me to display my work and 
    track my progress towards...something. I'm not quite sure what it is really. But it is a direction. I'm excited to see where it leads. 
    `;

    let hoverResume = false;
    let hoverLinkedin = false;
</script>

<div class="mt-8 mx-auto w-full flex flex-shrink overflow-hidden flex-grow">
    <article class="flex flex-col-reverse md:max-w-lg lg:max-w-4xl lg:flex-row px-12 pb-12 gap-4 mx-auto mt-10 overflow-auto">
        <section class="w-full">
            <h2>About DesignWard</h2>
            <h6>By Chris Woodward</h6>
            <p class="whitespace-pre-line">{aboutMeText}</p>
        </section>
        <section class="relative">
            <img id="headshot"
                class="w-full rounded-sm drop-shadow-playful-primary-short"
                src={headshot}
                alt="Chris Headshot" />
            <div class="absolute top-6 -left-4 z-10 py-1 px-2"
                on:mouseenter="{() => hoverResume = true}"
                on:mouseleave="{() => hoverResume = false}">
                <a class="relative font-title font-bold z-20 a-white"
                    href="https://drive.google.com/file/d/1HIaUHD3A-ue70gr06r0RzDOgDeXzKTNW/view?usp=sharing"
                    target="#">
                    Checkout my Resume!
                </a>
                <div class="absolute top-0 right-0 left-0 bottom-0 skew-x-6 bg-accent-pink-dark transition"
                    class:drop-shadow-playful-secondary-short={hoverResume}/>
            </div>
            <div class="absolute top-20 md:top-32 -right-4 z-10 py-1 px-2"
                on:mouseenter="{() => hoverLinkedin = true}"
                on:mouseleave="{() => hoverLinkedin = false}">
                <a class="relative font-title font-bold z-20 a-white"
                    href="https://www.linkedin.com/in/chris-woodward-8789b532/"
                    target="#">
                    Or my LinkedIn!
                </a>
                <div class="absolute top-0 right-0 left-0 bottom-0 skew-x-6 bg-accent-pink-dark transition"
                    class:drop-shadow-playful-secondary-short={hoverLinkedin}/>
            </div>
        </section>
    </article>
</div>