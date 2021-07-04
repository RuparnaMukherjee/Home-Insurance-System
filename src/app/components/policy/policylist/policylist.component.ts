import { Component, OnInit } from '@angular/core';
import { PolicyServiceService,Policy } from 'src/app/services/policyservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policylist.component.html',
  styleUrls: ['./policylist.component.css']
})
export class PolicyListComponent implements OnInit {

  policies !:Policy[];
  constructor(private policyService:PolicyServiceService, private router: Router) { }

  ngOnInit() {
    this.policyService.GetPolicies().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }
  handleSuccessfulResponse(response: Policy[] ){
    this.policies=response;
  }
  DeletePolicy(policy: Policy): void {
    this.policyService.DeletePolicy(policy)
      .subscribe( data => {
        this.policies = this.policies.filter(u => u !== policy);});

  }

}

  
