import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientCoursesPage } from './client-courses.page';

describe('ClientCoursesPage', () => {
  let component: ClientCoursesPage;
  let fixture: ComponentFixture<ClientCoursesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
