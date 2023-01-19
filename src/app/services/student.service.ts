import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly apiUrl: string = 'http://localhost:8080/api/v1/students';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/all`);
  }

  getOne(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/find/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }

  save(student: Student): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save`, student);
  }

  edit(student: Student): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit`, student);
  }
}
