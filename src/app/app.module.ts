import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { RecipeListComponent } from './header/recipe/recipe-list/recipe-list.component';
import { ShoppingListEditComponent } from './header/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './header/recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './header/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
