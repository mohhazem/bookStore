import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../models/book';
import { Observable } from 'rxjs';
import { authors } from 'src/authors';
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
  postFake(newData:any){
    console.log("entered api")
    authors.push(newData)
  }
}
