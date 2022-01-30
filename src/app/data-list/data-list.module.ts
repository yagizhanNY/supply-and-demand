import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataListComponent } from './data-list.component';
import { DatabaseService } from '../services/database.service';
import { DataUpdateService } from '../services/data-update.service';

@NgModule({
  declarations: [DataListComponent],
  imports: [CommonModule, IonicModule],
  exports: [DataListComponent],
  providers: [DatabaseService],
})
export class DataListModule {}
