import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService, User } from 'src/app/services/login-service.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName!:string;
  password!:string;
  user!:User;
  myForm!:FormGroup;
  constructor(private fb: FormBuilder,private loginService:LoginServiceService,private router:Router) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  createForm() {
    this.myForm = this.fb.group({
       userName: ['', Validators.required ],
       password: ['',Validators.required] 
    });
  }
  goLogin(userName:string,password:string){
    this.loginService.login(this.userName,this.password).subscribe(
      user=>this.user=user
    );
    console.log(this.user)
    console.log(userName,password)
  if(this.user===undefined)
  {
   alert("Please check your username and password")
  }
  else if (this.user.role==="Admin"){
   this.router.navigate(['admin-dashboard']);
    }  // define your component where you want to go
   else if (this.user.role==="Agent"){
   this.router.navigate(['agent-dashboard']);
   }
   else{
    this.router.navigate(['policyHolder-dashboard']);
   }
   
}

}
