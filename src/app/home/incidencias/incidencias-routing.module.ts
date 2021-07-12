import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidenciasPage } from './incidencias.page';

const routes: Routes = [
  {
    path: '',
    component: IncidenciasPage,
    pathMatch: 'full'
  },
  {
    path: 'listar',
    loadChildren: () => import('./listar-incidencias/listar-incidencias.module').then( m => m.ListarIncidenciasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidenciasPageRoutingModule {}
