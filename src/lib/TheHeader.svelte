<script lang="ts">
import TabMenu from "$lib/tabs/TabMenu.svelte";
import {
    GoToPath,
    Tabs
} from "$store/RoutingStore";
import { globalInstance, isActive, url } from "@roxi/routify";
import { onDestroy, onMount } from "svelte";

// ensure that tabs are synced up on mount
onMount(() => {
    let tryFindTabIndex = Tabs.sort((t1, t2) => t1.id - t2.id).findIndex(tab => $isActive(tab.path));
    const currentPath = tryFindTabIndex === -1 ? "/" : Tabs[tryFindTabIndex].path;
})

// ensure that the tab changes with the current path
let currentTabId = 0;
const unsubscribeIsActive = isActive.subscribe(() => {
    setCurrentTab();
})
function setCurrentTab() {
    let homeTab = Tabs.find(t => t.path === "/");
    const tryFindTab = Tabs.filter(t => t.path !== "/").find(t => $isActive(t.path));
    currentTabId = tryFindTab != null ? tryFindTab.id : homeTab.id;
}
onDestroy(() => {
    unsubscribeIsActive;
})

// handle output from the TabMenu
function handleTabChange(event: any) {
    const tabId = event.detail;
    const tab = Tabs.find(t => t.id === tabId);
    if (tab) {
        GoToPath(tab.path);
    }
}
</script>

<header class="fixed top-0 right-0 left-0 h-14 bg-white drop-shadow flex justify-between px-3">
    <article id="logo" class="mt-auto mb-2">
        <h2 class="cursor-pointer font-medium" on:click="{()=> GoToPath("/")}">Design Ward</h2>
    </article>
    <TabMenu
        currentTab="{currentTabId}"
        tabNames="{ Tabs.sort((t1, t2) => t1.id - t2.id).map(t => t.displayName) }"
        on:ChangeTab="{handleTabChange}"
    />
</header>
