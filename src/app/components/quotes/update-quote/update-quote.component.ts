import { Component, OnInit } from '@angular/core';
import { QuoteServiceService,Quote } from 'src/app/services/quote-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-quote',
  templateUrl: './update-quote.component.html',
  styleUrls: ['./update-quote.component.css']
})
export class UpdateQuoteComponent implements OnInit {

  quote:Quote=new Quote(0,"",0,0,0,0,0,0,0);
  constructor(private quoteService:QuoteServiceService) { }

  ngOnInit(): void {
  }
  UpdateQuote():void {
    console.log(this.quote.quoteId);
    this.quoteService.UpdateQuote(this.quote).subscribe( date=> {alert("Quote updated Successfully")});
  }

}
