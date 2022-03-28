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
    loadChildren: () => import('./pages/main/main.module').then(m => m.FolderPageModule)
  },
  {
    path: 'test/wif/:id',
    loadChildren: () => import('./pages/test/test.module').then(m => m.TestPageModule)
  },
  {
    path: 'test/mnemonic/:id',
    loadChildren: () => import('./pages/test/test.module').then(m => m.TestPageModule)  },
  {
    path: 'completed',
    loadChildren: () => import('./pages/completed/completed.module').then(m => m.CompletedPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
