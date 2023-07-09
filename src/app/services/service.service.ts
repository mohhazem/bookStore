import { Injectable } from '@angular/core';;
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { book } from '../models/book';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Service {

  private url='http://localhost:3000/books';
  constructor(private http:HttpClient) { }
  get():Observable<book[]> {
    console.log('Fetching data from server...');
    return this.http.get<book[]>(this.url);
  }
}
