import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { book } from 'src/app/models/book';
import { NetworkServicesService } from 'src/app/services/network-services.service';
import { Observable } from 'rxjs';
import { books } from 'src/mockBooks';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  providers: [NetworkServicesService]
})

export class BookCardComponent implements OnInit {
  filter = 'all';
  search = '';
  
  books:book[]=books

  ngOnInit(){
    console.log(books)
  }

  /*books: book[];

  constructor(private service: NetworkServicesService) {  }

  ngOnInit(){
    console.log('aloo')
    this.service.get().subscribe(data => {
      this.books = data;
    console.log(this.books)
    });
  }*/

  updateSearch(newSearch: string) {
    this.search = newSearch;
  }

  updateFilter(newFilter: string) {
    this.filter = newFilter;
  }
}