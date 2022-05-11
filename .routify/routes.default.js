import * as _default from '../src/routes/_module.svelte'
import * as _default_About_svelte from '../src/routes/About.svelte'
import * as _default_PlanWard_svelte from '../src/routes/PlanWard.svelte'
import * as _default_index_svelte from '../src/routes/index.svelte'
import * as _default_Blogs_index_svelte from '../src/routes/Blogs/index.svelte'
import * as _default_Work_Architecture_svelte from '../src/routes/Work/Architecture.svelte'
import * as _default_Work_Helix_svelte from '../src/routes/Work/Helix.svelte'
import * as _default_Work_Svelte_svelte from '../src/routes/Work/Svelte.svelte'
import * as _default_Work_index_svelte from '../src/routes/Work/index.svelte'

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
      "id": "_default_Work",
      "name": "Work",
      "module": false,
      "file": {
        "path": "src/routes/Work",
        "dir": "src/routes",
        "base": "Work",
        "ext": "",
        "name": "Work"
      },
      "children": [
        {
          "meta": {},
          "id": "_default_Work_Architecture_svelte",
          "name": "Architecture",
          "module": () => _default_Work_Architecture_svelte,
          "file": {
            "path": "src/routes/Work/Architecture.svelte",
            "dir": "src/routes/Work",
            "base": "Architecture.svelte",
            "ext": ".svelte",
            "name": "Architecture"
          },
          "children": []
        },
        {
          "meta": {},
          "id": "_default_Work_Helix_svelte",
          "name": "Helix",
          "module": () => _default_Work_Helix_svelte,
          "file": {
            "path": "src/routes/Work/Helix.svelte",
            "dir": "src/routes/Work",
            "base": "Helix.svelte",
            "ext": ".svelte",
            "name": "Helix"
          },
          "children": []
        },
        {
          "meta": {},
          "id": "_default_Work_Svelte_svelte",
          "name": "Svelte",
          "module": () => _default_Work_Svelte_svelte,
          "file": {
            "path": "src/routes/Work/Svelte.svelte",
            "dir": "src/routes/Work",
            "base": "Svelte.svelte",
            "ext": ".svelte",
            "name": "Svelte"
          },
          "children": []
        },
        {
          "meta": {},
          "id": "_default_Work_index_svelte",
          "name": "index",
          "module": () => _default_Work_index_svelte,
          "file": {
            "path": "src/routes/Work/index.svelte",
            "dir": "src/routes/Work",
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