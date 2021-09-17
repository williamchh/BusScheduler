import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTimescheduleComponent } from './item-timeschedule.component';

describe('ItemTimescheduleComponent', () => {
  let component: ItemTimescheduleComponent;
  let fixture: ComponentFixture<ItemTimescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTimescheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTimescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
