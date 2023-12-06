import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainNavComponent,
    PageHeaderComponent,
    MainFooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'bims';
}
