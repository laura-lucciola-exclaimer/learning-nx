import type { Meta, StoryObj } from '@storybook/angular';
import { ProductsComponent } from './products.component';

const meta: Meta<ProductsComponent> = {
  component: ProductsComponent,
  title: 'ProductsComponent',
};
export default meta;
type Story = StoryObj<ProductsComponent>;

export const Primary: Story = {
  args: {},
};
