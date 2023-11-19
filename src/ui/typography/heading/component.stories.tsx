import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './component';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet',
    size: Heading.size.m,
    weight: Heading.weight.medium,
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Playground: Story = {
  argTypes: {
    children: {
      name: 'Content',
    },
    size: {
      control: 'select',
      name: 'Text size',
      options: Heading.size,
    },
    weight: {
      control: 'select',
      name: 'Font weight',
      options: Heading.weight,
    },
  },
};

export const HeadingLBold: Story = {
  name: 'Heading L (Bold)',
  args: {
    size: Heading.size.l,
    weight: Heading.weight.medium,
  },
  argTypes: {
    children: { table: { disable: true } },
    size: { table: { disable: true } },
    weight: { table: { disable: true } },
  },
};

export const HeadingLRegular: Story = {
  name: 'Heading L (Regular)',
  args: {
    size: Heading.size.l,
    weight: Heading.weight.regular,
  },
  argTypes: HeadingLBold.argTypes,
};

export const HeadingM: Story = {
  name: 'Heading M',
  args: {
    size: Heading.size.m,
  },
  argTypes: HeadingLBold.argTypes,
};

export const HeadingS: Story = {
  name: 'Heading S',
  args: {
    size: Heading.size.s,
  },
  argTypes: HeadingLBold.argTypes,
};
