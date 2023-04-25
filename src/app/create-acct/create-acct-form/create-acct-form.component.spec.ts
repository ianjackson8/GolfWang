import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcctFormComponent } from './create-acct-form.component';

describe('CreateAcctFormComponent', () => {
  let component: CreateAcctFormComponent;
  let fixture: ComponentFixture<CreateAcctFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcctFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
