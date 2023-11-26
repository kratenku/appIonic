import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3pPage } from './tab3p.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3pPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3pPageRoutingModule {}
