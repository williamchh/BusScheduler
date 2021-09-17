import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStopComponent } from './item-stop.component';

describe('ItemStopComponent', () => {
  let component: ItemStopComponent;
  let fixture: ComponentFixture<ItemStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemStopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
