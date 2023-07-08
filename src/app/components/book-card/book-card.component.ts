import { Component, Input,Output,EventEmitter } from '@angular/core';
import { book } from 'src/book';
import { books } from '../../../mockBooks';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  filter='all';
  books: book[]=books
  
  updateFilter(newFilter:string){
    this.filter=newFilter;
  }

}
