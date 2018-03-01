import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses120hoursComponent } from './courses120hours.component';

describe('Courses120hoursComponent', () => {
  let component: Courses120hoursComponent;
  let fixture: ComponentFixture<Courses120hoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Courses120hoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Courses120hoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
