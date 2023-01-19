import { Component } from '@angular/core';
import { Student } from '../interfaces/student.interface';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  constructor(private studentService: StudentService) {}
  public students: any[];

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.studentService.getAll().subscribe((result: Student[]) => {
      console.log(result);
      this.students = result;
    });
  }
}
