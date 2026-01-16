import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaLista } from './arma-lista';

describe('ArmaLista', () => {
  let component: ArmaLista;
  let fixture: ComponentFixture<ArmaLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmaLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmaLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
