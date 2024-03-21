import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Observable } from 'rxjs';
import { AddVacationComponent } from './../add-vacation/add-vacation.component';

export interface Vacation {
  start: string;
  end: string;
}

export interface Annotators {
  name: string;
  vacations: Vacation[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AddVacationComponent,
    FullCalendarModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  calendarOptions: any;
  calendarEvents: any;

  annotators: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
    };

    this.getAnnotators().subscribe((data) => {
      this.annotators = data.annotators;
    });

    this.addVacation(1, '2024-04-05', '2024-04-20');
    this.addVacation(1, '2024-04-06', '2024-04-21', 'Vacances de noel');
    this.addVacation(1, '2024-04-07', '2024-04-22', 'Day off');
    console.log(this.annotators);
  }

  getAnnotators(): Observable<any> {
    return this.http.get('/assets/db_users.json');
  }

  addVacation(
    annotatorId: number,
    start: string,
    end: string,
    description?: string
  ) {
    const annotator = this.annotators.find((a) => a.id === annotatorId);
    if (annotator) {
      annotator.vacations.push({ description, start, end });
    }
  }
}
