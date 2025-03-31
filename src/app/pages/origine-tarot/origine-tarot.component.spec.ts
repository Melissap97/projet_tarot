import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigineTarotComponent } from './origine-tarot.component';

describe('OrigineTarotComponent', () => {
  let component: OrigineTarotComponent;
  let fixture: ComponentFixture<OrigineTarotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrigineTarotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrigineTarotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
