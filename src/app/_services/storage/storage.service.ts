import { Injectable } from '@angular/core';
import { SessionId } from '../../shared/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private STORAGE_TYPE: Storage = localStorage;
  public sessionId: SessionId | null = null;
  constructor() {}

  public get(key: string): SessionId | null {
    const item = this.STORAGE_TYPE.getItem(key);
    if (item) {
      return JSON.parse(item);
    }

    return null;
  }

  public set(key: string, value: string): void {
    this.STORAGE_TYPE.setItem(key, JSON.stringify(value));
  }

  public remove(key: string): void {
    this.STORAGE_TYPE.removeItem(key);
  }

  public clear(): void {
    this.STORAGE_TYPE.clear();
  }
}
