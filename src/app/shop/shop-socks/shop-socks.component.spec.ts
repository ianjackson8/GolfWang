import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSocksComponent } from './shop-socks.component';

describe('ShopSocksComponent', () => {
  let component: ShopSocksComponent;
  let fixture: ComponentFixture<ShopSocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
