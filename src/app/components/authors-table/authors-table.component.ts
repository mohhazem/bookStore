import { Component } from '@angular/core';
import { author } from 'src/app/models/author';
import { authors } from 'src/authors';

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.css']
})
export class AuthorsTableComponent {
  
  authors: author[] = authors;
  displayedAuthors: author[] = [];
  pageSize = 1;
  currentPage = 1;
  pages: number[] = [];
  totalPages = 2;
  
  ngOnInit() {
    this.loadAuthors();
  }
  
  loadAuthors() {
    this.paginateAuthors();
  }
  
  paginateAuthors() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
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
