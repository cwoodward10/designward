<script lang="ts">
    import TabMenu from "$lib/menus/tabs/TabMenu.svelte";
    import { languageCategories } from "$modules/layoutHelpers/ToolsAndLanguagesHelpers";

    const categoryNames = languageCategories.map(c => c.name);
    let currentCategoryIndex = 0;

    $: currentCategory = languageCategories[currentCategoryIndex] || languageCategories[0];
</script>

<section class="p-0 w-full flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-3 lg:gap-5">
    <div class="bg-gray-200 hidden md:flex aspect-square">

    </div>

    <div class="flex flex-col gap-3">
        <h1 class="md:leading-none px-1">Languages and Tools</h1>
        <TabMenu 
            tabNames={categoryNames} 
            currentTab={currentCategoryIndex} 
            style={'pill'}
            on:ChangeTab={e => currentCategoryIndex = e.detail}
        />

        <div class="bg-gray-200 flex aspect-square md:hidden">

        </div>

        <div class="px-1 flex flex-col gap-5">
            <p class="leading-relaxed">{currentCategory.description}</p>
            {#if currentCategory.projectUrls.length > 0}
            <div class="flex flex-col gap-1">
                <h5>Sample Projects</h5>
                <ol class="flex flex-col gap-0">
                    {#each currentCategory.projectUrls as project}
                    <li>
                        <a href={project.url}>{project.name}</a>
                    </li>
                    {/each}
                </ol>
            </div>
            {/if}
        </div>
    </div>
</section>