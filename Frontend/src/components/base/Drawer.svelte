<script lang="ts">
    export let startOpen = true;
    export let maxHeight: number = 1000;
    export let maxHeightUnit: string = 'px';

    let isOpen = startOpen;
    const handleClick = () => {
        console.log('click', isOpen);
        isOpen = !isOpen;
    }
</script>

<div class="drawer {isOpen ? "open" : ""}" aria-expanded={isOpen} style="--max-height: {maxHeight}{maxHeightUnit}">
    <button class="title" on:click={() => handleClick()}>
        <slot name="title"></slot>
    </button>
    <div class="content">
        <slot name="content"></slot>
    </div>
</div>

<style lang="scss">
    .drawer {
        display: block;

        .title {
            display: flex;
            gap: 1rem;
            align-items: center;

            margin-bottom: 1rem;

            &::after {
                content: "";

                display: block;
                height: 0.75rem;
                aspect-ratio: 1 / 1;

                border-top: var(--color-offwhite) 3px solid;
                border-left: var(--color-offwhite) 3px solid;

                transform-origin: 50% 50%;
                rotate: 45deg;
                transition: rotate 200ms ease-in-out;
            }
        }

        .content {
            display: none;
            overflow: hidden;

            max-height: 0;

            transition-property: max-height, display;
            transition-duration: 600ms;
            transition-behavior: allow-discrete;
        }

        &.open {
            .title::after {
                rotate: -135deg;
            }

            .content {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                opacity: 1;
                max-height: var(--max-height, 1000px);
            }
        }

    }
</style>