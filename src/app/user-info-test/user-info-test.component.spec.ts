import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoTestComponent } from './user-info-test.component';

describe('UserInfoTestComponent', () => {
  let component: UserInfoTestComponent;
  let fixture: ComponentFixture<UserInfoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
