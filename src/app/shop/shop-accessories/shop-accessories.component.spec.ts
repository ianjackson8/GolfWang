import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAccessoriesComponent } from './shop-accessories.component';

describe('ShopAccessoriesComponent', () => {
  let component: ShopAccessoriesComponent;
  let fixture: ComponentFixture<ShopAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
