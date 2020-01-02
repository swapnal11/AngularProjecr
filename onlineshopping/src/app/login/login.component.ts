import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string ="";
  passowrd:string ="";
  constructor(public router : Router ,public userObj : UserService) { }

  ngOnInit() {
  }
 AuthenicateUser(){
   if(this.username=="admin" && this.passowrd == "admin")
   this.userObj.setUserAuthenicated();
   {this.router.navigate(["/dashboard"])}
   
 }
}
