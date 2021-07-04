import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/AddressFolder/Address';
import { PolicyHolder, PolicyHolderServiceService } from 'src/app/services/policy-holder-service.service';

@Component({
  selector: 'app-update-policy-holder',
  templateUrl: './update-policy-holder.component.html',
  styleUrls: ['./update-policy-holder.component.css']
})
export class UpdatePolicyHolderComponent implements OnInit {
  address:Address=new Address(0,"","","","","","","");
  p_holder:PolicyHolder=new PolicyHolder(0,"","","","","",0,false,"","",this.address);
  constructor(private policyHolderService:PolicyHolderServiceService) { }

  ngOnInit(): void {
  }
  UpdatePolicyHolder():void {
    console.log(this.p_holder.policyHolderId);
    this.policyHolderService.UpdatePolicyHolder(this.p_holder).subscribe( date=> {alert("PolicyHolder updated Successfully")});
  }
}
