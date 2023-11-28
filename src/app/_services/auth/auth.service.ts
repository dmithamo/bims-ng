import { Injectable, signal } from '@angular/core';
import { AuthRepository } from '../../_repositories/auth/auth.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = signal<boolean>(false);
  constructor(private authRepository: AuthRepository) {}

  public async validateSessionId(): Promise<boolean> {
    return Promise.resolve(false);
  }
}
