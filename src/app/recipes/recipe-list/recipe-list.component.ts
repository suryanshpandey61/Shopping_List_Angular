import { Component } from "@angular/core";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipe-list.component.html',
    imports:[RecipeItemComponent]
})
export class RecipeListComponent{

}