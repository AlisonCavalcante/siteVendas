import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletrodomesticosPageComponent } from './eletrodomesticos-page.component';

describe('EletrodomesticosPageComponent', () => {
  let component: EletrodomesticosPageComponent;
  let fixture: ComponentFixture<EletrodomesticosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletrodomesticosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EletrodomesticosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
