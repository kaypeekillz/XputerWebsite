import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSuccessComponent } from './demo-success.component';

describe('DemoSuccessComponent', () => {
  let component: DemoSuccessComponent;
  let fixture: ComponentFixture<DemoSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
