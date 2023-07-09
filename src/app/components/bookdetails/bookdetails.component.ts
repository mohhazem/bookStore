import { Component, Injectable, Input } from '@angular/core';
import { book } from 'src/app/models/book';
import { ActivatedRoute } from '@angular/router';
import { books } from 'src/mockBooks';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent {
  id: number;
  currentBook: book = { bookId: 0, bookName: '', genre:'',imageUrl:'' , author: '', authorId:0 ,createdAt:'',updatedAt:'' };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('bookid');
    if (param) {
      this.id = parseInt(param);
      console.log('Book ID:', this.id);
      const bookRequired = books.find((book) => book.bookId === this.id);
      if (bookRequired!=undefined){
        this.currentBook=bookRequired;
      }
    }
  }
}