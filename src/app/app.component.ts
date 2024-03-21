import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
}
