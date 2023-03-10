import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLayoutComponent } from './book-layout.component';

describe('BookLayoutComponent', () => {
  let component: BookLayoutComponent;
  let fixture: ComponentFixture<BookLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
