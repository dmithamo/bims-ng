import { Injectable } from '@angular/core';
import { StorageService } from '../../_services/storage/storage.service';
import {
  Credentials,
  SessionId,
  SessionUser,
} from '../../shared/models/auth.model';
import { UUID } from '../../shared/utils/types';

const sessionIdKey = 'sessionId';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  constructor(private storageService: StorageService) {}

  get sessionId(): SessionId | null {
    return this.storageService.get(sessionIdKey);
  }

  async getSessionUser(): Promise<SessionUser | null> {
    const sessionId = this.sessionId;
    if (!sessionId) {
      return null;
    }

    return Promise.resolve({
      username: 'Dennis',
      permissions: [],
      avatar: '',
    });
  }

  removeSessionId() {
    this.storageService.remove(sessionIdKey);
  }

  async login({ username, password }: Credentials): Promise<SessionUser> {
    // TODO: api login here
    console.info({ password });
    return Promise.resolve({
      username,
      permissions: [],
    });
  }

  createPassword(password: string, token: UUID) {
    // TODO: api create password here
    console.info(`New password created: ${password}::${token}`);
  }

  requestPasswordResetLink(username: string) {
    // TODO: api generate token
    // TODO: email service sends token
    console.info(`Link sent! ${username}`);
  }
}
