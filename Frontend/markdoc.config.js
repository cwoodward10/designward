import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';

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
  }
});