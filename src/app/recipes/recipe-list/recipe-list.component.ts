import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Dark Chocolate', 500, 'Dark Chocolate Recipe', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Ftater-nachos-2515903.jpg%3Fitok%3DI-v-tI4g&w=700&q=85'),
    new Recipe('Milk Chocolate', 400, 'Milk Chocolate Recipe', 'http://www.godivachocolates.co.uk/dw/image/v2/AAQA_PRD/on/demandware.static/-/Sites-Godiva-Master-Catalog/default/dwe2489b48/images/Dark%20coconut%20tablet.jpg?sw=500&sh=500'),
  ];
  constructor() { }

  @Output()
    OnRecipeSelectedEvent = new EventEmitter<Recipe>();

  onAddPrice(price){
    console.log(price);
  }

  onRecipeSelect(recipe: Recipe)
  {
    this.OnRecipeSelectedEvent.emit(recipe);
  }

  ngOnInit() {
  }

}
