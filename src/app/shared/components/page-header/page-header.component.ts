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

  constructor(private location: Location) {}

  public showBackButton: boolean = true; // Figure out when to show

  goBack(): void {
    this.location.back();
  }
}
