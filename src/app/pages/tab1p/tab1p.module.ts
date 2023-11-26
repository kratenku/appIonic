import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1pPageRoutingModule } from './tab1p-routing.module';

import { Tab1pPage } from './tab1p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1pPageRoutingModule
  ],
  declarations: [Tab1pPage]
})
export class Tab1pPageModule {}
