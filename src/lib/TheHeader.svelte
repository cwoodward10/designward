<script lang="ts">
import TabMenu from "$lib/tabs/TabMenu.svelte";
import { isActive } from "@roxi/routify";
import { onMount } from "svelte";

const tabNames = [
    'Home',
    'PlanWard',
    'Blogs',
    'About'
]
let currentTab = 0;

onMount(() => {
    let tryFindTabIndex = tabNames.findIndex(name => $isActive(`/${name}`));
    currentTab = tryFindTabIndex === -1 ? 0 : tryFindTabIndex;
})

function handleTabChange(event) {
    changeTab((event as any).detail);
}
function changeTab(tabIndex: number) {
    currentTab = tabIndex;

    const gotoPath = currentTab === 0 ? "/" : `/${tabNames[currentTab]}`;
    history.pushState(null, "", gotoPath);
}
</script>

<header class="fixed top-0 right-0 left-0 h-14 bg-white drop-shadow flex justify-between px-3">
    <article id="logo" class="my-auto">
        <h3 class="cursor-pointer" on:click="{()=> changeTab(0)}">Design Ward</h3>
    </article>
    <TabMenu
        currentTab="{currentTab}"
        tabNames="{tabNames}"
        on:ChangeTab="{handleTabChange}"
        />
        </header>
