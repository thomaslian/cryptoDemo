import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitcoinTestPage } from './bitcoin-test.page';

const routes: Routes = [
  {
    path: '',
    component: BitcoinTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitcoinTestPageRoutingModule {}
