import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './Applicants/applicant/applicant.component';
import { LoginComponent } from './identrity/login/login.component';
import { JobDetailComponent } from './Jobs/job-detail/job-detail.component';
import { JobSearchComponent } from './Jobs/job-search/job-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './Share/auth.guard';

const routes: Routes = [
{
  path: 'login', 
  component: LoginComponent
},
{
  path: 'JobSearch',
  component: JobSearchComponent,
  canActivate: [AuthGuard] 
},
{
  path: 'JobDetail/:id',
  canActivate: [ AuthGuard],
  component: JobDetailComponent
},
{
  path: 'Applicant',
  component: ApplicantComponent,
  canActivate: [AuthGuard],
},

{
  path: '', redirectTo: 'JobSearch', pathMatch: 'full'
},
{
  path: '**', component: PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
