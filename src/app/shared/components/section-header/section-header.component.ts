import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../link-button/link-button.component';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule, LinkButtonComponent],
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  @Input() header?: string;
  @Input() subheader?: string;
  @Input() link?: {
    label?: string;
    path: string;
    iconName?: string;
  };
}
