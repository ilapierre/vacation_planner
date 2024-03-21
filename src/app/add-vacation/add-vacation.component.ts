import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-add-vacation',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormComponent,
    HttpClientModule,
  ],
  templateUrl: './add-vacation.component.html',
  styleUrl: './add-vacation.component.css',
})
export class AddVacationComponent {
  constructor(public dialog: MatDialog) {}

  openFormDialog(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '250px',
      // You can add data or configuration here
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // Handle any actions after the dialog is closed, if necessary
    });
  }
}
