<script lang="ts">
    import type { BasicProjectData } from "./types";

    export let project: BasicProjectData;
</script>

<li>
    <hgroup>
        <h4 class="project-title">{project.title}</h4>
        <p class="x-small project-tagline">{project.employer} | {project.role}</p>
    </hgroup>
    <p class="project-desc">{project.description}</p>
    <a class="arrow" href={project.url} target="_blank">See the project</a>
</li>

<style>
    hgroup {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: baseline;

        margin-bottom: 0.5rem;

        & h4, & p {
            white-space: nowrap;
            line-height: 100%;

            max-width: 50em;
        }
    }

    .project-desc {
        max-width: 40em;
    }

    a {
        padding-top: 0.25em;
    }
</style>