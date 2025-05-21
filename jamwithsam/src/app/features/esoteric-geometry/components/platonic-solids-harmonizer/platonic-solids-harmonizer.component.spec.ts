import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatonicSolidsHarmonizerComponent } from './platonic-solids-harmonizer.component';

describe('PlatonicSolidsHarmonizerComponent', () => {
  let component: PlatonicSolidsHarmonizerComponent;
  let fixture: ComponentFixture<PlatonicSolidsHarmonizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatonicSolidsHarmonizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatonicSolidsHarmonizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
