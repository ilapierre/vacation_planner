import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { Annotator, AnnotatorVacation, Vacation } from '../assets/models';
import { DbService } from '../db.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    DashboardComponent,
    AddVacationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vacation_planner';
  get: boolean = true;

  annotators: Annotator[] = [];
  vacations: Vacation[] = [];
  annotatorsVacations: AnnotatorVacation[] = [];

  constructor(private dbService: DbService) {}

  createAnnotator(annotator: Annotator) {
    this.dbService.createAnnotator(annotator).subscribe(
      () => {
        console.log('Annotator created successfully');
      },
      (error) => {
        console.error('Error creating annotator:', error);
      }
    );
  }

  addAnnotator() {
    const testAnnotator: Annotator = {
      id: 1,
      name: 'Audrey',
    };

    if (this.get === true) {
      this.annotators = this.dbService.getAnnotators();
      this.vacations = this.dbService.getVacations();
      this.annotatorsVacations = this.dbService.getAnnotatorsVacations();

      console.log(this.annotators);
      console.log(this.vacations);
      console.log(this.annotatorsVacations);
    } else if (this.get === false) {
      this.createAnnotator(testAnnotator);
    }
  }
}
