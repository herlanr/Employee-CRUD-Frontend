import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../model/employee';
import { RefreshService } from '../../../services/refresh.service';

@Component({
  selector: 'app-delete-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {

    constructor(
    @Inject(MAT_DIALOG_DATA) public data: {employee: Employee},
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private employeeService : EmployeeService,
    private refreshService: RefreshService
  ) {}

deleteEmployee() {
  this.employeeService.delete(this.data.employee.id).subscribe({
    next: () => {
      this.dialogRef.close(true);
      this.refreshService.triggerRefresh();
    } 
  });
}
}
