import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from '../interfaces/student.interface';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  student: Student;
  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getOne();
  }

  getOne(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.studentService
        .getOne(+params.get('id')!)
        .subscribe((student: Student) => {
          this.student = student;
        });
    });
  }
}
