import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcctLayoutComponent } from './create-acct-layout.component';

describe('CreateAcctLayoutComponent', () => {
  let component: CreateAcctLayoutComponent;
  let fixture: ComponentFixture<CreateAcctLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcctLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcctLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
