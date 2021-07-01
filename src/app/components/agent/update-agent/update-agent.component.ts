import { Component, OnInit } from '@angular/core';
import { Agent, AgentServiceService } from 'src/app/services/agent-service.service';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent implements OnInit {

  agentupdate:Agent=new Agent(0," "," "," "," "," "," ")
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
  }
  UpdateAgent(): void {
    console.log(this.agentupdate.agentId);
    this.agentService.UpdateAgent(this.agentupdate).subscribe( data => {alert("Agent Updated Successfully");});
  }

}
