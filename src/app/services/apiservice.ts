import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {

  http=inject(HttpClient)

serverUrl="http://localhost:3000"

getHomeRecipesAPI(){

 return this.http.get(`${this.serverUrl}/home-recipes`)

}
//all recipes
getAllRecipesAPI(){
 return this.http.get(`${this.serverUrl}/all-recipe`)
} 

registerAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/register`, reqBody)
  } 

  loginAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/login`, reqBody)
  } 

}
