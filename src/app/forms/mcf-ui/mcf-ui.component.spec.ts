import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McfUiComponent } from './mcf-ui.component';

describe('McfUiComponent', () => {
  let component: McfUiComponent;
  let fixture: ComponentFixture<McfUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McfUiComponent]
    });
    fixture = TestBed.createComponent(McfUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
