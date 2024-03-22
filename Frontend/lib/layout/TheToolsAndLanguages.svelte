<script lang="ts">
    import TabMenu from "$lib/menus/tabs/TabMenu.svelte";
    import { languageCategories } from "$modules/layoutHelpers/ToolsAndLanguagesHelpers";

    let currentCategoryIndex = 0;
    let categories = languageCategories.map(c => c.name);
    let currentCategory = categories[currentCategoryIndex] || 0;
</script>

<div class="p-0 w-full flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-3 lg:gap-5">
    <section class="flex flex-col gap-3 md:hidden">
        <h1>Languages and Tools</h1>
        <TabMenu 
            tabNames={categories} 
            currentTab={currentCategoryIndex} 
            style={'pill'}
            on:ChangeTab={e => currentCategoryIndex = e.detail}
        />
    </section>

    <section class="bg-gray-200 flex aspect-square">

    </section>

    <section class="flex flex-col">
        <div  class="hidden md:flex flex-col gap-5">
            <h1>Languages and Tools</h1>
            <TabMenu 
                tabNames={categories} 
                currentTab={currentCategoryIndex} 
                style={'pill'}
                on:ChangeTab={e => currentCategoryIndex = e.detail}
            />
        </div>
    </section>
</div>