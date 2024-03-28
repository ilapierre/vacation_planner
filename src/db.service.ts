import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annotator } from './assets/models';

@Injectable({
  providedIn: 'any',
})
export class DbService {
  constructor(private http: HttpClient) {}

  annotators: any;
  vacations: any;
  annotatorsVacations: any;

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
        console.error('Error fetching annotators:', error);
      }
    );

    return this.annotators;
  }

  getVacations() {
    let response;
    this.http.get<any[]>('http://localhost:3000/api/vacations').subscribe(
      (response) => {
        this.vacations = response;
      },
      (error) => {
        console.error('Error fetching annotators:', error);
      }
    );
    return this.vacations;
  }

  getAnnotatorsVacations() {
    let response;
    this.http
      .get<any[]>('http://localhost:3000/api/annotatorsVacations')
      .subscribe(
        (response) => {
          this.annotatorsVacations = response;
        },
        (error) => {
          console.error('Error fetching annotators:', error);
        }
      );
    return this.annotatorsVacations;
  }
}
