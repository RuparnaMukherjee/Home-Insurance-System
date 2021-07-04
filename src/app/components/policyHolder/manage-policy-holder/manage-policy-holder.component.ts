import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-policy-holder',
  templateUrl: './manage-policy-holder.component.html',
  styleUrls: ['./manage-policy-holder.component.css']
})
export class ManagePolicyHolderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
