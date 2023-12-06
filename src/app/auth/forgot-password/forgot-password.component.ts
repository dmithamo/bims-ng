import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon.component';
import { APP_ROUTE } from '../../shared/constants/routes.constants';
import { AuthService } from '../../_services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    PageHeaderComponent,
    ReactiveFormsModule,
    SvgIconComponent,
  ],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  requestResetLinkForm = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.email]],
  });
  newPasswordForm = this.fb.nonNullable.group({
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
        ),
      ],
    ],
    repeatPassword: [''],
  });
  resetLinkError = signal<string | null>(null);
  hasRequestedLinkSuccessfully = signal<boolean>(false);
  protected readonly APP_ROUTE = APP_ROUTE;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

  get username() {
    return this.requestResetLinkForm.controls.username;
  }

  changeHasRequestedLinkSuccessfully(status: boolean) {
    this.hasRequestedLinkSuccessfully.set(status);
  }

  async requestResetLink() {
    this.requestResetLinkForm.markAllAsTouched();

    if (this.requestResetLinkForm.invalid) return;

    try {
      await this.authService.requestPasswordResetLink(this.username.value);
      this.changeHasRequestedLinkSuccessfully(true);
    } catch (error) {
      this.resetLinkError.set(error as string);
    }
  }
}
