import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlterarEmailComponent } from './dialog-alterar-email.component';

describe('DialogAlterarEmailComponent', () => {
  let component: DialogAlterarEmailComponent;
  let fixture: ComponentFixture<DialogAlterarEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAlterarEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlterarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
