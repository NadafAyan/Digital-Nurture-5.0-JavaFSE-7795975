import { Injectable } from '@angular/core';
import { CourseModel } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: CourseModel[] = [
    { id: 1, name: 'Angular Basics', code: 'ANG101', credits: 3, gradeStatus: 'passed' },
    { id: 2, name: 'TypeScript Essentials', code: 'TS201', credits: 2, gradeStatus: 'pending' },
    { id: 3, name: 'JavaScript Advanced', code: 'JS301', credits: 4, gradeStatus: 'failed' },
    { id: 4, name: 'Node.js Basics', code: 'NODE401', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Database Concepts', code: 'DB501', credits: 2, gradeStatus: 'pending' },
  ];

  getCourses(): CourseModel[] {
    return this.courses;
  }

  getCourseById(id: number): CourseModel | undefined {
    return this.courses.find((course) => course.id === id);
  }

  addCourse(course: CourseModel): void {
    this.courses.push(course);
  }
}
