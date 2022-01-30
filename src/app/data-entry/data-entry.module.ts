import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataEntryPageRoutingModule } from './data-entry-routing.module';

import { DataEntryPage } from './data-entry.page';
import { DatabaseService } from '../services/database.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DataEntryPageRoutingModule],
  declarations: [DataEntryPage],
  providers: [DatabaseService],
})
export class DataEntryPageModule {}
