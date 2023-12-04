import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { AuthService } from '../../_services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { APP_ROUTE } from '../../shared/constants/routes.constants';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon.component';
import { AuthError, Credentials } from '../../shared/models/auth.model';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    ReactiveFormsModule,
    SvgIconComponent,
    LogoComponent,
    RouterLink,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  loginError = signal<string | null>(null);
  resetLoginError() {
    this.loginError.set(null);
  }

  showPassword = signal(false);
  toggleShowPassword() {
    this.showPassword.set(!this.showPassword());
  }
  togglePasswordIcon = computed(() => {
    if (this.showPassword()) return 'eye-slash';
    return 'eye';
  });

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  hasFieldError(fieldName: 'username' | 'password'): boolean {
    const field = this[fieldName];
    return (field.dirty || field.invalid) && field.touched;
  }

  async login(): Promise<void> {
    this.loginForm.markAllAsTouched();

    if (this.username.invalid || this.password.invalid) return;
    this.loginError.set(null);

    try {
      await this.authService.login({
        ...(this.loginForm.value as Credentials),
      });

      await this.router.navigate([APP_ROUTE.dashboard]);
    } catch (error) {
      this.loginError.set((error as unknown as AuthError).message);
    }
  }

  protected readonly APP_ROUTE = APP_ROUTE;
}
