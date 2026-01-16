import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaCadastro } from './arma-cadastro';

describe('ArmaCadastro', () => {
  let component: ArmaCadastro;
  let fixture: ComponentFixture<ArmaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmaCadastro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmaCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
