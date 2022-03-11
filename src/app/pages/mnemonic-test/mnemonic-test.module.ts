import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MnemonicTestPageRoutingModule } from './mnemonic-test-routing.module';

import { MnemonicTestPage } from './mnemonic-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MnemonicTestPageRoutingModule
  ],
  declarations: [MnemonicTestPage]
})
export class MnemonicTestPageModule {}
