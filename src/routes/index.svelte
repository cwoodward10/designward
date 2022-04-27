<script lang="ts">
import { onMount } from "svelte";


let message: string = "Not Loaded";
onMount(() => {
    setTimeout(() => {
        message = "Loaded Successfully!"
    }, 1000);
})
</script>

<main id="main-container" class="mx-auto mt-4 mb-auto max-w-lg">
    <div class="card-playful-primary">
        <h1>Hello World</h1>
        <h5>SubTitle</h5>
    </div>
    <p>{message}</p>
</main>