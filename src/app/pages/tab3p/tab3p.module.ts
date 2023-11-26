import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3pPageRoutingModule } from './tab3p-routing.module';

import { Tab3pPage } from './tab3p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3pPageRoutingModule
  ],
  declarations: [Tab3pPage]
})
export class Tab3pPageModule {}
