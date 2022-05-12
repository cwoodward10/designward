<script lang="ts">
import UnderConstruction from "$lib/special/UnderConstruction.svelte";
export let context: FragmentContext;

const mappingGifUrl = "https://i.imgur.com/dzSQvAv.gif";
const mappingStaticUrl = "https://i.imgur.com/YaMjcMe.png";
const mappingUIZoom = "https://i.imgur.com/gvw9XU7.png";
const wireframeUrl = "https://i.imgur.com/6S6tMhi.png";

const aboutText = `
    Helix is built using a variety of tech stacks owing to its nature a tool requiring plugins to multiple tools. 
    The Sketchup Plugin uses a Vue + Typescript for its UI but Ruby as its backend. Revit Plugin is built using 
    Revit's C# API. The goal is to natively transport geometry from Sketchup to Revit.
`;
const aboutUIText = `The final UI consists of two major components that react to the information present in and selected in Sketchup:

    1) The Selection Board - This section reacts to what is selected in Sketchup. Sitting at the top of the UI, it allows 
    a designer to quickly understand the geometry that is selected in Sketchup and if it is mapped to anything in Revit. It also 
    allows them to either assign or change what is it is mapped to.

    2) The Map Board - This section is a record of all the current mappings within the Model. It, along with the associated 
    Sketchup geometry, is what is sent to Revit when the "Send to Revit" button is clicked.
`;

const wireframeText = `
    The first step that I undertook when given the task of creating the Helix UI was flushing out the general UX 
    along with a basic idea for the UI based on that UX and the intended feature requirements of the app. An overall 
    back and forth was required as new features - as well as the design requirements - were considered and roughed out. 
    In doing this, I worked directly with our stakeholders, product owner, and product manager. The intention was to 
    get out a prototype that we could text and use to iterate how our features worked. We could then also bring in our 
    UI designer to build a more fleshed out and refined design.
`;

</script>

<main id="main-container" class="mt-8 mx-auto w-full flex justify-center overflow-hidden flex-grow">
    <div id="helix-main" class="flex flex-col space-y-4 w-11/12 md:max-w-4xl pb-20">
        <header class="flex flex-col px-10">
            <div class="flex flex-row">
                <h1 class="whitespace-nowrap">
                    Helix - by EvolveLAB
                </h1>
            </div>
            <h5>Built to be a better SketchUp to Revit Integration</h5>
        </header>
        <div class="flex pb-10 relative rounded-md transition hover:drop-shadow-playful-primary-deep">
            <img id="splash"
                class="z-20"
                src={mappingGifUrl}
                alt="Helix Mapping In Progress"/>
            <div class="absolute top-0 right-0 left-0 bottom-10 bg-gray-400"/>
        </div>
        <article class="flex flex-col px-10 md:flex-row space-y-3 md:space-y-0 md:space-x-4 pb-8 border-b border-b-primary border-solid">
            <section class="w-full flex flex-col">
                <h2 >About Helix</h2>
                <h5 class="mb-2">my role: Front End Tech Lead and C# Developer</h5>
                <p class="whitespace-normal overflow-hidden">{aboutText}</p>
            </section>
            <section class="w-full flex relative rounded-md transition hover:drop-shadow-playful-secondary-short">
                <img id="splash"
                    class="z-20 object-scale-down"
                    src={mappingStaticUrl}
                    alt="Helix Mapping In Progress"/>
                <div class="absolute top-0 right-0 left-0 bottom-0 bg-gray-400"/>
            </section>
        </article>
        
        <article class="flex flex-col flex-shrink-0 px-10 space-y-2 pb-8 border-b border-b-primary border-solid">
            <h2>Helix in Action</h2>
            <iframe src="https://www.youtube.com/embed/L98AD4MQgak"
                    class="max-h-full aspect-video flex"
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen />
        </article>

        <article class="flex flex-col pt-6 px-10 space-y-3">
            <section class="w-full flex flex-col">
                <h2 >The Design Process</h2>
                <p class="whitespace-normal overflow-hidden">{wireframeText}</p>
            </section>
            <section class="w-full flex relative rounded-md transition hover:drop-shadow-playful-secondary-short">
                <img id="splash"
                    class="z-20 object-scale-down"
                    src={wireframeUrl}
                    alt="Helix Mapping In Progress"/>
                <div class="absolute top-0 right-0 left-0 bottom-0 bg-gray-400"/>
            </section>
        </article>
        <article class="flex flex-col px-10 md:flex-row space-y-3 md:space-y-0 md:space-x-4 pb-8">
            <section class="w-full flex flex-grow-0 relative rounded-md transition hover:drop-shadow-playful-secondary-short">
                <img id="splash"
                    class="z-20 w-full"
                    src={mappingUIZoom}
                    alt="Helix Mapping In Progress"/>
                <div class="absolute top-0 right-0 left-0 bottom-0 bg-gray-400"/>
            </section>
            <section class="w-full flex flex-col">
                <p class="overflow-hidden whitespace-pre-line">{aboutUIText}</p>
            </section>
        </article>
    </div>
</main>