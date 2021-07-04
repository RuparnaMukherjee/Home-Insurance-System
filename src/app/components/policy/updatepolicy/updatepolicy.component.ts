import { Component, OnInit } from '@angular/core';
import { PolicyServiceService,Policy } from 'src/app/services/policyservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-policy',
  templateUrl: './updatepolicy.component.html',
  styleUrls: ['./updatepolicy.component.css']
})
export class UpdatePolicyComponent implements OnInit {
  pol:Policy=new Policy(0,new Date(), new Date(), 0, "");
  constructor(private policyService:PolicyServiceService) { }

  ngOnInit(): void {
  }
  UpdatePolicy():void {
    console.log(this.pol.policyId);
    this.policyService.UpdatePolicy(this.pol).subscribe( data=> {alert("Policy updated Successfully")});
  }

}
