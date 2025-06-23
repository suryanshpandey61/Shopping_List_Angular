import { Component } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { Ingredient } from "../shared/ingredient.model";
@Component({
    selector:'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    imports:[ShoppingEditComponent]
})
export class ShoppingListComponent{
    ingredients:Ingredient[] = [
        new Ingredient('Test ingedient',10),
        new Ingredient('Paneer Masala',500),
        new Ingredient('Musroom Masala',70),
        new Ingredient('Garam Masala',1000)
    ];
}