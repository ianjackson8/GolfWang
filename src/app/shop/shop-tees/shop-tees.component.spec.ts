import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTeesComponent } from './shop-tees.component';

describe('ShopTeesComponent', () => {
  let component: ShopTeesComponent;
  let fixture: ComponentFixture<ShopTeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopTeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopTeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
