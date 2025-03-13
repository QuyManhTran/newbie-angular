import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Input({ required: true }) isShowDialog!: WritableSignal<boolean>;

  onCloseDialog() {
    this.isShowDialog.set(false);
  }
}
