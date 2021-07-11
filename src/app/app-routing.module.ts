import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./home/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'reservas',
    loadChildren: () => import('./home/reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'reservas',
    redirectTo: 'reservas',
    pathMatch: 'full'
  },
  {
    path: 'incidencias',
    loadChildren: () => import('./home/incidencias/incidencias.module').then( m => m.IncidenciasPageModule)
  },
  {
    path: 'incidencias',
    redirectTo: 'incidencias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
