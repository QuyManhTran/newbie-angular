import { Component, OnDestroy, OnInit, Optional, SkipSelf } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { IUserInfor } from './interfaces/table.interface';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit, OnDestroy {
  usersSubject: Subject<IUserInfor[]> = new Subject<IUserInfor[]>();
  subscription = new Subscription();

  constructor(@SkipSelf() @Optional() private appSevice: AppService) {}
  ngOnInit(): void {
    this.subscription = this.appSevice.getUsers$().subscribe((value) => {
      this.usersSubject.next(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
