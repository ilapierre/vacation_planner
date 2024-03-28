import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-error-popup',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './error-popup.component.html',
  styleUrl: './error-popup.component.css',
})
export class ErrorPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  refresh() {
    location.reload();
  }
}
