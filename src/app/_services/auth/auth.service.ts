import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: WritableSignal<Promise<boolean>>;
  constructor() {
    this.isLoggedIn = signal(Promise.resolve(false));
  }
}
