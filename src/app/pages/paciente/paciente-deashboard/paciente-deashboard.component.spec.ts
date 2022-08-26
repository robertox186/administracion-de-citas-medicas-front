import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteDeashboardComponent } from './paciente-deashboard.component';

describe('PacienteDeashboardComponent', () => {
  let component: PacienteDeashboardComponent;
  let fixture: ComponentFixture<PacienteDeashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteDeashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteDeashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
