import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/AddressFolder/Address';
import { PolicyHolder, PolicyHolderServiceService } from 'src/app/services/policy-holder-service.service';

@Component({
  selector: 'app-view-by-email-id-policy-holder',
  templateUrl: './view-by-email-id-policy-holder.component.html',
  styleUrls: ['./view-by-email-id-policy-holder.component.css']
})
export class ViewByEmailIdPolicyHolderComponent implements OnInit {
  address:Address=new Address(0,"","","","","","","");
  policy_h:PolicyHolder=new PolicyHolder(0,"","","","","",0,false,"","",this.address);
  id!:string;
  constructor(private policyHolderService:PolicyHolderServiceService) { }

  ngOnInit(): void {
  }
  public viewPolicyHolderByEmailId(id:string){
    console.log(id);
    this.policyHolderService.viewPolicyHolderByEmailId(this.id).subscribe(policy_h=>this.policy_h=policy_h)
  }

}
