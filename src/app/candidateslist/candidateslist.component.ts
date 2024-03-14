import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CandidatesTableComponent } from '../shared/candidates-table/candidates-table.component';

@Component({
  selector: 'app-candidateslist',
  standalone: true,
  imports: [CommonModule,CandidatesTableComponent],
  templateUrl: './candidateslist.component.html',
  styleUrl: './candidateslist.component.css'
})
export class CandidateslistComponent {

}
