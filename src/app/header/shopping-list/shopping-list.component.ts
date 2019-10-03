import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('apple', 5),
  new Ingredient('Tomatoes', 3),
];

  constructor() { }

  ngOnInit() {
  }

  onIngerdentAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
