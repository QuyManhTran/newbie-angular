import { Component, OnDestroy, OnInit, Optional, SkipSelf } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';

interface IUserInfor {
  id: number;
  name: string;
  age: string;
  nationality: string;
}

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit, OnDestroy {
  usersSubject: Subject<IUserInfor[]> = new Subject<IUserInfor[]>();
  subscription = new Subscription();

  constructor(@SkipSelf() @Optional() private appSevice: AppService, private http: HttpClient) {}
  ngOnInit(): void {
    this.subscription = this.getUserDataObs().subscribe((value) => {
      this.usersSubject.next(value);
    });
  }

  getUserDataObs(): Observable<IUserInfor[]> {
    return this.http.get<IUserInfor[]>('https://server-deployment-yvii.onrender.com/todo');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
