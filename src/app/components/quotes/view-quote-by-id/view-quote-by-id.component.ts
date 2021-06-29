import { Component, OnInit } from '@angular/core';
import { Quote,QuoteServiceService } from 'src/app/services/quote-service.service';

@Component({
  selector: 'app-view-quote-by-id',
  templateUrl: './view-quote-by-id.component.html',
  styleUrls: ['./view-quote-by-id.component.css']
})
export class ViewQuoteByIdComponent implements OnInit {

  quote!:Quote;
  id!:number;
  constructor(private quoteService:QuoteServiceService) { }

  ngOnInit(): void {
  }
  GetQuoteById(id:number){
    console.log(id);
    this.quoteService.GetQuoteById(this.id).subscribe(
      quote=>this.quote=quote
    );
  }

}
