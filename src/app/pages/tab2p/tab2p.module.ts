import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2pPageRoutingModule } from './tab2p-routing.module';

import { Tab2pPage } from './tab2p.page';
import { TabInicialPageModule } from '../tab-inicial/tab-inicial.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2pPageRoutingModule,
    TabInicialPageModule
  ],
  declarations: [Tab2pPage]
})
export class Tab2pPageModule {}
