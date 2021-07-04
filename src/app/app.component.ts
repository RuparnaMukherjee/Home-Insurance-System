import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home-Insurance-System';
  constructor(private router: Router) {}
  gotoHome(){
    this.router.navigate(['login-dashboard']);  // define your component where you want to go
}
}
