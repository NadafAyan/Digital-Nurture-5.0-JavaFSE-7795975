import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { NotFoundComponent } from './pages/not-found/not-found';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetailComponent },
    ],
  },
  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [AuthGuard],
  },
  {
    path: 'enroll',
    loadChildren: () => import('./features/enrollment/enrollment.routes').then((m) => m.enrollmentRoutes),
  },
  {
    path: 'reactive-enrollment',
    loadChildren: () => import('./features/enrollment/enrollment.routes').then((m) => m.enrollmentRoutes),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];
