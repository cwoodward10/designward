<script lang="ts">
    import TabMenu from "$lib/menus/tabs/TabMenu.svelte";
    import HamburgerMenu from "$lib/menus/HamburgerMenu.svelte";
        
    import { onDestroy, onMount } from "svelte";

    import { GoToPath, Tabs} from "$store/RoutingStore";

    import { isActive } from "@roxi/routify";
    import type { Router } from "@roxi/routify/typings/lib/runtime/Router/Router";

    export let router: Router = null;

    const homeTab = Tabs.find(t => t.id === 0);
    let activeTab = homeTab;
    $: currentTabId = activeTab.id;
    $: currentTabName = activeTab.id === 0 ? "DesignWard" : activeTab.displayName;
    $: currentTabDescription = activeTab.description;

    // handle sticky headers
    let canShowSticky = currentTabId === 0 ? false : true;
    let showSticky = canShowSticky;
    let prevY = 0;
    let scrollY;
    $: {
        if (scrollY < 750) {
            showSticky = canShowSticky;
        } else {
            showSticky = canShowSticky && (prevY > scrollY)
        }
        prevY = scrollY;
    }

    let pageHeader: HTMLElement;
    $: {
        if (pageHeader) {
            canShowSticky = false;
            createHeaderObserver();
        } else {
            observer?.disconnect();
            canShowSticky = true;
        }
    }
    let observer: IntersectionObserver;
    onMount(() => {
        if (currentTabId === 0) {
            createHeaderObserver();
        }
    })
    function createHeaderObserver() {
        observer = new IntersectionObserver((entries, observer) => {
            if (entries.length > 0) {
                canShowSticky = !entries[0].isIntersecting;
            }
        }, {rootMargin: '0% 0px 0px'});
        observer.observe(pageHeader);
    }

    // ensure that the tab changes with the current path
    function setCurrentTab() {
        activeTab = Tabs.filter(t => t.id !== 0).find(t => $isActive(t.path)) || homeTab;
    }
    const unsubscribeIsActive = isActive.subscribe(() => {
        setCurrentTab();
    })
    onDestroy(() => {
        unsubscribeIsActive;
    })

    // handle output from the TabMenu
    function handleTabChange(event: any) {
        const tabId = event.detail;
        const tab = Tabs.find(t => t.id === tabId);
        if (tab) {
            GoToPath(router, tab.path);
        }
    }
</script>

<svelte:window bind:scrollY={scrollY} />

<!-- Page Header -->
{#if currentTabId === 0}
<header 
    class="mx-auto pt-10 md:pt-20 px-6 w-full"
    bind:this={pageHeader}
>
    <div class="mx-auto pb-8 max-w-page w-full flex flex-col sm:flex-row justify-between md:items-center gap-4 border-b border-primary border-solid">
        <a class="no-underline" href="/">
            <h1 class="text-6xl sm:text-[4.25rem] md:text-hero leading-none">{currentTabName}</h1>
        </a>
        <div class="flex flex-col gap-2">
            <p class="max-w-[300px] line-clamp-2 text-left sm:text-right">{currentTabDescription}</p>
            <div class="sm:ml-auto mr-0 flex items-center gap-2 divide-x divide-primary divide-solid">
                <a class="no-underline hover:underline font-medium" href="/Work">Work</a>
                <a class="no-underline hover:underline font-medium pl-2" href="/Blogs">Blogs</a>
                <a class="no-underline hover:underline font-medium pl-2" href="/About">About Me</a>
            </div>
        </div>
    </div>
</header>
{/if}
<!-- Sticky Header -->
<header 
    id="top-header"
    class="z-50 fixed top-0 left-0 right-0 inline-flex bg-offwhite shadow"
    class:show={canShowSticky && showSticky}
>
    <div
        id="header-content" 
        class="mx-auto w-full inline-flex justify-between items-end px-3"
    >
        <article id="logo" class="mt-auto mb-1">
            <a class="no-underline" href="/">
                <h2 class="cursor-pointer font-medium">Design Ward</h2>
            </a>
        </article>
        <div id="hamburger" class="inline-flex my-auto sm:hidden">
            <HamburgerMenu 
                menuItems={Tabs.sort((t1, t2) => t1.id - t2.id).map(t => t.displayName)}
                thickness={3}
                height={20}
                width={24}
                color={'var(--color-primary)'}
                on:menuClick={handleTabChange}
            />
        </div>
        <div id="tab-menu" class="hidden sm:inline-flex h-full mt-auto mb-0">
            <TabMenu
                currentTab={currentTabId}
                tabNames={Tabs.sort((t1, t2) => t1.id - t2.id).map(t => t.displayName)}
                on:ChangeTab={handleTabChange}
            />
        </div>
    </div>
</header>

<style>
    #top-header {
        transform: translateY(-100%);
        transition: transform 300ms ease-in;
    }
    #top-header.show {
        transform: translateY(0)
    }
</style>