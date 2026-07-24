import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses: Course[] = [
    { id: 1, name: 'Angular Basics', code: 'ANG101', credits: 3, description: 'Learn core Angular concepts.', gradeStatus: 'Excellent' },
    { id: 2, name: 'TypeScript Essentials', code: 'TS201', credits: 2, description: 'Build strong typing habits.', gradeStatus: 'Good' },
    { id: 3, name: 'JavaScript Advanced', code: 'JS301', credits: 4, description: 'Deep dive into web scripting.', gradeStatus: 'Needs Review' },
    { id: 4, name: 'Node.js Basics', code: 'NODE401', credits: 3, description: 'Understand backend fundamentals.', gradeStatus: 'Good' },
    { id: 5, name: 'Database Concepts', code: 'DB501', credits: 2, description: 'Learn database design and queries.', gradeStatus: 'Excellent' },
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
