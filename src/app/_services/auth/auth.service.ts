import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { AuthRepository } from '../../_repositories/auth/auth.repository';
import { Credentials, SessionUser } from '../../shared/models/auth.model';
import { UUID } from '../../shared/utils/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public sessionUser: WritableSignal<SessionUser | null> = signal(null);
  public isLoggedIn = computed<boolean>(() => {
    return !!this.sessionUser();
  });

  constructor(private authRepository: AuthRepository) {
    this.validateSessionId();
  }

  public async validateSessionId(): Promise<void> {
    const sessionId = this.authRepository.sessionId;
    if (!sessionId) {
      await this.logout();
      return;
    }

    this.sessionUser.set(await this.authRepository.getSessionUser());
  }

  public async login({ username, password }: Credentials) {
    this.sessionUser.set(
      await this.authRepository.login({
        username,
        password,
      }),
    );
  }

  public async logout(): Promise<void> {
    this.authRepository.removeSessionId();
    this.sessionUser.set(null);
  }

  public async requestPasswordResetLink(username: string) {
    this.authRepository.requestPasswordResetLink(username);
  }

  public async createPassword(password: string, token: UUID) {
    this.authRepository.createPassword(password, token);
  }
}
