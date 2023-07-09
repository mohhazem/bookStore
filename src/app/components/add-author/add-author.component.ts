import { Component } from '@angular/core';
import { author } from 'src/app/models/author';
import { authors } from 'src/authors';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent {
  newAuthor:author={author: '', authorId:0,email:'',bio:'' ,createdAt:'',updatedAt:'' };

  submitForm(newName:string,newEmail:string,newBio:string){
    this.newAuthor.authorId=authors.length-1;
    this.newAuthor.author=newName;
    this.newAuthor.email=newEmail;
    this.newAuthor.bio=newBio;
    authors.push(this.newAuthor);
    console.log(authors);
  }
}
