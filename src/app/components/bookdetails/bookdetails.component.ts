import { Component, Injectable, Input } from '@angular/core';
import { book } from 'src/app/models/book';
import { ActivatedRoute } from '@angular/router';
import { NetworkServicesService } from 'src/app/services/network-services.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent {
  id: number;
  book:book
  constructor(private activatedRoute: ActivatedRoute,public service:NetworkServicesService) {}

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('bookid');
    if (param) {
      this.id = parseInt(param);
      this.service.getBookById(this.id).subscribe((book) => {
        this.book = book})
      }
    }
  }
