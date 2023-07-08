import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { book } from 'src/book';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private database='http://localhost:5000/books';
  constructor(private http:HttpClient) { }
  }
