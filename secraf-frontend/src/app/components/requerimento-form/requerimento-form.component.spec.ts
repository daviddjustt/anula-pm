import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerimentoFormComponent } from './requerimento-form.component';

describe('RequerimentoFormComponent', () => {
  let component: RequerimentoFormComponent;
  let fixture: ComponentFixture<RequerimentoFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RequerimentoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequerimentoFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
