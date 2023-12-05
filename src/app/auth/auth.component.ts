import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainFooterComponent } from '../shared/components/main-footer/main-footer.component';
import { LogoComponent } from '../shared/components/logo/logo.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainFooterComponent, LogoComponent],
  templateUrl: './auth.component.html',
})
export class AuthComponent {}
