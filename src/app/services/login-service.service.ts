import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  userName!:string;
  password!:string
  constructor(private httpService:HttpClient) { }
  login( userName:string,password:string){
    return this.httpService.post<User>("http://localhost:8081/Authenticate/Login",{userName,password});
  }
}

export class User {
 userName!:string;
 password!:string;
 role!:string;
  constructor(userName:string,password:string,role:string){
    this.userName=userName;
    this.password=password;
    this.role=role;
  }
  }
