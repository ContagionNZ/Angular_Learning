import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelceted = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a Test', 'https://cdn4.iconfinder.com/data/icons/hotel-3-6/48/132-512.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelceted.emit(recipe);
  }

}
