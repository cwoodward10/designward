<script lang="ts">
    export let context: FragmentContext;

    const aboutMeText: string = `
    Design Ward came about as a play on my last name - Woodward - and how it relates to words such as onward, forward, backward, toward, and even “word”. I like it because it implies directionality without implying which way that direction is pointing. Design Ward is not about the future but it’s also not *not* about the future. The same goes for the past and about a manifest for what to work towards. The words on these pages could point towards all of these things. 

    The goal really is about self-reflection, understanding that it is important to understand where we came from and what our goals are before pushing onwards. For me, while I currently work in technology and software design, I have a background in architectural and urban design. I don’t want to lose touch with that design-based past as I push forward on technology with the team at EvolveLAB even while I understand that limitations and frustrations with the design and construction industry are why I left for technology in the first place. Design Ward is about trying to think through and get closer to reconciling these contradictions (if that is at all possible) as well as exploring some other things along the way. 
    `;
</script>

<main id="main-container" class="mt-14 mx-auto h-screen w-full flex flex-shrink overflow-hidden flex-grow">
    <article class="grid grid-cols-2 gap-4 mx-auto mt-10 max-w-4xl">
        <section class="col-span-1">
            <h2>About DesignWard</h2>
            <p>{aboutMeText}</p>
        </section>
        <section>
            <img id="headshot"
                class="w-full drop-shadow-lg rounded-sm"
                src='./src/assets/images/headshot_md2.jpg' 
                alt="Chris Headshot" />
        </section>
    </article>
</main>

<style>

</style>