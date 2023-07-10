import { Component } from '@angular/core';
import { author } from 'src/app/models/author';
import { NetworkServicesService } from 'src/app/services/network-services.service';

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.css']
})
export class AuthorsTableComponent {
  authors: author[] 
  displayedAuthors: author[] = [];
  pageSize = 3;
  currentPage = 1;
  pages: number[] = [];
  totalPages :number;

  constructor(public service:NetworkServicesService){}

  ngOnInit() {
    this.service.getAuthors().subscribe((authors) => {
      this.authors = authors;
      this.loadAuthors();
    });
  }
  
  loadAuthors() {
    this.paginateAuthors();
  }
  
  paginateAuthors() {
    this.totalPages = Math.ceil(this.authors.length / this.pageSize);
    var startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedAuthors = this.authors.slice(startIndex, startIndex + this.pageSize);
  }
  
  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
    this.paginateAuthors();
  }
  
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    this.paginateAuthors();
  }
}