import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoComunComponent } from './fondo-comun.component';

describe('FondoComunComponent', () => {
  let component: FondoComunComponent;
  let fixture: ComponentFixture<FondoComunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoComunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
