import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentSaveComponent } from './student-save/student-save.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'student/show/:id', component: StudentDetailsComponent },
  { path: 'student/save', component: StudentSaveComponent },
  { path: '***', redirectTo: 'students' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
