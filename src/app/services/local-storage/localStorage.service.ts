import { Injectable } from '@angular/core';
import { SaveSecureService } from './saveSecure.service';

@Injectable({
providedIn: 'root'
})
export class LocalStorageService {

  constructor(private saveSecureService: SaveSecureService) { }

  setValue(key: string, value: any) {
    this.saveSecureService.secureStorage.setItem(key, value);
  }

  getValue(key: string) {
    return this.saveSecureService.secureStorage.getItem(key);
  }

  clearToken() {
    return this.saveSecureService.secureStorage.clear();
  }
}
