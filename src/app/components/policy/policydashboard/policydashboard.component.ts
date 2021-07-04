import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-dashboard',
  templateUrl: './policydashboard.component.html',
  styleUrls: ['./policydashboard.component.css']
})
export class PolicyDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
