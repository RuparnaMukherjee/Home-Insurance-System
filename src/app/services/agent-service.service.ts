import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
