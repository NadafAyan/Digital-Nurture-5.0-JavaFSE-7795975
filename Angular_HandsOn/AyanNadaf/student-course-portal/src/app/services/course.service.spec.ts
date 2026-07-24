import { TestBed } from '@angular/core/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should return initial courses', () => {
    const courses = service.getCourses();
    expect(courses.length).toBeGreaterThan(0);
  });

  it('should return a course by id', () => {
    const course = service.getCourseById(2);
    expect(course?.code).toBe('TS201');
  });

  it('should add a course', () => {
    const course = { id: 6, name: 'Testing Basics', code: 'TEST601', credits: 2, gradeStatus: 'pending' as const };
    service.addCourse(course);
    expect(service.getCourses().some((item) => item.id === 6)).toBeTrue();
  });
});
