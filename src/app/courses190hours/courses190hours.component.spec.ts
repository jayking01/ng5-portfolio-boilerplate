import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses190hoursComponent } from './courses190hours.component';

describe('Courses190hoursComponent', () => {
  let component: Courses190hoursComponent;
  let fixture: ComponentFixture<Courses190hoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Courses190hoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Courses190hoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
