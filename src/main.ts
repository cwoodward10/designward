import App from './App.svelte'

import '$assets/styles/reset.css';
import '$assets/styles/styles.css';
import '$assets/styles/tailwind.css';

const app = new App({
  target: document.getElementById('app')
})

export default app
