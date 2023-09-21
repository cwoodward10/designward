export type languageCategory = {
    name: string,
    description: string,
    projectUrls: {
        name: string,
        url: string
    }[]
}

export const languageCategories: languageCategory[] = [
    {
        name: 'All',
        description: "I've cultivated a unique skillset throughout my life: I'm a capable designer and engineer. I'm comfortable in 2D and 3D - working through interactions and details at both dimensions. And I can fluidly switch between these disparate environments - talking in a language that both groups can understand. The languages and tools shown here, be they Typscript and Svelte or Rhino and Illustrator, show just a sample of what I've worked with along my journey. ",
        projectUrls: [
            {
                name: 'test',
                url: 'test'
            },
            {
                name: 'test',
                url: 'test'
            },
            {
                name: 'test',
                url: 'test'
            }
        ]
    },
    {
        name: 'Engineering',
        description: "This is the core of what I do. I specialize in frontend web-development at Square - using HTML, CSS, Javascript (with Svelte when useful) to build fun, custom web pages and productivity plugins for my team. However I have professional experience working across the full web stack, within other frameworks such as Vue, and even within desktop environments. My first development projects at EvolveLAB, for instance, were with C# and Python. ",
        projectUrls: []
    },
    {
        name: 'Computation',
        description: "Creating parametric design solutions for Rhino with Grasshopper was my gateway to text-based development. I took complex, visual coding graphs in Grasshopper - and later in Dynamo when working at EvolveLAB - to another level with custom Python and C# nodes. Eventually, I was making my own node packages and even fully, fledged plugins for those environments and Rhino and Revit themselves. It may not be where I am now, but computational design will forever be a part of me.",
        projectUrls: []
    },
    {
        name: '3D',
        description: "I'm a 3D native. I've spent countless hours building 3D models between school and professional practice. I'm talking Rhino, Sketchup, and Revit. I've done it all and I've done it in a variety of ways: manually and with computational help from Grasshopper and Dynamo. I'm even quite comfortable coding 3D solutions with C# and Python.While I don't do much 3D modeling these days but it is like riding a bike, when I get back in it, it is like a never left.",
        projectUrls: []
    },
]