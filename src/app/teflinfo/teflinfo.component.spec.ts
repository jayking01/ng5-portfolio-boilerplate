import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeflinfoComponent } from './teflinfo.component';

describe('TeflinfoComponent', () => {
  let component: TeflinfoComponent;
  let fixture: ComponentFixture<TeflinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeflinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeflinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
