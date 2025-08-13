import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-employee-management',
  imports: [MatTableModule, MatSortModule, CommonModule, MatIconModule, MatButtonModule ],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss',
  standalone: true
})
export class EmployeeManagementComponent implements OnInit, AfterViewInit{

  private _liveAnnouncer = inject(LiveAnnouncer);

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'salary', 'department', 'position', 'actions'];
  dataSource = new MatTableDataSource<Employee>();

  constructor(private employeeService: EmployeeService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.employeeService.getAll().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => {
        console.error('Error loading employees', err);
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onDelete(employee: Employee): void{
    this.dialog.open(DeleteDialogComponent, {
      data: { employee: employee }
    });
  }

  onEdit(employee: Employee): void{
    
  }
}
