import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dwa-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent implements OnInit {

  constructor(private http: HttpClient) { }
  getMoradores() {
    const retorno = this.http.get('http://localhost:3000/').subscribe(data => data.toString());
    console.log(retorno);
  }
  ngOnInit() {
  }

}
