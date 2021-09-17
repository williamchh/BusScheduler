import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStopComponent } from './form-stop.component';

describe('FormStopComponent', () => {
  let component: FormStopComponent;
  let fixture: ComponentFixture<FormStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
