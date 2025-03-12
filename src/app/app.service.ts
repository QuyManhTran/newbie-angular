import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  name: string = '';

  get getName(): string {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }
}
