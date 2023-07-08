import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute,
    private router: Router)
    {
      this.router.navigateByUrl('/home')
    }
  updateSearch(val:string){
    console.log(val)
  }
}
