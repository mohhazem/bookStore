import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { author } from 'src/app/models/author';
import { book } from 'src/app/models/book';
import { NetworkServicesService } from 'src/app/services/network-services.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books: book[]
  newBook: book = {
    id: 0,
    bookName: "",
    genre: "",
    imageUrl: "",
    author: "",
    authorId: 0,
    createdAt: "",
    updatedAt: ""
  };
  constructor(public service: NetworkServicesService, public activatedRoute: ActivatedRoute) {
  }
  id: number;
  currentAuthor: author;
  ngOnInit() {
    this.service.getBooks().subscribe((books) => this.books = books);
    const param = this.activatedRoute.snapshot.paramMap.get('authorId');
    if (param) {
      this.id = parseInt(param)
      this.service.getAuthorById(this.id).subscribe((author) => {
        this.currentAuthor = author
      })
    }
  }
  updateImageUrl(newImageUrl: string) {
    this.newBook.imageUrl = newImageUrl
  }
  updateName(newName: string) {
    this.newBook.bookName = newName;
  }
  updateGenre(newGenre: string) {
    this.newBook.genre = newGenre;
  }
  ngOnClick() {
    this.submitForm()
  }
  submitForm() {
    this.newBook.id = this.books.length + 1;
    this.newBook.author=this.currentAuthor.author
    this.newBook.authorId=this.currentAuthor.id
    if (this.newBook != undefined) {
      this.service.postBook(this.newBook).subscribe((book) => this.books.push(book))
    }
  }
}
