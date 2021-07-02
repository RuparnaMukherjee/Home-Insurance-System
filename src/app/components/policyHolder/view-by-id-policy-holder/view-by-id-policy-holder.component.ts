import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/AddressFolder/Address';
import { PolicyHolder, PolicyHolderServiceService } from 'src/app/services/policy-holder-service.service';

@Component({
  selector: 'app-view-by-id-policy-holder',
  templateUrl: './view-by-id-policy-holder.component.html',
  styleUrls: ['./view-by-id-policy-holder.component.css']
})
export class ViewByIdPolicyHolderComponent implements OnInit {
   address:Address=new Address(0,"","","","","","","");
   ph:PolicyHolder=new PolicyHolder(0,"","","","","",0,false,"","",this.address);
   id!:number;
   
  constructor(private policyHolderService:PolicyHolderServiceService) { }

  ngOnInit(): void {
  }
  ViewPolicyHolderById(id:number){
    console.log(id);
    this.policyHolderService.ViewPolicyHolderById(this.id).subscribe(ph=>this.ph=ph);
  }
}
