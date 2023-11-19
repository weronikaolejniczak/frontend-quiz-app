import type { Meta, StoryObj } from '@storybook/react';

import { Display } from './component';

const meta: Meta<typeof Display> = {
  title: 'Typography/Display',
  component: Display,
};

export default meta;
type Story = StoryObj<typeof Display>;

export const Playground: Story = {
  args: {
    children: 'Lorem',
  },
  argTypes: {
    children: {
      name: 'Content',
    },
  },
};
