import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitatsDaniDiazComponent } from './habilitats-dani-diaz.component';

describe('HabilitatsDaniDiazComponent', () => {
  let component: HabilitatsDaniDiazComponent;
  let fixture: ComponentFixture<HabilitatsDaniDiazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilitatsDaniDiazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabilitatsDaniDiazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
