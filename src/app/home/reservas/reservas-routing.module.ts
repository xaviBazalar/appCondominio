import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasPage } from './reservas.page';

const routes: Routes = [
  {
    path: '',
    component: ReservasPage
  },
  {
    path: 'sala-uso-multiple',
    loadChildren: () => import('./sala-uso-multiple/sala-uso-multiple.module').then( m => m.SalaUsoMultiplePageModule)
  },
  {
    path: 'gimnasio',
    loadChildren: () => import('./gimnasio/gimnasio.module').then( m => m.GimnasioPageModule)
  },
  {
    path: 'zona-parrilla',
    loadChildren: () => import('./zona-parrilla/zona-parrilla.module').then( m => m.ZonaParrillaPageModule)
  },
  {
    path: 'zona-deportiva',
    loadChildren: () => import('./zona-deportiva/zona-deportiva.module').then( m => m.ZonaDeportivaPageModule)
  },
  {
    path: 'cine',
    loadChildren: () => import('./cine/cine.module').then( m => m.CinePageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./listar-reservas/listar-reservas.module').then( m => m.ListarReservasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasPageRoutingModule {}
