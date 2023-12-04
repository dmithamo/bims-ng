import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainFooterComponent } from '../shared/components/main-footer/main-footer.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainFooterComponent],
  templateUrl: './auth.component.html',
})
export class AuthComponent {}
