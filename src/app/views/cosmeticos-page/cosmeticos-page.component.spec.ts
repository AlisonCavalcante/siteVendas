import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticosPageComponent } from './cosmeticos-page.component';

describe('CosmeticosPageComponent', () => {
  let component: CosmeticosPageComponent;
  let fixture: ComponentFixture<CosmeticosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmeticosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
