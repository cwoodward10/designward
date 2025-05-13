import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
  nodes: {
    link: {
      ...nodes.link,
      render: component('./src/components/base/A.astro'),
    },
    image: {
      ...nodes.image,
      render: component('./src/components/content-components/ContentImage.astro'),
    }
  },
  tags: {
    inlineImage: {
      attributes: {
        ...nodes.image.attributes
      },
      render: component('./src/components/content-components/ContentImage.astro'),
    },
    codepen: {
      attributes: {
        hash: {
          type: String,
        },
        title: {
          type: String, 
        },
        author: {
          type: String,
        },
        height: {
          type: Number | undefined,
        }
      },
      render: component('./src/components/content-components/CodepenEmbed.astro'),
    },
    alert: {
      render: component('./src/components/content-components/AlertDialog.astro'),
    },
    expander: {
      attributes: {
        title: {
          type: String
        }
      },
      render: component('./src/components/content-components/BasicExpander.astro'),
    }
  },
  extends: [
    shiki({
      theme: 'dracula',
      wrap: true,
      langs: [],
    }),
  ],
});