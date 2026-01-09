import { Component, inject } from '@angular/core';
import { Header } from "../../../users/component/header/header";
import { RouterLink } from "@angular/router";
import { Apiservice } from '../../../services/apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Header, RouterLink,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  api = inject(Apiservice)

  ngOnInit() {
    this.getHomeRecipes()
  }
 homeRecipes: any=[];

  getHomeRecipes() {
    this.api.getHomeRecipesAPI().subscribe((res: any) => {
      console.log(res);
      this.homeRecipes = res



    })
  }

}
