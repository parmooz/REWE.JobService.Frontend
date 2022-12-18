import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './Applicants/applicant/applicant.component';
import { JobDetailComponent } from './Jobs/job-detail/job-detail.component';
import { JobSearchComponent } from './Jobs/job-search/job-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './identrity/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplicantComponent,
    JobDetailComponent,
    JobSearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
