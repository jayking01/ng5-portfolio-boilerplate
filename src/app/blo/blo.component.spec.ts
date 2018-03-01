import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloComponent } from './blo.component';

describe('BloComponent', () => {
  let component: BloComponent;
  let fixture: ComponentFixture<BloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
