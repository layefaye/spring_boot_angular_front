import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from '../interfaces/student.interface';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent {
  student: Student;

  firstname = new FormControl('');
  lastname = new FormControl('');
  phone = new FormControl('');
  address = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
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
          this.firstname.setValue('' + student.firstname);
          this.lastname.setValue('' + student.lastname);
          this.phone.setValue('' + student.phone);
          this.email.setValue('' + student.email);
          this.password.setValue('' + student.password);
          this.address.setValue('' + student.address);
        });
    });
  }

  editStudent(): void {
    if (
      this.firstname.value != '' &&
      this.lastname.value != '' &&
      this.address.value != '' &&
      this.address.value != '' &&
      this.password.value != '' &&
      this.phone.value != ''
    ) {
      this.student.firstname = '' + this.firstname.value;
      this.student.lastname = '' + this.lastname.value;
      this.student.email = '' + this.email.value;
      this.student.password = '' + this.password.value;
      this.student.address = '' + this.address.value;
      this.student.phone = '' + this.phone.value;
      this.studentService.edit(this.student).subscribe(() => {
        console.log('modification réussie.');
        location.replace('/students');
      });
    }
  }
}
