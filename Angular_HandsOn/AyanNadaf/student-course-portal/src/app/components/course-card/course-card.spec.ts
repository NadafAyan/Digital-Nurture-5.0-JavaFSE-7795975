import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseCardComponent } from './course-card';
import { CourseModel } from '../../models/course.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let store: MockStore;

  const course: CourseModel = {
    id: 1,
    name: 'Angular Basics',
    code: 'ANG101',
    credits: 3,
    gradeStatus: 'passed',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [provideMockStore({ initialState: { enrollment: { enrolledCourseIds: [] } } })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name', () => {
    const title = fixture.nativeElement.querySelector('h3');
    expect(title.textContent).toContain('Angular Basics');
  });

  it('should emit enrollRequested when button clicked', () => {
    const emitSpy = spyOn(component.enrollRequested, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should verify ngOnChanges', () => {
    const logSpy = spyOn(console, 'log');
    component.ngOnChanges({
      course: {
        currentValue: course,
        firstChange: true,
        isFirstChange: () => true,
        previousValue: null,
      },
    });

    expect(logSpy).toHaveBeenCalled();
  });
});
