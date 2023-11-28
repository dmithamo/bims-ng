import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterLink, SvgIconComponent, RouterLinkActive],
  templateUrl: './page-header.component.html',
})
export class PageHeaderComponent {
  @Input() pageTitle!: string;
  @Input() hideBackButton?: boolean;

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
