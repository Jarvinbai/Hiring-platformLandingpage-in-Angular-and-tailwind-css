import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JobsFooterComponent } from '../shared/card/jobs-footer/jobs-footer.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule,JobsFooterComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  @Input('type')
  type='J' //J ,C
  jobsArray: any[] = [
    {
      jobTitle: "C++",
      status: "Pre-assessment Phase"
    },
    {
      jobTitle: "Java Developer",
      status: "Pre-assessment Phase"
    },
    {
      jobTitle: "Python",
      status: "Pre-assessment Phase"
    },
    {
      jobTitle: "php",
      status: "Screening Tests"
    },
    {
      jobTitle: "C#",
      status: "Screening Tests"
    },
    {
      jobTitle: "Software testing",
      status: "Screening Tests"
    },
    {
      jobTitle: "Laravel Developer",
      status: "Skills Evaluation"
    },
    {
      jobTitle: "Qt developer",
      status: "Skills Evaluation"
    },
    {
      jobTitle: "Django Develop[er",
      status: "Skills Evaluation"
    },
    {
      jobTitle: "Spring Boot",
      status: "Skills Evaluation"
    }
  ]

  currentItem: any;

  filterJobs(status: string){
    return this.jobsArray.filter(m=>m.status == status);
  }

  onDragStart(item: any){
    console.log('onDragStart');
    this.currentItem = item;
  }

  onDrop(event: any, status: string){
    console.log('onDrop');
    event.preventDefault();
    const record = this.jobsArray.find(m=>m.jobTitle == this.currentItem.jobTitle);
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
