import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Course } from '../../models/course';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-course-card',
  imports: [CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();
  previousCourseValue: Course | null = null;
  currentCourseValue: Course | null = null;

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
      this.enrollRequested.emit(this.course.id);
    }
  }
}
