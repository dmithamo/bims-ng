import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../shared/components/logo/logo.component';
import { MainFooterComponent } from '../shared/components/main-footer/main-footer.component';
import { PageHeaderComponent } from '../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    MainFooterComponent,
    PageHeaderComponent,
  ],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  protected appVersion = import.meta.env.NG_APP_VERSION;
}
