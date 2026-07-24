import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { CourseModel } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { CourseState } from '../../store/course/course.reducer';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({
  standalone: true,
  selector: 'app-course-list',
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses$: Observable<CourseModel[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  selectedCourseId: number | null = null;

  constructor(private store: Store<{ courses: CourseState }>) {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: CourseModel): number {
    return course.id;
  }
}
