import { NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { Call } from '@angular/compiler';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  filter:string='all'
  bookCard;
  search:string;
  constructor(bookCard:BookCardComponent){
    this.bookCard=bookCard
  }
  sendFilter(val:string){
    this.filter=val
    this.bookCard.updateFilter(this.filter);
  }
  sendSearch(val:string){
    this.search=val
    console.log(this.search);
    this.bookCard.updateSearch(this.search);
  }
}
