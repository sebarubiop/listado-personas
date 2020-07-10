import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './pages/error-page/error-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'add/:id',
    loadChildren: () => import('./pages/admin-persona/admin-persona.module').then(m => m.AdminPersonaModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/admin-persona/admin-persona.module').then(m => m.AdminPersonaModule),
  },
  { path: '**', component: ErrorPageComponent } // "Catch-All" Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  ErrorPageComponent,
]
