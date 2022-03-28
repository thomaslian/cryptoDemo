import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { BackupKeyComponent } from 'src/app/components/backup-key/backup-key.component';
import { GenerateKeyComponent } from 'src/app/components/generate-key/generate-key.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule
  ],
  declarations: [TestPage, RegisterComponent, LoadingComponent, BackupKeyComponent, GenerateKeyComponent]
})
export class TestPageModule { }
