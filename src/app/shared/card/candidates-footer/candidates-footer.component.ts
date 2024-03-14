import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { CommonModule } from '@angular/common';
import { jobs } from '../../../models/jobs.model';
import { candidates } from '../../../models/candidates.model';

@Component({
  selector: 'app-candidates-footer',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './candidates-footer.component.html',
  styleUrl: './candidates-footer.component.css'
})
export class CandidatesFooterComponent {
  @Input('candidate')
  candidate!:candidates;
}
