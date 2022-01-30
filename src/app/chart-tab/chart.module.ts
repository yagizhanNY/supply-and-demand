import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartPage } from './chart.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ChartPageRoutingModule } from './chart-routing.module';
import { ChartsModule } from 'ng2-charts';
import { LineChartCanvasModule } from '../line-chart-canvas/line-chart-canvas.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ChartPageRoutingModule,
    LineChartCanvasModule,
  ],
  declarations: [ChartPage],
})
export class ChartPageModule {}
