/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Data } from 'src/entities/data';
import { DatabaseService } from '../services/database.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.page.html',
  styleUrls: ['./data-entry.page.scss'],
})
export class DataEntryPage implements OnInit {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly router: Router,
    private navController: NavController
  ) {}

  supply: number;
  demand: number;
  date = new Date().toISOString();
  stringDate: string;

  ngOnInit() {}

  async addData() {
    this.stringDate = await this.parseDate();
    const data = new Data();
    data.date = this.stringDate;
    data.demand = this.demand;
    data.supply = this.supply;
    console.log(data);
    await this.databaseService.addData(data);
    this.router.navigate(['tabs/data']);
  }

  private async parseDate(): Promise<string> {
    const newDate = new Date(this.date);
    const usefullDateFormat =
      newDate.getDate() +
      '/' +
      (newDate.getMonth() + 1) +
      '/' +
      newDate.getFullYear();
    return usefullDateFormat;
  }
}
