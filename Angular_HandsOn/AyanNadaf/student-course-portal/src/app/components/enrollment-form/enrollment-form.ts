import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentFormComponent {
  studentName = '';
  studentEmail = '';
  courseId = '';
  preferredSemester = '';
  agreeToTerms = false;
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }

  resetForm(): void {
    this.studentName = '';
    this.studentEmail = '';
    this.courseId = '';
    this.preferredSemester = '';
    this.agreeToTerms = false;
    this.submitted = false;
  }

  get isFormValid(): boolean {
    return !!(
      this.studentName.trim().length >= 3 &&
      this.studentEmail.includes('@') &&
      this.courseId.trim() &&
      this.preferredSemester.trim() &&
      this.agreeToTerms
    );
  }
}
