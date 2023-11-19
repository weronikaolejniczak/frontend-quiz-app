import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './component';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    as: 'span',
    children: 'Lorem ipsum dolor sit amet',
    className: '',
    size: Heading.size.m,
    weight: Heading.weight.medium,
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Playground: Story = {
  argTypes: {
    as: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'p', 'span'],
    },
    size: {
      control: 'select',
      options: Heading.size,
    },
    weight: {
      control: 'select',
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
    as: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
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
