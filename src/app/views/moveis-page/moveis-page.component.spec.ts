import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveisPageComponent } from './moveis-page.component';

describe('MoveisPageComponent', () => {
  let component: MoveisPageComponent;
  let fixture: ComponentFixture<MoveisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveisPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
