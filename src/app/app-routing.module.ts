import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { AuthorsTableComponent } from './components/authors-table/authors-table.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'book-details/:bookid',component:BookdetailsComponent},
  {path:'author-page/:authorId',component:AuthorPageComponent},
  {path:'author-table',component:AuthorsTableComponent},
  {path:'book-card',component:BookCardComponent},
  {path:'add-author',component:AddAuthorComponent},
  {path:'add-book/:authorId',component:AddBookComponent},
  {path:'edit-book/:authorId/:bookId',component:EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
