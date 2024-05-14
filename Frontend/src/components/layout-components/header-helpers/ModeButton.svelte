<script lang="ts">
    import {Sun, Moon} from 'svelte-heros-v2';

    import { onMount } from "svelte";
  
    const LIGHT_MODE_CLASS = 'light';
    const LIGHT_MODE_KEY = 'mode';

    let lightMode = false;
    onMount(() => {
        lightMode = checkMode();
    })

    const handleClick = (e: Event) => {
        lightMode = !lightMode;
        
        const htmlEl = document.querySelector('html');
        htmlEl?.classList.toggle(LIGHT_MODE_CLASS, lightMode);
        
        localStorage.setItem(LIGHT_MODE_KEY, lightMode ? 'light' : 'dark');
    }

    function checkMode() {
        const htmlEl = document.querySelector(`html`);
        if (!htmlEl) {
            return true;
        }
        return htmlEl.classList.contains(LIGHT_MODE_CLASS);
    }
  </script>
  
  <button 
      class:light={lightMode}
      on:click={handleClick}
      aria-label="Toggle light or dark mode"
  >
      <div class="modes">
        <div class="icon">
            <Sun size=28 />
        </div>
        <div class="icon">
            <Moon size=28 />
        </div>
      </div>
  </button>
  
  <style>
      button {
          height: 40px;
          width: 40px;
          border-radius: 100%;
  
          border: var(--color-text) 2px solid;
  
          color: var(--color-text);
  
          font-family: var(--font-heading);
          font-size: 10px;
          line-height: 100%;
          font-weight: 400;
          white-space: nowrap;
          text-transform: uppercase;
  
          position: relative;
  
          cursor: pointer;

          overflow: hidden;
  
          transition-property: color;
          transition-duration: 200ms;
          transition-timing-function: ease-out;

          & svg path {
            transition: color 300ms ease-in-out;
          }

          &:hover svg path {
              color: var(--color-secondary);
          }
        }
        button .modes {
            position: absolute;
            top: 0;
            left: 50%;
            translate: -50% calc(-50% - 2px);

            height: fit-content;
            width: fit-content;

            transition: translate 300ms ease-in-out;
        }
        button.light .modes {
            translate: -50% -2px;
        }
        button .modes .icon {
            height: 40px;
            width: 40px;
            padding: 6px;
        }
  </style>