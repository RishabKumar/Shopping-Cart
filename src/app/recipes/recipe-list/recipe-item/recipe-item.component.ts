import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RecipeItemComponent implements OnInit {

  @Input() recipes: Recipe[] = [];

  @Output()
  onAddEvent = new EventEmitter<number>();

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
  }

  public onAdd(){
    this.onAddEvent.emit(5);
  }

}
