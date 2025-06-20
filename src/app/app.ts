import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,RecipesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-project';
}
