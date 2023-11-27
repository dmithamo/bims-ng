import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [CommonModule, RouterLink, SvgIconComponent],
  templateUrl: './link-button.component.html',
})
export class LinkButtonComponent {
  @Input() label?: string;
  @Input() path?: string;
  @Input() iconName?: string;
}
