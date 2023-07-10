import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ MatSidenavModule} from '@angular/material/sidenav'
import{ MatGridListModule} from '@angular/material/grid-list'
import{ MatMenuModule} from '@angular/material/menu'
import{ MatButtonModule} from '@angular/material/button'
import{ MatCardModule} from '@angular/material/card'
import{ MatIconModule} from '@angular/material/icon'
import{ MatExpansionModule} from '@angular/material/expansion'
import{ MatListModule} from '@angular/material/list'
import{ MatToolbarModule} from '@angular/material/toolbar'
import{ MatTableModule}from '@angular/material/table'
import{ MatBadgeModule }from '@angular/material/badge'
import{ MatSnackBarModule} from '@angular/material/snack-bar';
import{ HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { AuthorsTableComponent } from './components/authors-table/authors-table.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { Service } from './services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AddBookComponent } from './components/add-book/add-book.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilterBarComponent,
    BookCardComponent,
    AuthorPageComponent,
    BookdetailsComponent,
    AuthorsTableComponent,
    AddAuthorComponent,
    EditBookComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
