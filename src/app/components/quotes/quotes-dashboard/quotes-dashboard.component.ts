import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-quotes-dashboard',
  templateUrl: './quotes-dashboard.component.html',
  styleUrls: ['./quotes-dashboard.component.css']
})
export class QuotesDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
