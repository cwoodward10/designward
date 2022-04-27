import * as _default from '../src/routes/_module.svelte'
import * as _default_About_svelte from '../src/routes/About.svelte'
import * as _default_PlanWard_svelte from '../src/routes/PlanWard.svelte'
import * as _default_index_svelte from '../src/routes/index.svelte'
import * as _default_Blogs_index_svelte from '../src/routes/Blogs/index.svelte'

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
      "id": "_default_About_svelte",
      "name": "About",
      "module": () => _default_About_svelte,
      "file": {
        "path": "src/routes/About.svelte",
        "dir": "src/routes",
        "base": "About.svelte",
        "ext": ".svelte",
        "name": "About"
      },
      "children": []
    },
    {
      "meta": {},
      "id": "_default_Blogs",
      "name": "Blogs",
      "module": false,
      "file": {
        "path": "src/routes/Blogs",
        "dir": "src/routes",
        "base": "Blogs",
        "ext": "",
        "name": "Blogs"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_Blogs_index_svelte",
          "name": "index",
          "module": () => _default_Blogs_index_svelte,
          "file": {
            "path": "src/routes/Blogs/index.svelte",
            "dir": "src/routes/Blogs",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_PlanWard_svelte",
      "name": "PlanWard",
      "module": () => _default_PlanWard_svelte,
      "file": {
        "path": "src/routes/PlanWard.svelte",
        "dir": "src/routes",
        "base": "PlanWard.svelte",
        "ext": ".svelte",
        "name": "PlanWard"
      },
      "children": []
    },
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