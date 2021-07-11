import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaUsoMultiplePage } from './sala-uso-multiple.page';

const routes: Routes = [
  {
    path: '',
    component: SalaUsoMultiplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaUsoMultiplePageRoutingModule {}
