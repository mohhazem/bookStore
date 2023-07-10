import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../models/book';
import { Observable , of } from 'rxjs';
import { authors } from 'src/authors';
import { author } from '../models/author';
@Injectable({
  providedIn: 'root'
})
export class NetworkServicesService {
  private fakeApi='http://localhost:5000'
  private url='http://localhost:3000';
  constructor(private http:HttpClient) { }
  getBooks():Observable<book[]> {
    return this.http.get<book[]>(this.fakeApi+'/books');
  }
  getAuthors():Observable<author[]> {
    return this.http.get<author[]>('http://localhost:5000/authors');
  }
}
