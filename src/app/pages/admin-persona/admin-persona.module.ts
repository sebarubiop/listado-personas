import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/utils/material.module';

import { AdminPersonaComponent } from './admin-persona.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPersonaComponent
  }
];

@NgModule({
  declarations: [AdminPersonaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ]
})
export class AdminPersonaModule { }
