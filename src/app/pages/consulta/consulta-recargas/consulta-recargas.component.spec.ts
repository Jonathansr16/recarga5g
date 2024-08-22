import { ComponentFixture, TestBed } from '@angular/core/testing';
import ConsultaRecargasComponent from './consulta-recargas.component';


describe('ConsultaRecargasComponent', () => {
  let component: ConsultaRecargasComponent;
  let fixture: ComponentFixture<ConsultaRecargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaRecargasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
