import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  @Output()
  onAddEvent = new EventEmitter<number>();
  @Output()
  OnRecipeSelectedEvent = new EventEmitter<Recipe>();

  constructor() {
    console.log('Constructor');
  }

  onRecipeSelect(recipe : Recipe)
  {
    this.OnRecipeSelectedEvent.emit(recipe);
  }

  ngOnInit() {
  }

  public onAdd(){
    this.onAddEvent.emit(5);
  }

}
