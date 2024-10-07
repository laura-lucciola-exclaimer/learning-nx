import type { Meta, StoryObj } from '@storybook/angular';
import { TestButtonComponent } from './test-button.component';

const meta: Meta<TestButtonComponent> = {
  component: TestButtonComponent,
  title: 'TestButtonComponent',
};
export default meta;
type Story = StoryObj<TestButtonComponent>;

/*
 * The primary button is used to indicate the main action on a page.
 */
export const Primary: Story = {
  args: {
    text: 'Primary',
    padding: 10,
    disabled: false,
  },
};

/*
 * The secondary button is used to indicate a secondary action on a page.
 */
export const Secondary: Story = {
  args: {
    text: 'Secondary',
    padding: 5,
    disabled: true,
  },
};

/*
 * The heading button is used to indicate a heading that is actionable on a page.
 */
export const Heading: Story = {
  args: {
    text: 'Heading title',
    padding: 20,
    disabled: true,
  },
};
