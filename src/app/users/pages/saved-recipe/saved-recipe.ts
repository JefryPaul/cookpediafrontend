import { Component } from '@angular/core';
import { Header } from "../../component/header/header";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-saved-recipe',
  imports: [Header, RouterLink],
  templateUrl: './saved-recipe.html',
  styleUrl: './saved-recipe.css',
})
export class SavedRecipe {

}
