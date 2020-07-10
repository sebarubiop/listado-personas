import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from 'src/utils/material.module';
import { AdminPersonaComponent } from './admin-persona.component';
import { AdminPersonaFormComponent } from './admin-persona-form/admin-persona-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPersonaComponent
  }
];

@NgModule({
  declarations: [AdminPersonaComponent, AdminPersonaFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminPersonaModule { }
