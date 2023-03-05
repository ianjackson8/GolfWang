import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHatsComponent } from './shop-hats.component';

describe('ShopHatsComponent', () => {
  let component: ShopHatsComponent;
  let fixture: ComponentFixture<ShopHatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
