import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/AddressFolder/Address';
import { PolicyHolder } from 'src/app/services/policy-holder-service.service';
import { PolicyHolderServiceService } from 'src/app/services/policy-holder-service.service';

@Component({
  selector: 'app-add-policy-holder',
  templateUrl: './add-policy-holder.component.html',
  styleUrls: ['./add-policy-holder.component.css']
})
export class AddPolicyHolderComponent implements OnInit {
   address:Address=new Address(0,"","","","","","","");
   policyHolder:PolicyHolder=new PolicyHolder(0,"","","","","",0,false,"","",this.address);
  constructor(private policyHolderservice:PolicyHolderServiceService) { }

  ngOnInit(): void {
  }
  CreatePolicyHolder():void{
    this.policyHolderservice.CreatePolicyHolder(this.policyHolder).subscribe( data => {alert("PolicyHolder Created Successfully");});
  }

}
