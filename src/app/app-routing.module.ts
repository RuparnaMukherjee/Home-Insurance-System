import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDashboardComponent } from './components/agent/agent-dashboard/agent-dashboard.component';
import { AddQuoteComponent } from './components/quotes/add-quote/add-quote.component';
import { ListQuoteComponent } from './components/quotes/list-quote/list-quote.component';
import { QuotesDashboardComponent } from './components/quotes/quotes-dashboard/quotes-dashboard.component';
import { UpdateQuoteComponent } from './components/quotes/update-quote/update-quote.component';
import { ViewQuoteByIdComponent } from './components/quotes/view-quote-by-id/view-quote-by-id.component';

const routes: Routes = [
{path:'agent-dashboard',component:AgentDashboardComponent,
children: [
  {
    path: 'quotes-dashboard', // child route path
    component: QuotesDashboardComponent, // child route component that the router renders
    children:[
      {
        path:'add-quote',component:AddQuoteComponent
      },
      {
        path:'list-quote',component:ListQuoteComponent,
      },
      {
        path:'update-quote',component:UpdateQuoteComponent,
      },
      {
        path:'view-quote-by-id',component:ViewQuoteByIdComponent,
      }
    ]
  }]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
