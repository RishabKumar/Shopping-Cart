import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recipeSection: boolean = false;
  shoppingSection: boolean = false;

  constructor()
  {
    this.recipeSection = false;
    this.shoppingSection = false;
  }

  ShowSection(linkname)
  {
    switch(linkname)
    {
      case 'recipe':
        this.constructor();
        this.recipeSection = true;
        break;
      case 'shopping':
        this.constructor();
        this.shoppingSection = true;
        break;
    }
  }

}
