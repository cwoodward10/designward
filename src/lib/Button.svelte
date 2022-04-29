<script lang="ts">
	import { createEventDispatcher, tick } from 'svelte';
	
    export let color = '#00cccc';
    export let secondaryColor = 'white';
    export let textColor = 'black';
    export let thickness = 2;
    export let filled = true;
    export let height = -1;
    export let width = -1;
    export let circle = false;

    $: cssVarStyles = `
        --btn-color:${color};
        --btn-color-secondary:${secondaryColor};
        --btn-color-text:${textColor};
        --btn-border-thickness:${thickness}px;
        --btn-height:${height}px;
        --btn-width:${width}px;
    `;

    let clickDispatch = createEventDispatcher();

	let showRipple = false;
	let rippleWidth = '0';
	let rippleHeight= '0';
	let rippleLeft = '0';
	let rippleTop = '0';
	
	async function createRipple(event: MouseEvent) {
		if (showRipple) {
			showRipple = false;
			await tick();
		}
		showRipple = true;
		
		const button = event.target as HTMLLIElement;
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

        console.log(event);

		rippleWidth = `${diameter}px`;
		rippleHeight= `${diameter}px`;
        let rect = button.getBoundingClientRect();
		rippleLeft = `${event.clientX - rect.left - radius}px`;
		rippleTop = `${event.clientY - rect.top - radius}px`;
        await tick();
	}

    async function handleClick(event: MouseEvent) {
        await createRipple(event);
        clickDispatch('click');
    }
</script>

<button
	class="relative px-4 py-2 drop-shadow-lg overflow-hidden z-0 text-color"
    style="{cssVarStyles}"
    class:filled="{filled}"
    class:outlined="{!filled}"
    class:rounded-lg="{!circle}"
    class:rounded-full="{circle}"
    class:set-height="{height !== -1}"
    class:set-width="{width !== -1}"
	on:click="{handleClick}"
>
	<slot>Hello World</slot>
	{#if showRipple}
	<span 
        class="absolute ripple z-50 -translate-y-1/2 -translate-x-1/2" 
        style:height={rippleHeight} 
        style:width={rippleWidth} 
        style:top={rippleTop} 
        style:left={rippleLeft} 
    />
	{/if}
</button>

<style>
    button:active {
        background-color: var(--btn-color);
    }
	button.outlined:active {
        background-color: var(--btn-color-secondary);
	}
	.text-color {
		color: var(--btn-color-text);
	}
    .filled {
        background-color: var(--btn-color);
    }
    .outlined {
        border-width: var(--btn-border-thickness);
        border-style: solid;
        border-color: var(--btn-color);
        background-color: var(--btn-color-secondary);
    }
    .set-height {
        height: var(--btn-height);
    }
    .set-width {
        width: var(--btn-width)
    }

	span.ripple {
        background-color: var(--btn-color);
        opacity: 50%;
		border-radius: 50%;
		transform: scale(0);
		animation: ripple 600ms linear;
        filter: brightness(150%);
	}

	@keyframes ripple {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}
</style>