import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipe-list.component.html',
    imports:[RecipeItemComponent,CommonModule]
})
export class RecipeListComponent{
    recipes:Recipe[] = [
        new Recipe('A Test Recipe','This is Simply The Test Recipe Description'),
        new Recipe('Paneer Recipe','This tells how to prepare a malai paneer'),
        new Recipe('Mushroom Recipe','This Tells you how to make  mushroom'),
        new Recipe('Mix Veg','This tells you how to make seasonal veg')
    ];

}