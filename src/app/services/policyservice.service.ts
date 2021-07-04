import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyServiceService {

  policy:Policy[]=[];
  constructor(private httpService:HttpClient) { }
  CreatePolicy(policy:Policy):Observable<Policy>{
    console.log(policy);
   return this.httpService.post<Policy>("http://localhost:9091/policy/CreatePolicy",policy);
  }
  GetPolicies(){
    return this.httpService.get<Policy[]>("http://localhost:9091/policy/ViewAllPolicy");
  }
  UpdatePolicy(policy:Policy){
    console.log(policy);
    return this.httpService.put<Policy>("http://localhost:9091/policy/UpdatePolicy",policy);
  }
  public DeletePolicy(policy:Policy){
    return this.httpService.delete<Policy>("http://localhost:9091/policy/DeletePolicy/"+policy.policyId);
  }
  GetPolicyById(id:number){
    return this.httpService.get<Policy>("http://localhost:9091/policy/ViewPolicyById/"+id);
  }
}

export class Policy{
  
    policyId: number;
    policyEffectiveDate: Date;
    policyEndDate: Date;
    policyTerm: number;
    policyStatus: string;

constructor( policyId: number,
  policyEffectiveDate: Date,
  policyEndDate: Date,
  policyTerm: number,
  policyStatus: string){
  this.policyId=policyId;
  this.policyEffectiveDate=policyEffectiveDate;
  this.policyEndDate=policyEndDate;
  this.policyTerm=policyTerm;
  this.policyStatus=policyStatus;

}
}


  