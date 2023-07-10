import { Component, Input, OnInit } from '@angular/core';
import { author } from 'src/app/models/author';
import { NetworkServicesService } from 'src/app/services/network-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent {
  newAuthor: author = {
    id: 0,
    author: "",
    email: "",
    bio: "",
    createdAt: "",
    updatedAt: ""
  };
  @Input() authors:author[];
  constructor(public service: NetworkServicesService,public activatedRoute:ActivatedRoute) {
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
    const param = this.activatedRoute.snapshot.paramMap.get('authorId');
    if (param){
      this.newAuthor.id = parseInt(param);
    }
    console.log(this.newAuthor)
    if(this.newAuthor!= undefined){
    this.service.updateAuthor(this.newAuthor).subscribe((author)=>this.newAuthor=author)
    }
    console.log(this.authors);
  }
}