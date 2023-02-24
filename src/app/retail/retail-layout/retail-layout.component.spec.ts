import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailLayoutComponent } from './retail-layout.component';

describe('RetailComponent', () => {
  let component: RetailLayoutComponent;
  let fixture: ComponentFixture<RetailLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
