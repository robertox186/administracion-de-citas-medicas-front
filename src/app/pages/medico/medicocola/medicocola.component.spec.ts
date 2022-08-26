import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicocolaComponent } from './medicocola.component';

describe('MedicocolaComponent', () => {
  let component: MedicocolaComponent;
  let fixture: ComponentFixture<MedicocolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicocolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicocolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
