import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitcoinTestPageRoutingModule } from './bitcoin-test-routing.module';

import { BitcoinTestPage } from './bitcoin-test.page';
import { RegisterComponent } from 'src/app/components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitcoinTestPageRoutingModule
  ],
  declarations: [BitcoinTestPage, RegisterComponent]
})
export class BitcoinTestPageModule {}
