import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './component';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    as: 'span',
    children: 'Lorem ipsum dolor sit amet',
    className: '',
    size: Text.size.m,
    style: Text.style.normal,
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  argTypes: {
    as: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'p', 'span'],
    },
    size: {
      control: 'select',
      options: Text.size,
    },
    style: {
      control: 'select',
      options: Text.style,
    },
  },
};

export const Medium: Story = {
  args: {
    size: Text.size.m,
  },
  argTypes: {
    as: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    size: { table: { disable: true } },
    style: { table: { disable: true } },
  },
};

export const Small: Story = {
  args: {
    size: Text.size.s,
    style: Text.style.italic,
  },
  argTypes: Medium.argTypes,
};
