<script lang="ts">
import TabMenu from "$lib/tabs/TabMenu.svelte";

    const tabNames = [
        'PlanWard',
        'Blog',
        'About'
    ]
    let currentTab = 0;
    function handleTabChange(event) {
		currentTab = event.detail;
	}
</script>

<header class="h-14 bg-white drop-shadow flex justify-between px-3">
    <article id="logo" class="my-auto">
        <h3>Design Ward</h3>
    </article>
    <TabMenu 
        currentTab="{currentTab}" 
        tabNames="{tabNames}"
        on:ChangeTab="{handleTabChange}"
    />
</header>