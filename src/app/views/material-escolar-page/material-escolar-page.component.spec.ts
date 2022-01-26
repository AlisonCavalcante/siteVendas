import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEscolarPageComponent } from './material-escolar-page.component';

describe('MaterialEscolarPageComponent', () => {
  let component: MaterialEscolarPageComponent;
  let fixture: ComponentFixture<MaterialEscolarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialEscolarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialEscolarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
