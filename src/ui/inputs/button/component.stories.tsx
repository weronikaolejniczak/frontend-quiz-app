import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './component';
import { Heading } from '../../typography/heading';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: 'Click me',
    label: 'Click me',
  },
  render: (args) => (
    <Button label={args.label}>
      <Heading size={Heading.size.s}>{args.children}</Heading>
    </Button>
  ),
};
