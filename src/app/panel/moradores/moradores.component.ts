import { Component, OnInit } from '@angular/core';
import { MongoService } from 'src/app/services/mongo.service';

@Component({
  selector: 'dwa-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})

export class MoradoresComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'car'];
  dataSource = ELEMENT_DATA;

  constructor() {
    
    
  }

  ngOnInit() {
  }

}

export interface MoradoresData {
  name: string;
  status: string;
  car: string;
  
}

const ELEMENT_DATA: MoradoresData[] = [
  {name: 'Helio', status: 'em casa', car: 'VW - Gol'},
  {name: 'Luiza', status: 'saiu', car: 'VW - Gol'},
  {name: 'Pedro', status: 'em casa', car: 'VW - Gol'},
  {name: 'Larissa', status: 'em casa', car: 'VW - Gol'}
  
];