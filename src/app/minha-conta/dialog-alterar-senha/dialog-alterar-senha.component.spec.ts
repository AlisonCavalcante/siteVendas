import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlterarSenhaComponent } from './dialog-alterar-senha.component';

describe('DialogAlterarSenhaComponent', () => {
  let component: DialogAlterarSenhaComponent;
  let fixture: ComponentFixture<DialogAlterarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAlterarSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlterarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
