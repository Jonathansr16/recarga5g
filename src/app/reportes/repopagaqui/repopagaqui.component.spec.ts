import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepopagaquiComponent } from './repopagaqui.component';

describe('RepopagaquiComponent', () => {
  let component: RepopagaquiComponent;
  let fixture: ComponentFixture<RepopagaquiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepopagaquiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepopagaquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
