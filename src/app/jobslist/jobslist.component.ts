import { Component } from '@angular/core';
import { JobsTableComponent } from '../shared/jobs-table/jobs-table.component';

@Component({
  selector: 'app-jobslist',
  standalone: true,
  imports: [JobsTableComponent],
  templateUrl: './jobslist.component.html',
  styleUrl: './jobslist.component.css'
})
export class JobslistComponent {
  
}
