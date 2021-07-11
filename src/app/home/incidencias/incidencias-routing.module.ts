import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidenciasPage } from './incidencias.page';

const routes: Routes = [
  {
    path: '',
    component: IncidenciasPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidenciasPageRoutingModule {}
