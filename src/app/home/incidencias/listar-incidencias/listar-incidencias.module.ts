import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarIncidenciasPageRoutingModule } from './listar-incidencias-routing.module';

import { ListarIncidenciasPage } from './listar-incidencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarIncidenciasPageRoutingModule
  ],
  declarations: [ListarIncidenciasPage]
})
export class ListarIncidenciasPageModule {}
