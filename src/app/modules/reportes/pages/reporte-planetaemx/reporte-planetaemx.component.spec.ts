import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportePlanetaemxComponent } from './reporte-planetaemx.component';


describe('ReportePlanetaemxComponent', () => {
  let component: ReportePlanetaemxComponent;
  let fixture: ComponentFixture<ReportePlanetaemxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportePlanetaemxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePlanetaemxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
