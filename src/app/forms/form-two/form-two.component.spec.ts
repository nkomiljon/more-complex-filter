import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwoComponent } from './form-two.component';

describe('FormTwoComponent', () => {
  let component: FormTwoComponent;
  let fixture: ComponentFixture<FormTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTwoComponent]
    });
    fixture = TestBed.createComponent(FormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
