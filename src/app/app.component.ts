import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vacation } from './../assets/models';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { Annotator } from '../assets/models';
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
export class AppComponent implements OnInit {
  title = 'vacation_planner';
  get: boolean = true;

  annotators: Annotator[] = [];
  vacations: Vacation[] = [];

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    //this.createUser('audrey', 'hello@live.com');
  }

  createAnnotator(annotator: Annotator) {
    this.dbService.createAnnotator(annotator).subscribe(
      () => {
        console.log('Annotator created successfully');
        // Handle success
      },
      (error) => {
        console.error('Error creating annotator:', error);
        // Handle error
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

      console.log(this.annotators);
      console.log(this.vacations);
    } else if (this.get === false) {
      this.createAnnotator(testAnnotator);
    }
  }
}
