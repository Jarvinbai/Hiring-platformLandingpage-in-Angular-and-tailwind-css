import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/heading/heading.component';

@Component({
  selector: 'app-how-it-work',
  standalone: true,
  imports: [CommonModule,HeadingComponent],
  templateUrl: './how-it-work.component.html',
  styleUrl: './how-it-work.component.css'
})
export class HowItWorkComponent {

}
