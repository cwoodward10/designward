    <script lang="ts">
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
</script>

<div class="mx-auto pb-10 max-w-page w-full flex flex-col items-center gap-12 divide-y divide-black divide-solid">
    <!-- Hero Image -->
    <article class="w-full pt-8">
        <div class="relative w-full bg-gray-200 h-[512px]">
            <div class="max-w-md absolute bottom-6 right-6 bg-white p-4 flex flex-col gap-1 drop-shadow-lg">
                <h3>Works in progress</h3>
                <p>DesignWard is living document, changing in composition as my interests and career choices change what I do on a daily basis. The older work in here in architectural in nature whil the newer work is all UI/UX Engineering.</p>
                <a href='/Work'>See the work</a>
            </div>
        </div>
    </article>
    <!-- Core Competencies -->
    <article class="w-full pt-8 flex flex-col gap-2">
        <h1>Core Competencies</h1>
        <div class="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 lg:gap-2">
            {#each coreCompetencies as competency}
            <div class="flex gap-3 max-w-xs w-full items-center">
                <div class="w-[100px] h-[100px] bg-gray-200 flex-shrink-0"></div>
                <div class="flex flex-col">
                    <h4>{competency.title}</h4>
                    <p>{competency.text}</p>
                    <a href={competency.ctal}>See the work</a>
                </div>
            </div>
            {/each}
        </div>
    </article>
    <!-- Blog & About Pages -->
    <article class="w-full pb-8 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-solid divide-black">
        {#each pageSections as page, i}
        <div 
            class="w-full flex flex-col gap-4 justify-between pt-8 pb-4"
            class:md:pr-8={i % 2 === 0}
            class:md:pl-8={i % 2 === 1}
        >
            <div class="flex flex-col gap-px">
                <h1>{page.title}</h1>
                <p>{page.text}</p>
            </div>
            <a href={page.ctal}>{page.ctat}</a>
        </div>
        {/each}
    </article>
</div>