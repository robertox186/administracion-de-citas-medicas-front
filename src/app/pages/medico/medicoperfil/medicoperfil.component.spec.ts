import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoperfilComponent } from './medicoperfil.component';

describe('MedicoperfilComponent', () => {
  let component: MedicoperfilComponent;
  let fixture: ComponentFixture<MedicoperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
