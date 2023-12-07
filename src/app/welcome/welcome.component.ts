import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../shared/components/logo/logo.component';
import { PageHeaderComponent } from '../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, LogoComponent, PageHeaderComponent],
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  protected appVersion = import.meta.env.NG_APP_VERSION;
}
