<script lang="ts">
    import {Sun, Moon} from 'svelte-heros-v2';
  
    const LIGHT_MODE_CLASS = 'light';
    const LIGHT_MODE_KEY = 'mode';

    let lightMode = false;
    const handleClick = (e: Event) => {
        lightMode = !lightMode;
        
        const htmlEl = document.querySelector('html');
        htmlEl?.classList.toggle(LIGHT_MODE_CLASS, lightMode);
        
        localStorage.setItem(LIGHT_MODE_KEY, lightMode ? 'light' : 'dark');
    }
  </script>
  
  <button 
      on:click={handleClick}
      aria-label="Toggle light or dark mode"
  >
      <div class="modes">
        <div class="icon moon">
            <Moon size=28 />
        </div>
        <div class="icon sun">
            <Sun size=28 />
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

          & :global(svg path) {
            transition: color 300ms ease-in-out;
          }

          &:hover :global(svg path) {
              color: var(--color-accent-primary);
          }
        }
        button .modes {
            position: absolute;
            top: 0;
            left: 50%;
            translate: -50% -2px;

            height: fit-content;
            width: fit-content;

            transition: translate 300ms ease-in-out;
        }
        :global(html.light) button .modes {
            translate: -50% calc(-50% - 2px);

            &:hover :global(svg path) {
              color: var(--color-secondary);
          }
        }
        button .modes .icon {
            height: 40px;
            width: 40px;
            padding: 6px;
        }
  </style>