import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletronicosPageComponent } from './eletronicos-page.component';

describe('EletronicosPageComponent', () => {
  let component: EletronicosPageComponent;
  let fixture: ComponentFixture<EletronicosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletronicosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EletronicosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
