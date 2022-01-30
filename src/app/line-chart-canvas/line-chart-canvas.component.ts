import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartDataSets,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { Data } from 'src/entities/data';
import { DataUpdateService } from '../services/data-update.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-line-chart-canvas',
  templateUrl: './line-chart-canvas.component.html',
  styleUrls: ['./line-chart-canvas.component.scss'],
})
export class LineChartCanvasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  public currentDataList: Data[] = [];
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Supply' },
    { data: [], label: 'Demand' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: false,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'transparent',
    },
    {
      borderColor: 'yellow',
      backgroundColor: 'transparent',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(
    private databaseService: DatabaseService,
    private dataUpdateService: DataUpdateService
  ) {}

  async ngOnInit() {
    this.dataUpdateService.getDataUpdate().subscribe((data) => {
      this.currentDataList = data;
      this.lineChartData[0].data = [];
      this.lineChartData[1].data = [];
      this.lineChartLabels = [];
      for (const perData of this.currentDataList) {
        this.lineChartData[0].data.push(perData.supply);
        this.lineChartData[1].data.push(perData.demand);
        this.lineChartLabels.push(perData.date);
      }
      this.chart.chart.update();
      console.log(`Chart Data: ${this.currentDataList}`);
    });
    this.currentDataList = await this.databaseService.getData();

    for (const perData of this.currentDataList) {
      this.lineChartData[0].data.push(perData.supply);
      this.lineChartData[1].data.push(perData.demand);
      this.lineChartLabels.push(perData.date);
    }
  }
}
