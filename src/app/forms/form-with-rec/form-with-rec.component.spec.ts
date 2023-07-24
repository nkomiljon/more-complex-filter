import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithRecComponent } from './form-with-rec.component';

describe('FormWithRecComponent', () => {
  let component: FormWithRecComponent;
  let fixture: ComponentFixture<FormWithRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormWithRecComponent]
    });
    fixture = TestBed.createComponent(FormWithRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
