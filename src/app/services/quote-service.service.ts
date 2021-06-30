import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  quote:Quote[]=[];
  constructor(private httpService:HttpClient) { }
  CreateQuote(quote:Quote):Observable<Quote>{
    console.log(quote);
   return this.httpService.post<Quote>("http://localhost:8081/quote/CreateQuote",quote);
  }
  GetQuotes(){
    return this.httpService.get<Quote[]>("http://localhost:8081/quote/ViewAllQuotes");
  }
  UpdateQuote(quote:Quote){
    console.log(quote);
    return this.httpService.put<Quote>("http://localhost:8081/quote/UpdateQuote",quote);
  }
  public DeleteQuote(quote:Quote){
    return this.httpService.delete<Quote>("http://localhost:8081/quote/DeleteQuote/"+quote.quoteId);
  }
  GetQuoteById(id:number){
    return this.httpService.get<Quote>("http://localhost:8081/quote/ViewQuoteById/"+id);
  }
}

export class Quote{
  quoteId:number;
  premiumType:string;
premium:number;
dwellingCoverage:number;
detachedStructureCoverage:number;
personalPropertyCoverage:number;
additionalLivingExpense:number;
medicalExpense:number;
deductibleAmount:number;
constructor(quoteId:number,
  premiumType:string,
premium:number,
dwellingCoverage:number,
detachedStructureCoverage:number,
personalPropertyCoverage:number,
additionalLivingExpense:number,
medicalExpense:number,
deductibleAmount:number){
  this.quoteId=quoteId;
  this.premiumType=premiumType;
this.premium=premium;
this.dwellingCoverage=dwellingCoverage;
this.detachedStructureCoverage=detachedStructureCoverage;
this.personalPropertyCoverage=personalPropertyCoverage;
this.additionalLivingExpense=additionalLivingExpense;
this.medicalExpense=medicalExpense;
this.deductibleAmount=deductibleAmount;

}
}
