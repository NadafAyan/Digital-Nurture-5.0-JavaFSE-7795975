import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, CourseSummaryWidgetComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  constructor(public courseService: CourseService) {}
  isPortalActive = true;
  message = '';
  searchTerm = '';
  courseCount = 0;

  ngOnInit(): void {
    this.courseCount = this.courseService.getCourses().length;
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
