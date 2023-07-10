import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { author } from 'src/app/models/author';
import { book } from 'src/app/models/book';
import { NetworkServicesService } from 'src/app/services/network-services.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent {
constructor(activatedRoute:ActivatedRoute,service:NetworkServicesService){
  this.activatedRoute=activatedRoute;
  this.service=service
}
  service;
  activatedRoute;
  /*authors:author[]*/
  currentAuthor:author={author: '', id:0,email:'',bio:'' ,createdAt:'',updatedAt:'' }
  id:number;
  books:book[]

  ngOnInit(){
    this.service.getBooks().subscribe((books)=>this.books=books);
    const param = this.activatedRoute.snapshot.paramMap.get('authorId');
    if (param) {
      this.id=parseInt(param)
      this.service.getAuthorById(this.id).subscribe((author) => {
        this.currentAuthor = author})
    }
  }
}
