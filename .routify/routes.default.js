

export default {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "asyncModule": () => import('../src/routes/_module.svelte'),
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_About_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "About",
      "file": {
        "path": "src/routes/About.svelte",
        "dir": "src/routes",
        "base": "About.svelte",
        "ext": ".svelte",
        "name": "About"
      },
      "asyncModule": () => import('../src/routes/About.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_Blogs",
      "_regex": {},
      "_paramKeys": {},
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
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/Blogs/index.svelte",
            "dir": "src/routes/Blogs",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/Blogs/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_PlanWard_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "PlanWard",
      "file": {
        "path": "src/routes/PlanWard.svelte",
        "dir": "src/routes",
        "base": "PlanWard.svelte",
        "ext": ".svelte",
        "name": "PlanWard"
      },
      "asyncModule": () => import('../src/routes/PlanWard.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_Work",
      "_regex": {},
      "_paramKeys": {},
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
          "_regex": {},
          "_paramKeys": {},
          "name": "Architecture",
          "file": {
            "path": "src/routes/Work/Architecture.svelte",
            "dir": "src/routes/Work",
            "base": "Architecture.svelte",
            "ext": ".svelte",
            "name": "Architecture"
          },
          "asyncModule": () => import('../src/routes/Work/Architecture.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_Work_Helix_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "Helix",
          "file": {
            "path": "src/routes/Work/Helix.svelte",
            "dir": "src/routes/Work",
            "base": "Helix.svelte",
            "ext": ".svelte",
            "name": "Helix"
          },
          "asyncModule": () => import('../src/routes/Work/Helix.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_Work_Svelte_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "Svelte",
          "file": {
            "path": "src/routes/Work/Svelte.svelte",
            "dir": "src/routes/Work",
            "base": "Svelte.svelte",
            "ext": ".svelte",
            "name": "Svelte"
          },
          "asyncModule": () => import('../src/routes/Work/Svelte.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_Work_index_svelte",
          "_regex": {},
          "_paramKeys": {},
          "name": "index",
          "file": {
            "path": "src/routes/Work/index.svelte",
            "dir": "src/routes/Work",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/Work/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}