import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternAnimationPlayerComponent } from './pattern-animation-player.component';

describe('PatternAnimationPlayerComponent', () => {
  let component: PatternAnimationPlayerComponent;
  let fixture: ComponentFixture<PatternAnimationPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternAnimationPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatternAnimationPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
