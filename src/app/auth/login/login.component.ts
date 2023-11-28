import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
