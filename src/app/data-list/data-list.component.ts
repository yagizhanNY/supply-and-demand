import { Component, OnInit } from '@angular/core';
import { Data } from 'src/entities/data';
import { DataUpdateService } from '../services/data-update.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit {
  dataList = [];
  constructor(
    private databaseService: DatabaseService,
    private dataUpdateService: DataUpdateService
  ) {}

  ngOnInit() {
    this.loadData();

    this.dataUpdateService.getDataUpdate().subscribe((data) => {
      console.log('Data entry subs: ' + data);
      this.dataList = data;
    });
  }

  async loadData() {
    this.dataList = await this.databaseService.getData();
  }

  parseDate(): string {
    const date = new Date();
    return (
      date.getDate().toString() +
      '/' +
      (date.getMonth() + 1).toString() +
      '/' +
      date.getFullYear().toString()
    );
  }

  async addData(data: Data) {
    const newData = new Data();
    newData.date = this.parseDate();
    newData.demand = 10;
    newData.supply = 20;
    await this.databaseService.addData(newData);
    //this.loadData();
  }

  async deleteData(index: number) {
    this.databaseService.deleteData(index);
    this.dataList.splice(index, 1);
  }
}
