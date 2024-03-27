import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './app/app.component';

@Injectable({
  providedIn: 'any',
})
export class DbService {
  apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  users: any;

  createUser(user: User) {
    const name = user.name;
    const email = user.email;

    return this.http.post(this.apiUrl, { name, email });
  }

  getUsers() {
    let response;
    this.http
      .get<any[]>(this.apiUrl) // Change the URL accordingly
      .subscribe(
        (response) => {
          this.users = response;
          console.log('Users:', this.users);
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );

    return response;
  }
}
