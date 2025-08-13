import { Component } from '@angular/core';
import { EmployeeManagementComponent } from "./components/employee-management/employee-management.component";
import { CommonModule } from '@angular/common';
import { CreateButtonComponent } from './components/button/create-button/create-button.component';

@Component({
  selector: 'app-root',
  imports: [EmployeeManagementComponent, CommonModule, CreateButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
