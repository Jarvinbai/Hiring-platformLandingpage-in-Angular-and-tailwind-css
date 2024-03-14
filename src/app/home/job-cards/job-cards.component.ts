import { Component , OnInit, input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../../shared/heading/heading.component';

@Component({
  selector: 'app-job-cards',
  standalone: true,
  imports: [HttpClientModule,CommonModule,CardComponent,HeadingComponent],
  templateUrl: './job-cards.component.html',
  styleUrl: './job-cards.component.css'
})
export class JobCardsComponent implements OnInit{

  jobs:any =[];
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs(){
    this.httpClient.get('assets/data/jobs.json').subscribe({
      next:(jobs)=>{
        this.jobs = jobs;
      },
      error:(errors)=>{
        console.log(errors);
      }
    })
  }
}
