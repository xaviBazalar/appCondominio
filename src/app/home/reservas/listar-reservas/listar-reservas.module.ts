import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarReservasPageRoutingModule } from './listar-reservas-routing.module';

import { ListarReservasPage } from './listar-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarReservasPageRoutingModule
  ],
  declarations: [ListarReservasPage]
})
export class ListarReservasPageModule {}
