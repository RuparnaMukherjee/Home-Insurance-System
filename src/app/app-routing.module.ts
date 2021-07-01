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
import { AgentManagementComponent } from './components/agent/agent-management/agent-management.component';
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { ListAgentComponent } from './components/agent/list-agent/list-agent.component';
import { UpdateAgentComponent } from './components/agent/update-agent/update-agent.component';
import { ViewAgentByIdComponent } from './components/agent/view-agent-by-id/view-agent-by-id.component';
import { PolicyDashboardComponent } from './components/policy/policydashboard/policydashboard.component';
import { CreatePolicyComponent } from './components/policy/createpolicy/createpolicy.component';
import { PolicyListComponent } from './components/policy/policylist/policylist.component';
import { UpdatePolicyComponent } from './components/policy/updatepolicy/updatepolicy.component';
import { ViewPolicyByIdComponent } from './components/policy/viewpolicyby-id/viewpolicyby-id.component';

const routes: Routes = [
  {path:'login-dashboard',component:LoginComponent,},
  {path: '', redirectTo: '/login-dashboard', pathMatch: 'full'},
  {path:'admin-dashboard',component:AdminDashboardComponent,
children:[{
  path: 'manage-agent', // child route path
  component: AgentManagementComponent, // child route component that the router renders
  children:[
    {
      path:'add-agent',component:AddAgentComponent,
    },
    {     
       path:'list-agent',component:ListAgentComponent,
    },
    {
      path:'update-agent',component:UpdateAgentComponent,
    },
    {
      path:'view-agent-by-id',component:ViewAgentByIdComponent,
    }
  ]

},
{path:'manage-policy',component:PolicyDashboardComponent,
children:[
  {path:'add-policy',component:CreatePolicyComponent},
  {path:'list-policy',component:PolicyListComponent},
  {path:'update-policy',component:UpdatePolicyComponent},
  {path:'view-policy-by-id',component:ViewPolicyByIdComponent}
]}]},
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
