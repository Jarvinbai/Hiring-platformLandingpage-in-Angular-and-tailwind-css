import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { JobCardsComponent } from './job-cards/job-cards.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { JoinUsComponent } from './join-us/join-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeroComponent,JobCardsComponent,ButtonComponent,CandidatesComponent,HowItWorkComponent,JoinUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  test(){
    console.log("test");
  }
}
