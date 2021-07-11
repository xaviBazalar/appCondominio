import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonaParrillaPage } from './zona-parrilla.page';

const routes: Routes = [
  {
    path: '',
    component: ZonaParrillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonaParrillaPageRoutingModule {}
