import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaDisponiblesComponent } from './fecha-disponibles.component';

describe('FechaDisponiblesComponent', () => {
  let component: FechaDisponiblesComponent;
  let fixture: ComponentFixture<FechaDisponiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaDisponiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
