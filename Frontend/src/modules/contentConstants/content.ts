export type Project = {
    name: string,
    url?: string | string[]
}

export type DigitalProject = Project & {
    name: string;
    url: string;
    tagline: string;
}
export const DigitalProjects: DigitalProject[] = [
    {
        name: "Reference Health Testimonial",
        url: "https://www.squareup.com/partnerships/referencehealth",
        tagline: "The initial use of a custom built template page to discuss the success of Reference Health's partnership with Square."
    },
    {
        name: "2 Step Verification",
        url: "https://www.squareup.com/campaign/two-step-verification", 
        tagline: "A custom web page to inform customers that Square takes their security seriously."
    },
    {
        name: "Helix",
        url: "https://www.evolvelab.io/helix",
        tagline: `EvolveLAB's first product on which I led Frontend Architecture and Development.`,
    },
    {
        name: "Youtube Tutorials",
        url: "https://youtube.com/playlist?list=PLkZ1xRr4bgWGHugfZUYGQYlwPIJiVjhls&si=AOPo_OFmcTe_FVKo",
        tagline: "Various Youtube tutorials on Computation Design done at EvolveLAB.",
    },
    {
        name: "Figma Plugin Template",
        url: "./figma-plugins",
        tagline: "A Svelte + Vite + Figma Plugin template for all to use.",
    },
]
export const CodeBitsAndBobs: Project[] = [
    {
        name: "CSS-only Jumping Cards",
        url: "https://codepen.io/cwoodward10/pen/ZEdXgZN"
    },
    {
        name: "Draggable To-do",
        url: "https://codepen.io/cwoodward10/pen/yLvedzq"
    }
]

export type RinkaProject = Project & {
    imageUrl: string,
}
export const RinkaProjects: RinkaProject[] = [
    {
        name: "Belair Cantina",
        url: "https://www.rinka.com/belair",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/5ba9c8ba92441b1edbb4467a/1539192535150-FN7VJ47DSVVML4PZ54K0/Belair-2.jpg?format=500w"
    }, 
    {
        name: "F3 Marina",
        url: "https://www.rinka.com/f3-marina-1",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/5ba9c8ba92441b1edbb4467a/1636750940210-AH9RT84CNUR1H3JAQMBU/IMG_3259.JPG?format=500w"
    },
    {
        name: "Riverside North",
        url: "https://www.rinka.com/riverside-north",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/5ba9c8ba92441b1edbb4467a/1578436413168-HR9NF3L2ZMAG0VC3NDWQ/LAX-AERIAL+SW.jpg?format=500w"
    },
    {
        name: "The Yards",
        url: "https://www.rinka.com/yards",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/5ba9c8ba92441b1edbb4467a/1608069877122-CPN0TQS6SGCF9U460F0X/06_THE+YARDS+%2802%29.jpg?format=500w"
    },
    {
        name: "The Lokal",
        url: "https://www.rinka.com/84south",
        imageUrl: "https://images.squarespace-cdn.com/content/v1/59e9ff13edaed8c744918181/1512022105770-S1MCCA9WG4AFYMDKXB0C/AERIAL+1.jpg?format=500w"
    }
]