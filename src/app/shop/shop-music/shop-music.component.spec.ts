import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMusicComponent } from './shop-music.component';

describe('ShopMusicComponent', () => {
  let component: ShopMusicComponent;
  let fixture: ComponentFixture<ShopMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
