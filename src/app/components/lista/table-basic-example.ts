import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  cpf: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'João Bosco', cpf: '666.666.666-66'},
  {name: 'Letícia', cpf: '333.333.333-22'},
  {name: 'Arthur', cpf: '555.555.666-78'},
  {name: 'Hewerton', cpf: '555.555.666-78'}
];

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
  dataSource = ELEMENT_DATA;
}
