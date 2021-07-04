import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent-service.service';
import { Policy } from 'src/app/services/policyservice.service';

@Component({
  selector: 'app-view-policies-by-agent-id',
  templateUrl: './view-policies-by-agent-id.component.html',
  styleUrls: ['./view-policies-by-agent-id.component.css']
})
export class ViewPoliciesByAgentIdComponent implements OnInit {

  list_policies!:Policy[];
  id!: number;


  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
  
  }
  viewPolicy(id:number){
  this.agentService.viewPolicy(this.id).subscribe(
    response =>this.handleSuccessfulResponse(response),
   );
  }

  handleSuccessfulResponse(response: Policy[] )
  {
      this.list_policies=response;
  }

}
