import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css',
})
export class CourseSummaryWidgetComponent {
  constructor(public courseService: CourseService) {}

  addSampleCourse(): void {
    this.courseService.addCourse({
      id: 6,
      name: 'Testing Basics',
      code: 'TEST601',
      credits: 2,
      gradeStatus: 'pending',
    });
  }
}
