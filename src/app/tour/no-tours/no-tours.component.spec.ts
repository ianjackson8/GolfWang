import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoToursComponent } from './no-tours.component';

describe('NoToursComponent', () => {
  let component: NoToursComponent;
  let fixture: ComponentFixture<NoToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoToursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
