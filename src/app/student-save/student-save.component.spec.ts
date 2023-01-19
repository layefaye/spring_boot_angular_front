import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSaveComponent } from './student-save.component';

describe('StudentSaveComponent', () => {
  let component: StudentSaveComponent;
  let fixture: ComponentFixture<StudentSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
