import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaemxComponent } from './planetaemx.component';

describe('PlanetaemxComponent', () => {
  let component: PlanetaemxComponent;
  let fixture: ComponentFixture<PlanetaemxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetaemxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetaemxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
