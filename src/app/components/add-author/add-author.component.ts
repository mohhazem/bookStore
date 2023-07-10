import { Component, Input, OnInit } from '@angular/core';
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
    id: 0,
    author: "",
    email: "",
    bio: "",
    createdAt: "",
    updatedAt: ""
  };
  @Input() authors:author[];
  constructor(public service: NetworkServicesService) {
  }
  ngOnInit(){
     this.service.getAuthors().subscribe((newAuthors)=>this.authors=newAuthors);
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
    this.newAuthor.id = this.authors.length +1; 
    console.log(this.newAuthor)
    if(this.newAuthor!= undefined){
    this.service.postAuthor(this.newAuthor).subscribe((author)=>this.authors.push(author))
    }
    console.log(this.authors);
  }
}