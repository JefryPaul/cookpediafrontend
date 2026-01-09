import { Component, inject } from '@angular/core';
import { Header } from "../../component/header/header";
import { RouterLink } from "@angular/router";
import { Apiservice } from '../../../services/apiservice';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-recipes',
  imports: [CommonModule,Header, RouterLink],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
api=inject(Apiservice)

 allRecipes:any=[]

ngOnInit(){

this.getAllRecipes()
}



getAllRecipes(){
this.api.getAllRecipesAPI().subscribe((res:any)=>{
console.log(res);
   this.allRecipes = res
this.allRecipes=res
})
}

}
