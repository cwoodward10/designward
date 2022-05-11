<script lang="ts">
import BlogPostNavCard from "$lib/BlogPostNavCard.svelte";
export let context: FragmentContext;

const marinaText = `
    F3 Marina is a world class automated boat storage facility in Fort Lauderdale, Florida. 
    I was fortunate to be involved from the very beginning of the design process. While 
    I left RINKA+ before completion, I was happy to see that it turned out as well as we envisioned.
`;

const yardsText = `
    The Yards is a multi-family building located within the Walker's Point neighborhood of Milwaukee, just 
    a bit south of Downtown. The design of the Yards took inspiration from the industrial past of the site, 
    including the railyards from which it derives it's name.
`;

const belairText = `
    Belair Cantina is a local, Milwaukee-based restaurant chain. I was able to be a part of the design and construction of the 
    Brookfield and Madison locations. In fact, the Brookfield location was the first architectural projec that I was a part of
    through construction.
`;

const riverNorthText = `
    River North is a Mississippi River front development planned in La Crosse, Wisconsin. It was one of a couple urban 
    scale design teams that I was fortunate to be a part of. Our design concept hinged around creating "Green Fingers" that 
    would connect the main streets throughout the development out to the parks at the river-front.
`;

function goToUrl(url: string) {
    window.open(url, '_blank');
}
</script>

<main id="main-container" class="mt-8 mx-auto w-full flex justify-center overflow-auto flex-grow">
    <div class="mx-auto mb-10 flex flex-col space-y-2">
        <article class="card-playful-primary-filled flex flex-col flex-shrink-0 max-w-xl">
            <h1 class="mb-2 text-texton-primary">Architectural Projects</h1>
            <h6 class="mb-4 text-accent-yellow">Please be aware: This site is under construction.</h6>
            <p class="text-texton-primary">
                I started my career as an architectural designer at RINKA+ in Milwaukee, Wisconsin. 
                As such, I was fortunate to work on, and see built, a variety of projects during my time there. 
                I will be forever thankful to my time at RINKA+, as well as my education in Architectural Design School, 
                for the lessons in design and human experience that it gave me. Below is a sample of work that I was able 
                to work on while there. 
            </p>
        </article>
        <BlogPostNavCard src="https://images.squarespace-cdn.com/content/v1/5ba9c8ba92441b1edbb4467a/1636751844382-BAVVSU290J0I7XEXO532/IMG_3259.JPG?format=200w" 
                        alt="F3 Marina" 
                        text={marinaText}
                        on:click={() => goToUrl('https://www.rinka.com/f3-marina-1')} />
        <BlogPostNavCard src="https://images.squarespace-cdn.com/content/v1/5ba9c8ba92441b1edbb4467a/1608069782916-Y6KCCN1Q1PLEIQZ52S3Q/06_THE+YARDS+%2802%29.jpg?format=200w" 
            alt="The Yards" 
            text={yardsText}
            on:click={() => goToUrl('https://www.rinka.com/yards')} />
        <BlogPostNavCard src="https://images.squarespace-cdn.com/content/v1/5ba9c8ba92441b1edbb4467a/1578436413168-HR9NF3L2ZMAG0VC3NDWQ/LAX-AERIAL+SW.jpg?format=200w" 
            alt="River North" 
            text={riverNorthText}
            on:click={() => goToUrl('https://www.rinka.com/riverside-north')} />
        <BlogPostNavCard src="https://images.squarespace-cdn.com/content/v1/5ba9c8ba92441b1edbb4467a/1539192535150-FN7VJ47DSVVML4PZ54K0/Belair-2.jpg?format=200w" 
            alt="Belair Cantina" 
            text={belairText}
            on:click={() => goToUrl('https://www.rinka.com/belair')} />
    </div>
</main>