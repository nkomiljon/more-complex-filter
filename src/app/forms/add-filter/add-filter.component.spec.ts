import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilterComponent } from './add-filter.component';

describe('AddFilterComponent', () => {
  let component: AddFilterComponent;
  let fixture: ComponentFixture<AddFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFilterComponent]
    });
    fixture = TestBed.createComponent(AddFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
