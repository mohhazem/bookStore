import { Component } from '@angular/core';
import { author } from 'src/app/models/author';
import { NetworkServicesService } from 'src/app/services/network-services.service';
import { authors } from 'src/authors';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
  providers:[NetworkServicesService]
})
export class AddAuthorComponent {
  newAuthor: author = {
    authorId: 0,
    author: '',
    email: '',
    bio: '',
    createdAt: '',
    updatedAt: ''
  };
  service;
  constructor(newService: NetworkServicesService) {
    this.service = newService;
  }
  updateBio(newBio: string) {
    console.log("zebyyyyy")
    this.newAuthor.bio = newBio
  }
  updateAuthor(newName: string) {
    console.log("555555")
    this.newAuthor.author = newName;
  }
  updateEmail(newEmail: string) {
    console.log("mangaaaa")
    this.newAuthor.email = newEmail;
  }
  ngOnClick() {
    console.log('a7aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    this.submitForm()
  }
  submitForm() {
    this.newAuthor.authorId = authors.length ; 
    this.service.postFake(this.newAuthor)
    console.log(authors);
  }
}