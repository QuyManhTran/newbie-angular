import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpercasePipe } from './pipes/upercase.pipe';

@NgModule({
  declarations: [UpercasePipe],
  imports: [CommonModule],
})
export class ShareModule {}
