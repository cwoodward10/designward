    <script lang="ts">
	import TheToolsAndLanguages from '$lib/layout/TheToolsAndLanguages.svelte';

    //#region PAGE DATA
    const coreCompetencies: {title: string, text: string, ctal: string}[] = [
        {
            title: "Creative Technology",
            text: "Frontend or UI/UX engineering? That’s my day job. How can I help?",
            ctal: ''
        },
        {
            title: "Computational Design",
            text: "Grasshopper? Dynamo? Custom plugin or app? I cut my coding chops here.",
            ctal: ''
        },
        {
            title: "Physical Design",
            text: "Where I fell in love with design. I take many of my ideas from this space.",
            ctal: ''
        },
    ]
    const pageSections: {title: string, text: string, ctat: string, ctal: string}[] = [
        {
            title: 'Blogs',
            text: "Blogging helps me refine my thoughts on what I am doing and what I plan to do. It also helps me get my ideas out there so that others know what I’m about. I try to blog about everything that I am concerned about.",
            ctat: "Read More",
            ctal: "/Blogs"
        },
        {
            title: 'About Me',
            text: "You know the basics but do you want the longer story? Find out in more detail how I’ve ended up transitioning from the built world to the world of technology - and frontend development more specifically..",
            ctat: "Learn More",
            ctal: "/About"
        }
    ]
    //#endregion PAGE DATA
</script>

<div class="mx-auto pb-10 max-w-page w-full flex flex-col items-center sm:divide-y divide-black divide-solid">
    <!-- Hero Image -->
    <article class="relative w-full pt-12 mb-12">
        <div class="w-full bg-gray-200 aspect-video">
            
        </div>
        <div class="max-w-md sm:absolute sm:bottom-6 sm:left-6 sm:bg-white pt-4 sm:p-4 flex flex-col gap-1 sm:drop-shadow-lg">
            <h3>Works in progress</h3>
            <p>DesignWard is living document, changing in composition as my interests and career choices change what I do on a daily basis. The older work in here is architectural in nature whil the newer work is all UI/UX Engineering.</p>
            <a href='/Work'>See the work</a>
        </div>
    </article>
    <!-- Core Competencies -->
    <article class="bg-primary sm:bg-transparent w-screen sm:w-full px-6 sm:px-0 pt-12 pb-12 flex flex-col gap-2">
        <h1 class="text-text-white sm:text-black">Core Competencies</h1>
        <div class="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 lg:gap-2">
            {#each coreCompetencies as competency}
            <div class="flex gap-3 max-w-xs w-full items-center">
                <div class="w-[100px] h-[100px] bg-gray-200 flex-shrink-0"></div>
                <div class="flex flex-col">
                    <h4 class="text-text-white sm:text-black">{competency.title}</h4>
                    <p class="text-text-white sm:text-black">{competency.text}</p>
                    <a class="a-white sm:a-black" href={competency.ctal}>See the work</a>
                </div>
            </div>
            {/each}
        </div>
    </article>
    <!-- Tools & Languages-->
    <article class="w-full pt-12 pb-12 flex">
        <TheToolsAndLanguages />
    </article>
    <!-- Blog & About Pages -->
    <article class="w-screen sm:w-full pb-8 grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-solid divide-black">
        {#each pageSections as page, i}
        <div 
            class="flex flex-col gap-4 justify-between px-6 sm:px-0 pt-8"
            class:sm:pr-8={i % 2 === 0}
            class:pb-12={i % 2 === 0}
            class:sm:pb-4={i % 2 === 0}
            class:bg-primary={i % 2 === 0}
            class:sm:bg-transparent={i % 2 === 0}
            class:sm:pl-8={i % 2 === 1}
            class:pb-4={i % 2 === 1}
        >
            <div class="flex flex-col gap-px">
                <h1 class:text-white={i % 2 === 0} class:sm:text-black={i % 2 === 0}>{page.title}</h1>
                <p class:text-white={i % 2 === 0} class:sm:text-black={i % 2 === 0}>{page.text}</p>
            </div>
            <a class:a-white={i % 2 === 0} class:sm:a-black={i % 2 === 0} href={page.ctal}>{page.ctat}</a>
        </div>
        {/each}
    </article>
</div>