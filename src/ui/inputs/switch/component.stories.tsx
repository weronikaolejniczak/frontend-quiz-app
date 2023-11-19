import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './component';

const meta: Meta<typeof Switch> = {
  title: 'Inputs/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {};
