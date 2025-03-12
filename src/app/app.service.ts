import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private token: string = '';

  get getToken(): string {
    return this.token;
  }

  set setToken(token: string) {
    this.token = token;
  }
}
