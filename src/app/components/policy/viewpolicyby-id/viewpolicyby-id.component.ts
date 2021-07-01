import { Component, OnInit } from '@angular/core';
import { Policy,PolicyServiceService } from 'src/app/services/policyservice.service';


@Component({
  selector: 'app-view-policy-by-id',
  templateUrl: './viewpolicyby-id.component.html',
  styleUrls: ['./viewpolicyby-id.component.css']
})
export class ViewPolicyByIdComponent implements OnInit {

  policy!:Policy;
  id!:number;
  constructor(private policyService:PolicyServiceService) { }

  ngOnInit(): void {
  }
  GetPolicyById(id:number){
    console.log(id);
    this.policyService.GetPolicyById(this.id).subscribe(
      policy=>this.policy=policy
    );
    if(this.policy===undefined)
    {
      alert("Policy not Found")
      console.log(this.policy)
    }
  }

}
