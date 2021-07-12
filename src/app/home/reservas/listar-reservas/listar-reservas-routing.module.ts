import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarReservasPage } from './listar-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarReservasPageRoutingModule {}
