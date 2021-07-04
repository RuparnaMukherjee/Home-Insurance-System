import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuoteComponent } from './components/quotes/add-quote/add-quote.component';
import { ListQuoteComponent } from './components/quotes/list-quote/list-quote.component';
import { ViewQuoteByIdComponent } from './components/quotes/view-quote-by-id/view-quote-by-id.component';
import { QuoteServiceService } from './services/quote-service.service';
import { AgentServiceService } from './services/agent-service.service';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateQuoteComponent } from './components/quotes/update-quote/update-quote.component';
import { AgentDashboardComponent } from './components/agent/agent-dashboard/agent-dashboard.component';
import { QuotesDashboardComponent } from './components/quotes/quotes-dashboard/quotes-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PolicyholderDashboardComponent } from './components/policyHolder/policyholder-dashboard/policyholder-dashboard.component';
import { AgentManagementComponent } from './components/agent/agent-management/agent-management.component';
import { AddAgentComponent } from './components/agent/add-agent/add-agent.component';
import { ListAgentComponent } from './components/agent/list-agent/list-agent.component';
import { ViewAgentByIdComponent } from './components/agent/view-agent-by-id/view-agent-by-id.component';
import { UpdateAgentComponent } from './components/agent/update-agent/update-agent.component';
import { CreatePolicyComponent } from './components/policy/createpolicy/createpolicy.component';
import { UpdatePolicyComponent } from './components/policy/updatepolicy/updatepolicy.component';
import { PolicyListComponent } from './components/policy/policylist/policylist.component';
import { PolicyDashboardComponent } from './components/policy/policydashboard/policydashboard.component';
import { ViewPolicyByIdComponent } from './components/policy/viewpolicyby-id/viewpolicyby-id.component';
import { PolicyServiceService } from './services/policyservice.service';
import { AddPolicyHolderComponent } from './components/policyHolder/add-policy-holder/add-policy-holder.component';
import { UpdatePolicyHolderComponent } from './components/policyHolder/update-policy-holder/update-policy-holder.component';
import { ViewPolicyHolderComponent } from './components/policyHolder/view-policy-holder/view-policy-holder.component';
import { DeletePolicyHolderComponent } from './components/policyHolder/delete-policy-holder/delete-policy-holder.component';
import { ViewByIdPolicyHolderComponent } from './components/policyHolder/view-by-id-policy-holder/view-by-id-policy-holder.component';
import { PolicyHolderServiceService } from './services/policy-holder-service.service';
import { ManagePolicyHolderComponent } from './components/policyHolder/manage-policy-holder/manage-policy-holder.component';
import { ViewPolicyholdersByAgentIdComponent } from './components/agent/view-policyholders-by-agent-id/view-policyholders-by-agent-id.component';
import { ViewPoliciesByAgentIdComponent } from './components/agent/view-policies-by-agent-id/view-policies-by-agent-id.component';


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
    LoginComponent,
    PolicyholderDashboardComponent,
    AgentManagementComponent,
    AddAgentComponent,
    ListAgentComponent,
    ViewAgentByIdComponent,
    UpdateAgentComponent,
    CreatePolicyComponent,
    UpdatePolicyComponent,
    PolicyListComponent,
    PolicyDashboardComponent,
    ViewPolicyByIdComponent,
     AddPolicyHolderComponent,
    UpdatePolicyHolderComponent,
    ViewPolicyHolderComponent,
    DeletePolicyHolderComponent,
    ViewByIdPolicyHolderComponent,
    ManagePolicyHolderComponent,  
       ViewPolicyholdersByAgentIdComponent,
    ViewPoliciesByAgentIdComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuoteServiceService,AgentServiceService,HttpClient,PolicyServiceService,PolicyHolderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
