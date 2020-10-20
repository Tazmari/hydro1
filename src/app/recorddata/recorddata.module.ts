import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecorddataPageRoutingModule } from './recorddata-routing.module';

import { RecorddataPage } from './recorddata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecorddataPageRoutingModule
  ],
  declarations: [RecorddataPage]
})
export class RecorddataPageModule {}
