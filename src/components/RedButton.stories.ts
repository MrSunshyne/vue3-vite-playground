import type { Meta, StoryObj } from '@storybook/vue3';

import RedButton from './RedButton.vue';

const meta = {
  title: 'Playground/RedButton',
  component: RedButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: { primary: false }, // default value
} satisfies Meta<typeof RedButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};