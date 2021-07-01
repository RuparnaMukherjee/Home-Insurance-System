import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent, AgentServiceService } from 'src/app/services/agent-service.service';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.css']
})
export class ListAgentComponent implements OnInit {

  list_agent!:Agent[];
  


  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.agentService.ViewAllAgents().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response: Agent[] )
  {
      this.list_agent=response;
  }

  RemoveAgent(agent: Agent): void {
    this.agentService.RemoveAgent(agent)
      .subscribe( data => {
        this.list_agent = this.list_agent.filter(u => u !== agent);});
  
  }



}

