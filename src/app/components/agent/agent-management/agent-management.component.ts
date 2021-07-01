import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrls: ['./agent-management.component.css']
})
export class AgentManagementComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
