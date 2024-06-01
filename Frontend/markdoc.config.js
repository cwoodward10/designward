import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  nodes: {
    link: {
      ...nodes.link, // Apply Markdoc's defaults for other options
      render: component('./src/components/base/A.astro'),
    },
    image: {
      ...nodes.image, // Apply Markdoc's defaults for other options
      render: component('./src/components/content-components/ContentImage.astro'),
    },
  },
});