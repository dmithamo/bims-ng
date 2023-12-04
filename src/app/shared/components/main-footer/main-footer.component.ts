import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './main-footer.component.html',
})
export class MainFooterComponent {
  public appVersion = environment.version;
}
