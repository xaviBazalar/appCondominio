import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaUsoMultiplePageRoutingModule } from './sala-uso-multiple-routing.module';

import { SalaUsoMultiplePage } from './sala-uso-multiple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaUsoMultiplePageRoutingModule
  ],
  declarations: [SalaUsoMultiplePage]
})
export class SalaUsoMultiplePageModule {}
