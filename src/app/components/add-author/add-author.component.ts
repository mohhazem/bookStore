import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author';
import { NetworkServicesService } from 'src/app/services/network-services.service';


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
  providers:[NetworkServicesService]
})
export class AddAuthorComponent implements OnInit {
  newAuthor: author = {
    authorId: 0,
    author: '',
    email: '',
    bio: '',
    createdAt: '',
    updatedAt: ''
  };
  authors:author[];
  constructor(public service: NetworkServicesService) {
  }
  ngOnInit(){
     this.service.getAuthors().subscribe((newAuthors)=>this.authors=newAuthors);
     console.log(this.authors)
  }
  updateBio(newBio: string) {
    this.newAuthor.bio = newBio
  }
  updateAuthor(newName: string) {
    this.newAuthor.author = newName;
  }
  updateEmail(newEmail: string) {
    this.newAuthor.email = newEmail;
  }
  ngOnClick() {
    this.submitForm()
  }
  submitForm() {
    this.newAuthor.authorId = this.authors.length ; 
    console.log(this.authors);
  }
}