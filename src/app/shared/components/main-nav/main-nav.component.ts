import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from '../../ui-components/svg-icon/svg-icon.component';
import { AppNavItem } from '../../utils/types';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SvgIconComponent],
  templateUrl: './main-nav.component.html',
})
export class MainNavComponent {
  protected navItems: AppNavItem[] = [
    {
      path: '',
      icon: 'home',
      name: 'home',
      permissions: [],
    },
    {
      path: 'profile',
      icon: 'user',
      name: 'profile',
      permissions: [],
    },
  ];
  constructor() {}
}
