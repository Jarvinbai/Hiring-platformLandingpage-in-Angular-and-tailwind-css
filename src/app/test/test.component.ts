import { Component } from '@angular/core';
import { RatingComponent } from '../shared/rating/rating.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/card/card.component';
import { JobCardsComponent } from '../home/job-cards/job-cards.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule,RatingComponent,CardComponent,JobCardsComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  ratingValue = 4;
}
