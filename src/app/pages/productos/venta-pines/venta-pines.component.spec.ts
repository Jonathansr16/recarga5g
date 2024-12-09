import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPinesComponent } from './venta-pines.component';

describe('VentaPinesComponent', () => {
  let component: VentaPinesComponent;
  let fixture: ComponentFixture<VentaPinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaPinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaPinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
