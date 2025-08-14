import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../../services/employee.service';
import { EnumService } from '../../../services/enum.service';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { RefreshService } from '../../../services/refresh.service';

@Component({
  selector: 'app-create-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule, 
    MatOptionModule
  ],
  templateUrl: './create-dialog.component.html',
  styleUrl: './create-dialog.component.scss'
})
export class CreateDialogComponent implements OnInit {
  employeeForm: FormGroup;

  departments: string[] = [];
  positions: string[] = [];


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateDialogComponent>,
    private employeeService : EmployeeService,
    private enumService : EnumService,
    private refreshService: RefreshService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.enumService.getDepartments().subscribe(data => {
      this.departments = data
    });

    this.enumService.getPositions().subscribe(data => {
      this.positions = data;
    });

  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService.save(this.employeeForm.value).subscribe({
        next: (result) => {
          this.dialogRef.close(result);
          this.refreshService.triggerRefresh();
        }
      })
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}