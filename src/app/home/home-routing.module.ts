import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    component: HomePage,
  },
  {
    path: 'inicio', pathMatch: 'full',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'reservas', pathMatch: 'full',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'reservas/sala-uso-multiple', pathMatch: 'full',
    loadChildren: () => import('./reservas/sala-uso-multiple/sala-uso-multiple.module').then( m => m.SalaUsoMultiplePageModule)
  },
  {
    path: 'reservas/gimnasio', pathMatch: 'full',
    loadChildren: () => import('./reservas/gimnasio/gimnasio.module').then( m => m.GimnasioPageModule)
  },
  {
    path: 'reservas/zona-parrilla', pathMatch: 'full',
    loadChildren: () => import('./reservas/zona-parrilla/zona-parrilla.module').then( m => m.ZonaParrillaPageModule)
  },
  {
    path: 'incidencias',
    loadChildren: () => import('./incidencias/incidencias.module').then( m => m.IncidenciasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
