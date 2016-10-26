import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }

}
