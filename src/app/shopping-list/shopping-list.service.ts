import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn:'root'})
export class ShoppingListService{
    ingredientChanges =new EventEmitter<Ingredient[]>();

    ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomato',15)
    ];

    getIngredient(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanges.emit(this.ingredients.slice());
    }

    addIngredientFromRecipe(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanges.emit(this.ingredients.slice());
    }

}