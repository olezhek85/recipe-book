import {Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';
import {Headers, Http} from "@angular/http";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty',
      'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg', [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork meat', 1)
      ]),
    new Recipe('Summer Salad', 'Okayish',
      'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor(private http: Http) {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://recipebook-905eb.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {

  }

}
