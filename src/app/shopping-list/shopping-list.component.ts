import { Component, OnInit } from '@angular/core';
import  {Ingredient} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  addIngredient(data)
  {
    console.log(data.amount.value);
    this.ingredients.push(new Ingredient(data.name.value, data.amount.value);
  }

  ngOnInit() {
  }

}
