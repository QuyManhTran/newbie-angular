import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { TableItemComponent } from './table-item/table-item.component';
import { DialogComponent } from './dialog/dialog.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [TableComponent, TableItemComponent, DialogComponent],
  imports: [CommonModule, TableRoutingModule, ButtonModule],
})
export class TableModule {}
