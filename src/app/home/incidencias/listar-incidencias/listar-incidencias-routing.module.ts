import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarIncidenciasPage } from './listar-incidencias.page';

const routes: Routes = [
  {
    path: '',
    component: ListarIncidenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarIncidenciasPageRoutingModule {}
