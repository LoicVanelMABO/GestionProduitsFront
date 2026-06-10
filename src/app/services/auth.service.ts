import { Injectable } from '@angular/core';
import { User } from '../model/user.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users : User[] = [
    {"username":"Loïc","password":"123","roles":['ADMIN']},
    {"username":"Vanel","password":"123","roles":['ADMIN']}
  ];

  public loggerUser!:string;
  public isloggedIn:Boolean=false;
  public roles!:string[];

  constructor(private router: Router) { }

  logout(){
    this.isloggedIn=false;
    //localStorage.setItem('loggedUser',this.loggerUser);
    this.loggerUser='';
    this.roles.length = 0;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  setLoggerUserFromLocalStorage(loggerUser:string){
    this.isloggedIn = true;
    this.loggerUser = loggerUser;
    this.getUserRoles(loggerUser);
  }

  getUserRoles(login:string){
    this.users.forEach((curUser)=>{
      if(curUser.username === login)
        this.roles = curUser.roles;
    });
  }

  signIn(user:User){
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if(user.username===curUser.username && user.password ===curUser.password){
        validUser = true;
        this.loggerUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser',this.loggerUser);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
    });

    return validUser;
  }

  isAdmin():Boolean{
    if(!this.roles)
      return false;
    
    return (this.roles.indexOf('ADMIN')>-1); 
  }
}
