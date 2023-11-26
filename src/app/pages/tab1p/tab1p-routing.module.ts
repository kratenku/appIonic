import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1pPage } from './tab1p.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1pPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1pPageRoutingModule {}
