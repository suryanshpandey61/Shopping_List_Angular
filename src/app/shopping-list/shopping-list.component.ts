import { Component } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@Component({
    selector:'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    imports:[ShoppingEditComponent]
})
export class ShoppingListComponent{

}