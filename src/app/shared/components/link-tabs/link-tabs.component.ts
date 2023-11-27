import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLinkTab } from '../../utils/types';

@Component({
  selector: 'app-link-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-tabs.component.html',
})
export class LinkTabsComponent {
  @Input() tabs!: AppLinkTab[];
}
