import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const materials = [
  MatTableModule,
  MatIconModule,
  MatButtonModule,
]

@NgModule({
  imports: [
    materials
  ],
  exports: [
    materials
  ]
})
export class MaterialModule { }
