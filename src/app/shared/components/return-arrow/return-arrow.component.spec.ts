import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnArrowComponent } from './return-arrow.component';

describe('ReturnArrowComponent', () => {
  let component: ReturnArrowComponent;
  let fixture: ComponentFixture<ReturnArrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnArrowComponent]
    });
    fixture = TestBed.createComponent(ReturnArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
