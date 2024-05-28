import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDaniDiazComponent } from './home-dani-diaz.component';

describe('HomeDaniDiazComponent', () => {
  let component: HomeDaniDiazComponent;
  let fixture: ComponentFixture<HomeDaniDiazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDaniDiazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDaniDiazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
