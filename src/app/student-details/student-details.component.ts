import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Student } from '../interfaces/student.interface';
import { StudentService } from '../services/student.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent {
  student: Student;
  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  delete(id: number): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.studentService
        .delete(id)
        .subscribe(() => console.log('suppression réussie!'));
    });

    location.replace('/students');
    // this.router.navigate(['/students']);
  }
}
