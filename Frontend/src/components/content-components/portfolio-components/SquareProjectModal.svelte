<script lang="ts">
	import { type SquareProject } from './../../../modules/contentConstants/content.ts';
	import type { SquareProject } from "@modules/contentConstants/content";
    
    let show = false;
    let currentProject: SquareProject | undefined = undefined;

    function close(route: boolean = false, replace: boolean = false) {
        show = false;
        currentProject = undefined;

        if (route && !replace) {
            history.pushState({}, '', location.pathname);
            return;
        }
        if (replace) {
            history.replaceState({}, '', location.pathname);
        }
    }

    const handlePopState = (e: PopStateEvent) => {
        show = e.state != null;
        currentProject = e.state;
    }
    
    const handlePillClick = (e: Event) => {
        const raw = (e.target as any)?.getAttribute("data-state");
        const href = (e.target as any)?.href;
        if (!raw || !href) {
            return;
        }

        e.preventDefault();

        try {
            const project = JSON.parse(raw) as SquareProject;;
            const url = project.name.toLocaleLowerCase().replace(' ', '-');

            history.pushState(project, '', href);

            show = true;
            currentProject = project;
        } catch(error) {
            console.warn(error);
            close(false, true);
        }
    }

    const pills = document.querySelectorAll('a.pill');
    pills.forEach(p => {
        p.addEventListener('click', (e) => { handlePillClick(e) });
    });

    if (location.search) {
        try {
            const params = new URLSearchParams(location.search);
            const projectName = params.get('project');
    
            const pill = document.querySelector(`#${projectName}`);
            const data = pill?.getAttribute('data-state');
            if (pill && data) {
                currentProject = JSON.parse(data);
                show = true;
            } else {
                close(false, true);
            }
        } catch (e) {
            console.warn(e);
            close(false, true);
        }
    }
</script>

<svelte:window on:popstate={(e) => { handlePopState(e); }} />

{#if show && currentProject}
<div class="modal" role="dialog">
    <div class="content">
        <div>
            <button class='close' on:click={() => { close(true) }} name="close" />
        </div>
        <div class="image-container">
            <img src={currentProject.image.src} />
        </div>
        <aside>
            <h2 class="style-h3">{currentProject.name}</h2>
        </aside>
    </div>
</div>
<div class="backdrop" />
{/if}

<style lang="scss">
    @use '@assets/styles/sass/breakpoints.scss' as media;

    :global(html:has(.modal) body) {
        overflow: hidden;
    }
    :global(html:has(.modal) main) {
        pointer-events: none;
        overflow: hidden;
    }

    @include media.at('medium') {
        .backdrop {
            position: fixed;
            z-index: 101;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            background-color: color-mix(in srgb, var(--color-text) 50%, transparent 50%);
            backdrop-filter: blur(10px);
        }
    }

    .modal {
        position: fixed;
        z-index: 102;
        top: 50%;
        left: 50%;
        translate: -50% -50%;

        max-height: 100svh;
        max-width: 100vh;
        height: 100%;
        width: 100%;

        padding: 1rem 2rem 2rem;

        background-color: var(--color-background);

        @include media.at('medium') {
            max-height: 80svh;
            max-width: 80vw;
            padding: 1rem 3rem 3rem;
        }
    }

    div:has(>.close) {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: flex-end;
    }

    aside {
        opacity: 1;
        animation: none;
    }

    .close {
        position: relative;

        display: block;

        height: 2rem;
        aspect-ratio: 1 / 1;

        border: var(--color-text) 1px solid;
        border-radius: 100%;

        &::after, &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            
            display: block;
            
            width: 80%;
            height: 1px;
            background-color: var(--color-text);
        }
        &::before {
            rotate: 45deg;
        }
        &::after {
            rotate: -45deg;
        }

        @include media.at('medium') {
            height: 2.5rem;
        }
    }
</style>