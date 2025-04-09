import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriePremiumComponent } from './galerie-premium.component';

describe('GaleriePremiumComponent', () => {
  let component: GaleriePremiumComponent;
  let fixture: ComponentFixture<GaleriePremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriePremiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriePremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
