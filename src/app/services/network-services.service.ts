import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../models/book';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NetworkServicesService {

  private url='http://localhost:3000/books';
  constructor(private http:HttpClient) { }
  get():Observable<book[]> {
    console.log('Fetching data from server...');
    return this.http.get<book[]>(this.url);
  }
}
