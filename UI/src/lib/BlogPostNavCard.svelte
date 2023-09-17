<script lang="ts">
import { createEventDispatcher } from "svelte";

export let src = "";
export let alt = "";
export let text = "";

let clickDispatch = createEventDispatcher();
function handleClick(event: MouseEvent) {
    event.preventDefault();
    clickDispatch('click')
}
</script>

<article id="main"
        class="flex flex-row flex-shrink-0 justify-start space-x-3 max-w-xl p-2 transition-all overflow-hidden rounded-md">
    <div class="flex flex-shrink-0 w-36 h-36 object-contain">
        <img class="h-36 object-cover" 
            src={src} 
            alt={alt} />
    </div>
    <div class="flex flex-col justify-between h-36 space-y-3">
        <p class="flex h-full max-h-full overflow-hidden text-ellipsis" >{text}</p> 
        <div class="flex flex-shrink-0">
            <a class="max-w-prose" on:click="{handleClick}" href="/" alt={alt}>Read More</a>
        </div>
    </div>
</article>