import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorPopupComponent } from './app/dashboard/error-popup/error-popup.component';
import { Annotator, Vacation } from './assets/models';

@Injectable({
  providedIn: 'any',
})
export class DbService {
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  annotators: any;
  vacations: any;
  annotatorsVacations: any;

  //Annotators
  createAnnotator(annotator: Annotator) {
    const name = annotator.name;

    return this.http.post('http://localhost:3000/api/annotators', { name });
  }

  getAnnotators() {
    let response;
    this.http.get<any[]>('http://localhost:3000/api/annotators').subscribe(
      (response) => {
        this.annotators = response;
      },
      (error) => {
        this.errorPopup(error.message);
      }
    );

    return this.annotators;
  }

  //Vacations
  createVacation(vacation: Vacation) {
    const name = vacation.description;

    return this.http.post('http://localhost:3000/api/vacations', { name });
  }

  getVacations() {
    let response;
    this.http.get<any[]>('http://localhost:3000/api/vacations').subscribe(
      (response) => {
        this.vacations = response;
      },
      (error) => {
        this.errorPopup(error.message);
      }
    );
    return this.vacations;
  }

  //Both
  getAnnotatorsVacations() {
    let response;
    // debugger;
    this.http
      .get<any[]>('http://localhost:3000/api/annotatorsVacations')
      .subscribe(
        (response) => {
          this.annotatorsVacations = response;
        },
        (error) => {
          this.errorPopup(error.message);
        }
      );
    return this.annotatorsVacations;
  }

  errorPopup(message: any): void {
    const dialogRef = this.dialog.open(ErrorPopupComponent, {
      data: {
        errorTitle: 'Missing events!',
        errorMessage: "Couldn't fetch events." + message,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
