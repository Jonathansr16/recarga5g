import { ComponentFixture, TestBed } from '@angular/core/testing';
import PagoServiciosComponent from './pago-servicios.component';

describe('PagoServiciosComponent', () => {
  let component: PagoServiciosComponent;
  let fixture: ComponentFixture<PagoServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
