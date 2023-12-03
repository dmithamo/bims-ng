import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { AuthService } from '../../_services/auth/auth.service';
import { Router } from '@angular/router';
import { APP_ROUTE } from '../../shared/constants/routes.constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public async login(username: string, password: string): Promise<void> {
    try {
      await this.authService.login({ username, password });
      this.router.navigate([APP_ROUTE.dashboard]);
    } catch (e) {
      console.error(e);
    }
  }
}
