/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Subject } from 'rxjs';
import { Data } from 'src/entities/data';
import { DataUpdateService } from './data-update.service';

const STORAGE_KEY = 'dataList';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(
    private storage: Storage,
    private dataUpdateService: DataUpdateService
  ) {
    this.init();
  }

  storedData: Data[];

  async init() {
    await this.storage.create();
  }

  async getData(): Promise<Data[]> {
    return ((await this.storage.get(STORAGE_KEY)) as Data[]) || [];
  }

  async addData(data: Data) {
    this.storedData = (await this.storage.get(STORAGE_KEY)) || [];
    if ((data.demand === null || undefined) && this.storedData.length > 0) {
      data.demand = this.storedData[this.storedData.length - 1].demand;
    } else if (
      (data.demand === undefined || data.demand === null) &&
      (this.storedData.length === 0 || this.storedData === null)
    ) {
      console.log('0');
      data.demand = 0;
    } else if (
      (data.demand != null || undefined) &&
      this.storedData.length === 0
    ) {
      data.demand = data.demand;
    } else {
      console.log('else');
      data.demand =
        data.demand + this.storedData[this.storedData.length - 1].demand;
    }

    if ((data.supply === null || undefined) && this.storedData.length > 0) {
      data.supply = this.storedData[this.storedData.length - 1].supply;
    } else if (
      (data.supply === undefined || data.supply === null) &&
      (this.storedData.length === 0 || this.storedData === null)
    ) {
      console.log('0');
      data.supply = 0;
    } else if (
      (data.supply != null || undefined) &&
      this.storedData.length === 0
    ) {
      data.supply = data.supply;
    } else {
      data.supply =
        data.supply + this.storedData[this.storedData.length - 1].supply;
    }
    this.storedData.push(data);
    this.dataUpdateService.updateDataList(this.storedData);
    return this.storage.set(STORAGE_KEY, this.storedData);
  }

  async deleteData(index) {
    const storedData = await this.storage.get(STORAGE_KEY);
    storedData.splice(index, 1);
    return this.storage.set(STORAGE_KEY, storedData);
  }
}
