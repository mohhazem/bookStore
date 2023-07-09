import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { author } from 'src/app/models/author';
import { book } from 'src/app/models/book';
import { authors } from 'src/authors';
import { books } from 'src/mockBooks';
@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent {
  currentAuthor:author={author: '', authorId:0,email:'',bio:'' ,createdAt:'',updatedAt:'' }
  id:number;
  currentRoute;
  books:book[]=books
  constructor(activatedRoute: ActivatedRoute){
    this.currentRoute=activatedRoute
  }
  ngOnInit(){
    const param = this.currentRoute.snapshot.paramMap.get('authorId');
    if (param) {
      this.id = parseInt(param);
      const authorRequired = authors.find((author) => author.authorId === this.id);
      if (authorRequired!=undefined){
        this.currentAuthor=authorRequired
      }
    }
  }
}
