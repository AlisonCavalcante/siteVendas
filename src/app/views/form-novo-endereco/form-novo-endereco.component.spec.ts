import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovoEnderecoComponent } from './form-novo-endereco.component';

describe('FormNovoEnderecoComponent', () => {
  let component: FormNovoEnderecoComponent;
  let fixture: ComponentFixture<FormNovoEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNovoEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNovoEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
