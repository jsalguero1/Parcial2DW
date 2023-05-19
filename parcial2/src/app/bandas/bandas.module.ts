import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandasListComponent } from './bandas-list/bandas-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandasListComponent],
  exports: [BandasListComponent]
})
export class BandasModule { }
