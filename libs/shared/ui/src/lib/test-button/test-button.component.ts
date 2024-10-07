import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-test-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-button.component.html',
  styleUrl: './test-button.component.css',
})
export class TestButtonComponent {
  /**
   * The text to display on the button.
   */
  @Input() text = 'Click me!';
  /**
   * The padding around the button text.
   */
  @Input() padding = 10;
  /**
   * Whether the button is disabled.
   */
  @Input() disabled = true;
}
