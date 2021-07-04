import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from 'src/app/AddressFolder/Address';

@Injectable({
  providedIn: 'root'
})
export class PolicyHolderServiceService {
  policyHolder:PolicyHolder[]=[];
  constructor(private  httpService:HttpClient) { }
  public CreatePolicyHolder(policyHolder:PolicyHolder):Observable<PolicyHolder>{
    console.log(policyHolder);
   return this.httpService.post<PolicyHolder>("http://localhost:8081/policyholder/AddPolicyholder",policyHolder);
   }
  public ViewPolicyHolder(){
    return this.httpService.get<PolicyHolder[]>("http://localhost:8081/policyholder/ViewAllPolicyHolder");
   }
  public UpdatePolicyHolder(policyHolder:PolicyHolder){
    console.log(policyHolder);
    return this.httpService.put<PolicyHolder>("http://localhost:8081/policyholder/UpdatePolicyHolder",policyHolder);
   }
  public DeletePolicyHolder(policyHolder:PolicyHolder){
    return this.httpService.delete<PolicyHolder>("http://localhost:8081/policyholder/DeletePolicyHolder/"+policyHolder.policyHolderId);
   }
  public ViewPolicyHolderById(id:number){
    return this.httpService.get<PolicyHolder>("http://localhost:8081/policyholder/ViewPolicyHolderById/"+id);
  }
  public viewPolicyHolderByEmailId(id:string){
    return this.httpService.get<PolicyHolder>("http://localhost:8081/policyholderDashboard/ViewPolicyHolderByEmailId/"+id)
  } 

}

export class PolicyHolder{

  policyHolderId:number;
  policyHolderName:string;
  policyName:string;
  premiumType:string;
  creditCard:string;
  occupation:string;
  annualIncome:number;
  isRetired:boolean;
  ssn:string;
  emailId:string;
  address:Address;
  constructor(policyHolderId:number,policyHolderName:string,policyName:string,premiumType:string,creditCard:string,occupation:string,annualIncome:number,isRetired:boolean,ssn:string,emailId:string,address:Address)
  {
    this.policyHolderId=policyHolderId;
    this.policyHolderName=policyHolderName;
    this.policyName=policyName;
    this.premiumType=premiumType;
    this.creditCard=creditCard;
    this.occupation=occupation;
    this.annualIncome=annualIncome;
    this.isRetired=isRetired;
    this.ssn=ssn;
    this.emailId=emailId;
    this.address=address;
    
  }
}