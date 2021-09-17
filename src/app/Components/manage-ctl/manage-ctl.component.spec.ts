import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCtlComponent } from './manage-ctl.component';

describe('ManageCtlComponent', () => {
  let component: ManageCtlComponent;
  let fixture: ComponentFixture<ManageCtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
