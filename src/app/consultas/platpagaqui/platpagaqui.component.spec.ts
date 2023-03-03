import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatpagaquiComponent } from './platpagaqui.component';

describe('PlatpagaquiComponent', () => {
  let component: PlatpagaquiComponent;
  let fixture: ComponentFixture<PlatpagaquiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatpagaquiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatpagaquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
