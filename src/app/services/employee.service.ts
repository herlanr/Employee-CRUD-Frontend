import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { environment } from '../config/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${environment.apiUrl}/employee`

  getAll() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl);
  }


}
