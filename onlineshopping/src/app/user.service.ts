import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    isAuthenicated:boolean=false;
  constructor() { }

  getuserAuthenicated(){
    return this.isAuthenicated;
  }
  setUserAuthenicated(){
    this.isAuthenicated=true;
  } 
}
