<script lang="ts">
import TabMenu from "$lib/tabs/TabMenu.svelte";
import {
    CurrentPath,
    SetCurrentPath,
    Tabs
} from "$store/RoutingStore";
import { isActive } from "@roxi/routify";
import { onDestroy, onMount } from "svelte";

// ensure that tabs are synced up on mount
onMount(() => {
    let tryFindTabIndex = Tabs.sort((t1, t2) => t1.id - t2.id).findIndex(tab => $isActive(tab.path));
    const currentPath = tryFindTabIndex === -1 ? "/" : Tabs[tryFindTabIndex].path;
    CurrentPath.set(currentPath);
})

// ensure that the tab changes with the current path
let currentTabId = 0;
const unsubscribeCurrentPath = CurrentPath.subscribe((currentPath) => {
    let homeTab = Tabs.find(t => t.path === "/");
    const tryFindTab = Tabs.filter(t => t.path !== "/").find(t => currentPath.includes(t.path));
    currentTabId = tryFindTab != null ? tryFindTab.id : homeTab.id;
})
onDestroy(() => {
    unsubscribeCurrentPath;
})

// handle output from the TabMenu
function handleTabChange(event: any) {
    const tabId = event.detail;
    const tab = Tabs.find(t => t.id === tabId);
    if (tab) {
        SetCurrentPath(tab.path);
    }
}
</script>

<header class="fixed top-0 right-0 left-0 h-14 bg-white drop-shadow flex justify-between px-3">
    <article id="logo" class="my-auto">
        <h3 class="cursor-pointer" on:click="{()=> SetCurrentPath("/")}">Design Ward</h3>
    </article>
    <TabMenu
        currentTab="{currentTabId}"
        tabNames="{ Tabs.sort((t1, t2) => t1.id - t2.id).map(t => t.displayName) }"
        on:ChangeTab="{handleTabChange}"
    />
</header>
