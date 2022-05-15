

export default {
  "meta": {},
  "id": "_default",
  "module": () => import('../src/routes/_module.svelte'),
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_About_svelte",
      "name": "About",
      "module": () => import('../src/routes/About.svelte'),
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
          "module": () => import('../src/routes/Blogs/index.svelte'),
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
      "module": () => import('../src/routes/PlanWard.svelte'),
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
          "module": () => import('../src/routes/Work/Architecture.svelte'),
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
          "module": () => import('../src/routes/Work/Helix.svelte'),
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
          "module": () => import('../src/routes/Work/Svelte.svelte'),
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
          "module": () => import('../src/routes/Work/index.svelte'),
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
      "module": () => import('../src/routes/index.svelte'),
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