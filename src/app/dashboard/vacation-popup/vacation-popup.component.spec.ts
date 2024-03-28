import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPopupComponent } from './vacation-popup.component';

describe('VacationPopupComponent', () => {
  let component: VacationPopupComponent;
  let fixture: ComponentFixture<VacationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
