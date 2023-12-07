import { Component, computed, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../_services/auth/auth.service';
import { UUID } from '../../shared/utils/types';
import { APP_ROUTE } from '../../shared/constants/routes.constants';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-create-password',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    ReactiveFormsModule,
    SvgIconComponent,
    RouterLink,
  ],
  templateUrl: './create-password.component.html',
})
export class CreatePasswordComponent implements OnInit {
  @Input() token!: UUID;
  newPasswordForm = this.fb.nonNullable.group(
    {
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            new RegExp(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            ),
          ),
        ],
      ],
      repeatPassword: ['', [Validators.required]],
    },
    {
      validators: [this.passwordsDoNotMatch],
    },
  );
  createPasswordError = signal<string | null>(null);
  showPassword = signal(false);
  togglePasswordIcon = computed(() => {
    if (this.showPassword()) return 'eye-slash';
    return 'eye';
  });
  protected readonly APP_ROUTE = APP_ROUTE;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  get password() {
    return this.newPasswordForm.controls.password;
  }

  get repeatPassword() {
    return this.newPasswordForm.controls.repeatPassword;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const token = params['token'] as UUID;

      if (!token) {
        this.router.navigate(['/', APP_ROUTE.auth, APP_ROUTE.login]);
        return;
      }

      this.token = token;
    });
  }

  passwordsDoNotMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');

    if (password && repeatPassword && password.value !== repeatPassword.value) {
      return { passwordsDoNotMatch: true };
    }

    return null;
  }

  toggleShowPassword() {
    this.showPassword.set(!this.showPassword());
  }

  hasFieldError(fieldName: 'password' | 'repeatPassword' | string): boolean {
    if (fieldName === 'password' || fieldName === 'repeatPassword') {
      const field = this[fieldName];
      return (field.dirty || field.invalid) && field.touched;
    }

    return false;
  }

  async createPassword() {
    this.newPasswordForm.markAllAsTouched();

    if (this.password.invalid || this.newPasswordForm.invalid) return;

    this.createPasswordError.set(null);
    await this.authService.createPassword(this.password.value, this.token);
    this.router.navigate(['/', APP_ROUTE.auth, APP_ROUTE.login]);
  }
}
