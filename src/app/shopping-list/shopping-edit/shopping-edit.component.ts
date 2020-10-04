import { Component, ElementRef, OnInit, ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('gredientNameInput') gredientNameInput:ElementRef;
  @ViewChild('gredientAmountInput') gredientAmountInput:ElementRef;

  // @Output('ingredientAdded') ingredientAdded= new EventEmitter<Ingredient>();

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddGredient(){
    const gredientName= this.gredientNameInput.nativeElement.value;
    const gredientAmount= this.gredientAmountInput.nativeElement.value;
    const newIngredient:Ingredient=new Ingredient(gredientName,gredientAmount);

    // this.ingredientAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);

  }
}
