import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagaquiComponent } from './pagaqui.component';


describe('PagaquiComponent', () => {
  let component: PagaquiComponent;
  let fixture: ComponentFixture<PagaquiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagaquiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagaquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
