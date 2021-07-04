import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/AddressFolder/Address';

import { AgentServiceService } from 'src/app/services/agent-service.service';
import { PolicyHolder } from 'src/app/services/policy-holder-service.service';

@Component({
  selector: 'app-view-policyholders-by-agent-id',
  templateUrl: './view-policyholders-by-agent-id.component.html',
  styleUrls: ['./view-policyholders-by-agent-id.component.css']
})
export class ViewPolicyholdersByAgentIdComponent implements OnInit{

  list_policyHolders!:PolicyHolder[];
  id!: number;


  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
  
  }
  viewPolicyHolder(id:number){
  this.agentService.viewPolicyHolder(this.id).subscribe(
    response =>this.handleSuccessfulResponse(response),
   );
  }

  handleSuccessfulResponse(response: PolicyHolder[] )
  {
      this.list_policyHolders=response;
  }

}
