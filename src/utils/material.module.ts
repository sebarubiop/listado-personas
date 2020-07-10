import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materials = [
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule,
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
