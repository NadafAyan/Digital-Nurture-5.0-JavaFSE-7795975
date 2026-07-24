import { Routes } from '@angular/router';
import { EnrollmentFormComponent } from '../../components/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from '../../components/reactive-enrollment-form/reactive-enrollment-form';
import { CanDeactivateGuard } from '../../guards/can-deactivate.guard';

export const enrollmentRoutes: Routes = [
  {
    path: '',
    component: EnrollmentFormComponent,
  },
  {
    path: 'reactive',
    component: ReactiveEnrollmentFormComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];
