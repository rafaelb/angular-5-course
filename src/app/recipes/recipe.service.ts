import { Recipe } from './recipe.model';
import { Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'a simple recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('Veg', 2)
    ]),
    new Recipe('Another Test Recipe', 'a simple recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [
      new Ingredient('Meat', 2),
      new Ingredient('Veg', 3)
    ]),
    new Recipe('A Test Recipe 2', 'a simple recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [
      new Ingredient('Meat', 3),
      new Ingredient('Veg', 4)
    ]),
    new Recipe('A Test Recipe 3', 'a simple recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [
      new Ingredient('Meat', 5),
      new Ingredient('Veg', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
