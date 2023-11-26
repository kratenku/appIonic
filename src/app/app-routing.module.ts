import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tab-inicial',
    pathMatch: 'full'
  },
  {
    path: 'tab1p',
    loadChildren: () => import('./pages/tab1p/tab1p.module').then( m => m.Tab1pPageModule)
  },
  {
    path: 'tab2p',
    loadChildren: () => import('./pages/tab2p/tab2p.module').then( m => m.Tab2pPageModule)
  },
  {
    path: 'tab3p',
    loadChildren: () => import('./pages/tab3p/tab3p.module').then( m => m.Tab3pPageModule)
  },
  {
    path: 'tab-inicial',
    loadChildren: () => import('./pages/tab-inicial/tab-inicial.module').then( m => m.TabInicialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
