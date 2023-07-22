import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormComponent } from './ui-form.component';

describe('UiFormComponent', () => {
  let component: UiFormComponent;
  let fixture: ComponentFixture<UiFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiFormComponent]
    });
    fixture = TestBed.createComponent(UiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
