import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { DbService } from '../db.service';

export interface User {
  email: string;
  name: string;
}

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

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    //this.createUser('audrey', 'hello@live.com');
  }

  createUser(user: User) {
    this.dbService.createUser(user).subscribe(
      () => {
        console.log('User created successfully');
        // Handle success
      },
      (error) => {
        console.error('Error creating user:', error);
        // Handle error
      }
    );
  }

  addUser() {
    const user: User = {
      name: 'Audrey',
      email: 'who knows',
    };

    if (this.get === true) {
      this.dbService.getUsers();
    } else if (this.get === false) {
      this.createUser(user);
    }
  }
}
