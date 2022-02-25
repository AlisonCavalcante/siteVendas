import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoEnderecoDialogComponent } from './novo-endereco-dialog.component';

describe('NovoEnderecoDialogComponent', () => {
  let component: NovoEnderecoDialogComponent;
  let fixture: ComponentFixture<NovoEnderecoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoEnderecoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoEnderecoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
