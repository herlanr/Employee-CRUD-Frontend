import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../config/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = `${environment.apiUrl}/api/enum`

  getDepartments() : Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}/departments`);
  }

  getPositions() : Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}/positions`);
  }
  
}
