import type { Meta, StoryObj } from '@storybook/react';

import { Display } from './component';

const meta: Meta<typeof Display> = {
  title: 'Typography/Display',
  component: Display,
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof Display>;

export const Playground: Story = {
  args: {
    as: 'h1',
    children: 'Lorem',
    className: '',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'p', 'span'],
    },
  },
};
