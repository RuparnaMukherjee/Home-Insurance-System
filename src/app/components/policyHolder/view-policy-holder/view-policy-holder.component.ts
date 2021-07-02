import { Component, OnInit } from '@angular/core';
import { PolicyHolderServiceService } from 'src/app/services/policy-holder-service.service';
import { PolicyHolder } from 'src/app/services/policy-holder-service.service';
@Component({
  selector: 'app-view-policy-holder',
  templateUrl: './view-policy-holder.component.html',
  styleUrls: ['./view-policy-holder.component.css']
})
export class ViewPolicyHolderComponent implements OnInit {
  policyHolder:PolicyHolder[]=[];
  constructor(private policyHolderService:PolicyHolderServiceService) { }

  ngOnInit(): void {
    this.policyHolderService.ViewPolicyHolder().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }
  handleSuccessfulResponse(response: PolicyHolder[] ){
    this.policyHolder=response;
  }
  DeletePolicyHolder(policyHolder:PolicyHolder):void{
    this.policyHolderService.DeletePolicyHolder(policyHolder)
    .subscribe( data => {
      this.policyHolder = this.policyHolder.filter(u => u !== policyHolder);});
  }
  

}
