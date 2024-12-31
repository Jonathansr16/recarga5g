import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecargakiPlanetaemxComponent } from './recargaki-planetaemx.component';


describe('RecargakiPlanetaemxComponent', () => {
  let component: RecargakiPlanetaemxComponent;
  let fixture: ComponentFixture<RecargakiPlanetaemxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecargakiPlanetaemxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargakiPlanetaemxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
