import { Component, OnInit } from '@angular/core';
import { PolicyServiceService,Policy } from 'src/app/services/policyservice.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './createpolicy.component.html',
  styleUrls: ['./createpolicy.component.css']
})
export class CreatePolicyComponent implements OnInit {
  policy:Policy=new Policy(0,new Date(), new Date(), 0, "");
  constructor(private policyService:PolicyServiceService) { }

  ngOnInit(): void {
  }
  CreatePolicy(): void {
    this.policyService.CreatePolicy(this.policy).subscribe( data => {alert("Policy Created Successfully");});
  }
} 
  