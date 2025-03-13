import { Component, Input, signal } from '@angular/core';
import { IUserInfor } from '../interfaces/table.interface';

@Component({
  selector: 'app-table-item',
  standalone: false,
  templateUrl: './table-item.component.html',
  styleUrl: './table-item.component.css',
  host: { style: 'display: contents' },
})
export class TableItemComponent {
  @Input() user!: IUserInfor;
  isShowDialog = signal<boolean>(false);

  onOpenDialog() {
    this.isShowDialog.set(true);
  }
}
