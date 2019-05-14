import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  retornoDB: any;
  constructor(private http: HttpClient) { }

  getDB() {
    return this.http.get('http://localhost:3000/');
  }
}
