import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDashboardComponent } from './components/agent/agent-dashboard/agent-dashboard.component';
import { AddQuoteComponent } from './components/quotes/add-quote/add-quote.component';
import { ListQuoteComponent } from './components/quotes/list-quote/list-quote.component';
import { QuotesDashboardComponent } from './components/quotes/quotes-dashboard/quotes-dashboard.component';
import { UpdateQuoteComponent } from './components/quotes/update-quote/update-quote.component';
import { ViewQuoteByIdComponent } from './components/quotes/view-quote-by-id/view-quote-by-id.component';
import { LoginComponent } from './components/login/login/login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { PolicyholderDashboardComponent } from './components/policyHolder/policyholder-dashboard/policyholder-dashboard.component';

const routes: Routes = [
  {path:'login-dashboard',component:LoginComponent,},
  {path: '', redirectTo: '/login-dashboard', pathMatch: 'full'},
  {path:'admin-dashboard',component:AdminDashboardComponent},
{ 
path:'agent-dashboard',component:AgentDashboardComponent,
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
  {path:'policyHolder-dashboard',component:PolicyholderDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
