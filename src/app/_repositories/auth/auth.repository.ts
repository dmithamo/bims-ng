import { Injectable } from '@angular/core';
import { StorageService } from '../../_services/storage/storage.service';
import {
  Credentials,
  SessionId,
  SessionUser,
} from '../../shared/models/auth.model';

const SESSION_ID_KEY = 'SESSION_ID';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  constructor(private storageService: StorageService) {}

  get sessionId(): SessionId | null {
    return this.storageService.get(SESSION_ID_KEY);
  }

  async getSessionUser(): Promise<SessionUser | null> {
    const sessionId = this.sessionId;
    if (!sessionId) {
      return null;
    }

    return Promise.resolve(null);
  }

  removeSessionId() {
    this.storageService.remove(SESSION_ID_KEY);
  }

  async login({ username, password }: Credentials): Promise<SessionUser> {
    // TODO: api login here
    console.log({ password });
    return Promise.resolve({
      username,
      permissions: [],
    });
  }
}
