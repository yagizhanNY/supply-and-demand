/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Data } from 'src/entities/data';

@Injectable({
  providedIn: 'root',
})
export class DataUpdateService {
  private _dataAddSubject = new Subject<Data[]>();
  // eslint-disable-next-line no-underscore-dangle
  public dataAddSubject = this._dataAddSubject.asObservable();

  constructor() {}

  getDataUpdate(): Observable<Data[]> {
    return this.dataAddSubject;
  }

  updateDataList(dataList: Data[]) {
    // eslint-disable-next-line no-underscore-dangle
    this._dataAddSubject.next(dataList);
  }
}
