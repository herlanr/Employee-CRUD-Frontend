import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CreateDialogComponent } from '../../dialog/create-dialog/create-dialog.component';

@Component({
  selector: 'app-create-button',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './create-button.component.html',
  styleUrl: './create-button.component.scss'
})
export class CreateButtonComponent {

  constructor(private dialog: MatDialog) {}

  onCreate(): void {
    this.dialog.open(CreateDialogComponent)
  }
  
}
