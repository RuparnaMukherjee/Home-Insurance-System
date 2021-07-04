import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PolicyHolder } from './policy-holder-service.service';
import { Policy } from './policyservice.service';


@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {
  agent:Agent[]=[];

  constructor(private httpService:HttpClient) { }
  
  AddAgent(agent:Agent):Observable<Agent>{
    console.log(agent);
   return this.httpService.post<Agent>("http://localhost:8081/agentManagement/agentCreation",agent);
  }
  UpdateAgent(agent:Agent){
    console.log(agent);
    return this.httpService.put<Agent>("http://localhost:8081/agentManagement/agentUpdate",agent);
  }
  public RemoveAgent(agent:Agent){
    return this.httpService.delete<Agent>("http://localhost:8081/agentManagement/agentRemove/"+agent.agentId);
  }
  GetAgentById(id:number){
    return this.httpService.get<Agent>("http://localhost:8081/agentManagement/findAgent/"+id);
  }
  ViewAllAgents(){
    return this.httpService.get<Agent[]>("http://localhost:8081/agentManagement/ViewAllAgents");
  }
  viewPolicyHolder(id:number){
    return this.httpService.get<PolicyHolder[]>("http://localhost:9091/agent/ViewPolicyHolders/"+id)
  }
  viewPolicy(id:number){
    return this.httpService.get<Policy[]>("http://localhost:9091/agent/ViewPolicies/"+id)
  }

}

export class Agent{
  agentId:number;
	agentName:string;
	designation:string;
	salary:string; 
	address:string;
	email:string;
	mobileNo:string;
  constructor( agentId:number,
    agentName:string,
    designation:string,
    salary:string,
    address:string,
    email:string,
    mobileNo:string){

      this.agentId=agentId;
      this.agentName=agentName;
      this.designation=designation;
      this.salary=salary;
      this.address=address;
      this.email=email;
      this.mobileNo=mobileNo;

  }
}
