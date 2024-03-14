import { Component , OnInit, input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../../shared/heading/heading.component';
@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CommonModule,CardComponent,HeadingComponent],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent implements OnInit{
  candidates:any =[];
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getAllcandidates();
  }

  getAllcandidates(){
    this.httpClient.get('assets/data/candidates.json').subscribe({
      next:(candidates)=>{
        this.candidates = candidates;
      },
      error:(errors)=>{
        console.log(errors);
      }
    })
  }
}
