import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.css']
})
export class VisitantesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'carro' , 'hora'];
  dataSource = dataVisitantes;
  constructor() { }

  ngOnInit() {
  }

}


export interface VisitantesData {
  name: string;
  status: string;
  carro: string;
  hora: string;
}

const dataVisitantes: VisitantesData[] = [
  {name: 'Lindomar', status: 'aguardando', carro: 'Mistubishi - L200' , hora: 'aguardando'},
  {name: 'Rosana', status: 'chegou', carro: 'Fiat - PalioWeekend', hora: '02-08 / 19:30'},
  {name: 'Rosana', status: 'chegou', carro: 'Fiat - PalioWeekend', hora: '04-08 / 15:30' },
  {name: 'Eduardo', status: 'chegou', carro: 'pedestre', hora: '04-08 / 15:30' },
  {name: 'Livia', status: 'chegou', carro: 'pedestre', hora: '04-08 / 15:30' },
  {name: 'Soraia', status: 'chegou', carro: 'Fiat - Siena', hora: '04-08 / 15:30' },
  {name: 'Olavo', status: 'chegou', carro: 'Nissan - Sentra',  hora: '02-08 / 20:30'}
  
  
];