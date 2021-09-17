import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBusComponent } from './item-bus.component';

describe('ItemBusComponent', () => {
  let component: ItemBusComponent;
  let fixture: ComponentFixture<ItemBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
