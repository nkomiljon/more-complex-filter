import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursionFormComponent } from './recursion-form.component';

describe('RecursionFormComponent', () => {
  let component: RecursionFormComponent;
  let fixture: ComponentFixture<RecursionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursionFormComponent]
    });
    fixture = TestBed.createComponent(RecursionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
