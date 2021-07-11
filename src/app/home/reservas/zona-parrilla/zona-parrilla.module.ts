import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonaParrillaPageRoutingModule } from './zona-parrilla-routing.module';

import { ZonaParrillaPage } from './zona-parrilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonaParrillaPageRoutingModule
  ],
  declarations: [ZonaParrillaPage]
})
export class ZonaParrillaPageModule {}
