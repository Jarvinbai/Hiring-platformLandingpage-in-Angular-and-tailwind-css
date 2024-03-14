import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CandidatesFooterComponent } from '../shared/card/candidates-footer/candidates-footer.component';

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule,CandidatesFooterComponent],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {
  @Input('type')
  type='C' //J ,C

  candidatesArray: any[] = [
    {
      candidateName: "Harshit",
      status: "Pre-assessment Phase"
    },
    {
      candidateName: "Safal",
      status: "Pre-assessment Phase"
    },
    {
      candidateName: "Antony",
      status: "Pre-assessment Phase"
    },
    {
      candidateName: "john",
      status: "Screening Tests"
    },
    {
      candidateName: "ashique",
      status: "Screening Tests"
    },
    {
      candidateName: "good name 1",
      status: "Screening Tests"
    },
    {
      candidateName: "good name 2",
      status: "Skills Evaluation"
    },
    {
      candidateName: "good name 3",
      status: "Skills Evaluation"
    },
    {
      candidateName: "good name 4",
      status: "Skills Evaluation"
    },
    {
      candidateName: "good name 5",
      status: "Skills Evaluation"
    }
  ]

  currentItem: any;

  filterJobs(status: string){
    return this.candidatesArray.filter(m=>m.status == status);
  }

  onDragStart(item: any){
    console.log('onDragStart');
    this.currentItem = item;
  }

  onDrop(event: any, status: string){
    console.log('onDrop');
    event.preventDefault();
    const record = this.candidatesArray.find(m=>m.candidateName == this.currentItem.candidateName);
    if(record!=undefined){
      record.status = status;
    }
    this.currentItem = null;
  }

  onDragOver(event: any){
    console.log('onDragOver');
    event.preventDefault();
  }
}
