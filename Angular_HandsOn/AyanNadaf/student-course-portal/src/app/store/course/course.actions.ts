import { createAction, props } from '@ngrx/store';
import { CourseModel } from '../../models/course.model';

export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: CourseModel[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);
