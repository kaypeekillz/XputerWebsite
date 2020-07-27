import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndearPageComponent } from './endear-page.component';

describe('EndearPageComponent', () => {
  let component: EndearPageComponent;
  let fixture: ComponentFixture<EndearPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndearPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndearPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
