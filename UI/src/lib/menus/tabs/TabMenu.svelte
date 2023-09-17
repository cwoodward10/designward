<script lang="ts">
import {tweened} from 'svelte/motion'
import TabItem from "./TabItem.svelte";
import { createEventDispatcher } from 'svelte';

export let tabNames: string[];
export let currentTab = 0;
export let style: 'tabs' | 'pill' = 'tabs';

$: isPill = style === 'pill';
	
const currentTabIndicatorPosition = tweened(0, ({
        duration: 150,
}));
$: {
	currentTabIndicatorPosition.set(currentTab * 100);
}
	
const changeTabDispatch = createEventDispatcher();
function handleClick(event: CustomEvent) {	
	changeTabDispatch('ChangeTab', event.detail);
}
</script>

<menu 
    class={`tab-menu relative grid ${isPill ? 'border border-solid border-primary rounded-md' : ''}`}
    style:grid-template-columns="repeat({tabNames.length}, 1fr)"
>
    {#each tabNames as tabName, index}
    <TabItem
        tabIndex={index}
        tabName={tabName}
        style={style}
        selected={currentTab === index}
        on:clicked={handleClick}
    />
    {/each}
    <span 
        class={
            `absolute bottom-0 ${isPill ? 'top-0 rounded bg-primary' : 'bg-secondary h-0.5'}`
        }
        style:width={`${1/tabNames.length * 100}%`}
        style:transform={`translateX(${$currentTabIndicatorPosition}%)`}
    />
</menu>
