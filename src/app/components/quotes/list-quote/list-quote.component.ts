import { Component, OnInit } from '@angular/core';
import { QuoteServiceService,Quote } from 'src/app/services/quote-service.service';

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.css']
})
export class ListQuoteComponent implements OnInit {
  quotes:Quote[]=[];

  constructor(private quoteService:QuoteServiceService) { }

  ngOnInit() {
    this.quoteService.GetQuotes().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }
  handleSuccessfulResponse(response: Quote[] ){
    this.quotes=response;
  }
  DeleteQuote(quote: Quote): void {
    this.quoteService.DeleteQuote(quote)
      .subscribe( data => {
        this.quotes = this.quotes.filter(u => u !== quote);});
      
  }

}
