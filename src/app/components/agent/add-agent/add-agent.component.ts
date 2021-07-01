import { Component, OnInit } from '@angular/core';
import { Agent, AgentServiceService } from 'src/app/services/agent-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {

  agent:Agent=new Agent(0," "," "," "," "," "," ");
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
  }
  AddAgent(): void {
    console.log("helo")
    this.agentService.AddAgent(this.agent).subscribe( data => {alert("Agent Created Successfully");});
  }

}

