import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportePagaquiComponent } from './reporte-pagaqui.component';


describe('ReportePagaquiComponent', () => {
  let component: ReportePagaquiComponent;
  let fixture: ComponentFixture<ReportePagaquiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportePagaquiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePagaquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
