import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @Output()
  OnIngredientAddEvent = new EventEmitter();

  OnIngredientAdded(name:string, amount:number)
  {
    this.OnIngredientAddEvent.emit({name:name, amount: amount});
  }

  ngOnInit() {
  }

}
