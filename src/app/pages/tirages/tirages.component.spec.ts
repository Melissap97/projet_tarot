import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiragesComponent } from './tirages.component';

describe('TiragesComponent', () => {
  let component: TiragesComponent;
  let fixture: ComponentFixture<TiragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiragesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
