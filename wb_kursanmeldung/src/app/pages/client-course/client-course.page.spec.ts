import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientCoursePage } from './client-course.page';

describe('ClientCoursePage', () => {
  let component: ClientCoursePage;
  let fixture: ComponentFixture<ClientCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
