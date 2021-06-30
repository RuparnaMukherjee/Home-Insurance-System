import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuoteComponent } from './components/quotes/add-quote/add-quote.component';
import { ListQuoteComponent } from './components/quotes/list-quote/list-quote.component';
import { ViewQuoteByIdComponent } from './components/quotes/view-quote-by-id/view-quote-by-id.component';
import { QuoteServiceService } from './services/quote-service.service';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateQuoteComponent } from './components/quotes/update-quote/update-quote.component';
import { AgentDashboardComponent } from './components/agent/agent-dashboard/agent-dashboard.component';
import { QuotesDashboardComponent } from './components/quotes/quotes-dashboard/quotes-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponent,
    ListQuoteComponent,
    ViewQuoteByIdComponent,
    UpdateQuoteComponent,
    AgentDashboardComponent,
    QuotesDashboardComponent,
    AdminDashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuoteServiceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
