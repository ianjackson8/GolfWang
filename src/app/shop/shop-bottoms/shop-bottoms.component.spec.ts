import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBottomsComponent } from './shop-bottoms.component';

describe('ShopBottomsComponent', () => {
  let component: ShopBottomsComponent;
  let fixture: ComponentFixture<ShopBottomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBottomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopBottomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
