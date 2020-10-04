import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{

    recipes:Recipe[] =[
        new Recipe('A test Recipe',
         'This is simply a test',
         'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
         [
             new Ingredient('Meat',12),
             new Ingredient('Potato',2)
         ]),
        new Recipe('A new food Recipe',
        'This is a second test',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
        [
            new Ingredient('Apple',2),
            new Ingredient('Cake',4)
        ])
    ];

    constructor(private slService:ShoppingListService){}

    recipeSelected= new EventEmitter<Recipe>();

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredientFromRecipe(ingredients);
    }

}