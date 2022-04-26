<script lang="ts">
import { onMount } from "svelte";


let message = "Not Loaded";
onMount(() => {
    setTimeout(() => {
        message = "Loaded Successfully!"
    }, 1000);
})
</script>
<div class="p-10">
    <h1>Hello World</h1>
    <h5>SubTitle</h5>
    <p>{message}</p>
</div>