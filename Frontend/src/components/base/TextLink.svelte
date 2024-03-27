<script lang="ts">
    export let text: string;
    export let href: string;
    export let arrow = false;
</script>

<a 
    class="text-link"
    class:arrow={arrow}
    href={href}
>
    {text}
</a>