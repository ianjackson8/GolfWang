import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTopsComponent } from './shop-tops.component';

describe('ShopTopsComponent', () => {
  let component: ShopTopsComponent;
  let fixture: ComponentFixture<ShopTopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
