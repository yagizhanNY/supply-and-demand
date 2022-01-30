import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LineChartCanvasComponent } from './line-chart-canvas.component';
import { DatabaseService } from '../services/database.service';
import { DataUpdateService } from '../services/data-update.service';
import { DataListModule } from '../data-list/data-list.module';

@NgModule({
  declarations: [LineChartCanvasComponent],
  imports: [CommonModule, ChartsModule],
  exports: [LineChartCanvasComponent],
  providers: [DatabaseService],
})
export class LineChartCanvasModule {}
