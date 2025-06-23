import { Component } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";

@Component({
    selector:'app-recipes',
    templateUrl:'./recipes.component.html',
    imports:[RecipeDetailComponent,RecipeListComponent]
})
export class RecipesComponent{

}