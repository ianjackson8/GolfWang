import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagshipComponent } from './flagship.component';

describe('FlagshipComponent', () => {
  let component: FlagshipComponent;
  let fixture: ComponentFixture<FlagshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
