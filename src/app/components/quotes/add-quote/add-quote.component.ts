import { Component, OnInit } from '@angular/core';
import { QuoteServiceService,Quote } from 'src/app/services/quote-service.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  quote:Quote=new Quote(0,"",0,0,0,0,0,0,0);
  constructor(private quoteService:QuoteServiceService) { }

  ngOnInit(): void {
  }
  CreateQuote(): void {
    this.quoteService.CreateQuote(this.quote).subscribe( data => {alert("Quote Created Successfully");});
  }
}