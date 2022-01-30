import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataPage } from './data.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DataPageRoutingModule } from './data-routing.module';
import { DataListModule } from '../data-list/data-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DataPageRoutingModule,
    DataListModule,
  ],
  declarations: [DataPage],
})
export class DataPageModule {}
