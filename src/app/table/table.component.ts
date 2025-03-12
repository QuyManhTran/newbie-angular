import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

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
export class TableComponent implements OnInit {
  data!: IUserInfor[];
  constructor(@SkipSelf() @Optional() private appSevice: AppService, private http: HttpClient) {
    this.data = [];
  }

  name(): string {
    return this.appSevice.getName;
  }

  ngOnInit(): void {
    this.getListDataHandler();
  }

  getListDataHandler(): void {
    this.http.get<IUserInfor[]>('https://server-deployment-yvii.onrender.com/todo').subscribe((value) => {
      this.data = value;
    });
  }
}
