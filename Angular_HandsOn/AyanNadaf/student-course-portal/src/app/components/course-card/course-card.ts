import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseModel } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: CourseModel;
  @Output() enrollRequested = new EventEmitter<number>();
  previousCourseValue: CourseModel | null = null;
  currentCourseValue: CourseModel | null = null;

  constructor(public enrollmentService: EnrollmentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      this.previousCourseValue = changes['course'].previousValue ?? null;
      this.currentCourseValue = changes['course'].currentValue ?? null;
      console.log('CourseCardComponent input changed', {
        previousValue: this.previousCourseValue,
        currentValue: this.currentCourseValue,
      });
    }
  }

  onEnroll(): void {
    if (this.course) {
      if (this.enrollmentService.isEnrolled(this.course.id)) {
        this.enrollmentService.unenroll(this.course.id);
      } else {
        this.enrollmentService.enroll(this.course.id);
      }
      this.enrollRequested.emit(this.course.id);
    }
  }
}
