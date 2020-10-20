import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecorddataPage } from './recorddata.page';

const routes: Routes = [
  {
    path: '',
    component: RecorddataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecorddataPageRoutingModule {}
