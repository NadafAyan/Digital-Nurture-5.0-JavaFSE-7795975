import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CourseList } from './course-list';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';

describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideMockStore({
          initialState: { courses: { courses: [], loading: false, error: null } },
          selectors: [
            { selector: selectAllCourses, value: [{ id: 1, name: 'Angular Basics', code: 'ANG101', credits: 3, gradeStatus: 'passed' as const }] },
            { selector: selectCoursesLoading, value: false },
            { selector: selectCoursesError, value: null },
          ],
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadCourses on init', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should render mocked courses', () => {
    const renderedCards = fixture.nativeElement.querySelectorAll('app-course-card');
    expect(renderedCards.length).toBeGreaterThan(0);
  });
});
