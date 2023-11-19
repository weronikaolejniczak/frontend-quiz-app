import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './component';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet',
    size: Text.size.m,
    style: Text.style.normal,
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  argTypes: {
    children: {
      name: 'Content',
    },
    size: {
      control: 'select',
      name: 'Text size',
      options: Text.size,
    },
    style: {
      control: 'select',
      name: 'Text style',
      options: Text.style,
    },
  },
};

export const Medium: Story = {
  args: {
    size: Text.size.m,
  },
  argTypes: {
    children: { table: { disable: true } },
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
