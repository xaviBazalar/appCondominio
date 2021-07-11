import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonaDeportivaPageRoutingModule } from './zona-deportiva-routing.module';

import { ZonaDeportivaPage } from './zona-deportiva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonaDeportivaPageRoutingModule
  ],
  declarations: [ZonaDeportivaPage]
})
export class ZonaDeportivaPageModule {}
