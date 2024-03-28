import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-vacation-popup',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './vacation-popup.component.html',
  styleUrl: './vacation-popup.component.css',
})
export class VacationPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
