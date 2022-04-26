import * as _default from '../src/routes/_module.svelte'
import * as _default_index_svelte from '../src/routes/index.svelte'

export default {
  "meta": {},
  "id": "_default",
  "module": () => _default,
  "rootName": "default",
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_index_svelte",
      "name": "index",
      "module": () => _default_index_svelte,
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "children": []
    }
  ]
}