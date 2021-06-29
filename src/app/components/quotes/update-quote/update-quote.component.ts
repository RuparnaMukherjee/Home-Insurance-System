import { Component, OnInit } from '@angular/core';
import { QuoteServiceService,Quote } from 'src/app/services/quote-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-quote',
  templateUrl: './update-quote.component.html',
  styleUrls: ['./update-quote.component.css']
})
export class UpdateQuoteComponent implements OnInit {

  qt:Quote=new Quote(0,"",0,0,0,0,0,0,0);
  constructor(private quoteService:QuoteServiceService) { }

  ngOnInit(): void {
  }
  UpdateQuote():void {
    console.log(this.qt.quoteId);
    this.quoteService.UpdateQuote(this.qt).subscribe( date=> {alert("Quote updated Successfully")});
  }

}
