import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoDeashboardComponent } from './medico-deashboard.component';

describe('MedicoDeashboardComponent', () => {
  let component: MedicoDeashboardComponent;
  let fixture: ComponentFixture<MedicoDeashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoDeashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoDeashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
