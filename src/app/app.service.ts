import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserInfor } from './table/interfaces/table.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly http: HttpClient) {}
  private token: string = '';

  get getToken(): string {
    return this.token;
  }

  set setToken(token: string) {
    this.token = token;
  }

  getUsers$(): Observable<IUserInfor[]> {
    return this.http.get<IUserInfor[]>('https://67d291af90e0670699be2138.mockapi.io/api/v1/users');
  }

  createUser$(user: IUserInfor): Observable<IUserInfor> {
    return this.http.post<IUserInfor>('https://67d291af90e0670699be2138.mockapi.io/api/v1/users', user);
  }
}
