import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { book } from 'src/app/models/book';
import { NetworkServicesService } from 'src/app/services/network-services.service';
import { Observable } from 'rxjs';
import { author } from 'src/app/models/author';
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  providers: [NetworkServicesService]
})

export class BookCardComponent implements OnInit {
  filter = 'all';
  search = '';
  books:book[]
  authors:author[]
  constructor(private service: NetworkServicesService) {  }
  ngOnInit(){
    this.service.getBooks().subscribe((books)=>this.books=books);
  }
  
  updateSearch(newSearch: string) {
    this.search = newSearch;
  }

  updateFilter(newFilter: string) {
    this.filter = newFilter;
  }
}