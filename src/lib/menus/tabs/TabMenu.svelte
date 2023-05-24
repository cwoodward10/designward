<script lang="ts">
import {tweened} from 'svelte/motion'
import TabItem from "./TabItem.svelte";
import { createEventDispatcher } from 'svelte';

export let tabNames;
export let currentTab = 0;
	
const currentTabIndicatorPosition = tweened(0, ({
        duration: 150,
}));
$: {
	currentTabIndicatorPosition.set(currentTab * 100);
}
	
const changeTabDispatch = createEventDispatcher();
function handleClick(event) {	
	changeTabDispatch('ChangeTab', event.detail);
}
</script>

<menu class="tab-menu relative grid" style:grid-template-columns="repeat({tabNames.length}, 1fr)">
    {#each tabNames as tabName, index}
    <TabItem
        tabIndex="{index}"
        tabName="{tabName}"
        on:clicked="{handleClick}"
        />
    {/each}
    <span 
        class="absolute bottom-0 h-0.5 bg-secondary" 
        style:width="{1/tabNames.length * 100}%"
        style:transform="translateX({$currentTabIndicatorPosition}%)"
    />
</menu>
