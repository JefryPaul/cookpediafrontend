import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isLoggedIn:boolean = false
  loginUsername: string = ""

  constructor(private router:Router){}



  ngOnInit(){
    if(sessionStorage.getItem("token") && sessionStorage.getItem("existingUser")){
      this.isLoggedIn = true
    this.loginUsername = JSON.parse(sessionStorage.getItem("existingUser") || "").username
  }
  else{
    this.isLoggedIn = false
    this.loginUsername = ""
  }
  }
}