import { Component, Input } from '@angular/core';
import { JobsFooterComponent } from './jobs-footer/jobs-footer.component';
import { CandidatesFooterComponent } from './candidates-footer/candidates-footer.component';
import { CommonModule } from '@angular/common';
import { jobs } from '../../models/jobs.model';
import { candidates } from '../../models/candidates.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,JobsFooterComponent,CandidatesFooterComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input('input')
  input!:jobs|candidates;

  @Input('type')
  type='C' //J ,C

  castToJobs(input:jobs|candidates){
    return input as jobs;
  }
  castToCandidates(input:jobs|candidates){
    return input as candidates;
  }
}
