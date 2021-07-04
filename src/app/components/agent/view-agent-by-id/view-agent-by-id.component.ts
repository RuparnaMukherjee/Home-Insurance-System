import { Component, OnInit, Input } from '@angular/core';
import { Agent, AgentServiceService } from 'src/app/services/agent-service.service';

@Component({
  selector: 'app-view-agent-by-id',
  templateUrl: './view-agent-by-id.component.html',
  styleUrls: ['./view-agent-by-id.component.css']
})
export class ViewAgentByIdComponent implements OnInit {

  agent!: Agent;
  id!: number;
  
  constructor(private agentService:AgentServiceService) { 
  
  }

  ngOnInit(): void {

  }
  

  GetAgentById(id:number){
    console.log(this.id);
    this.agentService.GetAgentById(this.id).subscribe(
      agent=>this.agent=agent
    );
  }


}
