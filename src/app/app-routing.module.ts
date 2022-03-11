import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.FolderPageModule)
  },
  {
    path: 'bitcoin-test/:id',
    loadChildren: () => import('./pages/bitcoin-test/bitcoin-test.module').then( m => m.BitcoinTestPageModule)
  },
  {
    path: 'completed',
    loadChildren: () => import('./pages/completed/completed.module').then( m => m.CompletedPageModule)
  },
  {
    path: 'mnemonic-test/:id',
    loadChildren: () => import('./pages/mnemonic-test/mnemonic-test.module').then( m => m.MnemonicTestPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
