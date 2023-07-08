import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';

const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'book-details/:bookid',component:BookdetailsComponent},
  {path:'author-page/:authorId',component:AuthorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
