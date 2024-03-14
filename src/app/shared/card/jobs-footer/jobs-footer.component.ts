import { Component, Input } from '@angular/core';
import { RatingComponent } from '../../rating/rating.component';
import { CommonModule } from '@angular/common';
import { CandidatesFooterComponent } from '../candidates-footer/candidates-footer.component';
import { jobs } from '../../../models/jobs.model';

@Component({
  selector: 'app-jobs-footer',
  standalone: true,
  imports: [RatingComponent,CommonModule,JobsFooterComponent,CandidatesFooterComponent],
  templateUrl: './jobs-footer.component.html',
  styleUrl: './jobs-footer.component.css'
})
export class JobsFooterComponent {
  @Input('job')
  job!:jobs;
  rating=4.5;
}
