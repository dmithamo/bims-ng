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
import { MainFooterComponent } from '../../shared/components/main-footer/main-footer.component';

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
    MainFooterComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });
  loginError = signal<string | null>(null);
  showPassword = signal(false);
  togglePasswordIcon = computed(() => {
    if (this.showPassword()) return 'eye-slash';
    return 'eye';
  });
  protected readonly APP_ROUTE = APP_ROUTE;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  resetLoginError() {
    this.loginError.set(null);
  }

  toggleShowPassword() {
    this.showPassword.set(!this.showPassword());
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

      await this.router.navigate([APP_ROUTE.root]);
    } catch (error) {
      this.loginError.set((error as unknown as AuthError).message);
    }
  }
}
