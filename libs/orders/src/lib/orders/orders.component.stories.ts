import type { Meta, StoryObj } from '@storybook/angular';
import { OrdersComponent } from './orders.component';

const meta: Meta<OrdersComponent> = {
  component: OrdersComponent,
  title: 'OrdersComponent',
};
export default meta;
type Story = StoryObj<OrdersComponent>;

export const Primary: Story = {
  args: {},
};
