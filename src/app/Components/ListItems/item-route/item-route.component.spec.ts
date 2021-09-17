import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRouteComponent } from './item-route.component';

describe('ItemRouteComponent', () => {
  let component: ItemRouteComponent;
  let fixture: ComponentFixture<ItemRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
