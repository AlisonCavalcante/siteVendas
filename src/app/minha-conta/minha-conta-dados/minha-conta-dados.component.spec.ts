import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaContaDadosComponent } from './minha-conta-dados.component';

describe('MinhaContaDadosComponent', () => {
  let component: MinhaContaDadosComponent;
  let fixture: ComponentFixture<MinhaContaDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaContaDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaContaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
