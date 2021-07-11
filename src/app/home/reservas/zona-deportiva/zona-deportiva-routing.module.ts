import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonaDeportivaPage } from './zona-deportiva.page';

const routes: Routes = [
  {
    path: '',
    component: ZonaDeportivaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonaDeportivaPageRoutingModule {}
