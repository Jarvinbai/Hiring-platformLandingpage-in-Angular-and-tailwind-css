import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeMatchComponent } from './resume-match/resume-match.component';
import { InterviewHubComponent } from './interview-hub/interview-hub.component';
import { TestComponent } from './test/test.component';
import { JobslistComponent } from './jobslist/jobslist.component';
import { CandidateslistComponent } from './candidateslist/candidateslist.component';
import { JobsComponent } from './jobs/jobs.component';
import { CandidatesComponent } from './candidates/candidates.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'jobs',component:JobslistComponent},
    {path:'jobslist',component:JobsComponent},
    {path:'candidateslist',component:CandidatesComponent},
    {path:'candidates',component:CandidateslistComponent},
    {path:'resumematch',component:ResumeMatchComponent},
    {path:'interviewhub',component:InterviewHubComponent},
    {path:'test',component:TestComponent},
];