import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a Test', 'https://www.eatright.org/-/media/eatrightimages/food/nutrition/nutritionfactsandfoodlabels/sodium-salt-1083487948.jpg?h=450&w=600&la=en&hash=5B2533EDEB4056DE89C903DAA315755F39E84D35')
  ];

  constructor() { }

  ngOnInit() {
  }

}
