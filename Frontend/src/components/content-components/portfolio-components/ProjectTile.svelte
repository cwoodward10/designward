<script lang="ts">
    import type { BasicProjectData } from "./types";

    export let project: BasicProjectData;
</script>

<a 
    class="project-tile" 
    title={project.title}
    href={project.url}
    target={project.url.includes('https') ? '_blank' : '_self'}
>
    <img src={project.image} alt={`${project.title} image`} />
    <p class="project-title small">{project.title}</p>
    <p class="project-medium small">{project.medium}</p>
</a>