import type { Preview } from '@storybook/react';

import DocsPage from './docs-page.mdx';
import '../src/styles/root.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
    },
    docs: {
      page: DocsPage,
    },
  },
};

export default preview;
