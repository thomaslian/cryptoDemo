import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'bitcoin/:id',
    loadChildren: () => import('./pages/main/main.module').then( m => m.FolderPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.FolderPageModule)
  },
  {
    path: 'bitcoin-test/:id',
    loadChildren: () => import('./pages/bitcoin-test/bitcoin-test.module').then( m => m.BitcoinTestPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
