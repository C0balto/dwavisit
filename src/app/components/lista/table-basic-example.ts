import {Component} from '@angular/core';
import { MongoService } from 'src/app/services/mongo.service';

export interface PeriodicElement {
  name: string;
  cpf: string;
}
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'dwa-table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExampleComponent {
  displayedColumns: string[] = ['name', 'cpf'];
  retornoDB: any;
  dataSource: any;

  constructor(private mongoService: MongoService) {
    this.mongoDB();
  }

  mongoDB() {
    this.dataSource = this.mongoService.getDB().subscribe((data) => {
      this.retornoDB = data;
    });
    console.log('data source: ' + this.dataSource);
  }
}
