import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { MainFooterComponent } from './shared/components/main-footer/main-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainNavComponent,
    MainHeaderComponent,
    MainFooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'bims';
  public version = environment.version;
}
