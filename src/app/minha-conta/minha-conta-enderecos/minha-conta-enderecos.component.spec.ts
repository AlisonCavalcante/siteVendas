import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaContaEnderecosComponent } from './minha-conta-enderecos.component';

describe('MinhaContaEnderecosComponent', () => {
  let component: MinhaContaEnderecosComponent;
  let fixture: ComponentFixture<MinhaContaEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaContaEnderecosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaContaEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
