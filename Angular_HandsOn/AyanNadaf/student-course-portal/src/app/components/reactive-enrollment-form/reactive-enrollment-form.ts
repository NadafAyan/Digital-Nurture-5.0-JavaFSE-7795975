import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollmentForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [this.emailValidator()]],
      courseCode: ['', [Validators.required, this.courseCodeValidator]],
      semester: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]),
    });
  }

  get additionalCoursesArray(): FormArray {
    return this.enrollmentForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCoursesArray.push(this.fb.control(''));
  }

  removeCourse(index: number): void {
    this.additionalCoursesArray.removeAt(index);
  }

  onSubmit(): void {
    console.log('form.value', this.enrollmentForm.value);
    console.log('getRawValue()', this.enrollmentForm.getRawValue());
    if (this.enrollmentForm.valid) {
      alert('Reactive form submitted successfully!');
    }
  }

  private courseCodeValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (value && value.startsWith('XX')) {
      return { invalidCourseCode: true };
    }
    return null;
  }

  private emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const value = control.value as string;
      if (!value || !value.includes('test@')) {
        return of(null).pipe(delay(800));
      }
      return of({ invalidEmail: true }).pipe(delay(800));
    };
  }
}
