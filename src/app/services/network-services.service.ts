import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../models/book';
import { Observable } from 'rxjs';
import { author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class NetworkServicesService {
  private fakeApi='http://localhost:5000'
  private url='http://localhost:3000';

  constructor(private http:HttpClient) {}

  getBooks(): Observable<book[]> {
    return this.http.get<book[]>(`${this.fakeApi}/books`);
  }

  getBookById(id: number): Observable<book> {
    return this.http.get<book>(`${this.fakeApi}/books/${id}`);
  }

  postBook(newBook: book): Observable<book> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<book>(`${this.fakeApi}/books`, newBook, httpOptions);
  }

  updateBook(updatedBook: book): Observable<book> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      method: 'PUT'
    };
    return this.http.put<book>(`${this.fakeApi}/books/${updatedBook.id}`, updatedBook, httpOptions);
  }

  deleteBook(id: number): Observable<book> {
    return this.http.delete<book>(`${this.fakeApi}/books/${id}`);
  }

  getAuthors(): Observable<author[]> {
    return this.http.get<author[]>(`${this.fakeApi}/authors`);
  }

  getAuthorById(id: number): Observable<author> {
    return this.http.get<author>(`${this.fakeApi}/authors/${id}`);
  }

  postAuthor(newAuthor: author): Observable<author> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<author>(`${this.fakeApi}/authors`, newAuthor, httpOptions);
  }

  updateAuthor(updatedAuthor: author): Observable<author> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<author>(`${this.fakeApi}/authors/${updatedAuthor.id}`, updatedAuthor, httpOptions);
  }

  deleteAuthor(id: number): Observable<author> {
    return this.http.delete<author>(`${this.fakeApi}/authors/${id}`);
  }
}