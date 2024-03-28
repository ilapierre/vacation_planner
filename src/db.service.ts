import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annotator } from './app/app.component';

@Injectable({
  providedIn: 'any',
})
export class DbService {
  apiUrl = 'http://localhost:3000/api/annotators';

  constructor(private http: HttpClient) {}

  annotators: any;

  createAnnotator(annotator: Annotator) {
    const name = annotator.name;

    return this.http.post(this.apiUrl, { name });
  }

  getAnnotators() {
    let response;
    this.http
      .get<any[]>(this.apiUrl) // Change the URL accordingly
      .subscribe(
        (response) => {
          this.annotators = response;
        },
        (error) => {
          console.error('Error fetching annotators:', error);
        }
      );
    return this.annotators;
  }
}
