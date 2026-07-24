import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CourseModel } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
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
  enrolledCourseIds$: Observable<number[]>;

  constructor(private store: Store) {
    this.enrolledCourseIds$ = this.store.select(selectEnrolledCourseIds);
  }

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
      this.enrolledCourseIds$.subscribe((ids) => {
        if (ids.includes(this.course.id)) {
          this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
        } else {
          this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
        }
      }).unsubscribe();
      this.enrollRequested.emit(this.course.id);
    }
  }
}
