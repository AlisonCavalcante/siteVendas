import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlterarEnderecoComponent } from './dialog-alterar-endereco.component';

describe('DialogAlterarEnderecoComponent', () => {
  let component: DialogAlterarEnderecoComponent;
  let fixture: ComponentFixture<DialogAlterarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAlterarEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlterarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
