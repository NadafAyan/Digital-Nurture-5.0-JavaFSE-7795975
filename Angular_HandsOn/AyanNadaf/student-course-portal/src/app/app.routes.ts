import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { EnrollmentFormComponent } from './components/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from './components/reactive-enrollment-form/reactive-enrollment-form';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'courses',
    component: CourseList,
  },
  {
    path: 'enrollment',
    component: EnrollmentFormComponent,
  },
  {
    path: 'reactive-enrollment',
    component: ReactiveEnrollmentFormComponent,
  },
];
