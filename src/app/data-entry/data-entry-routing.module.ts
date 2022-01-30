import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataEntryPage } from './data-entry.page';

const routes: Routes = [
  {
    path: '',
    component: DataEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataEntryPageRoutingModule {}
