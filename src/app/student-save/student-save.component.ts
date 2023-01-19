import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../interfaces/student.interface';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-save',
  templateUrl: './student-save.component.html',
  styleUrls: ['./student-save.component.css'],
})
export class StudentSaveComponent {
  constructor(private studentService: StudentService, private router: Router) {}

  student: any;
  firstname = new FormControl('');
  lastname = new FormControl('');
  phone = new FormControl('');
  address = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  addStudent(): void {
    if (
      this.firstname.value != '' &&
      this.lastname.value != '' &&
      this.address.value != '' &&
      this.address.value != '' &&
      this.password.value != '' &&
      this.phone.value != ''
    ) {
      this.student = {
        firstname: this.firstname.value,
        lastname: this.lastname.value,
        address: this.address.value,
        phone: this.phone.value,
        email: this.email.value,
        password: this.password.value,
      };
      this.studentService
        .save(this.student)
        .subscribe(() => console.log('enregistrement réussie'));
      location.replace('/students');
    }
  }
}
function Student(): any {
  throw new Error('Function not implemented.');
}
