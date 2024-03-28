import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Annotator, AnnotatorVacation, Vacation } from '../../assets/models';
import { DbService } from '../../db.service';
import { AddVacationComponent } from './../add-vacation/add-vacation.component';
import { VacationPopupComponent } from './vacation-popup/vacation-popup.component';
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
    VacationPopupComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  @ViewChild('calendar', { static: false }) calendarRef!: ElementRef;

  calendar: Calendar | null = null;
  calendarOptions: any;
  calendarEvents: any[] = [];

  annotators: Annotator[] = [];
  vacations: Vacation[] = [];
  annotatorsVacations: AnnotatorVacation[] = [];

  constructor(private dbService: DbService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadVacations();
  }

  handleEventClick(clickInfo: any) {
    // alert('Clicked event: ' + clickInfo.event.title);
    this.vacationPopup(clickInfo.event);
  }

  ngAfterViewInit() {
    this.calendar = new Calendar(this.calendarRef.nativeElement, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      events: this.calendarEvents,
      eventClick: this.handleEventClick.bind(this),
    });
    this.calendar.render();

    console.log(this.calendarEvents);
  }

  rndColor(): string {
    let rnd = Math.floor(Math.random() * 5);

    switch (rnd) {
      case 1:
        return 'purple';
      case 2:
        return 'red';
      case 3:
        return 'blue';
      case 4:
        return 'green';
      case 5:
        return 'pink';
      default:
        return 'blue';
    }
  }

  loadVacations() {
    this.annotatorsVacations = this.dbService.getAnnotatorsVacations();

    this.annotatorsVacations.forEach((vacation) => {
      this.calendarEvents.push({
        id: vacation.id,
        title: vacation.name,
        start: vacation.start,
        end: vacation.end,
        description:
          vacation.description !== undefined
            ? vacation.description
            : 'No description',
        color: this.rndColor(),
      });
    });
  }

  vacationPopup(event: any): void {
    console.log(event);
    let duration = Date.parse(event.endStr) - Date.parse(event.startStr);
    duration = duration / 86400000;

    const dialogRef = this.dialog.open(VacationPopupComponent, {
      data: {
        title: event.title,
        description: event.extendedProps.description,
        start: event.startStr,
        end: event.endStr,
        duration: duration,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
